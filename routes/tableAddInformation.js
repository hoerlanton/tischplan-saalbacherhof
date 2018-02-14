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
            nameValue = [],
            zimmernummerValue = [],
            kategorieValue = [],
            preisTypValue = [],
            anreiseValue = [],
            abreiseValue = [],
            personenAnzahlValue = [],
            notiz2Value = [],
            notiz1Value = [],
            departmentValue = "",
            tableValue = "",
            tableValueArray = [],
            traceValue = [],
            bemerkungValue = [],
            preisValue = [],
            vipValue = [],
            resStatusValue = [];

        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        console.log('informationElements2 length: -> ' + informationElements2.length);
        console.log(informationElements2);

        if (informationElements2.length > 12) {
            console.log("Liste dropped");

            nameValue.push(informationElements2[0].substring(1, informationElements2[0].length));
            kategorieValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            zimmernummerValue.push(informationElements2[2].substring(1, informationElements2[2].length));
            preisTypValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            anreiseValue.push(informationElements2[4].substring(1, informationElements2[4].length));
            abreiseValue.push(informationElements2[5].substring(1, informationElements2[5].length));
            personenAnzahlValue.push(informationElements2[6].substring(1, informationElements2[6].length));
            notiz1Value.push(informationElements2[7].substring(1, informationElements2[7].length));
            notiz2Value.push(informationElements2[8].substring(1, informationElements2[8].length));
            traceValue.push(informationElements2[9].substring(1, informationElements2[9].length));
            bemerkungValue.push(informationElements2[10].substring(1, informationElements2[10].length));
            preisValue.push(informationElements2[11].substring(1, informationElements2[11].length));
            vipValue.push(informationElements2[informationElements2.length - 3].substring(1, informationElements2[informationElements2.length - 3].length));
            resStatusValue.push(informationElements2[informationElements2.length - 2].substring(1, informationElements2[informationElements2.length - 2].length));

            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/g);
            if (tableValueArray[1] === "1" || tableValueArray[1] === "2" || tableValueArray[1] === "3" || tableValueArray[1] === "4") {
                console.log("HOIOI");
                tableValue = tableValueArray.join(".");
            } else {
                tableValue = tableValueArray[0];
            }

            console.log(tableValueArray);
            console.log(tableValue);

            console.log(nameValue[0]);
            console.log(tableValue + " " + departmentValue);


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
            setTimeout(function () {
                db.hubertusTables.update(
                    {
                        department: departmentValueDB,
                        "tables.number": tableValue
                    },
                    {
                        $push: {
                            "tables.$.groups": {
                                "nameValue": nameValue[0],
                                "zimmernummerValue": zimmernummerValue[0],
                                "anreiseValue": anreiseValue[0],
                                "abreiseValue": abreiseValue[0],
                                "personenAnzahlValue": personenAnzahlValue[0],
                                "notiz2Value": notiz2Value[0],
                                "notiz1Value": notiz1Value[0],
                                "preisValue": preisValue[0],
                                "kategorieValue": kategorieValue[0],
                                "preisTypValue": preisTypValue[0],
                                "vipValue": vipValue[0],
                                "resStatusValue": resStatusValue[0],
                                "traceValue": traceValue[0],
                                "bemerkungValue": bemerkungValue[0],
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
                nameValue.push(umsetzen[0].groups[i].nameValue);
                personenAnzahlValue.push(umsetzen[0].groups[i].personenAnzahlValue);
                anreiseValue.push(umsetzen[0].groups[i].anreiseValue);
                abreiseValue.push(umsetzen[0].groups[i].abreiseValue);
                traceValue.push(umsetzen[0].groups[i].traceValue);
                notiz2Value.push(umsetzen[0].groups[i].notiz2Value);
                notiz1Value.push(umsetzen[0].groups[i].notiz1Value);
                bemerkungValue.push(umsetzen[0].groups[i].bemerkungValue);
                vipValue.push(umsetzen[0].groups[i].vipValue);
                resStatusValue.push(umsetzen[0].groups[i].resStatusValue);
                preisValue.push(umsetzen[0].groups[i].preisValue);
                departmentValueDB = umsetzen[1].targetDepartment;
                tableValue = umsetzen[1].targetTable;
                umsetzen[0].department = umsetzen[1].targetDepartment;
            }
            //console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + "tableValue" + tableValue + "departmentvalue" + departmentValue);


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
                        for (let i = 0; i < umsetzen[0].groups.length; i++) {
                            db.hubertusTables.update(
                                {
                                    department: departmentValueDB,
                                    "tables.number": tableValue
                                },
                                {
                                    $push: {
                                        "tables.$.groups": {
                                            "nameValue": nameValue[i],
                                            "zimmernummerValue": zimmernummerValue[i],
                                            "anreiseValue": anreiseValue[i],
                                            "abreiseValue": abreiseValue[i],
                                            "personenAnzahlValue": personenAnzahlValue[i],
                                            "notiz2Value": notiz2Value[i],
                                            "notiz1Value": notiz1Value[i],
                                            "preisValue": preisValue[i],
                                            "kategorieValue": kategorieValue[i],
                                            "preisTypValue": preisTypValue[i],
                                            "vipValue": vipValue[i],
                                            "resStatusValue": resStatusValue[i],
                                            "traceValue": traceValue[i],
                                            "bemerkungValue": bemerkungValue[i],
                                        }
                                    }
                                }, function (err, tables) {
                                    if (err) {
                                        console.log("Error");
                                    }
                                    console.log("addInformationToTable updated successfully");
                                });
                        }
                    });
            }, 200);
        }
        setTimeout(function () {
            db.hubertusTables.find(
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