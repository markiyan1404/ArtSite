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

/***/ "./ts/game/scripts/game.ts":
/*!*********************************!*\
  !*** ./ts/game/scripts/game.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rest\": function() { return /* binding */ rest; },\n/* harmony export */   \"startGame\": function() { return /* binding */ startGame; }\n/* harmony export */ });\n/* harmony import */ var originSCSS_game_styles_game_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/game/styles/game.scss */ \"./scss/game/styles/game.scss\");\n/* harmony import */ var originSCSS_game_styles_adap_adap_game_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/game/styles/adap/adap-game.scss */ \"./scss/game/styles/adap/adap-game.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _start_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_window */ \"./ts/game/scripts/start_window.ts\");\n/* harmony import */ var _lobby_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lobby_window */ \"./ts/game/scripts/lobby_window.ts\");\n/* harmony import */ var _unlock_skin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unlock_skin */ \"./ts/game/scripts/unlock_skin.ts\");\n\n\n\n\n\n\n // Objects and record\n\nvar character = jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__character\"),\n    obstacl = jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__obstacle\");\nvar rest = 0; // get active color\n\nvar getActoveColor = function getActoveColor() {\n  var activeColor = localStorage.getItem(\"contrastColor1LS\");\n  if (activeColor === \"#fff\") return \"black\";else return \"white\";\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".colors__color\").on(\"click\", function () {\n  setTimeout(function () {\n    addSkins();\n  });\n}); // Add skins \n\nvar addSkins = function addSkins() {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__character\").attr(\"src\", \"/../img/game/choose_skin/characters/\".concat(getActoveColor(), \"/\").concat(getActiveSkins(\"characters\"), \".webp\"));\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".obstacle__block, .counter__image_obstacle\").attr(\"src\", \"/../img/game/choose_skin/obstacles/\".concat(getActoveColor(), \"/\").concat(getActiveSkins(\"obstacles\"), \".webp\"));\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__background\").attr(\"src\", \"/../img/game/choose_skin/backgrounds/\".concat(getActiveSkins(\"backgrounds\"), \".webp\"));\n};\n\nvar getActiveSkins = function getActiveSkins(activePath) {\n  var skins = JSON.parse(localStorage.getItem(\"skins\"))[activePath];\n  var allValues = Object.values(skins);\n\n  for (var i = 0; i < allValues.length; i++) {\n    if (allValues[i] === \"active\") {\n      return i;\n    }\n  }\n};\n\naddSkins(); // Start and stop game \n\nvar startGame = function startGame() {\n  rest = 0;\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".counter__rest\").html(String(rest));\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__game\").fadeIn(300);\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__game\").css(\"display\", \"flex\");\n    var defoltCharacterTop = character.offset().top;\n    var gameplay = setInterval(function () {\n      var obstacLeft = obstacl.offset().left,\n          characterTop = character.offset().top;\n\n      if (obstacLeft >= character.offset().left && obstacLeft <= character.offset().left + parseInt(character.css(\"width\")) && defoltCharacterTop * 0.8 < characterTop) {\n        clearInterval(gameplay);\n        clearInterval(obstacle);\n        clearInterval(addSpeed);\n        stopGame();\n      }\n    }, 10);\n    var speed, maxSpeed;\n    var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_2__(window).width();\n\n    if (windowWidth >= 1000) {\n      speed = 3;\n      maxSpeed = 9;\n    } else if (windowWidth >= 500 && windowWidth < 1000) {\n      speed = 2;\n      maxSpeed = 6;\n    } else {\n      speed = 1.5;\n      maxSpeed = 4;\n    }\n\n    var addSpeed = setInterval(function () {\n      speed += 0.01;\n      if (speed >= maxSpeed) speed = maxSpeed;\n      return speed;\n    }, 100); // run obstacle \n\n    var obstacleLeft = 0;\n    var obstacle = setInterval(function () {\n      var obstacle = jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__obstacle\"),\n          pushLeftNumber = jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__obstacle\").width() * 2;\n      obstacle.css(\"right\", obstacleLeft);\n      obstacleLeft += speed;\n\n      if (obstacleLeft >= jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__game\").width()) {\n        obstacle.css(\"right\", -pushLeftNumber);\n        obstacleLeft = -pushLeftNumber;\n        rest++;\n        jquery__WEBPACK_IMPORTED_MODULE_2__(\".counter__rest\").html(String(rest));\n        jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__new_skin\").remove();\n        (0,_unlock_skin__WEBPACK_IMPORTED_MODULE_5__.spawnSkins)(rest);\n      }\n    }, 0);\n  }, 100);\n}; // Jump\n\nvar jump = function jump() {\n  if (!character.hasClass(\"game__character-active\")) {\n    character.addClass(\"game__character-active\");\n    setTimeout(function () {\n      character.removeClass(\"game__character-active\");\n    }, 400);\n  }\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(window).on(\"click\", function () {\n  return jump();\n});\njquery__WEBPACK_IMPORTED_MODULE_2__(window).on(\"keydown\", function (event) {\n  var pressedKey = event.key;\n\n  if (pressedKey === \"w\" || pressedKey === \"ArrowUp\" || pressedKey === \" \") {\n    jump();\n  }\n}); // Stop game \n\nvar stopGame = function stopGame() {\n  character.css(\"top\", character.offset().top).addClass(\"character-game_over\");\n  var getRecord = Number(localStorage.getItem(\"game_record\"));\n  if (getRecord < rest || !getRecord) localStorage.setItem(\"game_record\", String(rest));\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__game\").fadeOut(300);\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".content__lobby\").fadeIn(300).css(\"display\", \"flex\");\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".game__new_skin\").remove();\n    character.removeClass(\"character-game_over\");\n    obstacl.css(\"right\", \"0\");\n    (0,_lobby_window__WEBPACK_IMPORTED_MODULE_4__.showResult)();\n    (0,_lobby_window__WEBPACK_IMPORTED_MODULE_4__.showRecord)();\n    (0,_unlock_skin__WEBPACK_IMPORTED_MODULE_5__.unlockSkins)();\n  }, 300);\n}; // Close game \n\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".content__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").addClass(\"closeGame\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").addClass(\"closeGame\");\n  }, 700);\n  setTimeout(function () {\n    location.href = \"/\";\n  }, 1500);\n});\n\n//# sourceURL=webpack:///./ts/game/scripts/game.ts?");

/***/ }),

/***/ "./ts/game/scripts/lobby_window.ts":
/*!*****************************************!*\
  !*** ./ts/game/scripts/lobby_window.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showResult\": function() { return /* binding */ showResult; },\n/* harmony export */   \"showRecord\": function() { return /* binding */ showRecord; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./ts/game/scripts/game.ts\");\n\n // Show result \n\nvar showResult = function showResult() {\n  var content = jquery__WEBPACK_IMPORTED_MODULE_0__(\".lobby__result\").html().split(\" -\")[0];\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".lobby__result\").html(\"\".concat(content, \" - \").concat(_game__WEBPACK_IMPORTED_MODULE_1__.rest));\n}; // Show record\n\nvar showRecord = function showRecord() {\n  var content = jquery__WEBPACK_IMPORTED_MODULE_0__(\".lobby__record\").html().split(\" -\")[0];\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".lobby__record\").html(\"\".concat(content, \" - \").concat(localStorage.getItem(\"game_record\")));\n}; // Restart\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".buttons__restart\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__lobby\").fadeOut(300);\n  setTimeout(function () {\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n  }, 300);\n}); // Skins \n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".buttons__skins\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__lobby\").fadeOut(350);\n  setTimeout(function () {\n    location.href = \"game_skins.html\";\n  }, 400);\n});\n\n//# sourceURL=webpack:///./ts/game/scripts/lobby_window.ts?");

/***/ }),

/***/ "./ts/game/scripts/start_window.ts":
/*!*****************************************!*\
  !*** ./ts/game/scripts/start_window.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./ts/game/scripts/game.ts\");\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".first_window__button\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__first_window\").addClass(\"content__first_window-hide\");\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__first_window\").css(\"display\", \"none\");\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n  }, 300);\n});\n\n//# sourceURL=webpack:///./ts/game/scripts/start_window.ts?");

/***/ }),

/***/ "./ts/game/scripts/unlock_skin.ts":
/*!****************************************!*\
  !*** ./ts/game/scripts/unlock_skin.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unlockSkins\": function() { return /* binding */ unlockSkins; },\n/* harmony export */   \"spawnSkins\": function() { return /* binding */ spawnSkins; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar skins = {\n  \"backgrounds\": {\n    0: \"active\",\n    5: \"close\",\n    20: \"close\",\n    35: \"close\",\n    50: \"close\",\n    70: \"close\"\n  },\n  \"characters\": {\n    0: \"active\",\n    10: \"close\",\n    25: \"close\",\n    40: \"close\",\n    55: \"close\",\n    75: \"close\"\n  },\n  \"obstacles\": {\n    0: \"active\",\n    15: \"close\",\n    30: \"close\",\n    45: \"close\",\n    60: \"close\",\n    80: \"close\"\n  }\n}; // Unlock skins after game \n\nvar isFirstGame = localStorage.getItem(\"skins\");\n\nif (isFirstGame === undefined || isFirstGame === null) {\n  localStorage.setItem(\"skins\", JSON.stringify(skins));\n}\n\nvar unlockSkins = function unlockSkins() {\n  var record = Number(localStorage.getItem(\"game_record\")),\n      allSkins = JSON.parse(localStorage.getItem(\"skins\")),\n      skinTypes = Object.keys(skins);\n\n  for (var s = 0; s < skinTypes.length; s++) {\n    var allKeys = Object.keys(allSkins[skinTypes[s]]),\n        allValues = Object.values(allSkins[skinTypes[s]]);\n\n    for (var a = 0; a < allKeys.length; a++) {\n      if (Number(allKeys[a]) <= record && allValues[a] !== \"active\" && record !== 0) {\n        allSkins[skinTypes[s]][allKeys[a]] = \"open\";\n        localStorage.setItem(\"skins\", JSON.stringify(allSkins));\n      }\n    }\n  }\n}; // Spawn skins on game\n\nvar spawnSkins = function spawnSkins(point) {\n  var allSkins = JSON.parse(localStorage.getItem(\"skins\")),\n      skinTypes = Object.keys(skins);\n\n  var getActiveColor = function getActiveColor() {\n    var activeColor = localStorage.getItem(\"contrastColor1LS\");\n    if (activeColor === \"#fff\") return \"black\";else return \"white\";\n  };\n\n  for (var s = 0; s < skinTypes.length; s++) {\n    var allKeys = Object.keys(allSkins[skinTypes[s]]),\n        allValues = Object.values(allSkins[skinTypes[s]]);\n\n    for (var a = 1; a < allKeys.length; a++) {\n      if (Number(allKeys[a]) === point + 1 && allValues[a] === \"close\") {\n        if (skinTypes[s] !== \"backgrounds\") {\n          jquery__WEBPACK_IMPORTED_MODULE_0__(\".game__obstacle\").append(\"<img src=\\\"/../img/game/choose_skin/\".concat(skinTypes[s], \"/\").concat(getActiveColor(), \"/\").concat(a, \".webp\\\" class=\\\"game__new_skin\\\"/>\"));\n        } else {\n          jquery__WEBPACK_IMPORTED_MODULE_0__(\".game__obstacle\").append(\"<img src=\\\"/../img/game/choose_skin/\".concat(skinTypes[s], \"/\").concat(a, \".webp\\\" class=\\\"game__new_skin\\\"/>\"));\n        }\n\n        skinTypes[s] === \"backgrounds\" ? jquery__WEBPACK_IMPORTED_MODULE_0__(\".game__new_skin\").addClass(\"game__new_skin-bg\") : jquery__WEBPACK_IMPORTED_MODULE_0__(\".game__new_skin\").removeClass(\"game__new_skin-bg\");\n      }\n    }\n  }\n\n  ;\n};\n\n//# sourceURL=webpack:///./ts/game/scripts/unlock_skin.ts?");

/***/ }),

/***/ "./scss/game/styles/adap/adap-game.scss":
/*!**********************************************!*\
  !*** ./scss/game/styles/adap/adap-game.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/game/styles/adap/adap-game.scss?");

/***/ }),

/***/ "./scss/game/styles/game.scss":
/*!************************************!*\
  !*** ./scss/game/styles/game.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/game/styles/game.scss?");

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
/******/ 			"game": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./ts/game/scripts/game.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;