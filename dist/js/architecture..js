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

/***/ "./ts/architecture/scripts/architecture.ts":
/*!*************************************************!*\
  !*** ./ts/architecture/scripts/architecture.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var originSCSS_architecture_style_architecture_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/architecture/style/architecture.scss */ \"./scss/architecture/style/architecture.scss\");\n/* harmony import */ var originSCSS_architecture_style_adap_architecture_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/architecture/style/adap-architecture.scss */ \"./scss/architecture/style/adap-architecture.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_2__(window); // Adaptation\n\nvar jumpBlock = function jumpBlock() {\n  var fistBlock = jquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__jump-block1\"),\n      checkChanges = jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__image-section\")[1].childNodes.length;\n\n  if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 1000 && checkChanges === 3) {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__image-section\")[2]).append(fistBlock);\n  } else if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() > 1000 && checkChanges === 2) {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__image-section\")[1]).append(fistBlock);\n  }\n};\n\npage.on(\"load\", function () {\n  return jumpBlock();\n});\npage.on(\"resize\", function () {\n  return jumpBlock();\n}); // Add active class\n\nvar addAnimClass = function addAnimClass() {\n  var allBlocks = jquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\"),\n      speedAnim = 60;\n  var blockNum = 0;\n  jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[0]).addClass(\"block-anim\");\n  var addClassToLines = setInterval(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[blockNum]).addClass(\"block-anim\");\n    blockNum++;\n  }, speedAnim);\n  setTimeout(function () {\n    return clearInterval(addClassToLines);\n  }, speedAnim * allBlocks.length);\n};\n\nsetTimeout(function () {\n  addAnimClass(); // Link to type of architecture\n\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\").on(\"click\", function () {\n    var _this = this;\n\n    var allBlocks = jquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\"),\n        getLastBlockOpacity = jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[allBlocks.length - 1]).css(\"opacity\");\n    if (getLastBlockOpacity !== \"1\") return;\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\").addClass(\"architectureToarchitecture_type\");\n    removeAnimClass(allBlocks);\n    setTimeout(function () {\n      location.href = \"architecture_type.html#\" + getActiveImage(_this);\n    }, 750);\n  });\n}); // Background image\n\nvar getActiveImage = function getActiveImage(element) {\n  return jquery__WEBPACK_IMPORTED_MODULE_2__(element.lastChild).attr(\"src\").split(\"/\").pop().split(\".\")[0];\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\").on(\"mouseenter\", function () {\n  if (page.width() <= 1000) return;\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".background\").addClass(\"background-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".background\").attr({\n    \"src\": \"./img/architecture/backgrounds/\".concat(getActiveImage(this), \"_bg.webp\")\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\").on(\"mouseleave\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".background\").removeClass(\"background-active\");\n});\n\nvar removeAnimClass = function removeAnimClass(allBlocks) {\n  var speedAnim = 50;\n  var blockNum = allBlocks.length;\n  jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[allBlocks.length - 1]).removeClass(\"block-anim\");\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".image-section__block\").css(\"transition\", \"0.4s\");\n  var addClassToLines = setInterval(function () {\n    blockNum--;\n    jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[blockNum]).removeClass(\"block-anim\");\n  }, speedAnim);\n  setTimeout(function () {\n    return clearInterval(addClassToLines);\n  }, speedAnim * allBlocks.length);\n  return speedAnim * allBlocks.length;\n};\n\n//# sourceURL=webpack:///./ts/architecture/scripts/architecture.ts?");

/***/ }),

/***/ "./scss/architecture/style/adap-architecture.scss":
/*!********************************************************!*\
  !*** ./scss/architecture/style/adap-architecture.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/architecture/style/adap-architecture.scss?");

/***/ }),

/***/ "./scss/architecture/style/architecture.scss":
/*!***************************************************!*\
  !*** ./scss/architecture/style/architecture.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/architecture/style/architecture.scss?");

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"architecture": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./ts/architecture/scripts/architecture.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;