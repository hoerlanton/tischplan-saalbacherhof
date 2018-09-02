/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveImHausListe: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("Post request made to /saveImHausListe");
        //console.log(JSON.stringify(req.body));
        let imHausListeData = {
            data: "",
        };

        let imHausListe = [];
        let imHausListeDataArray = [];
        imHausListeData.data = req.body;
        console.log("imHausListeData.data");
        console.log(imHausListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);

        for (let i = 1; i < imHausListeData.data.length; i++) {
            let imHausListeDataArrayConcat = [];
            let imHausListeDataArrayConcatSplit = [];
            imHausListeDataArray = imHausListeData.data[i];
            for (let j = 0; j < imHausListeDataArray.length; j++) {
                imHausListeDataArrayConcat += imHausListeDataArray[j];
            }
            console.log("imHausListeDataArrayConcat");
            console.log(imHausListeDataArrayConcat);
            imHausListeDataArrayConcatSplit = imHausListeDataArrayConcat.split(";");
            let zimmerNummerSplitted = imHausListeDataArrayConcatSplit[2].split(" ");
            //console.log(imHausListeDataArrayConcatSplit);
            imHausListe.push({
                "zimmernummer": zimmerNummerSplitted[0],
                "anreise": imHausListeDataArrayConcatSplit[0],
                "abreise": imHausListeDataArrayConcatSplit[1],
                "name1": imHausListeDataArrayConcatSplit[8] + " " + imHausListeDataArrayConcatSplit[5] + " " + imHausListeDataArrayConcatSplit[6],
                "pinfo1": imHausListeDataArrayConcatSplit[15],
                "pinfo2": imHausListeDataArrayConcatSplit[32],
                "pinfo3": imHausListeDataArrayConcatSplit[49],
                "personenAnzahl": imHausListeDataArrayConcatSplit[74] + " / " + imHausListeDataArrayConcatSplit[77] + " / " + imHausListeDataArrayConcatSplit[78],
                "kategorie": imHausListeDataArrayConcatSplit[85],
            });
        }
        console.log(imHausListe);
        db.saalbacherhofImHausListe.remove({});
        setTimeout(function () {
            db.saalbacherhofImHausListe.save(imHausListe, function (err, imHausListe) {
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

        let informationElements = req.body;

        console.log(req.body);

        let nameValueArray = [];
        let zimmernummerValueArray = [];
        let informationElementsString = JSON.stringify(informationElements);

        if (informationElementsString.indexOf("targetTable") != -1) {
            console.log("BUG I GONNA KILL YOU !!!!")
        } else {

            if (informationElementsString.indexOf("leftValue") != -1) {
                for (let i = 0; i < informationElements.groups.length; i++) {
                    nameValueArray.push(informationElements.groups[i].name1Value);
                    zimmernummerValueArray.push(informationElements.groups[i].zimmernummerValue);

                    let string = " ";
                    nameValueArray[i] = string.concat(nameValueArray[i]);

                    console.log(nameValueArray[i]);
                    console.log(zimmernummerValueArray[i]);

                    db.lechImHausListe.update(
                        {
                            name1: nameValueArray[i],
                            "zimmernummer": zimmernummerValueArray[i]
                        },
                        {
                            $set: {
                                "bgColor": "ffffff",
                            }
                        }, function (err, imHausListe) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("lechImHausListe Update successful");
                            console.log(imHausListe);
                        });

                }
            } else {
                nameValueArray.push(informationElements[4].substring(0, informationElements[4].length));
                zimmernummerValueArray.push(informationElements[0].substring(1, informationElements[0].length));

                console.log(nameValueArray[0]);
                console.log(zimmernummerValueArray[0]);

                db.lechImHausListe.update(
                    {
                        name1: nameValueArray[0],
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
                        console.log("occupyTable Update successful");
                    });
            }}

        setTimeout(function () {
            db.lechImHausListe.find(
                {},
                function (err, imHausListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(imHausListe);
                    console.log('imHausListe');
                    console.log(JSON.stringify(imHausListe));
                });
        }, 700);

    },
    getImHausListe: function (req, res, db) {
        console.log("imHausListe get called");
    //Get guests from Mongo DB
        db.saalbacherhofImHausListe.find(function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
        });
    }
};