/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveTraceListe: function (req, res, db) {

        //JSON string is parsed to a JSON object
        console.log("Post request made to /tracesListe");


        let tracesListeData = {
            data: "",
        };

        let tracesListe = [];

        tracesListeData.data = req.body;

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 7) {
                tracesListeData.data[o].splice(0, 4);
                tracesListeData.data[o].splice(6, 7);
            }
        }
        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 8) {
                tracesListeData.data.splice(o, 1);
            }
        }
        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 1) {
                tracesListeData.data.splice(o, 1);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 19) {
                tracesListeData.data[o] = tracesListeData.data[o].splice(17, tracesListeData.data[o].length);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 13) {
                tracesListeData.data[o].splice(8, 12);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            console.log(o + tracesListeData.data[o]);
            console.log('length of : ' + o + tracesListeData.data[o].length);
        }

        let trace = [];

        for (let o = 0; o < tracesListeData.data.length; o++) {
            trace[o] = [];
        }

        for (let o = 1; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o] !== undefined) {
                if (tracesListeData.data[o].length === 28) {
                    trace[o] = tracesListeData.data[o];
                }
                if (tracesListeData.data[o].length === 25) {
                    trace[o] = tracesListeData.data[o].concat(tracesListeData.data[o + 1]);
                    console.log('Trace before ->>' + trace[o]);
                }
                if (tracesListeData.data[o].length === 2) {
                    trace[o] = tracesListeData.data[o].concat(tracesListeData.data[o - 1]).concat(tracesListeData.data[o - 2]);
                    console.log('Trace before 2222222222222222222222 ------------------------------>>' + trace[o]);
                }
            }
        }

        trace[0] = tracesListeData.data[0].concat(tracesListeData.data[1]).concat(tracesListeData.data[2]);
        trace[0].unshift("", "", "", "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");

//this.tracesListeElemente.push(trace[0]);

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (trace[o].length === 30) {
                trace[o].splice(1, 2);
                let traceTemp = [];
                traceTemp = trace[o].splice(0, 3);
                console.log('traceTemp' + traceTemp);
                trace[o].push(traceTemp[0]);
                trace[o].push(traceTemp[1]);
                trace[o].splice(24, 0, " ");
            }
        }

//for (let o = 1; o < tracesListeData.data.length; o++) {
//   if (trace[o].length > 26) {
//      this.tracesListeElemente.push(trace[o]);
// }
//}
//console.log('263' + tracesListeData.data);
//console.log('264 ' + this.tracesListeElemente);
//console.log(this.tracesListeElemente);
//for (let o = 0; o < this.tracesListeElemente.length; o++) {
//if (trace[o].length === 25 || trace[o].length === 14) {
//}
//}

//console.log(imHausListeData.data);
//console.log(imHausListe[0].name);
//console.log(imHausListe[1]);

        for (let i = 0; i < tracesListeData.data.length; i++) {
            if (trace[i].length > 26) {
                console.log(i);
                console.log(trace[i][22]);

                tracesListe.push({
                    "name": trace[i][13],
                    "zimmernummer": trace[i][12],
                    "anreise": trace[i][16],
                    "abreise": trace[i][18],
                    "personenAnzahl": trace[i][14],
                    "trace": trace[i][26]
                });
            }
        }

        db.saalbacherhofTracesListe.remove({});
        setTimeout(function () {
            db.saalbacherhofTracesListe.save(tracesListe, function (err, tracesListe) {
                if (err) {
                    res.send(err);
                }
                res.json(tracesListe);
                console.log("tracesListe save called");
            });
        }, 100);
    },
    updateTraceListe: function (req, res, db) {

        console.log("Post request made to /updateTracesListeElement");

        let informationElements = req.body;
        let nameValue = informationElements[1].substring(1, informationElements[1].length);
        let zimmernummerValue = informationElements[0].substring(1, informationElements[0].length);

        console.log(nameValue);
        console.log(zimmernummerValue);

        db.saalbacherhofTracesListe.update(
            {
                name: nameValue,
                "zimmernummer": zimmernummerValue
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


        setTimeout(function () {
            db.saalbacherhofTracesListe.findOne(
                {
                    name: nameValue,
                    "zimmernummer": zimmernummerValue
                },
                function (err, saalbacherhofTracesListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(saalbacherhofTracesListe);
                    console.log('saalbacherhofTracesListe');
                    console.log(JSON.stringify(saalbacherhofTracesListe));
                });
        }, 700);
    },
    getTraceListe: function (req, res, db) {
        console.log("tracesListe get called");
//Get guests from Mongo DB
        db.saalbacherhofTracesListe.find(function (err, tracesListe) {
            if (err) {
                res.send(err);
            }
            res.json(tracesListe);
        });
    }
};