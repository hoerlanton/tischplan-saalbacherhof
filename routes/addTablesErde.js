/**
 * Created by antonhorl on 06.01.18.
 */


module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '001' && topValue === '516' && leftValue === '838' && width === '120') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "240",
                        "tables.$.leftValue": "705",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "002",
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
        } else if (tableNumber === '003' && topValue === '499' && leftValue === '572' && width === '123') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "240",
                        "tables.$.leftValue": "441",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "004",
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
        } else if (tableNumber === '003' && topValue === '499' && leftValue === '441' && width === '240') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "360",
                        "tables.$.leftValue": "306",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "005",
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
        } else if (tableNumber === '004' && topValue === '499' && leftValue === '441' && width === '123') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "240",
                        "tables.$.leftValue": "306",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "005",
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
        } else if (tableNumber === '007' && topValue === '407' && leftValue === '105' && height === '82') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.leftValue": "81",
                        "tables.$.topValue": "318",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "008",
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
        } else if (tableNumber === '007' && topValue === '318' && leftValue === '81' && height === '160') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.leftValue": "53",
                        "tables.$.topValue": "229",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "009",
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
        } else if (tableNumber === '007' && topValue === '229' && leftValue === '53' && height === '240') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.leftValue": "53",
                        "tables.$.topValue": "137",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "010",
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
        } else if (tableNumber === '008' && topValue === '318' && leftValue === '81' && height === '82') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.leftValue": "53",
                        "tables.$.topValue": "229",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "009",
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
        } else if (tableNumber === '008' && topValue === '229' && leftValue === '53' && height === '160') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.leftValue": "28",
                        "tables.$.topValue": "137",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "010",
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
        } else if (tableNumber === '009' && topValue === '229' && leftValue === '53' && height === '82') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.leftValue": "28",
                        "tables.$.topValue": "137",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "010",
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
        } else if (tableNumber === '012' && topValue === '120' && leftValue === '323' && height === '141') {
            db.saalbacherhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "280",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.saalbacherhofTables.update(
                {}, {
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
        }        }
};