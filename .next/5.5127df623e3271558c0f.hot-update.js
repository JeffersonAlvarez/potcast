webpackHotUpdate(5,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__) {

"use strict";


/***/ }),

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/nprogress/nprogress.js":
false,

/***/ "./pages/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\pages\\_error.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout___default.a, {
        title: "Oh no :(",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, statusCode === 404 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-1958346734" + " " + "message"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1958346734"
      }, "Esta p\xE1gina no existe :("), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1958346734"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1958346734"
      }, "Volver a la home")))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1958346734" + " " + "message"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1958346734"
      }, "Hubo un problema :("), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1958346734"
      }, "Intenta nuevamente en unos segundos")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3189700229",
        css: ".message.jsx-1958346734{padding:100px 30px;text-align:center;}h1.jsx-1958346734{margin-bottom:2em;}a.jsx-1958346734{color:#8756ca;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJxQixBQUdnQyxBQUtELEFBR0osY0FDTSxJQUh0QixDQUxvQixrQkFFcEIsMkJBT2dCLGVBQ0MsZ0JBQ2pCIiwiZmlsZSI6InBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiRjpcXEplZmZlcnNvblxcbmV4dGpzXFxwb3RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcclxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIk9oIG5vIDooXCI+XHJcbiAgICAgICAgeyBzdGF0dXNDb2RlID09PSA0MDQgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxoMT5Fc3RhIHDDoWdpbmEgbm8gZXhpc3RlIDooPC9oMT5cclxuICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9cIj48YT5Wb2x2ZXIgYSBsYSBob21lPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8aDE+SHVibyB1biBwcm9ibGVtYSA6KDwvaDE+XHJcbiAgICAgICAgICAgIDxwPkludGVudGEgbnVldmFtZW50ZSBlbiB1bm9zIHNlZ3VuZG9zPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\_error.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1339874434",
        css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QixBQUcwQixTQUNaIiwiZmlsZSI6InBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiRjpcXEplZmZlcnNvblxcbmV4dGpzXFxwb3RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcclxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIk9oIG5vIDooXCI+XHJcbiAgICAgICAgeyBzdGF0dXNDb2RlID09PSA0MDQgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxoMT5Fc3RhIHDDoWdpbmEgbm8gZXhpc3RlIDooPC9oMT5cclxuICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9cIj48YT5Wb2x2ZXIgYSBsYSBob21lPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8aDE+SHVibyB1biBwcm9ibGVtYSA6KDwvaDE+XHJcbiAgICAgICAgICAgIDxwPkludGVudGEgbnVldmFtZW50ZSBlbiB1bm9zIHNlZ3VuZG9zPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\_error.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_error")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__("./pages/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ListaPodcast__ = __webpack_require__("./components/ListaPodcast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ListaSeries__ = __webpack_require__("./components/ListaSeries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PodcatsPlayer__ = __webpack_require__("./components/PodcatsPlayer.js");

var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\pages\\channel.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Channel =
/*#__PURE__*/
function (_Component) {
  _inherits(Channel, _Component);

  function Channel() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Channel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Channel.__proto__ || Object.getPrototypeOf(Channel)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        openPodcats: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "openPodcats", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, podcast) {
        event.preventDefault();

        _this.setState({
          openPodcats: podcast
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          openPodcats: null
        });
      }
    }), _temp));
  }

  _createClass(Channel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          channel = _props.channel,
          audioClips = _props.audioClips,
          series = _props.series,
          statusCode = _props.statusCode;
      var openPodcats = this.state.openPodcats;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__error__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout___default.a, {
        title: channel.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-4121484148"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-4121484148"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-4121484148"
      })), openPodcats && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-4121484148" + " " + "modal"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_PodcatsPlayer__["a" /* default */], {
        clip: openPodcats,
        onClose: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-4121484148"
      }, "Series"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-4121484148" + " " + "channels"
      }, series.map(function (serie) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ListaSeries__["a" /* default */], {
          serie: serie,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-4121484148"
      }, "Ultimos Potcast"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-4121484148" + " " + "channels"
      }, audioClips.map(function (clip) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ListaPodcast__["a" /* default */], {
          clip: clip,
          onPress: _this2.openPodcats,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1510600455",
        css: ".channel.jsx-4121484148{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);}.channels.jsx-4121484148{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));text-align:center;}.podcast.jsx-4121484148 img.jsx-4121484148{width:100%;}h2.jsx-4121484148{font-size:1.5em;text-align:center;}a.jsx-4121484148{-webkit-text-decoration:none;text-decoration:none;text-align:center;}picture.jsx-4121484148 div.jsx-4121484148{text-align:center;width:350px;height:350px !important;margin:4px auto;}.modal.jsx-4121484148{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGZ0MsQUFHc0MsQUFNRCxBQU9GLEFBR0ssQUFLSyxBQUtKLEFBT0YsV0FuQmxCLEVBUGlCLENBTkksQ0FpQ1osQ0FqQlcsRUFVSixHQVFOLE1BM0JNLENBNEJMLEVBUmlCLEVBMUJlLEVBaUIzQyxFQWtCWSxJQTVCbUQsS0E2QmpDLEtBaEJULElBT0EsY0FOckIsRUFRQSxFQTNCQSxBQW1DZ0IsYUFDaEIsYUE5QnFCLGtCQUNyQiIsImZpbGUiOiJwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcSmVmZmVyc29uXFxuZXh0anNcXHBvdGNhc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExpc3RhUG9kY2FzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RhUG9kY2FzdCc7XHJcbmltcG9ydCBMaXN0YVNlcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RhU2VyaWVzJztcclxuaW1wb3J0IFBvZGNhdHNQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXRzUGxheWVyJztcclxuY2xhc3MgQ2hhbm5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBvcGVuUG9kY2F0czogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Qb2RjYXRzID0gKGV2ZW50LCBwb2RjYXN0KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvcGVuUG9kY2F0czogcG9kY2FzdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZT0oZXZlbnQpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXRzOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHsgICBcclxuICAgICAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgW3JlcUNoYW5uZWwsIHJlcUF1ZGlvLCByZXFTZXJpZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKSxcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXHJcblxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcUNoYW5uZWwuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVjaGFubmVsOiBudWxsLCByZXFBdWRpbzogbnVsbCwgcmVxU2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiByZXFDaGFubmVsLnN0YXR1cyB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxyXG4gICAgICAgICAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdEF1ZGlvID0gYXdhaXQgcmVxQXVkaW8uanNvbigpXHJcbiAgICAgICAgICAgIGxldCBhdWRpb0NsaXBzID0gZGF0QXVkaW8uYm9keS5hdWRpb19jbGlwc1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdFNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcclxuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGRhdFNlcmllcy5ib2R5LmNoYW5uZWxzXHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgb3BlblBvZGNhdHMgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9e2NoYW5uZWwudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlblBvZGNhdHMgJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2RjYXRzUGxheWVyIGNsaXA9e29wZW5Qb2RjYXRzfSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJpZXMubWFwKChzZXJpZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhU2VyaWVzIHNlcmllPXtzZXJpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlVsdGltb3MgUG90Y2FzdDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXVkaW9DbGlwcy5tYXAoKGNsaXApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YVBvZGNhc3QgY2xpcD17Y2xpcH0gb25QcmVzcz17dGhpcy5vcGVuUG9kY2F0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YCAgICBcclxuICAgICAgICAgICAgICAgIC5jaGFubmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb2RjYXN0IGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggYXV0byA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDo5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5uZWw7Il19 */\n/*@ sourceURL=pages\\channel.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3357394458",
        css: "body{margin:0 auto;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJeUIsQUFHMEMsY0FDUSxzQkFDekIiLCJmaWxlIjoicGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiRjpcXEplZmZlcnNvblxcbmV4dGpzXFxwb3RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBMaXN0YVBvZGNhc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0YVBvZGNhc3QnO1xyXG5pbXBvcnQgTGlzdGFTZXJpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0YVNlcmllcyc7XHJcbmltcG9ydCBQb2RjYXRzUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2F0c1BsYXllcic7XHJcbmNsYXNzIENoYW5uZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgb3BlblBvZGNhdHM6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9kY2F0cyA9IChldmVudCwgcG9kY2FzdCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgb3BlblBvZGNhdHM6IHBvZGNhc3RcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2U9KGV2ZW50KT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvcGVuUG9kY2F0czogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnksIHJlcyB9KSB7ICAgXHJcbiAgICAgICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IFtyZXFDaGFubmVsLCByZXFBdWRpbywgcmVxU2VyaWVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxyXG5cclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXFDaGFubmVsLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJlY2hhbm5lbDogbnVsbCwgcmVxQXVkaW86IG51bGwsIHJlcVNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogcmVxQ2hhbm5lbC5zdGF0dXMgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcclxuICAgICAgICAgICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRBdWRpbyA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKVxyXG4gICAgICAgICAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdEF1ZGlvLmJvZHkuYXVkaW9fY2xpcHNcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXHJcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBkYXRTZXJpZXMuYm9keS5jaGFubmVsc1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlOiAyMDAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG9wZW5Qb2RjYXRzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPXtjaGFubmVsLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5Qb2RjYXRzICYmIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9kY2F0c1BsYXllciBjbGlwPXtvcGVuUG9kY2F0c30gb25DbG9zZT17dGhpcy5vbkNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YVNlcmllcyBzZXJpZT17c2VyaWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5VbHRpbW9zIFBvdGNhc3Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F1ZGlvQ2xpcHMubWFwKChjbGlwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFQb2RjYXN0IGNsaXA9e2NsaXB9IG9uUHJlc3M9e3RoaXMub3BlblBvZGNhdHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2AgICAgXHJcbiAgICAgICAgICAgICAgICAuY2hhbm5lbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jazsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9kY2FzdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IGF1dG8gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsOyJdfQ== */\n/*@ sourceURL=pages\\channel.js */"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var query, res, idChannel, _ref3, _ref4, reqChannel, reqAudio, reqSeries, dataChannel, channel, datAudio, audioClips, datSeries, series;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref2.query, res = _ref2.res;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"))]);

              case 5:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 3);
                reqChannel = _ref4[0];
                reqAudio = _ref4[1];
                reqSeries = _ref4[2];

                if (!(reqChannel.status >= 400)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = reqChannel.status;
                return _context.abrupt("return", {
                  rechannel: null,
                  reqAudio: null,
                  reqSeries: null,
                  statusCode: reqChannel.status
                });

              case 13:
                _context.next = 15;
                return reqChannel.json();

              case 15:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 19;
                return reqAudio.json();

              case 19:
                datAudio = _context.sent;
                audioClips = datAudio.body.audio_clips;
                _context.next = 23;
                return reqSeries.json();

              case 23:
                datSeries = _context.sent;
                series = datSeries.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  series: series,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", {
                  channel: null,
                  audioClips: null,
                  series: null,
                  statusCode: 503
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Channel;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Channel);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5127df623e3271558c0f.hot-update.js.map