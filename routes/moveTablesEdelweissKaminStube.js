/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    moveTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '80' && topValue === '345' && leftValue === '250' && height === '35') {
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
        } else if (tableNumber === '80' && topValue === '305' && leftValue === '250' && height === '70') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '83' && topValue === '212' && leftValue === '250' && height === '35') {
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
        } else if (tableNumber === '83' && topValue === '170' && leftValue === '250' && height === '70') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });

            //____________3


        } else if (tableNumber === '85' && topValue === '130' && leftValue === '250' && height === '35') {
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
        } else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '70') {
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
        } else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '35' && width === '145') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
            db.hubertusTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
            //____________

        } else if (tableNumber === '86' && topValue === '85' && leftValue === '250' && width === '40') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "120",
                        "tables.$.leftValue": "280",
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
        } else if (tableNumber === '86' && topValue === '85' && leftValue === '280' && width === '120') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "250",
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });


        } else if (tableNumber === '96' && topValue === '228' && leftValue === '187' && height === '35') {
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
                            "number": "97",
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
        } else if (tableNumber === '96' && topValue === '228' && leftValue === '187' && height === '70') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "98",
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

        } else if (tableNumber === '96' && topValue === '228' && leftValue === '187' && height === '105') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
            db.hubertusTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });


        } else if (tableNumber === '97' && topValue === '290' && leftValue === '187' && height === '35') {
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
                            "number": "98",
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
        } else if (tableNumber === '97' && topValue === '290' && leftValue === '187' && height === '70') {

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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });


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
                {}, {
                    $pull: {
                        tables: {
                            "number": "96",
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "97",
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "98",
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
            db.hubertusTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
            db.hubertusTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });


        } else if (tableNumber === '73' && topValue === '481' && leftValue === '559' && width === '40') {
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
        } else if (tableNumber === '73' && topValue === '481' && leftValue === '500' && width === '80') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });

        } else if (tableNumber === '70' && topValue === '330' && leftValue === '458' && width === '40') {
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
        } else if (tableNumber === '70' && topValue === '330' && leftValue === '500' && width === '80') {
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
                }, {
                    $push: {
                        tables: {
                            $each: [{
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
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        }
    }
};