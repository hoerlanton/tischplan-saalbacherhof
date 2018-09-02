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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [tischplan_service_1.TischplanService],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var tischplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/index.js");
var dropdown_1 = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var im_haus_liste_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
var tableplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
var print_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
var form_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
var departments_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
var departmentmenu_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
var erde_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/erde/erde.component.ts");
var luft_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/luft/luft.component.ts");
var wasser_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/wasser/wasser.component.ts");
var metall_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/metall/metall.component.ts");
var feuer_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/feuer/feuer.component.ts");
var alle_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
var ng2_search_filter_1 = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/register/register.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/profile/profile.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: tischplan_component_1.TischplanComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            tischplan_component_1.TischplanComponent,
            im_haus_liste_component_1.ImHausListeComponent,
            tableplan_component_1.TableplanComponent,
            navigation_component_1.NavigationComponent,
            print_component_1.PrintComponent,
            form_component_1.FormComponent,
            departments_component_1.DepartmentsComponent,
            departmentmenu_component_1.DepartmentmenuComponent,
            erde_component_1.ErdeComponent,
            feuer_component_1.FeuerComponent,
            luft_component_1.LuftComponent,
            wasser_component_1.WasserComponent,
            metall_component_1.MetallComponent,
            alle_component_1.AlleComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            profile_component_1.ProfileComponent
        ],
        imports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_flash_messages_1.FlashMessagesModule,
            ng2_dragula_1.DragulaModule,
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            dropdown_1.BsDropdownModule.forRoot(),
            ng2_search_filter_1.Ng2SearchPipeModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [validate_service_1.ValidateService, auth_service_1.AuthService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row4 {\n  margin-top: 90px;\n}\n\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n  .btn-send {\n    display: block;\n  }\n  .row4 {\n    margin-top: 0px;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\" style=\"min-height: 80px;\">\n  <div class=\"col-md-3 col-xs-3\" style=\"width: 35%; min-height: 80px\">\n    <div class=\"btn-group-departments\" style=\" width: auto; margin: 0px 10px 5px 0px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" color: #FFFFFF; border: none\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\" class=\"btn btn-group-departments\">\n        <div *ngIf=\"showAbteilungen\">\n          Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showAlleBool\">\n          Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showErdeBool\">\n          Erde<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showFeuerBool\">\n          Feuer<i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showLuftBool\">\n          Luft<i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showMetallBool\">\n          Metall<i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showWasserBool\">\n          Wasser<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\"  role=\"menu\" style=\"overflow: auto; margin: 0 0 0 20px; width: 200px;\">\n        <li role=\"menuitem\" class=\"showErde\" style=\"padding: 10px\"  (click)=\"showErde()\" (mouseenter)=\"mouseEnterErde()\"  (mouseleave)=\"mouseLeaveErde()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor1}\">Erde</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showFeuer\" style=\"padding: 10px\"  (click)=\"showFeuer()\" (mouseenter)=\"mouseEnterFeuer()\"  (mouseleave)=\"mouseLeaveFeuer()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor2}\">Feuer</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showLuft\" style=\"padding: 10px\"  (click)=\"showLuft()\" (mouseenter)=\"mouseEnterLuft()\"  (mouseleave)=\"mouseLeaveLuft()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor4}\">Luft</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showMetall\" style=\"padding: 10px\" (click)=\"showMetall()\" (mouseenter)=\"mouseEnterMetall()\"  (mouseleave)=\"mouseLeaveMetall()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor3}\">Metall</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showWasser\" style=\"padding: 10px\"  (click)=\"showWasser()\" (mouseenter)=\"mouseEnterWasser()\"  (mouseleave)=\"mouseLeaveWasser()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor5}\">Wasser</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showAlle\" style=\"padding: 10px\"  (click)=\"showAlle()\" (mouseenter)=\"mouseEnterAlle()\"  (mouseleave)=\"mouseLeaveAlle()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor6}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor6}\">Alle</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showNotizForm()\"  (mouseenter)=\"mouseEnterShowNotizForm()\"  (mouseleave)=\"mouseLeaveShowNotizForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNotizForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorNotizForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px; padding-left: 5px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showErdeBoolChange = new core_1.EventEmitter();
        this.showFeuerBoolChange = new core_1.EventEmitter();
        this.showLuftBoolChange = new core_1.EventEmitter();
        this.showMetallBoolChange = new core_1.EventEmitter();
        this.showWasserBoolChange = new core_1.EventEmitter();
        this.showAlleBoolChange = new core_1.EventEmitter();
        this.showNotizFormBoolChange = new core_1.EventEmitter();
        this.showInfoFormBoolChange = new core_1.EventEmitter();
        this.showTablePlanBoolChange = new core_1.EventEmitter();
        this.showAbteilungen = true;
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.buttonBgColorDropdownToggle = "0a7a74";
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.showErde = function () {
        //console.log("showErde!");
        this.showErdeBool = true;
        this.showFeuerBool = false;
        this.showMetallBool = false;
        this.showLuftBool = false;
        this.showWasserBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor1 === "154846") {
            this.buttonBgColor1 = "0d2f2e";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
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
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showFeuer = function () {
        //console.log("showFeuer!");
        this.showAbteilungen = false;
        this.showErdeBool = false;
        this.showFeuerBool = true;
        //console.log(this.showFeuerBool);
        this.showMetallBool = false;
        this.showLuftBool = false;
        this.showWasserBool = false;
        this.showAlleBool = false;
        if (this.buttonBgColor2 === "154846") {
            this.buttonBgColor2 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
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
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showMetall = function () {
        //console.log("showMetall!");
        this.showErdeBool = false;
        this.showFeuerBool = false;
        this.showMetallBool = true;
        this.showLuftBool = false;
        this.showWasserBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor3 === "154846") {
            this.buttonBgColor3 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
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
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showLuft = function () {
        //console.log("showLuft!");
        this.showErdeBool = false;
        this.showFeuerBool = false;
        this.showMetallBool = false;
        this.showLuftBool = true;
        this.showWasserBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor4 === "154846") {
            this.buttonBgColor4 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
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
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showWasser = function () {
        //console.log("showWasser!");
        this.showErdeBool = false;
        this.showFeuerBool = false;
        this.showMetallBool = false;
        this.showLuftBool = false;
        this.showWasserBool = true;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor5 === "154846") {
            this.buttonBgColor5 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
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
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showAlle = function () {
        //console.log("showAlle!");
        this.showErdeBool = false;
        this.showFeuerBool = false;
        this.showMetallBool = false;
        this.showLuftBool = false;
        this.showWasserBool = false;
        this.showAlleBool = true;
        this.showAbteilungen = false;
        if (this.buttonBgColor6 === "154846") {
            this.buttonBgColor6 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor6 = "0a7a74";
        }
        if (this.fontColor6 === "f3efe4") {
            this.fontColor6 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor6 = "f3efe4";
        }
        this.showErdeBoolChange.emit(this.showErdeBool);
        this.showFeuerBoolChange.emit(this.showFeuerBool);
        this.showLuftBoolChange.emit(this.showLuftBool);
        this.showMetallBoolChange.emit(this.showMetallBool);
        this.showWasserBoolChange.emit(this.showWasserBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showInfoForm = function () {
        //console.log("showTraceForm!");
        this.showNotizFormBool = false;
        this.showInfoFormBool = true;
        this.showTablePlanBool = false;
        if (this.buttonBgColorInfoForm === "154846") {
            this.buttonBgColorInfoForm = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorInfoForm = "0a7a74";
        }
        if (this.fontColorInfoForm === "f3efe4") {
            this.fontColorInfoForm = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorInfoForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showNotizForm = function () {
        //console.log("showNotizForm!");
        this.showNotizFormBool = true;
        this.showTablePlanBool = false;
        this.showInfoFormBool = false;
        if (this.buttonBgColorNotizForm === "154846") {
            this.buttonBgColorNotizForm = "0d2f2e";
            this.buttonBgColorInfoForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorNotizForm = "0a7a74";
        }
        if (this.fontColorNotizForm === "f3efe4") {
            this.fontColorNotizForm = "0a7a74";
            this.fontColorInfoForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorNotizForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showTablePlan = function () {
        //console.log("showTablePlan!");
        this.showNotizFormBool = false;
        this.showTablePlanBool = true;
        this.showInfoFormBool = false;
        if (this.buttonBgColorShowTablePlan = "154846") {
            this.buttonBgColorShowTablePlan = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorInfoForm = "0a7a74";
        }
        else {
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        if (this.fontColorShowTablePlan = "f3efe4") {
            this.fontColorShowTablePlan = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorInfoForm = "f3efe4";
        }
        else {
            this.fontColorShowTablePlan = "0a7a74";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.mouseEnterShowInfoForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorInfoForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowInfoForm = function () {
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorInfoForm = "154846";
        }
        else if (this.buttonBgColorInfoForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorInfoForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowNotizForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorNotizForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowNotizForm = function () {
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorNotizForm = "154846";
        }
        else if (this.buttonBgColorNotizForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorNotizForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowTablePlan = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowTablePlan = function () {
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
        else if (this.buttonBgColorShowTablePlan === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterDropdownToggle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveDropdownToggle = function () {
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
        else if (this.buttonBgColorDropdownToggle === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterErde = function () {
        //console.log("mouse enter mouseEnterErde: ");
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterErde:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveErde = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse leave1 mouseLeaveErde:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            //console.log('mouse leave2 mouseLeaveErde:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterFeuer = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveFeuer = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterMetall = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveMetall = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterLuft = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveLuft = function () {
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
        else if (this.buttonBgColor4 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterWasser = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveWasser = function () {
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
        else if (this.buttonBgColor5 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterAlle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveAlle = function () {
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
        else if (this.buttonBgColor6 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    return DepartmentmenuComponent;
}());
__decorate([
    core_1.Input('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    core_1.Input('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    core_1.Input('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    core_1.Input('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    core_1.Input('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    core_1.Input('buttonBgColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor6", void 0);
__decorate([
    core_1.Input('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    core_1.Input('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    core_1.Input('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    core_1.Input('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    core_1.Input('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    core_1.Input('fontColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor6", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showErdeBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showFeuerBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showLuftBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showMetallBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showWasserBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showAlleBoolChange", void 0);
__decorate([
    core_1.Input('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNotizForm", void 0);
__decorate([
    core_1.Input('buttonBgColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNotizForm", void 0);
__decorate([
    core_1.Input('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    core_1.Input('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    core_1.Input('showNotizFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showNotizFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-departmentmenu',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);
exports.DepartmentmenuComponent = DepartmentmenuComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAlleBool\">\n  <div *ngFor=\"let table of tables; let j = index;\">\n      <h4><b> Tisch:</b>{{table.number}} </h4><br>\n      <div class='cards-container' id='containerTables' [ngStyle]=\"{'background-color': + table.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + table.bgColor}\">\n          <div *ngIf=\"table.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(table)\">\n              <div *ngIf=\"table.name1Value\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Zimmernummer:</b> {{table.zimmernummerValue}}<br>\n                  <b> Anreise Datum:</b> {{table.anreiseValue}}<br>\n                  <b> Abreise Datum:</b> {{table.abreiseValue}}<br>\n                  <b> Personenanzahl:</b> {{table.personenAnzahlValue}}<br>\n                  <b> Name 1:</b> {{table.name1Value}}<br>\n                  <b> Info 1:</b> {{table.pinfo1Value}}<br>\n                  <b> Info 2:</b> {{table.pinfo2Value}}<br>\n                  <b> Info 3:</b> {{table.pinfo3Value}}<br>\n                  <b> Kategorie:</b> {{table.kategorieValue}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"table.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{table.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{table.newTraceText}} <br> <b> Tischnummer: </b>{{table.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{table.newTraceEmployee}} <br> <b> Name: </b>{{table.newTraceName}} <br> <b> Datum: </b>{{table.newTraceDate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"table.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"tables\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{table.number}} {{table.department}} {{j}}</p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../core/@angular/core.es5.js");
var AlleComponent = (function () {
    function AlleComponent() {
        this.occupied = new core_1.EventEmitter();
    }
    AlleComponent.prototype.ngOnInit = function () {
    };
    AlleComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AlleComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    AlleComponent.prototype.transform = function (tables, term) {
        //console.log("term");
        //console.log(term);
        if (Array.isArray(tables) && tables.length && term && term.length) {
            this.tables = tables.filter(function (item) {
                //console.log(item);
                var keys = Object.keys(item);
                //console.log(keys);
                if (Array.isArray(keys) && keys.length) {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return false;
                }
            });
        }
        else {
            return tables;
        }
    };
    return AlleComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], AlleComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('tablesTerrasseLuft'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTerrasseLuft", void 0);
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], AlleComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AlleComponent.prototype, "occupied", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], AlleComponent.prototype, "showAlleBool", void 0);
AlleComponent = __decorate([
    core_2.Pipe({
        name: 'filter',
    }),
    core_1.Component({
        selector: 'app-alle',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlleComponent);
exports.AlleComponent = AlleComponent;
var _a;
//# sourceMappingURL=alle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-erde [term]=\"term\" [tablesErde]=\"tablesErde\" [showErdeBool]=\"showErdeBool\" (occupied)=\"occupied($event)\"></app-erde>\n<app-feuer [term]=\"term\" [tablesFeuer]=\"tablesFeuer\" [showFeuerBool]=\"showFeuerBool\" (occupied)=\"occupied($event)\"></app-feuer>\n<app-luft [term]=\"term\" [tablesLuft]=\"tablesLuft\" [showLuftBool]=\"showLuftBool\" (occupied)=\"occupied($event)\"></app-luft>\n<app-metall  [term]=\"term\" [tablesMetall]=\"tablesMetall\" [showMetallBool]=\"showMetallBool\" (occupied)=\"occupied($event)\"></app-metall>\n<app-wasser [term]=\"term\" [tablesWasser]=\"tablesWasser\" [showWasserBool]=\"showWasserBool\" (occupied)=\"occupied($event)\"></app-wasser>\n<app-alle [showAlleBool]=\"showAlleBool\" [term]=\"term\" [tables]=\"tables\" [tablesErde]=\"tablesErde\" [tablesWasser]=\"tablesWasser\" [tablesMetall]=\"tablesMetall\" [tablesLuft]=\"tablesLuft\" [tablesFeuer]=\"tablesFeuer\" [tablesTerasse]=\"tablesTerasse\" [tablesTerrasseLuft]=\"tablesTerrasseLuft\" (occupied)=\"occupied($event)\"></app-alle>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var metall_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/metall/metall.component.ts");
var wasser_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/wasser/wasser.component.ts");
var luft_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/luft/luft.component.ts");
var erde_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/erde/erde.component.ts");
var feuer_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/feuer/feuer.component.ts");
var alle_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.dispensedErde = new core_1.EventEmitter();
        this.dispensedFeuer = new core_1.EventEmitter();
        this.dispensedLuft = new core_1.EventEmitter();
        this.dispensedMetall = new core_1.EventEmitter();
        this.dispensedWasser = new core_1.EventEmitter();
        this.updateAzList = new core_1.EventEmitter();
        this.updateImHausListeElement = new core_1.EventEmitter();
        this.parts = [];
        this.date = [];
        this.parsedDate = [];
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        //console.log("table.j");
        //console.log(table.j);
        //console.log("table.table");
        //console.log(table.table);
        this.occupy(table.table, table.t);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        console.log("occupy called");
        console.log(table);
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log(JSON.stringify(response));
            console.log(j);
            //console.log(j);
            //console.log("bgColor:" + JSON.stringify(response));
            //console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            //console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (typeof response == null || typeof response[j] == null) {
                return;
            }
            else {
                if (response[j].department === "feuer") {
                    _this.dispensedFeuer.emit(response[j].tables);
                }
                else if (response[j].department === "erde") {
                    _this.dispensedErde.emit(response[j].tables);
                }
                else if (response[j].department === "wasser") {
                    _this.dispensedWasser.emit(response[j].tables);
                }
                else if (response[j].department === "luft") {
                    _this.dispensedLuft.emit(response[j].tables);
                }
                else if (response[j].department === "metall") {
                    _this.dispensedMetall.emit(response[j].tables);
                }
            }
        }, function (error) { return console.log("Error: ", error); }, function () {
            console.log(table);
            _this.updateAzList.emit();
            if (table.length > 1) {
                for (var i = 0; i < table.length; i++) {
                    _this.updateImHausListeElement.emit(table[i].table);
                }
            }
            else {
                if (table.constructor === Array) {
                    console.log("isarray");
                    _this.updateImHausListeElement.emit(table[0].table);
                }
                else {
                    _this.updateImHausListeElement.emit(table);
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            //console.log("Add placeholder! table ... " + JSON.stringify(table));
            //console.log("placeholder:" + JSON.stringify(response));
            /*
            if (typeof response == null) {
              return;
            } else {
              if (response[j].department === "berglerStubeHubertusStube") {
                this.dispensedFeuer.emit(response[j].tables);
              }
              else if (response[j].department === "Erde") {
                this.dispensedErde.emit(response[j].tables);
              }
              else if (response[j].department === "waeldlerStubeKristallStube") {
                this.dispensedWasser.emit(response[j].tables);
              }
              else if (response[j].department === "edelweissKaminStube") {
                this.dispensedLuft.emit(response[j].tables);
              }
              else if (response[j].department === "teestubeTeelounge") {
                this.dispensedMetall.emit(response[j].tables);
              }
            }
            */
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("dataString");
        //console.log(dataString);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "feuer") {
                    _this.dispensedFeuer.emit(response[0].tables);
                }
                else if (response[0].department === "erde") {
                    _this.dispensedErde.emit(response[0].tables);
                }
                else if (response[0].department === "wasser") {
                    _this.dispensedWasser.emit(response[0].tables);
                }
                else if (response[0].department === "luft") {
                    _this.dispensedLuft.emit(response[0].tables);
                }
                else if (response[0].department === "metall") {
                    _this.dispensedMetall.emit(response[0].tables);
                    //this.tablesMetall[arrayIndex] = response.tables[0];
                }
            }
            // //console.log(this.tablesFeuer[arrayIndex]);
        });
        this.updateAzList.emit();
    };
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            //console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "feuer") {
                    _this.tablesFeuer[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "erde") {
                    _this.tablesErde[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "wasser") {
                    _this.tablesWasser[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "luft") {
                    _this.tablesLuft[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "metall") {
                    _this.tablesMetall[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesFeuer[arrayIndex]));
        });
        //console.log("placeholder:" + JSON.stringify(this.tablesFeuer[arrayIndex]));
    };
    DepartmentsComponent.prototype.changeBgColorIfAnreise = function () {
        var _this = this;
        setTimeout(function () {
            _this.tablesChangeBgColorIfAnreise = _this.tablesTempAbreise;
            //console.log('=================================================changeBgColorIfAnreise');
            //console.log(this.tablesChangeBgColorIfAnreise);
            _this.dateTodayGenerated = new Date();
            _this.parts = [];
            _this.parsedDate = [];
            _this.date = [];
            for (var a = 0; a < _this.tablesChangeBgColorIfAnreise.length; a++) {
                for (var b = 0; b < _this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
                    if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
                        for (var c = 0; c < _this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
                            if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c]) {
                                if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                                    //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                                    _this.parts[0] = _this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                                }
                                else {
                                    _this.parts[0] = "undefined";
                                }
                                if (_this.parts[0]) {
                                    _this.date[0] = new Date(2018, _this.parts[0][1] - 1, _this.parts[0][0]);
                                    _this.parsedDate[0] = String(_this.date[0]).substring(0, 15);
                                }
                                // note parts[1]-1
                                // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                                // Mon May 31 2010 00:00:00
                                // this.tablesRestaurant[j].anreiseValue
                                var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                                //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                                //console.log('this.dateGenerated --->: ' + dateToday);
                                if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                    if (_this.tablesChangeBgColorIfAnreise[a].department === "feuer") {
                                        if (_this.tablesFeuer[b]) {
                                            _this.tablesFeuer[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "erde") {
                                        if (_this.tablesErde[b]) {
                                            _this.tablesErde[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "wasser") {
                                        if (_this.tablesWasser[b]) {
                                            _this.tablesWasser[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "luft") {
                                        if (_this.tablesLuft[b]) {
                                            _this.tablesLuft[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "metall") {
                                        if (_this.tablesMetall[b]) {
                                            _this.tablesMetall[b].bgColor = "#0a7a74";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 1000);
    };
    DepartmentsComponent.prototype.transform = function (term) {
        if (this.showAlleBool) {
            this.alleComponent.transform(this.tables, term);
        }
        else if (this.showErdeBool) {
            this.erdeComponent.transform(this.tablesErde, term);
        }
        else if (this.showFeuerBool) {
            this.feuerComponent.transform(this.tablesFeuer, term);
        }
        else if (this.showLuftBool) {
            this.luftComponent.transform(this.tablesLuft, term);
        }
        else if (this.showMetallBool) {
            this.metallComponent.transform(this.tablesMetall, term);
        }
        else if (this.showWasserBool) {
            this.wasserComponent.transform(this.tablesWasser, term);
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Input('tablesTempAbreise'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DepartmentsComponent.prototype, "dispensedErde", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DepartmentsComponent.prototype, "dispensedFeuer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DepartmentsComponent.prototype, "dispensedLuft", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DepartmentsComponent.prototype, "dispensedMetall", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DepartmentsComponent.prototype, "dispensedWasser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentsComponent.prototype, "updateImHausListeElement", void 0);
__decorate([
    core_1.ViewChild(alle_component_1.AlleComponent),
    __metadata("design:type", typeof (_h = typeof alle_component_1.AlleComponent !== "undefined" && alle_component_1.AlleComponent) === "function" && _h || Object)
], DepartmentsComponent.prototype, "alleComponent", void 0);
__decorate([
    core_1.ViewChild(wasser_component_1.WasserComponent),
    __metadata("design:type", typeof (_j = typeof wasser_component_1.WasserComponent !== "undefined" && wasser_component_1.WasserComponent) === "function" && _j || Object)
], DepartmentsComponent.prototype, "wasserComponent", void 0);
__decorate([
    core_1.ViewChild(metall_component_1.MetallComponent),
    __metadata("design:type", typeof (_k = typeof metall_component_1.MetallComponent !== "undefined" && metall_component_1.MetallComponent) === "function" && _k || Object)
], DepartmentsComponent.prototype, "metallComponent", void 0);
__decorate([
    core_1.ViewChild(luft_component_1.LuftComponent),
    __metadata("design:type", typeof (_l = typeof luft_component_1.LuftComponent !== "undefined" && luft_component_1.LuftComponent) === "function" && _l || Object)
], DepartmentsComponent.prototype, "luftComponent", void 0);
__decorate([
    core_1.ViewChild(feuer_component_1.FeuerComponent),
    __metadata("design:type", typeof (_m = typeof feuer_component_1.FeuerComponent !== "undefined" && feuer_component_1.FeuerComponent) === "function" && _m || Object)
], DepartmentsComponent.prototype, "feuerComponent", void 0);
__decorate([
    core_1.ViewChild(erde_component_1.ErdeComponent),
    __metadata("design:type", typeof (_o = typeof erde_component_1.ErdeComponent !== "undefined" && erde_component_1.ErdeComponent) === "function" && _o || Object)
], DepartmentsComponent.prototype, "erdeComponent", void 0);
DepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-departments',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _p || Object])
], DepartmentsComponent);
exports.DepartmentsComponent = DepartmentsComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/erde/erde.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showErdeBool\">\n  <div *ngFor=\"let tableErde of tablesErde; let j = index;\">\n    <div *ngIf=\"tablesErde[j] !== tablesErde[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableErde, j)\">{{tableErde.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableErde.number}} </h4><br>\n      <div class='cards-container' id='containerErde' [ngStyle]=\"{'background-color': + tableErde.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableErde.bgColor}\">\n          <div *ngIf=\"tableErde.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableErde.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group)\">\n                <div *ngIf=\"group.name1Value\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Name 1:</b> {{group.name1Value}}<br>\n                    <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                    <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                    <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                    <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Info: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableErde.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"erde\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableErde.number}} {{tableErde.department}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/erde/erde.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ErdeComponent = (function () {
    function ErdeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 1;
    }
    ErdeComponent.prototype.ngOnInit = function () {
    };
    ErdeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    ErdeComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    ErdeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesErde = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesErde = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return ErdeComponent;
}());
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], ErdeComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], ErdeComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], ErdeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ErdeComponent.prototype, "occupied", void 0);
ErdeComponent = __decorate([
    core_1.Component({
        selector: 'app-erde',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/erde/erde.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErdeComponent);
exports.ErdeComponent = ErdeComponent;
var _a;
//# sourceMappingURL=erde.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/feuer/feuer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showFeuerBool\">\n  <div *ngFor=\"let tableFeuer of tablesFeuer; let j = index;\">\n    <div *ngIf=\"tablesFeuer[j] !== tablesFeuer[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableFeuer, j)\">{{tableFeuer.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableFeuer.number}} </h4><br>\n      <div class='cards-container' id='containerFeuer' [ngStyle]=\"{'background-color': + tableFeuer.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableFeuer.bgColor}\">\n          <div *ngIf=\"tableFeuer.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableFeuer.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group)\">\n                <div *ngIf=\"group.name1Value\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Name 1:</b> {{group.name1Value}}<br>\n                    <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                    <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                    <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                    <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Info: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableFeuer.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"feuer\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableFeuer.number}} {{tableFeuer.department}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/feuer/feuer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FeuerComponent = (function () {
    function FeuerComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 0;
    }
    FeuerComponent.prototype.ngOnInit = function () {
    };
    FeuerComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    FeuerComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    FeuerComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesFeuer = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesFeuer = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return FeuerComponent;
}());
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], FeuerComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], FeuerComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], FeuerComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], FeuerComponent.prototype, "occupied", void 0);
FeuerComponent = __decorate([
    core_1.Component({
        selector: 'app-feuer',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/feuer/feuer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeuerComponent);
exports.FeuerComponent = FeuerComponent;
var _a;
//# sourceMappingURL=feuer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/luft/luft.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLuftBool\">\n  <div *ngFor=\"let tableLuft of tablesLuft; let j = index;\">\n    <div *ngIf=\"tablesLuft[j] !== tablesLuft[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableLuft, j)\">{{tableLuft.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableLuft.number}} </h4><br>\n      <div class='cards-container' id='containerLuft' [ngStyle]=\"{'background-color': + tableLuft.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableLuft.bgColor}\">\n          <div *ngIf=\"tableLuft.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableLuft.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group)\">\n                <div *ngIf=\"group.name1Value\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Name 1:</b> {{group.name1Value}}<br>\n                    <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                    <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                    <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                    <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Info: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableLuft.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"luft\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableLuft.number}} {{tableLuft.department}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/luft/luft.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LuftComponent = (function () {
    function LuftComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 1;
    }
    LuftComponent.prototype.ngOnInit = function () {
    };
    LuftComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    LuftComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    LuftComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesLuft = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesLuft = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return LuftComponent;
}());
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], LuftComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], LuftComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], LuftComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], LuftComponent.prototype, "occupied", void 0);
LuftComponent = __decorate([
    core_1.Component({
        selector: 'app-luft',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/luft/luft.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LuftComponent);
exports.LuftComponent = LuftComponent;
var _a;
//# sourceMappingURL=luft.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/metall/metall.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showMetallBool\">\n  <div *ngFor=\"let tableMetall of tablesMetall; let j = index;\">\n    <div *ngIf=\"tablesMetall[j] !== tablesMetall[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableMetall, j)\">{{tableMetall.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableMetall.number}} </h4><br>\n      <div class='cards-container' id='containerMetall' [ngStyle]=\"{'background-color': + tableMetall.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableMetall.bgColor}\">\n          <div *ngIf=\"tableMetall.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableMetall.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group)\">\n                <div *ngIf=\"group.name1Value\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Name 1:</b> {{group.name1Value}}<br>\n                    <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                    <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                    <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                    <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Info: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableMetall.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"metall\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableMetall.number}} {{tableMetall.department}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/metall/metall.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MetallComponent = (function () {
    function MetallComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 0;
    }
    MetallComponent.prototype.ngOnInit = function () {
    };
    MetallComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    MetallComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    MetallComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesMetall = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesMetall = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return MetallComponent;
}());
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], MetallComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], MetallComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], MetallComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], MetallComponent.prototype, "occupied", void 0);
MetallComponent = __decorate([
    core_1.Component({
        selector: 'app-metall',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/metall/metall.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MetallComponent);
exports.MetallComponent = MetallComponent;
var _a;
//# sourceMappingURL=metall.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/wasser/wasser.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWasserBool\">\n  <div *ngFor=\"let tableWasser of tablesWasser; let j = index;\">\n    <div *ngIf=\"tablesWasser[j] !== tablesWasser[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWasser, j)\">{{tableWasser.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWasser.number}} </h4><br>\n      <div class='cards-container' id='containerWasser' [ngStyle]=\"{'background-color': + tableWasser.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWasser.bgColor}\">\n          <div *ngIf=\"tableWasser.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableWasser.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group)\">\n                <div *ngIf=\"group.name1Value\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Name 1:</b> {{group.name1Value}}<br>\n                    <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                    <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                    <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                    <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Info: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableWasser.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"wasser\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px;\">Listen-Element hier hin ziehen! {{tableWasser.number}} {{tableWasser.department}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/wasser/wasser.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var WasserComponent = (function () {
    function WasserComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 3;
    }
    WasserComponent.prototype.ngOnInit = function () {
    };
    WasserComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    WasserComponent.prototype.getStyle = function (j) {
        if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    WasserComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesWasser = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesWasser = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return WasserComponent;
}());
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], WasserComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], WasserComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], WasserComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], WasserComponent.prototype, "occupied", void 0);
WasserComponent = __decorate([
    core_1.Component({
        selector: 'app-wasser',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/wasser/wasser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WasserComponent);
exports.WasserComponent = WasserComponent;
var _a;
//# sourceMappingURL=wasser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotizFormBool\">\n  <div *ngIf=\"showAlleBool === false\">\n    <div class=\"notiz\">\n      <div *ngIf=\"showErdeBool\">\n        <div *ngFor=\"let notizElement of notizElements\" >\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Erde'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showFeuerBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Feuer'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showLuftBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Luft'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showMetallBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Metall'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWasserBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Wasser'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNotiz\"  #myForm=\"ngForm\" (submit)=\"sendNotiz($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px;\" required [(ngModel)]=\"departmentNotizInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNotizInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"notizText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"notizInput\" placeholder=\"Notiz hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var FormComponent = (function () {
    function FormComponent(tischplanService, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.notizResponse = new core_1.EventEmitter();
        this.changeColorIfAnreiseExport = new core_1.EventEmitter();
        this.departments = [];
        this.departments = ["Erde", "Luft", "Feuer", "Wasser", "Metall"];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendInformation = function (event) {
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
                        if (Information.tables[0].department === "erde") {
                            for (var i = 0; i < _this.tablesErde.length; i++) {
                                if (_this.tablesErde[i].number === Information.tables[0].number) {
                                    _this.tablesErde[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "wasser") {
                            for (var i = 0; i < _this.tablesWasser.length; i++) {
                                if (_this.tablesWasser[i].number === Information.tables[0].number) {
                                    _this.tablesWasser[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "luft") {
                            for (var i = 0; i < _this.tablesLuft.length; i++) {
                                if (_this.tablesLuft[i].number === Information.tables[0].number) {
                                    _this.tablesLuft[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "feuer") {
                            for (var i = 0; i < _this.tablesFeuer.length; i++) {
                                if (_this.tablesFeuer[i].number === Information.tables[0].number) {
                                    _this.tablesFeuer[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "metall") {
                            for (var i = 0; i < _this.tablesMetall.length; i++) {
                                if (_this.tablesMetall[i].number === Information.tables[0].number) {
                                    _this.tablesMetall[i] = Information.tables[0];
                                }
                            }
                        }
                    }
                });
                this.changeColorIfAnreiseExport.emit();
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
    FormComponent.prototype.sendNotiz = function (event) {
        var _this = this;
        event.preventDefault();
        this.notizDate = String(new Date()).substring(0, 15);
        var newNotiz = {
            notizInput: this.notizInput,
            departmentNotizInput: this.departmentNotizInput,
            date: this.notizDate
        };
        if (newNotiz.notizInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.tischplanService.sendInformationToNotizBlock(newNotiz)
            .subscribe(function (Notiz) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Notiz));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.notizResponse.emit(Notiz);
            _this.notizElements = Notiz;
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    return FormComponent;
}());
__decorate([
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    core_1.Input('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    core_1.Input('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    core_1.Input('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    core_1.Input('notizElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "notizElements", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], FormComponent.prototype, "notizResponse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], FormComponent.prototype, "changeColorIfAnreiseExport", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _c || Object, typeof (_d = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _d || Object])
], FormComponent);
exports.FormComponent = FormComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Im-Haus</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n      <div *ngIf=\"!imHausListeElement.isAnreise\">\n        <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n              <b>Name 1:</b> {{imHausListeElement.name1}}<br>\n              <b>Pinfo 1:</b> {{imHausListeElement.pinfo1}}<br>\n              <b>Pinfo 2:</b> {{imHausListeElement.pinfo2}}<br>\n              <b>Pinfo 3:</b> {{imHausListeElement.pinfo3}}<br>\n              <b>Kategorie:</b> {{imHausListeElement.kategorie}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"anreiseTextButton\" style=\"height: 45px\">\n  <h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74; max-width: 50%; float: left;\">Anreisen</h3><div class=\"btn-group\" style=\"float: right\" dropdown>\n  <button style=\"margin: 10px 0 0 0\" dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Heute/Morgen<span class=\"caret\"></span></button>\n  <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 0px; height: auto\" role=\"menu\">\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeToday\" (mouseenter)=\"mouseEnterChangeTodayButton()\"  (mouseleave)=\"mouseLeaveChangeTodayButton()\" (click)=\"changeDayToToday($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorToday}\"><p >Heute</p></div>\n    <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeTomorrow\" (mouseenter)=\"mouseEnterChangeTomorrowButton()\"  (mouseleave)=\"mouseLeaveChangeTomorrowButton()\" (click)=\"changeDayToTomorrow($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorTomorrow}\"><p >Morgen</p></div>\n  </ul>\n</div>\n</div>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n      <div *ngIf=\"imHausListeElement.isAnreise\">\n        <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n              <b>Name 1:</b> {{imHausListeElement.name1}}<br>\n              <b>Pinfo 1:</b> {{imHausListeElement.pinfo1}}<br>\n              <b>Pinfo 2:</b> {{imHausListeElement.pinfo2}}<br>\n              <b>Pinfo 3:</b> {{imHausListeElement.pinfo3}}<br>\n              <b>Kategorie:</b> {{imHausListeElement.kategorie}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var ImHausListeComponent = (function () {
    function ImHausListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.parts = [];
        this.tomorrow = false;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "ffffff";
    }
    ImHausListeComponent.prototype.ngOnInit = function () {
    };
    ImHausListeComponent.prototype.updateImHausListeElement = function (informationElements2) {
        var _this = this;
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            response.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = response;
            //console.log('updateImHausListeElement response: ');
            //console.log(response);
            _this.sortList();
        });
    };
    ImHausListeComponent.prototype.changeDayToToday = function () {
        this.tomorrow = null;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "0a7a74";
    };
    ImHausListeComponent.prototype.changeDayToTomorrow = function () {
        this.tomorrow = true;
        this.bgColorTomorrow = "0a7a74";
        this.bgColorToday = "ffffff";
    };
    ImHausListeComponent.prototype.mouseEnterChangeTodayButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorToday === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "bdbdbd";
        }
        if (this.bgColorToday === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTodayButton = function () {
        if (this.bgColorToday === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorToday = "ffffff";
        }
        if (this.bgColorToday === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.mouseEnterChangeTomorrowButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorTomorrow === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "bdbdbd";
        }
        if (this.bgColorTomorrow === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTomorrowButton = function () {
        if (this.bgColorTomorrow === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorTomorrow = "ffffff";
        }
        if (this.bgColorTomorrow === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.sortList = function () {
        if (this.tomorrow) {
            this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        }
        else {
            this.dateTodayGenerated = new Date();
        }
        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
        //console.log("===========================ANREISEN===============================");
        //console.log(dateToday);
        for (var i = 0; i < this.imHausListeElemente.length; i++) {
            this.imHausListeElemente[i].isAnreise = false;
            if (this.imHausListeElemente[i].anreise) {
                this.parts = this.imHausListeElemente[i].anreise.match(/(\d+)/g);
                //console.log(this.parts);
            }
            if (this.parts) {
                this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
                //console.log(this.date);
                this.parsedDate = String(this.date).substring(0, 15);
                //console.log(this.parsedDate);
            }
            if (dateToday.indexOf(this.parsedDate) !== -1) {
                this.imHausListeElemente[i].isAnreise = true;
            }
        }
    };
    return ImHausListeComponent;
}());
__decorate([
    core_1.Input('imHausListeElemente'),
    __metadata("design:type", Array)
], ImHausListeComponent.prototype, "imHausListeElemente", void 0);
ImHausListeComponent = __decorate([
    core_1.Component({
        selector: 'app-im-haus-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _a || Object])
], ImHausListeComponent);
exports.ImHausListeComponent = ImHausListeComponent;
var _a;
//# sourceMappingURL=im-haus-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n    background-color: #0a7a74;\n  margin: 0;\n\n}\n\n.row .container-fluid {\n    background-color: #0a7a74;\n    height: 100vh;\n\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #0a7a74;\n    height: 100%;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n<div class=\"row\">\n<div class=\"container-fluid\">\n    <div class=\"col-md-4  hidden-xs hidden-sm\">\n    </div>\n    <div class=\"col-md-4\" style=\"padding-top: 20px\">\n      <div class=\"brand\" style=\"text-align: center\"><img alt=\"Brand\" href=\"http://www.kommis.net\" src=\"https://kommis.net/wp-content/uploads/2018/09/servicio-logo-weiss.png\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: center; display:inline-block; vertical-align:middle;\"></div>\n      <h2 style=\"color: #FFFFFF\">Login</h2>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Benutzername</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Passwort</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #ffffff; color: #0a7a74\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4  hidden-xs  hidden-sm\">\n    </div>\n</div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//import {FlashMessagesService} from 'angular2-flash-messages';
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log("Login submit");
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now logged in', {
                //   cssClass: 'alert-success',
                //   timeout: 5000});
                _this.router.navigate(['dashboard']);
            }
            else {
                //  this.flashMessage.show(data.msg, {
                //    cssClass: 'alert-danger',
                //    timeout: 5000});
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-top {\n  max-width: 100%;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 120px;\n  display: block;\n}\n\n.container {\n  max-height: 120px;\n  display: block;\n  padding: 0;\n  margin: 0\n}\n\nul.navbar-nav {\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  max-height:  40px;\n}\n\n.navbar-logout {\n  float: right;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Tisch {\n  color: #0a7a74;\n  float: right;\n  margin-right: 10px;\n}\n\n.TischDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 48px;\n  max-width: 50px;\n}\n\n.TischH3 {\n  color: #eaf3f3;\n  margin: 0;\n  line-height: 29px;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.xls {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border: none;\n}\n\n.navbar-form {\n  margin: 11px 0 0 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  max-width: 100%;\n  display: -webkit-inline-box;\n  border: none;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0 5px 0 0;\n}\n\n.form-group-search {\n  float: left;\n  width: calc(100% - 52px);\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  height: 32px;\n  opacity: 80;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  float: right;\n  margin-right: 10px;\n  min-width: 30px;\n  height: 32px;\n}\n\n.Partner {\n  height: 45px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 500px) {\n\n  .navbar-left {\n    display: block;\n  }\n}\n\n@media (min-width: 766px ) and  (max-width: 774px) {\n  .navbar-right {\n    margin-top: -23px;\n  }\n\n  .search-btn-default {\n    margin-top: 0px;\n    margin-left: 40px;\n    min-width: 30px;\n    min-height: 30px;\n  }\n}\n\n@media (min-width: 500px ) and  (max-width: 774px) {\n  .navbar-fixed-top {\n    display: block;\n    max-height: 56px;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    max-height: 55px;\n  }\n  .navbar-nav {\n    margin-top: 0;\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    max-height: 50px;\n  }\n  .navbar-right{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 79%;\n    margin-right: 10px;\n\n  }\n  .navbar-left{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-control{\n\n  }\n  .search-btn-default {\n    margin-top: 0px;\n  }\n}\n\n@media (min-width: 775px) {\n  .Partner {\n    display: none;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n  }\n\n  .form-group-search {\n    float: none;\n    width: auto;\n  }\n\n  .navbar-left {\n    float: right;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    margin-right: 10px;\n  }\n\n  .container {\n    display: block;\n    width: auto;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 11px;\n  }\n\n  .search-btn-default {\n    float: right;\n    margin-right: 20px;\n    margin-top: 0px;\n  }\n\n  .Tisch {\n    margin-right: 0px;\n  }\n\n  .TischDiv{\n    margin-left: 35px;\n  }\n  .navbar-nav {\n\n  }\n\n}\n\n@media (min-width: 1250px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .row4 {\n    margin-top: 60px;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 65%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 135px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .TischDiv{\n    margin-left: 0px;\n  }\n}\n\n@media (min-width: 1650px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"https://kommis.net/wp-content/uploads/2018/09/servicio-logo-neu-laden.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n      <li class=\"Belegte Tisch\" ><div class=\"TischDiv\"><h3 class=\"TischH3\">{{tablesOccupied}}</h3></div></li>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"height: auto; padding: 0\" role=\"menu\">\n          <li class=\"printToCart1\" (click)=\"printToCart1('printSectionId1')\" (mouseenter)=\"mouseEnterprintToCart1Button()\"  (mouseleave)=\"mouseLeaveprintToCart1Button()\" [ngStyle]=\"{'background-color': '#' + printToCart1Button}\"  style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" >Tisch Übersicht Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart2\" (click)=\"printToCart2('printSectionId2')\" (mouseenter)=\"mouseEnterprintToCart2Button()\"  (mouseleave)=\"mouseLeaveprintToCart2Button()\" [ngStyle]=\"{'background-color': '#' + printToCart2Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart2\">Tisch Plan Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart3\" (click)=\"printToCart3('printSectionId3')\" (mouseenter)=\"mouseEnterprintToCart3Button()\"  (mouseleave)=\"mouseLeaveprintToCart3Button()\" [ngStyle]=\"{'background-color': '#' + printToCart3Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart3\">A-Z Liste Drucken</li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">CSV<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 10px; height: auto\" role=\"menu\">\n          <div class=\"csv\" (click)=\"none($event)\" ><h6 >CSV-Datei hochladen</h6>\n            <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n              <input type=\"file\" style=\"max-width: 160px; min-height: 50px\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n              <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV hochladen</button>\n            </form>\n          </div>\n        </ul>\n      </div>\n      <li class=\"navbar-logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"/\">LOGOUT</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Abreisen entfernen <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"max-height: 130px; padding: 0\">\n          <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterAbreiseAbbrechenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAbbrechenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAbbrechenButton}\" style=\"color: black;\">Abbrechen</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseHeute()\"><b> Abreisen für Heute entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseMorgenAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseMorgenAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenMorgenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseMorgen()\"><b> Abreisen für Morgen entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"height: auto\">\n          <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"umsetzen($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"quellTisch\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"quellTisch\" [(ngModel)]=\"quellTisch\" name=\"quellTisch\" placeholder=\"Von Tischnummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"zielTisch\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"zielTisch\" [(ngModel)]=\"zielTisch\" name=\"zielTisch\" placeholder=\"Zu Tischnummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen</button>\n          </form>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n          <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n            <button type=\"submit\" style=\"margin: 10px\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n            <li role=\"menuitem\" style=\"padding: 10px;\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n            <li class=\"divider dropdown-divider\"></li>\n          </div>\n        </ul>\n      </div>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group form-group-search\">\n          <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n        </div>\n        <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </form>\n      <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" href=\"www.kommis.net\" src=\"https://kommis.net/wp-content/uploads/2018/09/thumb_589acfbcbd346.png\" ></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var NavigationComponent = (function () {
    function NavigationComponent(tischplanService, http, _flashMessagesService, authService, router) {
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.filesToUpload = [];
        this.tablesTempAbreise = [];
        this.newInformationElements = [];
        this.umsetzenExport = new core_1.EventEmitter();
        this.abreisenExportExport = new core_1.EventEmitter();
        this.termExport = new core_1.EventEmitter();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.reloadLists = new core_1.EventEmitter();
        this.transformExport = new core_1.EventEmitter();
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.abreiseAbbrechenButton = "ffffff";
        this.abreiseAusfuehrenButton = "ff0000";
        this.abreiseAusfuehrenMorgenButton = "ff0000";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    NavigationComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    NavigationComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .tW001 { position: absolute; } .row .tW002 { position: absolute; } .row .tW003 { position: absolute; } .row .tW004 { position: absolute; } .row .tW005 { position: absolute; } .row .tW006 { position: absolute; } .row .tW007 { position: absolute; } .row .tW008 { position: absolute; } .row .tW009 { position: absolute; } .row .tW010 { position: absolute; } .row .tW011 { position: absolute; } .row .tW012 { position: absolute; } .row .tW013 { position: absolute; } .row .tW014 { position: absolute; } .row .tW015 { position: absolute; } .row .tW016 { position: absolute; } .row .tW017 { position: absolute; } .row .tW018 { position: absolute; } .row .tW019 { position: absolute; } .row .tW020 { position: absolute; } .row .tW021 { position: absolute; } .row .tW022 { position: absolute; } .row .tW023 { position: absolute; } .row .tW024 { position: absolute; } .row .tW025 { position: absolute; } .row .tW026 { position: absolute; } .row .tL001 { position: absolute; } .row .tL002 { position: absolute; } .row .tL003 { position: absolute; } .row .tL004 { position: absolute; } .row .tL005 { position: absolute; } .row .tL006 { position: absolute; } .row .tL007 { position: absolute; } .row .tL008 { position: absolute; } .row .tL009 { position: absolute; } .row .tL010 { position: absolute; } .row .tL011 { position: absolute; } .row .tL012 { position: absolute; } .row .tL013 { position: absolute; } .row .tL014 { position: absolute; } .row .tL015 { position: absolute; } .row .tL016 { position: absolute; } .row .tL017 { position: absolute; } .row .tL018 { position: absolute; } .row .tL019 { position: absolute; } .row .tL020 { position: absolute; } .row .tL021 { position: absolute; } .row .tL022 { position: absolute; } .row .tL023 { position: absolute; } .row .tL024 { position: absolute; } .row .tL025 { position: absolute; } .row .tL026 { position: absolute; } .row .tF001 { position: absolute; } .row .tF002 { position: absolute; } .row .tF003 { position: absolute; } .row .tF004 { position: absolute; } .row .tF005 { position: absolute; } .row .tF006 { position: absolute; } .row .tF007 { position: absolute; } .row .tF008 { position: absolute; } .row .tF009 { position: absolute; } .row .tF010 { position: absolute; } .row .tF011 { position: absolute; } .row .tF012 { position: absolute; } .row .tF013 { position: absolute; } .row .tF014 { position: absolute; } .row .tF015 { position: absolute; } .row .tF016 { position: absolute; } .row .tF017 { position: absolute; } .row .tF018 { position: absolute; } .row .tF019 { position: absolute; } .row .tF020 { position: absolute; } .row .tF021 { position: absolute; } .row .tF022 { position: absolute; } .row .tF023 { position: absolute; } .row .tF024 { position: absolute; } .row .tF025 { position: absolute; } .row .tF026 { position: absolute; } .row .tE001 { position: absolute; } .row .tE002 { position: absolute; } .row .tE003 { position: absolute; } .row .tE004 { position: absolute; } .row .tE005 { position: absolute; } .row .tE006 { position: absolute; } .row .tE007 { position: absolute; } .row .tE008 { position: absolute; } .row .tE009 { position: absolute; } .row .tE010 { position: absolute; } .row .tE011 { position: absolute; } .row .tE012 { position: absolute; } .row .tE013 { position: absolute; } .row .tE014 { position: absolute; } .row .tE015 { position: absolute; } .row .tE016 { position: absolute; } .row .tE017 { position: absolute; } .row .tE018 { position: absolute; } .row .tE019 { position: absolute; } .row .tE020 { position: absolute; } .row .tE021 { position: absolute; } .row .tE022 { position: absolute; } .row .tE023 { position: absolute; } .row .tE024 { position: absolute; } .row .tE025 { position: absolute; } .row .tE026 { position: absolute; } .row .tM001 { position: absolute; } .row .tM002 { position: absolute; } .row .tM003 { position: absolute; } .row .tM004 { position: absolute; } .row .tM005 { position: absolute; } .row .tM006 { position: absolute; } .row .tM007 { position: absolute; } .row .tM008 { position: absolute; } .row .tM009 { position: absolute; } .row .tM010 { position: absolute; } .row .tM011 { position: absolute; } .row .tM012 { position: absolute; } .row .tM013 { position: absolute; } .row .tM014 { position: absolute; } .row .tM015 { position: absolute; } .row .tM016 { position: absolute; } .row .tM017 { position: absolute; } .row .tM018 { position: absolute; } .row .tM019 { position: absolute; } .row .tM020 { position: absolute; } .row .tM021 { position: absolute; } .row .tM022 { position: absolute; } .row .tM023 { position: absolute; } .row .tM024 { position: absolute; } .row .tM025 { position: absolute; } .row .tM026 { position: absolute; } .row .tM001 { position: absolute; } .row .tM002 { position: absolute; } .row .tM003 { position: absolute; } .row .tM004 { position: absolute; } .row .tM005 { position: absolute; } .row .tM006 { position: absolute; } .row .tM007 { position: absolute; } .row .tM008 { position: absolute; } .row .tM009 { position: absolute; } .row .tM010 { position: absolute; } .row .tM011 { position: absolute; } .row .tM012 { position: absolute; } .row .tM013 { position: absolute; } .row .tM014 { position: absolute; } .row .tM015 { position: absolute; } .row .tM016 { position: absolute; } .row .tM017 { position: absolute; } .row .tM018 { position: absolute; } .row .tM019 { position: absolute; } .row .tM020 { position: absolute; } .row .tM021 { position: absolute; } .row .tM022 { position: absolute; } .row .tM023 { position: absolute; } .row .tM024 { position: absolute; } .row .tM025 { position: absolute; } .row .tM026 { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart3 = function (printSectionId3) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId3).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.neuLaden = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.umsetzen = function () {
        var _this = this;
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var quellTisch = this.quellTisch.charAt(0).toUpperCase() + this.quellTisch.slice(1);
        var zielTisch = this.zielTisch.charAt(0).toUpperCase() + this.zielTisch.slice(1);
        this.tableInformation = [];
        //this.umsetzenExport.emit({quellTisch, zielTisch});
        // let targetTable = this.quellTisch.zielTisch;
        // let quellTischNumber = this.quellTisch.quellTisch;
        // let targetTableNumber = Number(this.quellTisch.zielTisch);
        // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
        console.log('targetTable' + zielTisch);
        console.log('quellTischNumber' + quellTisch);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var indexZiel = 0;
        var indexQuell = 0;
        if (quellTisch.indexOf('W') !== -1) {
            tableToMove.department = "wasser";
            indexQuell = 3;
        }
        else if (quellTisch.indexOf('E') !== -1) {
            tableToMove.department = "erde";
            indexQuell = 2;
        }
        else if (quellTisch.indexOf('L') !== -1) {
            tableToMove.department = "luft";
            indexQuell = 1;
        }
        else if (quellTisch.indexOf('F') !== -1) {
            tableToMove.department = "feuer";
            indexQuell = 4;
        }
        else if (quellTisch.indexOf('M') !== -1) {
            tableToMove.department = "metall";
            indexQuell = 0;
        }
        if (zielTisch.indexOf('W') !== -1) {
            tableToMove.targetDepartment = "wasser";
            indexZiel = 3;
        }
        else if (zielTisch.indexOf('E') !== -1) {
            tableToMove.targetDepartment = "erde";
            indexZiel = 2;
        }
        else if (zielTisch.indexOf('L') !== -1) {
            tableToMove.targetDepartment = "luft";
            indexZiel = 1;
        }
        else if (zielTisch.indexOf('F') !== -1) {
            tableToMove.targetDepartment = "feuer";
            indexZiel = 4;
        }
        else if (zielTisch.indexOf('M') !== -1) {
            tableToMove.targetDepartment = "metall";
            indexZiel = 0;
        }
        tableToMove.number = quellTisch;
        tableToMove.targetTable = zielTisch;
        console.log(tableToMove);
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        console.log("YEEEES BEFORE");
                        if (tables[a].tables[b].number === tableToMove.number) {
                            console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                            console.log(tables[a].tables[b]);
                            _this.tableInformation.push(tables[a].tables[b]);
                            console.log(_this.tableInformation);
                            _this.tableInformation.push(tableToMove);
                            console.log(_this.tableInformation);
                        }
                    }
                }
            }
            console.log("this.tableInformation IIIIIIIII");
            var tableInformationExport = _this.tableInformation;
            _this.umsetzenExport.emit({ tableToMove: tableToMove, indexZiel: indexZiel, indexQuell: indexQuell, tableInformationExport: tableInformationExport });
        });
    };
    ;
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.brandClick = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
        this.transformExport.emit(this.term);
    };
    NavigationComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    NavigationComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            if (res[0].originalname) {
                _this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
                    cssClass: 'alert-success',
                    timeout: 10000
                });
            }
            else {
                _this._flashMessagesService.show(JSON.stringify(res), {
                    cssClass: 'alert-danger',
                    timeout: 10000
                });
            }
        })
            .subscribe(function (files) { return console.log("files", files); });
        setTimeout(function () {
            _this.reloadLists.emit();
        }, 3000);
    };
    NavigationComponent.prototype.dispenseIfAbreiseHeute = function () {
        this.dateTodayGenerated = new Date(); //Today
        this.dispenseIfAbreise();
    };
    NavigationComponent.prototype.dispenseIfAbreiseMorgen = function () {
        console.log("dispenseIfAbreiseMorgen");
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
        this.dispenseIfAbreise();
        console.log(this.dateTodayGenerated);
    };
    NavigationComponent.prototype.dispenseIfAbreise = function () {
        var _this = this;
        var tables = this.tablesTempAbreise;
        var abreisenExport = [];
        var a = 0;
        console.log('=================================================dispenseIfAbreise');
        for (var a_1 = 0; a_1 < tables.length; a_1++) {
            for (var b = 0; b < tables[a_1].tables.length; b++) {
                if (tables[a_1].tables[b].groups) {
                    var abreisenExportObject = {
                        table: tables[a_1].tables[b],
                        group: [],
                        date: String(this.dateTodayGenerated).substring(0, 15)
                    };
                    for (var c = 0; c < tables[a_1].tables[b].groups.length; c++) {
                        if (tables[a_1].tables[b].groups[c].abreiseValue) {
                            this.parts[0] = tables[a_1].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
                        }
                        else {
                            this.parts[0] = "undefined";
                        }
                        if (this.parts[0]) {
                            this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                            this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                        }
                        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                        if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a_1].tables[b].groups[c].newTraceText) {
                            abreisenExportObject.group.push(c);
                        }
                        if (c === (tables[a_1].tables[b].groups.length - 1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
                            console.log("abreisenExport.push(abreisenExportObject)");
                            abreisenExport.push(abreisenExportObject);
                        }
                    }
                }
            }
        }
        console.log(abreisenExport);
        setTimeout(function () {
            _this.abreisenExportExport.emit({ abreisenExport: abreisenExport, a: a });
        }, 100);
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this._flashMessagesService.show('You are logged out', {
        //  cssClass: 'alert-success',
        //  timeout: 3000
        //});
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.mouseEnterprintToCart1Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart1Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart1Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart1Button = function () {
        if (this.printToCart1Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart1Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart2Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart2Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart2Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart2Button = function () {
        if (this.printToCart2Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart2Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart3Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart3Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart3Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart3Button = function () {
        if (this.printToCart3Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart3Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseMorgenAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenMorgenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseMorgenAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenMorgenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenMorgenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAbbrechenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAbbrechenButton === "ffffff") {
            //console.log('mouse enter1 :');
            this.abreiseAbbrechenButton = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAbbrechenButton = function () {
        if (this.abreiseAbbrechenButton === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.abreiseAbbrechenButton = "ffffff";
        }
    };
    return NavigationComponent;
}());
__decorate([
    core_1.Input('tablesTempAbreise'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], NavigationComponent.prototype, "umsetzenExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], NavigationComponent.prototype, "abreisenExportExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _f || Object, typeof (_g = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _g || Object, typeof (_h = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _h || Object, typeof (_j = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _j || Object, typeof (_k = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _k || Object])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">TN</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">ZN</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anr</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abr</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Pers</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name 1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Info 1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Info 2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Info 3</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Kategorie</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.name1Value\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.anreiseValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.name1Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.pinfo1Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.pinfo2Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.pinfo3Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.kategorieValue}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showErdeBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Erde\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesErde\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showFeuerBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Feuer\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesFeuer\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWasserBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Wasser\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesWasser\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showMetallBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Metall\n      </tr>\n          <tr style=\"border: solid 1px black;\">\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          </tr>\n          <div *ngFor=\"let table of tablesMetall\">\n            <div *ngIf=\"!table.groups || table.groups.length < 1\">\n              <tr style=\"border: solid 1px black;\">\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            </div>\n            <div *ngFor=\"let group of table.groups\">\n              <tr style=\"border: solid 1px black;\">\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n                <div *ngIf=\"group.newTraceText\">\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                </div>\n              </tr>\n            </div>\n          </div>\n        </table>\n      </div>\n  <div *ngIf=\"showLuftBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Luft\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesLuft\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n</div>\n<div id=\"printSectionId2\" class=\"section2\">\n  <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <div *ngIf=\"showWasserBool\">\n      <div *ngFor=\"let tableWasser of tablesWasser; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableWasser.number}} table-item\"\n             [ngStyle]=\"{'top': tableWasser.topValue + 'px', 'left': tableWasser.leftValue + 'px', 'background-color': + tableWasser.bgColor, 'height': + tableWasser.height + 'px', 'width': + tableWasser.width + 'px', 'border': + tableWasser.border}\"\n             [style.border]=\"getStyle(tablesWasser[j].groups)\" dropdown>\n          <div *ngIf=\"tablesWasser[j] !== tablesWasser[j+1]\">\n            <p><b>{{tableWasser.number}} <br>{{erwWasser[j]}}/{{kiWasser[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showErdeBool\">\n      <div *ngFor=\"let tableErde of tablesErde; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableErde.number}} table-item\" [ngStyle]=\"{'top': tableErde.topValue + 'px', 'left': tableErde.leftValue + 'px', 'background-color': + tableErde.bgColor, 'height': + tableErde.height + 'px', 'width': + tableErde.width + 'px', 'border': + tableErde.border}\" [style.border]=\"getStyle(tablesErde[j].groups)\" dropdown>\n          <div *ngIf=\"tablesErde[j] !== tablesErde[j+1]\">\n            <p><b>{{tableErde.number}} <br>{{erwErde[j]}}/{{kiErde[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showFeuerBool\">\n      <div *ngFor=\"let tableFeuer of tablesFeuer; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableFeuer.number}} table-item\" [ngStyle]=\"{'top': tableFeuer.topValue + 'px', 'left': tableFeuer.leftValue + 'px', 'background-color': + tableFeuer.bgColor, 'height': + tableFeuer.height + 'px', 'width': + tableFeuer.width + 'px', 'border': + tableFeuer.border}\" [style.border]=\"getStyle(tablesFeuer[j].groups)\" dropdown>\n          <div *ngIf=\"tablesFeuer[j] !== tablesFeuer[j+1]\">\n            <p><b>{{tableFeuer.number}} <br>{{erwFeuer[j]}}/{{kiFeuer[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showMetallBool\">\n      <div *ngFor=\"let tableMetall of tablesMetall; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableMetall.number}} table-item\" [ngStyle]=\"{'top': tableMetall.topValue + 'px', 'left': tableMetall.leftValue + 'px', 'background-color': + tableMetall.bgColor, 'height': + tableMetall.height + 'px', 'width': + tableMetall.width + 'px', 'border': + tableMetall.border}\" [style.border]=\"getStyle(tablesMetall[j].groups)\" dropdown>\n          <div *ngIf=\"tablesMetall[j] !== tablesMetall[j+1]\">\n            <p><b>{{tableMetall.number}} <br>{{erwMetall[j]}}/{{kiMetall[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showLuftBool\">\n      <div *ngFor=\"let tableLuft of tablesLuft; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableLuft.number}} table-item\" [ngStyle]=\"{'top': tableLuft.topValue + 'px', 'left': tableLuft.leftValue + 'px', 'background-color': + tableLuft.bgColor, 'height': + tableLuft.height + 'px', 'width': + tableLuft.width + 'px', 'border': + tableLuft.border}\" [style.border]=\"getStyle(tablesLuft[j].groups)\" dropdown>\n          <div *ngIf=\"tablesLuft[j] !== tablesLuft[j+1]\">\n            <p><b>{{tableLuft.number}} <br>{{erwLuft[j]}}/{{kiLuft[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new core_1.EventEmitter();
        this.getTablesforAzListe = new core_1.EventEmitter();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tableTemp = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        //(<any>Object).assign( this.photos, photos )
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].groups) {
                for (var j = 0; j < this.tables[i].groups.length; j++) {
                    var tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isBesetzt: this.tables[i].isBesetzt,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
                    };
                    //console.log(this.tables[i].number);
                    if (this.tables[i].groups[j]) {
                        //console.log(this.tables[i].groups[j]);
                        this.object = Object.assign(this.tables[i].groups[j], tempObject);
                        //console.log("this.object");
                        //console.log(this.object);
                        this.tableTemp.push(this.object);
                    }
                }
            }
        }
        //console.log("this.tableTemp");
        //console.log(this.tableTemp);
        this.tables = this.tableTemp.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.name1Value !== "undefined" && a.name1Value !== null) {
                nameA = a.name1Value.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.name1Value !== "undefined" && b.name1Value !== null) {
                nameB = b.name1Value.toUpperCase(); // ignore upper and lowercase
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
        for (var i = 0; i < this.tables.length; i++) {
            //console.log(i);
            if ("name1Value" in this.tables[i]) {
                //console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
        //console.log(this.tableTemp);
        //console.log(this.tables);
        //console.log("this.tablesOccupied" + this.tablesOccupied);
        //console.log(tables);
        /*
        function filterByID(obj) {
          if (obj.groups) {
            if (obj.groups in obj || obj.groups in obj) {
              return true;
            } else {
              return false;
            }
          }
        }
    
        this.tempTablesArray = this.tables.filter(filterByID);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (typeof this.tables[i].groups !== "undefined") {
            if (this.tables[i].groups[1]) {
              if (this.tables[i].groups[1].nameValue) {
                this.tables.splice(i, 1);
              }
            }
            else if (this.tables[i].groups) {
              if (this.tables[i].groups[2].nameValue) {
                this.tables.splice(i, 1);
              }
            }
          }
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray2[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray3[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray1[i] = new Table();
        }
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (!("nameValue" in this.tables[i])) {
            this.tables.splice(i,1);
          }
        }
    
        this.tables = this.tables.sort(function(a, b) {
          let nameA = "";
          let nameB = "";
          if (a.groups) {
            if (typeof a.groups.nameValue !== "undefined" && a.groups.nameValue !== null) {
              nameA = a.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
          }
          if (b.groups) {
            if (typeof b.groups.nameValue !== "undefined" && b.groups.nameValue !== null) {
              nameB = b.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
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
    
        console.log('this.tables after sort: ');
    
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          console.log(i);
          if ("nameValue" in this.tables[i]) {
            console.log("--->" + i);
            this.tableNumbers.push(this.tables[i].number);
          }
        }
    
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
    
        this.uniqueTables = this.tableNumbers.filter( onlyUnique );
        this.tablesOccupied = this.uniqueTables.length;
    
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
    
        console.log(this.tables);
        console.log("this.tablesOccupied" + this.tablesOccupied);
    
        console.log(tables);
        */
    };
    PrintComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (a[b].traceValue != "-" || a[b].newTraceText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    return PrintComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('erwWasser'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwWasser", void 0);
__decorate([
    core_1.Input('kiWasser'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiWasser", void 0);
__decorate([
    core_1.Input('erwErde'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwErde", void 0);
__decorate([
    core_1.Input('kiErde'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiErde", void 0);
__decorate([
    core_1.Input('kiFeuer'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiFeuer", void 0);
__decorate([
    core_1.Input('erwLuft'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwLuft", void 0);
__decorate([
    core_1.Input('kiLuft'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiLuft", void 0);
__decorate([
    core_1.Input('erwFeuer'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwFeuer", void 0);
__decorate([
    core_1.Input('kiMetall'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiMetall", void 0);
__decorate([
    core_1.Input('erwMetall'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwMetall", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    core_1.Component({
        selector: 'app-print',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);
exports.PrintComponent = PrintComponent;
var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _a || Object, typeof (_b = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n      <div *ngIf=\"showMetallBool\">\n        <div *ngFor=\"let tableMetall of tablesMetall; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableMetall.number}} table-item\" [ngStyle]=\"{'top': tableMetall.topValue + 'px', 'left': tableMetall.leftValue + 'px', 'background-color': + tableMetall.bgColor, 'height': + tableMetall.height + 'px', 'width': + tableMetall.width + 'px', 'border': + tableMetall.border,  'border-radius': + tableMetall.borderRadius  + '%'}\" [style.border]=\"getStyle(tablesMetall[j].groups)\" dropdown>\n            <div *ngIf=\"tablesMetall[j] !== tablesMetall[j+1]\">\n              <p><b>{{tableMetall.number}} <br>{{erwMetall[j]}}/{{kiMetall[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableMetall, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableMetall, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableMetall.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.name1Value\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.pinfo1Value)\">\n                          <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                          <b> Name 1:</b> {{group.name1Value}}<br>\n                          <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                          <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                          <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                          <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                        </div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>s\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showErdeBool\">\n        <div *ngFor=\"let tableErde of tablesErde; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableErde.number}} table-item\" [ngStyle]=\"{'top': tableErde.topValue + 'px', 'left': tableErde.leftValue + 'px', 'background-color': + tableErde.bgColor, 'height': + tableErde.height + 'px', 'width': + tableErde.width + 'px', 'border': + tableErde.border, 'border-radius': + tableErde.borderRadius  + '%', 'transform': + tableErde.transformValue}\" [style.border]=\"getStyle(tablesErde[j].groups)\" dropdown>\n            <div *ngIf=\"tablesErde[j] !== tablesErde[j+1]\">\n              <p><b>{{tableErde.number}} <br>{{erwErde[j]}}/{{kiErde[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableErde, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableErde, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableErde.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.name1Value\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.pinfo1Value)\">\n                          <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                          <b> Name 1:</b> {{group.name1Value}}<br>\n                          <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                          <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                          <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                          <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                        </div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showLuftBool\">\n        <div *ngFor=\"let tableLuft of tablesLuft; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableLuft.number}} table-item\" [ngStyle]=\"{'top': tableLuft.topValue + 'px', 'left': tableLuft.leftValue + 'px', 'background-color': + tableLuft.bgColor, 'height': + tableLuft.height + 'px', 'width': + tableLuft.width + 'px', 'border': + tableLuft.border,  'border-radius': + tableLuft.borderRadius  + '%'}\" [style.border]=\"getStyle(tablesLuft[j].groups)\" dropdown>\n            <div *ngIf=\"tablesLuft[j] !== tablesLuft[j+1]\">\n              <p><b>{{tableLuft.number}} <br>{{erwLuft[j]}}/{{kiLuft[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableLuft, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableLuft, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableLuft.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.name1Value\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.pinfo1Value)\">\n                          <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                          <b> Name 1:</b> {{group.name1Value}}<br>\n                          <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                          <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                          <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                          <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                        </div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showFeuerBool\">\n        <div *ngFor=\"let tableFeuer of tablesFeuer; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableFeuer.number}} table-item\" [ngStyle]=\"{'top': tableFeuer.topValue + 'px', 'left': tableFeuer.leftValue + 'px', 'background-color': + tableFeuer.bgColor, 'height': + tableFeuer.height + 'px', 'width': + tableFeuer.width + 'px', 'border': + tableFeuer.border,  'border-radius': + tableFeuer.borderRadius  + '%'}\" [style.border]=\"getStyle(tablesFeuer[j].groups)\" dropdown>\n            <div *ngIf=\"tablesFeuer[j] !== tablesFeuer[j+1]\">\n              <p><b>{{tableFeuer.number}} <br>{{erwFeuer[j]}}/{{kiFeuer[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableFeuer, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableFeuer, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableFeuer.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.name1Value\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.pinfo1Value)\">\n                          <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                          <b> Name 1:</b> {{group.name1Value}}<br>\n                          <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                          <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                          <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                          <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                        </div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWasserBool\">\n        <div *ngFor=\"let tableWasser of tablesWasser; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableWasser.number}} table-item\" [ngStyle]=\"{'top': tableWasser.topValue + 'px', 'left': tableWasser.leftValue + 'px', 'background-color': + tableWasser.bgColor, 'height': + tableWasser.height + 'px', 'width': + tableWasser.width + 'px', 'border': + tableWasser.border,  'border-radius': + tableWasser.borderRadius  + '%'}\" [style.border]=\"getStyle(tablesWasser[j].groups)\" dropdown>\n            <div *ngIf=\"tablesWasser[j] !== tablesWasser[j+1]\">\n              <p><b>{{tableWasser.number}} <br>{{erwWasser[j]}}/{{kiWasser[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableWasser, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableWasser, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableWasser.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.name1Value\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.pinfo1Value)\">\n                          <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                          <b> Name 1:</b> {{group.name1Value}}<br>\n                          <b> Info 1:</b> {{group.pinfo1Value}}<br>\n                          <b> Info 2:</b> {{group.pinfo2Value}}<br>\n                          <b> Info 3:</b> {{group.pinfo3Value}}<br>\n                          <b> Kategorie:</b> {{group.kategorieValue}}<br>\n                        </div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showAlleBool\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white; margin-top: 200px\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var TableplanComponent = (function () {
    function TableplanComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.movedMetall = new core_1.EventEmitter();
        this.movedErde = new core_1.EventEmitter();
        this.movedLuft = new core_1.EventEmitter();
        this.movedFeuer = new core_1.EventEmitter();
        this.movedWasser = new core_1.EventEmitter();
        this.changeBgColorIfAnreise = new core_1.EventEmitter();
        this.exportKiWasser = new core_1.EventEmitter();
        this.exportErwWasser = new core_1.EventEmitter();
        this.exportKiLuft = new core_1.EventEmitter();
        this.exportErwLuft = new core_1.EventEmitter();
        this.exportKiMetall = new core_1.EventEmitter();
        this.exportErwMetall = new core_1.EventEmitter();
        this.exportKiFeuer = new core_1.EventEmitter();
        this.exportErwFeuer = new core_1.EventEmitter();
        this.exportKiErde = new core_1.EventEmitter();
        this.exportErwErde = new core_1.EventEmitter();
        this.erwErde = [];
        this.kiErde = [];
        this.erwFeuer = [];
        this.kiFeuer = [];
        this.erwLuft = [];
        this.kiLuft = [];
        this.erwMetall = [];
        this.kiMetall = [];
        this.erwWasser = [];
        this.kiWasser = [];
        this.buttonMoveTable = "ff0000";
        this.buttonInfo = "ffffff";
        this.buttonHinzufuegen = "ffffff";
        this.buttonEntfernen = "ffffff";
        this.trace = false;
    }
    TableplanComponent.prototype.ngAfterViewChecked = function () {
    };
    TableplanComponent.prototype.addTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.addTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].tables[j].department === "metall") {
                _this.movedMetall.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "erde") {
                _this.movedErde.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "luft") {
                _this.movedLuft.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "feuer") {
                _this.movedFeuer.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "wasser") {
                _this.movedWasser.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.removeTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.removeTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].tables[j].department === "metall") {
                _this.movedMetall.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "erde") {
                _this.movedErde.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "luft") {
                _this.movedLuft.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "feuer") {
                _this.movedFeuer.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "wasser") {
                _this.movedWasser.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].InfoValue);
                if (a[b].pinfo1Value != "" || a[b].pinfo2Value != "" || a[b].pinfo3Value != "" || a[b].newInfoText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    TableplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TableplanComponent.prototype.mouseEnterMoveTableButton = function () {
        console.log("mouse enter : ");
        if (this.buttonMoveTable === "ff0000") {
            console.log('mouse enter1 :');
            this.buttonMoveTable = "bc0000";
        }
    };
    TableplanComponent.prototype.mouseLeaveMoveTableButton = function () {
        if (this.buttonMoveTable === "bc0000") {
            console.log('mouse leave1 :');
            this.buttonMoveTable = "ff0000";
        }
    };
    TableplanComponent.prototype.mouseEnterInfoButton = function () {
        console.log("mouse enter : ");
        if (this.buttonInfo === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonInfo = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveInfoButton = function () {
        if (this.buttonInfo === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonInfo = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterHinzufuegenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonHinzufuegen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonHinzufuegen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveHinzufuegenButton = function () {
        if (this.buttonHinzufuegen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonHinzufuegen = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterEntfernenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonEntfernen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonEntfernen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveEntfernenButton = function () {
        if (this.buttonEntfernen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonEntfernen = "ffffff";
        }
    };
    TableplanComponent.prototype.getStyleTrace = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TableplanComponent.prototype.sumUpPersonenAnzahl = function () {
        console.log("sumUpPersonenAnzahl called");
        if (this.tablesWasser) {
            for (var p = 0; p < this.tablesWasser.length; p++) {
                this.erwWasser[p] = 0;
                this.kiWasser[p] = 0;
                if (this.tablesWasser[p].groups) {
                    for (var g = 0; g < this.tablesWasser[p].groups.length; g++) {
                        if (this.tablesWasser[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesWasser[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwWasser[p] = this.erwWasser[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiWasser[p] = this.kiWasser[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesFeuer) {
            for (var p = 0; p < this.tablesFeuer.length; p++) {
                this.erwFeuer[p] = 0;
                this.kiFeuer[p] = 0;
                if (this.tablesFeuer[p].groups) {
                    for (var g = 0; g < this.tablesFeuer[p].groups.length; g++) {
                        if (this.tablesFeuer[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesFeuer[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwFeuer[p] = this.erwFeuer[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiFeuer[p] = this.kiFeuer[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesErde) {
            for (var p = 0; p < this.tablesErde.length; p++) {
                this.erwErde[p] = 0;
                this.kiErde[p] = 0;
                if (this.tablesErde[p].groups) {
                    for (var g = 0; g < this.tablesErde[p].groups.length; g++) {
                        if (this.tablesErde[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesErde[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwErde[p] = this.erwErde[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiErde[p] = this.kiErde[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesMetall) {
            for (var p = 0; p < this.tablesMetall.length; p++) {
                this.erwMetall[p] = 0;
                this.kiMetall[p] = 0;
                if (this.tablesMetall[p].groups) {
                    for (var g = 0; g < this.tablesMetall[p].groups.length; g++) {
                        if (this.tablesMetall[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesMetall[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwMetall[p] = this.erwMetall[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiMetall[p] = this.kiMetall[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesLuft) {
            for (var p = 0; p < this.tablesLuft.length; p++) {
                this.erwLuft[p] = 0;
                this.kiLuft[p] = 0;
                if (this.tablesLuft[p].groups) {
                    for (var g = 0; g < this.tablesLuft[p].groups.length; g++) {
                        if (this.tablesLuft[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesLuft[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwLuft[p] = this.erwLuft[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiLuft[p] = this.kiLuft[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        this.exportKiWasser.emit(this.kiWasser);
        this.exportErwWasser.emit(this.erwWasser);
        this.exportKiLuft.emit(this.kiLuft);
        this.exportErwLuft.emit(this.erwLuft);
        this.exportKiMetall.emit(this.kiMetall);
        this.exportErwMetall.emit(this.erwMetall);
        this.exportKiFeuer.emit(this.kiFeuer);
        this.exportErwFeuer.emit(this.erwFeuer);
        this.exportKiErde.emit(this.kiErde);
        this.exportErwErde.emit(this.erwErde);
    };
    return TableplanComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe'),
    __metadata("design:type", String)
], TableplanComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesErde'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesErde", void 0);
__decorate([
    core_1.Input('showErdeBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showErdeBool", void 0);
__decorate([
    core_1.Input('tablesFeuer'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesFeuer", void 0);
__decorate([
    core_1.Input('showFeuerBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showFeuerBool", void 0);
__decorate([
    core_1.Input('tablesMetall'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesMetall", void 0);
__decorate([
    core_1.Input('showMetallBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showMetallBool", void 0);
__decorate([
    core_1.Input('tablesWasser'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesWasser", void 0);
__decorate([
    core_1.Input('showWasserBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showWasserBool", void 0);
__decorate([
    core_1.Input('tablesLuft'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesLuft", void 0);
__decorate([
    core_1.Input('showLuftBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showLuftBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TableplanComponent.prototype, "movedMetall", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TableplanComponent.prototype, "movedErde", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TableplanComponent.prototype, "movedLuft", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TableplanComponent.prototype, "movedFeuer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], TableplanComponent.prototype, "movedWasser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], TableplanComponent.prototype, "changeBgColorIfAnreise", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], TableplanComponent.prototype, "exportKiWasser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], TableplanComponent.prototype, "exportErwWasser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], TableplanComponent.prototype, "exportKiLuft", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], TableplanComponent.prototype, "exportErwLuft", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], TableplanComponent.prototype, "exportKiMetall", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_m = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _m || Object)
], TableplanComponent.prototype, "exportErwMetall", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_o = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _o || Object)
], TableplanComponent.prototype, "exportKiFeuer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_p = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _p || Object)
], TableplanComponent.prototype, "exportErwFeuer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_q = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _q || Object)
], TableplanComponent.prototype, "exportKiErde", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_r = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _r || Object)
], TableplanComponent.prototype, "exportErwErde", void 0);
TableplanComponent = __decorate([
    core_1.Component({
        selector: 'app-tableplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_s = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _s || Object])
], TableplanComponent);
exports.TableplanComponent = TableplanComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  background-color: #0a7a74;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: #0a7a74;\n}\n\nspan {\n  color: #9d9d9d;\n}\n\n.container-fluid {\n  padding: 0 0 10px 0;\n  margin: 0;\n  height: 100vh;\n  max-width: 100vw;\n  background-color: #0a7a74;\n}\n\n.row {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0 15px 15px 15px;\n  background-color: #0a7a74;\n  margin: 0 0 0 0;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  max-height: calc(100vh - 240px);\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 120px);\n}\n\n.row .table-col {\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  width: calc(100vw - 20px);\n  max-width: 100%;\n}\n\n.print-col {\n  padding: 0;\n  min-height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 2;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  border-radius: 3px;\n  z-index: 1;\n\n}\n\n.section3 {\n  display: none;\n}\n\n.section2 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 195px) / 2);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerMetall, #containerWasser, #containerLuft, #containerFeuer, #containerErde {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\nbody html .row .container-fluid .upload-col .outer-cards h3 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #0a7a74;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin: 10px 20px 20px 0px;\n  border: none;\n}\n\n.btn-group-departments {\n  margin: 0px 10px 5px 0px;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 701px) {\n\n  .row {\n    max-width: 100vw;\n    max-height: calc(100vh - 60px);\n    padding: 0 15px 15px 15px;\n    background-color: #0a7a74;\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 70px);\n    min-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n    width: 30%;\n    margin: 60px 0 0 10px;\n  }\n\n  .btn-group-departments {\n    margin: 0 10px 5px 20px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    height: 100vh;\n    top: -100px;\n    z-index: -1;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 121px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    margin-left: 15px;\n    width: 65%;\n    max-height: calc(100vh - 60px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .table-col {\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 24%;\n    margin: 60px 0 0 10px;\n\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 48%;\n    margin-left: 15px;\n    margin-top: 60px;\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 125px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .navbar-nav {\n    display: inline-block;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n\n</head>\n<body>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n<app-navigation [newInformationElements]=\"newInformationElements\"\n                [tablesOccupied]=\"tablesOccupied\"\n                (getTablesOccupied)=\"tablesOccupied = $event\"\n                (umsetzenExport)=\"umsetzenInfoVar = $event; umsetzen($event)\"\n                [tablesTempAbreise]=\"tablesTempAbreise\"\n                (abreisenExportExport)=\"abreiseTablePlusIndex = $event; abreisenRemoval($event)\"\n                (transformExport)=\"term = $event; transform($event)\"\n                (termExport)=\"term = $event\"\n                (reloadLists)=\"reloadLists($event)\"\n                (getTablesExport)=\"getTables($event)\">\n</app-navigation>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n   <flash-messages></flash-messages>\n    <div class=\"col-xs-12 col-sm-8 col-lg-6 print-col\">\n      <app-departmentmenu\n        [buttonBgColor1]=\"buttonBgColor1\"\n        [buttonBgColor2]=\"buttonBgColor2\"\n        [buttonBgColor3]=\"buttonBgColor3\"\n        [buttonBgColor4]=\"buttonBgColor4\"\n        [buttonBgColor5]=\"buttonBgColor5\"\n        [buttonBgColor6]=\"buttonBgColor6\"\n        [fontColor1]=\"fontColor1\"\n        [fontColor2]=\"fontColor2\"\n        [fontColor3]=\"fontColor3\"\n        [fontColor4]=\"fontColor4\"\n        [fontColor5]=\"fontColor5\"\n        [fontColor6]=\"fontColor6\"\n        [showErdeBool]=\"showErdeBool\"\n        [showMetallBool]=\"showMetallBool\"\n        [showFeuerBool]=\"showFeuerBool\"\n        [showLuftBool]=\"showLuftBool\"\n        [showWasserBool]=\"showWasserBool\"\n        [showAlleBool]=\"showAlleBool\"\n        (showErdeBoolChange)=\"showErdeBool=$event\"\n        (showMetallBoolChange)=\"showMetallBool=$event\"\n        (showFeuerBoolChange)=\"showFeuerBool=$event\"\n        (showLuftBoolChange)=\"showLuftBool=$event\"\n        (showWasserBoolChange)=\"showWasserBool=$event\"\n        (showAlleBoolChange)=\"showAlleBool=$event\"\n        [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n        [buttonBgColorNotizForm]=\"buttonBgColorNotizForm\"\n        [fontColorInfoForm]=\"fontColorInfoForm\"\n        [fontColorNotizForm]=\"fontColorNotizForm\"\n        [showNotizFormBool]=\"showNotizFormBool\"\n        [showInfoFormBool]=\"showInfoFormBool\"\n        (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n        (showNotizFormBoolChange)=\"showNotizFormBool=$event\"\n        (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n        [showTablePlanBool]=\"showTablePlanBool\"\n        [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n        [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n      </app-departmentmenu><flash-messages></flash-messages>\n      <app-form [newInformationElements]=\"newInformationElements\"\n                [dateGenerated]=\"dateGenerated\"\n                [title]=\"title\"\n                [roomNumber]=\"roomNumber\"\n                [tableNumber]=\"tableNumber\"\n                [employee]=\"employee\"\n                [nameTraceInput]=\"nameTraceInput\"\n                [tablesErde]=\"tablesErde\"\n                [tablesMetall]=\"tablesMetall\"\n                [tablesFeuer]=\"tablesFeuer\"\n                [tablesWasser]=\"tablesWasser\"\n                [tablesLuft]=\"tablesLuft\"\n                [showNotizFormBool]=\"showNotizFormBool\"\n                [showInfoFormBool]=\"showInfoFormBool\"\n                [notizElements]=\"notizElements\"\n                (notizResponse)=\"notizElements=$event\"\n                [showErdeBool]=\"showErdeBool\"\n                [showMetallBool]=\"showMetallBool\"\n                [showFeuerBool]=\"showFeuerBool\"\n                [showLuftBool]=\"showLuftBool\"\n                [showWasserBool]=\"showWasserBool\"\n                [showAlleBool]=\"showAlleBool\"\n                (changeColorIfAnreiseExport)=\"changeBgColorIfAnreise($event)\">\n      </app-form>\n      <app-tableplan [tablesErde]=\"tablesErde\"\n                     [tablesMetall]=\"tablesMetall\"\n                     [tablesFeuer]=\"tablesFeuer\"\n                     [tablesWasser]=\"tablesWasser\"\n                     [tablesLuft]=\"tablesLuft\"\n                     [showErdeBool]=\"showErdeBool\"\n                     [showMetallBool]=\"showMetallBool\"\n                     [showFeuerBool]=\"showFeuerBool\"\n                     [showLuftBool]=\"showLuftBool\"\n                     [showWasserBool]=\"showWasserBool\"\n                     [showAlleBool]=\"showAlleBool\"\n                     (movedErde)=\"tablesErde = $event\"\n                     (movedMetall)=\"tablesMetall = $event\"\n                     (movedFeuer)=\"tablesFeuer = $event\"\n                     (movedWasser)=\"tablesWasser = $event\"\n                     (movedLuft)=\"tablesLuft = $event\"\n                     [showTablePlanBool]=\"showTablePlanBool\"\n                     (changeBgColorIfAnreise)=\"changeBgColorIfAnreise($event)\"\n                     (exportErwMetall)=\"erwMetall = $event\"\n                     (exportKiMetall)=\"kiMetall = $event\"\n                     (exportErwErde)=\"erwErde = $event\"\n                     (exportKiErde)=\"kiErde = $event\"\n                     (exportErwFeuer)=\"erwFeuer = $event\"\n                     (exportKiFeuer)=\"kiFeuer = $event\"\n                     (exportErwWasser)=\"erwWasser = $event\"\n                     (exportKiWasser)=\"kiWasser = $event\"\n                     (exportErwLuft)=\"erwLuft = $event\"\n                     (exportKiLuft)=\"kiLuft = $event\">\n      </app-tableplan>\n    </div>\n    <div class=\"col-xs-12 col-lg-3 upload-col\">\n      <div class=\"outer-cards\">\n        <app-im-haus-liste [imHausListeElemente]=\"imHausListeElemente\">\n        </app-im-haus-liste>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-3 table-col\">\n      <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments  [tables]=\"tables\"\n                                [tablesErde]=\"tablesErde\"\n                                [tablesMetall]=\"tablesMetall\"\n                                [tablesFeuer]=\"tablesFeuer\"\n                                [tablesWasser]=\"tablesWasser\"\n                                [tablesLuft]=\"tablesLuft\"\n                                [showErdeBool]=\"showErdeBool\"\n                                [showMetallBool]=\"showMetallBool\"\n                                [showFeuerBool]=\"showFeuerBool\"\n                                [showLuftBool]=\"showLuftBool\"\n                                [showWasserBool]=\"showWasserBool\"\n                                (dispensedErde)=\"tablesErde=$event\"\n                                (dispensedMetall)=\"tablesMetall=$event\"\n                                (dispensedFeuer)=\"tablesFeuer=$event\"\n                                (dispensedWasser)=\"tablesWasser=$event\"\n                                (dispensedLuft)=\"tablesLuft=$event\"\n                                (infoAddedErde)=\"tablesErde=$event\"\n                                (infoAddedMetall)=\"tablesMetall=$event\"\n                                (infoAddedFeuer)=\"tablesFeuer=$event\"\n                                (infoAddedWasser)=\"tablesWasser=$event\"\n                                (infoAddedLuft)=\"tablesLuft=$event\"\n                                [term]=\"term\"\n                                [tablesTempAbreise]=\"tablesTempAbreise\"\n                                [showAlleBool]=\"showAlleBool\"\n                                (updateAzList)=\"updateAzList($event)\"\n                                (updateImHausListeElement)=\"updateImHausListeElement($event); table = $event;\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesErde]=\"tablesErde\"\n            [tablesMetall]=\"tablesMetall\"\n            [tablesFeuer]=\"tablesFeuer\"\n            [tablesWasser]=\"tablesWasser\"\n            [tablesLuft]=\"tablesLuft\"\n            [showErdeBool]=\"showErdeBool\"\n            [showMetallBool]=\"showMetallBool\"\n            [showFeuerBool]=\"showFeuerBool\"\n            [showLuftBool]=\"showLuftBool\"\n            [showWasserBool]=\"showWasserBool\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\"\n            [erwMetall]=\"erwMetall\"\n            [kiMetall]=\"kiMetall\"\n            [erwErde]=\"erwErde\"\n            [kiErde]=\"kiErde\"\n            [erwFeuer]=\"erwFeuer\"\n            [kiFeuer]=\"kiFeuer\"\n            [erwWasser]=\"erwWasser\"\n            [kiWasser]=\"kiWasser\"\n            [erwLuft]=\"erwLuft\"\n            [kiLuft]=\"kiLuft\">\n</app-print>\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/index.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var print_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
var departmentmenu_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
var form_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
var im_haus_liste_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
var tableplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
var departments_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.topValues = [];
        this.newInformationElements = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tablesMetall = [];
        this.tablesErde = [];
        this.tablesLuft = [];
        this.tablesFeuer = [];
        this.tablesWasser = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempAbreise = [];
        this.erwErde = [];
        this.kiErde = [];
        this.erwFeuer = [];
        this.kiFeuer = [];
        this.erwLuft = [];
        this.kiLuft = [];
        this.erwMetall = [];
        this.kiMetall = [];
        this.erwWasser = [];
        this.kiWasser = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNotizForm = "f3efe4";
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.fontColorShowTablePlan = "f3efe4";
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74";
        this.buttonBgColor6 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.fontColor6 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showBauernStubnBool = false;
        this.showMetallBool = false;
        this.showLuftBool = false;
        this.showFeuerBool = false;
        this.showWasserBool = false;
        this.term = "";
        this.tischplanService.getNotizElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                //console.log(this.notizElements);
            }
        });
        this.getTables();
        this.reloadLists();
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                //console.log(this.newInformationElements);
            }
        });
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
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log("Args = " + JSON.stringify(args));
        console.log("Args1 = " + JSON.stringify(args[1]));
        console.log("Args2 = " + JSON.stringify(args[2]));
        console.log("Args3 = " + JSON.stringify(args[3]));
        console.log("Args4 = " + JSON.stringify(args[4]));
        console.log("e = " + JSON.stringify(e));
        console.log("el = " + JSON.stringify(el));
        var information = args[0].innerText;
        //console.log("information: " + information);
        var informationElements = information.split(/\n/);
        //console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        //console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring: " + departementSubstring);
        var innerText = args[1].innerText;
        console.log(innerText);
        //console.log("tableNumber: " + tableNumber);
        var tableNumberArray = [];
        tableNumberArray = innerText.toString().match(/[A-Z\s]+\d+/g);
        var tableNumberSubstring = tableNumberArray[0];
        //console.log('tableNumberSubstring');
        //console.log(tableNumberSubstring);
        var numbers = innerText.match(/\d+/g);
        var arrayIndex = [];
        //console.log(innerText.substring(33, 34));
        if (innerText.substring(33, 34) === ".") {
            arrayIndex = numbers[2];
            tableNumberSubstring = numbers[0] + "." + numbers[1];
        }
        else {
            arrayIndex = numbers[1];
        }
        //console.log("numbers: " + numbers);
        //console.log("arrayIndex: " + arrayIndex);
        //console.log("tableNumberSubstring: " + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        var jBefore = innerText.toString().match(/\d+/g);
        console.log(jBefore);
        var j = jBefore[1];
        //let j = jArray[1];
        var addPlaceholderDataString = [];
        addPlaceholderDataString.push(departementSubstring);
        addPlaceholderDataString.push(tableNumberSubstring);
        console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.tableplanComponent.sumUpPersonenAnzahl();
        this.updateImHausListeElement(informationElements2);
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
    TischplanComponent.prototype.showBauernStubn = function () {
        this.departmentmenuComponent.showErde();
    };
    TischplanComponent.prototype.showMetall = function () {
        this.departmentmenuComponent.showMetall();
    };
    TischplanComponent.prototype.showLuft = function () {
        this.departmentmenuComponent.showLuft();
    };
    TischplanComponent.prototype.showFeuer = function () {
        this.departmentmenuComponent.showFeuer();
    };
    TischplanComponent.prototype.showTeestube = function () {
        this.departmentmenuComponent.showWasser();
    };
    TischplanComponent.prototype.updateImHausListeElement = function (x) {
        this.imHausListeComponent.updateImHausListeElement(x);
    };
    /*
    moveTable(table, j) {
      this.tableplanComponent.moveTable(table, j);
    }
    */
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.changeBgColorIfAnreise = function () {
        this.departmentsComponent.changeBgColorIfAnreise();
    };
    TischplanComponent.prototype.abreisenRemoval = function () {
        this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.a);
    };
    TischplanComponent.prototype.umsetzen = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
        this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.umsetzenInfoVar.tableToMove, _this.umsetzenInfoVar.indexQuell);
        }, 2000);
    };
    TischplanComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    TischplanComponent.prototype.reloadLists = function () {
        var _this = this;
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            //console.log('IM-HAUS-LISTE before:');
            //console.log(imHausListeElemente);
            imHausListeElemente.sort(function (a, b) {
                if (a.name1 < b.name1)
                    return -1;
                if (a.name1 > b.name1)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = imHausListeElemente;
            //console.log('IM-HAUS-LISTE:');
            //console.log(this.imHausListeElemente);
            setTimeout(function () {
                _this.imHausListeComponent.sortList();
            }, 3000);
        });
    };
    TischplanComponent.prototype.updateAzList = function () {
        var _this = this;
        setTimeout(function () {
            console.log("gettables in updateAzList");
            _this.getTables();
            setTimeout(function () {
                _this.tables = _this.tablesErde.concat(_this.tablesWasser).concat(_this.tablesMetall).concat(_this.tablesFeuer).concat(_this.tablesLuft);
                //console.log('this.tables: in updateAzList');
                //console.log(this.tables);
                _this.printComponent.formatAzListe(_this.tables);
            }, 3000);
        }, 1000);
    };
    TischplanComponent.prototype.getTables = function () {
        var _this = this;
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            if (typeof tables == null) {
                return;
            }
            else {
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "erde") {
                        _this.tablesErde = tables[a].tables;
                    }
                    else if (tables[a].department === "feuer") {
                        _this.tablesFeuer = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesFeuer));
                    }
                    else if (tables[a].department === "metall") {
                        _this.tablesMetall = tables[a].tables;
                    }
                    else if (tables[a].department === "luft") {
                        _this.tablesLuft = tables[a].tables;
                    }
                    else if (tables[a].department === "wasser") {
                        _this.tablesWasser = tables[a].tables;
                    }
                }
            }
            //console.log(JSON.stringify(tables));
            console.log(_this.tablesErde);
            console.log(_this.tablesFeuer);
            console.log(_this.tablesMetall);
            console.log(_this.tablesLuft);
            console.log(_this.tablesWasser);
            _this.tablesTempAbreise = tables;
            _this.tables = _this.tablesErde.concat(_this.tablesWasser).concat(_this.tablesMetall).concat(_this.tablesFeuer).concat(_this.tablesLuft);
            //console.log(this.tables);
            _this.changeBgColorIfAnreise();
            _this.printComponent.formatAzListe(_this.tables);
            //this.dispenseIfAbreise(tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpPersonenAnzahl();
            }, 1000);
        });
    };
    return TischplanComponent;
}());
__decorate([
    core_1.ViewChild(print_component_1.PrintComponent),
    __metadata("design:type", typeof (_a = typeof print_component_1.PrintComponent !== "undefined" && print_component_1.PrintComponent) === "function" && _a || Object)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    core_1.ViewChild(departmentmenu_component_1.DepartmentmenuComponent),
    __metadata("design:type", typeof (_b = typeof departmentmenu_component_1.DepartmentmenuComponent !== "undefined" && departmentmenu_component_1.DepartmentmenuComponent) === "function" && _b || Object)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    core_1.ViewChild(form_component_1.FormComponent),
    __metadata("design:type", typeof (_c = typeof form_component_1.FormComponent !== "undefined" && form_component_1.FormComponent) === "function" && _c || Object)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    core_1.ViewChild(departments_component_1.DepartmentsComponent),
    __metadata("design:type", typeof (_d = typeof departments_component_1.DepartmentsComponent !== "undefined" && departments_component_1.DepartmentsComponent) === "function" && _d || Object)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    core_1.ViewChild(im_haus_liste_component_1.ImHausListeComponent),
    __metadata("design:type", typeof (_e = typeof im_haus_liste_component_1.ImHausListeComponent !== "undefined" && im_haus_liste_component_1.ImHausListeComponent) === "function" && _e || Object)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    core_1.ViewChild(navigation_component_1.NavigationComponent),
    __metadata("design:type", typeof (_f = typeof navigation_component_1.NavigationComponent !== "undefined" && navigation_component_1.NavigationComponent) === "function" && _f || Object)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    core_1.ViewChild(tableplan_component_1.TableplanComponent),
    __metadata("design:type", typeof (_g = typeof tableplan_component_1.TableplanComponent !== "undefined" && tableplan_component_1.TableplanComponent) === "function" && _g || Object)
], TischplanComponent.prototype, "tableplanComponent", void 0);
TischplanComponent = __decorate([
    core_1.Component({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _h || Object, typeof (_j = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _j || Object, typeof (_k = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _k || Object, typeof (_l = typeof ng2_dragula_1.DragulaService !== "undefined" && ng2_dragula_1.DragulaService) === "function" && _l || Object])
], TischplanComponent);
exports.TischplanComponent = TischplanComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            console.log('CAN ACTIVATE IS TRUE');
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log('CAN ACTIVATE IS FALSE');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.authenticateUser = function (user) {
        console.log("Check1");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log(JSON.stringify(user));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8000/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removeTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removeTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (table) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', table, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToNotizBlock = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newNotiz', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getNotizElements = function () {
        return this.http.get('getNotiz')
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], TischplanService);
exports.TischplanService = TischplanService;
var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ValidateService);
exports.ValidateService = ValidateService;
//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map