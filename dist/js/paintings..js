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

/***/ "./ts/paintings/scripts/components/data-name.ts":
/*!******************************************************!*\
  !*** ./ts/paintings/scripts/components/data-name.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allPaintingsName\": () => (/* binding */ allPaintingsName),\n/* harmony export */   \"allAuthorsName\": () => (/* binding */ allAuthorsName)\n/* harmony export */ });\nvar allPaintingsName = [\"arnolfini-portrait\", \"birth-of-venus\", \"mona-lisa\", \"creation-of-adam\", \"garden-of-earthly-delights\", \"harvesters\", \"girl-with-a-pearl-earring\", \"raft-of-the-medusa\", \"wanderer-above-the-sea-of-fog\", \"breakfast-on-the-grass\", \"gross-clinic\", \"luncheon-of-the-boating-party\", \"self-portrait-with-bandaged-ear\", \"starry-night\", \"son-of-man\"],\n    allAuthorsName = [\"jan-van-eyck\", \"sandro-botticelli\", \"leonardo-da-vinci\", \"michelangelo-buonarroti\", \"hieronymus-bosch\", \"pieter-bruegel\", \"johannes-vermeer\", \"theodore-gericault\", \"caspar-david-friedrich\", \"edouard-manet\", \"thomas-eakins\", \"pierre-auguste-renoir\", \"vincent-van-gogh\", \"rene-magritte\"];\n\n//# sourceURL=webpack:///./ts/paintings/scripts/components/data-name.ts?");

/***/ }),

/***/ "./ts/paintings/scripts/components/linkToAuthor.ts":
/*!*********************************************************!*\
  !*** ./ts/paintings/scripts/components/linkToAuthor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack:///./ts/paintings/scripts/components/linkToAuthor.ts?");

/***/ }),

/***/ "./ts/paintings/scripts/components/slider.ts":
/*!***************************************************!*\
  !*** ./ts/paintings/scripts/components/slider.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-name */ \"./ts/paintings/scripts/components/data-name.ts\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Generate paintings\n\npage.on(\"load\", function () {\n  for (var p = 0; p < _data_name__WEBPACK_IMPORTED_MODULE_1__.allPaintingsName.length; p++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-wrapper\").append(\"<section class=\\\"swiper-slide swiper-slide-\".concat(p, \"\\\"></section>\"));\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide-\".concat(p)).append(\"<img data-src=\\\"./img/paintings/\".concat(_data_name__WEBPACK_IMPORTED_MODULE_1__.allPaintingsName[p], \".webp\\\" data-name=\\\"\").concat(_data_name__WEBPACK_IMPORTED_MODULE_1__.allPaintingsName[p], \"\\\" data-author=\\\"\").concat(_data_name__WEBPACK_IMPORTED_MODULE_1__.allAuthorsName[p], \"\\\">\"));\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide img\").addClass(\"swiper-lazy swiper-slide__image-NOactive swiper-slide__image mouse-active\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide-\".concat(p)).append(\"<div class='swiper-lazy-preloader'></div>\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide-\".concat(p)).append(\"<p class=\\\"language\\\" data-key=\\\"paintingName\".concat(p, \"\\\"></p>\"));\n  }\n});\n\nvar activeSwipePainting = function activeSwipePainting() {\n  var lastPainting = localStorage.getItem(\"lastPainting\");\n  if (lastPainting) return Number(lastPainting);else {\n    var activeCentralPaint = Math.floor(jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide__image\").length / 2);\n    return activeCentralPaint;\n  }\n};\n\npage.on(\"load\", function () {\n  swiper__WEBPACK_IMPORTED_MODULE_2__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_2__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_2__.Lazy]);\n  new swiper__WEBPACK_IMPORTED_MODULE_2__.Swiper(\".swiper-container\", {\n    scrollbar: {\n      el: \".swiper-scrollbar\",\n      draggable: true,\n      dragSize: 25\n    },\n    mousewheel: {\n      eventsTarget: \".swiper-slide\",\n      invert: true\n    },\n    slidesPerView: 4,\n    initialSlide: activeSwipePainting(),\n    centeredSlides: true,\n    freeMode: true,\n    speed: 600,\n    touchStartPreventDefault: null,\n    touchStartForcePreventDefault: null,\n    preloadImages: false,\n    observeParents: true,\n    observeSlideChildren: true,\n    observer: true,\n    lazy: {\n      loadPrevNext: true,\n      loadPrevNextAmount: 5\n    },\n    breakpoints: {\n      3200: {\n        slidesPerView: 4,\n        scrollbar: {\n          dragSize: 35\n        }\n      },\n      1200: {\n        slidesPerView: 4,\n        scrollbar: {\n          dragSize: 25\n        }\n      },\n      1000: {\n        slidesPerView: 4,\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 6\n        }\n      },\n      767: {\n        slidesPerView: 3,\n        scrollbar: {\n          dragSize: 20\n        },\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 6\n        }\n      },\n      500: {\n        slidesPerView: 2.2,\n        scrollbar: {\n          dragSize: 20\n        },\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 6\n        }\n      },\n      0: {\n        slidesPerView: 1.5,\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 6\n        }\n      },\n      \"@0.74\": {\n        slidesPerView: 2.5\n      }\n    },\n    on: {\n      touchMove: function touchMove() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-lazy\").removeClass(\"swiper-slide__image-NOactive\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").addClass(\"swiper-slide-activeSwipe\");\n      },\n      touchEnd: function touchEnd() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-lazy\").addClass(\"swiper-slide__image-NOactive\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").removeClass(\"swiper-slide-activeSwipe\");\n      },\n      scrollbarDragStart: function scrollbarDragStart() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-lazy\").removeClass(\"swiper-slide__image-NOactive\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").addClass(\"swiper-slide-activeSwipe\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").css(\"opacity\", \"0\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\").removeClass(\"activeCursor\");\n      },\n      scrollbarDragEnd: function scrollbarDragEnd() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-lazy\").addClass(\"swiper-slide__image-NOactive\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").removeClass(\"swiper-slide-activeSwipe\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").css(\"opacity\", \"1\");\n      },\n      activeIndexChange: function activeIndexChange() {\n        setTimeout(function () {\n          var getActivePaintingName = jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide-active\")[0].firstChild).attr(\"data-name\");\n          localStorage.setItem(\"lastPaintingName\", getActivePaintingName);\n          localStorage.setItem(\"lastPainting\", lastActivePaintingLS());\n        }, 500);\n      }\n    }\n  });\n});\n\nvar allPaintings = function allPaintings() {\n  var allPaintingsLS = localStorage.getItem(\"allPaintings\"),\n      allPaintings = allPaintingsLS.split(\",\");\n  return allPaintings;\n};\n\nvar lastActivePaintingLS = function lastActivePaintingLS() {\n  var lastPaintingLS = localStorage.getItem(\"lastPaintingName\"),\n      lastPainting = String(allPaintings().indexOf(lastPaintingLS)),\n      lastPaintingName = allPaintings()[lastPainting];\n  localStorage.setItem(\"lastPainting\", lastPainting);\n  localStorage.setItem(\"lastPaintingName\", lastPaintingName);\n  return lastPainting;\n};\n\nvar paintingNum = function paintingNum() {\n  var paintingName = [],\n      authorName = [];\n  var paintings = jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide__image\");\n\n  for (var p = 0; p < paintings.length; p++) {\n    paintingName.push(jquery__WEBPACK_IMPORTED_MODULE_0__(paintings[p]).attr(\"data-name\"));\n  }\n\n  for (var a = 0; a < _data_name__WEBPACK_IMPORTED_MODULE_1__.allAuthorsName.length; a++) {\n    authorName.push(jquery__WEBPACK_IMPORTED_MODULE_0__(paintings[a]).attr(\"data-author\"));\n  }\n\n  var cleanAuthorName = _toConsumableArray(new Set(authorName));\n\n  localStorage.setItem(\"allPaintings\", String(paintingName));\n  localStorage.setItem(\"allAuthors\", String(cleanAuthorName));\n};\n\npage.on(\"load\", function () {\n  return paintingNum();\n});\n\n//# sourceURL=webpack:///./ts/paintings/scripts/components/slider.ts?");

/***/ }),

/***/ "./ts/paintings/scripts/paintings.ts":
/*!*******************************************!*\
  !*** ./ts/paintings/scripts/paintings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var originSCSS_paintings_style_paintings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/paintings/style/paintings.scss */ \"./scss/paintings/style/paintings.scss\");\n/* harmony import */ var originSCSS_paintings_style_adap_adap_paintings_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! originSCSS/paintings/style/adap/adap-paintings.scss */ \"./scss/paintings/style/adap/adap-paintings.scss\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"../node_modules/swiper/swiper.min.css\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider */ \"./ts/paintings/scripts/components/slider.ts\");\n/* harmony import */ var _components_linkToAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/linkToAuthor */ \"./ts/paintings/scripts/components/linkToAuthor.ts\");\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    cursor = jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\"); // Adap paintings \n\nvar contentWidth = function contentWidth() {\n  var contentWidth = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").width() - jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation\").width();\n  if (page.width() >= 1000) jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container\").css(\"width\", contentWidth);\n  if (contentWidth === 0 || page.width() < 1000) jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container\").css(\"width\", \"100%\");\n};\n\npage.on(\"resize\", contentWidth);\npage.on(\"load\", contentWidth); // Link to painting \n\npage.on(\"load\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide__image-NOactive\").on(\"click\", function () {\n    var _this = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\").addClass(\"painting-click\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"painting-click\");\n    }, 700);\n    setTimeout(function () {\n      localStorage.setItem(\"typePaintingAnim\", \"paintingsToPainting\");\n      var namePicting = jquery__WEBPACK_IMPORTED_MODULE_0__(_this).attr(\"data-name\");\n      location.href = \"painting.html#\" + namePicting;\n    }, 1500);\n  });\n}); // Load animation\n\nsetTimeout(function () {\n  return jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").css(\"opacity\", \"1\").css(\"animation\", \"none\");\n}, 1000);\njquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide-active\").css(\"animation-delay\", \"0.15s\");\nsetTimeout(function () {\n  return cursor.css(\"opacity\", \"1\");\n}, 300);\n\n//# sourceURL=webpack:///./ts/paintings/scripts/paintings.ts?");

/***/ }),

/***/ "./scss/paintings/style/adap/adap-paintings.scss":
/*!*******************************************************!*\
  !*** ./scss/paintings/style/adap/adap-paintings.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/style/adap/adap-paintings.scss?");

/***/ }),

/***/ "./scss/paintings/style/paintings.scss":
/*!*********************************************!*\
  !*** ./scss/paintings/style/paintings.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/style/paintings.scss?");

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
/******/ 			"paintings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_swiper_swiper_min_css-node_modules_normalize_css_normalize_css-node_modu-2dbbff"], () => (__webpack_require__("./ts/paintings/scripts/paintings.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;