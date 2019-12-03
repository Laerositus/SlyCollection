(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["heroes-heroes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/heroes/hero-detail/hero-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/heroes/hero-detail/hero-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card edit-detail\">\r\n  <header class=\"card-header\">\r\n    <p class=\"card-header-title\">\r\n      {{editingHero.name}}\r\n      &nbsp;\r\n    </p>\r\n  </header>\r\n  <div class=\"card-content\">\r\n    <div class=\"content\">\r\n      <div class=\"field\" *ngIf=\"editingHero.id\">\r\n        <label class=\"label\" for=\"id\">\r\n          id\r\n        </label>\r\n        <input name=\"id\" class=\"input\" type=\"text\" [(ngModel)]=\"editingHero.id\" placeholder=\"e.g. HeroColleen\" readOnly />\r\n      </div>\r\n      <div class=\"field\">\r\n        <label class=\"label\" for=\"name\">\r\n          name\r\n        </label>\r\n        <input name=\"name\" class=\"input\" type=\"text\" [(ngModel)]=\"editingHero.name\" placeholder=\"e.g. Colleen\" />\r\n      </div>\r\n      <div class=\"field\">\r\n        <label class=\"label\" for=\"description\">\r\n          description\r\n        </label>\r\n        <input name=\"description\" class=\"input\" type=\"text\" [(ngModel)]=\"editingHero.description\" placeholder=\"dance fight!\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"card-footer \">\r\n    <app-button-footer class=\"card-footer-item\" [className]=\"'cancel-button'\" [iconClasses]=\"'fas fa-undo'\" (clicked)=\"clear()\"\r\n      label=\"Cancel\" [item]=\"editingHero\"></app-button-footer>\r\n    <app-button-footer class=\"card-footer-item\" [className]=\"'save-button'\" [iconClasses]=\"'fas fa-save'\" (clicked)=\"saveHero()\"\r\n      label=\"Save\" [item]=\"editingHero\"></app-button-footer>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/heroes/hero-list/hero-list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/heroes/hero-list/hero-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list\">\r\n  <li *ngFor=\"let hero of heroes; trackBy: byId; let i = index\" role=\"presentation\">\r\n    <div class=\"card\">\r\n      <app-card-content [name]=\"hero.name\" [description]=\"hero.description\"\r\n      ></app-card-content>\r\n      <footer class=\"card-footer\">\r\n        <app-button-footer class=\"card-footer-item\" [className]=\"'delete-item'\" [iconClasses]=\"'fas fa-trash'\" (clicked)=\"deleteHero($event)\" label=\"Delete\" [item]=\"hero\"></app-button-footer>\r\n        <app-button-footer class=\"card-footer-item\" [className]=\"'edit-item'\" [iconClasses]=\"'fas fa-edit'\" (clicked)=\"selectHero($event)\" label=\"Edit\" [item]=\"hero\"></app-button-footer>\r\n      </footer>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/heroes/heroes/heroes.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/heroes/heroes/heroes.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\r\n  <app-list-header title=\"Heroes\" (add)=\"enableAddMode()\" (refresh)=\"getHeroes()\"></app-list-header>\r\n  <div class=\"columns is-multiline is-variable\">\r\n    <div class=\"column is-8\" *ngIf=\"heroes$ | async as heroes\">\r\n      <app-hero-list *ngIf=\"!selected\" [heroes]=\"heroes\" [selectedHero]=\"selected\" (selected)=\"select($event)\"\r\n        (deleted)=\"askToDelete($event)\"></app-hero-list>\r\n      <app-hero-detail *ngIf=\"selected\" [hero]=\"selected\" (unselect)=\"clear()\" (save)=\"save($event)\"></app-hero-detail>\r\n    </div>\r\n  </div>\r\n\r\n  <app-modal class=\"modal-hero\" [message]=\"message\" [isOpen]=\"showModal\" (handleNo)=\"closeModal()\" (handleYes)=\"deleteHero()\"></app-modal>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/heroes/hero-detail/hero-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
        this.unselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addMode = false;
    }
    HeroDetailComponent.prototype.ngOnChanges = function (changes) {
        if (this.hero && this.hero.id) {
            this.editingHero = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.hero);
            this.addMode = false;
        }
        else {
            this.editingHero = { id: undefined, name: '', description: '' };
            this.addMode = true;
        }
    };
    HeroDetailComponent.prototype.clear = function () {
        this.unselect.emit();
    };
    HeroDetailComponent.prototype.saveHero = function () {
        this.save.emit(this.editingHero);
        this.clear();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], HeroDetailComponent.prototype, "hero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroDetailComponent.prototype, "unselect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroDetailComponent.prototype, "save", void 0);
    HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/heroes/hero-detail/hero-detail.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero-list/hero-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/heroes/hero-list/hero-list.component.ts ***!
  \*********************************************************/
/*! exports provided: HeroListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListComponent", function() { return HeroListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var HeroListComponent = /** @class */ (function () {
    function HeroListComponent() {
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeroListComponent.prototype.selectHero = function (hero) {
        this.selected.emit(hero);
    };
    HeroListComponent.prototype.deleteHero = function (hero) {
        this.deleted.emit(hero);
    };
    HeroListComponent.prototype.byId = function (hero) {
        return hero.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HeroListComponent.prototype, "heroes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], HeroListComponent.prototype, "selectedHero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroListComponent.prototype, "deleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroListComponent.prototype, "selected", void 0);
    HeroListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-list',
            template: __webpack_require__(/*! raw-loader!./hero-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/heroes/hero-list/hero-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero.service.ts":
/*!****************************************!*\
  !*** ./src/app/heroes/hero.service.ts ***!
  \****************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ "./node_modules/@ngrx/data/fesm5/data.js");



var HeroService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeroService, _super);
    function HeroService(serviceElementsFactory) {
        return _super.call(this, 'Hero', serviceElementsFactory) || this;
    }
    HeroService.ctorParameters = function () { return [
        { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"] }
    ]; };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"]])
    ], HeroService);
    return HeroService;
}(_ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceBase"]));



/***/ }),

/***/ "./src/app/heroes/heroes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.module.ts ***!
  \*****************************************/
/*! exports provided: HeroesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes/heroes.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/heroes/hero-list/hero-list.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"],
    }
];
var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"]],
            declarations: [_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"], _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_5__["HeroListComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__["HeroDetailComponent"]]
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ }),

/***/ "./src/app/heroes/heroes/heroes.component.ts":
/*!***************************************************!*\
  !*** ./src/app/heroes/heroes/heroes.component.ts ***!
  \***************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/heroes/hero.service.ts");



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService // , private modalService: ModalService
    ) {
        this.heroService = heroService;
        this.message = '?';
        this.showModal = false;
        this.heroes$ = heroService.entities$;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.add = function (hero) {
        this.heroService.add(hero);
    };
    HeroesComponent.prototype.askToDelete = function (hero) {
        this.heroToDelete = hero;
        this.showModal = true;
        if (this.heroToDelete.name) {
            this.message = "Would you like to delete " + this.heroToDelete.name + "?";
        }
    };
    HeroesComponent.prototype.clear = function () {
        this.selected = null;
    };
    HeroesComponent.prototype.closeModal = function () {
        this.showModal = false;
    };
    HeroesComponent.prototype.deleteHero = function () {
        var _this = this;
        this.closeModal();
        if (this.heroToDelete) {
            this.heroService
                .delete(this.heroToDelete.id)
                .subscribe(function () { return (_this.heroToDelete = null); });
        }
        this.clear();
    };
    HeroesComponent.prototype.enableAddMode = function () {
        this.selected = {};
    };
    HeroesComponent.prototype.getHeroes = function () {
        this.heroService.getAll();
        this.clear();
    };
    HeroesComponent.prototype.save = function (hero) {
        if (this.selected && this.selected.name) {
            this.update(hero);
        }
        else {
            this.add(hero);
        }
    };
    HeroesComponent.prototype.select = function (hero) {
        this.selected = hero;
    };
    HeroesComponent.prototype.update = function (hero) {
        this.heroService.update(hero);
    };
    HeroesComponent.ctorParameters = function () { return [
        { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] // , private modalService: ModalService
         }
    ]; };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/index.js!./src/app/heroes/heroes/heroes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] // , private modalService: ModalService
        ])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=heroes-heroes-module-es5.js.map