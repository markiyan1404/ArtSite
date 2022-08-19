/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/cursor/cursor.ts":
/*!*****************************!*\
  !*** ./ts/cursor/cursor.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mouveHover\": function() { return /* binding */ mouveHover; },\n/* harmony export */   \"mouveHover2\": function() { return /* binding */ mouveHover2; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var originSCSS_cursor_cursor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/cursor/cursor.scss */ \"./scss/cursor/cursor.scss\");\n/* harmony import */ var originSCSS_cursor_adap_adap_cursor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! originSCSS/cursor/adap/adap-cursor.scss */ \"./scss/cursor/adap/adap-cursor.scss\");\n\n\n\n;\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    cursorInner = jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\"),\n    cursor = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#cursor\"),\n    cursorInnerAndCursor = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#cursor, .cursor\"),\n    cursorCircle = jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-wrap\"),\n    mouse = {\n  x: checkLastMousePosition()[0],\n  y: checkLastMousePosition()[1]\n},\n    pos = {\n  x: checkLastMousePosition()[0],\n  y: checkLastMousePosition()[1]\n},\n    speed = 0.11; // Get mouse position\n\npage.on(\"mousemove\", function (e) {\n  mouse.x = e.clientX;\n  mouse.y = e.clientY;\n}); // Mouse style effect\n\nvar getSqueeze = function getSqueeze(diffX, diffY) {\n  var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)),\n      maxSqueeze = 20.15,\n      accelerator = 1500;\n  return Math.min(distance / accelerator, maxSqueeze);\n};\n\nvar updateCursor = function updateCursor() {\n  var diffX = Math.round(mouse.x - pos.x),\n      diffY = Math.round(mouse.y - pos.y);\n  pos.x += diffX * speed;\n  pos.y += diffY * speed;\n  var squeeze = getSqueeze(diffX, diffY); // const scale: string = \"scale(\" + (1 + squeeze) + \", \" + (1 - squeeze) + \")\";\n\n  var translate = \"translate3d(\" + pos.x + \"px ,\" + pos.y + \"px, 0)\";\n  cursorInner.css(\"transform\", translate);\n  cursor.css(\"transform\", translate); // cursorCircle.css(\"transform\", scale);\n}; // Show mouse\n\n\nvar loop = function loop() {\n  updateCursor();\n  requestAnimationFrame(loop);\n  saveMousePosition();\n};\n\nrequestAnimationFrame(loop); // Active elements hover\n\nvar mouveHover = function mouveHover() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".mouse-active\").on(\"mousemove\", function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"activeArchitecture\")) {\n      cursorInner.removeClass(\"activeCursor\");\n      return;\n    }\n\n    cursorInner.addClass(\"activeCursor\");\n  });\n  page.on(\"mouseover\", function (e) {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).hasClass(\"mouse-active\")) return;else {\n      cursorInner.removeClass(\"activeCursor\");\n    }\n  });\n};\nvar mouveHover2 = function mouveHover2() {\n  var mouseActive2 = jquery__WEBPACK_IMPORTED_MODULE_0__(\".mouse-active2\");\n  mouseActive2.on(\"mouseenter\", function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"mouse-active2\")) cursorInnerAndCursor.addClass(\"activeCursore2\");\n  });\n  mouseActive2.on(\"mouseleave\", function () {\n    cursorInnerAndCursor.removeClass(\"activeCursore2\");\n  });\n};\npage.on(\"load\", function () {\n  mouveHover();\n  mouveHover2();\n});\npage.on(\"resize\", function () {\n  return mouveHover2();\n}); // Mouse down/up\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"mousedown\", function () {\n  return cursorCircle.addClass(\"mousedown\");\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"mouseup\", function () {\n  return cursorCircle.removeClass(\"mousedown\");\n}); // Cursor progress bar \n\npage.on(\"load\", function () {\n  var progressPath = jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-wrap__path\"),\n      pathLength = progressPath[0].getTotalLength();\n  progressPath.css({\n    transition: \"stroke-dashoffset 10ms linear\",\n    WebkitTransition: \"stroke-dashoffset 10ms linear\",\n    strokeDasharray: pathLength + \" \" + pathLength,\n    strokeDashoffset: pathLength\n  });\n\n  var updateProgress = function updateProgress() {\n    var scroll = page.scrollTop(),\n        height = jquery__WEBPACK_IMPORTED_MODULE_0__(document).height() - page.height(),\n        progress = pathLength - scroll * pathLength / height;\n    progressPath.css(\"strokeDashoffset\", progress);\n  };\n\n  page.on(\"scroll\", updateProgress);\n}); // Save and give mouse position\n\nvar saveMousePosition = function saveMousePosition() {\n  var left = String(cursorInner.position().left + cursorInner.width() / 2),\n      top = String(cursorInner.position().top + cursorInner.height() / 2);\n  localStorage.setItem(\"lastMousePositionLeft\", left);\n  localStorage.setItem(\"lastMousePositionTop\", top);\n};\n\nfunction checkLastMousePosition() {\n  var left = Number(localStorage.getItem(\"lastMousePositionLeft\")),\n      top = Number(localStorage.getItem(\"lastMousePositionTop\"));\n  var cursorPosition = [left, top];\n  return cursorPosition;\n}\n\n; // Show saved active/leave cursor\n\npage.on(\"load\", function () {\n  var checkActiveCursor = JSON.parse(localStorage.getItem(\"activeCursor\")),\n      mouseLeave = JSON.parse(localStorage.getItem(\"mouseLeave\"));\n  if (mouseLeave || checkLastMousePosition()[0] === 0 && checkLastMousePosition()[1] === 0) return;\n\n  if (checkActiveCursor) {\n    cursorInner.addClass(\"activeCursor\");\n    setTimeout(function () {\n      cursorInnerAndCursor.css(\"opacity\", \"1\");\n      pageHover();\n    }, 200);\n  } else {\n    setTimeout(function () {\n      cursorInnerAndCursor.css(\"opacity\", \"1\");\n      pageHover();\n    }, 300);\n  }\n\n  localStorage.setItem(\"activeCursor\", \"false\");\n});\n\nvar pageHover = function pageHover() {\n  page.on(\"mousemove\", function () {\n    cursorInnerAndCursor.css(\"opacity\", \"1\");\n  });\n  page.on(\"mouseleave\", function () {\n    cursorInnerAndCursor.css(\"opacity\", \"0\");\n  });\n  cursor.css(\"transition\", \"transform 0.05s linear, opacity 0.2s\");\n  cursorCircle.css(\"transition\", \"transform 0.2s, opacity 0.2s\");\n};\n\npage.on(\"mouseleave\", function () {\n  localStorage.setItem(\"mouseLeave\", \"true\");\n  cursorInnerAndCursor.css(\"opacity\", \"0\").addClass(\"hideCursor\");\n});\npage.on(\"mousemove\", function () {\n  localStorage.setItem(\"mouseLeave\", \"false\");\n  cursorInnerAndCursor.css(\"opacity\", \"1\").removeClass(\"hideCursor\");\n  setTimeout(function () {\n    cursor.css(\"transition\", \"transform 0.05s linear, opacity 0.2s\");\n    cursorCircle.css(\"transition\", \"transform 0.2s, opacity 0.2s\");\n  }, 500);\n}); // Cursor adaptation\n\npage.on(\"mousemove\", function () {\n  return checkClientDevice();\n});\npage.on(\"load\", function () {\n  return checkClientDevice();\n});\n\nvar checkClientDevice = function checkClientDevice() {\n  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {\n    cursorInnerAndCursor.css(\"display\", \"none\");\n  } else {\n    cursorInnerAndCursor.fadeIn();\n  }\n};\n\n//# sourceURL=webpack:///./ts/cursor/cursor.ts?");

/***/ }),

/***/ "./scss/cursor/adap/adap-cursor.scss":
/*!*******************************************!*\
  !*** ./scss/cursor/adap/adap-cursor.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/cursor/adap/adap-cursor.scss?");

/***/ }),

/***/ "./scss/cursor/cursor.scss":
/*!*********************************!*\
  !*** ./scss/cursor/cursor.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/cursor/cursor.scss?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"cursor": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./ts/cursor/cursor.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;