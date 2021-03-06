(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments-appointments-module"], {
    /***/
    "+qHA":
    /*!***********************************************************************************!*\
      !*** ./src/app/patient/appointments/past-appointment/past-appointment.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: PastAppointmentService */

    /***/
    function qHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PastAppointmentService", function () {
        return PastAppointmentService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PastAppointmentService = /*#__PURE__*/function () {
        function PastAppointmentService(httpClient) {
          _classCallCheck(this, PastAppointmentService);

          this.httpClient = httpClient;
          this.API_URL = "assets/data/past-appointment.json";
          this.isTblLoading = true;
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(PastAppointmentService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllPastAppointment",
          value: function getAllPastAppointment() {
            var _this = this;

            this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this.isTblLoading = false;

              _this.dataChange.next(data);
            }, function (error) {
              _this.isTblLoading = false;
              console.log(error.name + " " + error.message);
            });
          }
        }, {
          key: "addPastAppointment",
          value: function addPastAppointment(appointment) {
            this.dialogData = appointment;
            /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
              this.dialogData = appointment;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updatePastAppointment",
          value: function updatePastAppointment(appointment) {
            this.dialogData = appointment;
            /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
              this.dialogData = appointment;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deletePastAppointment",
          value: function deletePastAppointment(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }]);

        return PastAppointmentService;
      }();

      PastAppointmentService.??fac = function PastAppointmentService_Factory(t) {
        return new (t || PastAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PastAppointmentService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: PastAppointmentService,
        factory: PastAppointmentService.??fac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PastAppointmentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6dwX":
    /*!***************************************************************************************!*\
      !*** ./src/app/patient/appointments/today-appointment/today-appointment.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TodayAppointmentComponent */

    /***/
    function dwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodayAppointmentComponent", function () {
        return TodayAppointmentComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var TodayAppointmentComponent = /*#__PURE__*/function () {
        function TodayAppointmentComponent() {
          _classCallCheck(this, TodayAppointmentComponent);
        }

        _createClass(TodayAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TodayAppointmentComponent;
      }();

      TodayAppointmentComponent.??fac = function TodayAppointmentComponent_Factory(t) {
        return new (t || TodayAppointmentComponent)();
      };

      TodayAppointmentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TodayAppointmentComponent,
        selectors: [["app-today-appointment"]],
        decls: 303,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/patient/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "body"], [1, "list-unstyled", "user-progress", "list-unstyled-border", "list-unstyled-noborder"], [1, "app-list"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig1.jpg", 1, "mr-3", "rounded-circle"], [1, "media-body"], [1, "media-title", "font-16"], [1, "text-job", "text-muted", "mb-0"], [1, "media-title", "text-muted", "mb-0"], [1, "text-job", "font-16"], [1, "col-green"], [1, "media-cta"], ["mat-icon-button", "", 1, "btn-tbl-confirm"], ["mat-icon-button", "", 1, "btn-tbl-reject"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig2.jpg", 1, "mr-3", "rounded-circle"], [1, "col-red"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig3.jpg", 1, "mr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig4.jpg", 1, "mr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig6.jpg", 1, "mr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig7.jpg", 1, "mr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig8.jpg", 1, "mr-3", "rounded-circle"], [1, "col-orange"]],
        template: function TodayAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Today's Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Dr.Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Radiologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "09:00-10:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "CT scans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "+123 676545655");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Grand Plains Clinic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Dr.John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Cardiologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "11:00-11:30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "heart checkup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "+123 434656764");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Genesis Hospital");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Dr.Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Otolaryngologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "09:15-10:15 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Diseases Of The Ear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "+123 45345673");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Genesis Laboratory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Dr.Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Dentist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "11:00-12:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Root Canal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "+123 87654533");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Clemency Hospital");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Dr.Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Endocrinologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "04:00-05:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Diabetes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "+123 45678345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Hopevale Clinic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Dr.Jamie Blair");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Radiologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "05:00-05:30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Diabetes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "+123 45678345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Pinevale Medical Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Dr.Nikki Barton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Endocrinologist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "12 June '20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "06:00-07:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "Treatement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "X-Ray");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "+123 45678345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Hopevale Clinic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RheS1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TodayAppointmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-today-appointment',
            templateUrl: './today-appointment.component.html',
            styleUrls: ['./today-appointment.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9beF":
    /*!*********************************************************************!*\
      !*** ./src/app/patient/appointments/appointments-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AppointmentsRoutingModule */

    /***/
    function beF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentsRoutingModule", function () {
        return AppointmentsRoutingModule;
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


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../authentication/page404/page404.component */
      "21P8");
      /* harmony import */


      var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./upcoming-appointment/upcoming-appointment.component */
      "L+1L");
      /* harmony import */


      var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./past-appointment/past-appointment.component */
      "OZmR");
      /* harmony import */


      var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./today-appointment/today-appointment.component */
      "6dwX");

      var routes = [{
        path: 'today',
        component: _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_5__["TodayAppointmentComponent"]
      }, {
        path: 'upcoming',
        component: _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_3__["UpcomingAppointmentComponent"]
      }, {
        path: 'past',
        component: _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_4__["PastAppointmentComponent"]
      }, {
        path: '**',
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"]
      }];

      var AppointmentsRoutingModule = /*#__PURE__*/_createClass(function AppointmentsRoutingModule() {
        _classCallCheck(this, AppointmentsRoutingModule);
      });

      AppointmentsRoutingModule.??fac = function AppointmentsRoutingModule_Factory(t) {
        return new (t || AppointmentsRoutingModule)();
      };

      AppointmentsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppointmentsRoutingModule
      });
      AppointmentsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppointmentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppointmentsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Jw3p":
    /*!*******************************************************************************************!*\
      !*** ./src/app/patient/appointments/today-appointment/dialogs/delete/delete.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DeleteComponent */

    /***/
    function Jw3p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
        return DeleteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeleteComponent = /*#__PURE__*/function () {
        function DeleteComponent() {
          _classCallCheck(this, DeleteComponent);
        }

        _createClass(DeleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteComponent;
      }();

      DeleteComponent.??fac = function DeleteComponent_Factory(t) {
        return new (t || DeleteComponent)();
      };

      DeleteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DeleteComponent,
        selectors: [["app-delete"]],
        decls: 2,
        vars: 0,
        template: function DeleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "delete works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "KMyl":
    /*!*******************************************************************************************!*\
      !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UpcomingAppointmentService */

    /***/
    function KMyl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpcomingAppointmentService", function () {
        return UpcomingAppointmentService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UpcomingAppointmentService = /*#__PURE__*/function () {
        function UpcomingAppointmentService(httpClient) {
          _classCallCheck(this, UpcomingAppointmentService);

          this.httpClient = httpClient;
          this.API_URL = "assets/data/upcoming-appointment.json";
          this.isTblLoading = true;
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(UpcomingAppointmentService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllUpcomingAppointment",
          value: function getAllUpcomingAppointment() {
            var _this2 = this;

            this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this2.isTblLoading = false;

              _this2.dataChange.next(data);
            }, function (error) {
              _this2.isTblLoading = false;
              console.log(error.name + " " + error.message);
            });
          }
        }, {
          key: "addUpcomingAppointment",
          value: function addUpcomingAppointment(appointment) {
            this.dialogData = appointment;
            /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
              this.dialogData = appointment;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updateUpcomingAppointment",
          value: function updateUpcomingAppointment(appointment) {
            this.dialogData = appointment;
            /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
              this.dialogData = appointment;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deleteUpcomingAppointment",
          value: function deleteUpcomingAppointment(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }]);

        return UpcomingAppointmentService;
      }();

      UpcomingAppointmentService.??fac = function UpcomingAppointmentService_Factory(t) {
        return new (t || UpcomingAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UpcomingAppointmentService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UpcomingAppointmentService,
        factory: UpcomingAppointmentService.??fac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpcomingAppointmentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KY0j":
    /*!*****************************************************************************************!*\
      !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.model.ts ***!
      \*****************************************************************************************/

    /*! exports provided: UpcomingAppointment */

    /***/
    function KY0j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpcomingAppointment", function () {
        return UpcomingAppointment;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UpcomingAppointment = /*#__PURE__*/function () {
        function UpcomingAppointment(appointment) {
          _classCallCheck(this, UpcomingAppointment);

          {
            this.id = appointment.id || this.getRandomID();
            this.img = appointment.avatar || 'assets/images/user/user1.jpg';
            this.name = appointment.name || '';
            this.email = appointment.email || '';
            this.gender = appointment.gender || 'male';
            this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.time = appointment.time || '';
            this.mobile = appointment.mobile || '';
            this.doctor = appointment.mobile || '';
            this.injury = appointment.mobile || '';
          }
        }

        _createClass(UpcomingAppointment, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return UpcomingAppointment;
      }();
      /***/

    },

    /***/
    "L+1L":
    /*!*********************************************************************************************!*\
      !*** ./src/app/patient/appointments/upcoming-appointment/upcoming-appointment.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: UpcomingAppointmentComponent, ExampleDataSource */

    /***/
    function L1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpcomingAppointmentComponent", function () {
        return UpcomingAppointmentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function () {
        return ExampleDataSource;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upcoming-appointment.service */
      "KMyl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      "yxCr");
      /* harmony import */


      var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dialogs/delete/delete.component */
      "mMJY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = ["filter"];

      function UpcomingAppointmentComponent_mat_header_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UpcomingAppointmentComponent_mat_header_cell_54_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return $event ? ctx_r27.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function UpcomingAppointmentComponent_mat_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_55_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function UpcomingAppointmentComponent_mat_cell_55_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32);

            var row_r29 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return $event ? ctx_r31.selection.toggle(row_r29) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r33.id);
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-5");
        }
      }

      function UpcomingAppointmentComponent_mat_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Doctor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r35.doctor, "");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r36.email, "");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Appo. Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, row_r37.date, "MM/dd/yyyy"), " ");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Appo. Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r38.time, "");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r39.mobile, "");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Injury/Condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r40.injury, "");
        }
      }

      function UpcomingAppointmentComponent_mat_header_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_cell_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_82_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          })("click", function UpcomingAppointmentComponent_mat_cell_82_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var row_r41 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r44.editCall(row_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_mat_cell_82_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function UpcomingAppointmentComponent_mat_cell_82_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var i_r42 = ctx.index;
            var row_r41 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r47.deleteItem(i_r42, row_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UpcomingAppointmentComponent_mat_header_row_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function UpcomingAppointmentComponent_mat_row_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-row", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_mat_row_84_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r50);

            var row_r48 = ctx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r49.editCall(row_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("cursor", "pointer");
        }
      }

      function UpcomingAppointmentComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-progress-spinner", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 40);
        }
      }

      function UpcomingAppointmentComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var UpcomingAppointmentComponent = /*#__PURE__*/function () {
        function UpcomingAppointmentComponent(httpClient, dialog, appointmentService, snackBar) {
          _classCallCheck(this, UpcomingAppointmentComponent);

          this.httpClient = httpClient;
          this.dialog = dialog;
          this.appointmentService = appointmentService;
          this.snackBar = snackBar;
          this.displayedColumns = ["select", "img", "doctor", "date", "time", "email", "mobile", "injury", "actions"];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        }

        _createClass(UpcomingAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.loadData();
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this3 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this3.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this4 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this4.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this4.exampleDatabase.dataChange.value.splice(index, 1);

              _this4.refreshTable();

              _this4.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
            });
            this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
          }
        }, {
          key: "addNew",
          value: function addNew() {
            var _this5 = this;

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                appointment: this.appointment,
                action: "add"
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this5.exampleDatabase.dataChange.value.unshift(_this5.appointmentService.getDialogData());

                _this5.refreshTable();

                _this5.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
              }
            });
          }
        }, {
          key: "editCall",
          value: function editCall(row) {
            var _this6 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                appointment: row,
                action: "edit"
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this6.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this6.id;
                }); // Then you update that record using data from dialogData (values you enetered)


                _this6.exampleDatabase.dataChange.value[foundIndex] = _this6.appointmentService.getDialogData(); // And lastly refresh table

                _this6.refreshTable();

                _this6.showNotification("black", "Edit Record Successfully...!!!", "bottom", "center");
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(i, row) {
            var _this7 = this;

            this.index = i;
            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
              data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this7.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this7.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this7.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this7.refreshTable();

                _this7.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
              }
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this8 = this;

            this.exampleDatabase = new _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__["UpcomingAppointmentService"](this.httpClient);
            this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.filter.nativeElement, "keyup").subscribe(function () {
              if (!_this8.dataSource) {
                return;
              }

              _this8.dataSource.filter = _this8.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, "", {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return UpcomingAppointmentComponent;
      }();

      UpcomingAppointmentComponent.??fac = function UpcomingAppointmentComponent_Factory(t) {
        return new (t || UpcomingAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__["UpcomingAppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      UpcomingAppointmentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UpcomingAppointmentComponent,
        selectors: [["app-upcoming-appointment"]],
        viewQuery: function UpcomingAppointmentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.filter = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"],
          useValue: "en-GB"
        }])],
        decls: 89,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/patient/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "doctor"], ["matColumnDef", "email"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "mobile"], ["matColumnDef", "injury"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5"], [3, "src"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]],
        template: function UpcomingAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Upcoming");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Upcoming Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Upcoming Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_36_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_43_listener() {
              return ctx.addNew();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpcomingAppointmentComponent_Template_button_click_48_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-table", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](53, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, UpcomingAppointmentComponent_mat_header_cell_54_Template, 2, 4, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, UpcomingAppointmentComponent_mat_cell_55_Template, 2, 3, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](56, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, UpcomingAppointmentComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, UpcomingAppointmentComponent_mat_cell_58_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](59, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, UpcomingAppointmentComponent_mat_header_cell_60_Template, 2, 1, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, UpcomingAppointmentComponent_mat_cell_61_Template, 2, 1, "mat-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](62, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, UpcomingAppointmentComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, UpcomingAppointmentComponent_mat_cell_64_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](65, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, UpcomingAppointmentComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, UpcomingAppointmentComponent_mat_cell_67_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](68, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, UpcomingAppointmentComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, UpcomingAppointmentComponent_mat_cell_70_Template, 3, 4, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](71, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, UpcomingAppointmentComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, UpcomingAppointmentComponent_mat_cell_73_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](74, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, UpcomingAppointmentComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, UpcomingAppointmentComponent_mat_cell_76_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](77, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, UpcomingAppointmentComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, UpcomingAppointmentComponent_mat_cell_79_Template, 2, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](80, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, UpcomingAppointmentComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, UpcomingAppointmentComponent_mat_cell_82_Template, 7, 0, "mat-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, UpcomingAppointmentComponent_mat_header_row_83_Template, 1, 0, "mat-header-row", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, UpcomingAppointmentComponent_mat_row_84_Template, 1, 2, "mat-row", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](85, UpcomingAppointmentComponent_div_85_Template, 2, 1, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, UpcomingAppointmentComponent_div_86_Template, 2, 2, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "mat-paginator", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGNvbWluZy1hcHBvaW50bWVudC5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpcomingAppointmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-upcoming-appointment",
            templateUrl: "./upcoming-appointment.component.html",
            styleUrls: ["./upcoming-appointment.component.sass"],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"],
              useValue: "en-GB"
            }]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_1__["UpcomingAppointmentService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
              "static": true
            }]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["filter", {
              "static": true
            }]
          }]
        });
      })();

      var ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(ExampleDataSource, _angular_cdk_collecti);

        var _super = _createSuper(ExampleDataSource);

        function ExampleDataSource(exampleDatabase, paginator, _sort) {
          var _this9;

          _classCallCheck(this, ExampleDataSource);

          _this9 = _super.call(this);
          _this9.exampleDatabase = exampleDatabase;
          _this9.paginator = paginator;
          _this9._sort = _sort;
          _this9.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]("");
          _this9.filteredData = [];
          _this9.renderedData = []; // Reset to the first page when the user changes the filter.

          _this9.filterChange.subscribe(function () {
            return _this9.paginator.pageIndex = 0;
          });

          return _this9;
        }

        _createClass(ExampleDataSource, [{
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
          /** Connect function called by the table to retrieve one stream containing the data to render. */

        }, {
          key: "connect",
          value: function connect() {
            var _this10 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllUpcomingAppointment();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
              // Filter data
              _this10.filteredData = _this10.exampleDatabase.data.slice().filter(function (appointment) {
                var searchStr = (appointment.email + appointment.date + appointment.time + appointment.doctor + appointment.injury + appointment.mobile).toLowerCase();
                return searchStr.indexOf(_this10.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this10.sortData(_this10.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this10.paginator.pageIndex * _this10.paginator.pageSize;
              _this10.renderedData = sortedData.splice(startIndex, _this10.paginator.pageSize);
              return _this10.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this11 = this;

            if (!this._sort.active || this._sort.direction === "") {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = "";
              var propertyB = "";

              switch (_this11._sort.active) {
                case "id":
                  var _ref = [a.id, b.id];
                  propertyA = _ref[0];
                  propertyB = _ref[1];
                  break;

                case "doctor":
                  var _ref2 = [a.name, b.name];
                  propertyA = _ref2[0];
                  propertyB = _ref2[1];
                  break;

                case "email":
                  var _ref3 = [a.email, b.email];
                  propertyA = _ref3[0];
                  propertyB = _ref3[1];
                  break;

                case "date":
                  var _ref4 = [a.date, b.date];
                  propertyA = _ref4[0];
                  propertyB = _ref4[1];
                  break;

                case "time":
                  var _ref5 = [a.time, b.time];
                  propertyA = _ref5[0];
                  propertyB = _ref5[1];
                  break;

                case "mobile":
                  var _ref6 = [a.mobile, b.mobile];
                  propertyA = _ref6[0];
                  propertyB = _ref6[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this11._sort.direction === "asc" ? 1 : -1);
            });
          }
        }]);

        return ExampleDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]);
      /***/

    },

    /***/
    "OZmR":
    /*!*************************************************************************************!*\
      !*** ./src/app/patient/appointments/past-appointment/past-appointment.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PastAppointmentComponent, ExampleDataSource */

    /***/
    function OZmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PastAppointmentComponent", function () {
        return PastAppointmentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function () {
        return ExampleDataSource;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _past_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./past-appointment.service */
      "+qHA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialogs/delete/delete.component */
      "oatb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = ["filter"];

      function PastAppointmentComponent_mat_header_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function PastAppointmentComponent_mat_header_cell_42_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return $event ? ctx_r27.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function PastAppointmentComponent_mat_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PastAppointmentComponent_mat_cell_43_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function PastAppointmentComponent_mat_cell_43_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32);

            var row_r29 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return $event ? ctx_r31.selection.toggle(row_r29) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
        }
      }

      function PastAppointmentComponent_mat_header_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r33.id);
        }
      }

      function PastAppointmentComponent_mat_header_cell_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "tbl-col-width-per-5");
        }
      }

      function PastAppointmentComponent_mat_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function PastAppointmentComponent_mat_header_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Doctor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r35.doctor, "");
        }
      }

      function PastAppointmentComponent_mat_header_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r36.email, "");
        }
      }

      function PastAppointmentComponent_mat_header_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Appo. Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, row_r37.date, "MM/dd/yyyy"), " ");
        }
      }

      function PastAppointmentComponent_mat_header_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Appo. Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r38.time, "");
        }
      }

      function PastAppointmentComponent_mat_header_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r39.mobile, "");
        }
      }

      function PastAppointmentComponent_mat_header_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Injury/Condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r40.injury, "");
        }
      }

      function PastAppointmentComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PastAppointmentComponent_mat_cell_70_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          })("click", function PastAppointmentComponent_mat_cell_70_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var i_r42 = ctx.index;
            var row_r41 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r44.deleteItem(i_r42, row_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PastAppointmentComponent_mat_header_row_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function PastAppointmentComponent_mat_row_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row", 64);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("cursor", "pointer");
        }
      }

      function PastAppointmentComponent_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-progress-spinner", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 40);
        }
      }

      function PastAppointmentComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var PastAppointmentComponent = /*#__PURE__*/function () {
        function PastAppointmentComponent(httpClient, dialog, appointmentService, snackBar) {
          _classCallCheck(this, PastAppointmentComponent);

          this.httpClient = httpClient;
          this.dialog = dialog;
          this.appointmentService = appointmentService;
          this.snackBar = snackBar;
          this.displayedColumns = ["select", "img", "doctor", "date", "time", "email", "mobile", "injury", "actions"];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        }

        _createClass(PastAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.loadData();
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this12 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this12.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this13 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this13.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this13.exampleDatabase.dataChange.value.splice(index, 1);

              _this13.refreshTable();

              _this13.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
            });
            this.showNotification("snackbar-danger", totalSelect + " Record Delete Successfully...!!!", "bottom", "center");
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(i, row) {
            var _this14 = this;

            this.index = i;
            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["PastDeleteDialogComponent"], {
              data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this14.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this14.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this14.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this14.refreshTable();

                _this14.showNotification("snackbar-danger", "Delete Record Successfully...!!!", "bottom", "center");
              }
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this15 = this;

            this.exampleDatabase = new _past_appointment_service__WEBPACK_IMPORTED_MODULE_1__["PastAppointmentService"](this.httpClient);
            this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.filter.nativeElement, "keyup").subscribe(function () {
              if (!_this15.dataSource) {
                return;
              }

              _this15.dataSource.filter = _this15.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, "", {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return PastAppointmentComponent;
      }();

      PastAppointmentComponent.??fac = function PastAppointmentComponent_Factory(t) {
        return new (t || PastAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_past_appointment_service__WEBPACK_IMPORTED_MODULE_1__["PastAppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      PastAppointmentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PastAppointmentComponent,
        selectors: [["app-past-appointment"]],
        viewQuery: function PastAppointmentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.filter = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"],
          useValue: "en-GB"
        }])],
        decls: 77,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/patient/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "doctor"], ["matColumnDef", "email"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "mobile"], ["matColumnDef", "injury"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5"], [3, "src"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", ""], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]],
        template: function PastAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Past");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Past Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Past Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PastAppointmentComponent_Template_button_click_36_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-table", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](41, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, PastAppointmentComponent_mat_header_cell_42_Template, 2, 4, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, PastAppointmentComponent_mat_cell_43_Template, 2, 3, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](44, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, PastAppointmentComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, PastAppointmentComponent_mat_cell_46_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](47, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, PastAppointmentComponent_mat_header_cell_48_Template, 2, 1, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, PastAppointmentComponent_mat_cell_49_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](50, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, PastAppointmentComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, PastAppointmentComponent_mat_cell_52_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](53, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, PastAppointmentComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, PastAppointmentComponent_mat_cell_55_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](56, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, PastAppointmentComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, PastAppointmentComponent_mat_cell_58_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](59, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, PastAppointmentComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, PastAppointmentComponent_mat_cell_61_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](62, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, PastAppointmentComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, PastAppointmentComponent_mat_cell_64_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](65, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, PastAppointmentComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, PastAppointmentComponent_mat_cell_67_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](68, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, PastAppointmentComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, PastAppointmentComponent_mat_cell_70_Template, 4, 0, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, PastAppointmentComponent_mat_header_row_71_Template, 1, 0, "mat-header-row", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, PastAppointmentComponent_mat_row_72_Template, 1, 2, "mat-row", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, PastAppointmentComponent_div_73_Template, 2, 1, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, PastAppointmentComponent_div_74_Template, 2, 2, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "mat-paginator", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXN0LWFwcG9pbnRtZW50LmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PastAppointmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-past-appointment",
            templateUrl: "./past-appointment.component.html",
            styleUrls: ["./past-appointment.component.sass"],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"],
              useValue: "en-GB"
            }]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _past_appointment_service__WEBPACK_IMPORTED_MODULE_1__["PastAppointmentService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
              "static": true
            }]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["filter", {
              "static": true
            }]
          }]
        });
      })();

      var ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti2) {
        _inherits(ExampleDataSource, _angular_cdk_collecti2);

        var _super2 = _createSuper(ExampleDataSource);

        function ExampleDataSource(exampleDatabase, paginator, _sort) {
          var _this16;

          _classCallCheck(this, ExampleDataSource);

          _this16 = _super2.call(this);
          _this16.exampleDatabase = exampleDatabase;
          _this16.paginator = paginator;
          _this16._sort = _sort;
          _this16.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]("");
          _this16.filteredData = [];
          _this16.renderedData = []; // Reset to the first page when the user changes the filter.

          _this16.filterChange.subscribe(function () {
            return _this16.paginator.pageIndex = 0;
          });

          return _this16;
        }

        _createClass(ExampleDataSource, [{
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
          /** Connect function called by the table to retrieve one stream containing the data to render. */

        }, {
          key: "connect",
          value: function connect() {
            var _this17 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllPastAppointment();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
              // Filter data
              _this17.filteredData = _this17.exampleDatabase.data.slice().filter(function (appointment) {
                var searchStr = (appointment.email + appointment.date + appointment.time + appointment.doctor + appointment.injury + appointment.mobile).toLowerCase();
                return searchStr.indexOf(_this17.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this17.sortData(_this17.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this17.paginator.pageIndex * _this17.paginator.pageSize;
              _this17.renderedData = sortedData.splice(startIndex, _this17.paginator.pageSize);
              return _this17.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this18 = this;

            if (!this._sort.active || this._sort.direction === "") {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = "";
              var propertyB = "";

              switch (_this18._sort.active) {
                case "id":
                  var _ref7 = [a.id, b.id];
                  propertyA = _ref7[0];
                  propertyB = _ref7[1];
                  break;

                case "doctor":
                  var _ref8 = [a.name, b.name];
                  propertyA = _ref8[0];
                  propertyB = _ref8[1];
                  break;

                case "email":
                  var _ref9 = [a.email, b.email];
                  propertyA = _ref9[0];
                  propertyB = _ref9[1];
                  break;

                case "date":
                  var _ref10 = [a.date, b.date];
                  propertyA = _ref10[0];
                  propertyB = _ref10[1];
                  break;

                case "time":
                  var _ref11 = [a.time, b.time];
                  propertyA = _ref11[0];
                  propertyB = _ref11[1];
                  break;

                case "mobile":
                  var _ref12 = [a.mobile, b.mobile];
                  propertyA = _ref12[0];
                  propertyB = _ref12[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this18._sort.direction === "asc" ? 1 : -1);
            });
          }
        }]);

        return ExampleDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]);
      /***/

    },

    /***/
    "kKEL":
    /*!*************************************************************!*\
      !*** ./src/app/patient/appointments/appointments.module.ts ***!
      \*************************************************************/

    /*! exports provided: AppointmentsModule */

    /***/
    function kKEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentsModule", function () {
        return AppointmentsModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./appointments-routing.module */
      "9beF");
      /* harmony import */


      var _upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./upcoming-appointment/upcoming-appointment.component */
      "L+1L");
      /* harmony import */


      var _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./upcoming-appointment/dialogs/delete/delete.component */
      "mMJY");
      /* harmony import */


      var _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./upcoming-appointment/dialogs/form-dialog/form-dialog.component */
      "yxCr");
      /* harmony import */


      var _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./past-appointment/past-appointment.component */
      "OZmR");
      /* harmony import */


      var _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./past-appointment/dialogs/delete/delete.component */
      "oatb");
      /* harmony import */


      var _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./today-appointment/today-appointment.component */
      "6dwX");
      /* harmony import */


      var _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./today-appointment/dialogs/delete/delete.component */
      "Jw3p");
      /* harmony import */


      var _upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./upcoming-appointment/upcoming-appointment.service */
      "KMyl");
      /* harmony import */


      var _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./past-appointment/past-appointment.service */
      "+qHA");

      var AppointmentsModule = /*#__PURE__*/_createClass(function AppointmentsModule() {
        _classCallCheck(this, AppointmentsModule);
      });

      AppointmentsModule.??fac = function AppointmentsModule_Factory(t) {
        return new (t || AppointmentsModule)();
      };

      AppointmentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppointmentsModule
      });
      AppointmentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        providers: [_upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_29__["UpcomingAppointmentService"], _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_30__["PastAppointmentService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _appointments_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppointmentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__["MaterialFileInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppointmentsModule, {
          declarations: [_upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_22__["UpcomingAppointmentComponent"], _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__["DeleteDialogComponent"], _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__["FormDialogComponent"], _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_25__["PastAppointmentComponent"], _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_26__["PastDeleteDialogComponent"], _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_27__["TodayAppointmentComponent"], _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_28__["DeleteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _appointments_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppointmentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__["MaterialFileInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppointmentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_upcoming_appointment_upcoming_appointment_component__WEBPACK_IMPORTED_MODULE_22__["UpcomingAppointmentComponent"], _upcoming_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__["DeleteDialogComponent"], _upcoming_appointment_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__["FormDialogComponent"], _past_appointment_past_appointment_component__WEBPACK_IMPORTED_MODULE_25__["PastAppointmentComponent"], _past_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_26__["PastDeleteDialogComponent"], _today_appointment_today_appointment_component__WEBPACK_IMPORTED_MODULE_27__["TodayAppointmentComponent"], _today_appointment_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_28__["DeleteComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _appointments_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppointmentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__["MaterialFileInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]],
            providers: [_upcoming_appointment_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_29__["UpcomingAppointmentService"], _past_appointment_past_appointment_service__WEBPACK_IMPORTED_MODULE_30__["PastAppointmentService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mMJY":
    /*!**********************************************************************************************!*\
      !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DeleteDialogComponent */

    /***/
    function mMJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
        return DeleteDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../upcoming-appointment.service */
      "KMyl");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteDialogComponent = /*#__PURE__*/function () {
        function DeleteDialogComponent(dialogRef, data, appointmentService) {
          _classCallCheck(this, DeleteDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.appointmentService = appointmentService;
        }

        _createClass(DeleteDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.appointmentService.deleteUpcomingAppointment(this.data.id);
          }
        }]);

        return DeleteDialogComponent;
      }();

      DeleteDialogComponent.??fac = function DeleteDialogComponent_Factory(t) {
        return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__["UpcomingAppointmentService"]));
      };

      DeleteDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: DeleteDialogComponent,
        selectors: [["app-delete"]],
        decls: 25,
        vars: 4,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close"], ["mat-flat-button", "", "tabindex", "-1"]],
        template: function DeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.doctor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DeleteDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__["UpcomingAppointmentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oatb":
    /*!******************************************************************************************!*\
      !*** ./src/app/patient/appointments/past-appointment/dialogs/delete/delete.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: PastDeleteDialogComponent */

    /***/
    function oatb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PastDeleteDialogComponent", function () {
        return PastDeleteDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _past_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../past-appointment.service */
      "+qHA");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var PastDeleteDialogComponent = /*#__PURE__*/function () {
        function PastDeleteDialogComponent(dialogRef, data, appointmentService) {
          _classCallCheck(this, PastDeleteDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.appointmentService = appointmentService;
        }

        _createClass(PastDeleteDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.appointmentService.deletePastAppointment(this.data.id);
          }
        }]);

        return PastDeleteDialogComponent;
      }();

      PastDeleteDialogComponent.??fac = function PastDeleteDialogComponent_Factory(t) {
        return new (t || PastDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_past_appointment_service__WEBPACK_IMPORTED_MODULE_2__["PastAppointmentService"]));
      };

      PastDeleteDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: PastDeleteDialogComponent,
        selectors: [["app-delete"]],
        decls: 25,
        vars: 4,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]],
        template: function PastDeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PastDeleteDialogComponent_Template_button_click_21_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PastDeleteDialogComponent_Template_button_click_23_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.doctor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PastDeleteDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _past_appointment_service__WEBPACK_IMPORTED_MODULE_2__["PastAppointmentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yxCr":
    /*!********************************************************************************************************!*\
      !*** ./src/app/patient/appointments/upcoming-appointment/dialogs/form-dialog/form-dialog.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: FormDialogComponent */

    /***/
    function yxCr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function () {
        return FormDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../upcoming-appointment.service */
      "KMyl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../upcoming-appointment.model */
      "KY0j");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      function FormDialogComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Doctor Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please select time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mobile is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var FormDialogComponent = /*#__PURE__*/function () {
        function FormDialogComponent(dialogRef, data, appointmentService, fb) {
          _classCallCheck(this, FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.appointmentService = appointmentService;
          this.fb = fb;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            console.log(data.appointment.date);
            this.dialogTitle = data.appointment.doctor;
            this.appointment = data.appointment;
          } else {
            this.dialogTitle = 'New Appointment';
            this.appointment = new _upcoming_appointment_model__WEBPACK_IMPORTED_MODULE_4__["UpcomingAppointment"]({});
          }

          this.appointmentForm = this.createContactForm();
        }

        _createClass(FormDialogComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.appointment.id],
              img: [this.appointment.img],
              email: [this.appointment.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
              date: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.appointment.date, 'yyyy-MM-dd', 'en'), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              time: [this.appointment.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              mobile: [this.appointment.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              doctor: [this.appointment.doctor, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              injury: [this.appointment.injury]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.appointmentService.addUpcomingAppointment(this.appointmentForm.getRawValue());
          }
        }]);

        return FormDialogComponent;
      }();

      FormDialogComponent.??fac = function FormDialogComponent_Factory(t) {
        return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__["UpcomingAppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: FormDialogComponent,
        selectors: [["app-form-dialog"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }])],
        decls: 80,
        vars: 19,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "doctor", "required", ""], [3, "value"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "time", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "injury"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormDialogComponent_Template_button_click_8_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submit;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Doctor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Dr.Rajesh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, " Dr.Pooja Patel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Dr.Jamie Blair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Other ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, FormDialogComponent_mat_error_31_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, FormDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "mat-datepicker-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "mat-datepicker", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, FormDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "access_time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](57, FormDialogComponent_mat_error_57_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](66, FormDialogComponent_mat_error_66_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Injury/Condition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "textarea", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormDialogComponent_Template_button_click_76_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormDialogComponent_Template_button_click_78_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.appointment.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.appointmentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "Dr.Rajesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "Dr.Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "Dr.Jay Soni");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "Dr.Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", " Dr.Jamie Blair");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.appointmentForm.get("doctor").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.appointmentForm.get("email").hasError("required") || ctx.appointmentForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.appointmentForm.get("date").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.appointmentForm.get("time").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.appointmentForm.get("mobile").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.submit)("disabled", !ctx.appointmentForm.valid)("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](FormDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.sass'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
              useValue: 'en-GB'
            }]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _upcoming_appointment_service__WEBPACK_IMPORTED_MODULE_2__["UpcomingAppointmentService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=appointments-appointments-module-es5.js.map