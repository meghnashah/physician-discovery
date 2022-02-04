(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~doctor-doctor-module~patient-patient-module"], {
    /***/
    "QibW":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_GROUP, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioChange, MatRadioGroup, MatRadioModule, _MatRadioButtonBase, _MatRadioGroupBase */

    /***/
    function QibW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function () {
        return MAT_RADIO_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_RADIO_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP", function () {
        return MAT_RADIO_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function () {
        return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRadioButton", function () {
        return MatRadioButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRadioChange", function () {
        return MatRadioChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function () {
        return MatRadioGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRadioModule", function () {
        return MatRadioModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatRadioButtonBase", function () {
        return _MatRadioButtonBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatRadioGroupBase", function () {
        return _MatRadioGroupBase;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["input"];

      var _c1 = function _c1() {
        return {
          enterDuration: 150
        };
      };

      var _c2 = ["*"];
      var MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-radio-default-options', {
        providedIn: 'root',
        factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
      });

      function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
        return {
          color: 'accent'
        };
      } // Increasing integer for generating unique ids for radio components.


      var nextUniqueId = 0;
      /**
       * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
       * allows it to support [(ngModel)] and ngControl.
       * @docs-private
       */

      var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MatRadioGroup;
        }),
        multi: true
      };
      /** Change event object emitted by MatRadio and MatRadioGroup. */

      var MatRadioChange = /*#__PURE__*/_createClass(function MatRadioChange(
      /** The MatRadioButton that emits the change event. */
      source,
      /** The value of the MatRadioButton. */
      value) {
        _classCallCheck(this, MatRadioChange);

        this.source = source;
        this.value = value;
      });
      /**
       * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
       * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatRadioGroup');
      /**
       * Base class with all of the `MatRadioGroup` functionality.
       * @docs-private
       */

      var _MatRadioGroupBase = /*#__PURE__*/function () {
        function _MatRadioGroupBase(_changeDetector) {
          _classCallCheck(this, _MatRadioGroupBase);

          this._changeDetector = _changeDetector;
          /** Selected value for the radio group. */

          this._value = null;
          /** The HTML name attribute applied to radio buttons in this group. */

          this._name = "mat-radio-group-".concat(nextUniqueId++);
          /** The currently selected radio button. Should match value. */

          this._selected = null;
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

          this._labelPosition = 'after';
          /** Whether the radio group is disabled. */

          this._disabled = false;
          /** Whether the radio group is required. */

          this._required = false;
          /** The method to be called in order to update ngModel */

          this._controlValueAccessorChangeFn = function () {};
          /**
           * onTouch function registered via registerOnTouch (ControlValueAccessor).
           * @docs-private
           */


          this.onTouched = function () {};
          /**
           * Event emitted when the group value changes.
           * Change events are only emitted when the value changes due to user interaction with
           * a radio button (the same behavior as `<input type-"radio">`).
           */


          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** Name of the radio button group. All radio buttons inside this group will use this name. */


        _createClass(_MatRadioGroupBase, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            this._name = value;

            this._updateRadioButtonNames();
          }
          /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

        }, {
          key: "labelPosition",
          get: function get() {
            return this._labelPosition;
          },
          set: function set(v) {
            this._labelPosition = v === 'before' ? 'before' : 'after';

            this._markRadiosForCheck();
          }
          /**
           * Value for the radio-group. Should equal the value of the selected radio button if there is
           * a corresponding radio button with a matching value. If there is not such a corresponding
           * radio button, this value persists to be applied in case a new radio button is added with a
           * matching value.
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (this._value !== newValue) {
              // Set this before proceeding to ensure no circular loop occurs with selection.
              this._value = newValue;

              this._updateSelectedRadioFromValue();

              this._checkSelectedRadioButton();
            }
          }
        }, {
          key: "_checkSelectedRadioButton",
          value: function _checkSelectedRadioButton() {
            if (this._selected && !this._selected.checked) {
              this._selected.checked = true;
            }
          }
          /**
           * The currently selected radio button. If set to a new radio button, the radio group value
           * will be updated to match the new selected button.
           */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;

            this._checkSelectedRadioButton();
          }
          /** Whether the radio group is disabled */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._markRadiosForCheck();
          }
          /** Whether the radio group is required */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._markRadiosForCheck();
          }
          /**
           * Initialize properties once content children are available.
           * This allows us to propagate relevant attributes to associated buttons.
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            // Mark this component as initialized in AfterContentInit because the initial value can
            // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
            // NgModel occurs *after* the OnInit of the MatRadioGroup.
            this._isInitialized = true;
          }
          /**
           * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
           * radio buttons upon their blur.
           */

        }, {
          key: "_touch",
          value: function _touch() {
            if (this.onTouched) {
              this.onTouched();
            }
          }
        }, {
          key: "_updateRadioButtonNames",
          value: function _updateRadioButtonNames() {
            var _this = this;

            if (this._radios) {
              this._radios.forEach(function (radio) {
                radio.name = _this.name;

                radio._markForCheck();
              });
            }
          }
          /** Updates the `selected` radio button from the internal _value state. */

        }, {
          key: "_updateSelectedRadioFromValue",
          value: function _updateSelectedRadioFromValue() {
            var _this2 = this;

            // If the value already matches the selected radio, do nothing.
            var isAlreadySelected = this._selected !== null && this._selected.value === this._value;

            if (this._radios && !isAlreadySelected) {
              this._selected = null;

              this._radios.forEach(function (radio) {
                radio.checked = _this2.value === radio.value;

                if (radio.checked) {
                  _this2._selected = radio;
                }
              });
            }
          }
          /** Dispatch change event with current selection and group value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            if (this._isInitialized) {
              this.change.emit(new MatRadioChange(this._selected, this._value));
            }
          }
        }, {
          key: "_markRadiosForCheck",
          value: function _markRadiosForCheck() {
            if (this._radios) {
              this._radios.forEach(function (radio) {
                return radio._markForCheck();
              });
            }
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
          }
          /**
           * Registers a callback to be triggered when the model value changes.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the control is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
           * @param isDisabled Whether the control should be disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetector.markForCheck();
          }
        }]);

        return _MatRadioGroupBase;
      }();

      _MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
        return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      _MatRadioGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRadioGroupBase,
        inputs: {
          name: "name",
          labelPosition: "labelPosition",
          value: "value",
          selected: "selected",
          disabled: "disabled",
          required: "required",
          color: "color"
        },
        outputs: {
          change: "change"
        }
      });

      _MatRadioGroupBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      _MatRadioGroupBase.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
       */


      var MatRadioGroup = /*#__PURE__*/function (_MatRadioGroupBase2) {
        _inherits(MatRadioGroup, _MatRadioGroupBase2);

        var _super = _createSuper(MatRadioGroup);

        function MatRadioGroup() {
          _classCallCheck(this, MatRadioGroup);

          return _super.apply(this, arguments);
        }

        return _createClass(MatRadioGroup);
      }(_MatRadioGroupBase);

      MatRadioGroup.ɵfac = function MatRadioGroup_Factory(t) {
        return ɵMatRadioGroup_BaseFactory(t || MatRadioGroup);
      };

      MatRadioGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRadioGroup,
        selectors: [["mat-radio-group"]],
        contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
          }
        },
        hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
        exportAs: ["matRadioGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
          provide: MAT_RADIO_GROUP,
          useExisting: MatRadioGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      MatRadioGroup.propDecorators = {
        _radios: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return MatRadioButton;
          }), {
            descendants: true
          }]
        }]
      };

      var ɵMatRadioGroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-radio-group',
            exportAs: 'matRadioGroup',
            providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
              provide: MAT_RADIO_GROUP,
              useExisting: MatRadioGroup
            }],
            host: {
              'role': 'radiogroup',
              'class': 'mat-radio-group'
            }
          }]
        }], null, {
          _radios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return MatRadioButton;
            }), {
              descendants: true
            }]
          }]
        });
      })(); // Boilerplate for applying mixins to MatRadioButton.

      /** @docs-private */


      var MatRadioButtonBase = /*#__PURE__*/_createClass(function MatRadioButtonBase(_elementRef) {
        _classCallCheck(this, MatRadioButtonBase);

        this._elementRef = _elementRef;
      }); // As per Material design specifications the selection control radio should use the accent color
      // palette by default. https://material.io/guidelines/components/selection-controls.html


      var _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinTabIndex"])(MatRadioButtonBase));
      /**
       * Base class with all of the `MatRadioButton` functionality.
       * @docs-private
       */


      var _MatRadioButtonBase = /*#__PURE__*/function (_MatRadioButtonMixinB) {
        _inherits(_MatRadioButtonBase, _MatRadioButtonMixinB);

        var _super2 = _createSuper(_MatRadioButtonBase);

        function _MatRadioButtonBase(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride, tabIndex) {
          var _this3;

          _classCallCheck(this, _MatRadioButtonBase);

          _this3 = _super2.call(this, elementRef);
          _this3._changeDetector = _changeDetector;
          _this3._focusMonitor = _focusMonitor;
          _this3._radioDispatcher = _radioDispatcher;
          _this3._animationMode = _animationMode;
          _this3._providerOverride = _providerOverride;
          _this3._uniqueId = "mat-radio-".concat(++nextUniqueId);
          /** The unique ID for the radio button. */

          _this3.id = _this3._uniqueId;
          /**
           * Event emitted when the checked state of this radio button changes.
           * Change events are only emitted when the value changes due to user interaction with
           * the radio button (the same behavior as `<input type-"radio">`).
           */

          _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Whether this radio is checked. */

          _this3._checked = false;
          /** Value assigned to this radio. */

          _this3._value = null;
          /** Unregister function for _radioDispatcher */

          _this3._removeUniqueSelectionListener = function () {}; // Assertions. Ideally these should be stripped out by the compiler.
          // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.


          _this3.radioGroup = radioGroup;

          if (tabIndex) {
            _this3.tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(tabIndex, 0);
          }

          _this3._removeUniqueSelectionListener = _radioDispatcher.listen(function (id, name) {
            if (id !== _this3.id && name === _this3.name) {
              _this3.checked = false;
            }
          });
          return _this3;
        }
        /** Whether this radio button is checked. */


        _createClass(_MatRadioButtonBase, [{
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            var newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (this._checked !== newCheckedState) {
              this._checked = newCheckedState;

              if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
              } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
              }

              if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
              }

              this._changeDetector.markForCheck();
            }
          }
          /** The value of this radio button. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            if (this._value !== value) {
              this._value = value;

              if (this.radioGroup !== null) {
                if (!this.checked) {
                  // Update checked when the value changed to match the radio group's value
                  this.checked = this.radioGroup.value === value;
                }

                if (this.checked) {
                  this.radioGroup.selected = this;
                }
              }
            }
          }
          /** Whether the label should appear after or before the radio button. Defaults to 'after' */

        }, {
          key: "labelPosition",
          get: function get() {
            return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
          },
          set: function set(value) {
            this._labelPosition = value;
          }
          /** Whether the radio button is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
          },
          set: function set(value) {
            this._setDisabled(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value));
          }
          /** Whether the radio button is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required || this.radioGroup && this.radioGroup.required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Theme color of the radio button. */

        }, {
          key: "color",
          get: function get() {
            return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
          },
          set: function set(newValue) {
            this._color = newValue;
          }
          /** ID of the native input element inside `<mat-radio-button>` */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
          /** Focuses the radio button. */

        }, {
          key: "focus",
          value: function focus(options, origin) {
            if (origin) {
              this._focusMonitor.focusVia(this._inputElement, origin, options);
            } else {
              this._inputElement.nativeElement.focus(options);
            }
          }
          /**
           * Marks the radio button as needing checking for change detection.
           * This method is exposed because the parent radio group will directly
           * update bound properties of the radio button.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // When group value changes, the button will not be notified. Use `markForCheck` to explicit
            // update radio button's status
            this._changeDetector.markForCheck();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.radioGroup) {
              // If the radio is inside a radio group, determine if it should be checked
              this.checked = this.radioGroup.value === this._value;

              if (this.checked) {
                this.radioGroup.selected = this;
              } // Copy name from parent radio group


              this.name = this.radioGroup.name;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              if (!focusOrigin && _this4.radioGroup) {
                _this4.radioGroup._touch();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            this._removeUniqueSelectionListener();
          }
          /** Dispatch change event with current value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this.change.emit(new MatRadioChange(this, this._value));
          }
        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `radio-button` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /**
           * Triggered when the radio button received a click or the input recognized any change.
           * Clicking on a label element, will trigger a change event on the associated input.
           */

        }, {
          key: "_onInputChange",
          value: function _onInputChange(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
            var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
            this.checked = true;

            this._emitChangeEvent();

            if (this.radioGroup) {
              this.radioGroup._controlValueAccessorChangeFn(this.value);

              if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
              }
            }
          }
          /** Sets the disabled state and marks for check if a change occurred. */

        }, {
          key: "_setDisabled",
          value: function _setDisabled(value) {
            if (this._disabled !== value) {
              this._disabled = value;

              this._changeDetector.markForCheck();
            }
          }
        }]);

        return _MatRadioButtonBase;
      }(_MatRadioButtonMixinBase);

      _MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
        return new (t || _MatRadioButtonBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatRadioGroupBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String));
      };

      _MatRadioButtonBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRadioButtonBase,
        viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          }
        },
        inputs: {
          id: "id",
          checked: "checked",
          value: "value",
          labelPosition: "labelPosition",
          disabled: "disabled",
          required: "required",
          color: "color",
          name: "name",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
        },
        outputs: {
          change: "change"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatRadioButtonBase.ctorParameters = function () {
        return [{
          type: _MatRadioGroupBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]
        }, {
          type: String
        }, {
          type: undefined
        }, {
          type: String
        }];
      };

      _MatRadioButtonBase.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-describedby']
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _MatRadioGroupBase
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]
          }, {
            type: String
          }, {
            type: undefined
          }, {
            type: String
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
          }]
        });
      })();
      /**
       * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
       */


      var MatRadioButton = /*#__PURE__*/function (_MatRadioButtonBase2) {
        _inherits(MatRadioButton, _MatRadioButtonBase2);

        var _super3 = _createSuper(MatRadioButton);

        function MatRadioButton(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
          _classCallCheck(this, MatRadioButton);

          return _super3.call(this, radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
        }

        return _createClass(MatRadioButton);
      }(_MatRadioButtonBase);

      MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
        return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };

      MatRadioButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatRadioButton,
        selectors: [["mat-radio-button"]],
        hostAttrs: [1, "mat-radio-button"],
        hostVars: 17,
        hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
              return ctx._inputElement.nativeElement.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          tabIndex: "tabIndex"
        },
        exportAs: ["matRadioButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c2,
        decls: 13,
        vars: 19,
        consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
        template: function MatRadioButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
              return ctx._onInputChange($event);
            })("click", function MatRadioButton_Template_input_click_5_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatRadioButton.ctorParameters = function () {
        return [{
          type: MatRadioGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RADIO_GROUP]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RADIO_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-radio-button',
            template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            inputs: ['disableRipple', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matRadioButton',
            host: {
              'class': 'mat-radio-button',
              '[class.mat-radio-checked]': 'checked',
              '[class.mat-radio-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-primary]': 'color === "primary"',
              '[class.mat-accent]': 'color === "accent"',
              '[class.mat-warn]': 'color === "warn"',
              // Needs to be removed since it causes some a11y issues (see #21266).
              '[attr.tabindex]': 'null',
              '[attr.id]': 'id',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[attr.aria-describedby]': 'null',
              // Note: under normal conditions focus shouldn't land on this element, however it may be
              // programmatically set, for example inside of a focus trap, in this case we want to forward
              // the focus to the native element.
              '(focus)': '_inputElement.nativeElement.focus()'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
          }]
        }], function () {
          return [{
            type: MatRadioGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RADIO_GROUP]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RADIO_DEFAULT_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatRadioModule = /*#__PURE__*/_createClass(function MatRadioModule() {
        _classCallCheck(this, MatRadioModule);
      });

      MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
        return new (t || MatRadioModule)();
      };

      MatRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRadioModule
      });
      MatRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRadioModule, {
          declarations: function declarations() {
            return [MatRadioGroup, MatRadioButton];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatRadioGroup, MatRadioButton]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=radio.js.map

      /***/

    },

    /***/
    "dNgK":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js ***!
      \***************************************************************************/

    /*! exports provided: MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */

    /***/
    function dNgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function () {
        return MAT_SNACK_BAR_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function () {
        return MAT_SNACK_BAR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBar", function () {
        return MatSnackBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function () {
        return MatSnackBarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function () {
        return MatSnackBarContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function () {
        return MatSnackBarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function () {
        return MatSnackBarRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function () {
        return SimpleSnackBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function () {
        return matSnackBarAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a snack bar. */


      function SimpleSnackBar_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1.action();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.action);
        }
      }

      function MatSnackBarContainer_ng_template_1_Template(rf, ctx) {}

      var MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatSnackBarData');
      /**
       * Configuration used when opening a snack-bar.
       */

      var MatSnackBarConfig = /*#__PURE__*/_createClass(function MatSnackBarConfig() {
        _classCallCheck(this, MatSnackBarConfig);

        /** The politeness level for the MatAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /**
         * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
         * component or template, the announcement message will default to the specified message.
         */

        this.announcementMessage = '';
        /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */

        this.duration = 0;
        /** Data being injected into the child component. */

        this.data = null;
        /** The horizontal position to place the snack bar. */

        this.horizontalPosition = 'center';
        /** The vertical position to place the snack bar. */

        this.verticalPosition = 'bottom';
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Maximum amount of milliseconds that can be passed into setTimeout. */


      var MAX_TIMEOUT = Math.pow(2, 31) - 1;
      /**
       * Reference to a snack bar dispatched from the snack bar service.
       */

      var MatSnackBarRef = /*#__PURE__*/function () {
        function MatSnackBarRef(containerInstance, _overlayRef) {
          var _this5 = this;

          _classCallCheck(this, MatSnackBarRef);

          this._overlayRef = _overlayRef;
          /** Subject for notifying the user that the snack bar has been dismissed. */

          this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the snack bar has opened and appeared. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the snack bar action was called. */

          this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Whether the snack bar was dismissed using the action button. */

          this._dismissedByAction = false;
          this.containerInstance = containerInstance; // Dismiss snackbar on action.

          this.onAction().subscribe(function () {
            return _this5.dismiss();
          });

          containerInstance._onExit.subscribe(function () {
            return _this5._finishDismiss();
          });
        }
        /** Dismisses the snack bar. */


        _createClass(MatSnackBarRef, [{
          key: "dismiss",
          value: function dismiss() {
            if (!this._afterDismissed.closed) {
              this.containerInstance.exit();
            }

            clearTimeout(this._durationTimeoutId);
          }
          /** Marks the snackbar action clicked. */

        }, {
          key: "dismissWithAction",
          value: function dismissWithAction() {
            if (!this._onAction.closed) {
              this._dismissedByAction = true;

              this._onAction.next();

              this._onAction.complete();
            }

            clearTimeout(this._durationTimeoutId);
          }
          /**
           * Marks the snackbar action clicked.
           * @deprecated Use `dismissWithAction` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "closeWithAction",
          value: function closeWithAction() {
            this.dismissWithAction();
          }
          /** Dismisses the snack bar after some duration */

        }, {
          key: "_dismissAfter",
          value: function _dismissAfter(duration) {
            var _this6 = this;

            // Note that we need to cap the duration to the maximum value for setTimeout, because
            // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
            this._durationTimeoutId = setTimeout(function () {
              return _this6.dismiss();
            }, Math.min(duration, MAX_TIMEOUT));
          }
          /** Marks the snackbar as opened */

        }, {
          key: "_open",
          value: function _open() {
            if (!this._afterOpened.closed) {
              this._afterOpened.next();

              this._afterOpened.complete();
            }
          }
          /** Cleans up the DOM after closing. */

        }, {
          key: "_finishDismiss",
          value: function _finishDismiss() {
            this._overlayRef.dispose();

            if (!this._onAction.closed) {
              this._onAction.complete();
            }

            this._afterDismissed.next({
              dismissedByAction: this._dismissedByAction
            });

            this._afterDismissed.complete();

            this._dismissedByAction = false;
          }
          /** Gets an observable that is notified when the snack bar is finished closing. */

        }, {
          key: "afterDismissed",
          value: function afterDismissed() {
            return this._afterDismissed;
          }
          /** Gets an observable that is notified when the snack bar has opened and appeared. */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this.containerInstance._onEnter;
          }
          /** Gets an observable that is notified when the snack bar action is called. */

        }, {
          key: "onAction",
          value: function onAction() {
            return this._onAction;
          }
        }]);

        return MatSnackBarRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A component used to open as the default snack bar, matching material spec.
       * This should only be used internally by the snack bar service.
       */


      var SimpleSnackBar = /*#__PURE__*/function () {
        function SimpleSnackBar(snackBarRef, data) {
          _classCallCheck(this, SimpleSnackBar);

          this.snackBarRef = snackBarRef;
          this.data = data;
        }
        /** Performs the action on the snack bar. */


        _createClass(SimpleSnackBar, [{
          key: "action",
          value: function action() {
            this.snackBarRef.dismissWithAction();
          }
          /** If the action button should be shown. */

        }, {
          key: "hasAction",
          get: function get() {
            return !!this.data.action;
          }
        }]);

        return SimpleSnackBar;
      }();

      SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) {
        return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
      };

      SimpleSnackBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SimpleSnackBar,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-simple-snackbar"],
        decls: 3,
        vars: 2,
        consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]],
        template: function SimpleSnackBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      SimpleSnackBar.ctorParameters = function () {
        return [{
          type: MatSnackBarRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_SNACK_BAR_DATA]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SimpleSnackBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'simple-snack-bar',
            template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-simple-snackbar'
            },
            styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: MatSnackBarRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_SNACK_BAR_DATA]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material snack bar.
       * @docs-private
       */


      var matSnackBarAnimations = {
        /** Animation that shows and hides a snack bar. */
        snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'scale(0.8)',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'scale(1)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Internal component that wraps user-provided snack bar content.
       * @docs-private
       */

      var MatSnackBarContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(MatSnackBarContainer, _angular_cdk_portal__);

        var _super4 = _createSuper(MatSnackBarContainer);

        function MatSnackBarContainer(_ngZone, _elementRef, _changeDetectorRef, _platform,
        /** The snack bar configuration. */
        snackBarConfig) {
          var _this7;

          _classCallCheck(this, MatSnackBarContainer);

          _this7 = _super4.call(this);
          _this7._ngZone = _ngZone;
          _this7._elementRef = _elementRef;
          _this7._changeDetectorRef = _changeDetectorRef;
          _this7._platform = _platform;
          _this7.snackBarConfig = snackBarConfig;
          /** The number of milliseconds to wait before announcing the snack bar's content. */

          _this7._announceDelay = 150;
          /** Whether the component has been destroyed. */

          _this7._destroyed = false;
          /** Subject for notifying that the snack bar has announced to screen readers. */

          _this7._onAnnounce = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying that the snack bar has exited from view. */

          _this7._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying that the snack bar has finished entering the view. */

          _this7._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** The state of the snack bar animations. */

          _this7._animationState = 'void';
          /**
           * Attaches a DOM portal to the snack bar container.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this7.attachDomPortal = function (portal) {
            _this7._assertNotAttached();

            _this7._applySnackBarClasses();

            return _this7._portalOutlet.attachDomPortal(portal);
          }; // Use aria-live rather than a live role like 'alert' or 'status'
          // because NVDA and JAWS have show inconsistent behavior with live roles.


          if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
            _this7._live = 'assertive';
          } else if (snackBarConfig.politeness === 'off') {
            _this7._live = 'off';
          } else {
            _this7._live = 'polite';
          } // Only set role for Firefox. Set role based on aria-live because setting role="alert" implies
          // aria-live="assertive" which may cause issues if aria-live is set to "polite" above.


          if (_this7._platform.FIREFOX) {
            if (_this7._live === 'polite') {
              _this7._role = 'status';
            }

            if (_this7._live === 'assertive') {
              _this7._role = 'alert';
            }
          }

          return _this7;
        }
        /** Attach a component portal as content to this snack bar container. */


        _createClass(MatSnackBarContainer, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            this._assertNotAttached();

            this._applySnackBarClasses();

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /** Attach a template portal as content to this snack bar container. */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            this._assertNotAttached();

            this._applySnackBarClasses();

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Handle end of animations, updating the state of the snackbar. */

        }, {
          key: "onAnimationEnd",
          value: function onAnimationEnd(event) {
            var fromState = event.fromState,
                toState = event.toState;

            if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
              this._completeExit();
            }

            if (toState === 'visible') {
              // Note: we shouldn't use `this` inside the zone callback,
              // because it can cause a memory leak.
              var onEnter = this._onEnter;

              this._ngZone.run(function () {
                onEnter.next();
                onEnter.complete();
              });
            }
          }
          /** Begin animation of snack bar entrance into view. */

        }, {
          key: "enter",
          value: function enter() {
            if (!this._destroyed) {
              this._animationState = 'visible';

              this._changeDetectorRef.detectChanges();

              this._screenReaderAnnounce();
            }
          }
          /** Begin animation of the snack bar exiting from view. */

        }, {
          key: "exit",
          value: function exit() {
            // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
            // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
            // `MatSnackBar.open`).
            this._animationState = 'hidden'; // Mark this element with an 'exit' attribute to indicate that the snackbar has
            // been dismissed and will soon be removed from the DOM. This is used by the snackbar
            // test harness.

            this._elementRef.nativeElement.setAttribute('mat-exit', ''); // If the snack bar hasn't been announced by the time it exits it wouldn't have been open
            // long enough to visually read it either, so clear the timeout for announcing.


            clearTimeout(this._announceTimeoutId);
            return this._onExit;
          }
          /** Makes sure the exit callbacks have been invoked when the element is destroyed. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed = true;

            this._completeExit();
          }
          /**
           * Waits for the zone to settle before removing the element. Helps prevent
           * errors where we end up removing an element which is in the middle of an animation.
           */

        }, {
          key: "_completeExit",
          value: function _completeExit() {
            var _this8 = this;

            this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              _this8._onExit.next();

              _this8._onExit.complete();
            });
          }
          /** Applies the various positioning and user-configured CSS classes to the snack bar. */

        }, {
          key: "_applySnackBarClasses",
          value: function _applySnackBarClasses() {
            var element = this._elementRef.nativeElement;
            var panelClasses = this.snackBarConfig.panelClass;

            if (panelClasses) {
              if (Array.isArray(panelClasses)) {
                // Note that we can't use a spread here, because IE doesn't support multiple arguments.
                panelClasses.forEach(function (cssClass) {
                  return element.classList.add(cssClass);
                });
              } else {
                element.classList.add(panelClasses);
              }
            }

            if (this.snackBarConfig.horizontalPosition === 'center') {
              element.classList.add('mat-snack-bar-center');
            }

            if (this.snackBarConfig.verticalPosition === 'top') {
              element.classList.add('mat-snack-bar-top');
            }
          }
          /** Asserts that no content is already attached to the container. */

        }, {
          key: "_assertNotAttached",
          value: function _assertNotAttached() {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Attempting to attach snack bar content after content is already attached');
            }
          }
          /**
           * Starts a timeout to move the snack bar content to the live region so screen readers will
           * announce it.
           */

        }, {
          key: "_screenReaderAnnounce",
          value: function _screenReaderAnnounce() {
            var _this9 = this;

            if (!this._announceTimeoutId) {
              this._ngZone.runOutsideAngular(function () {
                _this9._announceTimeoutId = setTimeout(function () {
                  var inertElement = _this9._elementRef.nativeElement.querySelector('[aria-hidden]');

                  var liveElement = _this9._elementRef.nativeElement.querySelector('[aria-live]');

                  if (inertElement && liveElement) {
                    // If an element in the snack bar content is focused before being moved
                    // track it and restore focus after moving to the live region.
                    var focusedElement = null;

                    if (_this9._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
                      focusedElement = document.activeElement;
                    }

                    inertElement.removeAttribute('aria-hidden');
                    liveElement.appendChild(inertElement);
                    focusedElement === null || focusedElement === void 0 ? void 0 : focusedElement.focus();

                    _this9._onAnnounce.next();

                    _this9._onAnnounce.complete();
                  }
                }, _this9._announceDelay);
              });
            }
          }
        }]);

        return MatSnackBarContainer;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) {
        return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarConfig));
      };

      MatSnackBarContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatSnackBarContainer,
        selectors: [["snack-bar-container"]],
        viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        hostAttrs: [1, "mat-snack-bar-container"],
        hostVars: 1,
        hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
              return ctx.onAnimationEnd($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 2,
        consts: [["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
        template: function MatSnackBarContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatSnackBarContainer_ng_template_1_Template, 0, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],
        encapsulation: 2,
        data: {
          animation: [matSnackBarAnimations.snackBarState]
        }
      });

      MatSnackBarContainer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: MatSnackBarConfig
        }];
      };

      MatSnackBarContainer.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'snack-bar-container',
            template: "<!-- Initially holds the snack bar content, will be empty after announcing to screen readers. -->\n<div aria-hidden=\"true\">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n\n<!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n<div [attr.aria-live]=\"_live\" [attr.role]=\"_role\"></div>\n",
            // In Ivy embedded views will be change detected from their declaration place, rather than
            // where they were stamped out. This means that we can't have the snack bar container be OnPush,
            // because it might cause snack bars that were opened from a template not to be out of date.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            animations: [matSnackBarAnimations.snackBarState],
            host: {
              'class': 'mat-snack-bar-container',
              '[@state]': '_animationState',
              '(@state.done)': 'onAnimationEnd($event)'
            },
            styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: MatSnackBarConfig
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSnackBarModule = /*#__PURE__*/_createClass(function MatSnackBarModule() {
        _classCallCheck(this, MatSnackBarModule);
      });

      MatSnackBarModule.ɵfac = function MatSnackBarModule_Factory(t) {
        return new (t || MatSnackBarModule)();
      };

      MatSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatSnackBarModule
      });
      MatSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSnackBarModule, {
          declarations: function declarations() {
            return [MatSnackBarContainer, SimpleSnackBar];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
            exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
            declarations: [MatSnackBarContainer, SimpleSnackBar],
            entryComponents: [MatSnackBarContainer, SimpleSnackBar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to specify default snack bar. */


      var MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-snack-bar-default-options', {
        providedIn: 'root',
        factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
        return new MatSnackBarConfig();
      }
      /**
       * Service to dispatch Material Design snack bar messages.
       */


      var MatSnackBar = /*#__PURE__*/function () {
        function MatSnackBar(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
          _classCallCheck(this, MatSnackBar);

          this._overlay = _overlay;
          this._live = _live;
          this._injector = _injector;
          this._breakpointObserver = _breakpointObserver;
          this._parentSnackBar = _parentSnackBar;
          this._defaultConfig = _defaultConfig;
          /**
           * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
           * If there is a parent snack-bar service, all operations should delegate to that parent
           * via `_openedSnackBarRef`.
           */

          this._snackBarRefAtThisLevel = null;
          /** The component that should be rendered as the snack bar's simple component. */

          this.simpleSnackBarComponent = SimpleSnackBar;
          /** The container component that attaches the provided template or component. */

          this.snackBarContainerComponent = MatSnackBarContainer;
          /** The CSS class to apply for handset mode. */

          this.handsetCssClass = 'mat-snack-bar-handset';
        }
        /** Reference to the currently opened snackbar at *any* level. */


        _createClass(MatSnackBar, [{
          key: "_openedSnackBarRef",
          get: function get() {
            var parent = this._parentSnackBar;
            return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
          },
          set: function set(value) {
            if (this._parentSnackBar) {
              this._parentSnackBar._openedSnackBarRef = value;
            } else {
              this._snackBarRefAtThisLevel = value;
            }
          }
          /**
           * Creates and dispatches a snack bar with a custom component for the content, removing any
           * currently opened snack bars.
           *
           * @param component Component to be instantiated.
           * @param config Extra configuration for the snack bar.
           */

        }, {
          key: "openFromComponent",
          value: function openFromComponent(component, config) {
            return this._attach(component, config);
          }
          /**
           * Creates and dispatches a snack bar with a custom template for the content, removing any
           * currently opened snack bars.
           *
           * @param template Template to be instantiated.
           * @param config Extra configuration for the snack bar.
           */

        }, {
          key: "openFromTemplate",
          value: function openFromTemplate(template, config) {
            return this._attach(template, config);
          }
          /**
           * Opens a snackbar with a message and an optional action.
           * @param message The message to show in the snackbar.
           * @param action The label for the snackbar action.
           * @param config Additional configuration options for the snackbar.
           */

        }, {
          key: "open",
          value: function open(message) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var config = arguments.length > 2 ? arguments[2] : undefined;

            var _config = Object.assign(Object.assign({}, this._defaultConfig), config); // Since the user doesn't have access to the component, we can
            // override the data to pass in our own message and action.


            _config.data = {
              message: message,
              action: action
            }; // Since the snack bar has `role="alert"`, we don't
            // want to announce the same message twice.

            if (_config.announcementMessage === message) {
              _config.announcementMessage = undefined;
            }

            return this.openFromComponent(this.simpleSnackBarComponent, _config);
          }
          /**
           * Dismisses the currently-visible snack bar.
           */

        }, {
          key: "dismiss",
          value: function dismiss() {
            if (this._openedSnackBarRef) {
              this._openedSnackBarRef.dismiss();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Only dismiss the snack bar at the current level on destroy.
            if (this._snackBarRefAtThisLevel) {
              this._snackBarRefAtThisLevel.dismiss();
            }
          }
          /**
           * Attaches the snack bar container component to the overlay.
           */

        }, {
          key: "_attachSnackBarContainer",
          value: function _attachSnackBarContainer(overlayRef, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatSnackBarConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this.snackBarContainerComponent, config.viewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            containerRef.instance.snackBarConfig = config;
            return containerRef.instance;
          }
          /**
           * Places a new component or a template as the content of the snack bar container.
           */

        }, {
          key: "_attach",
          value: function _attach(content, userConfig) {
            var _this10 = this;

            var config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);

            var overlayRef = this._createOverlay(config);

            var container = this._attachSnackBarContainer(overlayRef, config);

            var snackBarRef = new MatSnackBarRef(container, overlayRef);

            if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
              var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](content, null, {
                $implicit: config.data,
                snackBarRef: snackBarRef
              });
              snackBarRef.instance = container.attachTemplatePortal(portal);
            } else {
              var injector = this._createInjector(config, snackBarRef);

              var _portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](content, undefined, injector);

              var contentRef = container.attachComponentPortal(_portal); // We can't pass this via the injector, because the injector is created earlier.

              snackBarRef.instance = contentRef.instance;
            } // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
            // appropriate. This class is applied to the overlay element because the overlay must expand to
            // fill the width of the screen for full width snackbars.


            this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(overlayRef.detachments())).subscribe(function (state) {
              var classList = overlayRef.overlayElement.classList;
              state.matches ? classList.add(_this10.handsetCssClass) : classList.remove(_this10.handsetCssClass);
            });

            if (config.announcementMessage) {
              // Wait until the snack bar contents have been announced then deliver this message.
              container._onAnnounce.subscribe(function () {
                _this10._live.announce(config.announcementMessage, config.politeness);
              });
            }

            this._animateSnackBar(snackBarRef, config);

            this._openedSnackBarRef = snackBarRef;
            return this._openedSnackBarRef;
          }
          /** Animates the old snack bar out and the new one in. */

        }, {
          key: "_animateSnackBar",
          value: function _animateSnackBar(snackBarRef, config) {
            var _this11 = this;

            // When the snackbar is dismissed, clear the reference to it.
            snackBarRef.afterDismissed().subscribe(function () {
              // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
              if (_this11._openedSnackBarRef == snackBarRef) {
                _this11._openedSnackBarRef = null;
              }

              if (config.announcementMessage) {
                _this11._live.clear();
              }
            });

            if (this._openedSnackBarRef) {
              // If a snack bar is already in view, dismiss it and enter the
              // new snack bar after exit animation is complete.
              this._openedSnackBarRef.afterDismissed().subscribe(function () {
                snackBarRef.containerInstance.enter();
              });

              this._openedSnackBarRef.dismiss();
            } else {
              // If no snack bar is in view, enter the new snack bar.
              snackBarRef.containerInstance.enter();
            } // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.


            if (config.duration && config.duration > 0) {
              snackBarRef.afterOpened().subscribe(function () {
                return snackBarRef._dismissAfter(config.duration);
              });
            }
          }
          /**
           * Creates a new overlay and places it in the correct location.
           * @param config The user-specified snack bar config.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]();
            overlayConfig.direction = config.direction;

            var positionStrategy = this._overlay.position().global(); // Set horizontal position.


            var isRtl = config.direction === 'rtl';
            var isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
            var isRight = !isLeft && config.horizontalPosition !== 'center';

            if (isLeft) {
              positionStrategy.left('0');
            } else if (isRight) {
              positionStrategy.right('0');
            } else {
              positionStrategy.centerHorizontally();
            } // Set horizontal position.


            if (config.verticalPosition === 'top') {
              positionStrategy.top('0');
            } else {
              positionStrategy.bottom('0');
            }

            overlayConfig.positionStrategy = positionStrategy;
            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an injector to be used inside of a snack bar component.
           * @param config Config that was used to create the snack bar.
           * @param snackBarRef Reference to the snack bar.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, snackBarRef) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatSnackBarRef,
                useValue: snackBarRef
              }, {
                provide: MAT_SNACK_BAR_DATA,
                useValue: config.data
              }]
            });
          }
        }]);

        return MatSnackBar;
      }();

      MatSnackBar.ɵfac = function MatSnackBar_Factory(t) {
        return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
      };

      MatSnackBar.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
        factory: function MatSnackBar_Factory() {
          return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS));
        },
        token: MatSnackBar,
        providedIn: MatSnackBarModule
      });

      MatSnackBar.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["BreakpointObserver"]
        }, {
          type: MatSnackBar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: MatSnackBarConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
          args: [{
            providedIn: MatSnackBarModule
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["BreakpointObserver"]
          }, {
            type: MatSnackBar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }]
          }, {
            type: MatSnackBarConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=snack-bar.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~doctor-doctor-module~patient-patient-module-es5.js.map