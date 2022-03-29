(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-doctor-module"], {
    /***/
    "0Flv":
    /*!*****************************************!*\
      !*** ./src/app/doctor/doctor.module.ts ***!
      \*****************************************/

    /*! exports provided: DoctorModule */

    /***/
    function Flv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorModule", function () {
        return DoctorModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _doctor_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./doctor-routing.module */
      "dfoP");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "I5lE");

      var DoctorModule = /*#__PURE__*/_createClass(function DoctorModule() {
        _classCallCheck(this, DoctorModule);
      });

      DoctorModule.ɵfac = function DoctorModule_Factory(t) {
        return new (t || DoctorModule)();
      };

      DoctorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DoctorModule
      });
      DoctorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _doctor_routing_module__WEBPACK_IMPORTED_MODULE_23__["DoctorRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() | echarts */
            "echarts").then(__webpack_require__.t.bind(null,
            /*! echarts */
            "MT78", 7));
          }
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DoctorModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _doctor_routing_module__WEBPACK_IMPORTED_MODULE_23__["DoctorRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _doctor_routing_module__WEBPACK_IMPORTED_MODULE_23__["DoctorRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
              echarts: function echarts() {
                return __webpack_require__.e(
                /*! import() | echarts */
                "echarts").then(__webpack_require__.t.bind(null,
                /*! echarts */
                "MT78", 7));
              }
            }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dfoP":
    /*!*************************************************!*\
      !*** ./src/app/doctor/doctor-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: DoctorRoutingModule */

    /***/
    function dfoP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorRoutingModule", function () {
        return DoctorRoutingModule;
      });
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../authentication/page404/page404.component */
      "21P8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "I5lE");

      var routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: '**',
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__["Page404Component"]
      }];

      var DoctorRoutingModule = /*#__PURE__*/_createClass(function DoctorRoutingModule() {
        _classCallCheck(this, DoctorRoutingModule);
      });

      DoctorRoutingModule.ɵfac = function DoctorRoutingModule_Factory(t) {
        return new (t || DoctorRoutingModule)();
      };

      DoctorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DoctorRoutingModule
      });
      DoctorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DoctorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoctorRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=doctor-doctor-module-es5.js.map