webpackHotUpdate(4,{

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
        className: "jsx-1784662560"
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
        className: "jsx-1784662560"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1784662560"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("html", {
        lang: "es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1784662560"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1784662560"
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
        className: "jsx-1784662560"
      }, "Potcast"))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1784662560"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {
          float: "left",
          paddingLeft: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1784662560"
      }, "Create by Jefferson Alvarez"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {
          float: "right",
          paddingRight: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1784662560"
      }, "Trabaja en ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://www.btaapps.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1784662560"
      }, "Btaapps"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1559311116",
        css: "header.jsx-1784662560{color:#fff;background:#8756ca;padding:15px;text-align:center;}header.jsx-1784662560 a.jsx-1784662560{color:#fff;-webkit-text-decoration:none;text-decoration:none;}h3.jsx-1784662560{font-size:.9em;font-style:italic;}footer.jsx-1784662560{width:100%;height:7vh;color:#fff;background:#8756ca;padding:5px;text-align:center;position:fixed;bottom:0;left:0;right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjZCLEFBR21DLEFBTUksQUFJRSxBQUlKLFdBYk0sQUFNTSxBQVFaLElBSk8sT0FLVCxRQWRFLEdBVVosQUFLa0IsVUFkRCxTQWVOLFNBZFgsQUFJQSxHQVdpQixrQkFDSCxlQUNOLFNBQ0YsT0FDQyxRQUdQIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcSmVmZmVyc29uXFxuZXh0anNcXHBvdGNhc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKVxyXG4gIH1cclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbix0aXRsZX09dGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT5Qb3RjYXN0PC9hPjwvTGluaz48L2hlYWRlcj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2Zsb2F0OlwibGVmdFwiLHBhZGRpbmdMZWZ0OjUwfX0+Q3JlYXRlIGJ5IEplZmZlcnNvbiBBbHZhcmV6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7ZmxvYXQ6XCJyaWdodFwiLHBhZGRpbmdSaWdodDo1MH19PlRyYWJhamEgZW4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJ0YWFwcHMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPkJ0YWFwcHM8L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojODc1NmNhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo3dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Izg3NTZjYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5ZDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xyXG4gICAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXHJcbiAgICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components\\Layout.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "984105957",
        css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:50px;height:50px;box-sizing:border-box;border:solid 3px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner 0%{-webkit-transform:rotate(0deg);}@-webkit-keyframes nprogress-spinner 100%{-webkit-transform:rotate(360deg);}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG1DLEFBR3lDLEFBSUosQUFhRixBQWVBLEFBUUgsQUFjSyxBQU1FLEFBSW1CLEFBQ0UsQUFHVixBQUNFLFdBNUJuQixHQXZCTSxBQWVILEVBM0JBLEFBaURHLEVBTXBCLEVBNURBLEdBeUN3QixNQVJULEVBM0JBLEFBeUR5QixDQTdDNUIsQ0E4QzhCLENBVDFDLFFBcENjLEFBZUgsRUEzQkgsQ0FvQ3VCLEtBbkN0QixDQTJCSSxHQWZDLEdBVkQsS0EwQmIsSUFmeUMsRUFWNUIsTUFpQ1csS0FoQ3hCLEVBdURnQyxNQUNFLFNBdkJULFFBdkJYLFlBRXdDLEdBc0JsQyxrQkFFd0MsOEJBdkJOLDRCQXdCTSxtQkF2Qk4seUZBd0J0RCxvREF2QkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IHtcclxuICAgIE5Qcm9ncmVzcy5zdGFydCgpXHJcbiAgfVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLHRpdGxlfT10aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICAgPGhlYWRlcj48TGluayBocmVmPVwiL1wiPjxhPlBvdGNhc3Q8L2E+PC9MaW5rPjwvaGVhZGVyPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7ZmxvYXQ6XCJsZWZ0XCIscGFkZGluZ0xlZnQ6NTB9fT5DcmVhdGUgYnkgSmVmZmVyc29uIEFsdmFyZXo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tmbG9hdDpcInJpZ2h0XCIscGFkZGluZ1JpZ2h0OjUwfX0+VHJhYmFqYSBlbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYnRhYXBwcy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+QnRhYXBwczwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2AgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM4NzU2Y2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojd2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojODc1NmNhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAjbnByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXHJcbiAgICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cclxuICAgICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcclxuICAgICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ })

})
//# sourceMappingURL=4.50f950a72ffbd53f3acd.hot-update.js.map