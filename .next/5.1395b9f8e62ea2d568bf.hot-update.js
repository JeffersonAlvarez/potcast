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
    className: "jsx-3502958814" + " " + "podcast"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: clip.urls.image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3502958814"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3502958814"
  }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3502958814" + " " + "meta"
  }, Math.ceil(clip.duration / 60), " minutes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "582594779",
    css: ".podcast.jsx-3502958814 img.jsx-3502958814{width:100%;}a.jsx-3502958814{-webkit-text-decoration:none;text-decoration:none;}.meta.jsx-3502958814{float:left;}h3.jsx-3502958814{font-size:.7em;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhUG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRCLEFBR1UsQUFHVixBQUdJLFdBUmxCLEFBTUEsSUFHZSxZQUNmLHVCQVBBIiwiZmlsZSI6ImNvbXBvbmVudHNcXExpc3RhUG9kY2FzdC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcSmVmZmVyc29uXFxuZXh0anNcXHBvdGNhc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXHJcblxyXG5mdW5jdGlvbiBMaXN0YVBvZGNhc3QocHJvcHMpe1xyXG4gICAgY29uc3Qge2NsaXAsb25QcmVzc309cHJvcHNcclxuICAgIHJldHVybihcclxuICBcclxuICAgICAgXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiIGhyZWY9e2AvJHtzbHVnKGNsaXAuY2hhbm5lbC50aXRsZSl9LiR7Y2xpcC5jaGFubmVsLmlkfS8ke3NsdWcoY2xpcC50aXRsZSl9LiR7Y2xpcC5pZH1gfSBcclxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IG9uUHJlc3MoZXZlbnQsY2xpcCkgfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2NsaXAudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAge01hdGguY2VpbChjbGlwLmR1cmF0aW9uIC8gNjApfSBtaW51dGVzXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2AgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAucG9kY2FzdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgLm1ldGF7XHJcbiAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOi43ZW07XHJcbiAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgIHtgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2EgPlxyXG4gICAgICAgIFxyXG4gICBcclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YVBvZGNhc3Q7Il19 */\n/*@ sourceURL=components\\ListaPodcast.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2227945868",
    css: "body{margin:0 auto;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RhUG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2MsQUFHbUMsY0FDUSxzQkFDekIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGlzdGFQb2RjYXN0LmpzIiwic291cmNlUm9vdCI6IkY6XFxKZWZmZXJzb25cXG5leHRqc1xccG90Y2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcclxuXHJcbmZ1bmN0aW9uIExpc3RhUG9kY2FzdChwcm9wcyl7XHJcbiAgICBjb25zdCB7Y2xpcCxvblByZXNzfT1wcm9wc1xyXG4gICAgcmV0dXJuKFxyXG4gIFxyXG4gICAgICBcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCIgaHJlZj17YC8ke3NsdWcoY2xpcC5jaGFubmVsLnRpdGxlKX0uJHtjbGlwLmNoYW5uZWwuaWR9LyR7c2x1ZyhjbGlwLnRpdGxlKX0uJHtjbGlwLmlkfWB9IFxyXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gb25QcmVzcyhldmVudCxjbGlwKSB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2xpcC51cmxzLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICB7TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXNcclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIC5wb2RjYXN0IGltZ3tcclxuICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAubWV0YXtcclxuICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6LjdlbTtcclxuICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAge2AgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvYSA+XHJcbiAgICAgICAgXHJcbiAgIFxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhUG9kY2FzdDsiXX0= */\n/*@ sourceURL=components\\ListaPodcast.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ListaPodcast);

/***/ })

})
//# sourceMappingURL=5.1395b9f8e62ea2d568bf.hot-update.js.map