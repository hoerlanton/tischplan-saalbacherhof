'use strict';

const   bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    multer = require('multer'),
    routes = require('./routes/index'),
    path = require('path'),
    request = require('request'),
    http = require('http'),
    fs = require("fs"),
    config = require('config'),
    cors = require('cors'),
    csv = require('csvtojson'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    configDatabase = require('./config/database'),
    users = require('./routes/users'),
    excel2Json = require('node-excel-to-json'),
    XLSX = require('xlsx');

var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Setting port
app.set('port', process.env.PORT || 8000);

// CORS Middleware
app.use(cors());


//Set Public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));

// le dice a express que el directorio 'uploads', es estatico.
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

//Use ./routes/index.js as routes root /
app.use('/', routes);

// HOST_URL used for DB calls - SERVER_URL without https or https://
const HOST_URL = config.get('hostURL');

//Store uploaded files - destination set / name of file set
let storage = multer.diskStorage({
    // Destination of upload
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    // Rename of file
    filename: function (req, file, cb) {
        cb(null, Math.random() + "*" + file.originalname.replace(/ /g, ""));
    }
});

let upload = multer({ storage: storage });
let imHausListe = "";
let pms = "";

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// Connect To Database
mongoose.connect(configDatabase.database, { useMongoClient: true });

// On Connection
mongoose.connection.once('open', () => {
    console.log('Connected to database '+configDatabase.database);
});

// On Error
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//app.use('/users', users);


//source: https://gist.github.com/aitoribanez/8b2d38601f6916139f5754aae5bcc15f
//New file got attached to message
app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    var exceltojson;
    console.log("console log in app.post upload", 'files', req.files);
    //res.send(req.files);
    console.log("req.files:");
    console.log(req.files);

    let uploadedFileName = req.files[0].filename.replace(/ /g, "");

    let data = '';
    let csvRow = '';
    let json = [];

    //let workbook2 = XLSX.utils.sheet_to_json(String("./uploads/" + uploadedFileName));

    if (uploadedFileName.indexOf("xls") != -1){

        let workbook = XLSX.readFile(String("./uploads/" + uploadedFileName));

        //console.log(JSON.stringify(workbook.Props));
        //console.log(JSON.stringify(workbook.SheetNames));
        //console.log(JSON.stringify(workbook.Sheets[workbook.SheetNames[0]]));
        //console.log(JSON.stringify(workbook.vbaraw));
        //console.log(JSON.stringify(workbook.Workbook));
        /* DO SOMETHING WITH workbook HERE */
        imHausListe = JSON.stringify(workbook.Sheets[workbook.SheetNames[0]]);
        pms = "Protel";
        //console.log(JSON.stringify(workbook2));
        postImHausListeToDB();
        res.send(req.files);
    } else if (uploadedFileName.indexOf("csv") != -1) {
        var readStream = fs.createReadStream(String("./uploads/" + uploadedFileName), 'binary');

        readStream.on('data', function(chunk) {
            String(data += chunk);

        }).on('end', function() {
            console.log(typeof data);
            csv({noheader: true})
                .fromString(data)
                .on('csv', (csvRow) => { // this func will be called 3 times
                    console.log(csvRow);// => [1,2,3] , [4,5,6]  , [7,8,9]
                    json.push(csvRow);
                })
                .on('done', (error) => {

                    imHausListe = JSON.stringify(json);
                    pms = "Gastrodat";
                    //console.log('csvDatei: ');
                    //console.log(csvDatei);
                    postImHausListeToDB();
                    console.log('end')
                });
        });
    } else {
        res.send(JSON.stringify("Error, falscher Datentyp"));
    }
});


function postImHausListeToDB() {
    // An object of options to indicate where to post to
    let post_options = {
        //Change URL to http://www.tischplan.servicio.io if deploying
        host: HOST_URL,
        port: '80',
        path: '/imHausListe',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Set up the request
    let post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + "chunk as string");
        });
    });

    // post the data
    post_req.write(imHausListe);
    post_req.end();
}

/*
 * Start server
 * Webhooks must be available via SSL with a certificate signed by a valid
 * certificate authority.
 */

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;