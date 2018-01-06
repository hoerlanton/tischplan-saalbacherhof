const   express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    cors = require('cors'),
    db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['hubertusTracesListe', 'hubertusAnreiseListe', 'hubertusImHausListe', 'hubertusTables', 'newInformationHubertus']),
    moveTablesBauernstube = require('./moveTablesBauernstube.js'),
    moveTablesBerglerStubeHubertusStube = require('./moveTablesBerglerStubeHubertusStube.js'),
    moveTablesEdelweissKaminStube = require('./moveTablesEdelweissKaminStube.js'),
    moveTablesTeestubeTeelounge = require('./moveTablesTeestubeTeelounge.js'),
    moveTablesWaeldlerStubeKristallStube = require('./moveTablesWaeldlerStubeKristallStube.js');

//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

//----->REST-FUL API<------//

//Save AnreiseListe
router.post('/anreiseListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /anreiseListe");
    let anreiseListe = {
        data: "",};
    anreiseListe.data = req.body;

    db.hubertusAnreiseListe.remove({});

    setTimeout(function() {
        db.hubertusAnreiseListe.save(anreiseListe, function(err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
            console.log(anreiseListe);
            console.log("anreiseListe save called");
        });
    }, 100);
});

//Save ImHausListe
router.post('/imHausListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /imHausListe");
    let imHausListe = {
        data: "",
    };
    imHausListe.data = req.body;

    db.hubertusImHausListe.remove({});
    setTimeout(function() {
        db.hubertusImHausListe.save(imHausListe, function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
            console.log("imHausListe save called");
        });
    }, 100);
});

//Save TracesListe
router.post('/tracesListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /tracesListe");
    let tracesListe = {
        data: "",
    };
    tracesListe.data = req.body;
    db.hubertusTracesListe.remove({});
    setTimeout(function() {
        db.hubertusTracesListe.save(tracesListe, function(err, tracesListe) {
            if (err) {
                res.send(err);
            }
            res.json(tracesListe);
            console.log("tracesListe save called");
        });
    }, 100);
});

//Get anreiseListe
router.get('/anreiseListe', function(req, res, next) {
    console.log("anreiseListe get called");
    //Get guests from Mongo DB
    db.hubertusAnreiseListe.find(function(err, anreiseListe){
        if (err){
            res.send(err);
        }
        res.json(anreiseListe);
    });
});

//Get imHausListe
router.get('/imHausListe', function(req, res, next) {
    console.log("imHausListe get called");
    //Get guests from Mongo DB
    db.hubertusImHausListe.find(function(err, imHausListe){
        if (err){
            res.send(err);
        }
        res.json(imHausListe);
    });
});

//Get TracesListe
router.get('/tracesListe', function(req, res, next) {
    console.log("tracesListe get called");
    //Get guests from Mongo DB
    db.hubertusTracesListe.find(function(err, tracesListe){
        if (err){
            res.send(err);
        }
        res.json(tracesListe);
    });
});

//Get Tables
router.get('/tables', function(req, res, next) {
    console.log("tables get called");
    //Get guests from Mongo DB
    db.hubertusTables.find(function(err, tables){
        if (err){
            res.send(err);
        }
        res.json(tables);
    });
});

//Get Information
router.get('/information', function(req, res, next) {
    console.log("tables get called");
    //Get guests from Mongo DB
    db.newInformationHubertus.find(function(err, information){
        if (err){
            res.send(err);
        }
        res.json(information);
    });
});

//Delete scheduled message
router.post('/deleteInformationElement', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Delete request made to /deleteInformationElement");
    let informationElementToDelete = req.body;
    console.log(JSON.stringify(informationElementToDelete));
    db.newInformationHubertus.remove({

            roomNumber: informationElementToDelete.roomNumber
        },
        {
            justOne: true,
        });
    res.json(informationElementToDelete);
});


//moveTable
router.post('/moveTable', function(req, res, next) {
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
    let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1 );
    let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
    let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
    let width = splitted6[1].substring(1, splitted6[1].length - 1);
    let height = splitted7[1].substring(1, splitted7[1].length - 2);
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

    setTimeout(function() {
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
});

//occupyTable
router.post('/occupyTable', function(req, res, next) {
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
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }
    console.log(informationElements2);
    let informationElements2Length = informationElements2.length;
    console.log(informationElements2Length);
    infoElementString = JSON.stringify(informationElements2);
    if(infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
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

    if(departmentValue === "BerglerStubeHubertusStube") {
        departmentValueDB = "berglerStubeHubertusStube";
    }
    else if(departmentValue === "Bauernstube") {
        departmentValueDB = "Bauernstube";
    }
    else if(departmentValue === "WaeldlerStubeKristallStube") {
        departmentValueDB = "waeldlerStubeKristallStube";
    }
    else if(departmentValue === "EdelweissKaminStube") {
        departmentValueDB = "edelweissKaminStube";
    }
    else if(departmentValue === "TeestubeTeelounge") {
        departmentValueDB = "teestubeTeelounge";
    }

    db.hubertusTables.update(
        {department: departmentValueDB,
            "tables.number": tableValue},
        {$set: {
            "tables.$.bgColor": "#0a7a74",
            "tables.$.isBesetzt": "true"
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("occupyTable Update successful");
        });

    setTimeout(function() {
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
});

//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("dispenseTable request made to /dispenseTable");
    let dispenseTable = req.body;
    console.log("dispenseTable" + JSON.stringify(dispenseTable));
    db.hubertusTables.findAndModify({
        query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
        update: {$set: {
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
            "tables.$.bemerkungValue1":  1,
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
            "tables.$.bemerkungValue4":  1,
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
            "tables.$.bemerkungValue7":  1,
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


        } },
        new: false
    }, function (err, tables) {
        if (err) {
            console.log("Error");
        }
        console.log("No Error");
    });

    setTimeout(function() {
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
});

//removePlaceholder
router.post('/removePlaceholder', function(req, res, next) {
//JSON string is parsed to a JSON object
    //console.log("removePlaceholder request made to /removePlaceholder");
    //console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    let departmentValue = "";
    let tableValue = "";
    let departmentValueDB = "";
    let tableValueArray = [];
    let value = "nAnreise";
    //console.log(splitted);
    let informationElements2 = [];
    let infoElementString = "";
    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }
    console.log('removePlaceholder: array: ');
    console.log(informationElements2);
    infoElementString = JSON.stringify(informationElements2);

    if(infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
            console.log("Im-Haus-Liste");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
    } else if (infoElementString.indexOf('nTrace') != -1) {
            console.log("Trace");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else {
            console.log("Anreise");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        }

    if(departmentValue === "BerglerStubeHubertusStube") {
        departmentValueDB = "berglerStubeHubertusStube";
    }
    else if(departmentValue === "Bauernstube") {
        departmentValueDB = "Bauernstube";
    }
    else if(departmentValue === "WaeldlerStubeKristallStube") {
        departmentValueDB = "waeldlerStubeKristallStube";
    }
    else if(departmentValue === "EdelweissKaminStube") {
        departmentValueDB = "edelweissKaminStube";
    }
    else if(departmentValue === "TeestubeTeelounge") {
        departmentValueDB = "teestubeTeelounge";
    }

    console.log('removePlaceholder:' + departmentValue);
    console.log('removePlaceholder:' + tableValue);

    db.hubertusTables.update(
        {
            department: departmentValueDB,
            "tables.number": tableValue
        },
        {$set: {
            "tables.$.placeholder": "false",
        }}, function (err, tables) {
            if (err) {
                console.log("Error");
            }
            console.log("Updated successfully removePlaceholder");
        });

    setTimeout(function() {
        db.hubertusTables.findOne(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            },{
                "tables.$": 1,
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log("removePlaceholder response: " + JSON.stringify(tables));
            });
    }, 100);

});

//addPlaceholder
router.post('/addPlaceholder', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("addPlaceholder request made to /addPlaceholder");
    let addPlaceholder = req.body;
    console.log(addPlaceholder);
    if (addPlaceholder.length === 2) {
        let department = addPlaceholder[0];
        let tableNumber = addPlaceholder[1];
        console.log("department: " + department + ' ' + tableNumber);
        setTimeout(function() {
        db.hubertusTables.update(
            {
                department: department,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.placeholder": "true",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("No Error");
            });
        }, 100);
        setTimeout(function() {
            db.hubertusTables.find(
                {
                    department: department,
                    "tables.number": tableNumber
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('Response tables addPlaceholder' + JSON.stringify(tables));
                });
        }, 200);
    } else {
        db.hubertusTables.update(
            {
                department: addPlaceholder.department,
                "tables.number": addPlaceholder.number
            },
            {
                $set: {
                    "tables.$.placeholder": "true",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("No Error");
            });
        setTimeout(function () {
            db.hubertusTables.find(
                {
                    department: addPlaceholder.department,
                    "tables.number": addPlaceholder.number
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log(JSON.stringify(tables));
                });
        }, 100);
    }
});


//addInformationToTable
router.post('/addInformationToTable', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("addInformationToTable request made to /addInformationToTable");
    console.log(JSON.stringify("-------->" + req.body));
    let data = JSON.stringify(req.body);
    let splitted = data.split("\\");
    let informationElements2 = [];
    let departmentValueDB = "";
    let nameValue = "";
    let zimmernummerValue = "";
    let anreiseValue = "";
    let abreiseValue = "";
    let personenAnzahlValue = "";
    let notiz2Value = "";
    let notiz1Value = "";
    let departmentValue = "";
    let tableValue = "";
    let tableValueArray = [];
    let trace = "";
    let bemerkungValue = "";
    let bemerkungValue1 = "";
    let bemerkungValue2 = "";
    let value = "nAnreise";
    let infoElementString = "";
    let bermerkungValueConcatenated = "";

    for (let s = 0; s < splitted.length; s++) {
        informationElements2.push(splitted[s].split(":"));
    }

    console.log('informationElements2 length: -> ' + informationElements2.length);

    console.log(informationElements2);
    console.log(informationElements2.includes('nTrace'));
    console.log(informationElements2.includes('nAnreise'));

    infoElementString = JSON.stringify(informationElements2);

    console.log(informationElements2[3][1]);

    if (infoElementString.indexOf(value) != -1) {
        console.log('!!!!!!!!!!!!<:::::::::::::::::::::::::::::::::::::::');
    }

    if (infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
        console.log("Im Haus Liste gedropped");
        nameValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        zimmernummerValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        anreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        abreiseValue = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        personenAnzahlValue = informationElements2[6][1].substring(1, informationElements2[6][1].length);
        notiz1Value = informationElements2[7][1].substring(1, informationElements2[7][1].length);
        if (informationElements2[8].length > 2) {
            notiz1Value = informationElements2[7][1].substring(1, informationElements2[7][1].length) + informationElements2[7][2].substring(1, informationElements2[7][2].length);
        }
        notiz2Value = informationElements2[8][1].substring(1, informationElements2[8][1].length);
        if (informationElements2[8].length > 2) {
            notiz2Value = informationElements2[8][1].substring(1, informationElements2[8][1].length) + informationElements2[8][2].substring(1, informationElements2[8][2].length);
        }
        bemerkungValue = informationElements2[9][1].substring(1, informationElements2[9][1].length);
        if (informationElements2[9].length > 2) {
            bemerkungValue = bemerkungValue + informationElements2[9][2];
            bemerkungValue = bemerkungValue + informationElements2[9][3];
        }
        console.log('----------______________--------------->' + informationElements2[informationElements2.length - 2][2]);
        if (informationElements2.length === 14) {
            bemerkungValue = bemerkungValue + informationElements2[11][0].substring(1, informationElements2[11][0].length);
            bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2][0].substring(1, informationElements2[informationElements2.length - 2][0].length);
            if (informationElements2[11].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[11][1].substring(1, informationElements2[11][0].length);
            }
            if (informationElements2[informationElements2.length - 2].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2][1].substring(1, informationElements2[informationElements2.length - 2][1].length);
            }
        } else if (informationElements2.length === 13) {
            bemerkungValue = bemerkungValue + informationElements2[11][0].substring(1, informationElements2[11][0].length);
            if (informationElements2[informationElements2.length - 2].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2][1].substring(1, informationElements2[informationElements2.length - 2][1].length);
            }

        } else if (informationElements2.length > 14) {
            bemerkungValue = bemerkungValue + informationElements2[11][0].substring(1, informationElements2[11][0].length);
            bemerkungValue = bemerkungValue + informationElements2[12][0].substring(1, informationElements2[12][0].length);
            bemerkungValue = bemerkungValue + informationElements2[13][0].substring(1, informationElements2[13][0].length);
            bemerkungValue = bemerkungValue + informationElements2[14][0].substring(1, informationElements2[14][0].length);
            if (informationElements2[11].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[11][1].substring(1, informationElements2[11][0].length);
            }
            if (informationElements2[12].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[12][1].substring(1, informationElements2[12][0].length);
            }
            if (informationElements2[13].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[13][1].substring(1, informationElements2[13][0].length);
            }

            if (informationElements2[informationElements2.length - 2].length > 1) {
                bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2][1].substring(1, informationElements2[informationElements2.length - 2][1].length);
            }
        }
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        tableValue = tableValueArray[0];
    } else if (infoElementString.indexOf('nTrace') != -1) {
        console.log("Trace Liste gedropped");
        zimmernummerValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        nameValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        anreiseValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        abreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        trace = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        if (informationElements2.length > 7) {
            trace = trace + informationElements2[6][0].substring(1, informationElements2[6][0].length);
        }
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        tableValue = tableValueArray[0];
    } else {
        console.log("Anreise Liste gedropped");
        nameValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        zimmernummerValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        abreiseValue = informationElements2[2][1].substring(1, informationElements2[2][1].length);
        personenAnzahlValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        notiz1Value = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        notiz2Value = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        bemerkungValue = informationElements2[6][1].substring(1, informationElements2[6][1].length);
        if (informationElements2.length === 12) {
            bemerkungValue = bemerkungValue + informationElements2[6][0].substring(1, informationElements2[6][0].length);
            bemerkungValue = bemerkungValue + informationElements2[informationElements2.length - 2][0].substring(1, informationElements2[informationElements2.length - 2][0].length);
        } else if (informationElements2.length === 11) {
            bemerkungValue = bemerkungValue + informationElements2[6][0].substring(1, informationElements2[6][0].length);
        }
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
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
    }, 300);

    setTimeout(function() {
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
    }, 500);
});
    router.post('/newInformationToTables', function(req, res, next) {
        console.log("newInformationToTables post called");
        //Get guests from Mongo DB

        console.log(req.body);
        let newInformation = req.body;

        setTimeout(function() {
            db.hubertusTables.findOne(
            {
                "tables.number": newInformation.tableNumber
            },{
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

        setTimeout(function() {
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
});

router.post('/newInformationToBox', function(req, res, next) {
    console.log("newInformationToBox post called");
    //Get guests from Mongo DB

    console.log(req.body);
    let newInformation = req.body;


    db.newInformationHubertus.save(newInformation, function(err, newInformation) {
        if (err) {
            res.send(err);
        }
        res.json(newInformation);
    });
});

module.exports = router;