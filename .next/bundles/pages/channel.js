module.exports =
__NEXT_REGISTER_PAGE('/channel', function() {
          var comp =
      webpackJsonp([5],{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slugify__);

function slug(name) {
  return __WEBPACK_IMPORTED_MODULE_0_slugify___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/slugify/index.js":
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
    define(factory)
  }
  else {
    root[name] = factory()
  }
}('slugify', this, function () {
  /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')
      // remove trailing separator
      .replace('#{replacement}$', '')

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/index.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/channel.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=channel.js.map