(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "MXfZ":
    /*!*************************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function MXfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../patient/dashboard/dashboard.component */
      "M4rk");
      /* harmony import */


      var _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../doctor/dashboard/dashboard.component */
      "I5lE");
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../authentication/page404/page404.component */
      "21P8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main/main.component */
      "QLu+");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "g2Pu");

      var routes = [{
        path: "",
        redirectTo: "main",
        pathMatch: "full"
      }, {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
      }, {
        path: "dashboard2",
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"]
      }, {
        path: "doctor-dashboard",
        component: _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
      }, {
        path: "patient-dashboard",
        component: _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
      }, {
        path: "**",
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"]
      }];

      var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      });

      DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DashboardRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "QLu+":
    /*!********************************************************!*\
      !*** ./src/app/admin/dashboard/main/main.component.ts ***!
      \********************************************************/

    /*! exports provided: MainComponent */

    /***/
    function QLu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.smallChart1();
            this.smallChart2();
            this.smallChart3();
            this.smallChart4();
            this.chart1();
            this.chart2();
          }
        }, {
          key: "smallChart1",
          value: function smallChart1() {
            this.cardChart1 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart1Data = [{
              label: 'New Patients',
              data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
              borderWidth: 4,
              pointStyle: 'circle',
              pointRadius: 4,
              borderColor: 'rgba(103,119,239,.7)',
              pointBackgroundColor: 'rgba(103,119,239,.2)',
              backgroundColor: 'rgba(103,119,239,.2)',
              pointBorderColor: 'transparent'
            }];
            this.cardChart1Label = ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'];
          }
        }, {
          key: "smallChart2",
          value: function smallChart2() {
            this.cardChart2 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart2Data = [{
              label: 'New Patients',
              data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
              borderWidth: 4,
              pointStyle: 'circle',
              pointRadius: 4,
              borderColor: 'rgba(253,126,20,.7)',
              pointBackgroundColor: 'rgba(253,126,20,.2)',
              backgroundColor: 'rgba(253,126,20,.2)',
              pointBorderColor: 'transparent'
            }];
            this.cardChart2Label = ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'];
          }
        }, {
          key: "smallChart3",
          value: function smallChart3() {
            this.cardChart3 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart3Data = [{
              label: 'New Patients',
              data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
              borderWidth: 4,
              pointStyle: 'circle',
              pointRadius: 4,
              borderColor: 'rgba(40,167,69,.7)',
              pointBackgroundColor: 'rgba(40,167,69,.2)',
              backgroundColor: 'rgba(40,167,69,.2)',
              pointBorderColor: 'transparent'
            }];
            this.cardChart3Label = ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'];
          }
        }, {
          key: "smallChart4",
          value: function smallChart4() {
            this.cardChart4 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart4Data = [{
              label: 'New Patients',
              data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
              borderWidth: 4,
              pointStyle: 'circle',
              pointRadius: 4,
              borderColor: 'rgba(0,123,255,.7)',
              pointBackgroundColor: 'rgba(0,123,255,.2)',
              backgroundColor: 'rgba(0,123,255,.2)',
              pointBorderColor: 'transparent'
            }];
            this.cardChart4Label = ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'];
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.areaChartOptions = {
              series: [{
                name: 'New Patients',
                data: [31, 40, 28, 51, 42, 85, 77]
              }, {
                name: 'Old Patients',
                data: [11, 32, 45, 32, 34, 52, 41]
              }],
              chart: {
                height: 350,
                type: 'area',
                toolbar: {
                  show: false
                },
                foreColor: '#9aa0ac'
              },
              colors: ['#407fe4', '#908e8e'],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['2018-09-19', '2018-09-20', '2018-09-21', '2018-09-22', '2018-09-23', '2018-09-24', '2018-09-25']
              },
              legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                offsetX: 0,
                offsetY: 0
              },
              tooltip: {
                theme: 'dark',
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.barChartOptions = {
              series: [{
                name: 'Colds and Flu',
                data: [44, 55, 41, 67, 22, 43]
              }, {
                name: 'Headaches',
                data: [13, 23, 20, 8, 13, 27]
              }, {
                name: 'Malaria',
                data: [11, 17, 15, 15, 21, 14]
              }, {
                name: 'Typhoid',
                data: [21, 7, 25, 13, 22, 8]
              }],
              chart: {
                type: 'bar',
                height: 350,
                foreColor: '#9aa0ac',
                stacked: true,
                toolbar: {
                  show: false
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '30%'
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                type: 'category',
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              legend: {
                show: false
              },
              fill: {
                opacity: 0.8,
                colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F']
              },
              tooltip: {
                theme: 'dark',
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 555,
        vars: 43,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "card", "card-statistic-2"], [1, "clearfix"], [1, "card-icon", "shadow-primary", "bg-purple"], [1, "material-icons", "align-middle"], [1, "float-right", "m-4"], [1, "pull-right"], [1, "m-r-10", "m-l-10"], [1, "font-weight-bold", "pull-right", "mb-0"], [1, "card-chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "card-icon", "shadow-primary", "bg-orange"], [1, "card-icon", "shadow-primary", "bg-green"], [1, "card-icon", "shadow-primary", "bg-blue"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["href", "mailto:test@gmail.com"], [1, "badge", "col-red"], ["mat-icon-button", ""], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "badge", "col-purple"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "badge", "col-brown"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "media-title"], [1, "text-job", "font-11"], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "table"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 650");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "content_cut");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 54");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "person_add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "New Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 129");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "local_activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Hospital Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " $20,125");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Hospital Survay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "apx-chart", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Common Diseases Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "apx-chart", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Booked Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Patient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Assigned Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Fever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Dr.Rajesh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Typhod");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Maleria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Doctors List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Doctor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "(BDS,MDS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "(BHMS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "(MBBS,MS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "(MBBS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "table", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Parient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Doctors Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Date Of Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "12-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Cancer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "14-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Fracture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "18-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Cataract surgery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "20-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Cholecystectomy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "22-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Hysterectomy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](538, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "28-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "back pain surgery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart1Data)("labels", ctx.cardChart1Label)("options", ctx.cardChart1)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart2Data)("labels", ctx.cardChart2Label)("options", ctx.cardChart2)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart3Data)("labels", ctx.cardChart3Label)("options", ctx.cardChart3)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart4Data)("labels", ctx.cardChart4Label)("options", ctx.cardChart4)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("responsive", ctx.barChartOptions.responsive)("xaxis", ctx.barChartOptions.xaxis)("tooltip", ctx.barChartOptions.tooltip)("legend", ctx.barChartOptions.legend)("fill", ctx.barChartOptions.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "g2Pu":
    /*!********************************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.ts ***!
      \********************************************************************/

    /*! exports provided: Dashboard2Component */

    /***/
    function g2Pu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function () {
        return Dashboard2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");

      var Dashboard2Component = /*#__PURE__*/function () {
        // Doughnut chart end
        function Dashboard2Component() {
          _classCallCheck(this, Dashboard2Component);

          //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
          // Doughnut chart start
          this.doughnutChartLabels = ["India", "USA", "Itely"];
          this.doughnutChartData = [45, 25, 30];
          this.doughnutChartLegend = false;
          this.doughnutChartColors = [{
            backgroundColor: ["#735A84", "#E76412", "#9BC311"]
          }];
          this.doughnutChartType = "doughnut";
          this.doughnutChartOptions = {
            animation: false,
            responsive: true
          };
        }

        _createClass(Dashboard2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart1();
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.lineChartOptions = {
              series: [{
                name: "Doctor 1",
                data: [70, 200, 80, 180, 170, 105, 210]
              }, {
                name: "Doctor 2",
                data: [80, 250, 30, 120, 260, 100, 180]
              }, {
                name: "Doctor 3",
                data: [85, 130, 85, 225, 80, 190, 120]
              }],
              chart: {
                height: 350,
                type: "line",
                foreColor: "#9aa0ac",
                dropShadow: {
                  enabled: true,
                  color: "#000",
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ["#A5A5A5", "#875692", "#4CB5AC"],
              stroke: {
                curve: "smooth"
              },
              grid: {
                row: {
                  colors: ["transparent", "transparent"],
                  opacity: 0.5
                }
              },
              markers: {
                size: 3
              },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: {
                  text: "Month"
                }
              },
              yaxis: {
                // opposite: true,
                title: {
                  text: "Patients"
                }
              },
              legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5
              },
              tooltip: {
                theme: "dark",
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }]);

        return Dashboard2Component;
      }();

      Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) {
        return new (t || Dashboard2Component)();
      };

      Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Dashboard2Component,
        selectors: [["app-dashboard2"]],
        decls: 624,
        vars: 24,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-10"], [1, "col", "col-block"], [1, "font-14"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "74", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-74"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-70"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-55"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "col-md-12", "col-xl-4", "d-flex", "flex-column", "justify-content-center"], [1, "ml-xl-3", "m-b-20"], [1, "font-weight-light", "col-green"], [1, "mb-2"], [1, "ml-xl-3"], [1, "font-weight-light", "col-orange"], [1, "col-md-12", "col-xl-8"], [1, "col-md-6"], [1, "tx-primary", "m-b-30"], [1, "progress-list", "m-b-10"], [1, "details"], [1, "title"], [1, "status"], [1, "progress-xs", "not-rounded", "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "width-per-40"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-49"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-blue", "width-per-65"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-28"], ["role", "progressbar", "aria-valuenow", "16", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-hotpink", "width-per-16"], [1, "col-md-6", "mt-3"], ["baseChart", "", 1, "chart", 3, "data", "labels", "options", "legend", "chartType", "colors"], [1, "country-chart"], [1, "d-flex", "justify-content-between", "mx-xl-5", "mt-3"], [1, "chart-note"], [1, "dot", "dot-product", "bg-green"], [1, "mb-0"], [1, "dot", "dot-product", "bg-orange"], [1, "dot", "dot-product", "bg-purple"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "patient-group-list"], [1, "media-body", "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "media-cta"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], [1, "recent-comment", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "notice-board"], [1, "table-img"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-red"], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "tableBody"], [1, "table-responsive"], ["id", "support_table", 1, "table", "display", "product-overview", "mb-30"], [1, "badge", "col-green"], ["mat-icon-button", ""], [1, "col-red"], [1, "badge", "col-red"], [1, "badge", "col-cyan"], [1, "badge", "col-purple"], [1, "badge", "col-brown"], [1, "badge", "col-blue"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "apx-chart", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Patient Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "825");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "22,067");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "74%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Income Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$1,247");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "$22,568");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$65,147");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Expense Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "$723");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "$12,451");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$35,589");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "55%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "$1,17,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Total Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "$1,17,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Total Expense");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Country Wise Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "49%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "France");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "65");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "28%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "16%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "canvas", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Itely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "$30,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "$25,968");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "$45,278");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Patients Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "ul", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Cholesterol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "5 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Diabetic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "14 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Low Blood Pressure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "10 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Hypertension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "21 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "11 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Dental Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "17 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h6", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Dr. Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "7 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "h6", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Dr. Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h6", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Dr. Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "h6", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Dr. Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h6", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Dr. Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " 5 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " 8 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " 10 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " 5 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "table", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Assigned Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Date Of Admit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "Room No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Dr.Kenny Josh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "27/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Influenza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "101");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Dr. Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "26/05/2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Dr.Cinnabar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "21/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Amoebiasis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "106");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "David Perry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "Dr.Felix ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "20/04/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Dr.Beryl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "24/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Leptospirosis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "102");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Alan Gilchrist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Dr.Joshep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "22/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "Hepatitis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Dr.Jayesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "18/06/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Typhoid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "Sue Woodger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "Dr.Sharma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "17/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "108");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("legend", ctx.doughnutChartLegend)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-dashboard2",
            templateUrl: "./dashboard2.component.html",
            styleUrls: ["./dashboard2.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pBKm":
    /*!*****************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function pBKm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "MXfZ");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "QLu+");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "g2Pu");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");

      var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      });

      DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard2Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map