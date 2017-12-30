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
    //Sonnberg-Zirbn
    //50

    console.log('tableNumber' + tableNumber);
    console.log('departmentValue' + departmentValue);
    console.log('topValue' + topValue);
    console.log('leftValue' + leftValue);

    if (tableNumber === '19' && topValue === '200' && leftValue === '550') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "580",
                    "tables.$.width": "60",
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
                "number": "20",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '19' && topValue === '200' && leftValue === '580' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "580",
                    "tables.$.width": "90",
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
                "number": "21",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '19' && topValue === '200' && leftValue === '580' && width === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "550",
                    "tables.$.width": "30",
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
                    $each: [ {
                        "arrayIndex": "19",
                        "department": "Restaurant",
                        "number": "20",
                        "topValue": "200",
                        "leftValue": "610",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "30",
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
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: {
                tables: {
                    $each: [ {
                        "arrayIndex": "20",
                        "department": "Restaurant",
                        "number": "21",
                        "topValue": "200",
                        "leftValue": "670",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "30",
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
    } else if (tableNumber === '20' && topValue === '200' && leftValue === '610') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "640",
                    "tables.$.width": "60",
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
                "number": "21",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '20' && topValue === '200' && leftValue === '640') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "610",
                    "tables.$.width": "30",
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
                    $each: [ {
                        "arrayIndex": "20",
                        "department": "Restaurant",
                        "number": "21",
                        "topValue": "200",
                        "leftValue": "670",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "30",
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
    } else if (tableNumber === '48' && topValue === '220' && leftValue === '400' && height === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "260",
                    "tables.$.leftValue": "400",
                    "tables.$.height": "80",
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
                "number": "49",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '48' && topValue === '260' && leftValue === '400' && height === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.leftValue": "400",
                    "tables.$.height": "40",
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
                    $each: [ {
                        "arrayIndex": 9,
                        "department": "Sonnberg-Zirbn",
                        "number": "49",
                        "topValue": "340",
                        "leftValue": "400",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "60",
                        "height": "40"
                    } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '50' && topValue === '430') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "460",
                    "tables.$.height": "30",
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
                    $each: [ { "arrayIndex": 11,
                        "department": "Sonnberg-Zirbn",
                        "number": "51",
                        "topValue": "400",
                        "leftValue": "200",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "width": "60",
                        "height": "30",
                        "border": "solid 1px #0a7a74" } ],
                    $sort: { number: 1 } } } },
            { multi: true },
            function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '50' && topValue === '460') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "430",
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
            }, { $pull: { tables: {
                "number": "51",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("removeTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '52' && topValue === '280' && leftValue === '200') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.leftValue": "230",
                    "tables.$.width": "30",
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
                    $each: [ {
                        "arrayIndex": 13,
                        "department": "Sonnberg-Zirbn",
                        "number": "53",
                        "topValue": "280",
                        "leftValue": "170",
                        "bgColor": "#ffffff",
                        "isBesetzt": "false",
                        "placeholder": "true",
                        "border": "solid 1px #0a7a74",
                        "width": "30",
                        "height": "60" }],
                    $sort: { number:  1 },
                } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log(err);
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '52' && topValue === '280' && leftValue === '230') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
                    "tables.$.leftValue": "200",
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
                "number": "53",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '54' && topValue === '320' && leftValue === '50') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "290",
                    "tables.$.leftValue": "50",
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
            }, { $pull: { tables: {
                "number": "55",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '54' && topValue === '290' && leftValue === '50' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "260",
                    "tables.$.height": "90",
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
                "number": "56",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '54' && topValue === '260' && leftValue === '50' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.height": "120",
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
                "number": "57",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '54' && topValue === '200' && leftValue === '50' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "320",
                    "tables.$.leftValue": "50",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [ {"arrayIndex": 15,
                    "department": "Sonnberg-Zirbn",
                    "number": "55",
                    "topValue": "260",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"} ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [     {
                    "arrayIndex": 16,
                    "department": "Sonnberg-Zirbn",
                    "number": "56",
                    "topValue": "200",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [     {
                    "arrayIndex": 17,
                    "department": "Sonnberg-Zirbn",
                    "number": "57",
                    "topValue": "140",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '55' && topValue === '260' && leftValue === '50') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "230",
                    "tables.$.leftValue": "50",
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
            }, { $pull: { tables: {
                "number": "56",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '55' && topValue === '230' && leftValue === '50' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "50",
                    "tables.$.height": "90",
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
                "number": "57",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '55' && topValue === '200' && leftValue === '50' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "260",
                    "tables.$.leftValue": "50",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": 16,
                    "department": "Sonnberg-Zirbn",
                    "number": "56",
                    "topValue": "200",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": 17,
                    "department": "Sonnberg-Zirbn",
                    "number": "57",
                    "topValue": "140",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '56' && topValue === '200' && leftValue === '50') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "170",
                    "tables.$.leftValue": "50",
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
            }, { $pull: { tables: {
                "number": "57",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '56' && topValue === '170' && leftValue === '50') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "200",
                    "tables.$.leftValue": "50",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": 17,
                    "department": "Sonnberg-Zirbn",
                    "number": "57",
                    "topValue": "140",
                    "leftValue": "50",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '58' && topValue === '140' && leftValue === '170' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "140",
                    "tables.$.leftValue": "170",
                    "tables.$.width": "60",
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
                "number": "59",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });

    } else if (tableNumber === '58' && topValue === '140' && leftValue === '170' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "140",
                    "tables.$.leftValue": "170",
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": 19,
                    "department": "Sonnberg-Zirbn",
                    "number": "59",
                    "topValue": "140",
                    "leftValue": "230",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '60' && topValue === '440' && leftValue === '220' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "440",
                    "tables.$.leftValue": "250",
                    "tables.$.width": "60",
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
                "number": "61",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '60' && topValue === '440' && leftValue === '250' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "440",
                    "tables.$.leftValue": "250",
                    "tables.$.width": "90",
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
                "number": "62",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '60' && topValue === '440' && leftValue === '250' && width === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "440",
                    "tables.$.leftValue": "250",
                    "tables.$.width": "120",
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
                "number": "63",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });

    } else if (tableNumber === '60' && topValue === '440' && leftValue === '250' && width === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "440",
                    "tables.$.leftValue": "220",
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": "3",
                    "department": "Bauernstube",
                    "number": "63",
                    "topValue": "440",
                    "leftValue": "400",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": "2",
                    "department": "Bauernstube",
                    "number": "62",
                    "topValue": "440",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [     {
                    "arrayIndex": "1",
                    "department": "Bauernstube",
                    "number": "61",
                    "topValue": "440",
                    "leftValue": "280",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '61' && topValue === '440' && leftValue === '280'  && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                "number": "62",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '61' && topValue === '440' && leftValue === '280' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
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
                "number": "63",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '61' && topValue === '440' && leftValue === '280' && width === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "64",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '61' && topValue === '440' && leftValue === '280' && width === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": "3",
                    "department": "Bauernstube",
                    "number": "63",
                    "topValue": "440",
                    "leftValue": "400",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": "2",
                    "department": "Bauernstube",
                    "number": "62",
                    "topValue": "440",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "4",
                    "department": "Bauernstube",
                    "number": "64",
                    "topValue": "440",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '62' && topValue === '440' && leftValue === '340' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                "number": "63",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '62' && topValue === '440' && leftValue === '340' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
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
                "number": "64",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '62' && topValue === '440' && leftValue === '340' && width === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "65",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '62' && topValue === '440' && leftValue === '340' && width === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [      {
                    "arrayIndex": "3",
                    "department": "Bauernstube",
                    "number": "63",
                    "topValue": "440",
                    "leftValue": "400",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [         {
                    "arrayIndex": "5",
                    "department": "Bauernstube",
                    "number": "65",
                    "topValue": "440",
                    "leftValue": "520",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "4",
                    "department": "Bauernstube",
                    "number": "64",
                    "topValue": "440",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '63' && topValue === '440' && leftValue === '400' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                "number": "64",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '63' && topValue === '440' && leftValue === '400' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
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
                "number": "65",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '63' && topValue === '440' && leftValue === '400' && width === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "66",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '63' && topValue === '440' && leftValue === '400' && width === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [       {
                    "arrayIndex": "6",
                    "department": "Bauernstube",
                    "number": "66",
                    "topValue": "440",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [         {
                    "arrayIndex": "5",
                    "department": "Bauernstube",
                    "number": "65",
                    "topValue": "440",
                    "leftValue": "520",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "4",
                    "department": "Bauernstube",
                    "number": "64",
                    "topValue": "440",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '64' && topValue === '440' && leftValue === '460' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                "number": "65",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '64' && topValue === '440' && leftValue === '460' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "90",
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
                "number": "66",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '64' && topValue === '440' && leftValue === '460' && width === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "6",
                    "department": "Bauernstube",
                    "number": "66",
                    "topValue": "440",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [          {
                    "arrayIndex": "5",
                    "department": "Bauernstube",
                    "number": "65",
                    "topValue": "440",
                    "leftValue": "520",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '65' && topValue === '440' && leftValue === '520' && width === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "60",
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
                "number": "66",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '65' && topValue === '440' && leftValue === '520' && width === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "6",
                    "department": "Bauernstube",
                    "number": "66",
                    "topValue": "440",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "30",
                    "height": "60"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '67' && topValue === '340' && leftValue === '580' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
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
                "number": "68",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '67' && topValue === '310' && leftValue === '580' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
                    "tables.$.topValue": "280",
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
                "number": "69",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '67' && topValue === '280' && leftValue === '580' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                    "tables.$.topValue": "250",
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
                "number": "70",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '67' && topValue === '250' && leftValue === '580' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
                    "tables.$.topValue": "340",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "8",
                    "department": "Bauernstube",
                    "number": "68",
                    "topValue": "280",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "9",
                    "department": "Bauernstube",
                    "number": "69",
                    "topValue": "220",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "10",
                    "department": "Bauernstube",
                    "number": "70",
                    "topValue": "160",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '68' && topValue === '280' && leftValue === '580' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "250",
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
            }, { $pull: { tables: {
                "number": "69",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '68' && topValue === '250' && leftValue === '580' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "90",
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
                "number": "70",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '68' && topValue === '220' && leftValue === '580' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "280",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "9",
                    "department": "Bauernstube",
                    "number": "69",
                    "topValue": "220",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "10",
                    "department": "Bauernstube",
                    "number": "70",
                    "topValue": "160",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '69' && topValue === '220' && leftValue === '580' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "190",
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
            }, { $pull: { tables: {
                "number": "70",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '69' && topValue === '190' && leftValue === '580' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "10",
                    "department": "Bauernstube",
                    "number": "70",
                    "topValue": "160",
                    "leftValue": "580",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
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
            }, { $pull: { tables: {
                "number": "72",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "90",
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
                "number": "73",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "120",
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
                "number": "74",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '71' && topValue === '160' && leftValue === '460' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [         {
                    "arrayIndex": "12",
                    "department": "Bauernstube",
                    "number": "72",
                    "topValue": "220",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "13",
                    "department": "Bauernstube",
                    "number": "73",
                    "topValue": "280",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "14",
                    "department": "Bauernstube",
                    "number": "74",
                    "topValue": "340",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "73",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
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
                "number": "74",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });


    } else if (tableNumber === '72' && topValue === '220' && leftValue === '460' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "13",
                    "department": "Bauernstube",
                    "number": "73",
                    "topValue": "280",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "14",
                    "department": "Bauernstube",
                    "number": "74",
                    "topValue": "340",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '73' && topValue === '280' && leftValue === '460' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "74",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '73' && topValue === '280' && leftValue === '460' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "14",
                    "department": "Bauernstube",
                    "number": "74",
                    "topValue": "340",
                    "leftValue": "460",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '75' && topValue === '340' && leftValue === '340' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
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
                "number": "76",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '75' && topValue === '310' && leftValue === '340' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
                    "tables.$.topValue": "280",
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
                "number": "77",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '75' && topValue === '280' && leftValue === '340' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                    "tables.$.topValue": "250",
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
                "number": "78",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '75' && topValue === '250' && leftValue === '340' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
                    "tables.$.topValue": "340",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "16",
                    "department": "Bauernstube",
                    "number": "76",
                    "topValue": "280",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "17",
                    "department": "Bauernstube",
                    "number": "77",
                    "topValue": "220",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "18",
                    "department": "Bauernstube",
                    "number": "78",
                    "topValue": "160",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '76' && topValue === '280' && leftValue === '340' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "250",
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
            }, { $pull: { tables: {
                "number": "77",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '76' && topValue === '250' && leftValue === '340' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "90",
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
                "number": "78",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '76' && topValue === '220' && leftValue === '340' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "280",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "17",
                    "department": "Bauernstube",
                    "number": "77",
                    "topValue": "220",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "18",
                    "department": "Bauernstube",
                    "number": "78",
                    "topValue": "160",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '77' && topValue === '220' && leftValue === '340' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "190",
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
            }, { $pull: { tables: {
                "number": "78",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '77' && topValue === '190' && leftValue === '340' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "18",
                    "department": "Bauernstube",
                    "number": "78",
                    "topValue": "160",
                    "leftValue": "340",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '79' && topValue === '340' && leftValue === '220' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "60",
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
                "number": "80",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '79' && topValue === '310' && leftValue === '220' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
                    "tables.$.topValue": "280",
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
                "number": "81",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '79' && topValue === '280' && leftValue === '220' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "120",
                    "tables.$.topValue": "250",
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
                "number": "82",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '79' && topValue === '250' && leftValue === '220' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
                    "tables.$.topValue": "340",
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
            }, { $push: { tables: {
                $each: [         {
                    "arrayIndex": "20",
                    "department": "Bauernstube",
                    "number": "80",
                    "topValue": "280",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [       {
                    "arrayIndex": "21",
                    "department": "Bauernstube",
                    "number": "81",
                    "topValue": "220",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "22",
                    "department": "Bauernstube",
                    "number": "82",
                    "topValue": "160",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '80' && topValue === '280' && leftValue === '220' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "250",
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
            }, { $pull: { tables: {
                "number": "81",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '80' && topValue === '250' && leftValue === '220' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "90",
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
                "number": "82",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '80' && topValue === '220' && leftValue === '220' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "280",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [       {
                    "arrayIndex": "21",
                    "department": "Bauernstube",
                    "number": "81",
                    "topValue": "220",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "22",
                    "department": "Bauernstube",
                    "number": "82",
                    "topValue": "160",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '81' && topValue === '220' && leftValue === '220' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "190",
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
            }, { $pull: { tables: {
                "number": "82",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '81' && topValue === '190' && leftValue === '220' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "220",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "22",
                    "department": "Bauernstube",
                    "number": "82",
                    "topValue": "160",
                    "leftValue": "220",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '30') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
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
            }, { $pull: { tables: {
                "number": "84",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "90",
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
                "number": "85",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "120",
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
                "number": "86",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "160",
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [         {
                    "arrayIndex": "24",
                    "department": "Bauernstube",
                    "number": "84",
                    "topValue": "220",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "25",
                    "department": "Bauernstube",
                    "number": "85",
                    "topValue": "280",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "26",
                    "department": "Bauernstube",
                    "number": "86",
                    "topValue": "340",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "85",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
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
                "number": "86",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "87",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });


    } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "25",
                    "department": "Bauernstube",
                    "number": "85",
                    "topValue": "280",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "26",
                    "department": "Bauernstube",
                    "number": "86",
                    "topValue": "340",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "27",
                    "department": "Bauernstube",
                    "number": "87",
                    "topValue": "400",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "86",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
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
                "number": "87",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "88",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "28",
                    "department": "Bauernstube",
                    "number": "88",
                    "topValue": "460",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "26",
                    "department": "Bauernstube",
                    "number": "86",
                    "topValue": "340",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "27",
                    "department": "Bauernstube",
                    "number": "87",
                    "topValue": "400",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '86' && topValue === '340' && leftValue === '60' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "87",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '86' && topValue === '340' && leftValue === '60'  && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
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
                "number": "88",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '86' && topValue === '340' && leftValue === '60'  && height === '90') {
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
            {
            }, { $pull: { tables: {
                "number": "89",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '86' && topValue === '340' && leftValue === '60'  && height === '120') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "28",
                    "department": "Bauernstube",
                    "number": "88",
                    "topValue": "460",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [            {
                    "arrayIndex": "29",
                    "department": "Bauernstube",
                    "number": "89",
                    "topValue": "520",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "27",
                    "department": "Bauernstube",
                    "number": "87",
                    "topValue": "400",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '87' && topValue === '400' && leftValue === '60' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "88",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '87' && topValue === '400' && leftValue === '60' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "90",
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
                "number": "89",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '87' && topValue === '400' && leftValue === '60' && height === '90') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [        {
                    "arrayIndex": "28",
                    "department": "Bauernstube",
                    "number": "88",
                    "topValue": "460",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
        db.hubertusTables.update(
            {
                department: departmentValue,
            }, { $push: { tables: {
                $each: [            {
                    "arrayIndex": "29",
                    "department": "Bauernstube",
                    "number": "89",
                    "topValue": "520",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '88' && topValue === '460' && leftValue === '60' && height === '30') {
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
            }, { $pull: { tables: {
                "number": "89",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });

    } else if (tableNumber === '88' && topValue === '460' && leftValue === '60' && height === '60') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "30",
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
            }, { $push: { tables: {
                $each: [            {
                    "arrayIndex": "29",
                    "department": "Bauernstube",
                    "number": "89",
                    "topValue": "520",
                    "leftValue": "60",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "60",
                    "height": "30"
                } ],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '501' && topValue === '115' && leftValue === '430' && width === '40') {
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
            {
            }, { $pull: { tables: {
                "number": "502",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '501' && topValue === '115' && leftValue === '430' && width === '80') {
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
            }, { $push: { tables: {
                $each: [              {
                    "arrayIndex": "1",
                    "department": "Wintergarten",
                    "number": "502",
                    "topValue": "115",
                    "leftValue": "500",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "40",
                    "height": "40"
                }],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '503' && topValue === '115' && leftValue === '590' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.transformValue": "rotate(0deg)",
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
                "number": "504",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '503' && topValue === '115' && leftValue === '590' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.transformValue": "rotate(45deg)",
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
            }, { $push: { tables: {
                $each: [              {
                    "arrayIndex": "3",
                    "department": "Wintergarten",
                    "number": "504",
                    "topValue": "115",
                    "leftValue": "680",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "40",
                    "height": "40",
                    "transformValue": "rotate(45deg)"
                }],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });

    } else if (tableNumber === '505' && topValue === '215' && leftValue === '590' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.transformValue": "rotate(0deg)",
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
                "number": "506",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '505' && topValue === '215' && leftValue === '590' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.transformValue": "rotate(45deg)",
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
            }, { $push: { tables: {
                $each: [              {
                    "arrayIndex": "5",
                    "department": "Wintergarten",
                    "number": "506",
                    "topValue": "215",
                    "leftValue": "690",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "40",
                    "height": "40",
                    "transformValue": "rotate(45deg)"
                }],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '515' && topValue === '380' && leftValue === '280' && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "80",
                    "tables.$.leftValue": "250",
                    "tables.$.transformValue": "rotate(0deg)",
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
                "number": "516",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '515' && topValue === '380' && leftValue === '250' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "40",
                    "tables.$.leftValue": "280",
                    "tables.$.transformValue": "rotate(45deg)",
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
            }, { $push: { tables: {
                $each: [              {
                    "arrayIndex": "15",
                    "department": "Wintergarten",
                    "number": "516",
                    "topValue": "380",
                    "leftValue": "200",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "40",
                    "height": "40",
                    "transformValue": "rotate(45deg)"
                }],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    } else if (tableNumber === '523' && topValue === '180' && leftValue === '260'  && width === '40') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "110",
                    "tables.$.leftValue": "260",
                    "tables.$.width": "80",
                    "tables.$.transformValue": "rotate(0deg)",
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
                "number": "524",
            } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
                console.log(tables);
            });
    } else if (tableNumber === '523' && topValue === '110' && leftValue === '260' && width === '80') {
        db.hubertusTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.topValue": "180",
                    "tables.$.leftValue": "260",
                    "tables.$.width": "40",
                    "tables.$.transformValue": "rotate(45deg)",

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
            }, { $push: { tables: {
                $each: [              {
                    "arrayIndex": "23",
                    "department": "Wintergarten",
                    "number": "524",
                    "topValue": "115",
                    "leftValue": "300",
                    "bgColor": "#ffffff",
                    "isBesetzt": "false",
                    "placeholder": "true",
                    "border": "solid 1px #0a7a74",
                    "width": "40",
                    "height": "40",
                    "transformValue": "rotate(45deg)"
                }],
                $sort: { number: 1 } } } },
            { multi: true
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addTable Update successful");
            });
    }        setTimeout(function() {
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


/*


 //9
 if (g === 8 && this.leftValues[f] === 180 && this.topValues[g] === 200) {
 this.topValues[g] = 200;
 this.leftValues[f] = 210;
 this.tables.splice(j + 1, 1, 9);
 } else if (g === 8 && this.leftValues[f] === 210 && this.topValues[g] === 200) {
 this.topValues[g] = 200;
 this.leftValues[f] = 180;
 this.tables.splice(j + 1, 1, 10);

 //523
 if (g === 23 && this.leftValues[f] === 300 && this.topValues[g] === 115) {
 this.topValues[g] = 130;
 this.leftValues[f] = 260;
 this.tables.splice(j, 1, 523);
 } else if (g === 23 && this.leftValues[f] === 260 && this.topValues[g] === 130) {
 this.topValues[g] = 115;
 this.leftValues[f] = 300;
 this.tables.splice(j, 1, 524);
 }


 });
 */

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

    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Bauernstube") {
        departmentValueDB = "Bauernstube";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
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


    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Bauernstube") {
        departmentValueDB = "Bauernstube";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
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
        preistypValue = informationElements2[2][1].substring(1, informationElements2[2][1].length);
        anreiseValue = informationElements2[3][1].substring(1, informationElements2[3][1].length);
        abreiseValue = informationElements2[4][1].substring(1, informationElements2[4][1].length);
        personenAnzahlValue = informationElements2[5][1].substring(1, informationElements2[5][1].length);
        katValue = informationElements2[6][1].substring(1, informationElements2[6][1].length);
        notiz1Value = informationElements2[7][1].substring(1, informationElements2[7][1].length);
        notiz2Value = informationElements2[8][1].substring(1, informationElements2[8][1].length);
        bemerkungValue = informationElements2[9][1].substring(1, informationElements2[9][1].length);
        if (informationElements2.length === 12) {
            bemerkungValue1 = informationElements2[10][0].substring(1, informationElements2[10][0].length);
            bemerkungValue2 = informationElements2[informationElements2.length - 2][0].substring(1, informationElements2[informationElements2.length - 2][0].length);
        } else if (informationElements2.length === 11) {
            bemerkungValue1 = informationElements2[10][0].substring(1, informationElements2[10][0].length);
        }
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


    if(departmentValue === "SonnbergZirbn") {
        departmentValueDB = "Sonnberg-Zirbn";
    }
    else if(departmentValue === "Bauernstube") {
        departmentValueDB = "Bauernstube";
    }
    else if(departmentValue === "Restaurant") {
        departmentValueDB = "Restaurant";
    }
    else if(departmentValue === "Wintergarten") {
        departmentValueDB = "Wintergarten";
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
                if (JSON.stringify(tablesfirst.tables[0]).length < 350) {
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
                } else if (JSON.stringify(tablesfirst.tables[0]).length > 350 && JSON.stringify(tablesfirst.tables[0]).length < 650) {
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
                } else if (JSON.stringify(tablesfirst.tables[0]).length > 650) {
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