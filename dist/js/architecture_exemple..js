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

/***/ "./ts/architecture/exemple/exemple.ts":
/*!********************************************!*\
  !*** ./ts/architecture/exemple/exemple.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var originSCSS_architecture_exemple_exemple_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/architecture/exemple/exemple.scss */ \"./scss/architecture/exemple/exemple.scss\");\n/* harmony import */ var originSCSS_architecture_exemple_adap_adap_exemple_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/architecture/exemple/adap/adap-exemple.scss */ \"./scss/architecture/exemple/adap/adap-exemple.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var originTS_global_scripts_slowedScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! originTS/global_scripts/slowedScroll */ \"./ts/global_scripts/slowedScroll.ts\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"../node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger.js */ \"../node_modules/gsap/ScrollTrigger.js\");\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_2__(window);\nvar key = location.href.split(\"#\")[1];\njquery__WEBPACK_IMPORTED_MODULE_2__(\"body\").attr(\"data-name\", key); // Loader animation\n\nvar loaderContetnt = function loaderContetnt() {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\").addClass(\"loadedPage\");\n  (0,originTS_global_scripts_slowedScroll__WEBPACK_IMPORTED_MODULE_3__.updateScroller)(); // page.focus();\n\n  page.on(\"resize\", originTS_global_scripts_slowedScroll__WEBPACK_IMPORTED_MODULE_3__.onResize);\n  page.on(\"scroll\", originTS_global_scripts_slowedScroll__WEBPACK_IMPORTED_MODULE_3__.onScroll);\n};\n\npage.on(\"load\", function () {\n  setTimeout(function () {\n    loaderContetnt();\n    paralax();\n  }, 200);\n}); // Close \n\nvar lastArchitectureType = localStorage.getItem(\"lastArchitectureType\");\njquery__WEBPACK_IMPORTED_MODULE_2__(\".scroll-container__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\").addClass(\"exemplesToType\");\n  setTimeout(function () {\n    location.href = \"architecture_type.html#\" + lastArchitectureType;\n  }, 300);\n}); // Paralax \n\ngsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\n\nvar maxScroll = function maxScroll() {\n  var endOfParalax = document.querySelector(\".scroll-container__years\"),\n      maxScrollNum = gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.maxScroll(endOfParalax);\n  return maxScrollNum;\n};\n\nvar TitleParalaxSpeed = 75;\n\nfunction resize() {\n  if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() < 1000) {\n    TitleParalaxSpeed = 0;\n  } else {\n    TitleParalaxSpeed = 75;\n  }\n}\n\ngsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.addEventListener(\"refreshInit\", resize);\nresize();\n\nvar paralax = function paralax() {\n  gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\"[data-speed]\", {\n    y: function y() {\n      return TitleParalaxSpeed * maxScroll();\n    },\n    scrollTrigger: {\n      scrub: 1.3,\n      invalidateOnRefresh: true,\n      start: \"top top\",\n      end: \"bottom\"\n    }\n  });\n};\n\nparalax(); // Go to top \n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".toTop\").on(\"click\", function () {\n  return jquery__WEBPACK_IMPORTED_MODULE_2__(\"html\").animate({\n    scrollTop: 0\n  }, 700);\n}); // Paralax for description\n\ngsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.toArray(\".description__block\").forEach(function (description__block) {\n  gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(description__block, {\n    backgroundPositionY: \"50%\",\n    ease: \"none\",\n    scrollTrigger: {\n      trigger: description__block,\n      start: \"top bottom\",\n      end: \"bottom top\",\n      scrub: 1.5\n    }\n  });\n}); // Add way for images\n\nvar getExempleImages = function getExempleImages() {\n  var allBlocks = jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__block\"),\n      allImages = jquery__WEBPACK_IMPORTED_MODULE_2__(\".block__image\");\n\n  for (var i = 0; i < allImages.length; i++) {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(allImages[i]).attr(\"src\", \"img/architecture/exemple/descriptions_images/\".concat(key, \"/\").concat(key, \"-\").concat([i], \".webp\"));\n    jquery__WEBPACK_IMPORTED_MODULE_2__(allBlocks[i]).css(\"background-image\", \"url(img/architecture/exemple/descriptions_images/\".concat(key, \"/backgrounds/bg-\").concat(key, \"-\").concat([i], \".webp)\"));\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".big_image__img\").attr(\"src\", \"img/architecture/exemple/big_images/\".concat(key, \".webp\"));\n};\n\ngetExempleImages();\n\n//# sourceURL=webpack:///./ts/architecture/exemple/exemple.ts?");

/***/ }),

/***/ "./ts/global_scripts/slowedScroll.ts":
/*!*******************************************!*\
  !*** ./ts/global_scripts/slowedScroll.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateScroller\": function() { return /* binding */ updateScroller; },\n/* harmony export */   \"onScroll\": function() { return /* binding */ onScroll; },\n/* harmony export */   \"onResize\": function() { return /* binding */ onResize; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"../node_modules/gsap/index.js\");\n\n // Slowed scroll\n\n;\nvar scroller = {\n  target: jquery__WEBPACK_IMPORTED_MODULE_0__(\"#scroll-container\"),\n  ease: 0.045,\n  // scroll speed\n  endY: 0,\n  y: 0,\n  resizeRequest: 1,\n  scrollRequest: 0\n};\nif (jquery__WEBPACK_IMPORTED_MODULE_0__(window).width() < 1000) scroller.ease = 0.70;\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"resize\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(window).width() < 1000 ? scroller.ease = 0.70 : scroller.ease = 0.045;\n});\nvar requestId = null;\ngsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(scroller.target, {\n  rotation: 0,\n  force3D: true\n});\nvar updateScroller = function updateScroller() {\n  var html = jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\"),\n      body = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\"),\n      resized = scroller.resizeRequest > 0;\n\n  if (resized) {\n    var height = scroller.target.innerHeight();\n    body.css(\"height\", height);\n    scroller.resizeRequest = 0;\n  }\n\n  var scrollY = jquery__WEBPACK_IMPORTED_MODULE_0__(window).scrollTop() || html.scrollTop() || body.scrollTop() || 0;\n  scroller.endY = scrollY;\n  scroller.y += (scrollY - scroller.y) * scroller.ease;\n\n  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {\n    scroller.y = scrollY;\n    scroller.scrollRequest = 0;\n  }\n\n  gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(scroller.target, {\n    y: -scroller.y\n  });\n  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;\n};\nvar onScroll = function onScroll() {\n  scroller.scrollRequest++;\n\n  if (!requestId) {\n    requestId = requestAnimationFrame(updateScroller);\n  }\n};\nvar onResize = function onResize() {\n  setTimeout(function () {\n    scroller.resizeRequest++;\n    requestId = requestAnimationFrame(updateScroller);\n  }, 270);\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var chengsWindowHeightBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language, .point__child, .next-slide__arrow, .image-paint__button\");\n  chengsWindowHeightBlocks.on(\"click\", function () {\n    updateScroller();\n    window.focus();\n    onResize();\n  });\n}); // Add overflow: auto; and add position: static; plus change top\n\n//# sourceURL=webpack:///./ts/global_scripts/slowedScroll.ts?");

/***/ }),

/***/ "./scss/architecture/exemple/adap/adap-exemple.scss":
/*!**********************************************************!*\
  !*** ./scss/architecture/exemple/adap/adap-exemple.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/architecture/exemple/adap/adap-exemple.scss?");

/***/ }),

/***/ "./scss/architecture/exemple/exemple.scss":
/*!************************************************!*\
  !*** ./scss/architecture/exemple/exemple.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/architecture/exemple/exemple.scss?");

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
/******/ 			"architecture_exemple": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js"], function() { return __webpack_require__("./ts/architecture/exemple/exemple.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;