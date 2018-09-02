/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '005' && topValue === '312' && leftValue === '722' && height === '187') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "380",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "006",
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
        } else if (tableNumber === '011' && topValue === '619' && leftValue === '532' && height === '100') {
                db.saalbacherhofTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.height": "200",
                            "tables.$.topValue": "515",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("moveTable Update successful");
                    });
                db.saalbacherhofTables.update(
                    {department: departmentValue}, {
                        $pull: {
                            tables: {
                                "number": "012",
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
        } else if (tableNumber === '011' && topValue === '515' && leftValue === '532' && height === '200') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "300",
                        "tables.$.topValue": "407",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "013",
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
        } else if (tableNumber === '011' && topValue === '407' && leftValue === '532' && height === '300') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "400",
                        "tables.$.topValue": "287",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "014",
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
        } else if (tableNumber === '012' && topValue === '515' && leftValue === '532' && height === '100') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                        "tables.$.topValue": "407",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "013",
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
        } else if (tableNumber === '012' && topValue === '407' && leftValue === '532' && height === '200') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "300",
                        "tables.$.topValue": "287",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "014",
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
        } else if (tableNumber === '013' && topValue === '407' && leftValue === '532' && height === '100') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                        "tables.$.topValue": "287",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "014",
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
        } else if (tableNumber === '024' && topValue === '298' && leftValue === '27' && height === '100') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "025",
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
        } else if (tableNumber === '024' && topValue === '298' && leftValue === '27' && height === '200') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "300",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "026",
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
        } else if (tableNumber === '025' && topValue === '408' && leftValue === '27' && height === '100') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {department: departmentValue}, {
                    $pull: {
                        tables: {
                            "number": "026",
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
        }        }
};
