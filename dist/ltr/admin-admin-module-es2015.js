(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module"), __webpack_require__.e("default~dashboard-dashboard-module~patient-patient-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "pBKm")).then((m) => m.DashboardModule),
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



























class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__["MaterialFileInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7)),
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__["MaterialFileInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__["MaterialFileInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7)),
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map