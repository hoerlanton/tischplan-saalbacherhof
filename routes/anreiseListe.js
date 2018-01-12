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

        db.hubertusAnreiseListe.remove({});

        setTimeout(function() {
            db.hubertusAnreiseListe.save(anreiseListe, function(err, anreiseListe) {
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


        db.hubertusAnreiseListe.update(
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
            db.hubertusAnreiseListe.findOne(
                {name: nameValue,
                    "zimmernummer": zimmernummerValue},
                function (err, hubertusAnreiseListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(hubertusAnreiseListe);
                    console.log('hubertusAnreiseListe');
                    console.log(JSON.stringify(hubertusAnreiseListe));
                });
        }, 700);
    },
    getAnreiseListe: function (req, res, db) {

        console.log("anreiseListe get called");
//Get guests from Mongo DB
        db.hubertusAnreiseListe.find(function (err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
        });
    }
};
