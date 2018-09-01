/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
         if (tableNumber === '80' && topValue === '305' && leftValue === '250' && height === '70') {
            db.saalbacherhofTables.update(
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

            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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
        } else if (tableNumber === '83' && topValue === '170' && leftValue === '250' && height === '70') {
            db.saalbacherhofTables.update(
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

            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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
         } else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '70' && width === '40') {
             db.saalbacherhofTables.update(
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

             db.saalbacherhofTables.update(
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
                                 "border": "solid 3px #f3efe4",
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
        } else if (tableNumber === '85' && topValue === '85' && leftValue === '250' && height === '35' && width === '145') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "70",
                        "tables.$.width": "40",
                        "tables.$.topValue": "85",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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
        } else if (tableNumber === '86' && topValue === '85' && leftValue === '280' && width === '120') {
            db.saalbacherhofTables.update(
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

            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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
         } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '70') {
             db.saalbacherhofTables.update(
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
             db.saalbacherhofTables.update(
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
                                 "border": "solid 3px #f3efe4",
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
         } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '105') {
             db.saalbacherhofTables.update(
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
             db.saalbacherhofTables.update(
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
                                 "border": "solid 3px #f3efe4",
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
         } else if (tableNumber === '95' && topValue === '179' && leftValue === '187' && height === '140') {
             db.saalbacherhofTables.update(
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
             db.saalbacherhofTables.update(
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
                                 "border": "solid 3px #f3efe4",
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
        } else if (tableNumber === '96' && topValue === '228' && leftValue === '187' && height === '105') {
            db.saalbacherhofTables.update(
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
            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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
            db.saalbacherhofTables.update(
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
                                "border": "solid 3px #f3efe4",
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


        } else if (tableNumber === '97' && topValue === '290' && leftValue === '187' && height === '70') {

             db.saalbacherhofTables.update(
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
             db.saalbacherhofTables.update(
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
                                 "border": "solid 3px #f3efe4",
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