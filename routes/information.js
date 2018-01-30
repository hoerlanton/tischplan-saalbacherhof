/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    getInformation: function (req, res, db) {
        console.log("tables get called");
        //Get guests from Mongo DB
        db.newInformationHubertus.find(function (err, information) {
            if (err) {
                res.send(err);
            }
            res.json(information);
        });
    },
    deleteInformation: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("Delete request made to /deleteInformationElement");
        let informationElementToDelete = req.body;
        console.log(JSON.stringify(informationElementToDelete));
        db.newInformationHubertus.remove({

                roomNumber: informationElementToDelete.roomNumber,
                text: informationElementToDelete.text
            },
            {
                justOne: true,
            });
        res.json(informationElementToDelete);
    },
    newInformationToTable: function (req, res, db) {

        console.log("newInformationToTables post called");
        //Get guests from Mongo DB

        console.log(req.body);
        let newInformation = req.body;

        setTimeout(function () {
            db.hubertusTables.findOne(
                {
                    "tables.number": newInformation.tableNumber
                }, {
                    "tables.$": 1,
                },
                function (err, tablesfirst) {
                    if (err) {
                        res.send(err);
                    }
                    if (tablesfirst === null) {
                        console.log("tablesfirst is null");
                        return;
                    }
                    console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                    if (!("newTraceText" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                "tables.number": newInformation.tableNumber,
                            },
                            {
                                $set: {
                                    "tables.$.newTraceText": newInformation.text,
                                    "tables.$.newTraceRoomNumber": newInformation.roomNumber,
                                    "tables.$.newTraceName": newInformation.name,
                                    "tables.$.newTraceEmployee": newInformation.employee,
                                    "tables.$.newTraceDate": newInformation.date,
                                    "tables.$.newTraceTableNumber": newInformation.tableNumber
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("newTraceText1" in tablesfirst.tables[0])) {

                        db.hubertusTables.update(
                            {
                                "tables.number": newInformation.tableNumber,
                            },
                            {
                                $set: {
                                    "tables.$.newTraceText1": newInformation.text,
                                    "tables.$.newTraceRoomNumber1": newInformation.roomNumber,
                                    "tables.$.newTraceName1": newInformation.name,
                                    "tables.$.newTraceEmployee1": newInformation.employee,
                                    "tables.$.newTraceDate1": newInformation.date,
                                    "tables.$.newTraceTableNumber1": newInformation.tableNumber
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("newTraceText2" in tablesfirst.tables[0])) {

                        db.hubertusTables.update(
                            {
                                "tables.number": newInformation.tableNumber,
                            },
                            {
                                $set: {
                                    "tables.$.newTraceText2": newInformation.text,
                                    "tables.$.newTraceRoomNumber2": newInformation.roomNumber,
                                    "tables.$.newTraceName2": newInformation.name,
                                    "tables.$.newTraceEmployee2": newInformation.employee,
                                    "tables.$.newTraceDate2": newInformation.date,
                                    "tables.$.newTraceTableNumber2": newInformation.tableNumber
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }
                }, 300);
        });

        setTimeout(function () {
            db.hubertusTables.findOne(
                {
                    "tables.number": newInformation.tableNumber
                },
                {
                    "tables.$": 1,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log(JSON.stringify(tables));
                });
        }, 500);
    },
    newInformationToBox: function (req, res, db) {
        console.log("newInformationToBox post called");
        //Get guests from Mongo DB
        console.log(req.body);
        let newInformation = req.body;
        db.newInformationHubertus.save(newInformation, function (err, newInformation) {
            if (err) {
                res.send(err);
            }
            res.json(newInformation);
        });
    },
};