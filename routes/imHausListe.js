/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveImHausListe: function (req, res, db) {

//JSON string is parsed to a JSON object

        console.log("JSON.stringify(req.body)");
        console.log(JSON.stringify(req.body));

        let imHausListeData = {
            data: "",
        };

        let imHausListe = [];

        imHausListeData.data = req.body;

        let name = [];
        let nation = [];
        let sprache = [];
        let zimmerNummer = [];
        let kat = [];
        let pTyp = [];
        let anreise = [];
        let abreise  = [];
        let erwKi = [];
        let rbSou = [];
        let notiz2 = [];
        let notiz1 = [];
        let bemerkung = [];
        let trace = [];
        let preis = [];
        let vip = [];
        let resStatus = [];
        let counter = 0;
        console.log(imHausListeData.data.length);
        //console.log(imHausListeData.data);
        let row = 21;
        for (row; row < 10000; row += 2) {
            let accessorNameA = "A" + row;
            let accessorNameC = "C" + row;
            let accessorNameD = "D" + row;
            let accessorNameE = "E" + row;
            let accessorNameF = "F" + row;
            let accessorNameG = "G" + row;
            let accessorNameH = "H" + row;
            let accessorNameI = "I" + row;
            let accessorNameJ = "J" + row;
            let accessorNameK = "K" + row;

            //console.log(accessorNameA);
            //console.log(accessorNameC);

            console.log(imHausListeData.data[accessorNameA]);
            if (imHausListeData.data[accessorNameA]) {
                if (imHausListeData.data[accessorNameA].w === "Gesamt:") {
                    console.log("BREAK!!");
                    break;
                }
            }
            //console.log(imHausListeData.data[accessorNameC]);
            if (imHausListeData.data[accessorNameA] == null && imHausListeData.data[accessorNameC] == null && imHausListeData.data[accessorNameD] == null) {continue;}
            if (imHausListeData.data[accessorNameI] == null) {
                if(imHausListeData.data[accessorNameA]) {
                    if (imHausListeData.data[accessorNameA].w === "Notiz 1" && imHausListeData.data[accessorNameD]) {
                        notiz1[counter - 1] = imHausListeData.data[accessorNameD].w;
                    } else {
                        notiz1.push("-");
                    }
                    if (imHausListeData.data[accessorNameA].w === "Notiz 2" && imHausListeData.data[accessorNameD]) {
                        notiz2[counter -1] = imHausListeData.data[accessorNameD].w;
                    } else {
                        notiz2.push("-");
                    }
                    //console.log(imHausListeData.data[accessorNameA].w);
                    //console.log(imHausListeData.data[accessorNameD]);
                    if (imHausListeData.data[accessorNameA].w === "Bemerkung" && imHausListeData.data[accessorNameD]) {
                        bemerkung[counter-1] = imHausListeData.data[accessorNameD].w;
                    } else {
                        bemerkung.push("-");
                    }
                    if(imHausListeData.data[accessorNameA]) {
                        if (imHausListeData.data[accessorNameA].w === "Traces:" && imHausListeData.data[accessorNameH]) {
                            //console.log(imHausListeData.data[accessorNameH]);
                            trace[counter-1] = imHausListeData.data[accessorNameH].w;
                            console.log(imHausListeData.data["H" + (row + 2)]);
                            if (imHausListeData.data["H" + (row + 2)] != null) {
                                trace[counter-1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            if (imHausListeData.data["H" + (row + 2)] != null) {
                                trace[counter - 1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            if (imHausListeData.data["H" + (row + 2)] != null ) {
                                trace[counter - 1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            if (imHausListeData.data["H" + (row + 2)] != null ) {
                                trace[counter - 1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            if (imHausListeData.data["H" + (row + 2)] != null ) {
                                trace[counter - 1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            if (imHausListeData.data["H" + (row + 2)] != null ) {
                                trace[counter - 1] += ", " + imHausListeData.data["H" + (row + 2)].w;
                                row += 2;
                            }
                            row++;
                        } else {
                            trace.push("-");
                        }
                    }
                }
            } else {
                if (imHausListeData.data[accessorNameA]) {
                    name.push(imHausListeData.data[accessorNameA].w);
                } else {
                    name.push("-");
                }
                if (imHausListeData.data[accessorNameC]) {
                    zimmerNummer.push(imHausListeData.data[accessorNameC].w);
                } else {
                    zimmerNummer.push("-");
                }
                if (imHausListeData.data[accessorNameD]) {
                    kat.push(imHausListeData.data[accessorNameD].w);
                } else {
                    kat.push("-");
                }
                if (imHausListeData.data[accessorNameE]) {
                    anreise.push(imHausListeData.data[accessorNameE].w);
                } else {
                    anreise.push("-");
                }
                if (imHausListeData.data[accessorNameF]) {
                    abreise.push(imHausListeData.data[accessorNameF].w);
                } else {
                    abreise.push("-");
                }
                if (imHausListeData.data[accessorNameG]) {
                    erwKi.push(imHausListeData.data[accessorNameG].w);
                } else {
                    erwKi.push("-");
                }
                if (imHausListeData.data[accessorNameH]) {
                    pTyp.push(imHausListeData.data[accessorNameH].w);
                } else {
                    pTyp.push("-");
                }
                if (imHausListeData.data[accessorNameI]) {
                    preis.push(imHausListeData.data[accessorNameI].w);
                } else {
                    preis.push("-");
                }
                if (imHausListeData.data[accessorNameJ]) {
                    vip.push(imHausListeData.data[accessorNameJ].w);
                } else {
                    vip.push("-");
                }
                if (imHausListeData.data[accessorNameK]) {
                    resStatus.push(imHausListeData.data[accessorNameK].w);
                } else {
                    resStatus.push("-");
                }
                counter++;
            }

            }



        console.log("trace");
        //console.log(JSON.stringify(name));
        //console.log(JSON.stringify(trace));
        //console.log(nation);

        for (let i = 0; i < counter; i++) {
            //console.log(i);
            //console.log(imHausListeData.data[i]);

            imHausListe.push({
                "name": name[i],
                "zimmernummer": zimmerNummer[i],
                "kat": kat[i],
                "anreise": anreise[i],
                "abreise": abreise[i],
                "erwKi": erwKi[i],
                "pTyp": pTyp[i],
                "preis": preis[i],
                "vip": vip[i],
                "resStatus": resStatus[i],
                "notiz1": notiz1[i],
                "notiz2": notiz2[i],
                "bemerkung": bemerkung[i],
                "trace": trace[i]
            });
        };

        //console.log(JSON.stringify(imHausListe));

        //+3 ist nächste Zeile
        //Wenn A+3 === Traces: && H+3 != „null“ dann Trace gehört zu A-3
        /*
        console.log("Post request made to /imHausListe");
        let imHausListeData = {
            data: "",
        };
        imHausListeData.data = req.body;
        //console.log(imHausListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);
        console.log(imHausListe);
        //console.log('req.body' + req.body);
        //console.log('imHausListe' +  imHausListe);
        //imHausListe.data = req.body;
         */
        db.hubertusImHausListe.remove({});
        setTimeout(function () {
            db.hubertusImHausListe.save(imHausListe, function (err, imHausListe) {
                if (err) {
                    res.send(err);
                }
                res.json(imHausListe);
                console.log("imHausListe save called");
            });
        }, 500);

    },

    updateImHausListe: function (req, res, db) {

        console.log("Post request made to /updateImHausListeElement");
        //console.log(req.body);

        let nameValueArray = [];
        let zimmernummerValueArray = [];

        let informationElements = req.body;
        //console.log(informationElements);

        let informationElementsString = JSON.stringify(informationElements);
        if (informationElementsString.indexOf("targetTable") != -1 && informationElementsString.indexOf("nameValue") === -1) {
            //console.log("BUG I GONNA KILL YOU !!!!")
        } else {
        if (informationElementsString.indexOf("leftValue") != -1) {
            for (let i = 0; i < informationElements.groups.length; i++) {
                 nameValueArray.push(informationElements.groups[i].nameValue);
                 zimmernummerValueArray.push(informationElements.groups[i].zimmernummerValue);

                db.hubertusImHausListe.update(
                    {
                        name: nameValueArray[i],
                        "zimmernummer": zimmernummerValueArray[i]
                    },
                    {
                        $set: {
                            "bgColor": "ffffff",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("updateImHausListe Update successful");
                    });
            }
        } else {
            nameValueArray.push(informationElements[0].substring(1, informationElements[0].length));
            zimmernummerValueArray.push(informationElements[2].substring(1, informationElements[2].length));

            //console.log(nameValueArray[0]);
            //console.log(zimmernummerValueArray[0]);

            db.hubertusImHausListe.update(
                {
                    name: nameValueArray[0],
                    "zimmernummer": zimmernummerValueArray[0]
                },
                {
                    $set: {
                        "bgColor": "0a7a74",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("updateImHausListe Update successful");
                });
        }}

            setTimeout(function () {
                db.hubertusImHausListe.find(
                    {},
                    function (err, hubertusImHausListe) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(hubertusImHausListe);
                        //console.log('hubertusImHausListe');
                        //console.log(JSON.stringify(hubertusImHausListe));
                    });
            }, 700);

    },
    getImHausListe: function (req, res, db) {
        console.log("imHausListe get called");
    //Get guests from Mongo DB
        db.hubertusImHausListe.find(function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
        });
    }
};