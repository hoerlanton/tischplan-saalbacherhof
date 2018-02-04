/**
 * Created by antonhorl on 06.01.18.
 */


module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '12' && topValue === '220' && leftValue === '400' && height === '60') {
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
        } else if (tableNumber === '25' && topValue === '160' && leftValue === '300' && height === '60') {
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
        } else if (tableNumber === '22' && topValue === '220' && leftValue === '180' && height === '60') {
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
        }
    }
};