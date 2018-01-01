const   express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    cors = require('cors'),
    db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['hubertusTracesListe', 'hubertusAnreiseListe', 'hubertusImHausListe', 'hubertusTables']);

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

    if (tableNumber === '1' && topValue === '510' && leftValue === '160' && height === '65') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "130",
                    "tables.$.topValue": "410",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "2",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '1' && topValue === '410' && leftValue === '160' && height === '130') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "195",
                    "tables.$.topValue": "310",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "3",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '1' && topValue === '310' && leftValue === '160' && height === '195') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "260",
                    "tables.$.topValue": "210",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "4",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '1' && topValue === '210' && leftValue === '160' && height === '260') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "325",
                    "tables.$.topValue": "140",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "5",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '1' && topValue === '140' && leftValue === '160' && height === '325') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "65",
                    "tables.$.topValue": "510",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [  {
                        "arrayIndex": 4,
                        "department": "teestubeTeelounge",
                        "number": "5",
                        "topValue": "140",
                        "leftValue": "160",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "85",
                        "height": "65"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 3,
                        "department": "teestubeTeelounge",
                        "number": "4",
                        "topValue": "225",
                        "leftValue": "160",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "85",
                        "height": "65"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 2,
                        "department": "teestubeTeelounge",
                        "number": "3",
                        "topValue": "325",
                        "leftValue": "160",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "85",
                        "height": "65"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 1,
                        "department": "teestubeTeelounge",
                        "number": "2",
                        "topValue": "420",
                        "leftValue": "160",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "85",
                        "height": "65"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    }   else if (tableNumber === '80' && topValue === '345' && leftValue === '250' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",
                    "tables.$.topValue": "305",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "81",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '80' && topValue === '305' && leftValue === '250' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                    "tables.$.topValue": "345",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [  {
                        "arrayIndex": 1,
                        "department": "edelweissKaminStube",
                        "number": "81",
                        "topValue": "305",
                        "leftValue": "250",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    }   else if (tableNumber === '83' && topValue === '212' && leftValue === '250' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",
                    "tables.$.topValue": "170",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "84",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '83' && topValue === '170' && leftValue === '250' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                    "tables.$.topValue": "212",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 4,
                        "department": "edelweissKaminStube",
                        "number": "84",
                        "topValue": "170",
                        "leftValue": "250",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

        //____________

    }   else if (tableNumber === '85' && topValue === '130' && leftValue === '250' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",
                    "tables.$.topValue": "85",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "86",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                    "tables.$.width": "145",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "90",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '35' && width === '145') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                    "tables.$.width": "40",
                    "tables.$.topValue": "130",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [    {
                        "arrayIndex": 6,
                        "department": "edelweissKaminStube",
                        "number": "86",
                        "topValue": "85",
                        "leftValue": "250",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [    {
                        "arrayIndex": 7,
                        "department": "edelweissKaminStube",
                        "number": "90",
                        "topValue": "85",
                        "leftValue": "360",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "60",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        //____________

    } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "96",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "105",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "97",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '105') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "140",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
            }, { $pull: { tables: {
                "number": "98",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '140') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [  {
                        "arrayIndex": 15,
                        "department": "edelweissKaminStube",
                        "number": "98",
                        "topValue": "355",
                        "leftValue": "187",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 14,
                        "department": "edelweissKaminStube",
                        "number": "97",
                        "topValue": "290",
                        "leftValue": "187",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    }],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 13,
                        "department": "edelweissKaminStube",
                        "number": "96",
                        "topValue": "228",
                        "leftValue": "187",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

        //_____________________

    }   else if (tableNumber === '73' && topValue === '481' && leftValue === '559' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.leftValue": "500",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "74",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '73' && topValue === '481' && leftValue === '500' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.leftValue": "559",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 18,
                        "department": "waeldlerStubeKristallStube",
                        "number": "74",
                        "topValue": "481",
                        "leftValue": "456",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    }   else if (tableNumber === '70' && topValue === '330' && leftValue === '458' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.leftValue": "500",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "71",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '70' && topValue === '330' && leftValue === '500' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.leftValue": "458",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 16,
                        "department": "waeldlerStubeKristallStube",
                        "number": "71",
                        "topValue": "330",
                        "leftValue": "550",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

//_____________________


    }   else if (tableNumber === '61' && topValue === '147' && leftValue === '86' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "62",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '61' && topValue === '147' && leftValue === '86' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 11,
                        "department": "waeldlerStubeKristallStube",
                        "number": "62",
                        "topValue": "147",
                        "leftValue": "132",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    }   else if (tableNumber === '55' && topValue === '247' && leftValue === '312' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.leftValue": "267",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "56",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '55' && topValue === '247' && leftValue === '267' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "120",
                    "tables.$.leftValue": "221",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "57",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '55' && topValue === '247' && leftValue === '221' && width === '120') {

        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.leftValue": "312",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 5,
                        "department": "waeldlerStubeKristallStube",
                        "number": "56",
                        "topValue": "247",
                        "leftValue": "267",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 6,
                        "department": "waeldlerStubeKristallStube",
                        "number": "57",
                        "topValue": "247",
                        "leftValue": "221",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    }   else if (tableNumber === '58' && topValue === '247' && leftValue === '132' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.leftValue": "86",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "59",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '58' && topValue === '247' && leftValue === '86' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "120",
                    "tables.$.leftValue": "41",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "60",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '58' && topValue === '247' && leftValue === '41' && width === '120') {

        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.leftValue": "132",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 8,
                        "department": "waeldlerStubeKristallStube",
                        "number": "59",
                        "topValue": "247",
                        "leftValue": "86",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 9,
                        "department": "waeldlerStubeKristallStube",
                        "number": "60",
                        "topValue": "247",
                        "leftValue": "41",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    }   else if (tableNumber === '63' && topValue === '147' && leftValue === '222' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "64",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '63' && topValue === '147' && leftValue === '222' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "120",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "65",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '63' && topValue === '147' && leftValue === '222' && width === '120') {

        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",

                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 13,
                        "department": "waeldlerStubeKristallStube",
                        "number": "64",
                        "topValue": "147",
                        "leftValue": "267",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 14,
                        "department": "waeldlerStubeKristallStube",
                        "number": "65",
                        "topValue": "147",
                        "leftValue": "312",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    }],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    }   else if (tableNumber === '42' && topValue === '223' && leftValue === '552' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "43",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '42' && topValue === '223' && leftValue === '552' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 12,
                        "department": "berglerStubeHubertusStube",
                        "number": "43",
                        "topValue": "277",
                        "leftValue": "552",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "width": "40",
                        "height": "35",
                        "border": "solid 1px #0a7a74"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    }   else if (tableNumber === '44' && topValue === '349' && leftValue === '552' && height === '35') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "70",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "45",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '44' && topValue === '349' && leftValue === '552' && height === '70') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "35",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 14,
                        "department": "berglerStubeHubertusStube",
                        "number": "45",
                        "topValue": "395",
                        "leftValue": "552",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "35"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 12,
                        "department": "berglerStubeHubertusStube",
                        "number": "43",
                        "topValue": "277",
                        "leftValue": "552",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "width": "40",
                        "height": "35",
                        "border": "solid 1px #0a7a74"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    }   else if (tableNumber === '12' && topValue === '220' && leftValue === '400' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                    "tables.$.topValue": "160",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "13",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '12' && topValue === '160' && leftValue === '400' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
                    "tables.$.topValue": "220",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 3,
                        "department": "Bauernstube",
                        "number": "13",
                        "topValue": "160",
                        "leftValue": "400",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "60",
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    }   else if (tableNumber === '25' && topValue === '160' && leftValue === '300' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "26",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '25' && topValue === '160' && leftValue === '300' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 12,
                        "department": "Bauernstube",
                        "number": "26",
                        "topValue": "220",
                        "leftValue": "300",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "60"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    }   else if (tableNumber === '22' && topValue === '220' && leftValue === '180' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                    "tables.$.topValue": "160",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });
        db.hubertusTables.update(
            {}, {
                $pull: {
                    tables: {
                        "number": "23",
                    }
                }
            },
            {
                multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    }   else if (tableNumber === '22' && topValue === '160' && leftValue === '180' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
                    "tables.$.topValue": "220",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("moveTable Update successful");
            });

        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [   {
                        "arrayIndex": 9,
                        "department": "Bauernstube",
                        "number": "23",
                        "topValue": "160",
                        "leftValue": "180",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "40",
                        "height": "60"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });


    } setTimeout(function() {
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
            "tables.$.katValue": 1,
            "tables.$.zimmernummerValue": 1,
            "tables.$.preistypValue": 1,
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
            "tables.$.katValue2": 1,
            "tables.$.zimmernummerValue2": 1,
            "tables.$.preistypValue2": 1,
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
            "tables.$.katValue3": 1,
            "tables.$.zimmernummerValue3": 1,
            "tables.$.preistypValue3": 1,
            "tables.$.anreiseValue3": 1,
            "tables.$.abreiseValue3": 1,
            "tables.$.personenAnzahlValue3": 1,
            "tables.$.notiz5Value": 1,
            "tables.$.notiz6Value": 1,
            "tables.$.trace3": 1,
            "tables.$.bemerkungValue6": 1,
            "tables.$.bemerkungValue7":  1,
            "tables.$.bemerkungValue8": 1
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
    let katValue = "";
    let zimmernummerValue = "";
    let preistypValue = "";
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

    for (let s = 0; s < splitted.length; s++){
        informationElements2.push(splitted[s].split(":"));
    }

    console.log('informationElements2 length: -> ' + informationElements2.length);
    //console.log(informationElements2[0][0]);
    //console.log(informationElements2[1][0]);
    //console.log(informationElements2[2][0]);
    //console.log(informationElements2[3][0]);
    //console.log(informationElements2[4][0]);
    //console.log(informationElements2[5][0]);
    //console.log(informationElements2[6][0]);
    //console.log(informationElements2[7][0]);
    //console.log(informationElements2[8][0]);
    //console.log(informationElements2[9][0]);

    console.log(informationElements2);
    console.log(informationElements2.includes('nTrace'));
    console.log(informationElements2.includes('nAnreise'));

    infoElementString = JSON.stringify(informationElements2);

    console.log(informationElements2[3][1]);

    if (infoElementString.indexOf(value) != -1){
        console.log('!!!!!!!!!!!!<:::::::::::::::::::::::::::::::::::::::');
        }

    if(infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
        console.log("Im Haus Liste gedropped");
        nameValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        zimmernummerValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        katValue = informationElements2[2][1].substring(1, informationElements2[2][1].length);
        preistypValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        anreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        abreiseValue = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        personenAnzahlValue = informationElements2[6][1].substring(1, informationElements2[6][1].length);
        notiz1Value = informationElements2[8][1].substring(1, informationElements2[8][1].length);
        notiz2Value = informationElements2[9][1].substring(1, informationElements2[9][1].length);
        bemerkungValue = informationElements2[10][1].substring(1, informationElements2[10][1].length);
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        tableValue = tableValueArray[0];
    } else if (infoElementString.indexOf('nTrace') != -1) {
        console.log("Trace Liste gedropped");
        zimmernummerValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        nameValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        preistypValue = informationElements2[2][1].substring(1, informationElements2[2][1].length);
        anreiseValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        abreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        trace = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        tableValue = tableValueArray[0];
        katValue = "";
    } else {
        console.log("Anreise Liste gedropped");
        nameValue = informationElements2[0][1].substring(1, informationElements2[0][1].length);
        zimmernummerValue = informationElements2[1][1].substring(1, informationElements2[1][1].length);
        preistypValue = informationElements2[2][1].substring(1, informationElements2[2][1].length);
        abreiseValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        personenAnzahlValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        katValue = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        notiz1Value = informationElements2[6][1].substring(1, informationElements2[6][1].length);
        notiz2Value = informationElements2[7][1].substring(1, informationElements2[7][1].length);
        bemerkungValue = informationElements2[8][1].substring(1, informationElements2[8][1].length);
        if (informationElements2.length === 12) {
            bemerkungValue1 = informationElements2[9][0].substring(1, informationElements2[10][0].length);
            bemerkungValue2 = informationElements2[informationElements2.length - 2][0].substring(1, informationElements2[informationElements2.length - 2][0].length);
        } else if (informationElements2.length === 11) {
            bemerkungValue1 = informationElements2[9][0].substring(1, informationElements2[10][0].length);
        }
        departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
        tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        tableValue = tableValueArray[0];
    }


    console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " preistypValue " + preistypValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " katValue " + katValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + bemerkungValue1 + bemerkungValue2 + "tableValue" + tableValue + "departmentvalue" + departmentValue);


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
    console.log(departmentValueDB);
    setTimeout(function() {
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
                                "tables.$.katValue": katValue,
                                "tables.$.zimmernummerValue": zimmernummerValue,
                                "tables.$.preistypValue": preistypValue,
                                "tables.$.anreiseValue": anreiseValue,
                                "tables.$.abreiseValue": abreiseValue,
                                "tables.$.personenAnzahlValue": personenAnzahlValue,
                                "tables.$.notiz1Value": notiz1Value,
                                "tables.$.notiz2Value": notiz2Value,
                                "tables.$.trace": trace,
                                "tables.$.bemerkungValue": bemerkungValue,
                                "tables.$.bemerkungValue1":  bemerkungValue1,
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
                                "tables.$.katValue2": katValue,
                                "tables.$.zimmernummerValue2": zimmernummerValue,
                                "tables.$.preistypValue2": preistypValue,
                                "tables.$.anreiseValue2": anreiseValue,
                                "tables.$.abreiseValue2": abreiseValue,
                                "tables.$.personenAnzahlValue2": personenAnzahlValue,
                                "tables.$.notiz3Value": notiz1Value,
                                "tables.$.notiz4Value": notiz2Value,
                                "tables.$.trace2": trace,
                                "tables.$.bemerkungValue3": bemerkungValue,
                                "tables.$.bemerkungValue4":  bemerkungValue1,
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
                                "tables.$.katValue3": katValue,
                                "tables.$.zimmernummerValue3": zimmernummerValue,
                                "tables.$.preistypValue3": preistypValue,
                                "tables.$.anreiseValue3": anreiseValue,
                                "tables.$.abreiseValue3": abreiseValue,
                                "tables.$.personenAnzahlValue3": personenAnzahlValue,
                                "tables.$.notiz5Value": notiz1Value,
                                "tables.$.notiz6Value": notiz2Value,
                                "tables.$.trace3": trace,
                                "tables.$.bemerkungValue6": bemerkungValue,
                                "tables.$.bemerkungValue7":  bemerkungValue1,
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
                console.log(JSON.stringify('5306' + JSON.stringify(tables)));
            });
    }, 500);
});

module.exports = router;