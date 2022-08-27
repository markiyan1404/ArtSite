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

/***/ "./ts/navigation/components/colors.ts":
/*!********************************************!*\
  !*** ./ts/navigation/components/colors.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar blackColor = \"#0b0b0b\",\n    whiteColor = \"#fff\";\nvar html = jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\"),\n    colors__icon = jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__icon\"); // Get data from Local Storage\n\nvar checkTheme = function checkTheme() {\n  if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: light)\").matches) {\n    addUserColor(blackColor, whiteColor, \".colors__white\");\n  } else {\n    addUserColor(whiteColor, blackColor, \".colors__black\");\n  }\n};\n\nvar addUserColor = function addUserColor(color1, color2, activeIcon) {\n  html.css({\n    \"--contrastColorWhite\": color1,\n    \"--contrastColorBlack\": color2\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(activeIcon).addClass(\"active-contrast-color\");\n  localStorage.setItem(\"contrastColor1LS\", color2);\n  localStorage.setItem(\"contrastColor2LS\", color1);\n  localStorage.setItem(\"activeColorContrastIcon\", activeIcon);\n};\n\nvar changeIcon = function changeIcon() {\n  var activeColor = localStorage.getItem(\"color\");\n  activeColor !== null ? activeColor = activeColor.substring(1) : activeColor = \"ffc700\";\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"link[rel*='icon']\").attr(\"href\", \"./../img/head/\" + activeColor + \"-activeIcon.webp\");\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  return html.css(\"--transitionTime\", \"color 0.4s, background-color 0.4s, border-color 0.4s, -webkit-text-stroke 0.4s\");\n});\nvar contrastColor1LS = localStorage.getItem(\"contrastColor1LS\"),\n    contrastColor2LS = localStorage.getItem(\"contrastColor2LS\"),\n    mainColorLS = localStorage.getItem(\"color\"),\n    contrastActiveIconLS = localStorage.getItem(\"activeColorContrastIcon\"),\n    mainActiveIconLS = localStorage.getItem(\"activeColorMainIcon\");\n\nif (contrastColor1LS === null || contrastColor2LS === null) {\n  checkTheme();\n} else {\n  html.css({\n    \"--contrastColorBlack\": contrastColor1LS,\n    \"--contrastColorWhite\": contrastColor2LS\n  });\n}\n\nmainColorLS === null ? html.css(\"--mainColor\", \"#ffc700\") : html.css(\"--mainColor\", mainColorLS);\n\nif (mainActiveIconLS || contrastActiveIconLS) {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__color\").removeClass(\"active-main-color\");\n  if (mainActiveIconLS === null) jquery__WEBPACK_IMPORTED_MODULE_0__(\"#main-color1\").addClass(\"active-main-color\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"#\" + mainActiveIconLS).addClass(\"active-main-color\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(contrastActiveIconLS).addClass(\"active-contrast-color\");\n}\n\nchangeIcon(); // Check user white/dark theme\n\nwindow.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\", function () {\n  return checkTheme();\n}); // Change main color\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__main .colors__color\").on(\"click\", function () {\n  var color = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"background\"),\n      colorsIcons = jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__color\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".active-main-color\").addClass(\"no-active-main-color\");\n  colorsIcons.removeClass(\"active-main-color\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"active-main-color\");\n  setTimeout(function () {\n    html.css(\"--mainColor\", color);\n    colorsIcons.removeClass(\"no-active-main-color\");\n  }, 50);\n  localStorage.setItem(\"color\", color);\n  localStorage.setItem(\"activeColorMainIcon\", jquery__WEBPACK_IMPORTED_MODULE_0__(this)[0].id);\n  changeIcon();\n}); // Change white/black theme\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__white\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"active-contrast-color\");\n  changeColorOnClick(blackColor, whiteColor, \".colors__black\", \".colors__white\");\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__black\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"active-contrast-color\");\n  changeColorOnClick(whiteColor, blackColor, \".colors__white\", \".colors__black\");\n});\n\nvar changeColorOnClick = function changeColorOnClick(color1, color2, noActiveIcon, activeIcon) {\n  html.css({\n    \"--contrastColorWhite\": color1,\n    \"--contrastColorBlack\": color2\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(noActiveIcon).removeClass(\"active-contrast-color\");\n  localStorage.setItem(\"contrastColor1LS\", color2);\n  localStorage.setItem(\"contrastColor2LS\", color1);\n  localStorage.setItem(\"activeColorContrastIcon\", activeIcon);\n}; // Colors modal window position\n\n\nvar colorPosition = function colorPosition() {\n  var languagesHeight = jquery__WEBPACK_IMPORTED_MODULE_0__(\".icon__color-main\").position().top - 127;\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").css(\"top\", languagesHeight);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  colorPosition();\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"resize\", function () {\n  return colorPosition();\n}); // Colors modal window show/hide\n\ncolors__icon.on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"color-active\")) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").fadeOut(300);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass(\"color-active\");\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"color-active\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").fadeIn(300);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").css(\"display\", \"flex\");\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").on(\"click\", function (e) {\n  var clickColorIcon, clickColorActive, clickColorHeader;\n\n  if (e.target.localName === \"path\" || e.target.localName === \"svg\") {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").fadeOut(300);\n    colors__icon.removeClass(\"color-active\");\n  } else {\n    clickColorActive = e.target.className.indexOf(\"color\");\n    clickColorIcon = e.target.className.indexOf(\"navigation__color\");\n    clickColorHeader = e.target.className.indexOf(\"colors__head\");\n    if (clickColorIcon === 0 || clickColorActive === 0 || clickColorHeader === 0) return;else {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__active\").fadeOut(300);\n      colors__icon.removeClass(\"color-active\");\n    }\n  }\n});\n\n//# sourceURL=webpack:///./ts/navigation/components/colors.ts?");

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
/******/ 			"colors": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./ts/navigation/components/colors.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;