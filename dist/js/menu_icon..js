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

/***/ "./ts/navigation/components/menu_icon.ts":
/*!***********************************************!*\
  !*** ./ts/navigation/components/menu_icon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar menuShow = jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show\"),\n    animShow1 = jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\"),\n    navigationMenuAndClouse = jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\"); // Show menu animation\n\nvar menuShowAnim = function menuShowAnim() {\n  menuShow.removeClass(\"anim-show-default anim-show-close\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-circle\").fadeOut();\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\").addClass(\"anim-show-active\");\n  }, 10);\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"anim-show-active\");\n  }, 150);\n  setTimeout(function () {\n    return menuShow.addClass(\"anim-show-default\");\n  }, 800);\n  setTimeout(function () {\n    return menuShow.removeClass(\"anim-show-active\");\n  }, 1000);\n}; // Hide menu animation\n\n\nvar menuHide = function menuHide() {\n  menuShow.removeClass(\"anim-show-default anim-show-close\");\n  animShow1.addClass(\"anim-show-close\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-circle\").fadeIn();\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"anim-show-close\");\n  }, 150);\n  setTimeout(function () {\n    return menuShow.fadeOut(300);\n  }, 900);\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu, .anim-show1\").css(\"display\", \"none\");\n  }, 800);\n}; // No spam click\n\n\nvar noClickMenuIcon = function noClickMenuIcon() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\", \"true\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\", \"false\");\n  }, 1200);\n}; // Show menu\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").on(\"click\", function () {\n  return showMenu();\n});\nvar showMenu = function showMenu() {\n  var noClickBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\");\n  if (noClickBlocks === \"true\") return;else {\n    noClickMenuIcon();\n    menuShowAnim();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__clouse, .anim-show\").css(\"display\", \"flex\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").css(\"display\", \"none\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu\").css(\"display\", \"flex\");\n    }, 800);\n  }\n}; // Hide menu\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__clouse\").on(\"click\", function () {\n  var noClickBlocks = navigationMenuAndClouse.attr(\"value\");\n  if (noClickBlocks === \"true\") return;else {\n    noClickMenuIcon();\n    menuHide();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").css(\"display\", \"flex\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).css(\"display\", \"none\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".active-menu__child\").removeClass(\"active-menu__child\");\n    }, 1000);\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show\").removeClass(\"anim-show-close\");\n    }, 1500);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").css(\"overflow-y\", \"auto\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").addClass(\"notActiveMenuIcon\");\n  }\n});\n\n//# sourceURL=webpack:///./ts/navigation/components/menu_icon.ts?");

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
/******/ 			"menu_icon": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./ts/navigation/components/menu_icon.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;