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
                    "tables.$.nameValue2": 1,
                    "tables.$.zimmernummerValue2": 1,
                    "tables.$.anreiseValue2": 1,
                    "tables.$.abreiseValue2": 1,
                    "tables.$.personenAnzahlValue2": 1,
                    "tables.$.notiz1Value2": 1,
                    "tables.$.notiz2Value2": 1,
                    "tables.$.trace2": 1,
                    "tables.$.bemerkungValue2": 1,
                    "tables.$.nameValue3": 1,
                    "tables.$.zimmernummerValue3": 1,
                    "tables.$.anreiseValue3": 1,
                    "tables.$.abreiseValue3": 1,
                    "tables.$.personenAnzahlValue3": 1,
                    "tables.$.notiz1Value3": 1,
                    "tables.$.notiz2Value3": 1,
                    "tables.$.trace3": 1,
                    "tables.$.bemerkungValue3": 1,
                    "tables.$.nameValue4": 1,
                    "tables.$.zimmernummerValue4": 1,
                    "tables.$.anreiseValue4": 1,
                    "tables.$.abreiseValue4": 1,
                    "tables.$.personenAnzahlValue4": 1,
                    "tables.$.notiz1Value4": 1,
                    "tables.$.notiz2Value4": 1,
                    "tables.$.trace4": 1,
                    "tables.$.bemerkungValue4": 1,
                    "tables.$.nameValue5": 1,
                    "tables.$.zimmernummerValue5": 1,
                    "tables.$.anreiseValue5": 1,
                    "tables.$.abreiseValue5": 1,
                    "tables.$.personenAnzahlValue5": 1,
                    "tables.$.notiz1Value5": 1,
                    "tables.$.notiz2Value5": 1,
                    "tables.$.trace5": 1,
                    "tables.$.bemerkungValue5": 1,
                    "tables.$.nameValue6": 1,
                    "tables.$.zimmernummerValue6": 1,
                    "tables.$.anreiseValue6": 1,
                    "tables.$.abreiseValue6": 1,
                    "tables.$.personenAnzahlValue6": 1,
                    "tables.$.notiz1Value6": 1,
                    "tables.$.notiz2Value6": 1,
                    "tables.$.trace6": 1,
                    "tables.$.bemerkungValue6": 1,
                    "tables.$.nameValue7": 1,
                    "tables.$.zimmernummerValue7": 1,
                    "tables.$.anreiseValue7": 1,
                    "tables.$.abreiseValue7": 1,
                    "tables.$.personenAnzahlValue7": 1,
                    "tables.$.notiz1Value7": 1,
                    "tables.$.notiz2Value7": 1,
                    "tables.$.trace7": 1,
                    "tables.$.bemerkungValue7": 1,
                    "tables.$.nameValue8": 1,
                    "tables.$.zimmernummerValue8": 1,
                    "tables.$.anreiseValue8": 1,
                    "tables.$.abreiseValue8": 1,
                    "tables.$.personenAnzahlValue8": 1,
                    "tables.$.notiz1Value8": 1,
                    "tables.$.notiz2Value8": 1,
                    "tables.$.trace8": 1,
                    "tables.$.bemerkungValue8": 1,
                    "tables.$.nameValue9": 1,
                    "tables.$.zimmernummerValue9": 1,
                    "tables.$.anreiseValue9": 1,
                    "tables.$.abreiseValue9": 1,
                    "tables.$.personenAnzahlValue9": 1,
                    "tables.$.notiz1Value9": 1,
                    "tables.$.notiz2Value9": 1,
                    "tables.$.trace9": 1,
                    "tables.$.bemerkungValue9": 1,
                    "tables.$.nameValue10": 1,
                    "tables.$.zimmernummerValue10": 1,
                    "tables.$.anreiseValue10": 1,
                    "tables.$.abreiseValue10": 1,
                    "tables.$.personenAnzahlValue10": 1,
                    "tables.$.notiz1Value10": 1,
                    "tables.$.notiz2Value10": 1,
                    "tables.$.trace10": 1,
                    "tables.$.bemerkungValue10": 1,
                    "tables.$.nameValue11": 1,
                    "tables.$.zimmernummerValue11": 1,
                    "tables.$.anreiseValue11": 1,
                    "tables.$.abreiseValue11": 1,
                    "tables.$.personenAnzahlValue11": 1,
                    "tables.$.notiz1Value11": 1,
                    "tables.$.notiz2Value11": 1,
                    "tables.$.trace11": 1,
                    "tables.$.bemerkungValue11": 1,
                    "tables.$.nameValue12": 1,
                    "tables.$.zimmernummerValue12": 1,
                    "tables.$.anreiseValue12": 1,
                    "tables.$.abreiseValue12": 1,
                    "tables.$.personenAnzahlValue12": 1,
                    "tables.$.notiz1Value12": 1,
                    "tables.$.notiz2Value12": 1,
                    "tables.$.trace12": 1,
                    "tables.$.bemerkungValue12": 1,
                    "tables.$.nameValue13": 1,
                    "tables.$.zimmernummerValue13": 1,
                    "tables.$.anreiseValue13": 1,
                    "tables.$.abreiseValue13": 1,
                    "tables.$.personenAnzahlValue13": 1,
                    "tables.$.notiz1Value13": 1,
                    "tables.$.notiz2Value13": 1,
                    "tables.$.trace13": 1,
                    "tables.$.bemerkungValue13": 1,
                    "tables.$.nameValue14": 1,
                    "tables.$.zimmernummerValue14": 1,
                    "tables.$.anreiseValue14": 1,
                    "tables.$.abreiseValue14": 1,
                    "tables.$.personenAnzahlValue14": 1,
                    "tables.$.notiz1Value14": 1,
                    "tables.$.notiz2Value14": 1,
                    "tables.$.trace14": 1,
                    "tables.$.bemerkungValue14": 1,
                    "tables.$.nameValue15": 1,
                    "tables.$.zimmernummerValue15": 1,
                    "tables.$.anreiseValue15": 1,
                    "tables.$.abreiseValue15": 1,
                    "tables.$.personenAnzahlValue15": 1,
                    "tables.$.notiz1Value15": 1,
                    "tables.$.notiz2Value15": 1,
                    "tables.$.trace15": 1,
                    "tables.$.bemerkungValue15": 1,
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


        console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + "tableValue" + tableValue + "departmentvalue" + departmentValue);


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
                                    "tables.$.bemerkungValue": bemerkungValue
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
                                    "tables.$.notiz1Value2": notiz1Value,
                                    "tables.$.notiz2Value2": notiz2Value,
                                    "tables.$.trace2": trace,
                                    "tables.$.bemerkungValue2": bemerkungValue
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
                                    "tables.$.notiz1Value3": notiz1Value,
                                    "tables.$.notiz2Value3": notiz2Value,
                                    "tables.$.trace3": trace,
                                    "tables.$.bemerkungValue3": bemerkungValue
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }   else if (!("nameValue4" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue4": nameValue,
                                    "tables.$.zimmernummerValue4": zimmernummerValue,
                                    "tables.$.anreiseValue4": anreiseValue,
                                    "tables.$.abreiseValue4": abreiseValue,
                                    "tables.$.personenAnzahlValue4": personenAnzahlValue,
                                    "tables.$.notiz1Value4": notiz1Value,
                                    "tables.$.notiz2Value4": notiz2Value,
                                    "tables.$.trace4": trace,
                                    "tables.$.bemerkungValue4": bemerkungValue
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }   else if (!("nameValue5" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue5": nameValue,
                                    "tables.$.zimmernummerValue5": zimmernummerValue,
                                    "tables.$.anreiseValue5": anreiseValue,
                                    "tables.$.abreiseValue5": abreiseValue,
                                    "tables.$.personenAnzahlValue5": personenAnzahlValue,
                                    "tables.$.notiz1Value5": notiz1Value,
                                    "tables.$.notiz2Value5": notiz2Value,
                                    "tables.$.trace5": trace,
                                    "tables.$.bemerkungValue5": bemerkungValue
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }   else if (!("nameValue6" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue6": nameValue,
                                    "tables.$.zimmernummerValue6": zimmernummerValue,
                                    "tables.$.anreiseValue6": anreiseValue,
                                    "tables.$.abreiseValue6": abreiseValue,
                                    "tables.$.personenAnzahlValue6": personenAnzahlValue,
                                    "tables.$.notiz1Value6": notiz1Value,
                                    "tables.$.notiz2Value6": notiz2Value,
                                    "tables.$.trace6": trace,
                                    "tables.$.bemerkungValue6": bemerkungValue
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    }    else if (!("nameValue7" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue7": nameValue,
                                    "tables.$.zimmernummerValue7": zimmernummerValue,
                                    "tables.$.anreiseValue7": anreiseValue,
                                    "tables.$.abreiseValue7": abreiseValue,
                                    "tables.$.personenAnzahlValue7": personenAnzahlValue,
                                    "tables.$.notiz1Value7": notiz1Value,
                                    "tables.$.notiz2Value7": notiz2Value,
                                    "tables.$.trace7": trace,
                                    "tables.$.bemerkungValue7": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue8" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue8": nameValue,
                                    "tables.$.zimmernummerValue8": zimmernummerValue,
                                    "tables.$.anreiseValue8": anreiseValue,
                                    "tables.$.abreiseValue8": abreiseValue,
                                    "tables.$.personenAnzahlValue8": personenAnzahlValue,
                                    "tables.$.notiz1Value8": notiz1Value,
                                    "tables.$.notiz2Value8": notiz2Value,
                                    "tables.$.trace8": trace,
                                    "tables.$.bemerkungValue8": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue9" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue9": nameValue,
                                    "tables.$.zimmernummerValue9": zimmernummerValue,
                                    "tables.$.anreiseValue9": anreiseValue,
                                    "tables.$.abreiseValue9": abreiseValue,
                                    "tables.$.personenAnzahlValue9": personenAnzahlValue,
                                    "tables.$.notiz1Value9": notiz1Value,
                                    "tables.$.notiz2Value9": notiz2Value,
                                    "tables.$.trace9": trace,
                                    "tables.$.bemerkungValue9": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue10" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue10": nameValue,
                                    "tables.$.zimmernummerValue10": zimmernummerValue,
                                    "tables.$.anreiseValue10": anreiseValue,
                                    "tables.$.abreiseValue10": abreiseValue,
                                    "tables.$.personenAnzahlValue10": personenAnzahlValue,
                                    "tables.$.notiz1Value10": notiz1Value,
                                    "tables.$.notiz2Value10": notiz2Value,
                                    "tables.$.trace10": trace,
                                    "tables.$.bemerkungValue10": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue11" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue11": nameValue,
                                    "tables.$.zimmernummerValue11": zimmernummerValue,
                                    "tables.$.anreiseValue11": anreiseValue,
                                    "tables.$.abreiseValue11": abreiseValue,
                                    "tables.$.personenAnzahlValue11": personenAnzahlValue,
                                    "tables.$.notiz1Value11": notiz1Value,
                                    "tables.$.notiz2Value11": notiz2Value,
                                    "tables.$.trace11": trace,
                                    "tables.$.bemerkungValue11": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue12" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue12": nameValue,
                                    "tables.$.zimmernummerValue12": zimmernummerValue,
                                    "tables.$.anreiseValue12": anreiseValue,
                                    "tables.$.abreiseValue12": abreiseValue,
                                    "tables.$.personenAnzahlValue12": personenAnzahlValue,
                                    "tables.$.notiz1Value12": notiz1Value,
                                    "tables.$.notiz2Value12": notiz2Value,
                                    "tables.$.trace12": trace,
                                    "tables.$.bemerkungValue12": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue13" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue13": nameValue,
                                    "tables.$.zimmernummerValue13": zimmernummerValue,
                                    "tables.$.anreiseValue13": anreiseValue,
                                    "tables.$.abreiseValue13": abreiseValue,
                                    "tables.$.personenAnzahlValue13": personenAnzahlValue,
                                    "tables.$.notiz1Value13": notiz1Value,
                                    "tables.$.notiz2Value13": notiz2Value,
                                    "tables.$.trace13": trace,
                                    "tables.$.bemerkungValue13": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue14" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue14": nameValue,
                                    "tables.$.zimmernummerValue14": zimmernummerValue,
                                    "tables.$.anreiseValue14": anreiseValue,
                                    "tables.$.abreiseValue14": abreiseValue,
                                    "tables.$.personenAnzahlValue14": personenAnzahlValue,
                                    "tables.$.notiz1Value14": notiz1Value,
                                    "tables.$.notiz2Value14": notiz2Value,
                                    "tables.$.trace14": trace,
                                    "tables.$.bemerkungValue14": bemerkungValue,
                                }
                            }, function (err, tables) {
                                if (err) {
                                    console.log("Error");
                                }
                                console.log("addInformationToTable updated successfully");
                            });
                    } else if (!("nameValue15" in tablesfirst.tables[0])) {
                        db.hubertusTables.update(
                            {
                                department: departmentValueDB,
                                "tables.number": tableValue
                            },
                            {
                                $set: {
                                    "tables.$.nameValue15": nameValue,
                                    "tables.$.zimmernummerValue15": zimmernummerValue,
                                    "tables.$.anreiseValue15": anreiseValue,
                                    "tables.$.abreiseValue15": abreiseValue,
                                    "tables.$.personenAnzahlValue15": personenAnzahlValue,
                                    "tables.$.notiz1Value15": notiz1Value,
                                    "tables.$.notiz2Value15": notiz2Value,
                                    "tables.$.trace15": trace,
                                    "tables.$.bemerkungValue15": bemerkungValue,
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
};
