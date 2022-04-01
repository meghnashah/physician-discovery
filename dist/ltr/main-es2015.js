(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config.service */ "Cxl7");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");















const document = window.document;
class HeaderComponent {
    constructor(document, renderer, elementRef, dataService, configService, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.notifications = [
            {
                userImg: 'assets/images/user/user1.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user2.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user3.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
            {
                userImg: 'assets/images/user/user4.jpg',
                userName: 'Ashton Cox',
                time: '5 hours ago',
                message: 'Lets break for lunch...',
            },
            {
                userImg: 'assets/images/user/user5.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user6.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user7.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (userRole === 'Admin') {
            this.homePage = 'admin/dashboard/main';
        }
        else if (userRole === 'Patient') {
            this.homePage = 'patient/dashboard';
        }
        else if (userRole === 'Doctor') {
            this.homePage = 'doctor/dashboard';
        }
        else {
            this.homePage = 'admin/dashboard/main';
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 66, vars: 2, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "pull-left", "collapse-menu-icon"], ["src", "assets/images/pages/full-logo.png"], [1, "pull-left", "collapse-menu-icon", "home-menu-padding"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main", 2, "color", "#242634"], [1, "fas", "fa-home"], [1, "header-menu"], [1, "fas", "fa-calendar-alt"], ["routerLink", "/admin/dashboard/my-Appoinment", 1, "breadcrumb-item", "bcrumb-1"], [1, "fa", "fa-envelope"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["routerLink", "/admin/dashboard/notification", "mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "User", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "mr-2"], ["href", "javascript:void(0);", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Appointments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Inquiry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_30_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_62_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"]], styles: [".user_dw_menu[_ngcontent-%COMP%]   .managment[_ngcontent-%COMP%] {\n  height: 55px !important;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  background-color: #7a7a7a;\n  border-radius: 50%;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  vertical-align: middle;\n  padding: 6px;\n  font-size: 14px;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  font-family: RobotoSlab;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.material-iconss[_ngcontent-%COMP%] {\n  padding: 7px;\n  font-size: 20px;\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n\n.home-menu-padding[_ngcontent-%COMP%] {\n  padding-left: 100px !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  right: 5px !important;\n  margin-top: 51px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQyx1QkFBQTtBQUFMOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0YsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FBQ0E7O0FBQ0U7RUFDSSw4QkFBQTtBQUVOOztBQUFFO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtBQUdOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX2R3X21lbnV7XHJcbiAgICAubWFuYWdtZW50e1xyXG4gICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3YTdhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1tZW51e1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b1NsYWI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICAubWF0ZXJpYWwtaWNvbnNze1xyXG5wYWRkaW5nOiA3cHg7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbmxpbmUtaGVpZ2h0OiAxO1xyXG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG53b3JkLXdyYXA6IG5vcm1hbDtcclxuZGlyZWN0aW9uOiBsdHI7XHJcbi13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICAuaG9tZS1tZW51LXBhZGRpbmd7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgIHJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogNTFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__["RightSidebarService"] }, { type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Gayatri\PD Project\physician-discovery\src\main.ts */"zUnb");


/***/ }),

/***/ "0HZm":
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Doctor"] = "Doctor";
    Role["Patient"] = "Patient";
})(Role || (Role = {}));


/***/ }),

/***/ "21P8":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/main.jpg)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3IAN":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");






class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "57d4":
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ "Cxl7");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");











const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "actived": a0 }; };
class RightSidebarComponent {
    constructor(document, renderer, elementRef, dataService, configService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.configService = configService;
        this.selectedBgColor = "white";
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.dataService.currentStatus.subscribe((data) => {
            this.isOpenSidebar = data;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem("choose_skin")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_skin"));
            this.selectedBgColor = localStorage.getItem("choose_skin_active");
        }
        else {
            this.renderer.addClass(this.document.body, "theme-" + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem("menuOption")) {
            if (localStorage.getItem("menuOption") === "menu_dark") {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem("menuOption") === "menu_light") {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
        }
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "dark") {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem("theme") === "light") {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector(".right-sidebar .demo-choose-skin li.actived")
            .getAttribute("data-theme");
        this.renderer.removeClass(this.document.body, "theme-" + prevTheme);
        this.renderer.addClass(this.document.body, "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin", "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin_active", this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        const menuOption = "menu_light";
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("menuOption", menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        const menuOption = "menu_dark";
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("menuOption", menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "dark");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
            this.renderer.addClass(this.document.body, "theme-white");
        }
        this.renderer.addClass(this.document.body, "light");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        const theme = "light";
        const menuOption = "menu_light";
        this.selectedBgColor = "white";
        this.isDarkSidebar = false;
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("choose_skin", "theme-white");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "light");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
            this.renderer.addClass(this.document.body, "theme-black");
        }
        this.renderer.addClass(this.document.body, "dark");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        const theme = "dark";
        const menuOption = "menu_dark";
        this.selectedBgColor = "black";
        this.isDarkSidebar = true;
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("choose_skin", "theme-black");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + "";
        this.maxWidth = "500px";
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== "settingBtn") {
            if (this.dataService.currentStatus._isScalar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 92, vars: 28, consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_div_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "GENERAL SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Save History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Show Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Auto Submit Issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Show Status To All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "SIDEBAR MENU COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_44_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_46_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "THEME COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_52_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_54_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "SKINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_60_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_62_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_64_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_66_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_68_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_70_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_72_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "26% remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Server Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Highly Loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarTheme ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, ctx.selectedBgColor === "orange"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RightSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: "app-right-sidebar",
                templateUrl: "./right-sidebar.component.html",
                styleUrls: ["./right-sidebar.component.sass"],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__["RightSidebarService"] }, { type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [materialModules],
                exports: [materialModules],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
    apiUrl: 'http://localhost:4200',
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

/***/ "Cxl7":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                variant: "light",
                theme_color: "white",
                logo_bg_color: "white",
                sidebar: {
                    collapsed: false,
                    backgroundColor: "light",
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GHa4":
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function() { return DynamicScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: "Loaded" });
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicScriptLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HSgw":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "/Lhg");
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 3, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["RightSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KDUW":
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");







class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: false });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KwYr":
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/role */ "0HZm");






const users = [
    {
        id: 1,
        img: "assets/images/user/admin.jpg",
        username: "admin@hospital.org",
        password: "admin@123",
        firstName: "Sarah",
        lastName: "Smith",
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin,
        token: "admin-token",
    },
    {
        id: 2,
        img: "assets/images/user/doctor.jpg",
        username: "doctor@hospital.org",
        password: "doctor@123",
        firstName: "Ashton",
        lastName: "Cox",
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Doctor,
        token: "doctor-token",
    },
    {
        id: 3,
        img: "assets/images/user/patient.jpg",
        username: "patient@hospital.org",
        password: "patient@123",
        firstName: "Cara",
        lastName: "Stevens",
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Patient,
        token: "patient-token",
    },
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith("/authenticate") && method === "POST":
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error("Username or password is incorrect");
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: "Unauthorised" } });
        }
        function isLoggedIn() {
            return headers.get("Authorization") === "Bearer fake-jwt-token";
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "5dmV");








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Qc9P":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-loader',
                templateUrl: './page-loader.component.html',
                styleUrls: ['./page-loader.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SLXU":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");









class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.spinner.show();
                // location.onPopState(() => {
                //   window.location.reload();
                // });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__["PageLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ "KwYr");
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ "SLXU");
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ "sIiH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideModule"],
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"],
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["LandingPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideModule"],
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
                    _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"],
                    _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
                    _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["LandingPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideModule"],
                    // core & shared
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
                    _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"],
                ],
                entryComponents: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "f9dz":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kCjQ":
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "ld2u":
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/*! exports provided: RightSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarService", function() { return RightSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class RightSidebarService {
    constructor() {
        this.statusService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentStatus = this.statusService.asObservable();
    }
    changeMsg(msg) {
        this.statusService.next(msg);
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 256, vars: 0, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "collapse", "navbar-collapse"], [1, "pull-left", "collapse-menu-icon"], ["src", "assets/images/pages/full-logo.png"], [1, "pull-left", "collapse-menu-icon", "home-menu-padding"], [1, "breadcrumb-item", "bcrumb-1"], [2, "color", "#242634"], ["routerLink", "/admin/dashboard/main", 1, "fas", "fa-home"], [1, "header-menu"], [1, "fas", "fa-calendar-alt"], [1, "fas", "fa-home"], [1, "fa", "fa-envelope"], ["mat-stroked-button", "", "routerLink", "/authentication/signin", 1, "login-btn"], [1, "content"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center", 2, "background-image", "url(assets/images/pages/bannerblue-bg.png)"], [1, "col-md-6", "left-side"], [1, "font-20", "welcome-text", "mb-2"], [1, "welcome-header", "font-40"], [1, "font-16"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", "start-btn"], [1, "col-md-4"], ["src", "assets/images/pages/top-banner-img.png", "alt", "", 1, "w-100"], [1, "col-md-1"], ["src", "assets/images/pages/banner-img-dots.png", "alt", "", 1, "w-10"], [1, "box-part", "text-center"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["src", "assets/images/pages/more-patient-1.png", "alt", "", 1, "payment-icon"], ["src", "assets/images/pages/data-security-2.png", "alt", "", 1, "payment-icon"], ["src", "assets/images/pages/faster-information-3.png", "alt", "", 1, "payment-icon"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "m-b-0"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-chart-line", "pull-left"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "bg-c-green"], ["src", "assets/images/pages/expert-square-img.png", "alt", "", 1, "payment-icon"], [1, "footer"], [1, "container-fluid", "tg-container"], [1, "col-lg-5", "col-md-3", "col-sm-6"], [1, "d-block", "d-sm-none", "tg-footinfo-sm"], [1, "tg-site-status"], ["href", "#"], [1, "tg-footer-logo"], ["src", "assets/images/tg-small-logo.svg", "alt", "toygeek"], [1, "mt-5", "d-none", "d-lg-block"], [1, "tg-sec-title"], [1, "tg-footer-list"], ["src", "assets/images/visa.webp", "alt", "visa", 1, "img-fluid"], ["src", "assets/images/master-card.webp", "alt", "master-card", 1, "img-fluid"], ["src", "assets/images/discover.webp", "alt", "discover", 1, "img-fluid"], ["src", "assets/images/american-express.webp", "alt", "american-express", 1, "img-fluid"], ["src", "assets/images/paypal.webp", "alt", "paypal", 1, "img-fluid"], [1, "mt-2", "d-none", "d-lg-block"], ["src", "assets/images/secured.webp", "alt", "VeriSign Secured"], [1, "col-lg-2", "col-md-3", "col-sm-6", "d-none", "d-md-block"], [1, "tg-footer-vList"], [1, "col-lg-3", "col-md-3", "col-sm-6", "d-none", "d-md-block"], [1, "mt-5"], [1, "tg-footer-note", "d-none", "d-md-block"], [1, "col-sm-6"], [1, "col-sm-6", "text-end"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Our Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " How it works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Experts Says ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Physician Discovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Be part of next generation healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Includes 30 days of free trial and unlimited appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Register Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Our Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "An all inclusive practice managment platform with features to help you deliver great patience experiance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Attend more Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Enables you to attend more patients in our platform. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Data Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "End to end data security is available security feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Faster Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Access patient information faster than other websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Create Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Engage patients better with the communications module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "358");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "18% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Completed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "865");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "21% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "37% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Experts Says");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Hear it from our Experts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u201CLorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Dr. John Barley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "MBBS, USA");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "footer", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "ToyGeek Mobile Site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u00A9 2021 ToyGeek All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Payment Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "ul", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "FAQ\u2019s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Stack FAQ\u2019s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Shipping Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Global Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Source Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Sell us your Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "ToyGeek Gift Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Terms & Conditions of Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Wholesale Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "TFSource Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u00A9 2021 ToyGeek All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "ToyGeek Mobile Site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["section.content[_ngcontent-%COMP%] {\n  margin: 60px 0px 0px 0px !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 1px !important;\n}\n\n@media only screen and (min-width: 1170px) {\n  header[_ngcontent-%COMP%] {\n    height: 1px !important;\n  }\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  border-color: #005a97;\n  color: #005a97;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: #ffff;\n  box-shadow: 0px 1px 10px 0 rgba(88, 92, 101, 0.15);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #242634;\n  margin-top: 3rem;\n}\n\n.w-10[_ngcontent-%COMP%] {\n  margin-bottom: 255px;\n  margin-left: -20px;\n}\n\n  .mat-raised-button {\n  background-color: #005a97 !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  margin-left: 36px;\n  margin-bottom: 170px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUdBO0VBQ0k7SUFDSSxzQkFBQTtFQUFOO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0RBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNJLG9DQUFBO0FBREo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FBRkoiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5jb250ZW50e1xyXG4gICAgbWFyZ2luOiA2MHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIH1cclxuLmxvZ2luLWJ0bnsgICBcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNWE5NztcclxuICAgIGNvbG9yOiAjMDA1YTk3OyAgICBcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDAgcmdiKDg4IDkyIDEwMSAvIDE1JSk7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNjM0O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLnctMTB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YTk3ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubGVmdC1zaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuICJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/rightsidebar.service */ "ld2u");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "3IAN");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth.service */ "KDUW");
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ "GHa4");
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/module-import.guard */ "kCjQ");








class CoreModule {
    constructor(parentModule) {
        Object(_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_6__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"],
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
        _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["DynamicScriptLoaderService"],
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [
                    _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"],
                    _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                    _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["DynamicScriptLoaderService"],
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "sIiH":
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");




class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/page404/page404.component */ "21P8");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth.guard */ "3IAN");
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/models/role */ "0HZm");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");










const routes = [
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'admin',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin,
                },
                loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~extra-pages-ext~96d8e071"), __webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~admin-admin-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~admin-admin-module~appointments-appointments-module~doctor-doctor-module"), __webpack_require__.e("default~admin-admin-module~appointments-appointments-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule),
            },
            {
                path: 'doctor',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Doctor,
                },
                loadChildren: () => Promise.all(/*! import() | doctor-doctor-module */[__webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~extra-pages-ext~96d8e071"), __webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~admin-admin-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~admin-admin-module~appointments-appointments-module~doctor-doctor-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module"), __webpack_require__.e("doctor-doctor-module")]).then(__webpack_require__.bind(null, /*! ./doctor/doctor.module */ "0Flv")).then((m) => m.DoctorModule),
            },
            {
                path: 'patient',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Patient,
                },
                loadChildren: () => Promise.all(/*! import() | patient-patient-module */[__webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~extra-pages-ext~96d8e071"), __webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~admin-admin-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("default~dashboard-dashboard-module~patient-patient-module"), __webpack_require__.e("patient-patient-module")]).then(__webpack_require__.bind(null, /*! ./patient/patient.module */ "AMsP")).then((m) => m.PatientModule),
            },
            {
                path: 'extra-pages',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => Promise.all(/*! import() | extra-pages-extra-pages-module */[__webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~extra-pages-ext~96d8e071"), __webpack_require__.e("extra-pages-extra-pages-module")]).then(__webpack_require__.bind(null, /*! ./extra-pages/extra-pages.module */ "hOZs")).then((m) => m.ExtraPagesModule),
            },
            {
                path: 'multilevel',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | multilevel-multilevel-module */ "multilevel-multilevel-module").then(__webpack_require__.bind(null, /*! ./multilevel/multilevel.module */ "6LPo")).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~extra-pages-ext~96d8e071"), __webpack_require__.e("default~admin-admin-module~authentication-authentication-module~doctor-doctor-module~patient-patient-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then((m) => m.AuthenticationModule),
    },
    {
        path: 'landing-screen',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | landing-page-landing-page-module */ "landing-page-landing-page-module").then(__webpack_require__.bind(null, /*! ./landing-page/landing-page.module */ "Shpw")).then((m) => m.LandingPageModule),
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map