/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ 2. v2.0 | 20110126\\n  License: none (public domain)\\n*/\\n\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n}\\n\\n\\n/* HTML5 display-role reset for older browsers */\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/stylesheets/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*** Project Meta ***/\\n\\n/* general - line 13 */\\n\\n/* header - line 39 */\\n\\n/* main content - line 19 */\\n\\n/* footer - line 144 */\\n\\n/** GENERAL **/\\n\\n:root {\\n  --border-bottom: 1px solid rgb(230, 230, 230);\\n  --grey: rgb(246, 246, 246);\\n  --flex: flex;\\n}\\n\\n/* Mobile View */\\n\\n.html {\\n  font-size: 87.5%;\\n  scroll-behavior: smooth;\\n}\\n\\n.body {\\n  position: relative;\\n}\\n\\n.offscreen {\\n  border: 0;\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  padding: 0;\\n  position: absolute;\\n  width: 1px;\\n}\\n\\n/** header **/\\n\\n/* Main Content */\\n\\n.space1 {\\n  border-bottom: var(--border-bottom);\\n  padding: 1rem;\\n  display: var(--flex);\\n  align-items: center;\\n}\\n\\n.space {\\n  border-bottom: var(--border-bottom);\\n  padding: 1rem;\\n  display: var(--flex);\\n  align-items: center;\\n  position: relative;\\n}\\n\\n.form {\\n  display: var(--flex);\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.todoinput {\\n  width: 80%;\\n}\\n\\n.addtodoarrow {\\n  width: 15px;\\n  margin-right: 0.6rem;\\n}\\n\\n.threedots {\\n  width: 1.3rem;\\n  display: block;\\n  position: absolute;\\n  right: 1rem;\\n}\\n\\n.bin {\\n  display: none;\\n  position: absolute;\\n  right: 1rem;\\n  z-index: 100;\\n}\\n\\n.bin:hover {\\n  display: block;\\n  cursor: pointer;\\n}\\n\\n.todo {\\n  background-color: var(--grey);\\n  height: 100vh;\\n  display: var(--flex);\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.todo-list {\\n  background-color: white;\\n  max-width: 500px;\\n  width: 80%;\\n  box-shadow: 0 0 10px rgb(208, 207, 208);\\n}\\n\\n.demo {\\n  font-weight: bold;\\n}\\n\\n.todoinput:focus {\\n  outline: none;\\n  background-color: initial;\\n}\\n\\n.todoinput::placeholder {\\n  font-style: italic;\\n}\\n\\n.input[type=\\\"checkbox\\\"] {\\n  width: 1.1rem;\\n  height: 1.1rem;\\n  border: none;\\n  outline: none;\\n}\\n\\n.list-title {\\n  width: 87%;\\n  margin: 0 0.8rem;\\n}\\n\\n.list-title:focus {\\n  outline: none;\\n\\n  /* background-color: palegoldenrod; */\\n\\n  /* margin: 0 0.8rem; */\\n}\\n\\n.clear {\\n  text-align: center;\\n  padding: 1.1rem;\\n  background-color: var(--grey);\\n}\\n\\n.clear-link {\\n  color: grey;\\n}\\n\\n.clear-link:hover {\\n  text-decoration: underline;\\n  color: black;\\n  cursor: pointer;\\n}\\n\\n.clear-link:visited {\\n  color: initial;\\n}\\n\\n/* Footer */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/stylesheets/reset.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/stylesheets/reset.css?");

/***/ }),

/***/ "./src/assets/stylesheets/style.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/reset.css */ \"./src/assets/stylesheets/reset.css\");\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ \"./src/assets/stylesheets/style.css\");\n/* harmony import */ var _modules_TodoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TodoItems */ \"./src/assets/js/modules/TodoItems.js\");\n/* harmony import */ var _modules_GrabUserInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/GrabUserInput */ \"./src/assets/js/modules/GrabUserInput.js\");\n/* harmony import */ var _modules_DisplayTodos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DisplayTodos */ \"./src/assets/js/modules/DisplayTodos.js\");\n\n\n\n\n\n\n\nlet todos;\nif (localStorage.length !== 0) {\n  const b = JSON.parse(localStorage.getItem('todos'));\n  todos = new _modules_TodoItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"](b);\n} else {\n  todos = new _modules_TodoItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([]);\n  localStorage.setItem('todos', JSON.stringify(todos.todoitems));\n}\n\nconst addtodoarrow = document.querySelector('.addtodoarrow');\naddtodoarrow.addEventListener('click', _modules_GrabUserInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"].grab);\n\nconst deleteAll = document.querySelector('.clear-link');\n\ndeleteAll.onclick = _modules_GrabUserInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearAllCompleted;\n\n_modules_DisplayTodos__WEBPACK_IMPORTED_MODULE_4__[\"default\"].display();\n\n//# sourceURL=webpack://todo-list/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/modules/DisplayTodos.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/DisplayTodos.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoMarkup */ \"./src/assets/js/modules/TodoMarkup.js\");\n/* harmony import */ var _GrabUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrabUserInput */ \"./src/assets/js/modules/GrabUserInput.js\");\n\n\n\nclass DisplayTodos {\n  display = () => {\n    const todoStorage = JSON.parse(localStorage.getItem('todos'));\n    const todoList = document.querySelector('.list-items');\n    let markup = '';\n    todoStorage.forEach((todo) => {\n      const elemenT = (0,_TodoMarkup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo);\n      markup += elemenT;\n    });\n    todoList.innerHTML = markup;\n    const checkboxes = document.querySelectorAll('.input[type=\"checkbox\"]');\n    const inputFocus = document.querySelectorAll('.list-title');\n\n    for (let i = 0; i < todoStorage.length; i += 1) {\n      if (todoStorage[i].completed) {\n        checkboxes[i].checked = true;\n        inputFocus[i].style.textDecoration = 'line-through';\n      }\n    }\n\n    const bins = document.querySelectorAll('.bin');\n\n    for (let i = 0; i < checkboxes.length; i += 1) {\n      checkboxes[i].onchange = _GrabUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].completed;\n    }\n\n    bins.forEach((bin) => {\n      bin.onclick = _GrabUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove;\n    });\n\n    for (let i = 0; i < inputFocus.length; i += 1) {\n      inputFocus[i].onfocus = _GrabUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeBackground;\n    }\n\n    inputFocus.forEach((element) => {\n      // proper closure;\n      const listItemElement = element.value;\n      const makeHandler = (listItemElement) => (event) => {\n        _GrabUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeValue(event, listItemElement);\n      };\n      element.addEventListener('change', makeHandler(listItemElement));\n    });\n  }\n}\n\nconst displayTodos = new DisplayTodos();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodos);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/DisplayTodos.js?");

/***/ }),

/***/ "./src/assets/js/modules/GrabUserInput.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/GrabUserInput.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/assets/js/modules/Todo.js\");\n/* harmony import */ var _TodoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItems */ \"./src/assets/js/modules/TodoItems.js\");\n\n\n\nconst todoinput = document.querySelector('.todoinput');\n\nclass GrabUserInput {\n  grab = (val) => {\n    val.preventDefault();\n    if (todoinput.value === '') {\n      return;\n    }\n    const idx = JSON.parse(localStorage.getItem('todos')).length + 1;\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todoinput.value, idx);\n    _TodoItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addtodo(todo);\n    todoinput.value = '';\n  }\n\n  remove = (val) => {\n    val.preventDefault();\n    if (!val.target.parentElement.children[0].checked) {\n      return;\n    }\n    _TodoItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deletetodo();\n  }\n\n  changeBackground = (val) => {\n    val.preventDefault();\n    const parent = val.target.parentElement;\n    parent.children[2].style.display = 'none';\n    parent.children[3].style.display = 'block';\n  }\n\n  changeBlur = (val) => {\n    val.preventDefault();\n    const parent = val.target.parentElement;\n    parent.children[2].style.display = 'block';\n    parent.children[3].style.display = 'none';\n  }\n\n  changeValue = (event, description) => {\n    if (event.target.value === '') {\n      event.target.value = description;\n      return;\n    }\n    const idx = Number(event.target.id);\n    _TodoItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"].edit(event.target.value, idx);\n  }\n\n  clearAllCompleted = () => {\n    _TodoItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearAll();\n  }\n\n  completed = (ev) => {\n    _TodoItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"].complete(ev);\n  }\n}\n\nconst grabinput = new GrabUserInput();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grabinput);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/GrabUserInput.js?");

/***/ }),

/***/ "./src/assets/js/modules/Todo.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/Todo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor(description, index) {\n    this.description = description;\n    this.completed = false;\n    this.index = index;\n  }\n\n  get describetodo() {\n    return this.description;\n  }\n\n  set describetodo(string) {\n    this.description = string;\n  }\n\n  get completetodo() {\n    return this.completed;\n  }\n\n  set completetodo(complete) {\n    this.completed = complete;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/Todo.js?");

/***/ }),

/***/ "./src/assets/js/modules/TodoItems.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/TodoItems.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UpdateIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateIndex */ \"./src/assets/js/modules/UpdateIndex.js\");\n\n\nclass TodoItems {\n  constructor(todolist) {\n    this.todoitems = todolist;\n  }\n\n  static addtodo = (todoobj) => {\n    const todosArr = JSON.parse(localStorage.getItem('todos'));\n    todosArr.push(todoobj);\n    this.todoitems = todoobj;\n    localStorage.setItem('todos', JSON.stringify(todosArr));\n    this.todoitems = todosArr;\n    document.location.reload(true);\n  }\n\n  static deletetodo = () => {\n    let todosArr = JSON.parse(localStorage.getItem('todos'));\n    todosArr = todosArr.filter((todo) => todo.completed !== true);\n    todosArr = (0,_UpdateIndex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todosArr);\n    localStorage.setItem('todos', JSON.stringify(todosArr));\n    this.todoitems = todosArr;\n    document.location.reload(true);\n  }\n\n  static edit = (description, id) => {\n    const todosArr = JSON.parse(localStorage.getItem('todos'));\n    for (let i = 0; i < todosArr.length; i += 1) {\n      if (i === id - 1) {\n        todosArr[i].description = description;\n      }\n    }\n    this.todoitems = todosArr;\n    localStorage.setItem('todos', JSON.stringify(todosArr));\n    document.location.reload(true);\n  }\n\n  static clearAll = () => {\n    let todosArr = JSON.parse(localStorage.getItem('todos'));\n    todosArr = todosArr.filter((todo) => todo.completed !== true);\n    todosArr = (0,_UpdateIndex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todosArr);\n    this.todoitems = todosArr;\n    localStorage.setItem('todos', JSON.stringify(todosArr));\n    document.location.reload(true);\n  }\n\n  static complete = (e) => {\n    const todosArr = JSON.parse(localStorage.getItem('todos'));\n    if (e.target.checked === true) {\n      for (let i = 0; i < todosArr.length; i += 1) {\n        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {\n          todosArr[i].completed = true;\n          e.target.parentElement.children[1].style.textDecoration = 'line-through';\n        }\n      }\n    } else {\n      for (let i = 0; i < todosArr.length; i += 1) {\n        if (todosArr[i].index === Number(e.target.parentElement.children[1].id)) {\n          todosArr[i].completed = false;\n          e.target.parentElement.children[1].style.textDecoration = 'none';\n        }\n      }\n    }\n    localStorage.setItem('todos', JSON.stringify(todosArr));\n    document.location.reload(true);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItems);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/TodoItems.js?");

/***/ }),

/***/ "./src/assets/js/modules/TodoMarkup.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/TodoMarkup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todomarkup = (todo) => `<div class=\"space\">\n<input class=\"input\" type=\"checkbox\" name=\"${todo.description}\" value=\"${todo.description}\" id=\"${todo.index}\">\n<input class=\"list-title\" type=\"text\" name=\"${todo.description}\" value=${todo.description} id=\"${todo.index}\"/>\n<img src=\"https://img.icons8.com/material-rounded/24/000000/menu-2.png\" class=\"threedots\"/>\n<img src=\"https://img.icons8.com/external-others-amoghdesign/24/000000/external-bin-multimedia-solid-30px-others-amoghdesign.png\" class=\"bin\"/>\n</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todomarkup);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/TodoMarkup.js?");

/***/ }),

/***/ "./src/assets/js/modules/UpdateIndex.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/UpdateIndex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateIndex = (arr) => {\n  let idx = 0;\n  arr.forEach((element) => {\n    idx += 1;\n    element.index = idx;\n  });\n  return arr;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateIndex);\n\n//# sourceURL=webpack://todo-list/./src/assets/js/modules/UpdateIndex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;