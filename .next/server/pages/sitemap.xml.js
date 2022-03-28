"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sitemap.xml";
exports.ids = ["pages/sitemap.xml"];
exports.modules = {

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globby */ \"globby\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_0__]);\nglobby__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Sitemap = ()=>{};\nconst getServerSideProps = ({ res  })=>{\n    const baseUrl = \"https://ieeenu.com\";\n    //  {\n    //   development: \"http://localhost:3000\",\n    //   production: \"https://dev.ieeenu.com\",\n    // }[process.env.NODE_ENV];\n    let staticPages = (0,globby__WEBPACK_IMPORTED_MODULE_0__.globbySync)(\"pages\", {\n        expandDirectories: {\n            extensions: [\n                \"js\"\n            ]\n        }\n    });\n    console.log(\"pages\", staticPages);\n    staticPages = staticPages.filter((staticPage)=>{\n        let valid = true;\n        [\n            \"_app\",\n            \"_document\",\n            \"sitemap\",\n            \"404\",\n            \"api\",\n            \"forms\"\n        ].forEach((key)=>{\n            if (staticPage.includes(key)) {\n                valid = false;\n            }\n        });\n        return valid;\n    }).map((staticPagePath)=>{\n        if (staticPagePath == \"index.js\") {\n            return `${baseUrl}/`;\n        } else {\n            return `${baseUrl}/${path__WEBPACK_IMPORTED_MODULE_1___default().basename(staticPagePath.split(\".\")[0])}`;\n        }\n    });\n    const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n      ${staticPages.map((url)=>{\n        return `\n            <url>\n              <loc>${url}</loc>\n              <lastmod>${new Date().toISOString()}</lastmod>\n              <changefreq>weekely</changefreq>\n              <priority>1.0</priority>\n            </url>\n          `;\n    }).join(\"\")}\n    </urlset>\n  `;\n    res.setHeader(\"Content-Type\", \"text/xml\");\n    res.write(sitemap);\n    res.end();\n    return {\n        props: {}\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaXRlbWFwLnhtbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtQztBQUNaO0FBRXZCLEtBQUssQ0FBQ0UsT0FBTyxPQUFTLENBQUMsQ0FBQztBQUVqQixLQUFLLENBQUNDLGtCQUFrQixJQUFJLENBQUMsQ0FBQ0MsR0FBRyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzlDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQW9CO0lBQ3BDLEVBQUs7SUFDTCxFQUEwQztJQUMxQyxFQUEwQztJQUMxQyxFQUEyQjtJQUUzQixHQUFHLENBQUNDLFdBQVcsR0FBR04sa0RBQVUsQ0FBQyxDQUFPLFFBQUUsQ0FBQztRQUNyQ08saUJBQWlCLEVBQUUsQ0FBQztZQUNsQkMsVUFBVSxFQUFFLENBQUM7Z0JBQUEsQ0FBSTtZQUFBLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFSixXQUFXO0lBQ2hDQSxXQUFXLEdBQUdBLFdBQVcsQ0FDdEJLLE1BQU0sRUFBRUMsVUFBVSxHQUFLLENBQUM7UUFDdkIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsSUFBSTtRQUNoQixDQUFDO1lBQUEsQ0FBTTtZQUFFLENBQVc7WUFBRSxDQUFTO1lBQUUsQ0FBSztZQUFFLENBQUs7WUFBRSxDQUFPO1FBQUEsQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1lBQ3hFLEVBQUUsRUFBRUgsVUFBVSxDQUFDSSxRQUFRLENBQUNELEdBQUcsR0FBRyxDQUFDO2dCQUM3QkYsS0FBSyxHQUFHLEtBQUs7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQ0EsS0FBSztJQUNkLENBQUMsRUFDQUksR0FBRyxFQUFFQyxjQUFjLEdBQUssQ0FBQztRQUN4QixFQUFFLEVBQUVBLGNBQWMsSUFBSSxDQUFVLFdBQUUsQ0FBQztZQUNqQyxNQUFNLElBQUliLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsTUFBTSxDQUFDO1lBQ04sTUFBTSxJQUFJQSxPQUFPLENBQUMsQ0FBQyxFQUFFSixvREFBYSxDQUFDaUIsY0FBYyxDQUFDRSxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFFSCxLQUFLLENBQUNDLE9BQU8sSUFBSTs7TUFFYixFQUFFZixXQUFXLENBQ1ZXLEdBQUcsRUFBRUssR0FBRyxHQUFLLENBQUM7UUFDYixNQUFNLEVBQUU7O21CQUVDLEVBQUVBLEdBQUcsQ0FBQzt1QkFDRixFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXLEdBQUc7Ozs7VUFJeEM7SUFDRixDQUFDLEVBQ0FDLElBQUksQ0FBQyxDQUFFLEdBQUU7O0VBRWhCO0lBRUFyQixHQUFHLENBQUNzQixTQUFTLENBQUMsQ0FBYyxlQUFFLENBQVU7SUFDeEN0QixHQUFHLENBQUN1QixLQUFLLENBQUNOLE9BQU87SUFDakJqQixHQUFHLENBQUN3QixHQUFHO0lBRVAsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUzQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZWVlbnUvLi9wYWdlcy9zaXRlbWFwLnhtbC5qcz9kNjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdsb2JieVN5bmMgfSBmcm9tIFwiZ2xvYmJ5XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBTaXRlbWFwID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAoeyByZXMgfSkgPT4ge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2llZWVudS5jb21cIjtcbiAgLy8gIHtcbiAgLy8gICBkZXZlbG9wbWVudDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgLy8gICBwcm9kdWN0aW9uOiBcImh0dHBzOi8vZGV2LmllZWVudS5jb21cIixcbiAgLy8gfVtwcm9jZXNzLmVudi5OT0RFX0VOVl07XG5cbiAgbGV0IHN0YXRpY1BhZ2VzID0gZ2xvYmJ5U3luYyhcInBhZ2VzXCIsIHtcbiAgICBleHBhbmREaXJlY3Rvcmllczoge1xuICAgICAgZXh0ZW5zaW9uczogW1wianNcIl0sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwicGFnZXNcIiwgc3RhdGljUGFnZXMpO1xuICBzdGF0aWNQYWdlcyA9IHN0YXRpY1BhZ2VzXG4gICAgLmZpbHRlcigoc3RhdGljUGFnZSkgPT4ge1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgIFtcIl9hcHBcIiwgXCJfZG9jdW1lbnRcIiwgXCJzaXRlbWFwXCIsIFwiNDA0XCIsIFwiYXBpXCIsIFwiZm9ybXNcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChzdGF0aWNQYWdlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9KVxuICAgIC5tYXAoKHN0YXRpY1BhZ2VQYXRoKSA9PiB7XG4gICAgICBpZiAoc3RhdGljUGFnZVBhdGggPT0gXCJpbmRleC5qc1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtiYXNlVXJsfS9gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9LyR7cGF0aC5iYXNlbmFtZShzdGF0aWNQYWdlUGF0aC5zcGxpdChcIi5cIilbMF0pfWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3Qgc2l0ZW1hcCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICA8dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxuICAgICAgJHtzdGF0aWNQYWdlc1xuICAgICAgICAubWFwKCh1cmwpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPHVybD5cbiAgICAgICAgICAgICAgPGxvYz4ke3VybH08L2xvYz5cbiAgICAgICAgICAgICAgPGxhc3Rtb2Q+JHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9PC9sYXN0bW9kPlxuICAgICAgICAgICAgICA8Y2hhbmdlZnJlcT53ZWVrZWx5PC9jaGFuZ2VmcmVxPlxuICAgICAgICAgICAgICA8cHJpb3JpdHk+MS4wPC9wcmlvcml0eT5cbiAgICAgICAgICAgIDwvdXJsPlxuICAgICAgICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpfVxuICAgIDwvdXJsc2V0PlxuICBgO1xuXG4gIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3htbFwiKTtcbiAgcmVzLndyaXRlKHNpdGVtYXApO1xuICByZXMuZW5kKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge30sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRlbWFwO1xuIl0sIm5hbWVzIjpbImdsb2JieVN5bmMiLCJwYXRoIiwiU2l0ZW1hcCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImJhc2VVcmwiLCJzdGF0aWNQYWdlcyIsImV4cGFuZERpcmVjdG9yaWVzIiwiZXh0ZW5zaW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJzdGF0aWNQYWdlIiwidmFsaWQiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJtYXAiLCJzdGF0aWNQYWdlUGF0aCIsImJhc2VuYW1lIiwic3BsaXQiLCJzaXRlbWFwIiwidXJsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiam9pbiIsInNldEhlYWRlciIsIndyaXRlIiwiZW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "globby":
/*!*************************!*\
  !*** external "globby" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("globby");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sitemap.xml.js"));
module.exports = __webpack_exports__;

})();