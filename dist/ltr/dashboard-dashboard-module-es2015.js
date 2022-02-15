(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "8gBH":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/dashboard/profile/change-email-modal/change-email-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChangeEmailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailModalComponent", function() { return ChangeEmailModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ChangeEmailModalComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ChangeEmailModalComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            // Validators.email,
        ]);
    }
    ngOnInit() {
        this.doctorsForm = this.formBuilder.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)],
            ],
        });
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
    }
}
ChangeEmailModalComponent.ɵfac = function ChangeEmailModalComponent_Factory(t) { return new (t || ChangeEmailModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ChangeEmailModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangeEmailModalComponent, selectors: [["app-change-email-modal"]], decls: 30, vars: 2, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-18"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "email", "required", ""], ["matSuffix", ""], [4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", 1, "change-pwd-btn", 3, "mat-dialog-close", "click"]], template: function ChangeEmailModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Change Your Account Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeEmailModalComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " This will change the email address, you use to login into Physician Discovery. You will need to verify the new email address by clicking on link sent to you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ChangeEmailModalComponent_mat_error_24_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeEmailModalComponent_Template_button_click_28_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.doctorsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.doctorsForm.get("email").hasError("required") || ctx.doctorsForm.get("email").touched);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".change-pwd-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n  color: #fff;\n}\n\n  .mat-dialog-container {\n  width: 561px !important;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.modalHeader[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYW5nZS1lbWFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0ksdUJBQUE7QUFFUjs7QUFBSTtFQUNJLDJCQUFBO0FBR1I7O0FBREk7RUFDSSxvQ0FBQTtBQUlSIiwiZmlsZSI6ImNoYW5nZS1lbWFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtcHdkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDU2MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9udC13ZWlnaHQtYm9sZHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW9kYWxIZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDZweCAhaW1wb3J0YW50O1xyXG4gICAgfSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangeEmailModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-change-email-modal',
                templateUrl: './change-email-modal.component.html',
                styleUrls: ['./change-email-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "MXfZ":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../patient/dashboard/dashboard.component */ "M4rk");
/* harmony import */ var _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../doctor/dashboard/dashboard.component */ "I5lE");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ "21P8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "QLu+");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "g2Pu");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "sg9+");










const routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
    },
    {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
    },
    {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
    },
    {
        path: "dashboard2",
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"],
    },
    {
        path: "doctor-dashboard",
        component: _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
    },
    {
        path: "patient-dashboard",
        component: _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QLu+":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function MainComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dr. Ella John!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Appointment booked today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Manage Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add short summary about yourself");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Adding of short summary would help patient to know more about yourself and build confidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " + Add Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add payment details through which you would like to pay for subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " + Add Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your scheduled appointments of the day and on demand appointments appears here. Currently you have no scheduled appointments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor() {
        this.showform = false;
    }
    ngOnInit() {
        this.smallChart1();
        this.smallChart2();
        this.smallChart3();
        this.smallChart4();
        this.chart1();
        this.chart2();
    }
    skipFuction() {
        this.showform = true;
    }
    smallChart1() {
        this.cardChart1 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart1Data = [
            {
                label: 'New Patients',
                data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(103,119,239,.7)',
                pointBackgroundColor: 'rgba(103,119,239,.2)',
                backgroundColor: 'rgba(103,119,239,.2)',
                pointBorderColor: 'transparent',
            },
        ];
        this.cardChart1Label = [
            '16-07-2018',
            '17-07-2018',
            '18-07-2018',
            '19-07-2018',
            '20-07-2018',
            '21-07-2018',
            '22-07-2018',
            '23-07-2018',
            '24-07-2018',
            '25-07-2018',
            '26-07-2018',
            '27-07-2018',
            '28-07-2018',
            '29-07-2018',
            '30-07-2018',
            '31-07-2018',
        ];
    }
    smallChart2() {
        this.cardChart2 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart2Data = [
            {
                label: 'New Patients',
                data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(253,126,20,.7)',
                pointBackgroundColor: 'rgba(253,126,20,.2)',
                backgroundColor: 'rgba(253,126,20,.2)',
                pointBorderColor: 'transparent',
            },
        ];
        this.cardChart2Label = [
            '16-07-2018',
            '17-07-2018',
            '18-07-2018',
            '19-07-2018',
            '20-07-2018',
            '21-07-2018',
            '22-07-2018',
            '23-07-2018',
            '24-07-2018',
            '25-07-2018',
            '26-07-2018',
            '27-07-2018',
            '28-07-2018',
            '29-07-2018',
            '30-07-2018',
            '31-07-2018',
        ];
    }
    smallChart3() {
        this.cardChart3 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart3Data = [
            {
                label: 'New Patients',
                data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(40,167,69,.7)',
                pointBackgroundColor: 'rgba(40,167,69,.2)',
                backgroundColor: 'rgba(40,167,69,.2)',
                pointBorderColor: 'transparent',
            },
        ];
        this.cardChart3Label = [
            '16-07-2018',
            '17-07-2018',
            '18-07-2018',
            '19-07-2018',
            '20-07-2018',
            '21-07-2018',
            '22-07-2018',
            '23-07-2018',
            '24-07-2018',
            '25-07-2018',
            '26-07-2018',
            '27-07-2018',
            '28-07-2018',
            '29-07-2018',
            '30-07-2018',
            '31-07-2018',
        ];
    }
    smallChart4() {
        this.cardChart4 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart4Data = [
            {
                label: 'New Patients',
                data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(0,123,255,.7)',
                pointBackgroundColor: 'rgba(0,123,255,.2)',
                backgroundColor: 'rgba(0,123,255,.2)',
                pointBorderColor: 'transparent',
            },
        ];
        this.cardChart4Label = [
            '16-07-2018',
            '17-07-2018',
            '18-07-2018',
            '19-07-2018',
            '20-07-2018',
            '21-07-2018',
            '22-07-2018',
            '23-07-2018',
            '24-07-2018',
            '25-07-2018',
            '26-07-2018',
            '27-07-2018',
            '28-07-2018',
            '29-07-2018',
            '30-07-2018',
            '31-07-2018',
        ];
    }
    chart1() {
        this.areaChartOptions = {
            series: [
                {
                    name: 'New Patients',
                    data: [31, 40, 28, 51, 42, 85, 77],
                },
                {
                    name: 'Old Patients',
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
                foreColor: '#9aa0ac',
            },
            colors: ['#407fe4', '#908e8e'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19',
                    '2018-09-20',
                    '2018-09-21',
                    '2018-09-22',
                    '2018-09-23',
                    '2018-09-24',
                    '2018-09-25',
                ],
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    chart2() {
        this.barChartOptions = {
            series: [
                {
                    name: 'Colds and Flu',
                    data: [44, 55, 41, 67, 22, 43],
                },
                {
                    name: 'Headaches',
                    data: [13, 23, 20, 8, 13, 27],
                },
                {
                    name: 'Malaria',
                    data: [11, 17, 15, 15, 21, 14],
                },
                {
                    name: 'Typhoid',
                    data: [21, 7, 25, 13, 22, 8],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
                foreColor: '#9aa0ac',
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: 'category',
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 0.8,
                colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F'],
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 34, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "row", 3, "hidden"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center"], [1, "col-md-4"], ["src", "assets/images/pages/welcome.png", "alt", "", 1, "w-100"], [1, "col-md-8"], [1, "font-20", "weight-500", "mb-2"], [1, "weight-600", "font-30", "pt-1", "dr-name"], [1, "font-18", "max-width-600"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", "start-btn"], ["type", "button", "mat-button", "", 1, "mr-3", "skip-btn", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "col-md-1", "calender-icon-alignment"], ["src", "assets/images/pages/calender-icon.webp", "alt", "", 1, "calender-icon"], [1, "col-md-9"], [1, "col-md-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", "Schedule-btn"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "box-part", "text-center"], ["src", "assets/images/pages/summary-icon.webp", "alt", "", 1, "summary-icon"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], ["routerLink", "/admin/dashboard/profile"], ["src", "assets/images/pages/payment-icon.webp", "alt", "", 1, "payment-icon"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dr. Ella John!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We're super excited to have you on board.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Let's start building your weekly schedule Patients will check your schedule and select the available slots to book an appointment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Let's Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_29_listener() { return ctx.skipFuction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Skip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MainComponent_div_31_Template, 17, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_div_32_Template, 29, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainComponent_div_33_Template, 9, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["@charset \"UTF-8\";\n.dr-name[_ngcontent-%COMP%] {\n  color: #005a97;\n}\n.start-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n}\n.skip-btn[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #005a97;\n  color: #005a97;\n  box-shadow: none;\n}\n.calender-icon[_ngcontent-%COMP%] {\n  width: 50% !important;\n  height: 50% !important;\n}\n.calender-icon-alignment[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.Schedule-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n  float: right;\n}\n.payment-icon[_ngcontent-%COMP%] {\n  width: 9% !important;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 7% !important;\n}\n.page-title[_ngcontent-%COMP%] {\n  border-right: none !important;\n  padding-right: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #444444;\n  margin-bottom: 0px;\n}\n.page-title[_ngcontent-%COMP%]:after {\n  content: \"\uF105\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 18px;\n  font-weight: 900;\n  padding: 0px 5px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  color: #717883;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0FBR0o7QUFBQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQUlKO0FBRkE7RUFDSSxrQkFBQTtBQUtKO0FBSEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBQ0ksb0JBQUE7QUFPSjtBQUxBO0VBQ0ksb0JBQUE7QUFRSjtBQU5BO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNKO0FBUkk7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVVOO0FBUkk7RUFDRSxnQkFBQTtBQVVOO0FBVE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVdSIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZHItbmFtZSB7XG4gIGNvbG9yOiAjMDA1YTk3O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWE5Nztcbn1cblxuLnNraXAtYnRuIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1YTk3O1xuICBjb2xvcjogIzAwNWE5NztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhbGVuZGVyLWljb24ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYWxlbmRlci1pY29uLWFsaWdubWVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlNjaGVkdWxlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBheW1lbnQtaWNvbiB7XG4gIHdpZHRoOiA5JSAhaW1wb3J0YW50O1xufVxuXG4uc3VtbWFyeS1pY29uIHtcbiAgd2lkdGg6IDclICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wYWdlLXRpdGxlOmFmdGVyIHtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG4ucGFnZS10aXRsZSBpIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cbi5wYWdlLXRpdGxlIGk6YmVmb3JlIHtcbiAgY29sb3I6ICM3MTc4ODM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SkCP":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/dashboard/profile/change-password-success-modal/change-password-success-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ChangePasswordSuccessModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordSuccessModalComponent", function() { return ChangePasswordSuccessModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ChangePasswordSuccessModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangePasswordSuccessModalComponent.ɵfac = function ChangePasswordSuccessModalComponent_Factory(t) { return new (t || ChangePasswordSuccessModalComponent)(); };
ChangePasswordSuccessModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordSuccessModalComponent, selectors: [["app-change-password-success-modal"]], decls: 12, vars: 0, consts: [[1, "addContainer"], ["mat-dialog-content", ""], [1, "register-form", "m-4"], [1, "row"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["src", "assets/images/pages/tick-mark-green.webp"], [1, "text-center"], ["mat-raised-button", "", 1, "ok-btn"]], template: function ChangePasswordSuccessModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Changed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your password changed successfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["h2[_ngcontent-%COMP%] {\n  margin-top: 22px !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-weight: normal;\n  margin-top: 12px;\n  font-size: 14px;\n  color: #282a2b !important;\n}\n\n.ok-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n  color: #fff;\n}\n\n.addContainer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYW5nZS1wYXNzd29yZC1zdWNjZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksMkJBQUE7QUFEUjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFFSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUNHO0VBQ0ksa0JBQUE7QUFFUCIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQtc3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuICAgXHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyODJhMmIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vay1idG57IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgIC5hZGRDb250YWluZXJ7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordSuccessModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password-success-modal',
                templateUrl: './change-password-success-modal.component.html',
                styleUrls: ['./change-password-success-modal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dNON":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/dashboard/profile/change-password-modal/change-password-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangePasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModalComponent", function() { return ChangePasswordModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _change_password_success_modal_change_password_success_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-password-success-modal/change-password-success-modal.component */ "SkCP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");











class ChangePasswordModalComponent {
    constructor(dialogRef, data, FormBuilder, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.FormBuilder = FormBuilder;
        this.dialog = dialog;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.doctorsForm = this.FormBuilder.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
    }
    successDialog() {
        const dialogRef = this.dialog.open(_change_password_success_modal_change_password_success_modal_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordSuccessModalComponent"], {
            data: {
                doctors: this.doctors,
                action: "add",
            },
        });
    }
}
ChangePasswordModalComponent.ɵfac = function ChangePasswordModalComponent_Factory(t) { return new (t || ChangePasswordModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
ChangePasswordModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordModalComponent, selectors: [["app-change-password-modal"]], decls: 41, vars: 7, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-18"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "oldpassword", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", 1, "change-pwd-btn", 3, "mat-dialog-close", "click"]], template: function ChangePasswordModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_mat_icon_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_mat_icon_click_26_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_mat_icon_click_34_listener() { return ctx.chide = !ctx.chide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_button_click_39_listener() { return ctx.successDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.doctorsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.chide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.chide ? "visibility_off" : "visibility", "");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".change-pwd-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n  color: #fff;\n}\n\n  .mat-dialog-container {\n  width: 561px !important;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.modalHeader[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYW5nZS1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNBOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxvQ0FBQTtBQUlKIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtcHdkLWJ0bntcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwNWE5NztcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1NjFweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbEhlYWRlcntcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCA2cHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangePasswordModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-change-password-modal',
                templateUrl: './change-password-modal.component.html',
                styleUrls: ['./change-password-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "g2Pu":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.ts ***!
  \********************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");









class Dashboard2Component {
    // Doughnut chart end
    constructor() {
        //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
        // Doughnut chart start
        this.doughnutChartLabels = ["India", "USA", "Itely"];
        this.doughnutChartData = [45, 25, 30];
        this.doughnutChartLegend = false;
        this.doughnutChartColors = [
            {
                backgroundColor: ["#735A84", "#E76412", "#9BC311"],
            },
        ];
        this.doughnutChartType = "doughnut";
        this.doughnutChartOptions = {
            animation: false,
            responsive: true,
        };
    }
    ngOnInit() {
        this.chart1();
    }
    chart1() {
        this.lineChartOptions = {
            series: [
                {
                    name: "Doctor 1",
                    data: [70, 200, 80, 180, 170, 105, 210],
                },
                {
                    name: "Doctor 2",
                    data: [80, 250, 30, 120, 260, 100, 180],
                },
                {
                    name: "Doctor 3",
                    data: [85, 130, 85, 225, 80, 190, 120],
                },
            ],
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
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ["#A5A5A5", "#875692", "#4CB5AC"],
            stroke: {
                curve: "smooth",
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: 0.5,
                },
            },
            markers: {
                size: 3,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: {
                    text: "Month",
                },
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: "Patients",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
}
Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 624, vars: 24, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-10"], [1, "col", "col-block"], [1, "font-14"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "74", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-74"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-70"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-55"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "col-md-12", "col-xl-4", "d-flex", "flex-column", "justify-content-center"], [1, "ml-xl-3", "m-b-20"], [1, "font-weight-light", "col-green"], [1, "mb-2"], [1, "ml-xl-3"], [1, "font-weight-light", "col-orange"], [1, "col-md-12", "col-xl-8"], [1, "col-md-6"], [1, "tx-primary", "m-b-30"], [1, "progress-list", "m-b-10"], [1, "details"], [1, "title"], [1, "status"], [1, "progress-xs", "not-rounded", "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "width-per-40"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-49"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-blue", "width-per-65"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-28"], ["role", "progressbar", "aria-valuenow", "16", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-hotpink", "width-per-16"], [1, "col-md-6", "mt-3"], ["baseChart", "", 1, "chart", 3, "data", "labels", "options", "legend", "chartType", "colors"], [1, "country-chart"], [1, "d-flex", "justify-content-between", "mx-xl-5", "mt-3"], [1, "chart-note"], [1, "dot", "dot-product", "bg-green"], [1, "mb-0"], [1, "dot", "dot-product", "bg-orange"], [1, "dot", "dot-product", "bg-purple"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "patient-group-list"], [1, "media-body", "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "media-cta"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], [1, "recent-comment", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "notice-board"], [1, "table-img"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-red"], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "tableBody"], [1, "table-responsive"], ["id", "support_table", 1, "table", "display", "product-overview", "mb-30"], [1, "badge", "col-green"], ["mat-icon-button", ""], [1, "col-red"], [1, "badge", "col-red"], [1, "badge", "col-cyan"], [1, "badge", "col-purple"], [1, "badge", "col-brown"], [1, "badge", "col-blue"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dashboard2",
                templateUrl: "./dashboard2.component.html",
                styleUrls: ["./dashboard2.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pBKm":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "MXfZ");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "QLu+");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "g2Pu");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "sg9+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/change-password-modal/change-password-modal.component */ "dNON");
/* harmony import */ var _profile_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/change-email-modal/change-email-modal.component */ "8gBH");
/* harmony import */ var _profile_change_password_success_modal_change_password_success_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/change-password-success-modal/change-password-success-modal.component */ "SkCP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
























class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard2Component"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _profile_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordModalComponent"], _profile_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_20__["ChangeEmailModalComponent"], _profile_change_password_success_modal_change_password_success_modal_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordSuccessModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard2Component"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _profile_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordModalComponent"], _profile_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_20__["ChangeEmailModalComponent"], _profile_change_password_success_modal_change_password_success_modal_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordSuccessModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "sg9+":
/*!**************************************************************!*\
  !*** ./src/app/admin/dashboard/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-email-modal/change-email-modal.component */ "8gBH");
/* harmony import */ var _change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password-modal/change-password-modal.component */ "dNON");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















function ProfileComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Personal Info ");
} }
function ProfileComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Info Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Frist Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-group", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_126_Template_mat_radio_group_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.labelPosition = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_126_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Change email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Fax Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "PIN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "License Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "State of operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " + Add another");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Save Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.labelPosition);
} }
function ProfileComponent_ng_template_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "local_hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Clinic Info ");
} }
function ProfileComponent_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " insert_drive_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Other Info ");
} }
function ProfileComponent_ng_template_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Payment Information ");
} }
class ProfileComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.labelPosition = 'after';
        this.showform = false;
    }
    ngOnInit() {
    }
    editInfo() {
        this.showform = true;
    }
    addNew() {
        const dialogRef = this.dialog.open(_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordModalComponent"], {
            data: {
                doctors: this.doctors,
                action: "add",
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.doctorsService.getDialogData());
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    changeEmail() {
        const dialogRef = this.dialog.open(_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_2__["ChangeEmailModalComponent"], {
            data: {
                doctors: this.doctors,
                action: "add",
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.doctorsService.getDialogData());
                this.showNotification("snackbar-success", "Add Record Successfully...!!!", "bottom", "center");
            }
        });
    }
    showNotification(arg0, arg1, arg2, arg3) {
        throw new Error('Method not implemented.');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 133, vars: 2, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "row", "clearfix"], [1, "col-lg-4", "col-md-12"], [1, "card"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "bg-profile"], [1, "user-name"], ["src", "assets/images/user/usrbig5.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "material-icons"], [1, "password", 3, "click"], [1, "col-lg-8", "col-md-12"], ["mat-tab-label", ""], [3, "hidden"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "project_widget"], [1, "header"], [1, "body"], [1, "col-md-3", "col-6", "b-r"], [1, "text-muted"], [1, "col-md-3", "col-6"], [1, "col-md-6", "col-6", "b-r"], [1, "row", "license-row"], [1, "delete-icon"], [1, "add-number"], [1, "header", "abt-header"], [1, "body", "abt-body"], [1, "m-t-30"], ["mat-flat-button", "", "color", "primary", 1, "edit-info-btn", 3, "click"], [4, "ngIf"], [1, "example-tab-icon", "mr-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "fill", 1, "example-full-width"], ["matInput", ""], ["input", ""], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "row", 3, "click"], [1, "change-email-text"], [1, "col-md-5", "col-5", "b-r"], [1, "col-md-1", "col-1", "b-r"], ["mat-flat-button", "", "color", "primary", 1, "edit-info-btn"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ella John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " johnlorem1234@ipsumdummylorem.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_30_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_ng_template_39_Template, 3, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jayna Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "04/19/1990");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "(123) 456 7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "johnlorem1234@ipsumdummylorem.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Fax Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "PIN Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "License Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "22567886787");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "State of operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "+ Add Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_124_listener() { return ctx.editInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Edit Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ProfileComponent_div_126_Template, 99, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, ProfileComponent_ng_template_128_Template, 3, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, ProfileComponent_ng_template_130_Template, 3, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, ProfileComponent_ng_template_132_Template, 3, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"]], styles: ["@charset \"UTF-8\";\n.page-title[_ngcontent-%COMP%] {\n  border-right: none !important;\n  padding-right: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #444444;\n  margin-bottom: 0px;\n}\n.page-title[_ngcontent-%COMP%]:after {\n  content: \"\uF105\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 18px;\n  font-weight: 900;\n  padding: 0px 5px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  color: #717883;\n  font-size: 20px;\n}\n.contact-grid[_ngcontent-%COMP%]   .bg-profile[_ngcontent-%COMP%] {\n  background-color: #005a97;\n}\n.contact-grid[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.contact-grid[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-right: 40px;\n  color: #005a97;\n}\n.project_widget[_ngcontent-%COMP%]   .abt-header[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n.project_widget[_ngcontent-%COMP%]   .abt-body[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n.project_widget[_ngcontent-%COMP%]   .license-row[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n.project_widget[_ngcontent-%COMP%]   .edit-info-btn[_ngcontent-%COMP%] {\n  background-color: #005a97;\n  margin-bottom: 10%;\n}\n.project_widget[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%] {\n  color: #7a7a7a;\n  float: right;\n}\n.project_widget[_ngcontent-%COMP%]   .add-number[_ngcontent-%COMP%] {\n  color: #005a97;\n  float: right;\n}\n.hr[_ngcontent-%COMP%] {\n  margin-top: 0rem !important;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.change-email-text[_ngcontent-%COMP%] {\n  float: right;\n  color: #005a97;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #242634 !important;\n}\n  .mat-flat-button {\n  background-color: #005a97;\n}\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #005a97;\n}\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #005a97;\n}\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #005a97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0FBR047QUFGTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSVI7QUFDSTtFQUNFLHlCQUFBO0FBRU47QUFBSTtFQUNFLDJCQUFBO0FBRU47QUFBSTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRU47QUFJSTtFQUNFLDhCQUFBO0FBRE47QUFHSTtFQUNFLDJCQUFBO0FBRE47QUFHSTtFQUNFLDJCQUFBO0FBRE47QUFHSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFETjtBQUlFO0VBQ0UsMkJBQUE7QUFESjtBQUlFO0VBQ0UsMEJBQUE7QUFESjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7QUFBRjtBQUVBO0VBQ0UseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUFBO0VBQ0UscUJBQUE7QUFHRjtBQUFBO0VBQ0UseUJBQUE7QUFHRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhZ2UtdGl0bGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnBhZ2UtdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cbi5wYWdlLXRpdGxlIGkge1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLnBhZ2UtdGl0bGUgaTpiZWZvcmUge1xuICBjb2xvcjogIzcxNzg4MztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGFjdC1ncmlkIC5iZy1wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWE5Nztcbn1cbi5jb250YWN0LWdyaWQgLnVzZXItaW1nIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbnRhY3QtZ3JpZCAucGFzc3dvcmQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjMDA1YTk3O1xufVxuXG4ucHJvamVjdF93aWRnZXQgLmFidC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdF93aWRnZXQgLmFidC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2plY3Rfd2lkZ2V0IC5saWNlbnNlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cbi5wcm9qZWN0X3dpZGdldCAuZWRpdC1pbmZvLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbi5wcm9qZWN0X3dpZGdldCAuZGVsZXRlLWljb24ge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2plY3Rfd2lkZ2V0IC5hZGQtbnVtYmVyIHtcbiAgY29sb3I6ICMwMDVhOTc7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmhyIHtcbiAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4uY2hhbmdlLWVtYWlsLXRleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMDA1YTk3O1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjMjQyNjM0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWE5Nztcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1YTk3O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOTc7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map