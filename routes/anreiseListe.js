/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveAnreiseListe: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("Post request made to /anreiseListe");


        let anreiseListeData = {
            data: "",
        };

        let anreiseListe = [];

        anreiseListeData.data = req.body;

        //console.log(imHausListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);

        for (let i = 0; i < anreiseListeData.data.length; i++) {
            console.log(i);
            console.log(anreiseListeData.data[i][22]);

            anreiseListe.push({
                "name": anreiseListeData.data[i][22],
                "zimmernummer": anreiseListeData.data[i][23],
                "abreise": anreiseListeData.data[i][25],
                "personenAnzahl": anreiseListeData.data[i][26],
                "notiz1": anreiseListeData.data[i][36],
                "notiz2": anreiseListeData.data[i][39],
                "bemerkung": anreiseListeData.data[i][52]
            });
        };

        console.log(anreiseListe);

        db.saalbacherhofAnreiseListe.remove({});

        setTimeout(function() {
            db.saalbacherhofAnreiseListe.save(anreiseListe, function(err, anreiseListe) {
                if (err) {
                    res.send(err);
                }
                res.json(anreiseListe);
                console.log(anreiseListe);
                console.log("anreiseListe save called");
            });
        }, 100);
    },

    updateAnreiseListe: function (req, res, db) {

        console.log("Post request made to /updateAnreiseListeElement");

        let informationElements = req.body;


        let nameValue = informationElements[0].substring(1, informationElements[0].length);
        let zimmernummerValue = informationElements[1].substring(1, informationElements[1].length);

        console.log(nameValue);
        console.log(zimmernummerValue);


        db.saalbacherhofAnreiseListe.update(
            {name: nameValue,
                "zimmernummer": zimmernummerValue},
            {$set: {
                "bgColor": "0a7a74",
            }}, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });


        setTimeout(function() {
            db.saalbacherhofAnreiseListe.findOne(
                {name: nameValue,
                    "zimmernummer": zimmernummerValue},
                function (err, saalbacherhofAnreiseListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(saalbacherhofAnreiseListe);
                    console.log('saalbacherhofAnreiseListe');
                    console.log(JSON.stringify(saalbacherhofAnreiseListe));
                });
        }, 700);
    },
    getAnreiseListe: function (req, res, db) {

        console.log("anreiseListe get called");
//Get guests from Mongo DB
        db.saalbacherhofAnreiseListe.find(function (err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
        });
    }
};
