webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=5.ea233b703b7869521b43.hot-update.js.map