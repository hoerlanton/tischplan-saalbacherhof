/**
 * Created by antonhorl on 09.01.18.
 */

const
    moveTablesBauernstube = require('./moveTablesBauernstube.js'),
    moveTablesBerglerStubeHubertusStube = require('./moveTablesBerglerStubeHubertusStube.js'),
    moveTablesEdelweissKaminStube = require('./moveTablesEdelweissKaminStube.js'),
    moveTablesTeestubeTeelounge = require('./moveTablesTeestubeTeelounge.js'),
    moveTablesWaeldlerStubeKristallStube = require('./moveTablesWaeldlerStubeKristallStube.js');

module.exports = {
    moveTable: function (req, res, db) {
        console.log("moveTable request made to /moveTable");

        let tableValue = "";
        let data = JSON.stringify(req.body);
        console.log('data -> ' + data);
        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];
        console.log('HOI' + tableNumberBefore);
        console.log('HOI 2' + departmentValueBefore);
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
        //berglerStubeHubertusStube
        //50

        console.log('tableNumber' + tableNumber);
        console.log('departmentValue' + departmentValue);
        console.log('topValue' + topValue);
        console.log('leftValue' + leftValue);


        moveTablesBauernstube.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        moveTablesBerglerStubeHubertusStube.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        moveTablesEdelweissKaminStube.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        moveTablesTeestubeTeelounge.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        moveTablesWaeldlerStubeKristallStube.moveTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

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
        //JSON string is parsed to a JSON object
        console.log("occupyTable request made to /occupyTable");
        //console.log(JSON.stringify(req.body));
        let departmentValueDB = "";
        let departmentValue = "";
        let tableValueArray = [];
        let tableValue = "";
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        console.log(splitted);
        let informationElements2 = [];
        let value = "nAnreise";
        let infoElementString = "";
        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(":"));
        }
        console.log(informationElements2);
        let informationElements2Length = informationElements2.length;
        console.log(informationElements2Length);
        infoElementString = JSON.stringify(informationElements2);
        if (infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
            console.log("Im-Haus-Liste");
            console.log(informationElements2[informationElements2Length - 1][0]);
            departmentValue = informationElements2[informationElements2Length - 1][0].substring(1, informationElements2[informationElements2Length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2Length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else if (infoElementString.indexOf('nTrace') != -1) {
            console.log("Trace");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else {
            console.log("Anreise");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2Length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
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
        //JSON string is parsed to a JSON object
        console.log("dispenseTable request made to /dispenseTable");
        let dispenseTable = req.body;
        console.log("dispenseTable" + JSON.stringify(dispenseTable));
        db.hubertusTables.findAndModify({
            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
            update: {
                $set: {
                    "tables.$.bgColor": "#ffffff",
                    "tables.$.isBesetzt": "false",
                }, $unset: {
                    "tables.$.nameValue": 1,
                    "tables.$.zimmernummerValue": 1,
                    "tables.$.anreiseValue": 1,
                    "tables.$.abreiseValue": 1,
                    "tables.$.personenAnzahlValue": 1,
                    "tables.$.notiz1Value": 1,
                    "tables.$.notiz2Value": 1,
                    "tables.$.trace": 1,
                    "tables.$.bemerkungValue": 1,
                    "tables.$.bemerkungValue1": 1,
                    "tables.$.bemerkungValue2": 1,
                    "tables.$.nameValue2": 1,
                    "tables.$.zimmernummerValue2": 1,
                    "tables.$.anreiseValue2": 1,
                    "tables.$.abreiseValue2": 1,
                    "tables.$.personenAnzahlValue2": 1,
                    "tables.$.notiz3Value": 1,
                    "tables.$.notiz4Value": 1,
                    "tables.$.trace2": 1,
                    "tables.$.bemerkungValue3": 1,
                    "tables.$.bemerkungValue4": 1,
                    "tables.$.bemerkungValue5": 1,
                    "tables.$.nameValue3": 1,
                    "tables.$.zimmernummerValue3": 1,
                    "tables.$.anreiseValue3": 1,
                    "tables.$.abreiseValue3": 1,
                    "tables.$.personenAnzahlValue3": 1,
                    "tables.$.notiz5Value": 1,
                    "tables.$.notiz6Value": 1,
                    "tables.$.trace3": 1,
                    "tables.$.bemerkungValue6": 1,
                    "tables.$.bemerkungValue7": 1,
                    "tables.$.bemerkungValue8": 1,
                    "tables.$.newInformation": 1,
                    "tables.$.newInformation1": 1,
                    "tables.$.newInformation2": 1,
                    "tables.$.newTraceDate": 1,
                    "tables.$.newTraceText": 1,
                    "tables.$.newTraceRoomNumber": 1,
                    "tables.$.newTraceName": 1,
                    "tables.$.newTraceEmployee": 1,
                    "tables.$.newTraceText1": 1,
                    "tables.$.newTraceRoomNumber1": 1,
                    "tables.$.newTraceName1": 1,
                    "tables.$.newTraceEmployee1": 1,
                    "tables.$.newTraceDate1": 1,
                    "tables.$.newTraceText2": 1,
                    "tables.$.newTraceRoomNumber2": 1,
                    "tables.$.newTraceName2": 1,
                    "tables.$.newTraceEmployee2": 1,
                    "tables.$.newTraceDate2": 1,
                    "tables.$.newTraceTableNumber": 1,
                    "tables.$.newTraceTableNumber1": 1,
                    "tables.$.newTraceTableNumber2": 1


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
            db.hubertusTables.find(
                {
                    department: dispenseTable.department,
                    "tables.number": dispenseTable.number
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("Dispense Table: " + JSON.stringify(tables));
                });
        }, 100);
    },
    addInformationToTable: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("addInformationToTable request made to /addInformationToTable");
        console.log(JSON.stringify("-------->" + req.body));
        let data = JSON.stringify(req.body),
            splitted = data.split("\\"),
            informationElements2 = [],
            departmentValueDB = "",
            nameValue = "",
            zimmernummerValue = "",
            anreiseValue = "",
            abreiseValue = "",
            personenAnzahlValue = "",
            notiz2Value = "",
            notiz1Value = "",
            departmentValue = "",
            tableValue = "",
            tableValueArray = [],
            trace = "",
            bemerkungValue = "",
            bemerkungValue1 = "",
            bemerkungValue2 = "",
            value = "nAnreise",
            infoElementString = "",
            bermerkungValueConcatenated = "";

        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        infoElementString = JSON.stringify(splitted);

        console.log('informationElements2 length: -> ' + informationElements2.length);

        console.log(informationElements2);
        console.log(informationElements2.includes('nTrace'));
        console.log(informationElements2.includes('nAnreise'));


        console.log(informationElements2[3][1]);

        if (infoElementString.indexOf(value) != -1) {
            console.log('!!!!!!!!!!!!<:::::::::::::::::::::::::::::::::::::::');
        }

        if (infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nTrace') === -1) {
            console.log("Im Haus Liste gedropped");
            nameValue = informationElements2[0].substring(1, informationElements2[0].length);
            zimmernummerValue = informationElements2[1].substring(1, informationElements2[1].length);
            anreiseValue = informationElements2[2].substring(1, informationElements2[2].length);
            abreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
            personenAnzahlValue = informationElements2[4].substring(1, informationElements2[4].length);
            notiz1Value = informationElements2[5].substring(1, informationElements2[5].length);
            notiz2Value = informationElements2[6].substring(1, informationElements2[6].length);
            bemerkungValue = informationElements2[7].substring(1, informationElements2[7].length);
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];
            if (informationElements2.length === 10) {
                bemerkungValue += informationElements2[8].substring(1, informationElements2[8].length);
            }
            if (informationElements2.length === 11) {
                bemerkungValue += informationElements2[8].substring(1, informationElements2[8].length);
                bemerkungValue += informationElements2[9].substring(1, informationElements2[9].length);
            }
            if (informationElements2.length === 12) {
                bemerkungValue += informationElements2[8].substring(1, informationElements2[8].length);
                bemerkungValue += informationElements2[9].substring(1, informationElements2[9].length);
                bemerkungValue += informationElements2[10].substring(1, informationElements2[10].length);
            }

        } else if (infoElementString.indexOf('nTrace') != -1) {
            console.log("Trace Liste gedropped");
            zimmernummerValue = informationElements2[0].substring(1, informationElements2[0].length);
            nameValue = informationElements2[1].substring(1, informationElements2[1].length);
            anreiseValue = informationElements2[3].substring(1, informationElements2[3].length);
            abreiseValue = informationElements2[4].substring(1, informationElements2[4].length);
            trace = informationElements2[5].substring(1, informationElements2[5].length);
            if (informationElements2.length > 7) {
                trace = trace + informationElements2[6].substring(1, informationElements2[6].length);
            }
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else {
            console.log("Anreise Liste gedropped");
            nameValue = informationElements2[0].substring(1, informationElements2[0].length);
            zimmernummerValue = informationElements2[1].substring(1, informationElements2[1].length);
            abreiseValue = informationElements2[2].substring(1, informationElements2[2].length);
            personenAnzahlValue = informationElements2[3].substring(1, informationElements2[3].length);
            notiz1Value = informationElements2[4].substring(1, informationElements2[4].length);
            notiz2Value = informationElements2[5].substring(1, informationElements2[5].length);
            bemerkungValue = informationElements2[6].substring(1, informationElements2[6].length);

            if (informationElements2.length === 11) {
                bemerkungValue = bemerkungValue + informationElements2[7].substring(1, informationElements2[7].length);
                bemerkungValue = bemerkungValue + informationElements2[8].substring(1, informationElements2[8].length);
                bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2].substring(1, informationElements2[informationElements2.length - 2].length);
            } else if (informationElements2.length === 10) {
                bemerkungValue = bemerkungValue + informationElements2[7].substring(1, informationElements2[7].length);
                bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2].substring(1, informationElements2[informationElements2.length - 2].length);
            } else if (informationElements2.length === 9) {
                bemerkungValue = bemerkungValue + informationElements2[7].substring(1, informationElements2[7].length);
            }
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        }


        console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + bemerkungValue1 + bemerkungValue2 + "tableValue" + tableValue + "departmentvalue" + departmentValue);


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
        console.log(departmentValueDB);
        setTimeout(function () {
            db.hubertusTables.findOne(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                },
                {
                    "tables.$": 1,
                },
                function (err, tablesfirst) {
                    if (err) {
                        res.send(err);
                    }
                    if (tablesfirst === null) {
                        console.log("tablesfirst is null");
                        console.log(tablesfirst);
                        return;
                    }
                    console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                    console.log("nameValue" in tablesfirst.tables[0]);
                    if (!("nameValue" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue": nameValue,
                                    "tables.$.zimmernummerValue": zimmernummerValue,
                                    "tables.$.anreiseValue": anreiseValue,
                                    "tables.$.abreiseValue": abreiseValue,
                                    "tables.$.personenAnzahlValue": personenAnzahlValue,
                                    "tables.$.notiz1Value": notiz1Value,
                                    "tables.$.notiz2Value": notiz2Value,
                                    "tables.$.trace": trace,
                                    "tables.$.bemerkungValue": bemerkungValue,
                                    "tables.$.bemerkungValue1": bemerkungValue1,
                                    "tables.$.bemerkungValue2": bemerkungValue2
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue2" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue2": nameValue,
                                    "tables.$.zimmernummerValue2": zimmernummerValue,
                                    "tables.$.anreiseValue2": anreiseValue,
                                    "tables.$.abreiseValue2": abreiseValue,
                                    "tables.$.personenAnzahlValue2": personenAnzahlValue,
                                    "tables.$.notiz3Value": notiz1Value,
                                    "tables.$.notiz4Value": notiz2Value,
                                    "tables.$.trace2": trace,
                                    "tables.$.bemerkungValue3": bemerkungValue,
                                    "tables.$.bemerkungValue4": bemerkungValue1,
                                    "tables.$.bemerkungValue5": bemerkungValue2
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue3" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue3": nameValue,
                                    "tables.$.zimmernummerValue3": zimmernummerValue,
                                    "tables.$.anreiseValue3": anreiseValue,
                                    "tables.$.abreiseValue3": abreiseValue,
                                    "tables.$.personenAnzahlValue3": personenAnzahlValue,
                                    "tables.$.notiz5Value": notiz1Value,
                                    "tables.$.notiz6Value": notiz2Value,
                                    "tables.$.trace3": trace,
                                    "tables.$.bemerkungValue6": bemerkungValue,
                                    "tables.$.bemerkungValue7": bemerkungValue1,
                                    "tables.$.bemerkungValue8": bemerkungValue2
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }
                });
        }, 200);

        setTimeout(function () {
            db.hubertusTables.findOne(
                {
                    department: departmentValueDB,
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
                    console.log(JSON.stringify(tables));
                });
        }, 700);
    }
}
