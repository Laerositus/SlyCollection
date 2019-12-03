(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n<h1>\r\n\t<a id=\"user-content-about-this-application\" class=\"anchor\" href=\"#about-this-application\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>About this application</h1>\r\n<p>This is an application made for the course \"Clientside Web Frameworks\" for Avans Hogeschool.</p>\r\n\r\n<h1>\r\n\t<a id=\"user-content-slycollection\" class=\"anchor\" href=\"#slycollection\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>SlyCollection</h1>\r\n<p>With this application you can get information on every character and media of the Sly Cooper universe.</p> \r\n\r\n<h2>\r\n\t<a id=\"user-content-entities\" class=\"anchor\" href=\"#entities\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Entities</h2>\r\n<h3>\r\n\t<a id=\"user-content-user\" class=\"anchor\" href=\"#user\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>User</h3>\r\n<ul>\r\n\t<li>id: number</li>\r\n\t<li>login: string</li>\r\n\t<li>password: string</li>\r\n</ul>\r\n\r\n<h3>\r\n\t<a id=\"user-content-character\" class=\"anchor\" href=\"#character\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Character</h3>\r\n<ul>\r\n\t<li>id: number</li>\r\n\t<li>name: string</li>\t\r\n\t<li>born: date</li>\r\n\t<li>game: Game[]</li>\r\n\t<li>species: string</li>\r\n\t<li>relationship: Character</li>\r\n\t<li>weapon/s: Equipment[]</li>\r\n\t<li>voiced by: Voice Actor</li>\r\n\t<li>more info: string</li>\r\n</ul>\r\n\r\n<h3>\r\n\t<a id=\"user-content-equipment\" class=\"anchor\" href=\"#equipment\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Equipment</h3>\r\n<ul>\r\n\t<li>name: string</li>\r\n\t<li>id: number</li>\r\n\t<li>game: Game[]</li>\r\n\t<li>user/s: Character[]</li>\r\n\t<li>type: string</li>\r\n\t<li>more info: string</li>\r\n</ul>\r\n\r\n<h3>\r\n\t<a id=\"user-content-game\" class=\"anchor\" href=\"#game\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Game</h3>\r\n<ul>\r\n\t<li>name: string</li>\r\n\t<li>platform/s: string[]</li>\r\n\t<li>developer: string[]</li>\r\n\t<li>publisher: string</li>\r\n\t<li>released: date</li>\r\n\t<li>more info: string</li>\r\n</ul>\r\n\r\n<h3>\r\n\t<a id=\"user-content-voice-actor\" class=\"anchor\" href=\"#voice-actor\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Voice Actor</h3>\r\n<ul>\r\n\t<li>name: string</li>\r\n\t<li>birthdate: date</li>\r\n\t<li>voice for: Character[]</li>\r\n\t<li>more info: string</li>\r\n</ul>\r\n\r\n<h2>\r\n\t<a id=\"user-content-use-cases\" class=\"anchor\" href=\"#use-cases\"\r\n\t\taria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Use Cases</h2>\r\n<p>This application will offer the following funcitonalities:</p>\r\n<table border=1>\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th align=\"left\">Name</th>\r\n\t\t\t<th align=\"left\">UC-01 Logging in</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Description</td>\r\n\t\t\t<td align=\"left\">The user can login</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Actor</td>\r\n\t\t\t<td align=\"left\">Regular user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Precondition</td>\r\n\t\t\t<td align=\"left\">No logged in user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Scenario</td>\r\n\t\t\t<td align=\"left\">1. User fills in login name and password and clicks Login\r\n\t\t\t\tbutton.<br> 2. Application validates filled in credentials.<br> 3. If credentials are valid the application will redirect to starting screen.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Postcondition</td>\r\n\t\t\t<td align=\"left\">User is logged in</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>\r\n<table border=1>\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th align=\"left\">Name</th>\r\n\t\t\t<th align=\"left\">UC-02 Register</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Description</td>\r\n\t\t\t<td align=\"left\">A new user can register with a login and password</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Actor</td>\r\n\t\t\t<td align=\"left\">New user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Precondition</td>\r\n\t\t\t<td align=\"left\">No logged in user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Scenario</td>\r\n\t\t\t<td align=\"left\">1. User fills in login name and password and clicks Register\r\n\t\t\t\tbutton.<br> 2. Applicaiton validates in credentials.<br> 3. If credentials are valid the application will redirect to login page. UC-01</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Postcondition</td>\r\n\t\t\t<td align=\"left\">User has valid account</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>\r\n<table border=1>\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th align=\"left\">Name</th>\r\n\t\t\t<th align=\"left\">UC-03 Login Fail</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Description</td>\r\n\t\t\t<td align=\"left\">A user has filled in invalid credentials</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Actor</td>\r\n\t\t\t<td align=\"left\">Regular user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Precondition</td>\r\n\t\t\t<td align=\"left\">No logged in user</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Scenario</td>\r\n\t\t\t<td align=\"left\">1. User fills in login name and password and clicks Register\r\n\t\t\t\tbutton.<br> 2. Applicaiton validates in credentials.<br> 3. Credentials are not valid.<br> 4. Pop-up on screen with \"Invalid login or password, please try again\". UC-01</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Postcondition</td>\r\n\t\t\t<td align=\"left\">No logged in user</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>\r\n<table border=1>\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th align=\"left\">Name</th>\r\n\t\t\t<th align=\"left\">UC-04</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Description</td>\r\n\t\t\t<td align=\"left\">Ma boi</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Actor</td>\r\n\t\t\t<td align=\"left\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Precondition</td>\r\n\t\t\t<td align=\"left\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Scenario</td>\r\n\t\t\t<td align=\"left\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"left\">Postcondition</td>\r\n\t\t\t<td align=\"left\"></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-header-bar></app-header-bar>\r\n  <div class=\"section columns\">\r\n    <app-nav class=\"column is-2\"></app-nav>\r\n    <main class=\"column\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    {
        path: 'heroes',
        loadChildren: () => __webpack_require__.e(/*! import() | heroes-heroes-module */ "heroes-heroes-module").then(__webpack_require__.bind(null, /*! ./heroes/heroes.module */ "./src/app/heroes/heroes.module.ts")).then(m => m.HeroesModule)
    },
    {
        path: 'villains',
        loadChildren: () => __webpack_require__.e(/*! import() | villains-villains-module */ "villains-villains-module").then(__webpack_require__.bind(null, /*! ./villains/villains.module */ "./src/app/villains/villains.module.ts")).then(m => m.VillainsModule)
    },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '**', component: _core__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _store_store_module__WEBPACK_IMPORTED_MODULE_7__["AppStoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-bar-brand.component */ "./src/app/core/header-bar-brand.component.ts");
/* harmony import */ var _header_bar_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-bar-links.component */ "./src/app/core/header-bar-links.component.ts");
/* harmony import */ var _header_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header-bar.component */ "./src/app/core/header-bar.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav.component */ "./src/app/core/nav.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found.component */ "./src/app/core/not-found.component.ts");











const components = [
    _nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
    _header_bar_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBarComponent"],
    _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_6__["HeaderBarBrandComponent"],
    _header_bar_links_component__WEBPACK_IMPORTED_MODULE_7__["HeaderBarLinksComponent"],
    _not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
];
let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], components],
        declarations: [components]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/header-bar-brand.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/header-bar-brand.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarBrandComponent", function() { return HeaderBarBrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderBarBrandComponent = class HeaderBarBrandComponent {
};
HeaderBarBrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-bar-brand',
        template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://angular.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab js-logo fa-angular fa-2x" aria-hidden="true"></i>
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="tour">TOUR</span> <span class="of">OF</span>
        <span class="heroes">HEROES</span>
      </a>
      <button
        class="link navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span> <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  `
    })
], HeaderBarBrandComponent);



/***/ }),

/***/ "./src/app/core/header-bar-links.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/header-bar-links.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarLinksComponent", function() { return HeaderBarLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderBarLinksComponent = class HeaderBarLinksComponent {
};
HeaderBarLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-bar-links',
        template: '',
        styles: ["\n      :host {\n        width: 100%;\n      }\n    "]
    })
], HeaderBarLinksComponent);



/***/ }),

/***/ "./src/app/core/header-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/core/header-bar.component.ts ***!
  \**********************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderBarComponent = class HeaderBarComponent {
};
HeaderBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-bar',
        template: `
    <header>
      <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
        <app-header-bar-brand></app-header-bar-brand>
        <app-header-bar-links></app-header-bar-links>
      </nav>
    </header>
  `
    })
], HeaderBarComponent);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, HeaderBarComponent, NavComponent, NotFoundComponent, Hero, Villain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _header_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-bar.component */ "./src/app/core/header-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return _header_bar_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarComponent"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/app/core/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["Hero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Villain", function() { return _model__WEBPACK_IMPORTED_MODULE_2__["Villain"]; });

/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.component */ "./src/app/core/nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]; });

/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "./src/app/core/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]; });








/***/ }),

/***/ "./src/app/core/model/hero.ts":
/*!************************************!*\
  !*** ./src/app/core/model/hero.ts ***!
  \************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
class Hero {
}


/***/ }),

/***/ "./src/app/core/model/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/model/index.ts ***!
  \*************************************/
/*! exports provided: Hero, Villain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/app/core/model/hero.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]; });

/* harmony import */ var _villain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./villain */ "./src/app/core/model/villain.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Villain", function() { return _villain__WEBPACK_IMPORTED_MODULE_1__["Villain"]; });





/***/ }),

/***/ "./src/app/core/model/villain.ts":
/*!***************************************!*\
  !*** ./src/app/core/model/villain.ts ***!
  \***************************************/
/*! exports provided: Villain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Villain", function() { return Villain; });
class Villain {
}


/***/ }),

/***/ "./src/app/core/nav.component.ts":
/*!***************************************!*\
  !*** ./src/app/core/nav.component.ts ***!
  \***************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() { }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: `
  <nav class="menu">
    <p class="menu-label">Menu</p>
    <ul class="menu-list">
      <a routerLink="/heroes" routerLinkActive="router-link-active">
        <span>Heroes</span>
      </a>
      <a routerLink="/villains" routerLinkActive="router-link-active">
        <span>Villains</span>
      </a>
      <a routerLink="/about" routerLinkActive="router-link-active">
        <span>About</span>
      </a>
    </ul>
  </nav>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavComponent);



/***/ }),

/***/ "./src/app/core/not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/not-found.component.ts ***!
  \*********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: `
  <div class="content-container">
    <div class="content-title-group not-found">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
      <span class="title">These aren't the bits you're looking for</span>
    </div>
  </div>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/shared/button-footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button-footer.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFooterComponent", function() { return ButtonFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonFooterComponent = class ButtonFooterComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handleClick() {
        this.clicked.emit(this.item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "className", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "iconClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "dataId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonFooterComponent.prototype, "clicked", void 0);
ButtonFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-footer',
        template: `
    <button
      class="link"
      [ngClass]="className"
      [attr.aria-label]="label"
      tabindex="0"
      [attr.data-id]="item.id"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i> <span>{{ label }}</span>
    </button>
  `
    })
], ButtonFooterComponent);



/***/ }),

/***/ "./src/app/shared/card-content.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/card-content.component.ts ***!
  \**************************************************/
/*! exports provided: CardContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentComponent", function() { return CardContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardContentComponent = class CardContentComponent {
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CardContentComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CardContentComponent.prototype, "description", void 0);
CardContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-content',
        template: `
    <div class="card-content">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
  `
    })
], CardContentComponent);



/***/ }),

/***/ "./src/app/shared/list-header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/list-header.component.ts ***!
  \*************************************************/
/*! exports provided: ListHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeaderComponent", function() { return ListHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListHeaderComponent = class ListHeaderComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handleAdd() {
        this.add.emit();
    }
    handleRefresh() {
        this.refresh.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListHeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListHeaderComponent.prototype, "add", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListHeaderComponent.prototype, "refresh", void 0);
ListHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-header',
        template: `
    <div class="content-title-group">
      <a router-link="/">
        <h2 class="title">{{title}}</h2>
      </a>
      <button
        class="button add-button"
        (click)="handleAdd()"
        aria-label="add"
      >
        <i class="fas fa-plus" aria-hidden="true"></i>
      </button>
      <button
        class="button refresh-button"
        (click)="handleRefresh()"
        aria-label="refresh"
      >
        <i class="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>
  `
    })
], ListHeaderComponent);



/***/ }),

/***/ "./src/app/shared/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalComponent = class ModalComponent {
    constructor() {
        this.isOpen = false;
        this.handleYes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNo = () => {
            this.handleNo.emit();
        };
        this.onYes = () => {
            this.handleYes.emit();
        };
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "handleYes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "handleNo", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: `
    <div class="modal" [ngClass]="{ 'is-active': this.isOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm</p>
        </header>
        <section class="modal-card-body">
          {{message}}
        </section>
        <footer class="modal-card-foot">
          <button class="button modal-no" (click)="onNo()">No</button>
          <button class="button is-primary modal-yes" (click)="onYes()">Yes</button>
        </footer>
      </div>
    </div>
  `
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-header.component */ "./src/app/shared/list-header.component.ts");
/* harmony import */ var _card_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-content.component */ "./src/app/shared/card-content.component.ts");
/* harmony import */ var _button_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-footer.component */ "./src/app/shared/button-footer.component.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal.component */ "./src/app/shared/modal.component.ts");








const components = [
    _button_footer_component__WEBPACK_IMPORTED_MODULE_6__["ButtonFooterComponent"],
    _card_content_component__WEBPACK_IMPORTED_MODULE_5__["CardContentComponent"],
    _list_header_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderComponent"],
    _modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [components],
        exports: [components, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/store/config.ts":
/*!*********************************!*\
  !*** ./src/app/store/config.ts ***!
  \*********************************/
/*! exports provided: defaultDataServiceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataServiceConfig", function() { return defaultDataServiceConfig; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");

const root = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API;
const defaultDataServiceConfig = {
    root,
    entityHttpResourceUrls: {
        Hero: {
            // You must specify the root as part of the resource URL.
            entityResourceUrl: `${root}/heroes/`,
            collectionResourceUrl: `${root}/heroes/`
        },
        Villain: {
            entityResourceUrl: `${root}/villains/`,
            collectionResourceUrl: `${root}/villains/`
        }
    }
};


/***/ }),

/***/ "./src/app/store/entity-metadata.ts":
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/*! exports provided: entityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityConfig", function() { return entityConfig; });
const entityMetadata = {
    Hero: {},
    Villain: {}
};
const pluralNames = { Hero: 'Heroes' };
const entityConfig = {
    entityMetadata,
    pluralNames
};


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/data */ "./node_modules/@ngrx/data/fesm2015/data.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/app/store/config.ts");
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity-metadata */ "./src/app/store/entity-metadata.ts");









let AppStoreModule = class AppStoreModule {
};
AppStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument(),
            _ngrx_data__WEBPACK_IMPORTED_MODULE_5__["EntityDataModule"].forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_8__["entityConfig"])
        ],
        providers: [
            { provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_5__["DefaultDataServiceConfig"], useValue: _config__WEBPACK_IMPORTED_MODULE_7__["defaultDataServiceConfig"] }
        ]
    })
], AppStoreModule);



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
    production: false,
    API: 'api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Laerositus\angular-repos\SlyCollection\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map