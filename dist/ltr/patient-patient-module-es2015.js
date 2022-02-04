(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-module"],{

/***/ "AMsP":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.module.ts ***!
  \*******************************************/
/*! exports provided: PatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModule", function() { return PatientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _patient_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patient-routing.module */ "dP2w");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M4rk");





















class PatientModule {
}
PatientModule.ɵfac = function PatientModule_Factory(t) { return new (t || PatientModule)(); };
PatientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PatientModule });
PatientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7)),
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _patient_routing_module__WEBPACK_IMPORTED_MODULE_17__["PatientRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PatientModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _patient_routing_module__WEBPACK_IMPORTED_MODULE_17__["PatientRoutingModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7)),
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _patient_routing_module__WEBPACK_IMPORTED_MODULE_17__["PatientRoutingModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "dP2w":
/*!***************************************************!*\
  !*** ./src/app/patient/patient-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PatientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRoutingModule", function() { return PatientRoutingModule; });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M4rk");






const routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__["Page404Component"] },
];
class PatientRoutingModule {
}
PatientRoutingModule.ɵfac = function PatientRoutingModule_Factory(t) { return new (t || PatientRoutingModule)(); };
PatientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PatientRoutingModule });
PatientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PatientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=patient-patient-module-es2015.js.map