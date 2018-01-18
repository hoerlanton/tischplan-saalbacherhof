webpackJsonp(["main"],{

/***/ "../../../../../Table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=Table.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<tischplan></tischplan>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 100px;\n}\n\n@media (min-width: 1200px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 390px);\n  }\n}\n\n@media (min-width: 800px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: 580px;\n  }\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  min-height: 580px;\n}\n\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 100px);\n}\n\n\n.row4 {\n  margin-top: 80px;\n}\n\n@media (min-width: 1200px) {\n  .row4 {\n    margin-top: 350px;\n  }\n}\n\n.row .table-col {\n  min-height: 100vh;\n  max-height: 100vh;\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .table-col {\n    min-height: calc(100vh +  375px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 800px) {\n  .row .inner-table {\n    max-height: calc(100vh + 300px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .table-col {\n    min-height: 100vh;\n    max-height: calc(100vh - 100px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .inner-table {\n    max-height: calc(100vh - 100px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n.row .print-col {\n  padding: 0;\n  background-color: #f3efe4;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  min-height: 100vh;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n  }\n}\n@media (min-width: 1200px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n\n  }\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 250px) / 3);\n  overflow: auto;\n}\n\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .anleitung {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .anleitung{\n    display: block;\n  }\n}\n\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.row .container-fluid .print-col .printTwo .table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .btn-send {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n\n<body>\n<nav class=\"navbar navbar-default\" style=\"max-width: 100%\">\n  <ul class=\"nav navbar-nav\" style=\"max-width: 100%; margin-left: 20px\">\n        <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\"></li>\n    <li class=\"anleitung\" ><a href=\"http://servicio.io/tester-info-3-2\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-bottom: 5px; margin-right: 0px; max-height: 15px\" >Anleitung</a></li>\n    <li class=\"printToCart1\"><button (click)=\"printToCart1('printSectionId1')\" style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart1\">Tisch Übersicht Drucken</button></li>\n    <li class=\"printToCart2\"><button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart2\">Tisch Plan Drucken</button></li>\n    <li class=\"printToCart3\"><button (click)=\"printToCart3('printSectionId3')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart3\">A-Z Liste Drucken</button></li>\n    <li class=\"Belegte Tisch\" style=\"color: #0a7a74; vertical-align:middle; \"><h3>Belegte Tische: {{tablesOccupied}}</h3></li>\n  </ul>\n    <ul class=\"nav navbar-nav navbar-right\" style=\"max-width: 100%\">\n      <div class=\"btn-group\" style=\"height: 45px; width: auto; margin: 10px 25px 5px 25px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n        <button dropdownToggle type=\"button\" style=\" background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary dropdown-toggle\">\n          Traces Box <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"overflow: auto; height: 350px; width: 200px\">\n          <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\" (click)=\"none($event)\">\n            <button style=\"float: right; background-color: #0a7a74; color: #FFFFFF; margin-right: 20px\" type=\"submit\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n            <li role=\"menuitem\" style=\"padding: 5px;\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n            <li class=\"divider dropdown-divider\"></li>\n          </div>\n        </ul>\n      </div>\n      <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/12/680001_160527_7E4EAE33_logo_779px.jpg\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 25px;float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n    </ul>\n</nav>\n\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div class=\"col-xs-12 col-sm-8 col-lg-4 print-col\">\n      <h3 style=\"margin: 20px 0 20px 20px\">Info hinzufügen</h3>\n      <form class=\"SendInformation\"  #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset()\">\n        <div class=\"form-row\">\n          <div class=\"form-group\">\n            <div class=\"col-lg-6\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n            </div>\n            <div class=\"col-lg-6\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n            </div>\n            <div class=\"col-lg-12\">\n              <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n              </textarea>\n            </div>\n          </div>\n          <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px; background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary\">Hinzufügen</button>\n        </div>\n      </form>\n      <div class=\"row4\">\n        <div class=\"col-md-2 col-xs-2\" style=\"height: 50px; width: 20%;\"  (click)=\"showBauernStubn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor1}\">Bauernstube</h6>\n        </div>\n        <div class=\"col-md-2 col-xs-2\"  style=\"height: 50px; width: 20%;\" (click)=\"showBergler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor2}\">Berglerstube<br>HUBERTUS Stube</h6>\n        </div>\n        <div class=\"col-md-2 col-xs-2\" style=\"height: 50px; width: 20%;\" (click)=\"showWaeldler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor3}\">Wäldlerstube<br>Kristallstube</h6>\n        </div>\n        <div class=\"col-md-2 col-xs-2\" style=\"height: 50px; width: 20%;\" (click)=\"showEdelweiss()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor4}\">EDELWEISS<br>Kaminstube</h6>\n        </div>\n        <div class=\"col-md-2 col-xs-2\" style=\"height: 50px; width: 20%;\" (click)=\"showTeestube()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor5}\">TeeStube<br>Teelounge</h6>\n        </div>\n      </div>\n      <div id=\"printSectionId2\" class=\"col-xs-12 printTwo\">\n        <div class=\"row\" style=\"background-color: #eaf3f3; border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\" >\n          <div *ngIf=\"showBerglerBool\">\n            <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n              <div class=\"t{{tableBerglerStubeHubertusStube.number}} table-item\" (click)=\"moveTable(tableBerglerStubeHubertusStube, j)\" [ngStyle]=\"{'top': tableBerglerStubeHubertusStube.topValue + 'px', 'left': tableBerglerStubeHubertusStube.leftValue + 'px', 'background-color': + tableBerglerStubeHubertusStube.bgColor, 'height': + tableBerglerStubeHubertusStube.height + 'px', 'width': + tableBerglerStubeHubertusStube.width + 'px', 'border': + tableBerglerStubeHubertusStube.border}\">\n                <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n                  <p><b>{{tableBerglerStubeHubertusStube.number}} | {{tableBerglerStubeHubertusStube.personenAnzahlValue}} {{tableBerglerStubeHubertusStube.personenAnzahlValue2}} {{tableBerglerStubeHubertusStube.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showBauernStubnBool\">\n            <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n              <div class=\"t{{tableBauernstube.number}} table-item\" (click)=\"moveTable(tableBauernstube, j)\" [ngStyle]=\"{'top': tableBauernstube.topValue + 'px', 'left': tableBauernstube.leftValue + 'px', 'background-color': + tableBauernstube.bgColor,  'height': + tableBauernstube.height + 'px', 'width': + tableBauernstube.width + 'px', 'border': + tableBauernstube.border}\">\n                <p><b>{{tableBauernstube.number}} | {{tableBauernstube.personenAnzahlValue}} {{tableBauernstube.personenAnzahlValue2}} {{tableBauernstube.personenAnzahlValue3}}</b></p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showWaeldlerBool\">\n            <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n              <div class=\"t{{tableWaeldlerStubeKristallStube.number}} table-item\" (click)=\"moveTable(tableWaeldlerStubeKristallStube, j)\" [ngStyle]=\"{'top': tableWaeldlerStubeKristallStube.topValue + 'px', 'left': tableWaeldlerStubeKristallStube.leftValue + 'px', 'background-color': + tableWaeldlerStubeKristallStube.bgColor, 'height': + tableWaeldlerStubeKristallStube.height + 'px', 'width': + tableWaeldlerStubeKristallStube.width + 'px', 'border': + tableWaeldlerStubeKristallStube.border}\">\n                <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n                  <p><b>{{tableWaeldlerStubeKristallStube.number}} | {{tableWaeldlerStubeKristallStube.personenAnzahlValue}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue2}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showEdelweissBool\">\n            <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n              <div class=\"t{{tableEdelweissKaminStube.number}} table-item\" (click)=\"moveTable(tableEdelweissKaminStube, j)\" [ngStyle]=\"{'top': tableEdelweissKaminStube.topValue + 'px', 'left': tableEdelweissKaminStube.leftValue + 'px', 'background-color': + tableEdelweissKaminStube.bgColor,  'height': + tableEdelweissKaminStube.height + 'px', 'width': + tableEdelweissKaminStube.width + 'px', 'border': + tableEdelweissKaminStube.border, 'border-radius': + tableEdelweissKaminStube.borderRadius, 'transform':  + tableEdelweissKaminStube.transformValue}\">\n                <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n                  <p><b>{{tableEdelweissKaminStube.number}} | {{tableEdelweissKaminStube.personenAnzahlValue}} {{tableEdelweissKaminStube.personenAnzahlValue2}} {{tableEdelweissKaminStube.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showTeeStubeBool\">\n            <div *ngFor=\"let tableTeestubeTeelounge  of tablesTeestubeTeelounge; let j = index;\">\n              <div class=\"t{{tableTeestubeTeelounge.number}} table-item\" (click)=\"moveTable(tableTeestubeTeelounge, j)\" [ngStyle]=\"{'top': tableTeestubeTeelounge.topValue + 'px', 'left': tableTeestubeTeelounge.leftValue + 'px', 'background-color': + tableTeestubeTeelounge.bgColor,  'height': + tableTeestubeTeelounge.height + 'px', 'width': + tableTeestubeTeelounge.width + 'px', 'border': + tableTeestubeTeelounge.border, 'border-radius': + tableTeestubeTeelounge.borderRadius, 'transform':  + tableTeestubeTeelounge.transformValue}\">\n                <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n                  <p><b>{{tableTeestubeTeelounge.number}} | {{tableTeestubeTeelounge.personenAnzahlValue}} {{tableTeestubeTeelounge.personenAnzahlValue2}} {{tableTeestubeTeelounge.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-lg-4 upload-col\">\n      <div class=\"csv\"  style=\" width: 100%; height: 100px;\"><h3>CSV-Datei hochladen</h3>\n        <div class=\"line\"></div>\n        <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n          <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n          <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n        </form>\n      </div>\n      <div class=\"outer-cards\">\n        <h3>Im-Haus-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n              <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n                <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n                  <p> <b>Name:</b> {{imHausListeElement.name}}<br>\n                    <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n                    <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n                    <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n                    <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n                    <b>Notiz1:</b> {{imHausListeElement.notiz1}}<br>\n                    <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n                    <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n                  </p>\n                  <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>Anreise-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n              <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n                <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + anreiseListeElement.bgColor}\">\n                  <p> <b>Name:</b> {{anreiseListeElement.name}}<br>\n                    <b>Zimmernummer:</b> {{anreiseListeElement.zimmernummer}}<br>\n                    <b>Abreise:</b> {{anreiseListeElement.abreise}}<br>\n                    <b>Personen Anzahl:</b> {{anreiseListeElement.personenAnzahl}}<br>\n                    <b>Notiz1:</b> {{anreiseListeElement.notiz1}}<br>\n                    <b>Notiz2:</b> {{anreiseListeElement.notiz2}}<br>\n                    <b>Bemerkung:</b> {{anreiseListeElement.bemerkung}}<br>\n                  </p>\n                  <div *ngIf=\"anreiseListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>Traces-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n              <div class='cards-container' id='container3' [dragula]='\"evented-bag\"' >\n                <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + tracesListeElement.bgColor}\">\n                  <p><b>Zimmernummer:</b> {{tracesListeElement.zimmernummer}}<br>\n                  <b>Name:</b> {{tracesListeElement.name}}<br>\n                  <b>Personen:</b> {{tracesListeElement.personenAnzahl}}<br>\n                  <b>Anreise:</b> {{tracesListeElement.anreise}}<br>\n                  <b>Abreise:</b> {{tracesListeElement.abreise}}<br>\n                  <b>Trace:</b> {{tracesListeElement.trace}}<br>\n                  </p>\n                  <div *ngIf=\"tracesListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-4 table-col\">\n        <h3>Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <div *ngIf=\"showBerglerBool\">\n                <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n                  <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBerglerStubeHubertusStube, j)\">{{tableBerglerStubeHubertusStube.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n                    <h4><b> Tisch: </b>{{tableBerglerStubeHubertusStube.number}} </h4><br>\n                    <div class='cards-container' id='containerBerglerStubeHubertusStube'  [ngStyle]=\"{'background-color': + tableBerglerStubeHubertusStube.bgColor}\">\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBerglerStubeHubertusStube.bgColor}\">\n                        <div *ngIf=\"tableBerglerStubeHubertusStube.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue}}<br>\n                            <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue}}<br>\n                            <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue}}<br>\n                            <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue}}<br>\n                            <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue}}<br>\n                            <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value}}<br>\n                            <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value}}<br>\n                            <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace}}<br>\n                            <b> Bemerkung:</b> {{tableBerglerStubeHubertusStube.bemerkungValue}}<br>\n                          </p>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue2\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue2}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue2}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue2}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value2}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value2}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace2}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue2}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue3\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue3}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue3}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue3}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value3}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value3}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace3}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue3}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue4\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue4}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue4}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue4}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue4}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue4}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value4}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value4}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace4}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue4}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue5\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue5}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue5}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue5}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue5}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue5}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value5}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value5}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace5}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue5}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue6\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue6}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue6}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue6}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue6}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue6}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value6}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value6}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace6}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue6}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue7\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue7}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue7}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue7}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue7}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue7}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value7}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value7}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace7}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue7}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue8\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue8}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue8}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue8}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue8}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue8}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value8}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value8}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace8}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue8}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue9\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue9}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue9}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue9}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue9}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue9}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value9}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value9}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace9}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue9}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue10\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue10}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue10}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue10}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue10}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue10}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value10}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value10}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace10}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue10}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue11\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue11}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue11}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue11}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue11}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue11}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value11}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value11}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace11}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue11}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue12\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue12}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue12}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue12}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue12}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue12}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value12}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value12}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace12}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue12}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue13\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue13}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue13}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue13}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue13}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue13}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value13}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value13}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace13}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue13}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue14\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue14}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue14}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue14}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue14}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue14}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value14}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value14}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace14}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue14}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue15\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue15}}<br>\n                              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue15}}<br>\n                              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue15}}<br>\n                              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue15}}<br>\n                              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue15}}<br>\n                              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value15}}<br>\n                              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value15}}<br>\n                              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace15}}<br>\n                              <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue15}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName1\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName1}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate1}}                            </p>\n                          </div>\n                          <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName2\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName2}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate2}}\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <div *ngIf=\"tableBerglerStubeHubertusStube.placeholder === 'true'\">\n                        <p [dragula]='\"evented-bag\"' id=\"BerglerStubeHubertusStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBerglerStubeHubertusStube.number}} {{tableBerglerStubeHubertusStube.department}} {{j}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"showBauernStubnBool\">\n                <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n                  <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBauernstube, j)\">{{tableBauernstube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <h4><b> Tisch:</b>{{tableBauernstube.number}} </h4><br>\n                    <div class='cards-container' id='containerBauernstube' [ngStyle]=\"{'background-color': + tableBauernstube.bgColor}\">\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBauernstube.bgColor}\">\n                        <div *ngIf=\"tableBauernstube.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableBauernstube.nameValue}}<br>\n                            <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue}}<br>\n                            <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue}}<br>\n                            <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue}}<br>\n                            <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue}}<br>\n                            <b> Notiz1:</b> {{tableBauernstube.notiz1Value}}<br>\n                            <b> Notiz2:</b> {{tableBauernstube.notiz2Value}}<br>\n                            <b> Trace:</b> {{tableBauernstube.trace}}<br>\n                            <b> Bemerkung:</b> {{tableBauernstube.bemerkungValue}}<br>\n                          </p>\n                          <div *ngIf=\"tableBauernstube.nameValue2\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue2}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue2}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue2}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value2}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value2}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace2}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue2}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue3\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue3}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue3}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue3}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value3}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value3}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace3}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue3}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue4\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue4}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue4}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue4}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue4}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue4}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value4}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value4}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace4}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue4}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue5\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue5}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue5}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue5}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue5}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue5}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value5}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value5}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace5}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue5}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue6\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue6}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue6}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue6}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue6}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue6}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value6}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value6}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace6}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue6}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue7\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue7}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue7}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue7}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue7}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue7}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value7}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value7}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace7}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue7}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue8\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue8}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue8}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue8}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue8}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue8}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value8}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value8}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace8}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue8}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue9\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue9}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue9}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue9}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue9}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue9}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value9}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value9}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace9}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue9}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue10\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue10}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue10}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue10}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue10}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue10}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value10}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value10}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace10}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue10}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue11\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue11}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue11}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue11}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue11}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue11}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value11}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value11}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace11}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue11}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue12\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue12}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue12}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue12}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue12}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue12}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value12}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value12}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace12}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue12}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue13\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue13}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue13}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue13}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue13}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue13}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value13}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value13}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace13}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue13}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue14\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue14}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue14}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue14}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue14}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue14}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value14}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value14}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace14}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue14}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.nameValue15\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableBauernstube.nameValue15}}<br>\n                              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue15}}<br>\n                              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue15}}<br>\n                              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue15}}<br>\n                              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue15}}<br>\n                              <b> Notiz1:</b> {{tableBauernstube.notiz1Value15}}<br>\n                              <b> Notiz2:</b> {{tableBauernstube.notiz2Value15}}<br>\n                              <b> Trace:</b> {{tableBauernstube.trace15}}<br>\n                              <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue15}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.newTraceName\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee}} <br> <b> Name: </b>{{tableBauernstube.newTraceName}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.newTraceName1\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBauernstube.newTraceName1}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate1}}                            </p>\n                          </div>\n                          <div *ngIf=\"tableBauernstube.newTraceName2\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBauernstube.newTraceName2}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate2}}\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <div *ngIf=\"tableBauernstube.placeholder === 'true'\">\n                        <p [dragula]='\"evented-bag\"' id=\"Bauernstube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBauernstube.number}} {{tableBauernstube.department}} {{j}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"showWaeldlerBool\">\n                <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n                  <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWaeldlerStubeKristallStube, j)\">{{tableWaeldlerStubeKristallStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <h4><b> Tisch:</b>{{tableWaeldlerStubeKristallStube.number}} </h4><br>\n                    <div class='cards-container' id='containerWaeldlerStubeKristallStube' [ngStyle]=\"{'background-color': + tableWaeldlerStubeKristallStube.bgColor}\">\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWaeldlerStubeKristallStube.bgColor}\">\n                        <div *ngIf=\"tableWaeldlerStubeKristallStube.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue}}<br>\n                            <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue}}<br>\n                            <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue}}<br>\n                            <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue}}<br>\n                            <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue}}<br>\n                            <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value}}<br>\n                            <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value}}<br>\n                            <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace}}<br>\n                            <b> Bemerkung:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue}}<br>\n                          </p>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue2\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue2}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue2}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue2}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value2}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value2}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace2}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue2}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue3\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue3}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue3}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue3}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value3}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value3}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace3}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue3}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue4\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue4}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue4}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue4}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue4}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue4}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace4}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue4}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue5\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue5}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue5}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue5}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue5}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue5}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value5}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value5}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace5}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue5}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue6\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue6}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue6}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue6}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue6}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue6}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value6}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value6}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace6}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue6}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue7\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue7}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue7}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue7}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue7}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue7}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value7}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value7}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace7}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue7}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue8\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue8}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue8}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue8}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue8}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue8}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value8}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value8}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace8}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue8}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue9\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue9}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue9}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue9}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue9}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue9}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace9}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue9}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue10\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue10}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue10}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue10}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue10}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue10}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value10}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value10}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace10}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue10}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue11\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue11}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue11}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue11}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue11}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue11}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value11}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value11}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace11}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue11}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue12\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue12}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue12}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue12}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue12}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue12}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value12}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value12}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace12}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue12}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue13\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue13}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue13}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue13}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue13}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue13}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value13}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value13}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace13}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue13}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue14\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue14}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue14}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue14}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue14}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue14}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value14}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value14}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace14}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue14}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue15\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue15}}<br>\n                              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue15}}<br>\n                              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue15}}<br>\n                              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue15}}<br>\n                              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue15}}<br>\n                              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value15}}<br>\n                              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value15}}<br>\n                              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace15}}<br>\n                              <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue15}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName1\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName1}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate1}}                            </p>\n                          </div>\n                          <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName2\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName2}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate2}}\n                            </p>\n                          </div>\n\n                        </div>\n                      </div>\n                      <div *ngIf=\"tableWaeldlerStubeKristallStube.placeholder === 'true'\">\n                        <p [dragula]='\"evented-bag\"' id=\"WaeldlerStubeKristallStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWaeldlerStubeKristallStube.number}} {{tableWaeldlerStubeKristallStube.department}} {{j}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div *ngIf=\"showEdelweissBool\">\n                <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n                  <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableEdelweissKaminStube, j)\">{{tableEdelweissKaminStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <h4><b> Tisch:</b>{{tableEdelweissKaminStube.number}} </h4><br>\n                    <div class='cards-container' id='containerEdelweissKaminStube' [ngStyle]=\"{'background-color': + tableEdelweissKaminStube.bgColor}\">\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableEdelweissKaminStube.bgColor}\">\n                        <div *ngIf=\"tableEdelweissKaminStube.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableEdelweissKaminStube.nameValue}}<br>\n                            <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue}}<br>\n                            <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue}}<br>\n                            <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue}}<br>\n                            <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue}}<br>\n                            <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value}}<br>\n                            <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value}}<br>\n                            <b> Trace:</b> {{tableEdelweissKaminStube.trace}}<br>\n                            <b> Bemerkung:</b> {{tableEdelweissKaminStube.bemerkungValue}}<br>\n                          </p>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue2\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue2}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue2}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue2}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value2}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value2}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace2}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue2}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue3\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue3}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue3}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue3}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value3}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value3}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace3}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue3}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue4\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue4}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue4}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue4}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue4}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue4}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value4}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value4}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace4}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue4}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue5\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue5}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue5}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue5}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue5}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue5}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value5}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value5}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace5}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue5}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue6\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue6}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue6}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue6}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue6}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue6}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value6}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value6}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace6}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue6}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue7\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue7}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue7}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue7}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue7}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue7}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value7}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value7}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace7}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue7}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue8\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue8}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue8}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue8}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue8}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue8}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value8}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value8}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace8}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue8}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue9\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue9}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue9}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue9}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue9}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue9}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value9}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value9}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace9}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue9}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue10\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue10}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue10}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue10}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue10}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue10}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value10}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value10}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace10}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue10}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue11\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue11}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue11}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue11}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue11}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue11}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value11}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value11}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace11}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue11}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue12\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue12}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue12}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue12}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue12}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue12}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value12}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value12}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace12}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue12}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue13\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue13}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue13}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue13}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue13}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue13}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value13}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value13}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace13}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue13}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue14\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue14}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue14}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue14}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue14}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue14}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value14}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value14}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace14}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue14}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.nameValue15\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableEdelweissKaminStube.nameValue15}}<br>\n                              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue15}}<br>\n                              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue15}}<br>\n                              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue15}}<br>\n                              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue15}}<br>\n                              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value15}}<br>\n                              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value15}}<br>\n                              <b> Trace:</b> {{tableEdelweissKaminStube.trace15}}<br>\n                              <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue15}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.newTraceName\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.newTraceName1\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName1}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate1}}                            </p>\n                          </div>\n                          <div *ngIf=\"tableEdelweissKaminStube.newTraceName2\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName2}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate2}}\n                            </p>\n                          </div>\n\n                        </div>\n                      </div>\n                      <div *ngIf=\"tableEdelweissKaminStube.placeholder === 'true'\">\n                        <p [dragula]='\"evented-bag\"' id=\"EdelweissKaminStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableEdelweissKaminStube.number}} {{tableEdelweissKaminStube.department}} {{j}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"showTeeStubeBool\">\n                <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge; let j = index;\">\n                  <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTeestubeTeelounge, j)\">{{tableTeestubeTeelounge.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <h4><b> Tisch:</b>{{tableTeestubeTeelounge.number}} </h4><br>\n                    <div class='cards-container' id='containerTeestubeTeelounge' [ngStyle]=\"{'background-color': + tableTeestubeTeelounge.bgColor}\">\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTeestubeTeelounge.bgColor}\">\n                        <div *ngIf=\"tableTeestubeTeelounge.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableTeestubeTeelounge.nameValue}}<br>\n                            <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue}}<br>\n                            <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue}}<br>\n                            <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue}}<br>\n                            <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue}}<br>\n                            <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value}}<br>\n                            <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value}}<br>\n                            <b> Trace:</b> {{tableTeestubeTeelounge.trace}}<br>\n                            <b> Bemerkung:</b> {{tableTeestubeTeelounge.bemerkungValue}}<br>\n                          </p>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue2\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value2}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value2}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue2}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue3\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value3}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value3}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue4\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue4}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue4}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue4}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue4}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue4}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value4}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value4}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace4}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue4}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue5\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue5}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue5}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue5}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue5}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue5}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value5}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value5}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace5}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue5}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue6\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue6}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue6}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue6}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue6}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue6}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value6}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value6}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace6}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue7\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue7}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue7}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue7}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue7}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue7}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value7}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value7}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace7}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue7}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue8\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue8}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue8}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue8}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue8}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue8}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value8}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value8}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace8}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue8}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue9\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue9}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue9}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue9}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue9}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue9}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value9}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value9}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace9}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue9}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue10\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue10}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue10}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue10}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue10}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue10}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value10}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value10}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace10}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue10}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue11\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue11}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue11}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue11}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue11}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue11}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value11}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value11}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace11}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue11}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue12\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue12}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue12}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue12}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue12}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue12}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value12}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value12}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace12}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue12}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue13\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue13}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue13}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue13}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue13}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue13}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value13}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value13}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace13}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue13}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue14\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue14}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue14}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue14}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue14}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue14}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value14}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value14}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace14}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue14}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.nameValue15\">\n                            <p style=\"background-color: #FFFFFF; padding: 10px\">\n                              <b> Name:</b> {{tableTeestubeTeelounge.nameValue15}}<br>\n                              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue15}}<br>\n                              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue15}}<br>\n                              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue15}}<br>\n                              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue15}}<br>\n                              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value15}}<br>\n                              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value15}}<br>\n                              <b> Trace:</b> {{tableTeestubeTeelounge.trace15}}<br>\n                              <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue15}}<br>\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.newTraceName\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.newTraceName1\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText1}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee1}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName1}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate1}}                            </p>\n                          </div>\n                          <div *ngIf=\"tableTeestubeTeelounge.newTraceName2\">\n                            <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                              <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText2}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee2}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName2}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate2}}\n                            </p>\n                          </div>\n\n                        </div>\n                      </div>\n                      <div *ngIf=\"tableTeestubeTeelounge.placeholder === 'true'\">\n                        <p [dragula]='\"evented-bag\"' id=\"TeestubeTeelounge\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTeestubeTeelounge.number}} {{tableTeestubeTeelounge.department}} {{j}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n  <div id=\"printSectionId3\" class=\"section3\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tables\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n      </div>\n    </table>\n  </div>\n  <div id=\"printSectionId1\" class=\"section3\">\n    <div *ngIf=\"showBauernStubnBool\">\n      <table style=\"border: solid 1px black; border-collapse: collapse;\">\n        <tr>\n          {{dateGeneratedListe}}\n        </tr>\n        <tr>\n          Bauernstube\n        </tr>\n        <tr style=\"border: solid 1px black;\">\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        </tr>\n        <div *ngFor=\"let table of tablesBauernstube\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n          <div *ngIf=\"table.nameValue2\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n            </tr>\n          </div>\n          <div *ngIf=\"table.nameValue3\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </tr>\n          </div>\n        </div>\n      </table>\n    </div>\n    <div *ngIf=\"showWaeldlerBool\">\n      <table style=\"border: solid 1px black; border-collapse: collapse;\">\n        <tr>\n          {{dateGeneratedListe}}\n        </tr>\n        <tr>\n          Wäldlerstube / Kristallstube\n        </tr>\n        <tr style=\"border: solid 1px black;\">\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        </tr>\n        <div *ngFor=\"let table of tablesWaeldlerStubeKristallStube\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"table.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </div>\n          </tr>\n          <div *ngIf=\"table.nameValue2\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n            </tr>\n          </div>\n          <div *ngIf=\"table.nameValue3\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </tr>\n          </div>\n        </div>\n      </table>\n    </div>\n    <div *ngIf=\"showBerglerBool\">\n      <table style=\"border: solid 1px black; border-collapse: collapse;\">\n        <tr>\n          {{dateGeneratedListe}}\n        </tr>\n        <tr>\n          Berglerstube / HUBERTUS Stube\n        </tr>\n        <tr style=\"border: solid 1px black;\">\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        </tr>\n        <div *ngFor=\"let table of tablesBerglerStubeHubertusStube\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"table.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </div>\n          </tr>\n          <div *ngIf=\"table.nameValue2\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n            </tr>\n          </div>\n          <div *ngIf=\"table.nameValue3\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </tr>\n          </div>\n        </div>\n      </table>\n    </div>\n    <div *ngIf=\"showEdelweissBool\">\n      <table style=\"border: solid 1px black; border-collapse: collapse;\">\n        <tr>\n          {{dateGeneratedListe}}\n        </tr>\n        <tr>\n          EDELWEISS / Kaminstube\n        </tr>\n        <tr style=\"border: solid 1px black;\">\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        </tr>\n        <div *ngFor=\"let table of tablesEdelweissKaminStube\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"table.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </div>\n          </tr>\n          <div *ngIf=\"table.nameValue2\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n            </tr>\n          </div>\n          <div *ngIf=\"table.nameValue3\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </tr>\n          </div>\n        </div>\n      </table>\n    </div>\n    <div *ngIf=\"showTeeStubeBool\">\n      <table style=\"border: solid 1px black; border-collapse: collapse;\">\n        <tr>\n          {{dateGeneratedListe}}\n        </tr>\n        <tr>\n          TeeStube / Teelounge\n        </tr>\n        <tr style=\"border: solid 1px black;\">\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        </tr>\n        <div *ngFor=\"let table of tablesTeestubeTeelounge\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"table.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </div>\n          </tr>\n          <div *ngIf=\"table.nameValue2\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n            </tr>\n          </div>\n          <div *ngIf=\"table.nameValue3\">\n            <tr style=\"border: solid 1px black;\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n            </tr>\n          </div>\n        </div>\n      </table>\n    </div>\n  </div>\n\n</body>\n\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Table__ = __webpack_require__("../../../../../Table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService, element, renderer) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.element = element;
        this.renderer = renderer;
        this.topValues = [];
        this.newInformationElements = [];
        this.tracesListeElemente = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tablesBerglerStubeHubertusStube = [];
        this.tablesBauernstube = [];
        this.tablesWaeldlerStubeKristallStube = [];
        this.tablesEdelweissKaminStube = [];
        this.tablesTeestubeTeelounge = [];
        this.filesToUpload = [];
        this.isDropped = [];
        var DomBaseElement = this.element.nativeElement;
        var wrapperElementsChildNames = [];
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            //console.log('IM-HAUS-LISTE before:');
            //console.log(imHausListeElemente);
            imHausListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = imHausListeElemente;
            console.log('IM-HAUS-LISTE:');
            console.log(_this.imHausListeElemente);
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            anreiseListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.anreiseListeElemente = anreiseListeElemente;
            console.log(_this.anreiseListeElemente);
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            if (tables === null) {
                return;
            }
            else {
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Bauernstube") {
                        _this.tablesBauernstube = tables[a].tables;
                    }
                    else if (tables[a].department === "edelweissKaminStube") {
                        _this.tablesEdelweissKaminStube = tables[a].tables;
                        console.log('Test' + JSON.stringify(_this.tablesEdelweissKaminStube));
                    }
                    else if (tables[a].department === "berglerStubeHubertusStube") {
                        _this.tablesBerglerStubeHubertusStube = tables[a].tables;
                    }
                    else if (tables[a].department === "waeldlerStubeKristallStube") {
                        _this.tablesWaeldlerStubeKristallStube = tables[a].tables;
                    }
                    else if (tables[a].department === "teestubeTeelounge") {
                        _this.tablesTeestubeTeelounge = tables[a].tables;
                    }
                }
            }
            console.log(_this.tablesBauernstube);
            console.log(_this.tablesEdelweissKaminStube);
            console.log(_this.tablesBerglerStubeHubertusStube);
            console.log(_this.tablesWaeldlerStubeKristallStube);
            console.log(_this.tablesTeestubeTeelounge);
            _this.tables = _this.tables.concat(_this.tablesBauernstube);
            _this.tables = _this.tables.concat(_this.tablesTeestubeTeelounge);
            _this.tables = _this.tables.concat(_this.tablesBerglerStubeHubertusStube);
            _this.tables = _this.tables.concat(_this.tablesEdelweissKaminStube);
            _this.tables = _this.tables.concat(_this.tablesWaeldlerStubeKristallStube);
            _this.formatAzListe(_this.tables);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            console.log(tracesListeElemente);
            tracesListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            //console.log("2:" + tracesListeElemente[0].data[0]);
            //console.log(tracesListeElemente[0].data.length);
            //this.tracesListeElemente = tracesListeElemente[0].data;
            _this.tracesListeElemente = tracesListeElemente;
            //this.formatTracesListeElements(tracesListeElemente);
        });
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    TischplanComponent.prototype.formatAzListe = function (tables) {
        function filterByID(obj) {
            if ('nameValue2' in obj || 'nameValue3' in obj) {
                return true;
            }
            else {
                return false;
            }
        }
        this.tempTablesArray = this.tables.filter(filterByID);
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].nameValue2 || this.tables[i].nameValue3) {
                this.tables.splice(i, 1);
            }
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray2[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray3[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray1[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
                this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
                this.tempTablesArray2[a].notiz1Value = this.tempTablesArray[a].notiz1Value;
                this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
                this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
                this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
                this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
                this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
                this.tempTablesArray2[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue;
                this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
                this.tables = this.tables.concat(this.tempTablesArray2[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
                this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
                this.tempTablesArray1[a].notiz1Value = this.tempTablesArray[a].notiz3Value;
                this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz4Value;
                this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
                this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
                this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
                this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
                this.tempTablesArray1[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue3;
                this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
                this.tables = this.tables.concat(this.tempTablesArray1[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
                this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
                this.tempTablesArray3[a].notiz1Value = this.tempTablesArray[a].notiz5Value;
                this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz6Value;
                this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
                this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
                this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
                this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
                this.tempTablesArray3[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue6;
                this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
                this.tables = this.tables.concat(this.tempTablesArray3[a]);
            }
        }
        /*
         for (let row=0; row<tempTablesArray.length; row++) {
         tempTablesArray[row] = [];
         for (let col=0; col < tempTablesArray[row].length; col++) {
         tempTablesArrayRow = tempTablesArray[row][col];
         }
         }
    
    
    
    
         <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>
         <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>
         <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>
         <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>
         <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>
         <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz3Value}}<br>
         <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz4Value}}<br>
         <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>
         <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>
         </p>
         </div>
         <div *ngIf="tableTeestubeTeelounge.nameValue3">
         <p style="background-color: #FFFFFF; padding: 10px">
         <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>
         <b> Sprache:</b> {{tableTeestubeTeelounge.katValue3}}<br>
         <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>
         <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>
         <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>
         <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>
         <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz5Value}}<br>
         <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz6Value}}<br>
         <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>
         <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>
    
    
         */
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
        for (var i = 0; i < this.tables.length; i++) {
            if (!("nameValue" in this.tables[i])) {
                this.tables.splice(i, 1);
            }
        }
        /*
            this.tables.sort(function(a, b){
                if (a.nameValue < b.nameValue) return -1;
                if (a.nameValue > b.nameValue) return 1;
                return 0;
            });
    
        */
        this.tables = this.tables.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined") {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined") {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        /*
          this.tables.sort(function(a, b){
            console.log(a.nameValue);
            console.log(b.nameValue);
            if (a.nameValue =! "undefined") {
              var nameA=a.nameValue.toLowerCase()
            }
            if (b.nameValue =! "undefined") {
              var nameB=b.nameValue.toLowerCase();
            }
            if (nameA < nameB) //sort string ascending
              return -1;
            if (nameA > nameB)
              return 1;
            return 0; //default return value (no sorting)
          });
        */
        console.log('this.tables after sort: ');
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
        for (var i = 0; i < this.tables.length; i++) {
            console.log(i);
            if ("nameValue" in this.tables[i]) {
                console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        console.log(tables);
    };
    /*
      public formatTracesListeElements(tracesListeElemente) {
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o].length === 7) {
            tracesListeElemente[0].data[o].splice(0, 4);
            tracesListeElemente[0].data[o].splice(6, 7);
          }
        }
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o].length === 8) {
            tracesListeElemente[0].data.splice(o, 1);
          }
        }
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o].length === 1) {
            tracesListeElemente[0].data.splice(o, 1);
          }
        }
    
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o].length === 19) {
            tracesListeElemente[0].data[o] = tracesListeElemente[0].data[o].splice(17, tracesListeElemente[0].data[o].length);
          }
        }
    
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o].length === 13) {
            tracesListeElemente[0].data[o].splice(8, 12);
          }
        }
    
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          console.log(o + tracesListeElemente[0].data[o]);
          console.log('length of : ' + o + tracesListeElemente[0].data[o].length);
        }
    
        let trace = [];
    
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          trace[o] = [];
        }
    
        for (let o = 1; o < tracesListeElemente[0].data.length; o++) {
          if (tracesListeElemente[0].data[o] !== undefined) {
            if (tracesListeElemente[0].data[o].length === 28) {
              trace[o] = tracesListeElemente[0].data[o];
            }
            if (tracesListeElemente[0].data[o].length === 25) {
            trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]);
            console.log('Trace before ->>' + trace[o]);
            }
            if (tracesListeElemente[0].data[o].length === 2) {
              trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o - 1]).concat(tracesListeElemente[0].data[o - 2]);
              console.log('Trace before 2222222222222222222222 ------------------------------>>' + trace[o]);
            }
          }
        }
    
        trace[0] = tracesListeElemente[0].data[0].concat(tracesListeElemente[0].data[1]).concat(tracesListeElemente[0].data[2]);
        trace[0].unshift("", "", "", "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
    
        this.tracesListeElemente.push(trace[0]);
    
        for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
          if (trace[o].length === 30) {
            trace[o].splice(1,2);
            let traceTemp = [];
            traceTemp = trace[o].splice(0, 3);
            console.log('traceTemp' + traceTemp);
            trace[o].push(traceTemp[0]);
            trace[o].push(traceTemp[1]);
            trace[o].splice(24, 0, " ");
          }
        }
    
        for (let o = 1; o < tracesListeElemente[0].data.length; o++) {
          if (trace[o].length > 26) {
            this.tracesListeElemente.push(trace[o]);
          }
        }
        console.log('263' + tracesListeElemente[0].data);
        console.log('264 ' + this.tracesListeElemente);
        console.log(this.tracesListeElemente);
        for (let o = 0; o < this.tracesListeElemente.length; o++) {
          //if (trace[o].length === 25 || trace[o].length === 14) {
    
          //}
        }
      }
    */
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        console.log("Args = " + JSON.stringify(args));
        console.log("Args1 = " + JSON.stringify(args[1]));
        console.log("Args2 = " + JSON.stringify(args[2]));
        console.log("Args3 = " + JSON.stringify(args[3]));
        console.log("Args4 = " + JSON.stringify(args[4]));
        console.log("e = " + JSON.stringify(e));
        console.log("el = " + JSON.stringify(el));
        var information = args[0].innerText;
        console.log("information: " + information);
        var informationElements = information.split(/\n/);
        console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        console.log("departementSubstring: " + departementSubstring);
        var tableNumber = args[1].innerText;
        console.log("tableNumber: " + tableNumber);
        var tableNumberSubstring = tableNumber.toString().match(/\d+/);
        var numbers = tableNumber.match(/\d+/g);
        console.log("numbers: " + numbers);
        var arrayIndex = numbers[1];
        console.log("arrayIndex: " + arrayIndex);
        console.log("tableNumberSubstring: " + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        var jBefore = tableNumber.toString().match(/\d+/g);
        var j = jBefore[1];
        //let j = jArray[1];
        var addPlaceholderDataString = [];
        addPlaceholderDataString.push(departementSubstring);
        addPlaceholderDataString.push(tableNumberSubstring);
        console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Bauernstube") {
                    _this.tablesBauernstube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
                }
            }
            // console.log(this.tablesBerglerStubeHubertusStube[arrayIndex]);
        });
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateImHausListeElement response: ');
            console.log(response);
        });
        this.tischplanService.updateAnreiseListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateAnreiseListeElement response: ');
            console.log(response);
        });
        this.tischplanService.updateTracesListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateTracesListeElement response: ');
            console.log(response);
        });
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Bauernstube") {
                    _this.tablesBauernstube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
        });
        //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.ngOnInit = function () {
        // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TischplanComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            return _this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', { cssClass: 'alert-success', timeout: 10000 });
        })
            .subscribe(function (files) { return console.log('files', files); });
    };
    TischplanComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
        //console.log(this.successMsg);
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    TischplanComponent.prototype.occupy = function (table, j) {
        var _this = this;
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "Bauernstube") {
                    _this.tablesBauernstube[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[j] = response[0].tables[j];
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("Add placeholder! table ... " + JSON.stringify(table));
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            if (response === null) {
                return;
            }
            else {
                //console.log(this.tablesBerglerStubeHubertusStube[j].placeholder);
                if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "Bauernstube") {
                    _this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[j].placeholder = response[0].tables[j].placeholder;
                }
            }
        });
    };
    TischplanComponent.prototype.showBauernStubn = function () {
        console.log("showBauernStubn!");
        this.showBauernStubnBool = true;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        if (this.buttonBgColor1 === "0a7a74") {
            this.buttonBgColor1 = "f3efe4";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showBergler = function () {
        console.log("showBergler!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = true;
        console.log(this.showBerglerBool);
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        if (this.buttonBgColor2 === "0a7a74") {
            this.buttonBgColor2 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showWaeldler = function () {
        console.log("showWaeldler!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = true;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        if (this.buttonBgColor3 === "0a7a74") {
            this.buttonBgColor3 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showEdelweiss = function () {
        console.log("showEdelweiss!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = true;
        this.showTeeStubeBool = false;
        if (this.buttonBgColor4 === "0a7a74") {
            this.buttonBgColor4 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showTeestube = function () {
        console.log("showTeeStube!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = true;
        if (this.buttonBgColor5 === "0a7a74") {
            this.buttonBgColor5 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor5 = "0a7a74";
        }
        if (this.fontColor5 === "f3efe4") {
            this.fontColor5 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
    };
    TischplanComponent.prototype.moveTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.moveTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                _this.tablesBerglerStubeHubertusStube = response[0].tables;
            }
            else if (response[0].tables[j].department === "Bauernstube") {
                _this.tablesBauernstube = response[0].tables;
            }
            else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                _this.tablesWaeldlerStubeKristallStube = response[0].tables;
            }
            else if (response[0].tables[j].department === "edelweissKaminStube") {
                _this.tablesEdelweissKaminStube = response[0].tables;
            }
            else if (response[0].tables[j].department === "teestubeTeelounge") {
                _this.tablesTeestubeTeelounge = response[0].tables;
            }
        });
    };
    TischplanComponent.prototype.sendInformation = function (event) {
        var _this = this;
        event.preventDefault();
        this.dateGenerated = new Date();
        var newInformation = {
            text: this.title,
            roomNumber: this.roomNumber,
            tableNumber: this.tableNumber,
            date: this.dateGenerated,
            name: this.nameTraceInput,
            employee: this.employee
        };
        if (newInformation.text === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
            console.log(newInformation.tableNumber);
            if (newInformation.tableNumber) {
                this.tischplanService.sendInformation(newInformation)
                    .subscribe(function (Information) {
                    //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                    console.log('Information: ' + JSON.stringify(Information));
                    console.log(Information.tables[0]);
                    console.log("------");
                    //console.log(Information[0].tables);
                    if (Information === null) {
                        return;
                    }
                    else {
                        if (Information.tables[0].department === "Bauernstube") {
                            for (var i = 0; i < _this.tablesBauernstube.length; i++) {
                                if (_this.tablesBauernstube[i].number === Information.tables[0].number) {
                                    _this.tablesBauernstube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "waeldlerStubeKristallStube") {
                            for (var i = 0; i < _this.tablesWaeldlerStubeKristallStube.length; i++) {
                                if (_this.tablesWaeldlerStubeKristallStube[i].number === Information.tables[0].number) {
                                    _this.tablesWaeldlerStubeKristallStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "berglerStubeHubertusStube") {
                            for (var i = 0; i < _this.tablesBerglerStubeHubertusStube.length; i++) {
                                if (_this.tablesBerglerStubeHubertusStube[i].number === Information.tables[0].number) {
                                    _this.tablesBerglerStubeHubertusStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "edelweissKaminStube") {
                            for (var i = 0; i < _this.tablesEdelweissKaminStube.length; i++) {
                                if (_this.tablesEdelweissKaminStube[i].number === Information.tables[0].number) {
                                    _this.tablesEdelweissKaminStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "teestubeTeelounge") {
                            for (var i = 0; i < _this.tablesTeestubeTeelounge.length; i++) {
                                if (_this.tablesTeestubeTeelounge[i].number === Information.tables[0].number) {
                                    _this.tablesTeestubeTeelounge[i] = Information.tables[0];
                                }
                            }
                        }
                    }
                });
            }
            this.tischplanService.sendInformationToBox(newInformation)
                .subscribe(function (Information) {
                //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                console.log('Information: ' + JSON.stringify(Information));
                //console.log(Information.tables[0]);
                //console.log("------");
                //console.log(Information[0].tables);
                _this.newInformationElements.push(Information);
                console.log('this.newInformationElements' + _this.newInformationElements);
            });
        }
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    TischplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TischplanComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    TischplanComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } .t25 { position: absolute; } .t26 { position: absolute; } .t30 { position: absolute; } .t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t99 { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    TischplanComponent.prototype.printToCart3 = function (printSectionId3) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId3).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    return TischplanComponent;
}());
TischplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _f || Object])
], TischplanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TischplanService = (function () {
    function TischplanService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    TischplanService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTracesListe = function () {
        return this.http.get('tracesListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.moveTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('moveTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TischplanService);

var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map