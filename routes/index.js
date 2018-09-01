const   express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    cors = require('cors'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database'),
    User = require('../models/user'),
    db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['saalbacherhofTracesListe', 'saalbacherhofAnreiseListe', 'saalbacherhofImHausListe', 'saalbacherhofTables', 'newInformationSaalbacherhof', 'newNotizSaalbacherhofDb']),
    anreiseliste = require('./anreiseListe.js'),
    imHausListe = require('./imHausListe.js'),
    traceListe = require('./traceListe.js'),
    information = require('./information.js'),
    placeholder = require('./placeholder.js'),
    table = require('./table.js'),
    tableAddInformation = require('./tableAddInformation.js'),
    notiz = require('./notiz.js'),
    users = require('./users.js');


//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

//----->API<------//

//Save AnreiseListe
router.post('/anreiseListe', function(req, res, next) {
anreiseliste.saveAnreiseListe(req, res, db)});
//Update AnreiseListe
router.post('/updateAnreiseListeElement', function(req, res, next) {
anreiseliste.updateAnreiseListe(req, res, db)});
//Get anreiseListe
router.get('/anreiseListe', function(req, res, next) {
anreiseliste.getAnreiseListe(req, res, db)});
//Save ImHausListe
router.post('/imHausListe', function(req, res, next) {
imHausListe.saveImHausListe(req, res, db)});
//Update ImHausListe
router.post('/updateImHausListeElement', function(req, res, next) {
imHausListe.updateImHausListe(req, res, db)});
//Get imHausListe
router.get('/imHausListe', function(req, res, next) {
imHausListe.getImHausListe(req, res, db)});
//Save TracesListe
router.post('/tracesListe', function(req, res, next) {
traceListe.saveTraceListe(req, res, db)});
//Update TraceListe
router.post('/updateTracesListeElement', function(req, res, next) {
traceListe.updateTraceListe(req, res, db)});
//Get TracesListe
router.get('/tracesListe', function(req, res, next) {
traceListe.getTraceListe(req, res, db)});
//Get Information
router.get('/information', function(req, res, next) {
information.getInformation(req, res, db)});
//Delete Information Element
router.post('/deleteInformationElement', function(req, res, next) {
information.deleteInformation(req, res, db)});
//Post New Information to Box
router.post('/newInformationToBox', function(req, res, next) {
information.newInformationToBox(req, res, db)});
//Post New Information to Table
router.post('/newInformationToTables', function(req, res, next) {
information.newInformationToTable(req, res, db)});
//removePlaceholder
router.post('/removePlaceholder', function(req, res, next) {
placeholder.removePlaceholder(req, res, db)});
//addPlaceholder
router.post('/addPlaceholder', function(req, res, next) {
placeholder.addPlaceholder(req, res, db)});
//Get Tables
router.get('/tables', function(req, res, next) {
table.getTable(req, res, db)});
//addTable
router.post('/addTable', function(req, res, next) {
table.addTable(req, res, db)});
//removeTable
router.post('/removeTable', function(req, res, next) {
table.removeTable(req, res, db)});
//occupyTable
router.post('/occupyTable', function(req, res, next) {
table.occupyTable(req, res, db)});
//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
table.dispenseTable(req, res, db)});
//addInformationToTable
router.post('/addInformationToTable', function(req, res, next) {
tableAddInformation.addInformationToTable(req, res, db)});
//getNotiz
router.get('/getNotiz', function(req, res, next) {
notiz.getNotiz(req, res, db)});
//newNotiz
router.post('/newNotiz', function(req, res, next) {
notiz.newNotiz(req, res, db)});
//GetInformation Employees
router.post('/authenticate', function(req, res, next) {
users.authenticate(req, res, db)});
//GetInformation Employees
router.post('/register', function(req, res, next) {
users.register(req, res, db)});
//GetInformation Employees
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next) {
users.profile(req, res, db)});
module.exports = router;