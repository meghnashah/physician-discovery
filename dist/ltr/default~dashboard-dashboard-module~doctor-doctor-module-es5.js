(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~doctor-doctor-module"], {
    /***/
    "5+WD":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
      \**********************************************************************/

    /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem */

    /***/
    function WD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
        return CDK_DRAG_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_HANDLE", function () {
        return CDK_DRAG_HANDLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PARENT", function () {
        return CDK_DRAG_PARENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PLACEHOLDER", function () {
        return CDK_DRAG_PLACEHOLDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PREVIEW", function () {
        return CDK_DRAG_PREVIEW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
        return CDK_DROP_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_GROUP", function () {
        return CDK_DROP_LIST_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
        return CdkDrag;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
        return CdkDragHandle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
        return CdkDragPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
        return CdkDragPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
        return CdkDropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
        return CdkDropListGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
        return DragDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
        return DragDropModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
        return DragDropRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragRef", function () {
        return DragRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
        return DropListRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
        return copyArrayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
        return moveItemInArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
        return transferArrayItem;
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


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shallow-extends a stylesheet object with another stylesheet object.
       * @docs-private
       */


      function extendStyles(dest, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }

        return dest;
      }
      /**
       * Toggles whether the native drag interactions should be enabled for an element.
       * @param element Element on which to toggle the drag interactions.
       * @param enable Whether the drag interactions should be enabled.
       * @docs-private
       */


      function toggleNativeDragInteractions(element, enable) {
        var userSelect = enable ? '' : 'none';
        extendStyles(element.style, {
          touchAction: enable ? '' : 'none',
          webkitUserDrag: enable ? '' : 'none',
          webkitTapHighlightColor: enable ? '' : 'transparent',
          userSelect: userSelect,
          msUserSelect: userSelect,
          webkitUserSelect: userSelect,
          MozUserSelect: userSelect
        });
      }
      /**
       * Toggles whether an element is visible while preserving its dimensions.
       * @param element Element whose visibility to toggle
       * @param enable Whether the element should be visible.
       * @docs-private
       */


      function toggleVisibility(element, enable) {
        var styles = element.style;
        styles.position = enable ? '' : 'fixed';
        styles.top = styles.opacity = enable ? '' : '0';
        styles.left = enable ? '' : '-999em';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Parses a CSS time value to milliseconds. */


      function parseCssTimeUnitsToMs(value) {
        // Some browsers will return it in seconds, whereas others will return milliseconds.
        var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
        return parseFloat(value) * multiplier;
      }
      /** Gets the transform transition duration, including the delay, of an element in milliseconds. */


      function getTransformTransitionDurationInMs(element) {
        var computedStyle = getComputedStyle(element);
        var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
        var property = transitionedProperties.find(function (prop) {
          return prop === 'transform' || prop === 'all';
        }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

        if (!property) {
          return 0;
        } // Get the index of the property that we're interested in and match
        // it up to the same index in `transition-delay` and `transition-duration`.


        var propertyIndex = transitionedProperties.indexOf(property);
        var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
        var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
        return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
      }
      /** Parses out multiple values from a computed style into an array. */


      function parseCssPropertyValue(computedStyle, name) {
        var value = computedStyle.getPropertyValue(name);
        return value.split(',').map(function (part) {
          return part.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets a mutable version of an element's bounding `ClientRect`. */


      function getMutableClientRect(element) {
        var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
        // and we need to be able to update them. Also we can't use a spread here, because
        // the values on a `ClientRect` aren't own properties. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

        return {
          top: clientRect.top,
          right: clientRect.right,
          bottom: clientRect.bottom,
          left: clientRect.left,
          width: clientRect.width,
          height: clientRect.height
        };
      }
      /**
       * Checks whether some coordinates are within a `ClientRect`.
       * @param clientRect ClientRect that is being checked.
       * @param x Coordinates along the X axis.
       * @param y Coordinates along the Y axis.
       */


      function isInsideClientRect(clientRect, x, y) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            left = clientRect.left,
            right = clientRect.right;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      /**
       * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
       * @param clientRect `ClientRect` that should be updated.
       * @param top Amount to add to the `top` position.
       * @param left Amount to add to the `left` position.
       */


      function adjustClientRect(clientRect, top, left) {
        clientRect.top += top;
        clientRect.bottom = clientRect.top + clientRect.height;
        clientRect.left += left;
        clientRect.right = clientRect.left + clientRect.width;
      }
      /**
       * Checks whether the pointer coordinates are close to a ClientRect.
       * @param rect ClientRect to check against.
       * @param threshold Threshold around the ClientRect.
       * @param pointerX Coordinates along the X axis.
       * @param pointerY Coordinates along the Y axis.
       */


      function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
        var top = rect.top,
            right = rect.right,
            bottom = rect.bottom,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var xThreshold = width * threshold;
        var yThreshold = height * threshold;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Keeps track of the scroll position and dimensions of the parents of an element. */


      var ParentPositionTracker = /*#__PURE__*/function () {
        function ParentPositionTracker(_document, _viewportRuler) {
          _classCallCheck(this, ParentPositionTracker);

          this._document = _document;
          this._viewportRuler = _viewportRuler;
          /** Cached positions of the scrollable parent elements. */

          this.positions = new Map();
        }
        /** Clears the cached positions. */


        _createClass(ParentPositionTracker, [{
          key: "clear",
          value: function clear() {
            this.positions.clear();
          }
          /** Caches the positions. Should be called at the beginning of a drag sequence. */

        }, {
          key: "cache",
          value: function cache(elements) {
            var _this = this;

            this.clear();
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            });
            elements.forEach(function (element) {
              _this.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft
                },
                clientRect: getMutableClientRect(element)
              });
            });
          }
          /** Handles scrolling while a drag is taking place. */

        }, {
          key: "handleScroll",
          value: function handleScroll(event) {
            var target = event.target;
            var cachedPosition = this.positions.get(target);

            if (!cachedPosition) {
              return null;
            } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
            // parent is the `document`, we use the `documentElement`, because IE doesn't support
            // `contains` on the `document`.


            var scrolledParentNode = target === this._document ? target.documentElement : target;
            var scrollPosition = cachedPosition.scrollPosition;
            var newTop;
            var newLeft;

            if (target === this._document) {
              var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

              newTop = viewportScrollPosition.top;
              newLeft = viewportScrollPosition.left;
            } else {
              newTop = target.scrollTop;
              newLeft = target.scrollLeft;
            }

            var topDifference = scrollPosition.top - newTop;
            var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
            // parents that are inside the element that was scrolled.

            this.positions.forEach(function (position, node) {
              if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
              }
            });
            scrollPosition.top = newTop;
            scrollPosition.left = newLeft;
            return {
              top: topDifference,
              left: leftDifference
            };
          }
        }]);

        return ParentPositionTracker;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Creates a deep clone of an element. */


      function deepCloneNode(node) {
        var clone = node.cloneNode(true);
        var descendantsWithId = clone.querySelectorAll('[id]');
        var nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

        clone.removeAttribute('id');

        for (var i = 0; i < descendantsWithId.length; i++) {
          descendantsWithId[i].removeAttribute('id');
        }

        if (nodeName === 'canvas') {
          transferCanvasData(node, clone);
        } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
          transferInputData(node, clone);
        }

        transferData('canvas', node, clone, transferCanvasData);
        transferData('input, textarea, select', node, clone, transferInputData);
        return clone;
      }
      /** Matches elements between an element and its clone and allows for their data to be cloned. */


      function transferData(selector, node, clone, callback) {
        var descendantElements = node.querySelectorAll(selector);

        if (descendantElements.length) {
          var cloneElements = clone.querySelectorAll(selector);

          for (var i = 0; i < descendantElements.length; i++) {
            callback(descendantElements[i], cloneElements[i]);
          }
        }
      } // Counter for unique cloned radio button names.


      var cloneUniqueId = 0;
      /** Transfers the data of one input element to another. */

      function transferInputData(source, clone) {
        // Browsers throw an error when assigning the value of a file input programmatically.
        if (clone.type !== 'file') {
          clone.value = source.value;
        } // Radio button `name` attributes must be unique for radio button groups
        // otherwise original radio buttons can lose their checked state
        // once the clone is inserted in the DOM.


        if (clone.type === 'radio' && clone.name) {
          clone.name = "mat-clone-".concat(clone.name, "-").concat(cloneUniqueId++);
        }
      }
      /** Transfers the data of one canvas element to another. */


      function transferCanvasData(source, clone) {
        var context = clone.getContext('2d');

        if (context) {
          // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
          // We can't do much about it so just ignore the error.
          try {
            context.drawImage(source, 0, 0);
          } catch (_a) {}
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options that can be used to bind a passive event listener. */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Options that can be used to bind an active event listener. */

      var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Time in milliseconds for which to ignore mouse events, after
       * receiving a touch event. Used to avoid doing double work for
       * touch devices where the browser fires fake mouse events, in
       * addition to touch events.
       */

      var MOUSE_EVENT_IGNORE_TIME = 800;
      /**
       * Reference to a draggable item. Used to manipulate or dispose of the item.
       */

      var DragRef = /*#__PURE__*/function () {
        function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
          var _this2 = this;

          _classCallCheck(this, DragRef);

          this._config = _config;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
          /**
           * CSS `transform` applied to the element when it isn't being dragged. We need a
           * passive transform in order for the dragged element to retain its new position
           * after the user has stopped dragging and because we need to know the relative
           * position in case they start dragging again. This corresponds to `element.style.transform`.
           */

          this._passiveTransform = {
            x: 0,
            y: 0
          };
          /** CSS `transform` that is applied to the element while it's being dragged. */

          this._activeTransform = {
            x: 0,
            y: 0
          };
          /** Emits when the item is being moved. */

          this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Subscription to pointer movement events. */

          this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the event that is dispatched when the user lifts their pointer. */

          this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being scrolled. */

          this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being resized. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Cached reference to the boundary element. */

          this._boundaryElement = null;
          /** Whether the native dragging interactions have been enabled on the root element. */

          this._nativeInteractionsEnabled = true;
          /** Elements that can be used to drag the draggable item. */

          this._handles = [];
          /** Registered handles that are currently disabled. */

          this._disabledHandles = new Set();
          /** Layout direction of the item. */

          this._direction = 'ltr';
          /**
           * Amount of milliseconds to wait after the user has put their
           * pointer down before starting to drag the element.
           */

          this.dragStartDelay = 0;
          this._disabled = false;
          /** Emits as the drag sequence is being prepared. */

          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = this._moveEvents;
          /** Handler for the `mousedown`/`touchstart` events. */

          this._pointerDown = function (event) {
            _this2.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


            if (_this2._handles.length) {
              var targetHandle = _this2._handles.find(function (handle) {
                var target = event.target;
                return !!target && (target === handle || handle.contains(target));
              });

              if (targetHandle && !_this2._disabledHandles.has(targetHandle) && !_this2.disabled) {
                _this2._initializeDragSequence(targetHandle, event);
              }
            } else if (!_this2.disabled) {
              _this2._initializeDragSequence(_this2._rootElement, event);
            }
          };
          /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


          this._pointerMove = function (event) {
            var pointerPosition = _this2._getPointerPositionOnPage(event);

            if (!_this2._hasStartedDragging) {
              var distanceX = Math.abs(pointerPosition.x - _this2._pickupPositionOnPage.x);
              var distanceY = Math.abs(pointerPosition.y - _this2._pickupPositionOnPage.y);
              var isOverThreshold = distanceX + distanceY >= _this2._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
              // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
              // in the `pointerMove` subscription, because we're not guaranteed to have one move event
              // per pixel of movement (e.g. if the user moves their pointer quickly).

              if (isOverThreshold) {
                var isDelayElapsed = Date.now() >= _this2._dragStartTime + _this2._getDragStartDelay(event);

                var container = _this2._dropContainer;

                if (!isDelayElapsed) {
                  _this2._endDragSequence(event);

                  return;
                } // Prevent other drag sequences from starting while something in the container is still
                // being dragged. This can happen while we're waiting for the drop animation to finish
                // and can cause errors, because some elements might still be moving around.


                if (!container || !container.isDragging() && !container.isReceiving()) {
                  // Prevent the default action as soon as the dragging sequence is considered as
                  // "started" since waiting for the next event can allow the device to begin scrolling.
                  event.preventDefault();
                  _this2._hasStartedDragging = true;

                  _this2._ngZone.run(function () {
                    return _this2._startDragSequence(event);
                  });
                }
              }

              return;
            } // We only need the preview dimensions if we have a boundary element.


            if (_this2._boundaryElement) {
              // Cache the preview element rect if we haven't cached it already or if
              // we cached it too early before the element dimensions were computed.
              if (!_this2._previewRect || !_this2._previewRect.width && !_this2._previewRect.height) {
                _this2._previewRect = (_this2._preview || _this2._rootElement).getBoundingClientRect();
              }
            } // We prevent the default action down here so that we know that dragging has started. This is
            // important for touch devices where doing this too early can unnecessarily block scrolling,
            // if there's a dragging delay.


            event.preventDefault();

            var constrainedPointerPosition = _this2._getConstrainedPointerPosition(pointerPosition);

            _this2._hasMoved = true;
            _this2._lastKnownPointerPosition = pointerPosition;

            _this2._updatePointerDirectionDelta(constrainedPointerPosition);

            if (_this2._dropContainer) {
              _this2._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            } else {
              var activeTransform = _this2._activeTransform;
              activeTransform.x = constrainedPointerPosition.x - _this2._pickupPositionOnPage.x + _this2._passiveTransform.x;
              activeTransform.y = constrainedPointerPosition.y - _this2._pickupPositionOnPage.y + _this2._passiveTransform.y;

              _this2._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


              if (typeof SVGElement !== 'undefined' && _this2._rootElement instanceof SVGElement) {
                var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

                _this2._rootElement.setAttribute('transform', appliedTransform);
              }
            } // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.


            if (_this2._moveEvents.observers.length) {
              _this2._ngZone.run(function () {
                _this2._moveEvents.next({
                  source: _this2,
                  pointerPosition: constrainedPointerPosition,
                  event: event,
                  distance: _this2._getDragDistance(constrainedPointerPosition),
                  delta: _this2._pointerDirectionDelta
                });
              });
            }
          };
          /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


          this._pointerUp = function (event) {
            _this2._endDragSequence(event);
          };

          this.withRootElement(element).withParent(_config.parentDragRef || null);
          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

          _dragDropRegistry.registerDragItem(this);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(DragRef, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._toggleNativeDragInteractions();

              this._handles.forEach(function (handle) {
                return toggleNativeDragInteractions(handle, newValue);
              });
            }
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._placeholder;
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._rootElement;
          }
          /**
           * Gets the currently-visible element that represents the drag item.
           * While dragging this is the placeholder, otherwise it's the root element.
           */

        }, {
          key: "getVisibleElement",
          value: function getVisibleElement() {
            return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
          }
          /** Registers the handles that can be used to drag the element. */

        }, {
          key: "withHandles",
          value: function withHandles(handles) {
            var _this3 = this;

            this._handles = handles.map(function (handle) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
            });

            this._handles.forEach(function (handle) {
              return toggleNativeDragInteractions(handle, _this3.disabled);
            });

            this._toggleNativeDragInteractions(); // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
            // the set, rather than iterate over it and filter out the destroyed handles, because while
            // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
            // use an array internally which may throw an error.


            var disabledHandles = new Set();

            this._disabledHandles.forEach(function (handle) {
              if (_this3._handles.indexOf(handle) > -1) {
                disabledHandles.add(handle);
              }
            });

            this._disabledHandles = disabledHandles;
            return this;
          }
          /**
           * Registers the template that should be used for the drag preview.
           * @param template Template that from which to stamp out the preview.
           */

        }, {
          key: "withPreviewTemplate",
          value: function withPreviewTemplate(template) {
            this._previewTemplate = template;
            return this;
          }
          /**
           * Registers the template that should be used for the drag placeholder.
           * @param template Template that from which to stamp out the placeholder.
           */

        }, {
          key: "withPlaceholderTemplate",
          value: function withPlaceholderTemplate(template) {
            this._placeholderTemplate = template;
            return this;
          }
          /**
           * Sets an alternate drag root element. The root element is the element that will be moved as
           * the user is dragging. Passing an alternate root element is useful when trying to enable
           * dragging on an element that you might not have access to.
           */

        }, {
          key: "withRootElement",
          value: function withRootElement(rootElement) {
            var _this4 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

            if (element !== this._rootElement) {
              if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
              }

              this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this4._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this4._pointerDown, passiveEventListenerOptions);
              });

              this._initialTransform = undefined;
              this._rootElement = element;
            }

            if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
              this._ownerSVGElement = this._rootElement.ownerSVGElement;
            }

            return this;
          }
          /**
           * Element to which the draggable's position will be constrained.
           */

        }, {
          key: "withBoundaryElement",
          value: function withBoundaryElement(boundaryElement) {
            var _this5 = this;

            this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

            this._resizeSubscription.unsubscribe();

            if (boundaryElement) {
              this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
                return _this5._containInsideBoundaryOnResize();
              });
            }

            return this;
          }
          /** Sets the parent ref that the ref is nested in.  */

        }, {
          key: "withParent",
          value: function withParent(parent) {
            this._parentDragRef = parent;
            return this;
          }
          /** Removes the dragging functionality from the DOM element. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
            // stop being considered as dragged once it is removed.


            if (this.isDragging()) {
              // Since we move out the element to the end of the body while it's being
              // dragged, we have to make sure that it's removed if it gets destroyed.
              removeNode(this._rootElement);
            }

            removeNode(this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._dragDropRegistry.removeDragItem(this);

            this._removeSubscriptions();

            this.beforeStarted.complete();
            this.started.complete();
            this.released.complete();
            this.ended.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();

            this._moveEvents.complete();

            this._handles = [];

            this._disabledHandles.clear();

            this._dropContainer = undefined;

            this._resizeSubscription.unsubscribe();

            this._parentPositions.clear();

            this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
          }
          /** Checks whether the element is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._rootElement.style.transform = this._initialTransform || '';
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform = {
              x: 0,
              y: 0
            };
          }
          /**
           * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
           * @param handle Handle element that should be disabled.
           */

        }, {
          key: "disableHandle",
          value: function disableHandle(handle) {
            if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
              this._disabledHandles.add(handle);

              toggleNativeDragInteractions(handle, true);
            }
          }
          /**
           * Enables a handle, if it has been disabled.
           * @param handle Handle element to be enabled.
           */

        }, {
          key: "enableHandle",
          value: function enableHandle(handle) {
            if (this._disabledHandles.has(handle)) {
              this._disabledHandles["delete"](handle);

              toggleNativeDragInteractions(handle, this.disabled);
            }
          }
          /** Sets the layout direction of the draggable item. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /** Sets the container that the item is part of. */

        }, {
          key: "_withDropContainer",
          value: function _withDropContainer(container) {
            this._dropContainer = container;
          }
          /**
           * Gets the current position in pixels the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
            return {
              x: position.x,
              y: position.y
            };
          }
          /**
           * Sets the current position in pixels the draggable outside of a drop container.
           * @param value New position to be set.
           */

        }, {
          key: "setFreeDragPosition",
          value: function setFreeDragPosition(value) {
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform.x = value.x;
            this._passiveTransform.y = value.y;

            if (!this._dropContainer) {
              this._applyRootElementTransform(value.x, value.y);
            }

            return this;
          }
          /** Updates the item's sort order based on the last-known pointer position. */

        }, {
          key: "_sortFromLastPointerPosition",
          value: function _sortFromLastPointerPosition() {
            var position = this._lastKnownPointerPosition;

            if (position && this._dropContainer) {
              this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
            }
          }
          /** Unsubscribes from the global subscriptions. */

        }, {
          key: "_removeSubscriptions",
          value: function _removeSubscriptions() {
            this._pointerMoveSubscription.unsubscribe();

            this._pointerUpSubscription.unsubscribe();

            this._scrollSubscription.unsubscribe();
          }
          /** Destroys the preview element and its ViewRef. */

        }, {
          key: "_destroyPreview",
          value: function _destroyPreview() {
            if (this._preview) {
              removeNode(this._preview);
            }

            if (this._previewRef) {
              this._previewRef.destroy();
            }

            this._preview = this._previewRef = null;
          }
          /** Destroys the placeholder element and its ViewRef. */

        }, {
          key: "_destroyPlaceholder",
          value: function _destroyPlaceholder() {
            if (this._placeholder) {
              removeNode(this._placeholder);
            }

            if (this._placeholderRef) {
              this._placeholderRef.destroy();
            }

            this._placeholder = this._placeholderRef = null;
          }
          /**
           * Clears subscriptions and stops the dragging sequence.
           * @param event Browser event object that ended the sequence.
           */

        }, {
          key: "_endDragSequence",
          value: function _endDragSequence(event) {
            var _this6 = this;

            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!this._dragDropRegistry.isDragging(this)) {
              return;
            }

            this._removeSubscriptions();

            this._dragDropRegistry.stopDragging(this);

            this._toggleNativeDragInteractions();

            if (this._handles) {
              this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
            }

            if (!this._hasStartedDragging) {
              return;
            }

            this.released.next({
              source: this
            });

            if (this._dropContainer) {
              // Stop scrolling immediately, instead of waiting for the animation to finish.
              this._dropContainer._stopScrolling();

              this._animatePreviewToPlaceholder().then(function () {
                _this6._cleanupDragArtifacts(event);

                _this6._cleanupCachedDimensions();

                _this6._dragDropRegistry.stopDragging(_this6);
              });
            } else {
              // Convert the active transform into a passive one. This means that next time
              // the user starts dragging the item, its position will be calculated relatively
              // to the new passive transform.
              this._passiveTransform.x = this._activeTransform.x;
              this._passiveTransform.y = this._activeTransform.y;

              this._ngZone.run(function () {
                _this6.ended.next({
                  source: _this6,
                  distance: _this6._getDragDistance(_this6._getPointerPositionOnPage(event))
                });
              });

              this._cleanupCachedDimensions();

              this._dragDropRegistry.stopDragging(this);
            }
          }
          /** Starts the dragging sequence. */

        }, {
          key: "_startDragSequence",
          value: function _startDragSequence(event) {
            if (isTouchEvent(event)) {
              this._lastTouchEventTime = Date.now();
            }

            this._toggleNativeDragInteractions();

            var dropContainer = this._dropContainer;

            if (dropContainer) {
              var element = this._rootElement;
              var parent = element.parentNode;

              var preview = this._preview = this._createPreviewElement();

              var placeholder = this._placeholder = this._createPlaceholderElement();

              var anchor = this._anchor = this._anchor || this._document.createComment(''); // Needs to happen before the root element is moved.


              var shadowRoot = this._getShadowRoot(); // Insert an anchor node so that we can restore the element's position in the DOM.


              parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
              // place will throw off the consumer's `:last-child` selectors. We can't remove the element
              // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

              toggleVisibility(element, false);

              this._document.body.appendChild(parent.replaceChild(placeholder, element));

              getPreviewInsertionPoint(this._document, shadowRoot).appendChild(preview);
              this.started.next({
                source: this
              }); // Emit before notifying the container.

              dropContainer.start();
              this._initialContainer = dropContainer;
              this._initialIndex = dropContainer.getItemIndex(this);
            } else {
              this.started.next({
                source: this
              });
              this._initialContainer = this._initialIndex = undefined;
            } // Important to run after we've called `start` on the parent container
            // so that it has had time to resolve its scrollable parents.


            this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
          }
          /**
           * Sets up the different variables and subscriptions
           * that will be necessary for the dragging sequence.
           * @param referenceElement Element that started the drag sequence.
           * @param event Browser event object that started the sequence.
           */

        }, {
          key: "_initializeDragSequence",
          value: function _initializeDragSequence(referenceElement, event) {
            var _this7 = this;

            // Stop propagation if the item is inside another
            // draggable so we don't start multiple drag sequences.
            if (this._parentDragRef) {
              event.stopPropagation();
            }

            var isDragging = this.isDragging();
            var isTouchSequence = isTouchEvent(event);
            var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
            var rootElement = this._rootElement;
            var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
            // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
            // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
            // it's flaky and it fails if the user drags it away quickly. Also note that we only want
            // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
            // events from firing on touch devices.

            if (event.target && event.target.draggable && event.type === 'mousedown') {
              event.preventDefault();
            } // Abort if the user is already dragging or is using a mouse button other than the primary one.


            if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
              return;
            } // If we've got handles, we need to disable the tap highlight on the entire root element,
            // otherwise iOS will still add it, even though all the drag interactions on the handle
            // are disabled.


            if (this._handles.length) {
              this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
              rootElement.style.webkitTapHighlightColor = 'transparent';
            }

            this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
            // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

            this._removeSubscriptions();

            this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
            this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
            this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
              _this7._updateOnScroll(scrollEvent);
            });

            if (this._boundaryElement) {
              this._boundaryRect = getMutableClientRect(this._boundaryElement);
            } // If we have a custom preview we can't know ahead of time how large it'll be so we position
            // it next to the cursor. The exception is when the consumer has opted into making the preview
            // the same size as the root element, in which case we do know the size.


            var previewTemplate = this._previewTemplate;
            this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
              x: 0,
              y: 0
            } : this._getPointerPositionInElement(referenceElement, event);

            var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

            this._pointerDirectionDelta = {
              x: 0,
              y: 0
            };
            this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y
            };
            this._dragStartTime = Date.now();

            this._dragDropRegistry.startDragging(this, event);
          }
          /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

        }, {
          key: "_cleanupDragArtifacts",
          value: function _cleanupDragArtifacts(event) {
            var _this8 = this;

            // Restore the element's visibility and insert it at its old position in the DOM.
            // It's important that we maintain the position, because moving the element around in the DOM
            // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
            // while moving the existing elements in all other cases.
            toggleVisibility(this._rootElement, true);

            this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

            this._ngZone.run(function () {
              var container = _this8._dropContainer;
              var currentIndex = container.getItemIndex(_this8);

              var pointerPosition = _this8._getPointerPositionOnPage(event);

              var distance = _this8._getDragDistance(_this8._getPointerPositionOnPage(event));

              var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

              _this8.ended.next({
                source: _this8,
                distance: distance
              });

              _this8.dropped.next({
                item: _this8,
                currentIndex: currentIndex,
                previousIndex: _this8._initialIndex,
                container: container,
                previousContainer: _this8._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
              });

              container.drop(_this8, currentIndex, _this8._initialIndex, _this8._initialContainer, isPointerOverContainer, distance);
              _this8._dropContainer = _this8._initialContainer;
            });
          }
          /**
           * Updates the item's position in its drop container, or moves it
           * into a new one, depending on its current drag position.
           */

        }, {
          key: "_updateActiveDropContainer",
          value: function _updateActiveDropContainer(_ref, _ref2) {
            var _this9 = this;

            var x = _ref.x,
                y = _ref.y;
            var rawX = _ref2.x,
                rawY = _ref2.y;

            // Drop container that draggable has been moved into.
            var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
            // initial container, check whether the it's over the initial container. This handles the
            // case where two containers are connected one way and the user tries to undo dragging an
            // item into a new container.


            if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
              newContainer = this._initialContainer;
            }

            if (newContainer && newContainer !== this._dropContainer) {
              this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this9.exited.next({
                  item: _this9,
                  container: _this9._dropContainer
                });

                _this9._dropContainer.exit(_this9); // Notify the new container that the item has entered.


                _this9._dropContainer = newContainer;

                _this9._dropContainer.enter(_this9, x, y, newContainer === _this9._initialContainer && // If we're re-entering the initial container and sorting is disabled,
                // put item the into its starting index to begin with.
                newContainer.sortingDisabled ? _this9._initialIndex : undefined);

                _this9.entered.next({
                  item: _this9,
                  container: newContainer,
                  currentIndex: newContainer.getItemIndex(_this9)
                });
              });
            }

            this._dropContainer._startScrollingIfNecessary(rawX, rawY);

            this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

            this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
          }
          /**
           * Creates the element that will be rendered next to the user's pointer
           * and will be used as a preview of the element that is being dragged.
           */

        }, {
          key: "_createPreviewElement",
          value: function _createPreviewElement() {
            var previewConfig = this._previewTemplate;
            var previewClass = this.previewClass;
            var previewTemplate = previewConfig ? previewConfig.template : null;
            var preview;

            if (previewTemplate && previewConfig) {
              // Measure the element before we've inserted the preview
              // since the insertion could throw off the measurement.
              var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
              var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
              viewRef.detectChanges();
              preview = getRootNode(viewRef, this._document);
              this._previewRef = viewRef;

              if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
              } else {
                preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
              }
            } else {
              var element = this._rootElement;
              preview = deepCloneNode(element);
              matchElementSize(preview, element.getBoundingClientRect());
            }

            extendStyles(preview.style, {
              // It's important that we disable the pointer events on the preview, because
              // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
              pointerEvents: 'none',
              // We have to reset the margin, because it can throw off positioning relative to the viewport.
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: "".concat(this._config.zIndex || 1000)
            });
            toggleNativeDragInteractions(preview, false);
            preview.classList.add('cdk-drag-preview');
            preview.setAttribute('dir', this._direction);

            if (previewClass) {
              if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) {
                  return preview.classList.add(className);
                });
              } else {
                preview.classList.add(previewClass);
              }
            }

            return preview;
          }
          /**
           * Animates the preview element from its current position to the location of the drop placeholder.
           * @returns Promise that resolves when the animation completes.
           */

        }, {
          key: "_animatePreviewToPlaceholder",
          value: function _animatePreviewToPlaceholder() {
            var _this10 = this;

            // If the user hasn't moved yet, the transitionend event won't fire.
            if (!this._hasMoved) {
              return Promise.resolve();
            }

            var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


            this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


            this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
            // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
            // apply its style, we take advantage of the available info to figure out whether we need to
            // bind the event in the first place.

            var duration = getTransformTransitionDurationInMs(this._preview);

            if (duration === 0) {
              return Promise.resolve();
            }

            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                var handler = function handler(event) {
                  if (!event || event.target === _this10._preview && event.propertyName === 'transform') {
                    _this10._preview.removeEventListener('transitionend', handler);

                    resolve();
                    clearTimeout(timeout);
                  }
                }; // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.


                var timeout = setTimeout(handler, duration * 1.5);

                _this10._preview.addEventListener('transitionend', handler);
              });
            });
          }
          /** Creates an element that will be shown instead of the current element while dragging. */

        }, {
          key: "_createPlaceholderElement",
          value: function _createPlaceholderElement() {
            var placeholderConfig = this._placeholderTemplate;
            var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
            var placeholder;

            if (placeholderTemplate) {
              this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

              this._placeholderRef.detectChanges();

              placeholder = getRootNode(this._placeholderRef, this._document);
            } else {
              placeholder = deepCloneNode(this._rootElement);
            }

            placeholder.classList.add('cdk-drag-placeholder');
            return placeholder;
          }
          /**
           * Figures out the coordinates at which an element was picked up.
           * @param referenceElement Element that initiated the dragging.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "_getPointerPositionInElement",
          value: function _getPointerPositionInElement(referenceElement, event) {
            var elementRect = this._rootElement.getBoundingClientRect();

            var handleElement = referenceElement === this._rootElement ? null : referenceElement;
            var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
            var point = isTouchEvent(event) ? event.targetTouches[0] : event;

            var scrollPosition = this._getViewportScrollPosition();

            var x = point.pageX - referenceRect.left - scrollPosition.left;
            var y = point.pageY - referenceRect.top - scrollPosition.top;
            return {
              x: referenceRect.left - elementRect.left + x,
              y: referenceRect.top - elementRect.top + y
            };
          }
          /** Determines the point of the page that was touched by the user. */

        }, {
          key: "_getPointerPositionOnPage",
          value: function _getPointerPositionOnPage(event) {
            var scrollPosition = this._getViewportScrollPosition();

            var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            event.touches[0] || event.changedTouches[0] || {
              pageX: 0,
              pageY: 0
            } : event;
            var x = point.pageX - scrollPosition.left;
            var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
            // coordinate system

            if (this._ownerSVGElement) {
              var svgMatrix = this._ownerSVGElement.getScreenCTM();

              if (svgMatrix) {
                var svgPoint = this._ownerSVGElement.createSVGPoint();

                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Gets the pointer position on the page, accounting for any position constraints. */

        }, {
          key: "_getConstrainedPointerPosition",
          value: function _getConstrainedPointerPosition(point) {
            var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

            var _ref3 = this.constrainPosition ? this.constrainPosition(point, this) : point,
                x = _ref3.x,
                y = _ref3.y;

            if (this.lockAxis === 'x' || dropContainerLock === 'x') {
              y = this._pickupPositionOnPage.y;
            } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
              x = this._pickupPositionOnPage.x;
            }

            if (this._boundaryRect) {
              var _this$_pickupPosition = this._pickupPositionInElement,
                  pickupX = _this$_pickupPosition.x,
                  pickupY = _this$_pickupPosition.y;
              var boundaryRect = this._boundaryRect;
              var previewRect = this._previewRect;
              var minY = boundaryRect.top + pickupY;
              var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
              var minX = boundaryRect.left + pickupX;
              var maxX = boundaryRect.right - (previewRect.width - pickupX);
              x = clamp(x, minX, maxX);
              y = clamp(y, minY, maxY);
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the current drag delta, based on the user's current pointer position on the page. */

        }, {
          key: "_updatePointerDirectionDelta",
          value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
            var x = pointerPositionOnPage.x,
                y = pointerPositionOnPage.y;
            var delta = this._pointerDirectionDelta;
            var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

            var changeX = Math.abs(x - positionSinceLastChange.x);
            var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
            // to change for every pixel, otherwise anything that depends on it can look erratic.
            // To make the delta more consistent, we track how much the user has moved since the last
            // delta change and we only update it after it has reached a certain threshold.

            if (changeX > this._config.pointerDirectionChangeThreshold) {
              delta.x = x > positionSinceLastChange.x ? 1 : -1;
              positionSinceLastChange.x = x;
            }

            if (changeY > this._config.pointerDirectionChangeThreshold) {
              delta.y = y > positionSinceLastChange.y ? 1 : -1;
              positionSinceLastChange.y = y;
            }

            return delta;
          }
          /** Toggles the native drag interactions, based on how many handles are registered. */

        }, {
          key: "_toggleNativeDragInteractions",
          value: function _toggleNativeDragInteractions() {
            if (!this._rootElement || !this._handles) {
              return;
            }

            var shouldEnable = this._handles.length > 0 || !this.isDragging();

            if (shouldEnable !== this._nativeInteractionsEnabled) {
              this._nativeInteractionsEnabled = shouldEnable;
              toggleNativeDragInteractions(this._rootElement, shouldEnable);
            }
          }
          /** Removes the manually-added event listeners from the root element. */

        }, {
          key: "_removeRootElementListeners",
          value: function _removeRootElementListeners(element) {
            element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
          }
          /**
           * Applies a `transform` to the root element, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyRootElementTransform",
          value: function _applyRootElementTransform(x, y) {
            var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
            // we don't want our own transforms to stack on top of each other.

            if (this._initialTransform == null) {
              this._initialTransform = this._rootElement.style.transform || '';
            } // Preserve the previous `transform` value, if there was one. Note that we apply our own
            // transform before the user's, because things like rotation can affect which direction
            // the element will be translated towards.


            this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
          }
          /**
           * Gets the distance that the user has dragged during the current drag sequence.
           * @param currentPosition Current position of the user's pointer.
           */

        }, {
          key: "_getDragDistance",
          value: function _getDragDistance(currentPosition) {
            var pickupPosition = this._pickupPositionOnPage;

            if (pickupPosition) {
              return {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y
              };
            }

            return {
              x: 0,
              y: 0
            };
          }
          /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

        }, {
          key: "_cleanupCachedDimensions",
          value: function _cleanupCachedDimensions() {
            this._boundaryRect = this._previewRect = undefined;

            this._parentPositions.clear();
          }
          /**
           * Checks whether the element is still inside its boundary after the viewport has been resized.
           * If not, the position is adjusted so that the element fits again.
           */

        }, {
          key: "_containInsideBoundaryOnResize",
          value: function _containInsideBoundaryOnResize() {
            var _this$_passiveTransfo = this._passiveTransform,
                x = _this$_passiveTransfo.x,
                y = _this$_passiveTransfo.y;

            if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
              return;
            }

            var boundaryRect = this._boundaryElement.getBoundingClientRect();

            var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
            // different tab). Don't do anything in this case so we don't clear the user's position.


            if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
              return;
            }

            var leftOverflow = boundaryRect.left - elementRect.left;
            var rightOverflow = elementRect.right - boundaryRect.right;
            var topOverflow = boundaryRect.top - elementRect.top;
            var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
            // do much to make it fit so we just anchor it to the left.

            if (boundaryRect.width > elementRect.width) {
              if (leftOverflow > 0) {
                x += leftOverflow;
              }

              if (rightOverflow > 0) {
                x -= rightOverflow;
              }
            } else {
              x = 0;
            } // If the element has become taller than the boundary, we can't
            // do much to make it fit so we just anchor it to the top.


            if (boundaryRect.height > elementRect.height) {
              if (topOverflow > 0) {
                y += topOverflow;
              }

              if (bottomOverflow > 0) {
                y -= bottomOverflow;
              }
            } else {
              y = 0;
            }

            if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
              this.setFreeDragPosition({
                y: y,
                x: x
              });
            }
          }
          /** Gets the drag start delay, based on the event type. */

        }, {
          key: "_getDragStartDelay",
          value: function _getDragStartDelay(event) {
            var value = this.dragStartDelay;

            if (typeof value === 'number') {
              return value;
            } else if (isTouchEvent(event)) {
              return value.touch;
            }

            return value ? value.mouse : 0;
          }
          /** Updates the internal state of the draggable element when scrolling has occurred. */

        }, {
          key: "_updateOnScroll",
          value: function _updateOnScroll(event) {
            var scrollDifference = this._parentPositions.handleScroll(event);

            if (scrollDifference) {
              var target = event.target; // ClientRect dimensions are based on the scroll position of the page and its parent node so
              // we have to update the cached boundary ClientRect if the user has scrolled. Check for
              // the `document` specifically since IE doesn't support `contains` on it.

              if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
              }

              this._pickupPositionOnPage.x += scrollDifference.left;
              this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
              // it isn't relative to the viewport like the preview inside a drop list.

              if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;

                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
              }
            }
          }
          /** Gets the scroll position of the viewport. */

        }, {
          key: "_getViewportScrollPosition",
          value: function _getViewportScrollPosition() {
            var cachedPosition = this._parentPositions.positions.get(this._document);

            return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (this._cachedShadowRoot === undefined) {
              this._cachedShadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(this._rootElement);
            }

            return this._cachedShadowRoot;
          }
        }]);

        return DragRef;
      }();
      /**
       * Gets a 3d `transform` that can be applied to an element.
       * @param x Desired position of the element along the X axis.
       * @param y Desired position of the element along the Y axis.
       */


      function getTransform(x, y) {
        // Round the transforms since some browsers will
        // blur the elements for sub-pixel transforms.
        return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
      }
      /** Clamps a value between a minimum and a maximum. */


      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      /**
       * Helper to remove a node from the DOM and to do all the necessary null checks.
       * @param node Node to be removed.
       */


      function removeNode(node) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      /** Determines whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the element into which the drag preview should be inserted. */


      function getPreviewInsertionPoint(documentRef, shadowRoot) {
        // We can't use the body if the user is in fullscreen mode,
        // because the preview will render under the fullscreen element.
        // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
        return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
      }
      /**
       * Gets the root HTML element of an embedded view.
       * If the root is not an HTML element it gets wrapped in one.
       */


      function getRootNode(viewRef, _document) {
        var rootNodes = viewRef.rootNodes;

        if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
          return rootNodes[0];
        }

        var wrapper = _document.createElement('div');

        rootNodes.forEach(function (node) {
          return wrapper.appendChild(node);
        });
        return wrapper;
      }
      /**
       * Matches the target element's size to the source's size.
       * @param target Element that needs to be resized.
       * @param sourceRect Dimensions of the source element.
       */


      function matchElementSize(target, sourceRect) {
        target.style.width = "".concat(sourceRect.width, "px");
        target.style.height = "".concat(sourceRect.height, "px");
        target.style.transform = getTransform(sourceRect.left, sourceRect.top);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Moves an item one index in an array to another.
       * @param array Array in which to move the item.
       * @param fromIndex Starting index of the item.
       * @param toIndex Index to which the item should be moved.
       */


      function moveItemInArray(array, fromIndex, toIndex) {
        var from = clamp$1(fromIndex, array.length - 1);
        var to = clamp$1(toIndex, array.length - 1);

        if (from === to) {
          return;
        }

        var target = array[from];
        var delta = to < from ? -1 : 1;

        for (var i = from; i !== to; i += delta) {
          array[i] = array[i + delta];
        }

        array[to] = target;
      }
      /**
       * Moves an item from one array to another.
       * @param currentArray Array from which to transfer the item.
       * @param targetArray Array into which to put the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       */


      function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var from = clamp$1(currentIndex, currentArray.length - 1);
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
        }
      }
      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */


      function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray[currentIndex]);
        }
      }
      /** Clamps a number between zero and a maximum. */


      function clamp$1(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Proximity, as a ratio to width/height, at which a
       * dragged item will affect the drop container.
       */


      var DROP_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
       * viewport. The value comes from trying it out manually until it feels right.
       */

      var SCROLL_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Reference to a drop list. Used to manipulate or dispose of the container.
       */

      var DropListRef = /*#__PURE__*/function () {
        function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
          var _this11 = this;

          _classCallCheck(this, DropListRef);

          this._dragDropRegistry = _dragDropRegistry;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          /** Whether starting a dragging sequence from this container is disabled. */

          this.disabled = false;
          /** Whether sorting items within the list is disabled. */

          this.sortingDisabled = false;
          /**
           * Whether auto-scrolling the view when the user
           * moves their pointer close to the edges is disabled.
           */

          this.autoScrollDisabled = false;
          /** Number of pixels to scroll for each frame when auto-scrolling an element. */

          this.autoScrollStep = 2;
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Functions that is used to determine whether an item can be sorted into a particular index. */


          this.sortPredicate = function () {
            return true;
          };
          /** Emits right before dragging has started. */


          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops an item inside the container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Whether an item in the list is being dragged. */

          this._isDragging = false;
          /** Cache of the dimensions of all the items inside the container. */

          this._itemPositions = [];
          /**
           * Keeps track of the item that was last swapped with the dragged item, as well as what direction
           * the pointer was moving in when the swap occured and whether the user's pointer continued to
           * overlap with the swapped item after the swapping occurred.
           */

          this._previousSwap = {
            drag: null,
            delta: 0,
            overlaps: false
          };
          /** Draggable items in the container. */

          this._draggables = [];
          /** Drop lists that are connected to the current one. */

          this._siblings = [];
          /** Direction in which the list is oriented. */

          this._orientation = 'vertical';
          /** Connected siblings that currently have a dragged item. */

          this._activeSiblings = new Set();
          /** Layout direction of the drop list. */

          this._direction = 'ltr';
          /** Subscription to the window being scrolled. */

          this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Vertical direction in which the list is currently scrolling. */

          this._verticalScrollDirection = 0
          /* NONE */
          ;
          /** Horizontal direction in which the list is currently scrolling. */

          this._horizontalScrollDirection = 0
          /* NONE */
          ;
          /** Used to signal to the current auto-scroll sequence when to stop. */

          this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

          this._cachedShadowRoot = null;
          /** Starts the interval that'll auto-scroll the element. */

          this._startScrollInterval = function () {
            _this11._stopScrolling();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this11._stopScrollTimers)).subscribe(function () {
              var node = _this11._scrollNode;
              var scrollStep = _this11.autoScrollStep;

              if (_this11._verticalScrollDirection === 1
              /* UP */
              ) {
                incrementVerticalScroll(node, -scrollStep);
              } else if (_this11._verticalScrollDirection === 2
              /* DOWN */
              ) {
                incrementVerticalScroll(node, scrollStep);
              }

              if (_this11._horizontalScrollDirection === 1
              /* LEFT */
              ) {
                incrementHorizontalScroll(node, -scrollStep);
              } else if (_this11._horizontalScrollDirection === 2
              /* RIGHT */
              ) {
                incrementHorizontalScroll(node, scrollStep);
              }
            });
          };

          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
          this._document = _document;
          this.withScrollableParents([this.element]);

          _dragDropRegistry.registerDropContainer(this);

          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        }
        /** Removes the drop list functionality from the DOM element. */


        _createClass(DropListRef, [{
          key: "dispose",
          value: function dispose() {
            this._stopScrolling();

            this._stopScrollTimers.complete();

            this._viewportScrollSubscription.unsubscribe();

            this.beforeStarted.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();
            this.sorted.complete();

            this._activeSiblings.clear();

            this._scrollNode = null;

            this._parentPositions.clear();

            this._dragDropRegistry.removeDropContainer(this);
          }
          /** Whether an item from this list is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._isDragging;
          }
          /** Starts dragging an item. */

        }, {
          key: "start",
          value: function start() {
            this._draggingStarted();

            this._notifyReceivingSiblings();
          }
          /**
           * Emits an event to indicate that the user moved an item into the container.
           * @param item Item that was moved into the container.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param index Index at which the item entered. If omitted, the container will try to figure it
           *   out automatically.
           */

        }, {
          key: "enter",
          value: function enter(item, pointerX, pointerY, index) {
            this._draggingStarted(); // If sorting is disabled, we want the item to return to its starting
            // position if the user is returning it to its initial container.


            var newIndex;

            if (index == null) {
              newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

              if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
              }
            } else {
              newIndex = index;
            }

            var activeDraggables = this._activeDraggables;
            var currentIndex = activeDraggables.indexOf(item);
            var placeholder = item.getPlaceholderElement();
            var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
            // it means that we're trying to restore the item to its initial position. In this
            // case we should use the next item from the list as the reference.

            if (newPositionReference === item) {
              newPositionReference = activeDraggables[newIndex + 1];
            } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
            // into another container and back again), we have to ensure that it isn't duplicated.


            if (currentIndex > -1) {
              activeDraggables.splice(currentIndex, 1);
            } // Don't use items that are being dragged as a reference, because
            // their element has been moved down to the bottom of the body.


            if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
              var element = newPositionReference.getRootElement();
              element.parentElement.insertBefore(placeholder, element);
              activeDraggables.splice(newIndex, 0, item);
            } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              var reference = activeDraggables[0].getRootElement();
              reference.parentNode.insertBefore(placeholder, reference);
              activeDraggables.unshift(item);
            } else {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
              activeDraggables.push(item);
            } // The transform needs to be cleared so it doesn't throw off the measurements.


            placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
            // but we need to refresh them since the amount of items has changed and also parent rects.

            this._cacheItemPositions();

            this._cacheParentPositions(); // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.


            this._notifyReceivingSiblings();

            this.entered.next({
              item: item,
              container: this,
              currentIndex: this.getItemIndex(item)
            });
          }
          /**
           * Removes an item from the container after it was dragged into another container by the user.
           * @param item Item that was dragged out.
           */

        }, {
          key: "exit",
          value: function exit(item) {
            this._reset();

            this.exited.next({
              item: item,
              container: this
            });
          }
          /**
           * Drops an item into this container.
           * @param item Item being dropped into the container.
           * @param currentIndex Index at which the item should be inserted.
           * @param previousIndex Index of the item when dragging started.
           * @param previousContainer Container from which the item got dragged in.
           * @param isPointerOverContainer Whether the user's pointer was over the
           *    container when the item was dropped.
           * @param distance Distance the user has dragged since the start of the dragging sequence.
           */

        }, {
          key: "drop",
          value: function drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance) {
            this._reset();

            this.dropped.next({
              item: item,
              currentIndex: currentIndex,
              previousIndex: previousIndex,
              container: this,
              previousContainer: previousContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });
          }
          /**
           * Sets the draggable items that are a part of this list.
           * @param items Items that are a part of this list.
           */

        }, {
          key: "withItems",
          value: function withItems(items) {
            var _this12 = this;

            var previousItems = this._draggables;
            this._draggables = items;
            items.forEach(function (item) {
              return item._withDropContainer(_this12);
            });

            if (this.isDragging()) {
              var draggedItems = previousItems.filter(function (item) {
                return item.isDragging();
              }); // If all of the items being dragged were removed
              // from the list, abort the current drag sequence.

              if (draggedItems.every(function (item) {
                return items.indexOf(item) === -1;
              })) {
                this._reset();
              } else {
                this._cacheItems();
              }
            }

            return this;
          }
          /** Sets the layout direction of the drop list. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /**
           * Sets the containers that are connected to this one. When two or more containers are
           * connected, the user will be allowed to transfer items between them.
           * @param connectedTo Other containers that the current containers should be connected to.
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(_connectedTo) {
            this._siblings = _connectedTo.slice();
            return this;
          }
          /**
           * Sets the orientation of the container.
           * @param orientation New orientation for the container.
           */

        }, {
          key: "withOrientation",
          value: function withOrientation(orientation) {
            this._orientation = orientation;
            return this;
          }
          /**
           * Sets which parent elements are can be scrolled while the user is dragging.
           * @param elements Elements that can be scrolled.
           */

        }, {
          key: "withScrollableParents",
          value: function withScrollableParents(elements) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // We always allow the current element to be scrollable
            // so we need to ensure that it's in the array.

            this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
            return this;
          }
          /** Gets the scrollable parents that are registered with this drop container. */

        }, {
          key: "getScrollableParents",
          value: function getScrollableParents() {
            return this._scrollableElements;
          }
          /**
           * Figures out the index of an item in the container.
           * @param item Item whose index should be determined.
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(item) {
            if (!this._isDragging) {
              return this._draggables.indexOf(item);
            } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
            // The rest of the logic still stands no matter what orientation we're in, however
            // we need to invert the array when determining the index.


            var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
            return findIndex(items, function (currentItem) {
              return currentItem.drag === item;
            });
          }
          /**
           * Whether the list is able to receive the item that
           * is currently being dragged inside a connected drop list.
           */

        }, {
          key: "isReceiving",
          value: function isReceiving() {
            return this._activeSiblings.size > 0;
          }
          /**
           * Sorts an item inside the container based on its position.
           * @param item Item to be sorted.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param pointerDelta Direction in which the pointer is moving along each axis.
           */

        }, {
          key: "_sortItem",
          value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
            // Don't sort the item if sorting is disabled or it's out of range.
            if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              return;
            }

            var siblings = this._itemPositions;

            var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

            if (newIndex === -1 && siblings.length > 0) {
              return;
            }

            var isHorizontal = this._orientation === 'horizontal';
            var currentIndex = findIndex(siblings, function (currentItem) {
              return currentItem.drag === item;
            });
            var siblingAtNewPosition = siblings[newIndex];
            var currentPosition = siblings[currentIndex].clientRect;
            var newPosition = siblingAtNewPosition.clientRect;
            var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

            var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


            var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
            // We use this to check whether an item has been moved as a result of the sorting.


            var oldOrder = siblings.slice(); // Shuffle the array in place.

            moveItemInArray(siblings, currentIndex, newIndex);
            this.sorted.next({
              previousIndex: currentIndex,
              currentIndex: newIndex,
              container: this,
              item: item
            });
            siblings.forEach(function (sibling, index) {
              // Don't do anything if the position hasn't changed.
              if (oldOrder[index] === sibling) {
                return;
              }

              var isDraggedItem = sibling.drag === item;
              var offset = isDraggedItem ? itemOffset : siblingOffset;
              var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

              sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
              // client rects to reflect their new position, as well as swap their positions in the cache.
              // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
              // elements may be mid-animation which will give us a wrong result.

              if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
                adjustClientRect(sibling.clientRect, 0, offset);
              } else {
                elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
                adjustClientRect(sibling.clientRect, offset, 0);
              }
            }); // Note that it's important that we do this after the client rects have been adjusted.

            this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
            this._previousSwap.drag = siblingAtNewPosition.drag;
            this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
          }
          /**
           * Checks whether the user's pointer is close to the edges of either the
           * viewport or the drop list and starts the auto-scroll sequence.
           * @param pointerX User's pointer position along the x axis.
           * @param pointerY User's pointer position along the y axis.
           */

        }, {
          key: "_startScrollingIfNecessary",
          value: function _startScrollingIfNecessary(pointerX, pointerY) {
            var _this13 = this;

            if (this.autoScrollDisabled) {
              return;
            }

            var scrollNode;
            var verticalScrollDirection = 0
            /* NONE */
            ;
            var horizontalScrollDirection = 0
            /* NONE */
            ; // Check whether we should start scrolling any of the parent containers.

            this._parentPositions.positions.forEach(function (position, element) {
              // We have special handling for the `document` below. Also this would be
              // nicer with a  for...of loop, but it requires changing a compiler flag.
              if (element === _this13._document || !position.clientRect || scrollNode) {
                return;
              }

              if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

                var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

                verticalScrollDirection = _getElementScrollDire2[0];
                horizontalScrollDirection = _getElementScrollDire2[1];

                if (verticalScrollDirection || horizontalScrollDirection) {
                  scrollNode = element;
                }
              }
            }); // Otherwise check if we can start scrolling the viewport.


            if (!verticalScrollDirection && !horizontalScrollDirection) {
              var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                  width = _this$_viewportRuler$.width,
                  height = _this$_viewportRuler$.height;

              var clientRect = {
                width: width,
                height: height,
                top: 0,
                right: width,
                bottom: height,
                left: 0
              };
              verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
              horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
              scrollNode = window;
            }

            if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
              this._verticalScrollDirection = verticalScrollDirection;
              this._horizontalScrollDirection = horizontalScrollDirection;
              this._scrollNode = scrollNode;

              if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._stopScrolling();
              }
            }
          }
          /** Stops any currently-running auto-scroll sequences. */

        }, {
          key: "_stopScrolling",
          value: function _stopScrolling() {
            this._stopScrollTimers.next();
          }
          /** Starts the dragging sequence within the list. */

        }, {
          key: "_draggingStarted",
          value: function _draggingStarted() {
            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            this.beforeStarted.next();
            this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
            // scrolling. The browser seems to round the value based on the snapping points which means
            // that we can't increment/decrement the scroll position.

            this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
            styles.scrollSnapType = styles.msScrollSnapType = 'none';

            this._cacheItems();

            this._viewportScrollSubscription.unsubscribe();

            this._listenToScrollEvents();
          }
          /** Caches the positions of the configured scrollable parents. */

        }, {
          key: "_cacheParentPositions",
          value: function _cacheParentPositions() {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
            // so we can take advantage of the cached `ClientRect`.


            this._clientRect = this._parentPositions.positions.get(element).clientRect;
          }
          /** Refreshes the position cache of the items and sibling containers. */

        }, {
          key: "_cacheItemPositions",
          value: function _cacheItemPositions() {
            var isHorizontal = this._orientation === 'horizontal';
            this._itemPositions = this._activeDraggables.map(function (drag) {
              var elementToMeasure = drag.getVisibleElement();
              return {
                drag: drag,
                offset: 0,
                clientRect: getMutableClientRect(elementToMeasure)
              };
            }).sort(function (a, b) {
              return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
            });
          }
          /** Resets the container to its initial state. */

        }, {
          key: "_reset",
          value: function _reset() {
            var _this14 = this;

            this._isDragging = false;
            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

            this._activeDraggables.forEach(function (item) {
              var rootElement = item.getRootElement();

              if (rootElement) {
                rootElement.style.transform = '';
              }
            });

            this._siblings.forEach(function (sibling) {
              return sibling._stopReceiving(_this14);
            });

            this._activeDraggables = [];
            this._itemPositions = [];
            this._previousSwap.drag = null;
            this._previousSwap.delta = 0;
            this._previousSwap.overlaps = false;

            this._stopScrolling();

            this._viewportScrollSubscription.unsubscribe();

            this._parentPositions.clear();
          }
          /**
           * Gets the offset in pixels by which the items that aren't being dragged should be moved.
           * @param currentIndex Index of the item currently being dragged.
           * @param siblings All of the items in the list.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getSiblingOffsetPx",
          value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var currentPosition = siblings[currentIndex].clientRect;
            var immediateSibling = siblings[currentIndex + delta * -1];
            var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

            if (immediateSibling) {
              var start = isHorizontal ? 'left' : 'top';
              var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
              // after it in the direction in which the user is dragging, or vice versa. We add it to the
              // offset in order to push the element to where it will be when it's inline and is influenced
              // by the `margin` of its siblings.

              if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
              } else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
              }
            }

            return siblingOffset;
          }
          /**
           * Gets the offset in pixels by which the item that is being dragged should be moved.
           * @param currentPosition Current position of the item.
           * @param newPosition Position of the item where the current item should be moved.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getItemOffsetPx",
          value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

            if (delta === -1) {
              itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
            }

            return itemOffset;
          }
          /**
           * Checks if pointer is entering in the first position
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           */

        }, {
          key: "_shouldEnterAsFirstChild",
          value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
            if (!this._activeDraggables.length) {
              return false;
            }

            var itemPositions = this._itemPositions;
            var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
            // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

            var reversed = itemPositions[0].drag !== this._activeDraggables[0];

            if (reversed) {
              var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
              return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
            } else {
              var firstItemRect = itemPositions[0].clientRect;
              return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
            }
          }
          /**
           * Gets the index of an item in the drop container, based on the position of the user's pointer.
           * @param item Item that is being sorted.
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           * @param delta Direction in which the user is moving their pointer.
           */

        }, {
          key: "_getItemIndexFromPointerPosition",
          value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
            var _this15 = this;

            var isHorizontal = this._orientation === 'horizontal';
            var index = findIndex(this._itemPositions, function (_ref4, _, array) {
              var drag = _ref4.drag,
                  clientRect = _ref4.clientRect;

              if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
              }

              if (delta) {
                var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.

                if (drag === _this15._previousSwap.drag && _this15._previousSwap.overlaps && direction === _this15._previousSwap.delta) {
                  return false;
                }
              }

              return isHorizontal ? // Round these down since most browsers report client rects with
              // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
              pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
            });
            return index === -1 || !this.sortPredicate(index, item, this) ? -1 : index;
          }
          /** Caches the current items in the list and their positions. */

        }, {
          key: "_cacheItems",
          value: function _cacheItems() {
            this._activeDraggables = this._draggables.slice();

            this._cacheItemPositions();

            this._cacheParentPositions();
          }
          /**
           * Checks whether the user's pointer is positioned over the container.
           * @param x Pointer position along the X axis.
           * @param y Pointer position along the Y axis.
           */

        }, {
          key: "_isOverContainer",
          value: function _isOverContainer(x, y) {
            return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
          }
          /**
           * Figures out whether an item should be moved into a sibling
           * drop container, based on its current position.
           * @param item Drag item that is being moved.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_getSiblingContainerFromPosition",
          value: function _getSiblingContainerFromPosition(item, x, y) {
            return this._siblings.find(function (sibling) {
              return sibling._canReceive(item, x, y);
            });
          }
          /**
           * Checks whether the drop list can receive the passed-in item.
           * @param item Item that is being dragged into the list.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_canReceive",
          value: function _canReceive(item, x, y) {
            if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
              return false;
            }

            var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
            // the client rect is probably scrolled out of the view.


            if (!elementFromPoint) {
              return false;
            }

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
            // hovering, doesn't give us any information on whether the element has been scrolled
            // out of the view or whether it's overlapping with other containers. This means that
            // we could end up transferring the item into a container that's invisible or is positioned
            // below another one. We use the result from `elementFromPoint` to get the top-most element
            // at the pointer position and to find whether it's one of the intersecting drop containers.

            return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
          }
          /**
           * Called by one of the connected drop lists when a dragging sequence has started.
           * @param sibling Sibling in which dragging has started.
           */

        }, {
          key: "_startReceiving",
          value: function _startReceiving(sibling, items) {
            var _this16 = this;

            var activeSiblings = this._activeSiblings;

            if (!activeSiblings.has(sibling) && items.every(function (item) {
              // Note that we have to add an exception to the `enterPredicate` for items that started off
              // in this drop list. The drag ref has logic that allows an item to return to its initial
              // container, if it has left the initial container and none of the connected containers
              // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
              return _this16.enterPredicate(item, _this16) || _this16._draggables.indexOf(item) > -1;
            })) {
              activeSiblings.add(sibling);

              this._cacheParentPositions();

              this._listenToScrollEvents();
            }
          }
          /**
           * Called by a connected drop list when dragging has stopped.
           * @param sibling Sibling whose dragging has stopped.
           */

        }, {
          key: "_stopReceiving",
          value: function _stopReceiving(sibling) {
            this._activeSiblings["delete"](sibling);

            this._viewportScrollSubscription.unsubscribe();
          }
          /**
           * Starts listening to scroll events on the viewport.
           * Used for updating the internal state of the list.
           */

        }, {
          key: "_listenToScrollEvents",
          value: function _listenToScrollEvents() {
            var _this17 = this;

            this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
              if (_this17.isDragging()) {
                var scrollDifference = _this17._parentPositions.handleScroll(event);

                if (scrollDifference) {
                  // Since we know the amount that the user has scrolled we can shift all of the
                  // client rectangles ourselves. This is cheaper than re-measuring everything and
                  // we can avoid inconsistent behavior where we might be measuring the element before
                  // its position has changed.
                  _this17._itemPositions.forEach(function (_ref5) {
                    var clientRect = _ref5.clientRect;
                    adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                  }); // We need two loops for this, because we want all of the cached
                  // positions to be up-to-date before we re-sort the item.


                  _this17._itemPositions.forEach(function (_ref6) {
                    var drag = _ref6.drag;

                    if (_this17._dragDropRegistry.isDragging(drag)) {
                      // We need to re-sort the item manually, because the pointer move
                      // events won't be dispatched while the user is scrolling.
                      drag._sortFromLastPointerPosition();
                    }
                  });
                }
              } else if (_this17.isReceiving()) {
                _this17._cacheParentPositions();
              }
            });
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (!this._cachedShadowRoot) {
              var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
              this._cachedShadowRoot = shadowRoot || this._document;
            }

            return this._cachedShadowRoot;
          }
          /** Notifies any siblings that may potentially receive the item. */

        }, {
          key: "_notifyReceivingSiblings",
          value: function _notifyReceivingSiblings() {
            var _this18 = this;

            var draggedItems = this._activeDraggables.filter(function (item) {
              return item.isDragging();
            });

            this._siblings.forEach(function (sibling) {
              return sibling._startReceiving(_this18, draggedItems);
            });
          }
        }]);

        return DropListRef;
      }();
      /**
       * Finds the index of an item that matches a predicate function. Used as an equivalent
       * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
       * @param array Array in which to look for matches.
       * @param predicate Function used to determine whether an item is a match.
       */


      function findIndex(array, predicate) {
        for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Increments the vertical scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementVerticalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(0, amount);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollTop += amount;
        }
      }
      /**
       * Increments the horizontal scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementHorizontalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(amount, 0);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollLeft += amount;
        }
      }
      /**
       * Gets whether the vertical auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getVerticalScrollDirection(clientRect, pointerY) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            height = clientRect.height;
        var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
          return 1
          /* UP */
          ;
        } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
          return 2
          /* DOWN */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets whether the horizontal auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerX Position of the user's pointer along the x axis.
       */


      function getHorizontalScrollDirection(clientRect, pointerX) {
        var left = clientRect.left,
            right = clientRect.right,
            width = clientRect.width;
        var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
          return 1
          /* LEFT */
          ;
        } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
          return 2
          /* RIGHT */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets the directions in which an element node should be scrolled,
       * assuming that the user's pointer is already within it scrollable region.
       * @param element Element for which we should calculate the scroll direction.
       * @param clientRect Bounding client rectangle of the element.
       * @param pointerX Position of the user's pointer along the x axis.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
        var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
        var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
        var verticalScrollDirection = 0
        /* NONE */
        ;
        var horizontalScrollDirection = 0
        /* NONE */
        ; // Note that we here we do some extra checks for whether the element is actually scrollable in
        // a certain direction and we only assign the scroll direction if it is. We do this so that we
        // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
        // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

        if (computedVertical) {
          var scrollTop = element.scrollTop;

          if (computedVertical === 1
          /* UP */
          ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2
            /* DOWN */
            ;
          }
        }

        if (computedHorizontal) {
          var scrollLeft = element.scrollLeft;

          if (computedHorizontal === 1
          /* LEFT */
          ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2
            /* RIGHT */
            ;
          }
        }

        return [verticalScrollDirection, horizontalScrollDirection];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event options that can be used to bind an active, capturing event. */


      var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false,
        capture: true
      });
      /**
       * Service that keeps track of all the drag item and drop container
       * instances, and manages global event listeners on the `document`.
       * @docs-private
       */
      // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
      // to avoid circular imports. If we were to reference them here, importing the registry into the
      // classes that are registering themselves will introduce a circular import.

      var DragDropRegistry = /*#__PURE__*/function () {
        function DragDropRegistry(_ngZone, _document) {
          var _this19 = this;

          _classCallCheck(this, DragDropRegistry);

          this._ngZone = _ngZone;
          /** Registered drop container instances. */

          this._dropInstances = new Set();
          /** Registered drag item instances. */

          this._dragInstances = new Set();
          /** Drag item instances that are currently being dragged. */

          this._activeDragInstances = [];
          /** Keeps track of the event listeners that we've bound to the `document`. */

          this._globalListeners = new Map();
          /**
           * Predicate function to check if an item is being dragged.  Moved out into a property,
           * because it'll be called a lot and we don't want to create a new function every time.
           */

          this._draggingPredicate = function (item) {
            return item.isDragging();
          };
          /**
           * Emits the `touchmove` or `mousemove` events that are dispatched
           * while the user is dragging a drag item instance.
           */


          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits the `touchend` or `mouseup` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the viewport has been scrolled while the user is dragging an item. */

          this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Event listener that will prevent the default browser action while the user is dragging.
           * @param event Event whose default action should be prevented.
           */

          this._preventDefaultWhileDragging = function (event) {
            if (_this19._activeDragInstances.length > 0) {
              event.preventDefault();
            }
          };
          /** Event listener for `touchmove` that is bound even if no dragging is happening. */


          this._persistentTouchmoveListener = function (event) {
            if (_this19._activeDragInstances.length > 0) {
              // Note that we only want to prevent the default action after dragging has actually started.
              // Usually this is the same time at which the item is added to the `_activeDragInstances`,
              // but it could be pushed back if the user has set up a drag delay or threshold.
              if (_this19._activeDragInstances.some(_this19._draggingPredicate)) {
                event.preventDefault();
              }

              _this19.pointerMove.next(event);
            }
          };

          this._document = _document;
        }
        /** Adds a drop container to the registry. */


        _createClass(DragDropRegistry, [{
          key: "registerDropContainer",
          value: function registerDropContainer(drop) {
            if (!this._dropInstances.has(drop)) {
              this._dropInstances.add(drop);
            }
          }
          /** Adds a drag item instance to the registry. */

        }, {
          key: "registerDragItem",
          value: function registerDragItem(drag) {
            var _this20 = this;

            this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
            // won't preventDefault on a dynamically-added `touchmove` listener.
            // See https://bugs.webkit.org/show_bug.cgi?id=184250.


            if (this._dragInstances.size === 1) {
              this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this20._document.addEventListener('touchmove', _this20._persistentTouchmoveListener, activeCapturingEventOptions);
              });
            }
          }
          /** Removes a drop container from the registry. */

        }, {
          key: "removeDropContainer",
          value: function removeDropContainer(drop) {
            this._dropInstances["delete"](drop);
          }
          /** Removes a drag item instance from the registry. */

        }, {
          key: "removeDragItem",
          value: function removeDragItem(drag) {
            this._dragInstances["delete"](drag);

            this.stopDragging(drag);

            if (this._dragInstances.size === 0) {
              this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
            }
          }
          /**
           * Starts the dragging sequence for a drag instance.
           * @param drag Drag instance which is being dragged.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "startDragging",
          value: function startDragging(drag, event) {
            var _this21 = this;

            // Do not process the same drag twice to avoid memory leaks and redundant listeners
            if (this._activeDragInstances.indexOf(drag) > -1) {
              return;
            }

            this._activeDragInstances.push(drag);

            if (this._activeDragInstances.length === 1) {
              var _isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
              // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
              // use `preventDefault` to prevent the page from scrolling while the user is dragging.


              this._globalListeners.set(_isTouchEvent ? 'touchend' : 'mouseup', {
                handler: function handler(e) {
                  return _this21.pointerUp.next(e);
                },
                options: true
              }).set('scroll', {
                handler: function handler(e) {
                  return _this21.scroll.next(e);
                },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
              }) // Preventing the default action on `mousemove` isn't enough to disable text selection
              // on Safari so we need to prevent the selection event as well. Alternatively this can
              // be done by setting `user-select: none` on the `body`, however it has causes a style
              // recalculation which can be expensive on pages with a lot of elements.
              .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
              }); // We don't have to bind a move event for touch drag sequences, because
              // we already have a persistent global one bound from `registerDragItem`.


              if (!_isTouchEvent) {
                this._globalListeners.set('mousemove', {
                  handler: function handler(e) {
                    return _this21.pointerMove.next(e);
                  },
                  options: activeCapturingEventOptions
                });
              }

              this._ngZone.runOutsideAngular(function () {
                _this21._globalListeners.forEach(function (config, name) {
                  _this21._document.addEventListener(name, config.handler, config.options);
                });
              });
            }
          }
          /** Stops dragging a drag item instance. */

        }, {
          key: "stopDragging",
          value: function stopDragging(drag) {
            var index = this._activeDragInstances.indexOf(drag);

            if (index > -1) {
              this._activeDragInstances.splice(index, 1);

              if (this._activeDragInstances.length === 0) {
                this._clearGlobalListeners();
              }
            }
          }
          /** Gets whether a drag item instance is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging(drag) {
            return this._activeDragInstances.indexOf(drag) > -1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this22 = this;

            this._dragInstances.forEach(function (instance) {
              return _this22.removeDragItem(instance);
            });

            this._dropInstances.forEach(function (instance) {
              return _this22.removeDropContainer(instance);
            });

            this._clearGlobalListeners();

            this.pointerMove.complete();
            this.pointerUp.complete();
          }
          /** Clears out the global event listeners from the `document`. */

        }, {
          key: "_clearGlobalListeners",
          value: function _clearGlobalListeners() {
            var _this23 = this;

            this._globalListeners.forEach(function (config, name) {
              _this23._document.removeEventListener(name, config.handler, config.options);
            });

            this._globalListeners.clear();
          }
        }]);

        return DragDropRegistry;
      }();

      DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
        return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDropRegistry_Factory() {
          return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: DragDropRegistry,
        providedIn: "root"
      });

      DragDropRegistry.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
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

      /** Default configuration to be used when creating a `DragRef`. */


      var DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
      /**
       * Service that allows for drag-and-drop functionality to be attached to DOM elements.
       */

      var DragDrop = /*#__PURE__*/function () {
        function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          _classCallCheck(this, DragDrop);

          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
        }
        /**
         * Turns an element into a draggable item.
         * @param element Element to which to attach the dragging functionality.
         * @param config Object used to configure the dragging behavior.
         */


        _createClass(DragDrop, [{
          key: "createDrag",
          value: function createDrag(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
            return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
          }
          /**
           * Turns an element into a drop list.
           * @param element Element to which to attach the drop list functionality.
           */

        }, {
          key: "createDropList",
          value: function createDropList(element) {
            return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
          }
        }]);

        return DragDrop;
      }();

      DragDrop.ɵfac = function DragDrop_Factory(t) {
        return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
      };

      DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDrop_Factory() {
          return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
        },
        token: DragDrop,
        providedIn: "root"
      });

      DragDrop.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
          }, {
            type: DragDropRegistry
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
       * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
       * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
       * to avoid circular imports.
       * @docs-private
       */


      var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
       * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropListGroup');
      /**
       * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
       * elements that are placed inside a `cdkDropListGroup` will be connected to each other
       * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
       * from `cdkDropList`.
       */

      var CdkDropListGroup = /*#__PURE__*/function () {
        function CdkDropListGroup() {
          _classCallCheck(this, CdkDropListGroup);

          /** Drop lists registered inside the group. */
          this._items = new Set();
          this._disabled = false;
        }
        /** Whether starting a dragging sequence from inside this group is disabled. */


        _createClass(CdkDropListGroup, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._items.clear();
          }
        }]);

        return CdkDropListGroup;
      }();

      CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
        return new (t || CdkDropListGroup)();
      };

      CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: ["cdkDropListGroupDisabled", "disabled"]
        },
        exportAs: ["cdkDropListGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DROP_LIST_GROUP,
          useExisting: CdkDropListGroup
        }])]
      });
      CdkDropListGroup.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropListGroup]',
            exportAs: 'cdkDropListGroup',
            providers: [{
              provide: CDK_DROP_LIST_GROUP,
              useExisting: CdkDropListGroup
            }]
          }]
        }], function () {
          return [];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
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

      /**
       * Injection token that can be used to configure the
       * behavior of the drag&drop-related components.
       */


      var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Asserts that a particular node is an element.
       * @param node Node to be checked.
       * @param name Name to attach to the error message.
       */

      function assertElementNode(node, name) {
        if (node.nodeType !== 1) {
          throw Error("".concat(name, " must be attached to an element node. ") + "Currently attached to \"".concat(node.nodeName, "\"."));
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique ids for drop zones. */


      var _uniqueIdCounter = 0;
      /**
       * Injection token that can be used to reference instances of `CdkDropList`. It serves as
       * alternative token to the actual `CdkDropList` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropList');
      var ɵ0 = undefined;
      /** Container that wraps a set of draggable items. */

      var CdkDropList = /*#__PURE__*/function () {
        function CdkDropList(
        /** Element that the drop list is attached to. */
        element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
          var _this24 = this;

          _classCallCheck(this, CdkDropList);

          this.element = element;
          this._changeDetectorRef = _changeDetectorRef;
          this._scrollDispatcher = _scrollDispatcher;
          this._dir = _dir;
          this._group = _group;
          /** Emits when the list has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Other draggable containers that this container is connected to and into which the
           * container's items can be transferred. Can either be references to other drop containers,
           * or their unique IDs.
           */

          this.connectedTo = [];
          /**
           * Unique ID for the drop zone. Can be used as a reference
           * in the `connectedTo` of another `CdkDropList`.
           */

          this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Functions that is used to determine whether an item can be sorted into a particular index. */


          this.sortPredicate = function () {
            return true;
          };
          /** Emits when the user drops an item inside the container. */


          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Keeps track of the items that are registered with this container. Historically we used to
           * do this with a `ContentChildren` query, however queries don't handle transplanted views very
           * well which means that we can't handle cases like dragging the headers of a `mat-table`
           * correctly. What we do instead is to have the items register themselves with the container
           * and then we sort them based on their position in the DOM.
           */

          this._unsortedItems = new Set();

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assertElementNode(element.nativeElement, 'cdkDropList');
          }

          this._dropListRef = dragDrop.createDropList(element);
          this._dropListRef.data = this;

          if (config) {
            this._assignDefaults(config);
          }

          this._dropListRef.enterPredicate = function (drag, drop) {
            return _this24.enterPredicate(drag.data, drop.data);
          };

          this._dropListRef.sortPredicate = function (index, drag, drop) {
            return _this24.sortPredicate(index, drag.data, drop.data);
          };

          this._setupInputSyncSubscription(this._dropListRef);

          this._handleEvents(this._dropListRef);

          CdkDropList._dropLists.push(this);

          if (_group) {
            _group._items.add(this);
          }
        }
        /** Whether starting a dragging sequence from this container is disabled. */


        _createClass(CdkDropList, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!this._group && this._group.disabled;
          },
          set: function set(value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Registers an items with the drop list. */

        }, {
          key: "addItem",
          value: function addItem(item) {
            this._unsortedItems.add(item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Removes an item from the drop list. */

        }, {
          key: "removeItem",
          value: function removeItem(item) {
            this._unsortedItems["delete"](item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Gets the registered items in the list, sorted by their position in the DOM. */

        }, {
          key: "getSortedItems",
          value: function getSortedItems() {
            return Array.from(this._unsortedItems).sort(function (a, b) {
              var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
              // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
              // tslint:disable-next-line:no-bitwise


              return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var index = CdkDropList._dropLists.indexOf(this);

            if (index > -1) {
              CdkDropList._dropLists.splice(index, 1);
            }

            if (this._group) {
              this._group._items["delete"](this);
            }

            this._unsortedItems.clear();

            this._dropListRef.dispose();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

        }, {
          key: "_setupInputSyncSubscription",
          value: function _setupInputSyncSubscription(ref) {
            var _this25 = this;

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function (value) {
                return ref.withDirection(value);
              });
            }

            ref.beforeStarted.subscribe(function () {
              var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this25.connectedTo).map(function (drop) {
                if (typeof drop === 'string') {
                  var correspondingDropList = CdkDropList._dropLists.find(function (list) {
                    return list.id === drop;
                  });

                  if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    console.warn("CdkDropList could not find connected drop list with id \"".concat(drop, "\""));
                  }

                  return correspondingDropList;
                }

                return drop;
              });

              if (_this25._group) {
                _this25._group._items.forEach(function (drop) {
                  if (siblings.indexOf(drop) === -1) {
                    siblings.push(drop);
                  }
                });
              } // Note that we resolve the scrollable parents here so that we delay the resolution
              // as long as possible, ensuring that the element is in its final place in the DOM.


              if (!_this25._scrollableParentsResolved) {
                var scrollableParents = _this25._scrollDispatcher.getAncestorScrollContainers(_this25.element).map(function (scrollable) {
                  return scrollable.getElementRef().nativeElement;
                });

                _this25._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.


                _this25._scrollableParentsResolved = true;
              }

              ref.disabled = _this25.disabled;
              ref.lockAxis = _this25.lockAxis;
              ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this25.sortingDisabled);
              ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this25.autoScrollDisabled);
              ref.autoScrollStep = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(_this25.autoScrollStep, 2);
              ref.connectedTo(siblings.filter(function (drop) {
                return drop && drop !== _this25;
              }).map(function (list) {
                return list._dropListRef;
              })).withOrientation(_this25.orientation);
            });
          }
          /** Handles events from the underlying DropListRef. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this26 = this;

            ref.beforeStarted.subscribe(function () {
              _this26._syncItemsWithRef();

              _this26._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this26.entered.emit({
                container: _this26,
                item: event.item.data,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this26.exited.emit({
                container: _this26,
                item: event.item.data
              });

              _this26._changeDetectorRef.markForCheck();
            });
            ref.sorted.subscribe(function (event) {
              _this26.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this26,
                item: event.item.data
              });
            });
            ref.dropped.subscribe(function (event) {
              _this26.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
              }); // Mark for check since all of these events run outside of change
              // detection and we're not guaranteed for something else to have triggered it.


              _this26._changeDetectorRef.markForCheck();
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                draggingDisabled = config.draggingDisabled,
                sortingDisabled = config.sortingDisabled,
                listAutoScrollDisabled = config.listAutoScrollDisabled,
                listOrientation = config.listOrientation;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
            this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
            this.orientation = listOrientation || 'vertical';

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }
          }
          /** Syncs up the registered drag items with underlying drop list ref. */

        }, {
          key: "_syncItemsWithRef",
          value: function _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(function (item) {
              return item._dragRef;
            }));
          }
        }]);

        return CdkDropList;
      }();

      CdkDropList.ɵfac = function CdkDropList_Factory(t) {
        return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
      };

      CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
          id: "id",
          enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
          sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
          disabled: ["cdkDropListDisabled", "disabled"],
          sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
          autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
          orientation: ["cdkDropListOrientation", "orientation"],
          lockAxis: ["cdkDropListLockAxis", "lockAxis"],
          data: ["cdkDropListData", "data"],
          autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }])]
      });
      /** Keeps track of the drop lists that are currently on the page. */

      CdkDropList._dropLists = [];

      CdkDropList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST_GROUP]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      };

      CdkDropList.propDecorators = {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        sortPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        autoScrollStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollStep']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropList], cdk-drop-list',
            exportAs: 'cdkDropList',
            providers: [// Prevent child drop lists from picking up the same group as their parent.
            {
              provide: CDK_DROP_LIST_GROUP,
              useValue: ɵ0
            }, {
              provide: CDK_DROP_LIST,
              useExisting: CdkDropList
            }],
            host: {
              'class': 'cdk-drop-list',
              '[attr.id]': 'id',
              '[class.cdk-drop-list-disabled]': 'disabled',
              '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
              '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: CdkDropListGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST_GROUP]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }];
        }, {
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
          }],
          sortPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortPredicate']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
          }],
          sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
          }],
          sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
          }],
          autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
          }],
          autoScrollStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollStep']
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

      /**
       * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
       * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragHandle');
      /** Handle that can be used to drag a CdkDrag instance. */

      var CdkDragHandle = /*#__PURE__*/function () {
        function CdkDragHandle(element, parentDrag) {
          _classCallCheck(this, CdkDragHandle);

          this.element = element;
          /** Emits when the state of the handle has changed. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this._disabled = false;

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assertElementNode(element.nativeElement, 'cdkDragHandle');
          }

          this._parentDrag = parentDrag;
        }
        /** Whether starting to drag through this handle is disabled. */


        _createClass(CdkDragHandle, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._stateChanges.next(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return CdkDragHandle;
      }();

      CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
        return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };

      CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: ["cdkDragHandleDisabled", "disabled"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_HANDLE,
          useExisting: CdkDragHandle
        }])]
      });

      CdkDragHandle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      CdkDragHandle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDragHandle]',
            host: {
              'class': 'cdk-drag-handle'
            },
            providers: [{
              provide: CDK_DRAG_HANDLE,
              useExisting: CdkDragHandle
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_PARENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
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

      /**
       * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
       * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPlaceholder');
      /**
       * Element that will be used as a template for the placeholder of a CdkDrag when
       * it is being dragged. The placeholder is displayed in place of the element being dragged.
       */

      var CdkDragPlaceholder = /*#__PURE__*/_createClass(function CdkDragPlaceholder(templateRef) {
        _classCallCheck(this, CdkDragPlaceholder);

        this.templateRef = templateRef;
      });

      CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
        return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PLACEHOLDER,
          useExisting: CdkDragPlaceholder
        }])]
      });

      CdkDragPlaceholder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPlaceholder.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPlaceholder]',
            providers: [{
              provide: CDK_DRAG_PLACEHOLDER,
              useExisting: CdkDragPlaceholder
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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

      /**
       * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
       * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPreview');
      /**
       * Element that will be used as a template for the preview
       * of a CdkDrag when it is being dragged.
       */

      var CdkDragPreview = /*#__PURE__*/function () {
        function CdkDragPreview(templateRef) {
          _classCallCheck(this, CdkDragPreview);

          this.templateRef = templateRef;
          this._matchSize = false;
        }
        /** Whether the preview should preserve the same size as the item that is being dragged. */


        _createClass(CdkDragPreview, [{
          key: "matchSize",
          get: function get() {
            return this._matchSize;
          },
          set: function set(value) {
            this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDragPreview;
      }();

      CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
        return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          matchSize: "matchSize",
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PREVIEW,
          useExisting: CdkDragPreview
        }])]
      });

      CdkDragPreview.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPreview.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPreview]',
            providers: [{
              provide: CDK_DRAG_PREVIEW,
              useExisting: CdkDragPreview
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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


      var DRAG_HOST_CLASS = 'cdk-drag';
      /** Element that can be moved inside a CdkDropList container. */

      var CdkDrag = /*#__PURE__*/function () {
        function CdkDrag(
        /** Element that the draggable is attached to. */
        element,
        /** Droppable container that the draggable is a part of. */
        dropContainer,
        /**
         * @deprecated `_document` parameter no longer being used and will be removed.
         * @breaking-change 12.0.0
         */
        _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
          var _this27 = this;

          _classCallCheck(this, CdkDrag);

          this.element = element;
          this.dropContainer = dropContainer;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._selfHandle = _selfHandle;
          this._parentDrag = _parentDrag;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var subscription = _this27._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (movedEvent) {
              return {
                source: _this27,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
              };
            })).subscribe(observer);

            return function () {
              subscription.unsubscribe();
            };
          });
          this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
          });
          this._dragRef.data = this; // We have to keep track of the drag instances in order to be able to match an element to
          // a drag instance. We can't go through the global registry of `DragRef`, because the root
          // element could be different.

          CdkDrag._dragInstances.push(this);

          if (config) {
            this._assignDefaults(config);
          } // Note that usually the container is assigned when the drop list is picks up the item, but in
          // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
          // where there are no items on the first change detection pass, but the items get picked up as
          // soon as the user triggers another pass by dragging. This is a problem, because the item would
          // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
          // is too late since the two modes save different kinds of information. We work around it by
          // assigning the drop container both from here and the list.


          if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);

            dropContainer.addItem(this);
          }

          this._syncInputs(this._dragRef);

          this._handleEvents(this._dragRef);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(CdkDrag, [{
          key: "disabled",
          get: function get() {
            return this._disabled || this.dropContainer && this.dropContainer.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._dragRef.getRootElement();
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._dragRef.reset();
          }
          /**
           * Gets the pixel coordinates of the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this28 = this;

            // We need to wait for the zone to stabilize, in order for the reference
            // element to be in the proper place in the DOM. This is mostly relevant
            // for draggable elements inside portals since they get stamped out in
            // their original DOM position and then they get transferred to the portal.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this28._updateRootElement(); // Listen for any newly-added handles.


              _this28._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this28._handles), // Sync the new handles with the DragRef.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (handles) {
                var childHandleElements = handles.filter(function (handle) {
                  return handle._parentDrag === _this28;
                }).map(function (handle) {
                  return handle.element;
                }); // Usually handles are only allowed to be a descendant of the drag element, but if
                // the consumer defined a different drag root, we should allow the drag element
                // itself to be a handle too.

                if (_this28._selfHandle && _this28.rootElementSelector) {
                  childHandleElements.push(_this28.element);
                }

                _this28._dragRef.withHandles(childHandleElements);
              }), // Listen if the state of any of the handles changes.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (handles) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this28._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this28._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
              });

              if (_this28.freeDragPosition) {
                _this28._dragRef.setFreeDragPosition(_this28.freeDragPosition);
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var rootSelectorChange = changes['rootElementSelector'];
            var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
            // handled in `ngAfterViewInit` where it needs to be deferred.

            if (rootSelectorChange && !rootSelectorChange.firstChange) {
              this._updateRootElement();
            } // Skip the first change since it's being handled in `ngAfterViewInit`.


            if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dropContainer) {
              this.dropContainer.removeItem(this);
            }

            var index = CdkDrag._dragInstances.indexOf(this);

            if (index > -1) {
              CdkDrag._dragInstances.splice(index, 1);
            }

            this._destroyed.next();

            this._destroyed.complete();

            this._dragRef.dispose();
          }
          /** Syncs the root element with the `DragRef`. */

        }, {
          key: "_updateRootElement",
          value: function _updateRootElement() {
            var element = this.element.nativeElement;
            var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

            if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              assertElementNode(rootElement, 'cdkDrag');
            }

            this._dragRef.withRootElement(rootElement || element);
          }
          /** Gets the boundary element, based on the `boundaryElement` value. */

        }, {
          key: "_getBoundaryElement",
          value: function _getBoundaryElement() {
            var boundary = this.boundaryElement;

            if (!boundary) {
              return null;
            }

            if (typeof boundary === 'string') {
              return getClosestMatchingAncestor(this.element.nativeElement, boundary);
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
              throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
            }

            return element;
          }
          /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

        }, {
          key: "_syncInputs",
          value: function _syncInputs(ref) {
            var _this29 = this;

            ref.beforeStarted.subscribe(function () {
              if (!ref.isDragging()) {
                var dir = _this29._dir;
                var dragStartDelay = _this29.dragStartDelay;
                var placeholder = _this29._placeholderTemplate ? {
                  template: _this29._placeholderTemplate.templateRef,
                  context: _this29._placeholderTemplate.data,
                  viewContainer: _this29._viewContainerRef
                } : null;
                var preview = _this29._previewTemplate ? {
                  template: _this29._previewTemplate.templateRef,
                  context: _this29._previewTemplate.data,
                  matchSize: _this29._previewTemplate.matchSize,
                  viewContainer: _this29._viewContainerRef
                } : null;
                ref.disabled = _this29.disabled;
                ref.lockAxis = _this29.lockAxis;
                ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = _this29.constrainPosition;
                ref.previewClass = _this29.previewClass;
                ref.withBoundaryElement(_this29._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

                if (dir) {
                  ref.withDirection(dir.value);
                }
              }
            }); // This only needs to be resolved once.

            ref.beforeStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
              var _a, _b; // If we managed to resolve a parent through DI, use it.


              if (_this29._parentDrag) {
                ref.withParent(_this29._parentDrag._dragRef);
                return;
              } // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
              // the item was projected into another item by something like `ngTemplateOutlet`.


              var parent = _this29.element.nativeElement.parentElement;

              while (parent) {
                // `classList` needs to be null checked, because IE doesn't have it on some elements.
                if ((_a = parent.classList) === null || _a === void 0 ? void 0 : _a.contains(DRAG_HOST_CLASS)) {
                  ref.withParent(((_b = CdkDrag._dragInstances.find(function (drag) {
                    return drag.element.nativeElement === parent;
                  })) === null || _b === void 0 ? void 0 : _b._dragRef) || null);
                  break;
                }

                parent = parent.parentElement;
              }
            });
          }
          /** Handles the events from the underlying `DragRef`. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this30 = this;

            ref.started.subscribe(function () {
              _this30.started.emit({
                source: _this30
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this30._changeDetectorRef.markForCheck();
            });
            ref.released.subscribe(function () {
              _this30.released.emit({
                source: _this30
              });
            });
            ref.ended.subscribe(function (event) {
              _this30.ended.emit({
                source: _this30,
                distance: event.distance
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this30._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this30.entered.emit({
                container: event.container.data,
                item: _this30,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this30.exited.emit({
                container: event.container.data,
                item: _this30
              });
            });
            ref.dropped.subscribe(function (event) {
              _this30.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this30,
                distance: event.distance
              });
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                dragStartDelay = config.dragStartDelay,
                constrainPosition = config.constrainPosition,
                previewClass = config.previewClass,
                boundaryElement = config.boundaryElement,
                draggingDisabled = config.draggingDisabled,
                rootElementSelector = config.rootElementSelector;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.dragStartDelay = dragStartDelay || 0;

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }

            if (constrainPosition) {
              this.constrainPosition = constrainPosition;
            }

            if (previewClass) {
              this.previewClass = previewClass;
            }

            if (boundaryElement) {
              this.boundaryElement = boundaryElement;
            }

            if (rootElementSelector) {
              this.rootElementSelector = rootElementSelector;
            }
          }
        }]);

        return CdkDrag;
      }();

      CdkDrag.ɵfac = function CdkDrag_Factory(t) {
        return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };

      CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
          }
        },
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          disabled: ["cdkDragDisabled", "disabled"],
          dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
          lockAxis: ["cdkDragLockAxis", "lockAxis"],
          constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
          previewClass: ["cdkDragPreviewClass", "previewClass"],
          boundaryElement: ["cdkDragBoundary", "boundaryElement"],
          rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
          data: ["cdkDragData", "data"],
          freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      CdkDrag._dragInstances = [];

      CdkDrag.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: CdkDragHandle,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_HANDLE]
          }]
        }, {
          type: CdkDrag,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }]
        }];
      };

      CdkDrag.propDecorators = {
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CDK_DRAG_HANDLE, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PREVIEW]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PLACEHOLDER]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDrag]',
            exportAs: 'cdkDrag',
            host: {
              'class': DRAG_HOST_CLASS,
              '[class.cdk-drag-disabled]': 'disabled',
              '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
            },
            providers: [{
              provide: CDK_DRAG_PARENT,
              useExisting: CdkDrag
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: CdkDragHandle,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_HANDLE]
            }]
          }, {
            type: CdkDrag,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_PARENT]
            }]
          }];
        }, {
          started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
          }],
          released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
          }],
          ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
          }],
          moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
          }],
          dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
          }],
          constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
          }],
          previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
          }],
          boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
          }],
          rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
          }],
          _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CDK_DRAG_HANDLE, {
              descendants: true
            }]
          }],
          _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PREVIEW]
          }],
          _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PLACEHOLDER]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
          }],
          freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
          }]
        });
      })();
      /** Gets the closest ancestor of an element that matches a selector. */


      function getClosestMatchingAncestor(element, selector) {
        var currentElement = element.parentElement;

        while (currentElement) {
          // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
          if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
            return currentElement;
          }

          currentElement = currentElement.parentElement;
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DragDropModule = /*#__PURE__*/_createClass(function DragDropModule() {
        _classCallCheck(this, DragDropModule);
      });

      DragDropModule.ɵfac = function DragDropModule_Factory(t) {
        return new (t || DragDropModule)();
      };

      DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DragDropModule
      });
      DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
          declarations: function declarations() {
            return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            providers: [DragDrop]
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
      //# sourceMappingURL=drag-drop.js.map

      /***/

    },

    /***/
    "I5lE":
    /*!*********************************************************!*\
      !*** ./src/app/doctor/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function I5lE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var _c0 = ["chart"];

      function DashboardComponent_div_296_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 91);
        }
      }

      function DashboardComponent_div_296_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " arrow_downward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_296_mat_icon_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " arrow_upward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_296_mat_icon_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          done: a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "task-low": a0,
          "task-high": a1,
          "task-normal": a2
        };
      };

      function DashboardComponent_div_296_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "drag_indicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_296_Template_mat_checkbox_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var task_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.toggle(task_r1, ctx_r6.sidenav);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_296_div_6_Template, 1, 0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_296_mat_icon_10_Template, 2, 0, "mat-icon", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_296_mat_icon_11_Template, 2, 0, "mat-icon", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_296_mat_icon_12_Template, 2, 0, "mat-icon", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !!task_r1.done);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, task_r1.done));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c2, task_r1.priority == "Low", task_r1.priority == "High", task_r1.priority == "Normal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "Low");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "Normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r1.priority, " ");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          // TODO start
          this.tasks = [{
            id: '1',
            title: 'Check patient report',
            done: true,
            priority: 'High'
          }, {
            id: '2',
            title: 'Request for festivle holiday',
            done: false,
            priority: 'High'
          }, {
            id: '3',
            title: 'Order new medicine stock',
            done: false,
            priority: 'Low'
          }, {
            id: '4',
            title: 'Remind for lunch in hotel',
            done: true,
            priority: 'Normal'
          }, {
            id: '5',
            title: 'Conference in london',
            done: false,
            priority: 'High'
          }, {
            id: '6',
            title: 'Announcement for',
            done: false,
            priority: 'Normal'
          }, {
            id: '7',
            title: 'call bus driver',
            done: true,
            priority: 'High'
          }, {
            id: '8',
            title: 'Web service data load issue',
            done: false,
            priority: 'High'
          }, {
            id: '9',
            title: 'Java compile error',
            done: false,
            priority: 'Low'
          }, {
            id: '10',
            title: 'Integrate project with spring boot',
            done: true,
            priority: 'High'
          }];
        }

        _createClass(DashboardComponent, [{
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.tasks, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "toggle",
          value: function toggle(task, nav) {
            task.done = !task.done;
          } // TODO end

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart1();
            this.chart2();
            this.chart3();
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
              colors: ['#7D4988', '#66BB6A'],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
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
                  format: 'dd/MM/yy HH:mm'
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.radialChartOptions = {
              series: [44, 55, 67],
              chart: {
                height: 265,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px'
                    },
                    value: {
                      fontSize: '16px'
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function formatter(w) {
                        return '249';
                      }
                    }
                  }
                }
              },
              colors: ['#ffc107', '#3f51b5', '#8bc34a'],
              labels: ['Face TO Face', 'E-Consult', 'Available']
            };
          }
        }, {
          key: "chart3",
          value: function chart3() {
            this.linechartOptions = {
              series: [{
                name: 'Male',
                data: [44, 55, 57, 56, 61, 58]
              }, {
                name: 'Female',
                data: [76, 85, 101, 98, 87, 105]
              }],
              chart: {
                type: 'bar',
                height: 350,
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                },
                foreColor: '#9aa0ac'
              },
              colors: ['#5C9FFB', '#AEAEAE'],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%'
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              yaxis: {},
              fill: {
                opacity: 1
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

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 393,
        vars: 25,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-card1", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-15"], [1, "text-right"], [1, "fas", "fa-user-injured", "pull-left"], [1, "m-b-0"], [1, "info-box7", "l-bg-card2", "order-info-box7"], [1, "far", "fa-calendar-check", "pull-left"], [1, "info-box7", "l-bg-card3", "order-info-box7"], [1, "fas", "fa-cut", "pull-left"], [1, "info-box7", "l-bg-card4", "order-info-box7"], [1, "fab", "fa-internet-explorer", "pull-left"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [3, "series", "chart", "plotOptions", "labels"], [1, "text-center", "p-t-20"], [1, "chart-note"], [1, "dot", "bg-orange"], [1, "dot", "bg-indigo"], [1, "chart-note", "mr-0"], [1, "dot", "bg-green"], ["mat-stroked-button", "", "color", "primary"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "badge", "col-red"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["mat-flat-button", "", "color", "primary"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "badge", "col-purple"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "badge", "col-brown"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "badge", "col-cyan"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder"], [1, "patient-group-list"], [1, "media-body", "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "media-cta"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "media-title"], ["href", "mailto:test@gmail.com"], [1, "text-job", "font-11"], ["src", "assets/images/user/user6.jpg", "alt", ""], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "colors", "stroke", "tooltip", "xaxis"], ["cdkDrag", "", 1, "task-box"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]],
        template: function DashboardComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Doctor Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Todays Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "231");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "18% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Completed Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "122");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "21% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Todays Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "37% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Online Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Patients Survay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "apx-chart", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Appointment Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "apx-chart", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Face To Face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "E-Consult");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Modify Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Todays Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Patient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Last Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Fever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Typhod");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Maleria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Infection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Patients Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "ul", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Cholesterol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "5 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Diabetic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "14 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Low Blood Pressure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "10 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Hypertension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "21 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "11 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Dental Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "17 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Todo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function DashboardComponent_Template_div_cdkDropListDropped_295_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, DashboardComponent_div_296_Template, 14, 14, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " Doctors List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Doctor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "(BDS,MDS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "(BHMS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "(MBBS,MS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "(MBBS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Number Of Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "apx-chart", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.radialChartOptions.series)("chart", ctx.radialChartOptions.chart)("plotOptions", ctx.radialChartOptions.plotOptions)("labels", ctx.radialChartOptions.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](222);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.linechartOptions.series)("chart", ctx.linechartOptions.chart)("dataLabels", ctx.linechartOptions.dataLabels)("plotOptions", ctx.linechartOptions.plotOptions)("yaxis", ctx.linechartOptions.yaxis)("legend", ctx.linechartOptions.legend)("fill", ctx.linechartOptions.fill)("colors", ctx.linechartOptions.colors)("stroke", ctx.linechartOptions.stroke)("tooltip", ctx.linechartOptions.tooltip)("xaxis", ctx.linechartOptions.xaxis);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.sass']
          }]
        }], function () {
          return [];
        }, {
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
          }]
        });
      })();
      /***/

    },

    /***/
    "STbY":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

    /***/
    function STbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_CONTENT", function () {
        return MAT_MENU_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
        return MAT_MENU_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
        return MAT_MENU_PANEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
        return MAT_MENU_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
        return MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
        return MatMenuContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
        return MatMenuItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
        return MatMenuModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
        return MatMenuTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
        return _MatMenuBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
        return _MatMenuDirectivesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
        return fadeInItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
        return matMenuAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
        return transformMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
        return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the mat-menu component.
       * Animation duration and timing values are based on:
       * https://material.io/guidelines/components/menus.html#menus-usage
       * @docs-private
       */


      var _c0 = ["mat-menu-item", ""];
      var _c1 = ["*"];

      function MatMenu_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1._handleKeydown($event);
          })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.closed.emit("click");
          })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4._onAnimationStart($event);
          })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
        }
      }

      var matMenuAnimations = {
        /**
         * This animation controls the menu panel's entry and exit from the page.
         *
         * When the menu panel is added to the DOM, it scales in and fades in its border.
         *
         * When the menu panel is removed from the DOM, it simply fades out after a brief
         * delay to display the ripple.
         */
        transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: 'scale(0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })))]),

        /**
         * This animation fades in the background color and content of the menu panel
         * after its containing element is scaled in.
         */
        fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var fadeInItems = matMenuAnimations.fadeInItems;
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var transformMenu = matMenuAnimations.transformMenu;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatMenuContent`. It serves
       * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatMenuContent');
      /**
       * Menu content that will be rendered lazily once the menu is opened.
       */

      var MatMenuContent = /*#__PURE__*/function () {
        function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
          _classCallCheck(this, MatMenuContent);

          this._template = _template;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._injector = _injector;
          this._viewContainerRef = _viewContainerRef;
          this._document = _document;
          this._changeDetectorRef = _changeDetectorRef;
          /** Emits when the menu content has been attached. */

          this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
        /**
         * Attaches the content with a particular context.
         * @docs-private
         */


        _createClass(MatMenuContent, [{
          key: "attach",
          value: function attach() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this._portal) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
            }

            this.detach();

            if (!this._outlet) {
              this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
            }

            var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
            // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
            // risk it staying attached to a pane that's no longer in the DOM.

            element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
            // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
            // by Angular. This causes the `@ContentChildren` for menu items within the menu to
            // not be updated by Angular. By explicitly marking for check here, we tell Angular that
            // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
            // @breaking-change 9.0.0 Make change detector ref required

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }

            this._portal.attach(this._outlet, context);

            this._attached.next();
          }
          /**
           * Detaches the content.
           * @docs-private
           */

        }, {
          key: "detach",
          value: function detach() {
            if (this._portal.isAttached) {
              this._portal.detach();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._outlet) {
              this._outlet.dispose();
            }
          }
        }]);

        return MatMenuContent;
      }();

      MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
        return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuContent,
        selectors: [["ng-template", "matMenuContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_CONTENT,
          useExisting: MatMenuContent
        }])]
      });

      MatMenuContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matMenuContent]',
            providers: [{
              provide: MAT_MENU_CONTENT,
              useExisting: MatMenuContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
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
       * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
       * @docs-private
       */


      function throwMatMenuMissingError() {
        throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
      }
      /**
       * Throws an exception for the case when menu's x-position value isn't valid.
       * In other words, it doesn't match 'before' or 'after'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionX() {
        throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when menu's y-position value isn't valid.
       * In other words, it doesn't match 'above' or 'below'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionY() {
        throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when a menu is assigned
       * to a trigger that is placed inside the same menu.
       * @docs-private
       */


      function throwMatMenuRecursiveError() {
        throw Error("matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is " + "not a parent of the trigger or move the trigger outside of the menu.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent menu to menu-specific components.
       * @docs-private
       */


      var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatMenuItem.

      /** @docs-private */

      var MatMenuItemBase = /*#__PURE__*/_createClass(function MatMenuItemBase() {
        _classCallCheck(this, MatMenuItemBase);
      });

      var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
      /**
       * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
       */


      var MatMenuItem = /*#__PURE__*/function (_MatMenuItemMixinBase2) {
        _inherits(MatMenuItem, _MatMenuItemMixinBase2);

        var _super = _createSuper(MatMenuItem);

        function MatMenuItem(_elementRef,
        /**
         * @deprecated `_document` parameter is no longer being used and will be removed.
         * @breaking-change 12.0.0
         */
        _document, _focusMonitor, _parentMenu) {
          var _this31;

          _classCallCheck(this, MatMenuItem);

          // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
          _this31 = _super.call(this);
          _this31._elementRef = _elementRef;
          _this31._focusMonitor = _focusMonitor;
          _this31._parentMenu = _parentMenu;
          /** ARIA role for the menu item. */

          _this31.role = 'menuitem';
          /** Stream that emits when the menu item is hovered. */

          _this31._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Stream that emits when the menu item is focused. */

          _this31._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Whether the menu item is highlighted. */

          _this31._highlighted = false;
          /** Whether the menu item acts as a trigger for a sub-menu. */

          _this31._triggersSubmenu = false;

          if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_assertThisInitialized(_this31));
          }

          return _this31;
        }
        /** Focuses the menu item. */


        _createClass(MatMenuItem, [{
          key: "focus",
          value: function focus(origin, options) {
            if (this._focusMonitor && origin) {
              this._focusMonitor.focusVia(this._getHostElement(), origin, options);
            } else {
              this._getHostElement().focus(options);
            }

            this._focused.next(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this._focusMonitor) {
              // Start monitoring the element so it gets the appropriate focused classes. We want
              // to show the focus style for menu items only when the focus was not caused by a
              // mouse or touch interaction.
              this._focusMonitor.monitor(this._elementRef, false);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._focusMonitor) {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }

            if (this._parentMenu && this._parentMenu.removeItem) {
              this._parentMenu.removeItem(this);
            }

            this._hovered.complete();

            this._focused.complete();
          }
          /** Used to set the `tabindex`. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Returns the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_checkDisabled",
          value: function _checkDisabled(event) {
            if (this.disabled) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_handleMouseEnter",
          value: function _handleMouseEnter() {
            this._hovered.next(this);
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            var _a, _b;

            var clone = this._elementRef.nativeElement.cloneNode(true);

            var icons = clone.querySelectorAll('mat-icon, .material-icons'); // Strip away icons so they don't show up in the text.

            for (var i = 0; i < icons.length; i++) {
              var icon = icons[i];
              (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
            }

            return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
          }
        }]);

        return MatMenuItem;
      }(_MatMenuItemMixinBase);

      MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
        return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
      };

      MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatMenuItem,
        selectors: [["", "mat-menu-item", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 10,
        hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
              return ctx._checkDisabled($event);
            })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
              return ctx._handleMouseEnter();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          role: "role"
        },
        exportAs: ["matMenuItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 2,
        vars: 2,
        consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
        template: function MatMenuItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMenuItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatMenuItem.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _checkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }],
        _handleMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: '[mat-menu-item]',
            exportAs: 'matMenuItem',
            inputs: ['disabled', 'disableRipple'],
            host: {
              '[attr.role]': 'role',
              '[class.mat-menu-item]': 'true',
              '[class.mat-menu-item-highlighted]': '_highlighted',
              '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
              '[attr.tabindex]': '_getTabIndex()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.disabled]': 'disabled || null',
              'class': 'mat-focus-indicator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_PANEL]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],

          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
          }],

          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
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

      /** Injection token to be used to override the default options for `mat-menu`. */


      var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
        providedIn: 'root',
        factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
        return {
          overlapTrigger: false,
          xPosition: 'after',
          yPosition: 'below',
          backdropClass: 'cdk-overlay-transparent-backdrop'
        };
      }
      /**
       * Start elevation for the menu panel.
       * @docs-private
       */


      var MAT_MENU_BASE_ELEVATION = 4;
      var menuPanelUid = 0;
      /** Base class with all of the `MatMenu` functionality. */

      var _MatMenuBase = /*#__PURE__*/function () {
        function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
          _classCallCheck(this, _MatMenuBase);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions;
          this._xPosition = this._defaultOptions.xPosition;
          this._yPosition = this._defaultOptions.yPosition;
          /** Only the direct descendant menu items. */

          this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Subscription to tab events on the menu panel */

          this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /** Config object to be passed into the menu's ngClass */

          this._classList = {};
          /** Current state of the panel animation. */

          this._panelAnimationState = 'void';
          /** Emits whenever an animation on the menu completes. */

          this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Class or list of classes to be added to the overlay panel. */

          this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
          /** Class to be added to the backdrop element. */

          this.backdropClass = this._defaultOptions.backdropClass;
          this._overlapTrigger = this._defaultOptions.overlapTrigger;
          this._hasBackdrop = this._defaultOptions.hasBackdrop;
          /** Event emitted when the menu is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the menu is closed.
           * @deprecated Switch to `closed` instead
           * @breaking-change 8.0.0
           */

          this.close = this.closed;
          this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
        }
        /** Position of the menu in the X axis. */


        _createClass(_MatMenuBase, [{
          key: "xPosition",
          get: function get() {
            return this._xPosition;
          },
          set: function set(value) {
            if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionX();
            }

            this._xPosition = value;
            this.setPositionClasses();
          }
          /** Position of the menu in the Y axis. */

        }, {
          key: "yPosition",
          get: function get() {
            return this._yPosition;
          },
          set: function set(value) {
            if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionY();
            }

            this._yPosition = value;
            this.setPositionClasses();
          }
          /** Whether the menu should overlap its trigger. */

        }, {
          key: "overlapTrigger",
          get: function get() {
            return this._overlapTrigger;
          },
          set: function set(value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the menu has a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @param classes list of class names
           */

        }, {
          key: "panelClass",
          set: function set(classes) {
            var _this32 = this;

            var previousPanelClass = this._previousPanelClass;

            if (previousPanelClass && previousPanelClass.length) {
              previousPanelClass.split(' ').forEach(function (className) {
                _this32._classList[className] = false;
              });
            }

            this._previousPanelClass = classes;

            if (classes && classes.length) {
              classes.split(' ').forEach(function (className) {
                _this32._classList[className] = true;
              });
              this._elementRef.nativeElement.className = '';
            }
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @deprecated Use `panelClass` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "classList",
          get: function get() {
            return this.panelClass;
          },
          set: function set(classes) {
            this.panelClass = classes;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setPositionClasses();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this33 = this;

            this._updateDirectDescendants();

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
            this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
              return _this33.closed.emit('tab');
            }); // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
            // change back to the key manager. Note that we don't need to unsubscribe here because _focused
            // is internal and we know that it gets completed on destroy.

            this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._focused;
              })));
            })).subscribe(function (focusedItem) {
              return _this33._keyManager.updateActiveItem(focusedItem);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._directDescendantItems.destroy();

            this._tabSubscription.unsubscribe();

            this.closed.complete();
          }
          /** Stream that emits whenever the hovered menu item changes. */

        }, {
          key: "_hovered",
          value: function _hovered() {
            // Coerce the `changes` property because Angular types it as `Observable<any>`
            var itemChanges = this._directDescendantItems.changes;
            return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._hovered;
              })));
            }));
          }
          /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "addItem",
          value: function addItem(_item) {}
          /**
           * Removes an item from the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "removeItem",
          value: function removeItem(_item) {}
          /** Handle a keyboard event from the menu, delegating to the appropriate action. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                  event.preventDefault();
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                  this.closed.emit('keydown');
                }

                break;

              default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                  manager.setFocusOrigin('keyboard');
                }

                manager.onKeydown(event);
            }
          }
          /**
           * Focus the first item in the menu.
           * @param origin Action from which the focus originated. Used to set the correct styling.
           */

        }, {
          key: "focusFirstItem",
          value: function focusFirstItem() {
            var _this34 = this;

            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

            // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
            if (this.lazyContent) {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
                return _this34._focusFirstItem(origin);
              });
            } else {
              this._focusFirstItem(origin);
            }
          }
          /**
           * Actual implementation that focuses the first item. Needs to be separated
           * out so we don't repeat the same logic in the public `focusFirstItem` method.
           */

        }, {
          key: "_focusFirstItem",
          value: function _focusFirstItem(origin) {
            var manager = this._keyManager;
            manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
            // Move focus to the menu panel so keyboard events like Escape still work. Also this will
            // give _some_ feedback to screen readers.

            if (!manager.activeItem && this._directDescendantItems.length) {
              var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
              // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
              // because the panel is inside an `ng-template`. We work around it by starting from one of
              // the items and walking up the DOM.


              while (element) {
                if (element.getAttribute('role') === 'menu') {
                  element.focus();
                  break;
                } else {
                  element = element.parentElement;
                }
              }
            }
          }
          /**
           * Resets the active item in the menu. This is used when the menu is opened, allowing
           * the user to start from the first option when pressing the down arrow.
           */

        }, {
          key: "resetActiveItem",
          value: function resetActiveItem() {
            this._keyManager.setActiveItem(-1);
          }
          /**
           * Sets the menu panel elevation.
           * @param depth Number of parent menus that come before the menu.
           */

        }, {
          key: "setElevation",
          value: function setElevation(depth) {
            // The elevation starts at the base and increases by one for each level.
            // Capped at 24 because that's the maximum elevation defined in the Material design spec.
            var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
            var newElevation = "mat-elevation-z".concat(elevation);
            var customElevation = Object.keys(this._classList).find(function (c) {
              return c.startsWith('mat-elevation-z');
            });

            if (!customElevation || customElevation === this._previousElevation) {
              if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
              }

              this._classList[newElevation] = true;
              this._previousElevation = newElevation;
            }
          }
          /**
           * Adds classes to the menu panel based on its position. Can be used by
           * consumers to add specific styling based on the position.
           * @param posX Position of the menu along the x axis.
           * @param posY Position of the menu along the y axis.
           * @docs-private
           */

        }, {
          key: "setPositionClasses",
          value: function setPositionClasses() {
            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;
            var classes = this._classList;
            classes['mat-menu-before'] = posX === 'before';
            classes['mat-menu-after'] = posX === 'after';
            classes['mat-menu-above'] = posY === 'above';
            classes['mat-menu-below'] = posY === 'below';
          }
          /** Starts the enter animation. */

        }, {
          key: "_startAnimation",
          value: function _startAnimation() {
            // @breaking-change 8.0.0 Combine with _resetAnimation.
            this._panelAnimationState = 'enter';
          }
          /** Resets the panel animation to its initial state. */

        }, {
          key: "_resetAnimation",
          value: function _resetAnimation() {
            // @breaking-change 8.0.0 Combine with _startAnimation.
            this._panelAnimationState = 'void';
          }
          /** Callback that is invoked when the panel animation completes. */

        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            this._animationDone.next(event);

            this._isAnimating = false;
          }
        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
            // because we move focus to the first item while it's still being animated, which can throw
            // the browser off when it determines the scroll position. Alternatively we can move focus
            // when the animation is done, however moving focus asynchronously will interrupt screen
            // readers which are in the process of reading out the menu already. We take the `element`
            // from the `event` since we can't use a `ViewChild` to access the pane.

            if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
              event.element.scrollTop = 0;
            }
          }
          /**
           * Sets up a stream that will keep track of any newly-added menu items and will update the list
           * of direct descendants. We collect the descendants this way, because `_allItems` can include
           * items that are part of child menus, and using a custom way of registering items is unreliable
           * when it comes to maintaining the item order.
           */

        }, {
          key: "_updateDirectDescendants",
          value: function _updateDirectDescendants() {
            var _this35 = this;

            this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(function (items) {
              _this35._directDescendantItems.reset(items.filter(function (item) {
                return item._parentMenu === _this35;
              }));

              _this35._directDescendantItems.notifyOnChanges();
            });
          }
        }]);

        return _MatMenuBase;
      }();

      _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
        return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      _MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _MatMenuBase,
        contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        viewQuery: function _MatMenuBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          backdropClass: "backdropClass",
          xPosition: "xPosition",
          yPosition: "yPosition",
          overlapTrigger: "overlapTrigger",
          hasBackdrop: "hasBackdrop",
          panelClass: ["class", "panelClass"],
          classList: "classList",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
        },
        outputs: {
          closed: "closed",
          close: "close"
        }
      });

      _MatMenuBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatMenuBase.propDecorators = {
        _allItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: true
          }]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-describedby']
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: false
          }]
        }],
        lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MAT_MENU_CONTENT]
        }],
        overlapTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['class']
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['class']
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-describedby']
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: false
            }]
          }],
          lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MAT_MENU_CONTENT]
          }]
        });
      })();
      /** @docs-public MatMenu */


      var MatMenu = /*#__PURE__*/function (_MatMenuBase2) {
        _inherits(MatMenu, _MatMenuBase2);

        var _super2 = _createSuper(MatMenu);

        function MatMenu(elementRef, ngZone, defaultOptions) {
          _classCallCheck(this, MatMenu);

          return _super2.call(this, elementRef, ngZone, defaultOptions);
        }

        return _createClass(MatMenu);
      }(_MatMenuBase);

      MatMenu.ɵfac = function MatMenu_Factory(t) {
        return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatMenu,
        selectors: [["mat-menu"]],
        hostVars: 3,
        hostBindings: function MatMenu_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          }
        },
        exportAs: ["matMenu"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_PANEL,
          useExisting: MatMenu
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
        template: function MatMenu_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
        },
        changeDetection: 0
      });

      MatMenu.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-menu',
            template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matMenu',
            host: {
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[attr.aria-describedby]': 'null'
            },
            animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
            providers: [{
              provide: MAT_MENU_PANEL,
              useExisting: MatMenu
            }],
            styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
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

      /** Injection token that determines the scroll handling while the menu is open. */


      var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
      /** @docs-private */

      function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_MENU_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
        useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
      };
      /** Default top padding of the menu panel. */

      var MENU_PANEL_TOP_PADDING = 8;
      /** Options for binding a passive event listener. */

      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
        passive: true
      }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

      /** Directive applied to an element that should trigger a `mat-menu`. */

      var MatMenuTrigger = /*#__PURE__*/function () {
        function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
        // tslint:disable-next-line: lightweight-tokens
        _menuItemInstance, _dir, // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
        // @breaking-change 8.0.0
        _focusMonitor) {
          var _this36 = this;

          _classCallCheck(this, MatMenuTrigger);

          this._overlay = _overlay;
          this._element = _element;
          this._viewContainerRef = _viewContainerRef;
          this._menuItemInstance = _menuItemInstance;
          this._dir = _dir;
          this._focusMonitor = _focusMonitor;
          this._overlayRef = null;
          this._menuOpen = false;
          this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Handles touch start events on the trigger.
           * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
           */

          this._handleTouchStart = function (event) {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeTouchstartFromScreenReader"])(event)) {
              _this36._openedBy = 'touch';
            }
          }; // Tracking input type is necessary so it's possible to only auto-focus
          // the first item of the list when the menu is opened via the keyboard


          this._openedBy = undefined;
          /**
           * Whether focus should be restored when the menu is closed.
           * Note that disabling this option can have accessibility implications
           * and it's up to you to manage focus, if you decide to turn it off.
           */

          this.restoreFocus = true;
          /** Event emitted when the associated menu is opened. */

          this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is opened.
           * @deprecated Switch to `menuOpened` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuOpen = this.menuOpened;
          /** Event emitted when the associated menu is closed. */

          this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is closed.
           * @deprecated Switch to `menuClosed` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuClose = this.menuClosed;
          this._scrollStrategy = scrollStrategy;
          this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : undefined;

          _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
          }
        }
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */


        _createClass(MatMenuTrigger, [{
          key: "_deprecatedMatMenuTriggerFor",
          get: function get() {
            return this.menu;
          },
          set: function set(v) {
            this.menu = v;
          }
          /** References the menu instance that the trigger is associated with. */

        }, {
          key: "menu",
          get: function get() {
            return this._menu;
          },
          set: function set(menu) {
            var _this37 = this;

            if (menu === this._menu) {
              return;
            }

            this._menu = menu;

            this._menuCloseSubscription.unsubscribe();

            if (menu) {
              if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuRecursiveError();
              }

              this._menuCloseSubscription = menu.close.subscribe(function (reason) {
                _this37._destroyMenu(reason); // If a click closed the menu, we should close the entire chain of nested menus.


                if ((reason === 'click' || reason === 'tab') && _this37._parentMaterialMenu) {
                  _this37._parentMaterialMenu.closed.emit(reason);
                }
              });
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._checkMenu();

            this._handleHover();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._overlayRef = null;
            }

            this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

            this._menuCloseSubscription.unsubscribe();

            this._closingActionsSubscription.unsubscribe();

            this._hoverSubscription.unsubscribe();
          }
          /** Whether the menu is open. */

        }, {
          key: "menuOpen",
          get: function get() {
            return this._menuOpen;
          }
          /** The text direction of the containing app. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Whether the menu triggers a sub-menu or a top-level one. */

        }, {
          key: "triggersSubmenu",
          value: function triggersSubmenu() {
            return !!(this._menuItemInstance && this._parentMaterialMenu);
          }
          /** Toggles the menu between the open and closed states. */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            return this._menuOpen ? this.closeMenu() : this.openMenu();
          }
          /** Opens the menu. */

        }, {
          key: "openMenu",
          value: function openMenu() {
            var _this38 = this;

            if (this._menuOpen) {
              return;
            }

            this._checkMenu();

            var overlayRef = this._createOverlay();

            var overlayConfig = overlayRef.getConfig();

            this._setPosition(overlayConfig.positionStrategy);

            overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
            overlayRef.attach(this._getPortal());

            if (this.menu.lazyContent) {
              this.menu.lazyContent.attach(this.menuData);
            }

            this._closingActionsSubscription = this._menuClosingActions().subscribe(function () {
              return _this38.closeMenu();
            });

            this._initMenu();

            if (this.menu instanceof _MatMenuBase) {
              this.menu._startAnimation();
            }
          }
          /** Closes the menu. */

        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close.emit();
          }
          /**
           * Focuses the menu trigger.
           * @param origin Source of the menu trigger's focus.
           */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (this._focusMonitor && origin) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
          /** Closes the menu and does the necessary cleanup. */

        }, {
          key: "_destroyMenu",
          value: function _destroyMenu(reason) {
            var _this39 = this;

            if (!this._overlayRef || !this.menuOpen) {
              return;
            }

            var menu = this.menu;

            this._closingActionsSubscription.unsubscribe();

            this._overlayRef.detach(); // Always restore focus if the user is navigating using the keyboard or the menu was opened
            // programmatically. We don't restore for non-root triggers, because it can prevent focus
            // from making it back to the root trigger when closing a long chain of menus by clicking
            // on the backdrop.


            if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
              this.focus(this._openedBy);
            }

            this._openedBy = undefined;

            if (menu instanceof _MatMenuBase) {
              menu._resetAnimation();

              if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                  return event.toState === 'void';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                  next: function next() {
                    return menu.lazyContent.detach();
                  },
                  // No matter whether the content got re-attached, reset the menu.
                  complete: function complete() {
                    return _this39._setIsMenuOpen(false);
                  }
                });
              } else {
                this._setIsMenuOpen(false);
              }
            } else {
              this._setIsMenuOpen(false);

              if (menu.lazyContent) {
                menu.lazyContent.detach();
              }
            }
          }
          /**
           * This method sets the menu state to open and focuses the first item if
           * the menu was opened via the keyboard.
           */

        }, {
          key: "_initMenu",
          value: function _initMenu() {
            this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
            this.menu.direction = this.dir;

            this._setMenuElevation();

            this.menu.focusFirstItem(this._openedBy || 'program');

            this._setIsMenuOpen(true);
          }
          /** Updates the menu elevation based on the amount of parent menus that it has. */

        }, {
          key: "_setMenuElevation",
          value: function _setMenuElevation() {
            if (this.menu.setElevation) {
              var depth = 0;
              var parentMenu = this.menu.parentMenu;

              while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
              }

              this.menu.setElevation(depth);
            }
          } // set state rather than toggle to support triggers sharing a menu

        }, {
          key: "_setIsMenuOpen",
          value: function _setIsMenuOpen(isOpen) {
            this._menuOpen = isOpen;
            this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

            if (this.triggersSubmenu()) {
              this._menuItemInstance._highlighted = isOpen;
            }
          }
          /**
           * This method checks that a valid instance of MatMenu has been passed into
           * matMenuTriggerFor. If not, an exception is thrown.
           */

        }, {
          key: "_checkMenu",
          value: function _checkMenu() {
            if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuMissingError();
            }
          }
          /**
           * This method creates the overlay from the provided menu's template and saves its
           * OverlayRef so that it can be attached to the DOM when openMenu is called.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            if (!this._overlayRef) {
              var config = this._getOverlayConfig();

              this._subscribeToPositions(config.positionStrategy);

              this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
              // Ideally we'd also have our keyboard event logic in here, however doing so will
              // break anybody that may have implemented the `MatMenuPanel` themselves.

              this._overlayRef.keydownEvents().subscribe();
            }

            return this._overlayRef;
          }
          /**
           * This method builds the configuration object needed to create the overlay, the OverlayState.
           * @returns OverlayConfig
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
              positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
              backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
              panelClass: this.menu.overlayPanelClass,
              scrollStrategy: this._scrollStrategy(),
              direction: this._dir
            });
          }
          /**
           * Listens to changes in the position of the overlay and sets the correct classes
           * on the menu based on the new position. This ensures the animation origin is always
           * correct, even if a fallback position is used for the overlay.
           */

        }, {
          key: "_subscribeToPositions",
          value: function _subscribeToPositions(position) {
            var _this40 = this;

            if (this.menu.setPositionClasses) {
              position.positionChanges.subscribe(function (change) {
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

                _this40.menu.setPositionClasses(posX, posY);
              });
            }
          }
          /**
           * Sets the appropriate positions on a position strategy
           * so the overlay connects with the trigger correctly.
           * @param positionStrategy Strategy whose position to update.
           */

        }, {
          key: "_setPosition",
          value: function _setPosition(positionStrategy) {
            var _ref7 = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
                _ref8 = _slicedToArray(_ref7, 2),
                originX = _ref8[0],
                originFallbackX = _ref8[1];

            var _ref9 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
                _ref10 = _slicedToArray(_ref9, 2),
                overlayY = _ref10[0],
                overlayFallbackY = _ref10[1];

            var originY = overlayY,
                originFallbackY = overlayFallbackY;
            var overlayX = originX,
                overlayFallbackX = originFallbackX;
            var offsetY = 0;

            if (this.triggersSubmenu()) {
              // When the menu is a sub-menu, it should always align itself
              // to the edges of the trigger, instead of overlapping it.
              overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
              originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
              offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
            } else if (!this.menu.overlapTrigger) {
              originY = overlayY === 'top' ? 'bottom' : 'top';
              originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            }

            positionStrategy.withPositions([{
              originX: originX,
              originY: originY,
              overlayX: overlayX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originFallbackX,
              originY: originY,
              overlayX: overlayFallbackX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originX,
              originY: originFallbackY,
              overlayX: overlayX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }, {
              originX: originFallbackX,
              originY: originFallbackY,
              overlayX: overlayFallbackX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }]);
          }
          /** Returns a stream that emits whenever an action that should close the menu occurs. */

        }, {
          key: "_menuClosingActions",
          value: function _menuClosingActions() {
            var _this41 = this;

            var backdrop = this._overlayRef.backdropClick();

            var detachments = this._overlayRef.detachments();

            var parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            var hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active !== _this41._menuItemInstance;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this41._menuOpen;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
          }
          /** Handles mouse presses on the trigger. */

        }, {
          key: "_handleMousedown",
          value: function _handleMousedown(event) {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
              // Since right or middle button clicks won't trigger the `click` event,
              // we shouldn't consider the menu as opened by mouse in those cases.
              this._openedBy = event.button === 0 ? 'mouse' : undefined; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
              // we should prevent focus from moving onto it via click to avoid the
              // highlight from lingering on the menu item.

              if (this.triggersSubmenu()) {
                event.preventDefault();
              }
            }
          }
          /** Handles key presses on the trigger. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode; // Pressing enter on the trigger will trigger the click handler later.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["SPACE"]) {
              this._openedBy = 'keyboard';
            }

            if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
              this._openedBy = 'keyboard';
              this.openMenu();
            }
          }
          /** Handles click events on the trigger. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.triggersSubmenu()) {
              // Stop event propagation to avoid closing the parent menu.
              event.stopPropagation();
              this.openMenu();
            } else {
              this.toggleMenu();
            }
          }
          /** Handles the cases where the user hovers over the trigger. */

        }, {
          key: "_handleHover",
          value: function _handleHover() {
            var _this42 = this;

            // Subscribe to changes in the hovered item in order to toggle the panel.
            if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
              return;
            }

            this._hoverSubscription = this._parentMaterialMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active === _this42._menuItemInstance && !active.disabled;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(function () {
              _this42._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
              // while the new trigger tries to re-open it. Wait for the animation to finish
              // before doing so. Also interrupt if the user moves to another item.

              if (_this42.menu instanceof _MatMenuBase && _this42.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this42.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this42._parentMaterialMenu._hovered())).subscribe(function () {
                  return _this42.openMenu();
                });
              } else {
                _this42.openMenu();
              }
            });
          }
          /** Gets the portal that should be attached to the overlay. */

        }, {
          key: "_getPortal",
          value: function _getPortal() {
            // Note that we can avoid this check by keeping the portal on the menu panel.
            // While it would be cleaner, we'd have to introduce another required method on
            // `MatMenuPanel`, making it harder to consume.
            if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
            }

            return this._portal;
          }
        }]);

        return MatMenuTrigger;
      }();

      MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
        return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
      };

      MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuTrigger,
        selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
        hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
        hostVars: 2,
        hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
              return ctx._handleMousedown($event);
            })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
          }
        },
        inputs: {
          restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
          _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
          menu: ["matMenuTriggerFor", "menu"],
          menuData: ["matMenuTriggerData", "menuData"]
        },
        outputs: {
          menuOpened: "menuOpened",
          onMenuOpen: "onMenuOpen",
          menuClosed: "menuClosed",
          onMenuClose: "onMenuClose"
        },
        exportAs: ["matMenuTrigger"]
      });

      MatMenuTrigger.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_SCROLL_STRATEGY]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatMenuItem,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      };

      MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-menu-trigger-for']
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerFor']
        }],
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerData']
        }],
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerRestoreFocus']
        }],
        menuOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        menuClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
            host: {
              'class': 'mat-menu-trigger',
              'aria-haspopup': 'true',
              '[attr.aria-expanded]': 'menuOpen || null',
              '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
              '(mousedown)': '_handleMousedown($event)',
              '(keydown)': '_handleKeydown($event)',
              '(click)': '_handleClick($event)'
            },
            exportAs: 'matMenuTrigger'
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_SCROLL_STRATEGY]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_PANEL]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: MatMenuItem,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }];
        }, {
          restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerRestoreFocus']
          }],
          menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['mat-menu-trigger-for']
          }],
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerFor']
          }],
          menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerData']
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

      /**
       * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
       * to declare the menu-related directives.
       */


      var _MatMenuDirectivesModule = /*#__PURE__*/_createClass(function _MatMenuDirectivesModule() {
        _classCallCheck(this, _MatMenuDirectivesModule);
      });

      _MatMenuDirectivesModule.ɵfac = function _MatMenuDirectivesModule_Factory(t) {
        return new (t || _MatMenuDirectivesModule)();
      };

      _MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _MatMenuDirectivesModule
      });
      _MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
          declarations: function declarations() {
            return [MatMenuTrigger, MatMenuContent];
          },
          exports: function exports() {
            return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
            declarations: [MatMenuTrigger, MatMenuContent],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();

      var MatMenuModule = /*#__PURE__*/_createClass(function MatMenuModule() {
        _classCallCheck(this, MatMenuModule);
      });

      MatMenuModule.ɵfac = function MatMenuModule_Factory(t) {
        return new (t || MatMenuModule)();
      };

      MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatMenuModule
      });
      MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
          declarations: function declarations() {
            return [MatMenu, MatMenuItem];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule],
            declarations: [MatMenu, MatMenuItem],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=menu.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~dashboard-dashboard-module~doctor-doctor-module-es5.js.map