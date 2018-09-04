/**
 * Created by antonhorl on 08.02.18.
 */

module.exports = {
    addInformationToTable: function (req, res, db) {
        console.log("addInformationToTable request made to /addInformationToTable");
        console.log(JSON.stringify(req.body));

        let data = JSON.stringify(req.body),
            splitted = data.split("\\"),
            informationElements2 = [],
            departmentValueDB = "",
            departmentValue = "",
            tableValueArray = [],
            tableValue = "",
            zimmernummerValue = [],
            anreiseValue = [],
            abreiseValue = [],
            name1Value = [],
            aufenthalteValue = [],
            nationValue = [],
            p_serviceValue = [],
            personenAnzahlValue = [],
            newTraceText = [],
            newTraceRoomNumber = [],
            newTraceName = [],
            newTraceEmployee = [],
            newTraceDate = [],
            newTraceTableNumber = [],
            name2Value = [];


        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        console.log('informationElements2 length: -> ' + informationElements2.length);
        console.log(informationElements2);

        if (JSON.stringify(informationElements2).indexOf("topValue") == -1) {
            console.log("Liste dropped");
            if (informationElements2[0]) {
                zimmernummerValue.push(informationElements2[0].substring(1, informationElements2[0].length));
            }
            if (informationElements2[1]) {
                anreiseValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            }
            if (informationElements2[2]) {
                abreiseValue.push(informationElements2[2].substring(1, informationElements2[2].length));
            }
            if (informationElements2[3]) {
                personenAnzahlValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            }
            if (informationElements2[4]) {
                name1Value.push(informationElements2[4].substring(1, informationElements2[4].length));
            }
            if (informationElements2[5]) {
                name2Value.push(informationElements2[5].substring(1, informationElements2[5].length));
            }
            if (informationElements2[6]) {
                nationValue.push(informationElements2[6].substring(1, informationElements2[6].length));
            }
            if (informationElements2[7]) {
                aufenthalteValue.push(informationElements2[7].substring(1, informationElements2[7].length));
            }
            if (informationElements2[8]) {
                p_serviceValue.push(informationElements2[8].substring(1, informationElements2[8].length));
            }

            departmentValueDB = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '').replace(/[A-Z\s]/g, '').replace(' ', '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/[A-Z\s]+\d+/g);
            tableValue = tableValueArray[0].replace(' ', '');

            console.log(departmentValueDB + " " + tableValue);

            setTimeout(function () {

                db.saalbacherhofTables.update(
                    {
                        department: departmentValueDB,
                        "tables.number": tableValue
                    },
                    {
                        $push: {
                            "tables.$.groups": {
                                "zimmernummerValue": zimmernummerValue[0],
                                "anreiseValue": anreiseValue[0],
                                "abreiseValue": abreiseValue[0],
                                "personenAnzahlValue": personenAnzahlValue[0],
                                "name1Value": name1Value[0],
                                "name2Value": name2Value[0],
                                "nationValue": nationValue[0],
                                "aufenthalteValue": aufenthalteValue[0],
                                "p_serviceValue": p_serviceValue[0],
                            }
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("addInformationToTable updated successfully");
                    });
            }, 200);

        } else {
            console.log("umsetzen addInformationToTable");
            let umsetzen = JSON.parse(data);
            console.log("umsetzen");
            console.log(umsetzen);
            for (let i = 0; i < umsetzen[0].groups.length; i++) {
                zimmernummerValue.push(umsetzen[0].groups[i].zimmernummerValue);
                personenAnzahlValue.push(umsetzen[0].groups[i].personenAnzahlValue);
                anreiseValue.push(umsetzen[0].groups[i].anreiseValue);
                abreiseValue.push(umsetzen[0].groups[i].abreiseValue);
                name1Value.push(umsetzen[0].groups[i].name1Value);
                name2Value.push(umsetzen[0].groups[i].name2Value);
                nationValue.push(umsetzen[0].groups[i].nationValue);
                aufenthalteValue.push(umsetzen[0].groups[i].aufenthalteValue);
                p_serviceValue.push(umsetzen[0].groups[i].p_serviceValue);
                newTraceText.push(umsetzen[0].groups[i].newTraceName);
                newTraceRoomNumber.push(umsetzen[0].groups[i].newTraceRoomNumber);
                newTraceName.push(umsetzen[0].groups[i].newTraceName);
                newTraceEmployee.push(umsetzen[0].groups[i].newTraceEmployee);
                newTraceDate.push(umsetzen[0].groups[i].newTraceDate);
                newTraceTableNumber.push(umsetzen[0].groups[i].newTraceTableNumber);
                departmentValueDB = umsetzen[1].targetDepartment;
                tableValue = umsetzen[1].targetTable;
                umsetzen[0].department = umsetzen[1].targetDepartment;
            }
            //console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + "tableValue" + tableValue + "departmentvalue" + departmentValue);


            setTimeout(function () {
                db.saalbacherhofTables.findOne(
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
                        for (let i = 0; i < umsetzen[0].groups.length; i++) {
                            if (name1Value[i]) {
                                db.saalbacherhofTables.update(
                                    {
                                        department: departmentValueDB,
                                        "tables.number": tableValue
                                    },
                                    {
                                        $push: {
                                            "tables.$.groups": {
                                                "zimmernummerValue": zimmernummerValue[i],
                                                "anreiseValue": anreiseValue[i],
                                                "abreiseValue": abreiseValue[i],
                                                "personenAnzahlValue": personenAnzahlValue[i],
                                                "name1Value": name1Value[i],
                                                "name2Value": name2Value[i],
                                                "nationValue": nationValue[i],
                                                "aufenthalteValue": aufenthalteValue[i],
                                                "p_serviceValue": p_serviceValue[i],
                                            }
                                        }
                                    }, function (err, tables) {
                                        if (err) {
                                            console.log("Error");
                                        }
                                        console.log("addInformationToTable updated successfully");
                                    });
                            } else {
                                db.saalbacherhofTables.update(
                                    {
                                        department: departmentValueDB,
                                        "tables.number": tableValue
                                    },
                                    {
                                        $push: {
                                            "tables.$.groups": {
                                                "newTraceText" : newTraceText[i],
                                                "newTraceRoomNumber": newTraceRoomNumber[i],
                                                "newTraceName": newTraceName[i],
                                                "newTraceEmployee": newTraceEmployee[i],
                                                "newTraceDate": newTraceDate[i],
                                                "newTraceTableNumber": newTraceTableNumber[i]
                                            }
                                        }
                                    }, function (err, tables) {
                                        if (err) {
                                            console.log("Error");
                                        }
                                        console.log("addInformationToTable updated successfully");
                                    });

                            }
                        }
                    });
            }, 200);
        }
        setTimeout(function () {
            db.saalbacherhofTables.find(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("Add information to table response");
                    console.log(JSON.stringify(tables));
                });
        }, 1000);
    }
};