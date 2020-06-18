(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 Log in using Facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 Log in using Strava ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Or log in with email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Remember me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Forgot your password? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function AppComponent_div_19_Template_div_focusout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeModals(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sing Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 Sign up with Facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 Sign up with Strava ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Or sign up with your email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.title = 'asphalt-leader';
        this.showSingupModal = false;
        this.showLoginModal = false;
    }
    // openLogin(content) {
    openLogin() {
        console.log("opening login");
        setTimeout(() => {
            this.showSingupModal = false;
            this.showLoginModal = true;
        }, 100);
        // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
    // openSingup(signup){
    openSingup() {
        console.log("opening signup");
        setTimeout(() => {
            this.showLoginModal = false;
            this.showSingupModal = true;
        }, 100);
        // this.modalService.open(signup, {ariaLabelledBy: 'modal-basic-title'});
    }
    closeModals() {
        console.log("closing");
        this.showLoginModal = false;
        this.showSingupModal = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 2, consts: [[3, "click"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "transparent-light", "top"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-item"], [1, "navbar-text"], [1, "nav-link", 3, "click"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], [4, "ngIf"], [3, "focusout", 4, "ngIf"], ["id", "modal-container"], ["id", "auth-modal"], [1, "mb-5"], ["type", "button", 1, "btn", "btn-primary", "login-btn", "mt-4"], ["src", "../assets/logo-fb.jpg"], ["type", "button", "id", "strava-btn", 1, "btn", "btn-warning", "login-btn", "mt-3"], ["src", "../assets/logo-strava.jpg"], [1, "m-5"], [1, "input-group", "flex-nowrap", "mt-2"], [1, "input-group-prepend"], ["id", "addon-wrapping", 1, "input-group-text"], ["type", "text", "placeholder", "yourEmail@yahoo.com", "aria-describedby", "addon-wrapping", 1, "form-control"], [1, "input-group", "flex-nowrap", "mt-3"], ["type", "password", "placeholder", "password", "aria-describedby", "addon-wrapping", 1, "form-control"], [1, "mt-3", 2, "float", "left"], ["type", "checkbox", "name", "remember-me"], ["type", "button", 1, "btn", "btn-light", "mt-4", "login-btn", 2, "color", "black"], ["href", ""], [3, "focusout"], [1, "input-group", "flex-nowrap", "mt-1"], ["type", "text", "placeholder", "yourUsername", "aria-describedby", "addon-wrapping", 1, "form-control"], ["type", "button", 1, "btn", "btn-light", "mt-5", "mb-3", "login-btn", 2, "color", "black"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_Header_click_0_listener() { return ctx.closeModals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Asphalt Leader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() { return ctx.openLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LOG IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.openSingup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_18_Template, 33, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_div_19_Template, 29, 0, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoginModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSingupModal);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".top[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\n.transparent-light[_ngcontent-%COMP%] {\n  background-color: rgba(202, 202, 202, 0.137);\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n#auth-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(14, 14, 14, 0.932);\n  color: aliceblue;\n  font-size: large;\n  font-weight: 100;\n  text-align: center;\n  padding: 40px 60px 40px 60px;\n  border-radius: 20px;\n  width: 400px;\n  -webkit-animation-name: move-up;\n          animation-name: move-up;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  top: 105px;\n}\n\n@-webkit-keyframes move-up {\n  from {\n    top: 110vh;\n  }\n  to {\n    top: 105px;\n  }\n}\n\n@keyframes move-up {\n  from {\n    top: 110vh;\n  }\n  to {\n    top: 105px;\n  }\n}\n\n#auth-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: rgba(14, 14, 14, 0.87);\n  color: aliceblue;\n}\n\n#auth-modal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.247);\n  color: aliceblue;\n}\n\n#strava-btn[_ngcontent-%COMP%] {\n  background-color: #fc5200;\n  border-color: #fc5200;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  width: 240px;\n  color: aliceblue;\n  padding: 5px;\n  position: relative;\n}\n\n#auth-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  vertical-align: middle;\n  width: 30px;\n  border-radius: 4px;\n}\n\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #ffffffc9;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: rgba(14, 14, 14, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZXNcXGFuZ3VsYXJcXGxpY2VudGFcXGFzcGhhbGYtbGVhZGVyXFxhc3BoYWx0LWxlYWRlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FER0E7RUFDSTtJQUFPLFVBQUE7RUNDVDtFREFFO0lBQUssVUFBQTtFQ0dQO0FBQ0Y7O0FETkE7RUFDSTtJQUFPLFVBQUE7RUNDVDtFREFFO0lBQUssVUFBQTtFQ0dQO0FBQ0Y7O0FEREE7RUFDSSx3Q0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSw0Q0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QURBQTtFQUNJLHFDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDIwMiwgMjAyLCAwLjEzNyk7XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdGV4dCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gXHJcbiNhdXRoLW1vZGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNCwgMTQsIDAuOTMyKTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDYwcHggNDBweCA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlLXVwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOHM7IFxyXG4gICAgdG9wOiAxMDVweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS11cCB7XHJcbiAgICBmcm9tIHsgdG9wOiAxMTB2aDsgfVxyXG4gICAgdG8geyB0b3A6IDEwNXB4OyB9XHJcbn1cclxuIFxyXG4jYXV0aC1tb2RhbCBpbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE0LCAxNCwgMC44Nyk7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4jYXV0aC1tb2RhbCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDcpO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuI3N0cmF2YS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM1MjAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmM1MjAwO1xyXG59XHJcblxyXG4ubG9naW4tYnRue1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2F1dGgtbW9kYWwgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOjMwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcclxufVxyXG5cclxuLmJ0bi1saWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjOVxyXG59XHJcblxyXG4ubW9kYWwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE0LCAxNCwgMClcclxufVxyXG5cclxuIiwiLnRvcCB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDIwMiwgMjAyLCAwLjEzNyk7XG59XG5cbi5uYXZiYXIgYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm5hdmJhci10ZXh0IGEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2F1dGgtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNCwgMTQsIDAuOTMyKTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDYwcHggNDBweCA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlLXVwO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIHRvcDogMTA1cHg7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS11cCB7XG4gIGZyb20ge1xuICAgIHRvcDogMTEwdmg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMTA1cHg7XG4gIH1cbn1cbiNhdXRoLW1vZGFsIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTQsIDE0LCAwLjg3KTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuI2F1dGgtbW9kYWwgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDcpO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4jc3RyYXZhLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzUyMDA7XG4gIGJvcmRlci1jb2xvcjogI2ZjNTIwMDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiAyNDBweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNhdXRoLW1vZGFsIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogM3B4O1xuICB0b3A6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0bi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjOTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNCwgMTQsIDApO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
                ],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthGuard {
    canActivate(next, state) {
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class LoginComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.signUpMessage = "";
        this.loginUserData = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
        this.signUpMessage = window.screen.width < 800 ? "SIGN UP" : "SIGN UP FOR FREE";
    }
    openSignUpModal() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 12, vars: 1, consts: [["id", "container"], ["id", "center-text"], ["id", "sign-up"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \"The will to win means nothing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " without the will to prepare.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " -- Juma Ikangaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() { return ctx.openSignUpModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.signUpMessage, " ");
    } }, styles: ["#sign-up[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 75%;\n  left: 50%;\n}\n\n#sign-up[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 23px;\n  position: relative;\n  left: -50%;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n#center-text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  color: white;\n  text-align: center;\n}\n\n#center-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  position: relative;\n  left: -50%;\n  text-transform: uppercase;\n  font-weight: 200;\n  width: 100%;\n}\n\n#center-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: relative;\n  left: -35%;\n  font-weight: 300;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n  background-image: url('login-bg.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-y: -170px;\n  height: 100vh;\n  width: 100%;\n}\n\n#login-form[_ngcontent-%COMP%] {\n  background-color: rgba(150, 150, 150, 0.5);\n}\n\n@media (max-width: 960px) {\n  #container[_ngcontent-%COMP%] {\n    background-position-x: 0px;\n    background-position-y: -20px;\n    scale: 0.8;\n  }\n}\n\n@media (max-width: 500px) {\n  #container[_ngcontent-%COMP%] {\n    background-position-x: -200px;\n    background-position-y: 0px;\n    scale: 0.8;\n  }\n\n  #center-text[_ngcontent-%COMP%] {\n    top: 49%;\n  }\n\n  #center-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n    position: relative;\n    left: -50%;\n    text-transform: uppercase;\n    font-size: large;\n    font-weight: 200;\n    width: 100%;\n  }\n\n  #center-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: medium;\n    position: relative;\n    left: -35%;\n    font-weight: 300;\n  }\n\n  #sign-up[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  #sign-up[_ngcontent-%COMP%] {\n    top: 66%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHdvcmtzcGFjZXNcXGFuZ3VsYXJcXGxpY2VudGFcXGFzcGhhbGYtbGVhZGVyXFxhc3BoYWx0LWxlYWRlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDSSwwQ0FBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLDRCQUFBO0lBQ0EsVUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLDZCQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0VDRk47O0VES0U7SUFDSSxRQUFBO0VDRk47O0VES0U7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDRk47O0VES0U7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDRk47O0VES0U7SUFDSSxlQUFBO0VDRk47O0VES0U7SUFDSSxRQUFBO0VDRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNzaWduLXVwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4jc2lnbi11cCBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbn1cclxuIFxyXG4jY2VudGVyLXRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjZW50ZXItdGV4dCBoMiwgaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTUwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjZW50ZXItdGV4dCBoNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTE3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuI2xvZ2luLWZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwxNTAsMTUwLDAuNSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk2MHB4KSB7XHJcbiAgICAjY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTIwcHg7XHJcbiAgICAgICAgc2NhbGU6IDAuODtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgICNjb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwcHg7XHJcbiAgICAgICAgc2NhbGU6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAjY2VudGVyLXRleHR7XHJcbiAgICAgICAgdG9wOiA0OSU7XHJcbiAgICB9XHJcblxyXG4gICAgI2NlbnRlci10ZXh0IGgyLCBoMSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNjZW50ZXItdGV4dCBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IC0zNSU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3NpZ24tdXAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NpZ24tdXAge1xyXG4gICAgICAgIHRvcDogNjYlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIjc2lnbi11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuI3NpZ24tdXAgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01MCU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cblxuI2NlbnRlci10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjZW50ZXItdGV4dCBoMiwgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY2VudGVyLXRleHQgaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0zNSU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNjb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTcwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbG9naW4tZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTIwcHg7XG4gICAgc2NhbGU6IDAuODtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMHB4O1xuICAgIHNjYWxlOiAwLjg7XG4gIH1cblxuICAjY2VudGVyLXRleHQge1xuICAgIHRvcDogNDklO1xuICB9XG5cbiAgI2NlbnRlci10ZXh0IGgyLCBoMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAjY2VudGVyLXRleHQgaDQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMzUlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAjc2lnbi11cCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gICNzaWduLXVwIHtcbiAgICB0b3A6IDY2JTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    constructor(http) {
        this.http = http;
        this._registerUrl = "...";
        this._loginUrl = "...";
    }
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    loggedIn() {
        return !!this.getToken();
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



class TokenInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        let tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.authService.getToken()
            }
        });
        return next.handle(tokenizedRequest);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspaces\angular\licenta\asphalf-leader\asphalt-leader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map