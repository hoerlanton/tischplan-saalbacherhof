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

            db.hubertusTables.update(
                {
                    "tables.number": newInformation.tableNumber,
                },
                {
                    $push: {
                        "tables.$.groups": {
                            "newTraceText": newInformation.text,
                            "newTraceRoomNumber": newInformation.roomNumber,
                            "newTraceName": newInformation.name,
                            "newTraceEmployee": newInformation.employee,
                            "newTraceDate": newInformation.date,
                            "newTraceTableNumber": newInformation.tableNumber
                        }
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addInformationToTable updated successfully");
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