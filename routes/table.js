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
    addTablesTeestubeTeelounge = require('./addTablesTeestubeTeelounge.js'),
    Promise = require('promise'),
    dateFns = require('date-fns');


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
            console.log(umsetzen.targetTable);
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
        let tablesTemp3 = [];
        let departments = [ "berglerStubeHubertusStube", "Bauernstube", "waeldlerStubeKristallStube", "edelweissKaminStube", "teestubeTeelounge"];
        new Promise(function (resolve, reject) {
            if (dispenseTable.constructor === Array) {
            console.log("dispenseTable[h].table.groups.length > dispenseTable[h].group.length");
            new Promise(function (resolve, reject) {
                db.hubertusTables.find({
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    } else {
                        tablesTemp3.push(tables);
                        //console.log(tables);
                        //tablesTemp3.push(tables);
                        //console.log(tablesTemp3);
                        //return tablesTemp3;
                        setTimeout(() => resolve(), 1000);
                    }
                });
            }).then(function () { // (**)
                let today = dateFns.format(dispenseTable[0].date, 'DD.MM.YYYY');
                console.log(today);
                console.log(JSON.stringify(tablesTemp3[0]));
                for (let i = tablesTemp3[0].length - 1; i >= 0; i--) {
                    for (let k = tablesTemp3[0][i].tables.length - 1; k >= 0; k--) {
                        if (tablesTemp3[0][i].tables[k].groups) {
                            console.log(tablesTemp3[0][i].tables[k].groups);
                            for (let j = tablesTemp3[0][i].tables[k].groups.length - 1; j >= 0; j--) {
                                console.log("+");
                                //console.log(tablesTemp2[0].tables[i]);
                                if (tablesTemp3[0][i].tables[k].groups[j].abreiseValue === String(today)) {
                                    //console.log(tablesTemp2[0].tables[i].groups[j].abreiseValue);
                                    console.log(tablesTemp3[0][i].tables[k].groups[j].abreiseValue);
                                    tablesTemp3[0][i].tables[k].groups.splice(j, 1);
                                    console.log(tablesTemp3[0][i].tables[k].groups.length);
                                    console.log(tablesTemp3[0][i].tables[k].groups);
                                    if (tablesTemp3[0][i].tables[k].groups.length === 0) {
                                        tablesTemp3[0][i].tables[k].bgColor = "#ffffff";
                                        tablesTemp3[0][i].tables[k].isBesetzt = "false";
                                        //delete tablesTemp3[0][i].tables[k]['groups'];
                                    }
                                }
                            }
                            for (let j = tablesTemp3[0][i].tables[k].groups.length - 1; j >= 0; j--) {
                                //console.log(tablesTemp2[0].tables[i]);
                                console.log("*");
                                if (tablesTemp3[0][i].tables[k].groups.length === 1 && tablesTemp3[0][i].tables[k].groups[j].newTraceText) {
                                    tablesTemp3[0][i].tables[k].groups.splice(j, 1);
                                    tablesTemp3[0][i].tables[k].bgColor = "#ffffff";
                                    tablesTemp3[0][i].tables[k].isBesetzt = "false";
                                }
                            }
                        }
                    }
                }
                console.log("tablesTemp3 after");
                console.log(JSON.stringify(tablesTemp3[0]));
            }).then(function () { // (**)
                    db.hubertusTables.remove({
                    }, function (err, tables) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("removed");
                            console.log(tables);
                            db.hubertusTables.save(tablesTemp3[0][0]);
                            db.hubertusTables.save(tablesTemp3[0][1]);
                            db.hubertusTables.save(tablesTemp3[0][2]);
                            db.hubertusTables.save(tablesTemp3[0][3]);
                            db.hubertusTables.save(tablesTemp3[0][4]);
                        }
                    });
            });
        } else {
            db.hubertusTables.findAndModify({
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
        resolve();
        }).then(function () { // (**)
            setTimeout(function () {
                console.log("Dispense Table2: ");
                db.hubertusTables.find(
                    {}, function (err, tables) {
                        if (err) {
                            res.send(err);
                        }
                        console.log(tables);
                        res.json(tables);
                        //console.log("Dispense Table: " + JSON.stringify(tables));
                    });
            }, 500);
        });
    }
};






//console.log(dispenseTable);
//console.log(dispenseTable.groups.length);
//console.log(dispenseTable.group );
//console.log("dispenseTable" + JSON.stringify(dispenseTable));
/*
 }
 for (let i = 0; i < dispenseTable[h].group.length; i++) {
 if (dispenseTable[h].group.length === 1 && dispenseTable[h].groups[dispenseTable[h].group[i]].newTraceText) {
 break;
 }
 */


/*
 db.hubertusTables.findAndModify({
 query: {
 department: dispenseTable[h].table.department,
 "tables.number": dispenseTable[h].table.number

 },
 update: {
 $pull: { "tables.$[element].groups": { "abreiseValue": "26.02.2018" } }
 },
 arrayFilters: [
 { "element.number": dispenseTable[h].table.number }
 ]
 });


 db.hubertusTables.findAndModify({
 query: {
 department: dispenseTable[h].table.department,
 },
 update: {
 $pull: { "tables.$[element].groups": { "abreiseValue": "26.02.2018" } }  },
 arrayFilters: [
 { "element.number": dispenseTable[h].table.number }
 ]
 }, function (err, tables) {
 if (err) {
 console.log("Error dispenseTable.group[i]]: 1");
 console.log(err);
 } else {
 console.log("tables dispenseTable.group[i]]: 1");
 console.log(JSON.stringify(tables));
 }
 }};


 db.hubertusTables.findAndModify({
 query: {department: dispenseTable[h].table.department, "tables.number": dispenseTable[h].table.number},
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
 resolve(); // (*)
 });
 */
/*
 }).then(function (tablesTemp3) { // (**)
 db.hubertusTables.find({
 department:  "waeldlerStubeKristallStube",
 }, function (err, tables) {
 if (err) {
 res.send(err);
 } else {
 console.log(tables);

 //tablesTemp3.push(tables);
 //console.log(tablesTemp3);
 //return tablesTemp3;
 }
 });
 }).then(function (tablesTemp3) { // (**)
 db.hubertusTables.find({
 department:  "Bauernstube",
 }, function (err, tables) {
 if (err) {
 res.send(err);
 } else {
 console.log(tables);

 //tablesTemp3.push(tables);
 //console.log(tablesTemp3);
 //return tablesTemp3;
 }
 });
 }).then(function (tablesTemp3) { // (**)
 db.hubertusTables.find({
 department:  "berglerStubeHubertusStube",
 }, function (err, tables) {
 if (err) {
 res.send(err);
 } else {
 console.log(tables);

 //tablesTemp3.push(tables);
 //console.log(tablesTemp3);
 //return tablesTemp3;

 }
 });
 }).then(function (tablesTemp3) { // (**)
 db.hubertusTables.find({
 department:  "teestubeTeelounge",
 }, function (err, tables) {
 if (err) {
 res.send(err);
 } else {
 console.log(tables);

 //tablesTemp3.push(tables);
 //console.log(tablesTemp3);
 //return tablesTemp3;
 }
 });
 */


//let foo = db.hubertusTables.find().toArray();
//let bar = db.hubertusTables.find().forEach(printjson);



//let documentArray = myCursor.toArray();

//console.log(documentArray);


/*
 function (err, tables) {
 if (err) {
 res.send(err);
 } else {
 //console.log(tables);
 let tablesTemp = JSON.stringify(tables);
 tablesTemp2 = JSON.parse(tablesTemp);
 //console.log("tablesTemp");
 //console.log(tablesTemp);
 console.log("tablesTemp2 before");
 console.log(JSON.stringify(tablesTemp2));
 //console.log(tables[0]);
 //console.log(typeof tables);
 //console.log(tablesTemp2[0].tables.length);
 //console.log(tablesTemp[0].tables.length);
 //console.log(tables[0].tables.length);
 */





/*
 db.hubertusTables.findAndModify({
 query: {
 department: dispenseTable[h].table.department,
 "tables.number": dispenseTable[h].table.number
 },
 update:
 { $pull: { groups: { $elemMatch: { "abreiseValue": "26.02.2018" } } } } },
 function (err, tables) {
 if (err) {
 console.log("Error dispenseTable.group[i]]: 1");
 console.log(err);
 } else {
 console.log("tables dispenseTable.group[i]]: 1");
 console.log(JSON.stringify(tables));
 }
 });


 if ( i === (dispenseTable[h].group.length - 1)) {  resolve(); }
 }
 }).then(function() { // (**)
 console.log("removeNulls promise");
 setTimeout(function () {
 db.hubertusTables.findAndModify({
 query: {
 department: dispenseTable[h].table.department,
 "tables.number": dispenseTable[h].table.number
 },
 update: {
 $pull: {
 "tables.$.groups": null
 }
 },
 multi: true
 }, function (err, tables) {
 if (err) {
 console.log("Error tables.$.groups removeNulls");
 console.log(err);
 } else {
 console.log("tables tables.$.groups removeNulls");
 console.log(tables);
 }
 });
 }, 200);
 });

 let p2 = new Promise(function (resolve, reject) {
 for (let h = 0; h < dispenseTable.length; h++) {
 setTimeout(function () {
 if (dispenseTable[h].table.groups.length === dispenseTable[h].group.length) {
 console.log("dispenseTable[h].table.groups.length === dispenseTable[h].group.length");
 console.log(dispenseTable[h].table.department);
 console.log(dispenseTable[h].table.number);
 db.hubertusTables.findAndModify({
 query: {department: dispenseTable[h].table.department, "tables.number": dispenseTable[h].table.number},
 update: {
 $set: {
 "tables.$.bgColor": "#ffffff",
 "tables.$.isBesetzt": "false",
 }, $unset: {
 "tables.$.groups" : 1,
 }
 },
 }, function (err, tables) {
 if (err) {
 console.log("Error");
 }
 console.log("No Error dispenseTable[h].table.groups.length === dispenseTable[h].group.length");
 //console.log(tables);
 });
 }
 }, 100);
 }
 setTimeout(() => resolve(), 1000);
 });
 */


//console.log("departments[h]");
//console.log(departments[h]);











