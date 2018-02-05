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
        } else if (infoElementString.indexOf(value) === -1 && informationElements2.length > 1) {
            console.log("Anreise");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2Length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else {
            let test = JSON.parse(data);
            console.log("UMSETZEN! occupy");
            console.log(test);
            departmentValueDB = test.targetDepartment;
            tableValue = test.number;
            console.log(tableValue);
            console.log(departmentValueDB);
            //test[0].department = test[1].targetDepartment;
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
        console.log(JSON.stringify(req.body));
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

        let zimmernummerValue3;
        let nameValue3;
        let personenAnzahlValue3;
        let anreiseValue3;
        let abreiseValue3;
        let trace3;
        let notiz2Value3;
        let notiz1Value3;
        let bemerkungValue3;

        let zimmernummerValue2;
        let nameValue2;
        let personenAnzahlValue2;
        let anreiseValue2;
        let abreiseValue2;
        let trace2;
        let notiz2Value2;
        let notiz1Value2;
        let bemerkungValue2;

        let zimmernummerValue4;
        let nameValue4;
        let personenAnzahlValue4;
        let anreiseValue4;
        let abreiseValue4;
        let trace4;
        let notiz2Value4;
        let notiz1Value4;
        let bemerkungValue4;

        let zimmernummerValue5;
        let nameValue5;
        let personenAnzahlValue5;
        let anreiseValue5;
        let abreiseValue5;
        let trace5;
        let notiz2Value5;
        let notiz1Value5;
        let bemerkungValue5;

        let zimmernummerValue6;
        let nameValue6;
        let personenAnzahlValue6;
        let anreiseValue6;
        let abreiseValue6;
        let trace6;
        let notiz2Value6;
        let notiz1Value6;
        let bemerkungValue6;

        let zimmernummerValue7;
        let nameValue7;
        let personenAnzahlValue7;
        let anreiseValue7;
        let abreiseValue7;
        let trace7;
        let notiz2Value7;
        let notiz1Value7;
        let bemerkungValue7;

        let zimmernummerValue8;
        let nameValue8;
        let personenAnzahlValue8;
        let anreiseValue8;
        let abreiseValue8;
        let trace8;
        let notiz2Value8;
        let notiz1Value8;
        let bemerkungValue8;

        let zimmernummerValue9;
        let nameValue9;
        let personenAnzahlValue9;
        let anreiseValue9;
        let abreiseValue9;
        let trace9;
        let notiz2Value9;
        let notiz1Value9;
        let bemerkungValue9;

        let zimmernummerValue10;
        let nameValue10;
        let personenAnzahlValue10;
        let anreiseValue10;
        let abreiseValue10;
        let trace10;
        let notiz2Value10;
        let notiz1Value10;
        let bemerkungValue10;

        let zimmernummerValue11;
        let nameValue11;
        let personenAnzahlValue11;
        let anreiseValue11;
        let abreiseValue11;
        let trace11;
        let notiz2Value11;
        let notiz1Value11;
        let bemerkungValue11;

        let zimmernummerValue12;
        let nameValue12;
        let personenAnzahlValue12;
        let anreiseValue12;
        let abreiseValue12;
        let trace12;
        let notiz2Value12;
        let notiz1Value12;
        let bemerkungValue12;

        let zimmernummerValue13;
        let nameValue13;
        let personenAnzahlValue13;
        let anreiseValue13;
        let abreiseValue13;
        let trace13;
        let notiz2Value13;
        let notiz1Value13;
        let bemerkungValue13;

        let zimmernummerValue14;
        let nameValue14;
        let personenAnzahlValue14;
        let anreiseValue14;
        let abreiseValue14;
        let trace14;
        let notiz2Value14;
        let notiz1Value14;
        let bemerkungValue14;

        let zimmernummerValue15;
        let nameValue15;
        let personenAnzahlValue15;
        let anreiseValue15;
        let abreiseValue15;
        let trace15;
        let notiz2Value15;
        let notiz1Value15;
        let bemerkungValue15;

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


        //console.log(informationElements2[3][1]);

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
            for (let i = 5; i < informationElements2.length - 1; i++) {
                trace += informationElements2[i].substring(1, informationElements2[i].length) + ", ";
            };
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else if (infoElementString.indexOf(value) === -1 && informationElements2.length > 1) {
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
        } else {
            console.log("UMSETZEN!!!!!!");
            let test = JSON.parse(data);
            console.log(test);
            zimmernummerValue = test[0].zimmernummerValue;
            nameValue = test[0].nameValue;
            personenAnzahlValue = test[0].personenAnzahlValue;
            anreiseValue = test[0].anreiseValue;
            abreiseValue = test[0].abreiseValue;
            trace = test[0].trace;
            notiz2Value = test[0].notiz2Value;
            notiz1Value = test[0].notiz1Value;
            bemerkungValue = test[0].bemerkungValue;
            departmentValueDB = test[1].targetDepartment;
            tableValue = test[1].targetTable;
            test[0].department = test[1].targetDepartment;

            zimmernummerValue2 = test[0].zimmernummerValue2;
            nameValue2 = test[0].nameValue2;
            personenAnzahlValue2 = test[0].personenAnzahlValue2;
            anreiseValue2 = test[0].anreiseValue2;
            abreiseValue2 = test[0].abreiseValue2;
            trace2 = test[0].trace2;
            notiz2Value2 = test[0].notiz2Value2;
            notiz1Value2 = test[0].notiz1Value2;
            bemerkungValue2 = test[0].bemerkungValue2;

            zimmernummerValue3 = test[0].zimmernummerValue3;
            nameValue3 = test[0].nameValue3;
            personenAnzahlValue3 = test[0].personenAnzahlValue3;
            anreiseValue3 = test[0].anreiseValue3;
            abreiseValue3 = test[0].abreiseValue3;
            trace3 = test[0].trace3;
            notiz2Value3 = test[0].notiz2Value3;
            notiz1Value3 = test[0].notiz1Value3;
            bemerkungValue3 = test[0].bemerkungValue3;

            zimmernummerValue4 = test[0].zimmernummerValue4;
            nameValue4 = test[0].nameValue4;
            personenAnzahlValue4 = test[0].personenAnzahlValue4;
            anreiseValue4 = test[0].anreiseValue4;
            abreiseValue4 = test[0].abreiseValue4;
            trace4 = test[0].trace4;
            notiz2Value4 = test[0].notiz2Value4;
            notiz1Value4 = test[0].notiz1Value4;
            bemerkungValue4 = test[0].bemerkungValue4;

            zimmernummerValue5 = test[0].zimmernummerValue5;
            nameValue5 = test[0].nameValue5;
            personenAnzahlValue5 = test[0].personenAnzahlValue5;
            anreiseValue5 = test[0].anreiseValue5;
            abreiseValue5 = test[0].abreiseValue5;
            trace5 = test[0].trace5;
            notiz2Value5 = test[0].notiz2Value5;
            notiz1Value5 = test[0].notiz1Value5;
            bemerkungValue5 = test[0].bemerkungValue5;

            zimmernummerValue6 = test[0].zimmernummerValue6;
            nameValue6 = test[0].nameValue6;
            personenAnzahlValue6 = test[0].personenAnzahlValue6;
            anreiseValue6 = test[0].anreiseValue6;
            abreiseValue6 = test[0].abreiseValue6;
            trace6 = test[0].trace6;
            notiz2Value6 = test[0].notiz2Value6;
            notiz1Value6 = test[0].notiz1Value6;
            bemerkungValue6 = test[0].bemerkungValue6;

            zimmernummerValue7 = test[0].zimmernummerValue7;
            nameValue7 = test[0].nameValue7;
            personenAnzahlValue7 = test[0].personenAnzahlValue7;
            anreiseValue7 = test[0].anreiseValue7;
            abreiseValue7 = test[0].abreiseValue7;
            trace7 = test[0].trace7;
            notiz2Value7 = test[0].notiz2Value7;
            notiz1Value7 = test[0].notiz1Value7;
            bemerkungValue7 = test[0].bemerkungValue7;

            zimmernummerValue8 = test[0].zimmernummerValue8;
            nameValue8 = test[0].nameValue8;
            personenAnzahlValue8 = test[0].personenAnzahlValue8;
            anreiseValue8 = test[0].anreiseValue8;
            abreiseValue8 = test[0].abreiseValue8;
            trace8 = test[0].trace8;
            notiz2Value8 = test[0].notiz2Value8;
            notiz1Value8 = test[0].notiz1Value8;
            bemerkungValue8 = test[0].bemerkungValue8;

            zimmernummerValue9 = test[0].zimmernummerValue9;
            nameValue9 = test[0].nameValue9;
            personenAnzahlValue9 = test[0].personenAnzahlValue9;
            anreiseValue9 = test[0].anreiseValue9;
            abreiseValue9 = test[0].abreiseValue9;
            trace9 = test[0].trace9;
            notiz2Value9 = test[0].notiz2Value9;
            notiz1Value9 = test[0].notiz1Value9;
            bemerkungValue9 = test[0].bemerkungValue9;

            zimmernummerValue10 = test[0].zimmernummerValue10;
            nameValue10 = test[0].nameValue10;
            personenAnzahlValue10 = test[0].personenAnzahlValue10;
            anreiseValue10 = test[0].anreiseValue10;
            abreiseValue10 = test[0].abreiseValue10;
            trace10 = test[0].trace10;
            notiz2Value10 = test[0].notiz2Value10;
            notiz1Value10 = test[0].notiz1Value10;
            bemerkungValue10 = test[0].bemerkungValue10;

            zimmernummerValue11 = test[0].zimmernummerValue11;
            nameValue11 = test[0].nameValue11;
            personenAnzahlValue11 = test[0].personenAnzahlValue11;
            anreiseValue11 = test[0].anreiseValue11;
            abreiseValue11 = test[0].abreiseValue11;
            trace11 = test[0].trace11;
            notiz2Value11 = test[0].notiz2Value11;
            notiz1Value11 = test[0].notiz1Value11;
            bemerkungValue11 = test[0].bemerkungValue11;

            zimmernummerValue12 = test[0].zimmernummerValue12;
            nameValue12 = test[0].nameValue12;
            personenAnzahlValue12 = test[0].personenAnzahlValue12;
            anreiseValue12 = test[0].anreiseValue12;
            abreiseValue12 = test[0].abreiseValue12;
            trace12 = test[0].trace12;
            notiz2Value12 = test[0].notiz2Value12;
            notiz1Value12 = test[0].notiz1Value12;
            bemerkungValue12 = test[0].bemerkungValue12;

            zimmernummerValue13 = test[0].zimmernummerValue13;
            nameValue13 = test[0].nameValue13;
            personenAnzahlValue13 = test[0].personenAnzahlValue13;
            anreiseValue13 = test[0].anreiseValue13;
            abreiseValue13 = test[0].abreiseValue13;
            trace13 = test[0].trace13;
            notiz2Value13 = test[0].notiz2Value13;
            notiz1Value13 = test[0].notiz1Value13;
            bemerkungValue13 = test[0].bemerkungValue13;

            zimmernummerValue14 = test[0].zimmernummerValue14;
            nameValue14 = test[0].nameValue14;
            personenAnzahlValue3 = test[0].personenAnzahlValue14;
            anreiseValue14 = test[0].anreiseValue14;
            abreiseValue14 = test[0].abreiseValue14;
            trace14 = test[0].trace14;
            notiz2Value14 = test[0].notiz2Value14;
            notiz1Value14 = test[0].notiz1Value14;
            bemerkungValue14 = test[0].bemerkungValue14;

            zimmernummerValue15 = test[0].zimmernummerValue15;
            nameValue15 = test[0].nameValue15;
            personenAnzahlValue15 = test[0].personenAnzahlValue15;
            anreiseValue15 = test[0].anreiseValue15;
            abreiseValue15 = test[0].abreiseValue15;
            trace15 = test[0].trace15;
            notiz2Value15 = test[0].notiz2Value15;
            notiz1Value15 = test[0].notiz1Value15;
            bemerkungValue15 = test[0].bemerkungValue15;

            setTimeout(function () {
                db.tables.findOne(
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
                        } else {
                            db.tables.update(
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
                                        "tables.$.notiz2Value": notiz2Value,
                                        "tables.$.trace": trace,

                                        "tables.$.nameValue2": nameValue2,
                                        "tables.$.zimmernummerValue2": zimmernummerValue2,
                                        "tables.$.anreiseValue2": anreiseValue2,
                                        "tables.$.abreiseValue2": abreiseValue2,
                                        "tables.$.personenAnzahlValue2": personenAnzahlValue2,
                                        "tables.$.notiz2Value2": notiz2Value2,
                                        "tables.$.trace2": trace2,

                                        "tables.$.nameValue3": nameValue3,
                                        "tables.$.zimmernummerValue3": zimmernummerValue3,
                                        "tables.$.anreiseValue3": anreiseValue3,
                                        "tables.$.abreiseValue3": abreiseValue3,
                                        "tables.$.personenAnzahlValue3": personenAnzahlValue3,
                                        "tables.$.notiz2Value3": notiz2Value3,
                                        "tables.$.trace3": trace3,

                                        "tables.$.nameValue4": nameValue4,
                                        "tables.$.zimmernummerValue4": zimmernummerValue4,
                                        "tables.$.anreiseValue4": anreiseValue4,
                                        "tables.$.abreiseValue4": abreiseValue4,
                                        "tables.$.personenAnzahlValue4": personenAnzahlValue4,
                                        "tables.$.notiz2Value4": notiz2Value4,
                                        "tables.$.trace4": trace4,

                                        "tables.$.nameValue5": nameValue5,
                                        "tables.$.zimmernummerValue5": zimmernummerValue5,
                                        "tables.$.anreiseValue5": anreiseValue5,
                                        "tables.$.abreiseValue5": abreiseValue5,
                                        "tables.$.personenAnzahlValue5": personenAnzahlValue5,
                                        "tables.$.notiz2Value5": notiz2Value5,
                                        "tables.$.trace5": trace5,

                                        "tables.$.nameValue6": nameValue6,
                                        "tables.$.zimmernummerValue6": zimmernummerValue6,
                                        "tables.$.anreiseValue6": anreiseValue6,
                                        "tables.$.abreiseValue6": abreiseValue6,
                                        "tables.$.personenAnzahlValue6": personenAnzahlValue6,
                                        "tables.$.notiz2Value6": notiz2Value6,
                                        "tables.$.trace6": trace6,

                                        "tables.$.nameValue7": nameValue7,
                                        "tables.$.zimmernummerValue7": zimmernummerValue7,
                                        "tables.$.anreiseValue7": anreiseValue7,
                                        "tables.$.abreiseValue7": abreiseValue7,
                                        "tables.$.personenAnzahlValue7": personenAnzahlValue7,
                                        "tables.$.notiz2Value7": notiz2Value7,
                                        "tables.$.trace7": trace7,

                                        "tables.$.nameValue8": nameValue8,
                                        "tables.$.zimmernummerValue8": zimmernummerValue8,
                                        "tables.$.anreiseValue8": anreiseValue8,
                                        "tables.$.abreiseValue8": abreiseValue8,
                                        "tables.$.personenAnzahlValue8": personenAnzahlValue8,
                                        "tables.$.notiz2Value8": notiz2Value8,
                                        "tables.$.trace8": trace,

                                        "tables.$.nameValue9": nameValue9,
                                        "tables.$.zimmernummerValue9": zimmernummerValue9,
                                        "tables.$.anreiseValue9": anreiseValue9,
                                        "tables.$.abreiseValue9": abreiseValue9,
                                        "tables.$.personenAnzahlValue9": personenAnzahlValue9,
                                        "tables.$.notiz2Value9": notiz2Value9,
                                        "tables.$.trace9": trace9,

                                        "tables.$.nameValue10": nameValue10,
                                        "tables.$.zimmernummerValue10": zimmernummerValue10,
                                        "tables.$.anreiseValue10": anreiseValue10,
                                        "tables.$.abreiseValue10": abreiseValue10,
                                        "tables.$.personenAnzahlValue10": personenAnzahlValue10,
                                        "tables.$.notiz2Value10": notiz2Value10,
                                        "tables.$.trace10": trace10,


                                        "tables.$.nameValue11": nameValue11,
                                        "tables.$.zimmernummerValue11": zimmernummerValue11,
                                        "tables.$.anreiseValue11": anreiseValue11,
                                        "tables.$.abreiseValue11": abreiseValue11,
                                        "tables.$.personenAnzahlValue11": personenAnzahlValue11,
                                        "tables.$.notiz2Value11": notiz2Value11,
                                        "tables.$.trace11": trace11,

                                        "tables.$.nameValue12": nameValue12,
                                        "tables.$.zimmernummerValue12": zimmernummerValue12,
                                        "tables.$.anreiseValue12": anreiseValue12,
                                        "tables.$.abreiseValue12": abreiseValue12,
                                        "tables.$.personenAnzahlValue12": personenAnzahlValue12,
                                        "tables.$.notiz2Value12": notiz2Value12,
                                        "tables.$.trace12": trace12,

                                        "tables.$.nameValue13": nameValue13,
                                        "tables.$.zimmernummerValue13": zimmernummerValue13,
                                        "tables.$.anreiseValue13": anreiseValue13,
                                        "tables.$.abreiseValue13": abreiseValue13,
                                        "tables.$.personenAnzahlValue13": personenAnzahlValue13,
                                        "tables.$.notiz2Value13": notiz2Value13,
                                        "tables.$.trace13": trace13,

                                        "tables.$.nameValue14": nameValue14,
                                        "tables.$.zimmernummerValue14": zimmernummerValue14,
                                        "tables.$.anreiseValue14": anreiseValue14,
                                        "tables.$.abreiseValue14": abreiseValue14,
                                        "tables.$.personenAnzahlValue14": personenAnzahlValue14,
                                        "tables.$.notiz2Value14": notiz2Value14,
                                        "tables.$.trace14": trace14,

                                        "tables.$.nameValue15": nameValue15,
                                        "tables.$.zimmernummerValue15": zimmernummerValue15,
                                        "tables.$.anreiseValue15": anreiseValue15,
                                        "tables.$.abreiseValue15": abreiseValue15,
                                        "tables.$.personenAnzahlValue15": personenAnzahlValue15,
                                        "tables.$.notiz2Value15": notiz2Value15,
                                        "tables.$.trace15": trace15,
                                    }
                                }, function (err, tables) {
                                    if (err) {
                                        console.log("Error");
                                    }
                                    console.log("addInformationToTable updated successfully");
                                });
                        }
                    });
            });


            //preistypValue = informationElements2[0].substring(1, informationElements2[2].length);


        }
        //preistypValue = informationElements2[0].substring(1, informationElements2[2].length);
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
            db.hubertusTables.find(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("Add information to table response");
                    console.log(JSON.stringify(tables));
                });
        }, 1000);
    }
};
