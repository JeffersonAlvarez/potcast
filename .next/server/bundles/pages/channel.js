module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\components\\Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeStart = function (url) {
  __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1987998187"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1987998187"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1987998187"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("html", {
        lang: "es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1987998187"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1987998187"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1987998187"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {
          fontSize: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1987998187"
      }, "Potcast")))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1987998187"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1987998187"
      }, "  ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1987998187"
      }, "Create by Jefferson Alvarez")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1987998187"
      }, "Trabaja en ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://www.btaapps.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1987998187"
      }, "www.Btaapps.com"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "815076613",
        css: "header.jsx-1987998187{color:#fff;background:#08244b;padding:15px;text-align:center;}header.jsx-1987998187 a.jsx-1987998187{color:#fff;-webkit-text-decoration:none;text-decoration:none;}footer.jsx-1987998187 a.jsx-1987998187{color:#ffbd0d;-webkit-text-decoration:none;text-decoration:none;}h3.jsx-1987998187{font-size:1em;font-style:italic;line-height:.5em;}footer.jsx-1987998187{width:100%;height:9vh;color:#fff;background:#08244b;padding:1px;text-align:center;position:relative;bottom:0;left:0;right:0;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjZCLEFBR21DLEFBTUksQUFJQyxBQUlBLEFBS0gsV0FsQk0sQUFNTSxBQWFaLEdBVFksQUFJTCxRQU1ULFFBbkJFLEVBY00sQ0FNQSxVQW5CRCxNQWNqQixHQU1XLFNBbkJYLEFBSUEsR0FJQSxBQVlpQixrQkFDQSxrQkFDVCxTQUNGLE9BQ0MsUUFFTSxjQUViIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcSmVmZmVyc29uXFxuZXh0anNcXHBvdGNhc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKVxyXG4gIH1cclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbix0aXRsZX09dGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT48aDMgc3R5bGU9e3tmb250U2l6ZToyNX19PlBvdGNhc3Q8L2gzPjwvYT48L0xpbms+PC9oZWFkZXI+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+ICA8aDMgc3R5bGU9e3t9fT5DcmVhdGUgYnkgSmVmZmVyc29uIEFsdmFyZXo8L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7fX0+VHJhYmFqYSBlbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYnRhYXBwcy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+d3d3LkJ0YWFwcHMuY29tPC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzA4MjQ0YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXIgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZiZDBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOml0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDouNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo5dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzA4MjQ0YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbnByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXHJcbiAgICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcclxuICAgICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=components\\Layout.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1280394855",
        css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:8px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:20px;height:20px;box-sizing:border-box;border:solid 3px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner 0%{-webkit-transform:rotate(0deg);}@-webkit-keyframes nprogress-spinner 100%{-webkit-transform:rotate(360deg);}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW1DLEFBTXlDLEFBSUosQUFhRixBQWVBLEFBUUgsQUFjSyxBQU1FLEFBSW1CLEFBQ0UsQUFHVixBQUNFLFdBNUJuQixHQXZCTSxBQWVILEVBM0JBLEFBaURHLEVBTXBCLEVBNURBLEdBeUN3QixNQVJULEVBM0JBLEFBeUR5QixDQTdDNUIsQ0E4QzhCLENBVDFDLFFBcENjLEFBZUgsRUEzQkgsQ0FvQ3VCLEtBbkN0QixDQTJCSSxHQWZDLEdBVkQsS0EwQmIsSUFmeUMsRUFWNUIsTUFpQ1csS0FoQ3hCLEVBdURnQyxNQUNFLFNBdkJULFFBdkJYLFlBRXdDLEdBc0JsQyxrQkFFd0MsOEJBdkJOLDRCQXdCTSxtQkF2Qk4seUZBd0J0RCxvREF2QkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IHtcclxuICAgIE5Qcm9ncmVzcy5zdGFydCgpXHJcbiAgfVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLHRpdGxlfT10aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICAgPGhlYWRlcj48TGluayBocmVmPVwiL1wiPjxhPjxoMyBzdHlsZT17e2ZvbnRTaXplOjI1fX0+UG90Y2FzdDwvaDM+PC9hPjwvTGluaz48L2hlYWRlcj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT4gIDxoMyBzdHlsZT17e319PkNyZWF0ZSBieSBKZWZmZXJzb24gQWx2YXJlejwvaDM+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3t9fT5UcmFiYWphIGVuIDxhIGhyZWY9XCJodHRwczovL3d3dy5idGFhcHBzLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiID53d3cuQnRhYXBwcy5jb208L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDgyNDRiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlciBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmJkMGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0Oi41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojl2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDgyNDRiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOWQ7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAucGVnIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xyXG4gICAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/ListaPodcast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__("./helpers/slug.js");
var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\components\\ListaPodcast.js";





function ListaPodcast(props) {
  var clip = props.clip,
      onPress = props.onPress;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "/".concat(Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(clip.channel.title), ".").concat(clip.channel.id, "/").concat(Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(clip.title), ".").concat(clip.id),
    onClick: function onClick(event) {
      return onPress(event, clip);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-422386254" + " " + "podcast"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: clip.urls.image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-422386254"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-422386254"
  }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-422386254" + " " + "meta"
  }, Math.ceil(clip.duration / 60), " minutes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4128765803",
    css: ".podcast.jsx-422386254 img.jsx-422386254{width:100%;}a.jsx-422386254{-webkit-text-decoration:none;text-decoration:none;}.meta.jsx-422386254{float:left;font-size:.7em;color:black;}h3.jsx-422386254{font-size:.7em;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhUG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRCLEFBR1UsQUFHVixBQUtJLFdBVmxCLEFBTWtCLElBS0gsV0FIaEIsQ0FJQyxXQUpBLFlBTEEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGlzdGFQb2RjYXN0LmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcclxuXHJcbmZ1bmN0aW9uIExpc3RhUG9kY2FzdChwcm9wcyl7XHJcbiAgICBjb25zdCB7Y2xpcCxvblByZXNzfT1wcm9wc1xyXG4gICAgcmV0dXJuKFxyXG4gIFxyXG4gICAgICBcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCIgaHJlZj17YC8ke3NsdWcoY2xpcC5jaGFubmVsLnRpdGxlKX0uJHtjbGlwLmNoYW5uZWwuaWR9LyR7c2x1ZyhjbGlwLnRpdGxlKX0uJHtjbGlwLmlkfWB9IFxyXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gb25QcmVzcyhldmVudCxjbGlwKSB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2xpcC51cmxzLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICB7TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXNcclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIC5wb2RjYXN0IGltZ3tcclxuICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAubWV0YXtcclxuICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrXHJcbiAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICB7YCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9hID5cclxuICAgICAgICBcclxuICAgXHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFQb2RjYXN0OyJdfQ== */\n/*@ sourceURL=components\\ListaPodcast.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2227945868",
    css: "body{margin:0 auto;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhUG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2MsQUFHbUMsY0FDUSxzQkFDekIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGlzdGFQb2RjYXN0LmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcclxuXHJcbmZ1bmN0aW9uIExpc3RhUG9kY2FzdChwcm9wcyl7XHJcbiAgICBjb25zdCB7Y2xpcCxvblByZXNzfT1wcm9wc1xyXG4gICAgcmV0dXJuKFxyXG4gIFxyXG4gICAgICBcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCIgaHJlZj17YC8ke3NsdWcoY2xpcC5jaGFubmVsLnRpdGxlKX0uJHtjbGlwLmNoYW5uZWwuaWR9LyR7c2x1ZyhjbGlwLnRpdGxlKX0uJHtjbGlwLmlkfWB9IFxyXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gb25QcmVzcyhldmVudCxjbGlwKSB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2xpcC51cmxzLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICB7TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXNcclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIC5wb2RjYXN0IGltZ3tcclxuICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAubWV0YXtcclxuICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrXHJcbiAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICB7YCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9hID5cclxuICAgICAgICBcclxuICAgXHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFQb2RjYXN0OyJdfQ== */\n/*@ sourceURL=components\\ListaPodcast.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ListaPodcast);

/***/ }),

/***/ "./components/ListaSeries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\components\\ListaSeries.js";



function ListaSeries(props) {
  var serie = props.serie;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3586441171" + " " + "podcast"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: serie.urls.logo_image.original,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3586441171"
  }), serie.title, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1761865504",
    css: ".podcast.jsx-3586441171 img.jsx-3586441171{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhU2VyaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQixBQUttQyxXQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXExpc3RhU2VyaWVzLmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMaXN0YVNlcmllcyhwcm9wcyl7XHJcbiAgICBjb25zdCB7c2VyaWV9PXByb3BzXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwiXCIgLz5cclxuICAgICAgICB7c2VyaWUudGl0bGV9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucG9kY2FzdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFTZXJpZXM7Il19 */\n/*@ sourceURL=components\\ListaSeries.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3357394458",
    css: "body{margin:0 auto;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhU2VyaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCcUIsQUFHMEMsY0FDUSxzQkFDekIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGlzdGFTZXJpZXMuanMiLCJzb3VyY2VSb290IjoiRjpcXEplZmZlcnNvblxcbmV4dGpzXFxwb3RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIExpc3RhU2VyaWVzKHByb3BzKXtcclxuICAgIGNvbnN0IHtzZXJpZX09cHJvcHNcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj5cclxuICAgICAgICA8aW1nIHNyYz17c2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIHtzZXJpZS50aXRsZX1cclxuICAgICAgICA8c3R5bGUganN4PntgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wb2RjYXN0IGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2AgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YVNlcmllczsiXX0= */\n/*@ sourceURL=components\\ListaSeries.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ListaSeries);

/***/ }),

/***/ "./components/PodcatsPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "F:\\Jefferson\\nextjs\\potcast\\components\\PodcatsPlayer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PodcatsPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(PodcatsPlayer, _Component);

  function PodcatsPlayer() {
    _classCallCheck(this, PodcatsPlayer);

    return _possibleConstructorReturn(this, (PodcatsPlayer.__proto__ || Object.getPrototypeOf(PodcatsPlayer)).apply(this, arguments));
  }

  _createClass(PodcatsPlayer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          clip = _props.clip,
          onClose = _props.onClose;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-1377917013" + " " + "clip"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-1377917013"
      }, onClose ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-1377917013"
      }, "< Volver") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, {
        href: "/channel?id=".concat(clip.channel.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1377917013" + " " + "close"
      }, "< Volver"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1377917013"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1377917013"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1377917013" + " " + "player"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1377917013"
      }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1377917013"
      }, clip.channel.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1377917013"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1377917013"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2335002663",
        css: "header.jsx-1377917013{color:#fff;background:#8756ca;padding:15px;text-align:center;}nav.jsx-1377917013{background:none;}nav.jsx-1377917013 a.jsx-1377917013{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-1377917013{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-1377917013{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-1377917013 div.jsx-1377917013{width:100%;height:150px;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-1377917013{padding:30px;background:rgba(0,0,0,0.8);text-align:center;}h3.jsx-1377917013{margin:0;}h6.jsx-1377917013{margin:0;margin-top:1em;}audio.jsx-1377917013{margin-top:2em;width:100%;}.modal.jsx-1377917013{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhdHNQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQyxBQUdXLEFBTU0sQUFHSyxBQU9SLEFBT0EsQUFVRixBQU9FLEFBS0osQUFHQSxBQUlNLEFBS0EsU0FYZixBQUdlLEVBaERHLEFBaUNMLEVBT2MsRUFZaEIsQUFLTCxDQW5ETixLQUdhLEFBaUROLEdBeEJxQixBQWU1QixFQUlBLEVBTVEsRUExREksSUFTQSxFQWtESCxJQW5CUyxHQXZDRCxFQTJETixDQWxESSxNQXdCUyxJQTJCeEIsRUFwQkEsR0F2Q0EsQUFTcUIsYUFJUixBQU9NLEVBYVMsV0FuQk4saUJBb0J0QixPQXhCQSxzREFLbUIsRUFNSSxpQkFMWCxZQUNaLHNFQUtTLHVDQUNhLDhFQUNYLFdBQ0MsWUFFWiIsImZpbGUiOiJjb21wb25lbnRzXFxQb2RjYXRzUGxheWVyLmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQb2RjYXRzUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNsaXAsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIj5cclxuICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCI+Jmx0OyBWb2x2ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2xpcC51cmxzLmltYWdlIHx8IGNsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9KWAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NsaXAuY2hhbm5lbC50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5oZWFkZXJ7XHJcbmNvbG9yOiNmZmY7XHJcbmJhY2tncm91bmQ6Izg3NTZjYTtcclxucGFkZGluZzoxNXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5uYXYge1xyXG5iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbm5hdiBhIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nOiAxNXB4O1xyXG5jb2xvcjogd2hpdGU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jbGlwIHtcclxuZGlzcGxheTogZmxleDtcclxuaGVpZ2h0OiAxMDB2aDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYmFja2dyb3VuZDogIzg3NTZjYTtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbnBpY3R1cmUge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuZmxleDogMSAxO1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG53aWR0aDogYXV0bztcclxucGFkZGluZzogMTAlOyAgICAgICAgICBcclxuXHJcbn1cclxucGljdHVyZSBkaXYge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxNTBweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5wbGF5ZXIge1xyXG5wYWRkaW5nOiAzMHB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMyB7XHJcbm1hcmdpbjogMDtcclxufVxyXG5oNiB7XHJcbm1hcmdpbjogMDtcclxubWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbmF1ZGlvIHtcclxubWFyZ2luLXRvcDogMmVtO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxucG9zaXRpb246IGZpeGVkO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbnotaW5kZXg6IC0xO1xyXG59XHJcbmB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuYm9keSB7XHJcbm1hcmdpbjogMDtcclxuZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvZGNhdHNQbGF5ZXI7Il19 */\n/*@ sourceURL=components\\PodcatsPlayer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "962534459",
        css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhdHNQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUd1QyxBQUdVLFNBQ2Esc0JBQ0wsaUJBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXFBvZGNhdHNQbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiRjpcXEplZmZlcnNvblxcbmV4dGpzXFxwb3RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBvZGNhdHNQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpcCwgb25DbG9zZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpcFwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7Y2xpcC5jaGFubmVsLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VcIj4mbHQ7IFZvbHZlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbGlwLnVybHMuaW1hZ2UgfHwgY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Y2xpcC5jaGFubmVsLnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbmhlYWRlcntcclxuY29sb3I6I2ZmZjtcclxuYmFja2dyb3VuZDojODc1NmNhO1xyXG5wYWRkaW5nOjE1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbm5hdiB7XHJcbmJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxubmF2IGEge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNsaXAge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5iYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxucGljdHVyZSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5mbGV4OiAxIDE7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbndpZHRoOiBhdXRvO1xyXG5wYWRkaW5nOiAxMCU7ICAgICAgICAgIFxyXG5cclxufVxyXG5waWN0dXJlIGRpdiB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDE1MHB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnBsYXllciB7XHJcbnBhZGRpbmc6IDMwcHg7XHJcbmJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgzIHtcclxubWFyZ2luOiAwO1xyXG59XHJcbmg2IHtcclxubWFyZ2luOiAwO1xyXG5tYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuYXVkaW8ge1xyXG5tYXJnaW4tdG9wOiAyZW07XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxucmlnaHQ6IDA7XHJcbmJvdHRvbTogMDtcclxuei1pbmRleDogLTE7XHJcbn1cclxuYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG5ib2R5IHtcclxubWFyZ2luOiAwO1xyXG5mb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9kY2F0c1BsYXllcjsiXX0= */\n/*@ sourceURL=components\\PodcatsPlayer.js */"
      })));
    }
  }]);

  return PodcatsPlayer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PodcatsPlayer);

/***/ }),

/***/ "./helpers/slug.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slug;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slugify__);

function slug(name) {
  return __WEBPACK_IMPORTED_MODULE_0_slugify___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),

/***/ "./pages/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
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



/***/ }),

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__("./pages/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
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

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
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

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/channel.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "slugify":
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map