/**
 * Created by antonhorl on 09.01.18.
 */

const
    removeTablesBauernstube = require('./removeTablesBauernstube.js'),
    removeTablesBerglerStubeHubertusStube = require('./removeTablesBerglerStubeHubertusStube.js'),
    removeTablesEdelweissKaminStube = require('./removeTablesEdelweissKaminStube.js'),
    removeTablesTeestubeTeelounge = require('./removeTablesTeestubeTeelounge.js'),
    removeTablesWaeldlerStubeKristallStube = require('./removeTablesWaeldlerStubeKristallStube.js'),
    addTablesBauernstube = require('./addTablesBauernstube.js'),
    addTablesBerglerStubeHubertusStube = require('./addTablesBerglerStubeHubertusStube.js'),
    addTablesEdelweissKaminStube = require('./addTablesEdelweissKaminStube.js'),
    addTablesWaeldlerStubeKristallStube = require('./addTablesWaeldlerStubeKristallStube.js'),
    addTablesTeestubeTeelounge = require('./addTablesTeestubeTeelounge.js');


module.exports = {
    removeTable: function (req, res, db) {
        console.log("moveTable request made to /moveTable");

        let data = JSON.stringify(req.body);

        console.log('data' + data);

        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];

        console.log('tableNumberBefore' + tableNumberBefore);
        console.log('departmentValueBefore' + departmentValueBefore);

        let splitted2 = tableNumberBefore.split(":");
        let splitted3 = departmentValueBefore.split(":");
        let splitted4 = topValueBefore.split(":");
        let splitted5 = leftValueBefore.split(":");
        let splitted6 = widthValueBefore.split(":");
        let splitted7 = heightValueBefore.split(":");

        let tableNumber = splitted2[1].substring(1, splitted2[1].length - 1);
        let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1);
        let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
        let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
        let width = splitted6[1].substring(1, splitted6[1].length - 1);
        let heightArray = splitted7[1].toString().match(/\d+/);
        let height = heightArray[0];

        console.log('height: ' + height);
        console.log('width: ' + width);
        console.log('tableNumber' + tableNumber);
        console.log('departmentValue' + departmentValue);
        console.log('topValue' + topValue);
        console.log('leftValue' + leftValue);

        removeTablesEdelweissKaminStube.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesTeestubeTeelounge.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesWaeldlerStubeKristallStube.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesBauernstube.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesBerglerStubeHubertusStube.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        setTimeout(function () {
            db.hubertusTables.find(
                {
                    "department": departmentValue,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('response tables ->' + JSON.stringify(tables));
                });
        }, 100);
    },
    addTable: function (req, res, db) {
        console.log("moveTable request made to /moveTable");

        let data = JSON.stringify(req.body);

        console.log('data' + data);

        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];

        console.log('tableNumberBefore' + tableNumberBefore);
        console.log('departmentValueBefore' + departmentValueBefore);

        let splitted2 = tableNumberBefore.split(":");
        let splitted3 = departmentValueBefore.split(":");
        let splitted4 = topValueBefore.split(":");
        let splitted5 = leftValueBefore.split(":");
        let splitted6 = widthValueBefore.split(":");
        let splitted7 = heightValueBefore.split(":");
        let tableNumber = splitted2[1].substring(1, splitted2[1].length - 1);
        let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1);
        let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
        let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
        let width = splitted6[1].substring(1, splitted6[1].length - 1);
        let heightArray = splitted7[1].toString().match(/\d+/);
        let height = heightArray[0];

        console.log('height: ' + height);
        console.log('width: ' + width);
        console.log('tableNumber' + tableNumber);
        console.log('departmentValue' + departmentValue);
        console.log('topValue' + topValue);
        console.log('leftValue' + leftValue);

        addTablesBauernstube.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesBerglerStubeHubertusStube.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesEdelweissKaminStube.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesTeestubeTeelounge.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesWaeldlerStubeKristallStube.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        setTimeout(function () {
            db.hubertusTables.find(
                {
                    "department": departmentValue,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('response tables ->' + JSON.stringify(tables));
                });
        }, 100);
    },
    getTable: function (req, res, db) {
        console.log("tables get called");
        //Get guests from Mongo DB
        db.hubertusTables.find(function (err, tables) {
            if (err) {
                res.send(err);
            }
            res.json(tables);
        });
    },
    occupyTable: function (req, res, db) {
        console.log("occupyTable request made to /occupyTable");

        let departmentValueDB = "";
        let departmentValue = "";
        let tableValueArray = [];
        let tableValue = "";
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        let informationElements2 = [];
        let value = "nAnreise";
        let teeString = "Tee";
        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(":"));
        }

        let informationElements2Length = informationElements2.length;

        console.log('splitted' + splitted);
        console.log(informationElements2);
        console.log(informationElements2Length);

        if (informationElements2Length > 1) {

            console.log("Liste");
            console.log(informationElements2[informationElements2Length - 1][0]);

            departmentValue = informationElements2[informationElements2Length - 1][0].substring(1, informationElements2[informationElements2Length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2Length - 1][0].toString().match(/\d+/g);
            tableValue = tableValueArray[0];
            if (tableValueArray[0] === "1" || tableValueArray[0] === "2" || tableValueArray[0] === "3" || tableValueArray[0] === "4" || tableValueArray[0] === "5" || tableValueArray[0] === "6") {
                console.log("TEE ---------------------");
                console.log(teeString);
                console.log(tableValueArray[0]);
                tableValue =  teeString + tableValueArray[0];
            } else if (tableValueArray[1] === "1" || tableValueArray[1] === "2" || tableValueArray[1] === "3" || tableValueArray[1] === "4") {
                tableValue = tableValueArray.join(".");
            } else {
                tableValue = tableValueArray[0];
            }

        } else {
            let umsetzen = JSON.parse(data);

            console.log(umsetzen.targetTable)
            if (umsetzen.targetTable === "1" || umsetzen.targetTable === "2" || umsetzen.targetTable === "3" || umsetzen.targetTable === "4" || umsetzen.targetTable === "5" || umsetzen.targetTable === "6") {
                console.log("TEE ---------------------");
                console.log(teeString);
                console.log(umsetzen.targetTable);
                tableValue =  teeString + umsetzen.targetTable;
                console.log(tableValue);
            } else {
                tableValue = umsetzen.targetTable;
            }

            console.log("Umsetzen in occupyTable function");
            console.log(umsetzen);

            departmentValueDB = umsetzen.targetDepartment;


            console.log(tableValue);
            console.log(departmentValueDB);
        }

        if (departmentValue === "BerglerStubeHubertusStube") {
            departmentValueDB = "berglerStubeHubertusStube";
        }
        else if (departmentValue === "Bauernstube") {
            departmentValueDB = "Bauernstube";
        }
        else if (departmentValue === "WaeldlerStubeKristallStube") {
            departmentValueDB = "waeldlerStubeKristallStube";
        }
        else if (departmentValue === "EdelweissKaminStube") {
            departmentValueDB = "edelweissKaminStube";
        }
        else if (departmentValue === "TeestubeTeelounge") {
            departmentValueDB = "teestubeTeelounge";
        }

        db.hubertusTables.update(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            },
            {
                $set: {
                    "tables.$.bgColor": "#b7b7b7",
                    "tables.$.isBesetzt": "true"
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });

        setTimeout(function () {
            db.hubertusTables.findOne(
                {
                    "department": departmentValueDB,
                    "tables.number": tableValue
                },
                {
                    "tables.$": 1,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('occupy Table response:' + JSON.stringify(tables));
                });
        }, 100);
    },
    dispenseTable: function (req, res, db) {
        console.log("dispenseTable request made to /dispenseTable");
        let dispenseTable = req.body;
        console.log(dispenseTable);
        console.log(dispenseTable.group);
        console.log('dispenseTable.groups.length');
        //console.log(dispenseTable.groups.length);
        //console.log(dispenseTable.group );
        //console.log("dispenseTable" + JSON.stringify(dispenseTable));
        if (dispenseTable.groups != null) {
            if (dispenseTable.group) {
                for (let i = 0; i < dispenseTable.group.length; i++) {
                    if (dispenseTable.groups.length > dispenseTable.group.length) {
                        console.log("111111111111");
                        db.tables.findAndModify({
                            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                            update: {
                                $unset: {
                                    ["tables.$.groups." + dispenseTable.group[i]]: 1,
                                }
                            },
                            new: false
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("No Error");
                        });
                        setTimeout(function () {
                            db.tables.findAndModify({
                                query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                                update: {
                                    $pull: {
                                        "tables.$.groups": null
                                    }
                                },
                                new: false
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("No Error");
                            });

                        }, 100);
                    } else if (dispenseTable.groups.length === dispenseTable.group.length) {
                        db.tables.findAndModify({
                            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                            update: {
                                $set: {
                                    "tables.$.bgColor": "#ffffff",
                                    "tables.$.isBesetzt": "false",
                                }, $unset: {
                                    ["tables.$.groups." + dispenseTable.group]: 1,
                                }
                            },
                            new: false
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("No Error");
                        });
                    }
                    setTimeout(function () {
                        db.tables.findAndModify({
                            query: {department: dispenseTable.department, "tables.number": dispenseTable.number,},
                            update: {
                                $pull: {
                                    "tables.$.groups": null
                                }
                            },
                            new: false
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("No Error");
                        });
                    }, 100);
                }
            } else {
                db.tables.findAndModify({
                    query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                    update: {
                        $set: {
                            "tables.$.bgColor": "#ffffff",
                            "tables.$.isBesetzt": "false",
                        }, $unset: {
                            "tables.$.groups" : 1,
                        }
                    },
                    new: false
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("No Error");
                });
            }
        } else {
            db.tables.findAndModify({
                query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                update: {
                    $set: {
                        "tables.$.bgColor": "#ffffff",
                        "tables.$.isBesetzt": "false",
                    }, $unset: {
                        "tables.$.groups" : 1,
                    }
                },
                new: false
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("No Error");
            });

        }
        setTimeout(function () {
            db.tables.find(
                {
                    department: dispenseTable.department,
                    "tables.number": dispenseTable.number
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    //  console.log("Dispense Table: " + JSON.stringify(tables));
                });
        }, 500);

    },
};
