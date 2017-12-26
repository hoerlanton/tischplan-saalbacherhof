webpackJsonp(["main"],{

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
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
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
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.row .container-fluid {\n  height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 150px;\n}\n\n.row .container-fluid .col-md-4 {\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  height: 100%;\n  border-bottom: 20px solid #0a7a74;\n  max-width: 20%;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .row3 {\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n\n.row .container-fluid .col-md-6 h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align:center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12 .form-group {\n  border-top:3px solid #0a7a74;\n  width: 105%;\n  padding: 10px 10px 10px 30px;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12  .group {\n  border-top:3px solid #0a7a74;\n  width: 105%;\n  padding: 10px 10px 10px 30px;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12 .form-group1 {\n  margin-top: 20px;\n  overflow: auto;\n  max-height: 300px;\n  display: inline-block;\n  border-top:3px solid #0a7a74;\n  width: 102%;\n  padding: 10px 10px 10px 25px;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 {\n  height: 620px;\n  width: 58%;\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.row .container-fluid .col-md-6 .row1 .col-md-3 {\n  margin: 0px 0px 0px 0px;\n  padding: 20px 20px 20px 20px;\n}\n\n.row .container-fluid .col-md-6 #printSectionId2 .row .t1 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 #printSectionId2 .row .t2 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t3 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t4 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t5 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t6 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t7 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t8 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t9 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t10 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t11 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t12 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t13 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t14 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t15 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t16 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t17 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t18 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t19 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t20 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t21 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t22 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t23 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t24 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t40 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t41 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t42 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t43 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t44 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t45 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t46 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t47 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t48 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t49 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t50 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t51 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t52 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t53 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t54 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t55 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t56 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t57 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t58 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t59 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t60 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t61 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t62 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t63 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t64 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t65 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t66 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t67 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t68 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t69 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t70 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t71 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t72 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t73 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t74 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t75 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t76 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t77 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t78 {\n  position: absolute;\n}\n\n\n.row .container-fluid .col-md-6 .row .t79 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t80 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t81 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t82 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t83 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t84 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t85 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row  .t86 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t87 {\n  position: absolute;\n}\n\n\n.row .container-fluid .col-md-6 .row .t88 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t89 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t501 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t502 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t503 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t504 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t505 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t506 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t507 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t508 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t509 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t510 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t511 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t512 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t513 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t514 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t515 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t516 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t517 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t518 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t519 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t520 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t521 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t522 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t523 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t524 {\n  position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t525 {\n  position: absolute;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n\n<body>\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\"></li>\n        <li style=\"text-align: left; display:table-cell; vertical-align:middle; margin-bottom: 5px; margin-right: 20px;\"><a href=\"http://servicio.io/tester-info-3-2\">Anleitung</a></li>\n        <button (click)=\"printToCart1('printSectionId1')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px\" class=\"button\">Tisch Übersicht Drucken</button>\n        <button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px\" class=\"button\">Tisch Plan Drucken</button>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/12/680001_160527_7E4EAE33_logo_779px.jpg\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 5px;float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div id=\"printSectionId1\">\n      <div class=\"col-md-4\"><h3>Tisch Übersicht</h3>\n        <div class=\"col-xs-12\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row1\">\n            <div class='wrapper' id=\"wrapper\">\n              <div *ngIf=\"showSonnbergZirbnBool\">\n                <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n                  <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n                    <div class='container' id='containerSonnbergZirbn' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n                      <p><b> Tisch:</b>{{tableSonnbergZirbn.number}} </p><br>\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n                        <div *ngIf=\"tableSonnbergZirbn.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF\">\n                            <b> Name:</b>{{tableSonnbergZirbn.nameValue}}<br>\n                            <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue}}<br>\n                            <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue}}<br>\n                            <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue}}<br>\n                            <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue}}<br>\n                            <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue}}<br>\n                            <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue}}<br>\n                            <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue}}<br>\n                            <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value}}<br>\n                            <b> Trace:</b>{{tableSonnbergZirbn.trace}}\n                          </p>\n                          <div *ngIf=\"tableSonnbergZirbn.nameValue2\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableSonnbergZirbn.nameValue2}}<br>\n                              <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue2}}<br>\n                              <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue2}}<br>\n                              <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue2}}<br>\n                              <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue2}}<br>\n                              <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue2}}<br>\n                              <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value2}}<br>\n                              <b> Trace:</b>{{tableSonnbergZirbn.trace2}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableSonnbergZirbn.nameValue3\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableSonnbergZirbn.nameValue3}}<br>\n                              <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue3}}<br>\n                              <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue3}}<br>\n                              <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue3}}<br>\n                              <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue3}}<br>\n                              <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue3}}<br>\n                              <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value3}}<br>\n                              <b> Trace:</b>{{tableSonnbergZirbn.trace3}}\n                            </p>\n                          </div>\n                        </div>\n                        <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\">\n                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"showPanoramaBool\">\n                <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n                  <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <div class='container' id='containerPanorama' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n                      <p><b> Tisch:</b>{{tablePanorama.number}} </p><br>\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n                        <div *ngIf=\"tablePanorama.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF\">\n                            <b> Name:</b>{{tablePanorama.nameValue}}<br>\n                            <b> Sprache:</b>{{tablePanorama.spracheValue}}<br>\n                            <b> Zimmernummer:</b>{{tablePanorama.zimmernummerValue}}<br>\n                            <b> Preis Typ:</b>{{tablePanorama.preistypValue}}<br>\n                            <b> Anreise Datum:</b>{{tablePanorama.anreiseValue}}<br>\n                            <b> Abreise Datum:</b>{{tablePanorama.abreiseValue}}<br>\n                            <b> Personenanzahl:</b>{{tablePanorama.personenAnzahlValue}}<br>\n                            <b> RB/SOU:</b>{{tablePanorama.rbsouValue}}<br>\n                            <b> Notiz2:</b>{{tablePanorama.notiz2Value}}<br>\n                            <b> Trace:</b>{{tablePanorama.trace}}\n                          </p>\n                          <div *ngIf=\"tablePanorama.nameValue2\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tablePanorama.nameValue2}}<br>\n                              <b> Sprache:</b>{{tablePanorama.spracheValue2}}<br>\n                              <b> Zimmernummer:</b>{{tablePanorama.zimmernummerValue2}}<br>\n                              <b> Preis Typ:</b>{{tablePanorama.preistypValue2}}<br>\n                              <b> Anreise Datum:</b>{{tablePanorama.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b>{{tablePanorama.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b>{{tablePanorama.personenAnzahlValue2}}<br>\n                              <b> RB/SOU:</b>{{tablePanorama.rbsouValue2}}<br>\n                              <b> Notiz2:</b>{{tablePanorama.notiz2Value2}}<br>\n                              <b> Trace:</b>{{tablePanorama.trace2}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tablePanorama.nameValue3\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tablePanorama.nameValue3}}<br>\n                              <b> Sprache:</b>{{tablePanorama.spracheValue3}}<br>\n                              <b> Zimmernummer:</b>{{tablePanorama.zimmernummerValue3}}<br>\n                              <b> Preis Typ:</b>{{tablePanorama.preistypValue3}}<br>\n                              <b> Anreise Datum:</b>{{tablePanorama.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b>{{tablePanorama.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b>{{tablePanorama.personenAnzahlValue3}}<br>\n                              <b> RB/SOU:</b>{{tablePanorama.rbsouValue3}}<br>\n                              <b> Notiz2:</b>{{tablePanorama.notiz2Value3}}<br>\n                              <b> Trace:</b>{{tablePanorama.trace3}}\n                            </p>\n                          </div>\n                        </div>\n                        <div *ngIf=\"tablePanorama.placeholder === 'true'\">\n                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"showRestaurantBool\">\n                <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n                  <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <div class='container' id='containerRestaurant' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n                      <p><b> Tisch:</b>{{tableRestaurant.number}} </p><br>\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n                        <div *ngIf=\"tableRestaurant.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF\">\n                            <b> Name:</b>{{tableRestaurant.nameValue}}<br>\n                            <b> Sprache:</b>{{tableRestaurant.spracheValue}}<br>\n                            <b> Zimmernummer:</b>{{tableRestaurant.zimmernummerValue}}<br>\n                            <b> Preis Typ:</b>{{tableRestaurant.preistypValue}}<br>\n                            <b> Anreise Datum:</b>{{tableRestaurant.anreiseValue}}<br>\n                            <b> Abreise Datum:</b>{{tableRestaurant.abreiseValue}}<br>\n                            <b> Personenanzahl:</b>{{tableRestaurant.personenAnzahlValue}}<br>\n                            <b> RB/SOU:</b>{{tableRestaurant.rbsouValue}}<br>\n                            <b> Notiz2:</b>{{tableRestaurant.notiz2Value}}<br>\n                            <b> Trace:</b>{{tableRestaurant.trace}}\n                          </p>\n                          <div *ngIf=\"tableRestaurant.nameValue2\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableRestaurant.nameValue2}}<br>\n                              <b> Sprache:</b>{{tableRestaurant.spracheValue2}}<br>\n                              <b> Zimmernummer:</b>{{tableRestaurant.zimmernummerValue2}}<br>\n                              <b> Preis Typ:</b>{{tableRestaurant.preistypValue2}}<br>\n                              <b> Anreise Datum:</b>{{tableRestaurant.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b>{{tableRestaurant.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b>{{tableRestaurant.personenAnzahlValue2}}<br>\n                              <b> RB/SOU:</b>{{tableRestaurant.rbsouValue2}}<br>\n                              <b> Notiz2:</b>{{tableRestaurant.notiz2Value2}}<br>\n                              <b> Trace:</b>{{tableRestaurant.trace2}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableRestaurant.nameValue3\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableRestaurant.nameValue3}}<br>\n                              <b> Sprache:</b>{{tableRestaurant.spracheValue3}}<br>\n                              <b> Zimmernummer:</b>{{tableRestaurant.zimmernummerValue3}}<br>\n                              <b> Preis Typ:</b>{{tableRestaurant.preistypValue3}}<br>\n                              <b> Anreise Datum:</b>{{tableRestaurant.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b>{{tableRestaurant.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b>{{tableRestaurant.personenAnzahlValue3}}<br>\n                              <b> RB/SOU:</b>{{tableRestaurant.rbsouValue3}}<br>\n                              <b> Notiz2:</b>{{tableRestaurant.notiz2Value3}}<br>\n                              <b> Trace:</b>{{tableRestaurant.trace3}}\n                            </p>\n                          </div>\n                        </div>\n                        <div *ngIf=\"tableRestaurant.placeholder === 'true'\">\n                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div *ngIf=\"showWintergartenBool\">\n                <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n                  <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                    <div class='container' id='containerWintergarten' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n                      <p><b> Tisch:</b>{{tableWintergarten.number}} </p><br>\n                      <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n                        <div *ngIf=\"tableWintergarten.isBesetzt === 'true'\">\n                          <p style=\"background-color: #FFFFFF\">\n                            <b> Name:</b>{{tableWintergarten.nameValue}}<br>\n                            <b> Sprache:</b>{{tableWintergarten.spracheValue}}<br>\n                            <b> Zimmernummer:</b>{{tableWintergarten.zimmernummerValue}}<br>\n                            <b> Preis Typ:</b>{{tableWintergarten.preistypValue}}<br>\n                            <b> Anreise Datum:</b>{{tableWintergarten.anreiseValue}}<br>\n                            <b> Abreise Datum:</b>{{tableWintergarten.abreiseValue}}<br>\n                            <b> Personenanzahl:</b>{{tableWintergarten.personenAnzahlValue}}<br>\n                            <b> RB/SOU:</b>{{tableWintergarten.rbsouValue}}<br>\n                            <b> Notiz2:</b>{{tableWintergarten.notiz2Value}}<br>\n                            <b> Trace:</b>{{tableWintergarten.trace}}\n                          </p>\n                          <div *ngIf=\"tableWintergarten.nameValue2\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableWintergarten.nameValue2}}<br>\n                              <b> Sprache:</b>{{tableWintergarten.spracheValue2}}<br>\n                              <b> Zimmernummer:</b>{{tableWintergarten.zimmernummerValue2}}<br>\n                              <b> Preis Typ:</b>{{tableWintergarten.preistypValue2}}<br>\n                              <b> Anreise Datum:</b>{{tableWintergarten.anreiseValue2}}<br>\n                              <b> Abreise Datum:</b>{{tableWintergarten.abreiseValue2}}<br>\n                              <b> Personenanzahl:</b>{{tableWintergarten.personenAnzahlValue2}}<br>\n                              <b> RB/SOU:</b>{{tableWintergarten.rbsouValue2}}<br>\n                              <b> Notiz2:</b>{{tableWintergarten.notiz2Value2}}<br>\n                              <b> Trace:</b>{{tableWintergarten.trace2}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"tableWintergarten.nameValue3\">\n                            <p style=\"background-color: #FFFFFF\">\n                              <b> Name:</b>{{tableWintergarten.nameValue3}}<br>\n                              <b> Sprache:</b>{{tableWintergarten.spracheValue3}}<br>\n                              <b> Zimmernummer:</b>{{tableWintergarten.zimmernummerValue3}}<br>\n                              <b> Preis Typ:</b>{{tableWintergarten.preistypValue3}}<br>\n                              <b> Anreise Datum:</b>{{tableWintergarten.anreiseValue3}}<br>\n                              <b> Abreise Datum:</b>{{tableWintergarten.abreiseValue3}}<br>\n                              <b> Personenanzahl:</b>{{tableWintergarten.personenAnzahlValue3}}<br>\n                              <b> RB/SOU:</b>{{tableWintergarten.rbsouValue3}}<br>\n                              <b> Notiz2:</b>{{tableWintergarten.notiz2Value3}}<br>\n                              <b> Trace:</b>{{tableWintergarten.trace3}}\n                            </p>\n                          </div>\n                        </div>\n                        <div *ngIf=\"tableWintergarten.placeholder === 'true'\">\n                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"csv\"  style=\" width: 100%; height: 150px; padding: 10px 20px 50px 20px\"><h3>CSV-Datei hochladen</h3>\n        <div class=\"line\"></div>\n        <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n          <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n          <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n        </form>\n      </div>\n      <h3>Im-Haus-Liste</h3>\n      <div class=\"row1\">\n        <div class='wrapper'>\n          <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n            <div class='container' id='container1' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card1\">\n                <p> <b>Name:</b> {{imHausListeElement[23]}}<br>\n                  <b>Sprache:</b> {{imHausListeElement[25]}}<br>\n                  <b>Zimmernummer:</b> {{imHausListeElement[26]}}<br>\n                  <b>PreisTyp:</b> {{imHausListeElement[28]}}<br>\n                  <b>Anreise:</b> {{imHausListeElement[29]}}<br>\n                  <b>Abreise:</b> {{imHausListeElement[30]}}<br>\n                  <b>Personen Anzahl:</b> {{imHausListeElement[31]}}<br>\n                  <b>RB/SOU:</b> {{imHausListeElement[32]}}<br>\n                  <b>Notiz2:</b> {{imHausListeElement[33]}}<br>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h3>Anreise-Liste</h3>\n      <div class=\"row1\">\n        <div class='wrapper'>\n          <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n            <div class='container' id='container2' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card2\">\n                <p> <b>Name:</b> {{anreiseListeElement[20]}}<br>\n                  <b>Zimmernummer:</b> {{anreiseListeElement[22]}}<br>\n                  <b>PreisTyp:</b> {{anreiseListeElement[26]}}<br>\n                  <b>Anreise:</b> {{anreiseListeElement[11]}}<br>\n                  <b>Abreise:</b> {{anreiseListeElement[24]}}<br>\n                  <b>Personen Anzahl:</b> {{anreiseListeElement[25]}}<br>\n                  <b>RB/SOU:</b> {{anreiseListeElement[26]}}<br>\n                  <b>Notiz2:</b> {{anreiseListeElement[27]}}<br>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h3>Traces-Liste</h3>\n      <div class=\"row1\">\n        <div class='wrapper'>\n          <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n            <div class='container' id='container3' [dragula]='\"evented-bag\"' >\n              <div class=\"card\" id=\"card3\">\n                <b>Zimmernummer:</b> {{tracesListeElement[0]}}<br>\n                <b>Name:</b> {{tracesListeElement[1]}}<br>\n                <b>Gäste Kategorie:</b> {{tracesListeElement[2]}}<br>\n                <b>Anreise:</b> {{tracesListeElement[3]}}<br>\n                <b>Abreise:</b> {{tracesListeElement[5]}}<br>\n                <b>Trace:</b> {{tracesListeElement[8]}}<br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-6\"><h3>Tisch Plan</h3>\n      <div class=\"row1\" style=\"height: auto; max-width: 95%\">\n        <div class=\"col-md-3\"  (click)=\"showSonnbergZirbn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <h3 [ngStyle]=\"{'color': '#' + fontColor1}\">Sonnberg-Zirbn</h3>\n        </div>\n        <div class=\"col-md-3\"  (click)=\"showPanorama()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <h3 [ngStyle]=\"{'color': '#' + fontColor2}\">Panorama</h3>\n        </div>\n        <div class=\"col-md-3\"  (click)=\"showRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <h3 [ngStyle]=\"{'color': '#' + fontColor3}\">Restaurant</h3>\n        </div>\n        <div class=\"col-md-3\"  (click)=\"showWintergarten()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <h3 [ngStyle]=\"{'color': '#' + fontColor4}\">Wintergarten</h3>\n        </div>\n      </div>\n      <div id=\"printSectionId2\">\n        <div class=\"row\" style=\"background-color: #eaf3f3; border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\" >\n          <div *ngIf=\"showSonnbergZirbnBool\">\n            <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n              <div class=\"t{{tableSonnbergZirbn.number}}\" (click)=\"moveTable(tableSonnbergZirbn, j)\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor, 'height': + tableSonnbergZirbn.height + 'px', 'width': + tableSonnbergZirbn.width + 'px', 'border': + tableSonnbergZirbn.border}\">\n                <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                  <p>{{tableSonnbergZirbn.number}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showPanoramaBool\">\n            <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n              <div class=\"t{{tablePanorama.number}}\" (click)=\"moveTable(tablePanorama, j)\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor,  'height': + tablePanorama.height + 'px', 'width': + tablePanorama.width + 'px', 'border': + tablePanorama.border}\">\n                <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                  <p>{{tablePanorama.number}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showRestaurantBool\">\n            <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n              <div class=\"t{{tableRestaurant.number}}\" (click)=\"moveTable(tableRestaurant, j)\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor, 'height': + tableRestaurant.height + 'px', 'width': + tableRestaurant.width + 'px', 'border': + tableRestaurant.border}\">\n                <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                  <p>{{tableRestaurant.number}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showWintergartenBool\">\n            <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n              <div class=\"t{{tableWintergarten.number}}\" (click)=\"moveTable(tableWintergarten, j)\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor,  'height': + tableWintergarten.height + 'px', 'width': + tableWintergarten.width + 'px', 'border': + tableWintergarten.border, 'border-radius': + tableWintergarten.borderRadius, 'transform':  + tableWintergarten.transformValue}\">\n                <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                  <p>{{tableWintergarten.number}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n\n</html>\n\n\n"

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
        this.tracesListeElemente = [];
        this.tablesSonnbergZirbn = [];
        this.tablesPanorama = [];
        this.tablesRestaurant = [];
        this.tablesWintergarten = [];
        this.filesToUpload = [];
        this.isDropped = [];
        var DomBaseElement = this.element.nativeElement;
        var wrapperElementsChildNames = [];
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            _this.imHausListeElemente = imHausListeElemente[0].data;
            console.log(_this.imHausListeElemente);
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            _this.anreiseListeElemente = anreiseListeElemente[0].data;
            console.log(_this.anreiseListeElemente);
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            for (var a = 0; a < tables.length; a++) {
                if (tables[a].department === "Panorama") {
                    _this.tablesPanorama = tables[a].tables;
                }
                else if (tables[a].department === "Wintergarten") {
                    _this.tablesWintergarten = tables[a].tables;
                    console.log('Test' + JSON.stringify(_this.tablesWintergarten));
                }
                else if (tables[a].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn = tables[a].tables;
                }
                else if (tables[a].department === "Restaurant") {
                    _this.tablesRestaurant = tables[a].tables;
                }
            }
            console.log(_this.tablesPanorama);
            console.log(_this.tablesWintergarten);
            console.log(_this.tablesSonnbergZirbn);
            console.log(_this.tablesRestaurant);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            console.log('92' + JSON.stringify(tracesListeElemente));
            //console.log("2:" + tracesListeElemente[0].data[0]);
            //console.log(tracesListeElemente[0].data.length);
            //this.tracesListeElemente = tracesListeElemente[0].data;
            _this.formatTracesListeElements(tracesListeElemente);
        });
        this.buttonBgColor1 = "eaf3f3";
        this.buttonBgColor2 = "eaf3f3";
        this.buttonBgColor3 = "eaf3f3";
        this.buttonBgColor4 = "eaf3f3";
        this.fontColor1 = "0a7a74";
        this.fontColor2 = "0a7a74";
        this.fontColor3 = "0a7a74";
        this.fontColor4 = "0a7a74";
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
    TischplanComponent.prototype.formatTracesListeElements = function (tracesListeElemente) {
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 7) {
                tracesListeElemente[0].data[o].splice(0, 5);
                tracesListeElemente[0].data[o].splice(6, 7);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 8) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 24) {
                tracesListeElemente[0].data[o].splice(0, 12);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 13) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 19) {
                tracesListeElemente[0].data[o].splice(0, 17);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 1) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 12) {
                tracesListeElemente[0].data[o].splice(8, 12);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 2) {
                tracesListeElemente[0].data[o].splice(1, 2);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            console.log(o + tracesListeElemente[0].data[o]);
            console.log('length of : ' + o + tracesListeElemente[0].data[o].length);
        }
        var trace = [];
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            trace[o] = [];
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o] !== undefined) {
                //if (tracesListeElemente[0].data[o].length === 8) {
                trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]);
                console.log('Trace before ->>' + trace[o]);
                //}
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            //if (trace[o].length === 9) {
            this.tracesListeElemente.push(trace[o]);
            //}
        }
        console.log('263' + tracesListeElemente[0].data);
        console.log('264 ' + this.tracesListeElemente);
    };
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        console.log("Args = ");
        var information = args[0].innerText;
        var department = JSON.stringify(args[1].id);
        var departementSubstring = department.substring(10, department.length - 1);
        console.log(departementSubstring);
        var tableNumber = args[1].innerText;
        var tableNumberSubstring = "";
        console.log("tableNumber" + tableNumber);
        tableNumberSubstring = tableNumber.toString().match(/\d+/);
        console.log("tableNumberSubstring" + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        //console.log(dataString);
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response.tables[0].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Panorama") {
                _this.tablesPanorama[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Restaurant") {
                _this.tablesRestaurant[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Wintergarten") {
                _this.tablesWintergarten[response.tables[0].arrayIndex] = response.tables[0];
            }
            // console.log(this.tablesSonnbergZirbn[arrayIndex]);
        });
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));
            if (response.tables[0].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Panorama") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Restaurant") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if (response.tables[0].department === "Wintergarten") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });
        this.tischplanService.removePlaceholder(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            console.log("Response placeholder:" + JSON.stringify(response));
            if (response.tables[0].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
            }
            else if (response.tables[0].department === "Panorama") {
                _this.tablesPanorama[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
            }
            else if (response.tables[0].department === "Restaurant") {
                _this.tablesRestaurant[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
            }
            else if (response.tables[0].department === "Wintergarten") {
                _this.tablesWintergarten[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
            }
            //console.log("placeholder:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });
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
            if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn[j] = response[0].tables[j];
            }
            else if (response[0].tables[j].department === "Panorama") {
                _this.tablesSonnbergZirbn[j] = response[0].tables[j];
            }
            else if (response[0].tables[j].department === "Restaurant") {
                _this.tablesSonnbergZirbn[j] = response[0].tables[j];
            }
            else if (response[0].tables[j].department === "Wintergarten") {
                _this.tablesSonnbergZirbn[j] = response[0].tables[j];
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            //console.log(this.tablesSonnbergZirbn[j].placeholder);
            if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
            }
            else if (response[0].tables[j].department === "Panorama") {
                _this.tablesPanorama[j].placeholder = response[0].tables[j].placeholder;
            }
            else if (response[0].tables[j].department === "Restaurant") {
                _this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
            }
            else if (response[0].tables[j].department === "Wintergarten") {
                _this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
            }
        });
    };
    TischplanComponent.prototype.showSonnbergZirbn = function () {
        console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor1 === "eaf3f3") {
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor1 = "eaf3f3";
        }
        if (this.fontColor1 === "0a7a74") {
            this.fontColor1 = "eaf3f3";
            this.fontColor2 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor1 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showPanorama = function () {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor2 === "eaf3f3") {
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor2 = "eaf3f3";
        }
        if (this.fontColor2 === "0a7a74") {
            this.fontColor2 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor2 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showRestaurant = function () {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        if (this.buttonBgColor3 === "eaf3f3") {
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor3 = "eaf3f3";
        }
        if (this.fontColor3 === "0a7a74") {
            this.fontColor3 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor3 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showWintergarten = function () {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        if (this.buttonBgColor4 === "eaf3f3") {
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
        }
        else {
            this.buttonBgColor4 = "eaf3f3";
        }
        if (this.fontColor4 === "0a7a74") {
            this.fontColor4 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "0a7a74";
            this.fontColor3 = "0a7a74";
        }
        else {
            this.fontColor4 = "0a7a74";
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
            if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                _this.tablesSonnbergZirbn = response[0].tables;
            }
            else if (response[0].tables[j].department === "Panorama") {
                _this.tablesPanorama = response[0].tables;
            }
            else if (response[0].tables[j].department === "Restaurant") {
                _this.tablesRestaurant = response[0].tables;
            }
            else if (response[0].tables[j].department === "Wintergarten") {
                _this.tablesWintergarten = response[0].tables;
            }
        });
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
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
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