/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/sculptures/scripts/components/data-name.ts":
/*!*******************************************************!*\
  !*** ./ts/sculptures/scripts/components/data-name.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allSculpturesName\": function() { return /* binding */ allSculpturesName; },\n/* harmony export */   \"allAuthorsName\": function() { return /* binding */ allAuthorsName; }\n/* harmony export */ });\nvar allSculpturesName = [\"nefertiti-bust\", \"discobolus\", \"winged-victory-of-samothrace\", \"venus-de-milo\", \"apollo-belvedere\", \"laocoon-and-his-sons\", \"david\", \"little-dancer\", \"thinker\", \"kiss\"],\n    allAuthorsName = [\"auguste-rodin\", \"michelangelo-buonarroti\", \"myron\", \"giovanni-angelo\", \"pliny-the-elder\", \"thutmose\"];\n\n//# sourceURL=webpack:///./ts/sculptures/scripts/components/data-name.ts?");

/***/ }),

/***/ "./ts/sculptures/sculpture/components/3d.ts":
/*!**************************************************!*\
  !*** ./ts/sculptures/sculpture/components/3d.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var originTS_3d_3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originTS/3d/3d */ \"./ts/3d/3d.ts\");\n/* harmony import */ var _sculpture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sculpture */ \"./ts/sculptures/sculpture/sculpture.ts\");\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".description__button-3d\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").addClass(\"3dActive\");\n  (0,originTS_3d_3d__WEBPACK_IMPORTED_MODULE_1__.show3D)(\"3D_models/sculptures/\".concat(_sculpture__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"/scene.gltf\"));\n});\n\n//# sourceURL=webpack:///./ts/sculptures/sculpture/components/3d.ts?");

/***/ }),

/***/ "./ts/sculptures/sculpture/components/arrows.ts":
/*!******************************************************!*\
  !*** ./ts/sculptures/sculpture/components/arrows.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leftArrow\": function() { return /* binding */ leftArrow; },\n/* harmony export */   \"rightArrow\": function() { return /* binding */ rightArrow; },\n/* harmony export */   \"bottomArrowClick\": function() { return /* binding */ bottomArrowClick; },\n/* harmony export */   \"nearbyPages\": function() { return /* binding */ nearbyPages; }\n/* harmony export */ });\n/* harmony import */ var _sculpture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sculpture */ \"./ts/sculptures/sculpture/sculpture.ts\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_1__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_1__(\"body\"); // Arrow \n\nvar leftArrow = function leftArrow() {\n  var prevSculptureNum = Number((0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.activeSculpture)()) - 1;\n  if (prevSculptureNum < 0) prevSculptureNum = (0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.allSculptures)().length - 1;\n  var prevSculpture = (0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.allSculptures)()[prevSculptureNum];\n  return prevSculpture;\n};\nvar rightArrow = function rightArrow() {\n  var nextSculptureNum = Number((0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.activeSculpture)()) + 1;\n  if (nextSculptureNum === (0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.allSculptures)().length) nextSculptureNum = 0;\n  var nextSculpture = (0,_sculpture__WEBPACK_IMPORTED_MODULE_0__.allSculptures)()[nextSculptureNum];\n  return nextSculpture;\n};\njquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow-left\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextSculpture\", \"sculptureToSculpture\", \"arrow__prev-page-name\", leftArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeRight\", \"sculptureToSculpture swipeRightLoad\", \"arrow__next-page-name\", rightArrow());\n});\njquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow-right\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextSculpture\", \"sculptureToSculpture\", \"arrow__next-page-name\", rightArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeLeft\", \"sculptureToSculpture\", \"arrow__prev-page-name\", leftArrow());\n});\nvar bottomArrowClick = function bottomArrowClick(addClass, classLS, arrowClass, linkFunction) {\n  if (body.hasClass(addClass)) return;\n  localStorage.setItem(\"typeSculptureAnim\", classLS);\n  body.removeClass();\n  setTimeout(function () {\n    return body.addClass(addClass);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".\" + arrowClass).css(\"animation\", \"hide 0.3s forwards\");\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".cursor, #cursor\").addClass(\"close-cursor\");\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\"html\").animate({\n    scrollTop: \"0\"\n  });\n  setTimeout(function () {\n    localStorage.setItem(\"newPageArrowClick\", arrowClass);\n    location.href = \"./sculpture.html#\" + linkFunction;\n  }, 300);\n};\npage.on(\"popstate\", function () {\n  return location.reload();\n}); // Generate hover arrow text\n\nvar nearbyPages = function nearbyPages(direction, arrowName) {\n  var activeLanguageLS = localStorage.getItem(\"lang\");\n  __webpack_require__(\"./content/sculptures/sculpture lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\" + direction + \".json\").then(function (langJSON) {\n    var currLangExport = Object.entries(langJSON.default)[Object.keys(langJSON.default).indexOf(activeLanguageLS)][1],\n        nearbyPageName = currLangExport.main_title;\n    jquery__WEBPACK_IMPORTED_MODULE_1__(arrowName).html(nearbyPageName);\n  });\n}; // Show arrow text on load\n\npage.on(\"load\", function () {\n  var newPageArrowClickLS = localStorage.getItem(\"newPageArrowClick\");\n  var activeCursorLS = JSON.parse(localStorage.getItem(\"activeCursor\"));\n\n  if (activeCursorLS) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(\".\" + newPageArrowClickLS).css(\"opacity\", \"1\").css(\"display\", \"block\");\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow\").on(\"mouseleave\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css({\n      \"animation\": \"hide 0.4s forwards\",\n      \"display\": \"none\"\n    });\n    localStorage.setItem(\"activeCursor\", \"false\");\n  });\n  var leaveToArrow = false;\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow\").on(\"mouseover\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css({\n      \"animation\": \"show 0.4s forwards\",\n      \"display\": \"block\"\n    });\n    leaveToArrow = true;\n\n    if (leaveToArrow && jquery__WEBPACK_IMPORTED_MODULE_1__(\".cursor\").hasClass(\"activeCursor\")) {\n      jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css(\"animation\", \"none\");\n    }\n\n    localStorage.setItem(\"activeCursor\", \"true\");\n  });\n  localStorage.removeItem(\"newPageArrowClick\");\n});\n\n//# sourceURL=webpack:///./ts/sculptures/sculpture/components/arrows.ts?");

/***/ }),

/***/ "./ts/sculptures/sculpture/components/swipe.ts":
/*!*****************************************************!*\
  !*** ./ts/sculptures/sculpture/components/swipe.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows */ \"./ts/sculptures/sculpture/components/arrows.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i; // Swipe on phone\n\nsetTimeout(function () {\n  return localStorage.setItem(\"typeSculptureAnim\", \"sculptureToSculpture\");\n}, 700);\nvar startingX, startingY, movingX, movingY;\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchstart\", function (event) {\n  startingX = event.touches[0].clientX;\n  startingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchmove\", function (event) {\n  movingX = event.touches[0].clientX;\n  movingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchend\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").hasClass(\"3dActive\")) return;\n  var windowWidth = page.width(),\n      checkPhone = phone.test(navigator.userAgent),\n      navWindowDisplay = jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu, .languages__choice, .colors__active\").css(\"display\");\n\n  if (startingX + 100 < movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeLeft\", \"sculptureToSculpture\", \"arrow__prev-page-name\", (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.leftArrow)());\n  }\n\n  if (startingX - 100 > movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeRight\", \"sculptureToSculpture swipeRightLoad\", \"arrow__next-page-name\", (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.rightArrow)());\n  }\n});\n\n//# sourceURL=webpack:///./ts/sculptures/sculpture/components/swipe.ts?");

/***/ }),

/***/ "./ts/sculptures/sculpture/sculpture.ts":
/*!**********************************************!*\
  !*** ./ts/sculptures/sculpture/sculpture.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allSculptures\": function() { return /* binding */ allSculptures; },\n/* harmony export */   \"activeSculpture\": function() { return /* binding */ activeSculpture; }\n/* harmony export */ });\n/* harmony import */ var originSCSS_sculptures_sculpture_sculpture_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/sculptures/sculpture/sculpture.scss */ \"./scss/sculptures/sculpture/sculpture.scss\");\n/* harmony import */ var originSCSS_sculptures_sculpture_adap_adap_sculpture_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/sculptures/sculpture/adap/adap-sculpture.scss */ \"./scss/sculptures/sculpture/adap/adap-sculpture.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/arrows */ \"./ts/sculptures/sculpture/components/arrows.ts\");\n/* harmony import */ var _scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/components/data-name */ \"./ts/sculptures/scripts/components/data-name.ts\");\n/* harmony import */ var _components_swipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/swipe */ \"./ts/sculptures/sculpture/components/swipe.ts\");\n/* harmony import */ var _components_3d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/3d */ \"./ts/sculptures/sculpture/components/3d.ts\");\n\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_2__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\"),\n    informationImage = jquery__WEBPACK_IMPORTED_MODULE_2__(\"#information__image\"); // Get page identification key \n\nvar key = location.href.split(\"#\")[1];\nbody.attr(\"data-name\", key);\n/* harmony default export */ __webpack_exports__[\"default\"] = (key); // New user\n\nvar newUser = function newUser() {\n  if (localStorage.getItem(\"allSculptures\")) return;\n  var allSculptures = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__.allSculpturesName),\n      allAuthors = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__.allAuthorsName);\n  localStorage.setItem(\"allSculptures\", allSculptures);\n  localStorage.setItem(\"allAuthors\", allAuthors);\n};\n\nnewUser(); // Close page \n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".content__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").addClass(\"allSculptures\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").addClass(\"allSculptures\");\n  }, 700);\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n  setTimeout(function () {\n    return location.href = \"./sculptures.html\";\n  }, 1500);\n}); // Get image\n\npage.on(\"load\", function () {\n  return jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__information img\").attr(\"src\", \"./img/sculptures/\" + key + \".webp\");\n}); // Active sculpture\n\nvar allSculptures = function allSculptures() {\n  var allSculpturesLS = localStorage.getItem(\"allSculptures\"),\n      allSculptures = allSculpturesLS.split(\",\");\n  return allSculptures;\n};\nvar activeSculpture = function activeSculpture() {\n  var lastSculpture = String(allSculptures().indexOf(key)),\n      lastSculptureName = allSculptures()[lastSculpture];\n  localStorage.setItem(\"lastSculpture\", lastSculpture);\n  localStorage.setItem(\"lastSculptureName\", lastSculptureName);\n  return lastSculpture;\n};\nactiveSculpture(); // Generate link to author\n\n__webpack_require__(\"./content/sculptures/sculpture lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(key, \".json\")).then(function (langJSON) {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__link\").attr(\"data-author-link\", langJSON.specifical.authorLink);\n  if (langJSON.specifical.authorLink === \"\") jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__link\").removeClass(\"mouse-active\");\n});\njquery__WEBPACK_IMPORTED_MODULE_2__(\".description__link\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).hasClass(\"mouse-active\")) {\n    body.removeClass();\n    setTimeout(function () {\n      return body.addClass(\"sculptureToAuthor\");\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n    var activeAuthor = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr(\"data-author-link\");\n    localStorage.setItem(\"typeAuthorAnim\", \"sculptureToAuthor\");\n    setTimeout(function () {\n      return location.href = \"./sculptures_author.html#\" + activeAuthor;\n    }, 500);\n  }\n}); // Get and change body class\n\nvar checkBodyClass = function checkBodyClass() {\n  var getTypeAnimLS = localStorage.getItem(\"typeSculptureAnim\");\n  getTypeAnimLS === null ? body.addClass(\"sculpturesToSculpture\") : body.addClass(getTypeAnimLS);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".languages__choice\").on(\"click\", function () {\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.leftArrow)(), \".arrow__prev-page-name\");\n});\ncheckBodyClass();\npage.on(\"load\", function () {\n  checkBodyClass();\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.leftArrow)(), \".arrow__prev-page-name\");\n}); // Adap sculpture \n\nif (page.width() <= 1000) {\n  var year = jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__year\");\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__title\").before(year);\n  informationImage.removeClass(\"mouse-active2\");\n}\n\nvar fistAnimation = false;\npage.on(\"resize\", function () {\n  var year = jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__year\");\n\n  if (page.width() <= 1000 && !fistAnimation) {\n    informationImage.removeClass(\"mouse-active2\");\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__title\").append(year);\n    fistAnimation = true;\n  } else if (page.width() >= 1000 && fistAnimation) {\n    informationImage.addClass(\"mouse-active2\");\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".content\").append(year);\n    fistAnimation = false;\n  }\n});\n\n//# sourceURL=webpack:///./ts/sculptures/sculpture/sculpture.ts?");

/***/ }),

/***/ "./scss/sculptures/sculpture/adap/adap-sculpture.scss":
/*!************************************************************!*\
  !*** ./scss/sculptures/sculpture/adap/adap-sculpture.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/sculptures/sculpture/adap/adap-sculpture.scss?");

/***/ }),

/***/ "./scss/sculptures/sculpture/sculpture.scss":
/*!**************************************************!*\
  !*** ./scss/sculptures/sculpture/sculpture.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/sculptures/sculpture/sculpture.scss?");

/***/ }),

/***/ "./content/sculptures/sculpture lazy recursive ^\\.\\/.*\\.json$":
/*!****************************************************************************!*\
  !*** ./content/sculptures/sculpture/ lazy ^\.\/.*\.json$ namespace object ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./apollo-belvedere.json\": [\n\t\t\"./content/sculptures/sculpture/apollo-belvedere.json\",\n\t\t\"content_sculptures_sculpture_apollo-belvedere_json\"\n\t],\n\t\"./david.json\": [\n\t\t\"./content/sculptures/sculpture/david.json\",\n\t\t\"content_sculptures_sculpture_david_json\"\n\t],\n\t\"./discobolus.json\": [\n\t\t\"./content/sculptures/sculpture/discobolus.json\",\n\t\t\"content_sculptures_sculpture_discobolus_json\"\n\t],\n\t\"./kiss.json\": [\n\t\t\"./content/sculptures/sculpture/kiss.json\",\n\t\t\"content_sculptures_sculpture_kiss_json\"\n\t],\n\t\"./laocoon-and-his-sons.json\": [\n\t\t\"./content/sculptures/sculpture/laocoon-and-his-sons.json\",\n\t\t\"content_sculptures_sculpture_laocoon-and-his-sons_json\"\n\t],\n\t\"./little-dancer.json\": [\n\t\t\"./content/sculptures/sculpture/little-dancer.json\",\n\t\t\"content_sculptures_sculpture_little-dancer_json\"\n\t],\n\t\"./nefertiti-bust.json\": [\n\t\t\"./content/sculptures/sculpture/nefertiti-bust.json\",\n\t\t\"content_sculptures_sculpture_nefertiti-bust_json\"\n\t],\n\t\"./thinker.json\": [\n\t\t\"./content/sculptures/sculpture/thinker.json\",\n\t\t\"content_sculptures_sculpture_thinker_json\"\n\t],\n\t\"./venus-de-milo.json\": [\n\t\t\"./content/sculptures/sculpture/venus-de-milo.json\",\n\t\t\"content_sculptures_sculpture_venus-de-milo_json\"\n\t],\n\t\"./winged-victory-of-samothrace.json\": [\n\t\t\"./content/sculptures/sculpture/winged-victory-of-samothrace.json\",\n\t\t\"content_sculptures_sculpture_winged-victory-of-samothrace_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./content/sculptures/sculpture lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./content/sculptures/sculpture/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "./js/" + chunkId + "..js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sculpture": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_three_examples_jsm_controls_OrbitControls_js-node_modules_three_examples-f7db49","ts_3d_3d_ts"], function() { return __webpack_require__("./ts/sculptures/sculpture/sculpture.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;