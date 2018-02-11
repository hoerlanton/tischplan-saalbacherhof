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
    node_xj = require("xls-to-json");
    let XLSX = require('xlsx');

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

    let workbook = XLSX.readFile(String("./uploads/" + uploadedFileName));

    //console.log(JSON.stringify(workbook.Props));
    //console.log(JSON.stringify(workbook.SheetNames));
    //console.log(JSON.stringify(workbook.Sheets[workbook.SheetNames[0]]));
    //console.log(JSON.stringify(workbook.vbaraw));
    //console.log(JSON.stringify(workbook.Workbook));
    /* DO SOMETHING WITH workbook HERE */
    imHausListe = JSON.stringify(workbook.Sheets[workbook.SheetNames[0]]);
    //console.log(JSON.stringify(workbook2));
    postImHausListeToDB();
});
    //data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
    //console.log(data);

/*
    if(req.files[0].filename.indexOf('xlsx') != -1 ){
        exceltojson = xlsxtojson;
    } else {
        exceltojson = xlstojson;
    }
    */
    /*
    excel2Json("./uploads/" + uploadedFileName, function(err, output) {
        if (err) {
            console.log(err)
        } else {
            console.log('output');
            console.log(output);
        }
    });

    excel2Json("./uploads/" + uploadedFileName, {
        'convert_all_sheet': false,
        'return_type': 'Object',
        'sheetName': 'survey'
    }, function(err, output) {
        if (err) {
            console.log(err)
        } else {
            console.log('output');
            console.log(output);
        }
    });


     node_xj({
     input: String("./uploads/" + uploadedFileName),  // input xls
     output: "output.json", // output json
     sheet: "sheetname"  // specific sheetname
     }, function(err, result) {
     if(err) {
     console.error(err);
     } else {
     console.log(result);
     console.log();
     }
     });
    */



/*
    try {
        exceltojson({
            input: String("./uploads/" + uploadedFileName), //the same path where we uploaded our file
            output: null, //since we don't need output.json
            lowerCaseHeaders:true
        }, function(err,result){
            if(err) {
                return res.json({error_code:1,err_desc:err, data: null});
            }
            res.json({error_code:0,err_desc:null, data: result});
            imHausListe = JSON.stringify(result);
            console.log(result);

            postImHausListeToDB();
            //New User is saved in DB, function called in receivedAuthentication - send to index.js /guests REST-FUL API

        });
    } catch (e){
        res.json({error_code:1,err_desc:"Corupted excel file"});
    }
 */



function postImHausListeToDB() {
    // An object of options to indicate where to post to
    let post_options = {
        //Change URL to hotelmessengertagbag.herokuapp.com if deploying
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
    var readStream = fs.createReadStream(String("./uploads/" + uploadedFileName), 'binary');

    readStream.on('data', function(chunk) {
        String(data += chunk);

    }).on('end', function() {
        console.log(typeof data);
        csv({noheader:true})
            .fromString(data)
            .on('csv',(csvRow)=>{ // this func will be called 3 times
                //console.log(csvRow);// => [1,2,3] , [4,5,6]  , [7,8,9]
                //json.push(csvRow);
            })
            .on('done', (error)=>{

                //csvDatei = JSON.stringify(json);
                //console.log('csvDatei: ');
                //console.log(csvDatei);
                if (csvDatei.indexOf("Im Haus") !== -1) {
                    postImHausListeToDB();
                } else if (csvDatei.indexOf("Anreisen") !== -1) {
                    postAnreiseListeToDB();
                } else if (csvDatei.indexOf("Trace Report") !== -1){
                    postTracesListeToDB();
                }
                console.log('end')
            });


        //New User is saved in DB, function called in receivedAuthentication - send to index.js /guests REST-FUL API
        function postImHausListeToDB() {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
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
            post_req.write(csvDatei);
            post_req.end();
        }
        function postAnreiseListeToDB() {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
                host: HOST_URL,
                port: '80',
                path: '/anreiseListe',
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
            post_req.write(csvDatei);
            post_req.end();
        }
        function postTracesListeToDB () {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
                host: HOST_URL,
                port: '80',
                path: '/tracesListe',
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
            post_req.write(csvDatei);
            post_req.end();
        }
    });
 */



/*
 * Start server
 * Webhooks must be available via SSL with a certificate signed by a valid
 * certificate authority.
 */

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;