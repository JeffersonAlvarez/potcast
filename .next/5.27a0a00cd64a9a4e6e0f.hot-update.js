webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=5.27a0a00cd64a9a4e6e0f.hot-update.js.map