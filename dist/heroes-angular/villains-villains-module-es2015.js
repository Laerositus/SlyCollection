(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["villains-villains-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/villains/villain-detail/villain-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/villains/villain-detail/villain-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card edit-detail\">\r\n  <header class=\"card-header\">\r\n    <p class=\"card-header-title\">\r\n      {{editingVillain.name}}\r\n      &nbsp;\r\n    </p>\r\n  </header>\r\n  <div class=\"card-content\">\r\n    <div class=\"content\">\r\n      <div class=\"field\" *ngIf=\"editingVillain.id\">\r\n        <label class=\"label\" for=\"id\">\r\n          id\r\n        </label>\r\n        <input name=\"id\" class=\"input\" type=\"text\" [(ngModel)]=\"editingVillain.id\" placeholder=\"e.g. VillainColleen\" readOnly />\r\n      </div>\r\n      <div class=\"field\">\r\n        <label class=\"label\" for=\"name\">\r\n          name\r\n        </label>\r\n        <input name=\"name\" class=\"input\" type=\"text\" [(ngModel)]=\"editingVillain.name\" placeholder=\"e.g. Colleen\" />\r\n      </div>\r\n      <div class=\"field\">\r\n        <label class=\"label\" for=\"description\">\r\n          description\r\n        </label>\r\n        <input name=\"description\" class=\"input\" type=\"text\" [(ngModel)]=\"editingVillain.description\" placeholder=\"dance fight!\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"card-footer \">\r\n    <app-button-footer class=\"card-footer-item\" [className]=\"'cancel-button'\" [iconClasses]=\"'fas fa-undo'\" (clicked)=\"clear()\"\r\n      label=\"Cancel\" [item]=\"editingVillain\"></app-button-footer>\r\n    <app-button-footer class=\"card-footer-item\" [className]=\"'save-button'\" [iconClasses]=\"'fas fa-save'\" (clicked)=\"saveVillain()\"\r\n      label=\"Save\" [item]=\"editingVillain\"></app-button-footer>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/villains/villain-list/villain-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/villains/villain-list/villain-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list\">\r\n  <li role=\"presentation\" *ngFor=\"let villain of villains; trackBy:byId; let i=index\">\r\n    <div class=\"card\">\r\n      <app-card-content\r\n      [name]=\"villain.name\" [description]=\"villain.description\"></app-card-content>\r\n      <footer class=\"card-footer\">\r\n        <app-button-footer class=\"card-footer-item\"\r\n          [className]=\"'delete-item'\"\r\n          [iconClasses]=\"'fas fa-trash'\"\r\n          (clicked)=\"deleteVillain($event)\"\r\n          label=\"Delete\"\r\n          [item]=\"villain\"></app-button-footer>\r\n        <app-button-footer class=\"card-footer-item\"\r\n          [className]=\"'edit-item'\"\r\n          [iconClasses]=\"'fas fa-edit'\"\r\n          (clicked)=\"selectVillain($event)\"\r\n          label=\"Edit\"\r\n          [item]=\"villain\"></app-button-footer>\r\n      </footer>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/villains/villains/villains.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/villains/villains/villains.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\r\n  <app-list-header title=\"Villains\" (add)=\"enableAddMode()\" (refresh)=\"getVillains()\"></app-list-header>\r\n  <div class=\"columns is-multiline is-variable\">\r\n    <div class=\"column is-8\" *ngIf=\"villains$ | async as villains\">\r\n      <app-villain-list *ngIf=\"!selected\" [villains]=\"villains\" [selectedVillain]=\"selected\" (selected)=\"select($event)\"\r\n        (deleted)=\"askToDelete($event)\"></app-villain-list>\r\n      <app-villain-detail *ngIf=\"selected\" [villain]=\"selected\" (unselect)=\"clear()\" (save)=\"save($event)\"></app-villain-detail>\r\n    </div>\r\n  </div>\r\n\r\n  <app-modal class=\"modal-villain\" [message]=\"message\" [isOpen]=\"showModal\" (handleNo)=\"closeModal()\" (handleYes)=\"deleteVillain()\"></app-modal>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/villains/villain-detail/villain-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/villains/villain-detail/villain-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: VillainDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillainDetailComponent", function() { return VillainDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



let VillainDetailComponent = class VillainDetailComponent {
    constructor() {
        this.unselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addMode = false;
    }
    ngOnChanges(changes) {
        if (this.villain && this.villain.id) {
            this.editingVillain = Object.assign({}, this.villain);
            this.addMode = false;
        }
        else {
            this.editingVillain = { id: undefined, name: '', description: '' };
            this.addMode = true;
        }
    }
    clear() {
        this.unselect.emit();
    }
    saveVillain() {
        this.save.emit(this.editingVillain);
        this.clear();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Villain"])
], VillainDetailComponent.prototype, "villain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VillainDetailComponent.prototype, "unselect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VillainDetailComponent.prototype, "save", void 0);
VillainDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-villain-detail',
        template: __webpack_require__(/*! raw-loader!./villain-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/villains/villain-detail/villain-detail.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], VillainDetailComponent);



/***/ }),

/***/ "./src/app/villains/villain-list/villain-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/villains/villain-list/villain-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: VillainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillainListComponent", function() { return VillainListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



let VillainListComponent = class VillainListComponent {
    constructor() {
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    byId(villain) {
        return villain.id;
    }
    selectVillain(villain) {
        this.selected.emit(villain);
    }
    deleteVillain(villain) {
        this.deleted.emit(villain);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], VillainListComponent.prototype, "villains", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core__WEBPACK_IMPORTED_MODULE_2__["Villain"])
], VillainListComponent.prototype, "selectedVillain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VillainListComponent.prototype, "deleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VillainListComponent.prototype, "selected", void 0);
VillainListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-villain-list',
        template: __webpack_require__(/*! raw-loader!./villain-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/villains/villain-list/villain-list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], VillainListComponent);



/***/ }),

/***/ "./src/app/villains/villain.service.ts":
/*!*********************************************!*\
  !*** ./src/app/villains/villain.service.ts ***!
  \*********************************************/
/*! exports provided: VillainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillainService", function() { return VillainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ "./node_modules/@ngrx/data/fesm2015/data.js");



let VillainService = class VillainService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Villain', serviceElementsFactory);
    }
};
VillainService.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"] }
];
VillainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"]])
], VillainService);



/***/ }),

/***/ "./src/app/villains/villains.module.ts":
/*!*********************************************!*\
  !*** ./src/app/villains/villains.module.ts ***!
  \*********************************************/
/*! exports provided: VillainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillainsModule", function() { return VillainsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _villain_detail_villain_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./villain-detail/villain-detail.component */ "./src/app/villains/villain-detail/villain-detail.component.ts");
/* harmony import */ var _villain_list_villain_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./villain-list/villain-list.component */ "./src/app/villains/villain-list/villain-list.component.ts");
/* harmony import */ var _villains_villains_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./villains/villains.component */ "./src/app/villains/villains/villains.component.ts");








const routes = [
    {
        path: '',
        component: _villains_villains_component__WEBPACK_IMPORTED_MODULE_7__["VillainsComponent"]
    }
];
let VillainsModule = class VillainsModule {
};
VillainsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _villains_villains_component__WEBPACK_IMPORTED_MODULE_7__["VillainsComponent"]],
        declarations: [
            _villains_villains_component__WEBPACK_IMPORTED_MODULE_7__["VillainsComponent"],
            _villain_list_villain_list_component__WEBPACK_IMPORTED_MODULE_6__["VillainListComponent"],
            _villain_detail_villain_detail_component__WEBPACK_IMPORTED_MODULE_5__["VillainDetailComponent"]
        ]
    })
], VillainsModule);



/***/ }),

/***/ "./src/app/villains/villains/villains.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/villains/villains/villains.component.ts ***!
  \*********************************************************/
/*! exports provided: VillainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillainsComponent", function() { return VillainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _villain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../villain.service */ "./src/app/villains/villain.service.ts");



let VillainsComponent = class VillainsComponent {
    constructor(villainService // , private modalService: ModalService
    ) {
        this.villainService = villainService;
        this.message = '?';
        this.showModal = false;
        this.villains$ = villainService.entities$;
    }
    ngOnInit() {
        this.getVillains();
    }
    add(villain) {
        this.villainService.add(villain);
    }
    askToDelete(villain) {
        this.villainToDelete = villain;
        this.showModal = true;
        if (this.villainToDelete.name) {
            this.message = `Would you like to delete ${this.villainToDelete.name}?`;
        }
    }
    clear() {
        this.selected = null;
    }
    closeModal() {
        this.showModal = false;
    }
    deleteVillain() {
        this.closeModal();
        if (this.villainToDelete) {
            this.villainService
                .delete(this.villainToDelete.id)
                .subscribe(() => (this.villainToDelete = null));
        }
        this.clear();
    }
    enableAddMode() {
        this.selected = {};
    }
    getVillains() {
        this.villainService.getAll();
        this.clear();
    }
    save(villain) {
        if (this.selected && this.selected.name) {
            this.update(villain);
        }
        else {
            this.add(villain);
        }
    }
    select(villain) {
        this.selected = villain;
    }
    update(villain) {
        this.villainService.update(villain);
    }
};
VillainsComponent.ctorParameters = () => [
    { type: _villain_service__WEBPACK_IMPORTED_MODULE_2__["VillainService"] // , private modalService: ModalService
     }
];
VillainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-villains',
        template: __webpack_require__(/*! raw-loader!./villains.component.html */ "./node_modules/raw-loader/index.js!./src/app/villains/villains/villains.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_villain_service__WEBPACK_IMPORTED_MODULE_2__["VillainService"] // , private modalService: ModalService
    ])
], VillainsComponent);



/***/ })

}]);
//# sourceMappingURL=villains-villains-module-es2015.js.map