/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === 'Tee1' && topValue === '510' && leftValue === '160' && height === '65') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "Tee2",
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
        } else if (tableNumber === 'Tee1' && topValue === '410' && leftValue === '160' && height === '130') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "Tee3",
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
        } else if (tableNumber === 'Tee1' && topValue === '310' && leftValue === '160' && height === '195') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "Tee4",
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
        } else if (tableNumber === 'Tee1' && topValue === '210' && leftValue === '160' && height === '260') {
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
                {}, {
                    $pull: {
                        tables: {
                            "number": "Tee5",
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
        } else if (tableNumber === 'Tee2' && topValue === '420' && leftValue === '160' && height === '65') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "130",
                        "tables.$.topValue": "310",
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
                            "number": "Tee3",
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
        } else if (tableNumber === 'Tee2' && topValue === '310' && leftValue === '160' && height === '130') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "195",
                        "tables.$.topValue": "210",

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
                            "number": "Tee4",
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
        } else if (tableNumber === 'Tee2' && topValue === '210' && leftValue === '160' && height === '195') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "260",
                        "tables.$.topValue": "140",

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
                            "number": "Tee5",
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
        } else if (tableNumber === 'Tee3' && topValue === '325' && leftValue === '160' && height === '65') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "130",
                        "tables.$.topValue": "210",
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
                            "number": "Tee4",
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
        } else if (tableNumber === 'Tee3' && topValue === '210' && leftValue === '160' && height === '130') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "195",
                        "tables.$.topValue": "140",

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
                            "number": "Tee5",
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
        } else if (tableNumber === 'Tee3' && topValue === '140' && leftValue === '160' && height === '195') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "65",
                        "tables.$.topValue": "325",

                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
        } else if (tableNumber === 'Tee4' && topValue === '225' && leftValue === '160' && height === '65') {
            db.hubertusTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "130",
                        "tables.$.topValue": "140",
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
                            "number": "Tee5",
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
        }
    }
};
