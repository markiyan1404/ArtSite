/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/paintings/painting/components/arrows.ts":
/*!****************************************************!*\
  !*** ./ts/paintings/painting/components/arrows.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leftArrow\": () => (/* binding */ leftArrow),\n/* harmony export */   \"rightArrow\": () => (/* binding */ rightArrow),\n/* harmony export */   \"bottomArrowClick\": () => (/* binding */ bottomArrowClick),\n/* harmony export */   \"nearbyPages\": () => (/* binding */ nearbyPages)\n/* harmony export */ });\n/* harmony import */ var _painting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../painting */ \"./ts/paintings/painting/painting.ts\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_1__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_1__(\"body\"); // Arrow \n\nvar leftArrow = function leftArrow() {\n  var prevPaintingNum = Number((0,_painting__WEBPACK_IMPORTED_MODULE_0__.activePainting)()) - 1;\n  if (prevPaintingNum < 0) prevPaintingNum = (0,_painting__WEBPACK_IMPORTED_MODULE_0__.allPaintings)().length - 1;\n  var prevPainting = (0,_painting__WEBPACK_IMPORTED_MODULE_0__.allPaintings)()[prevPaintingNum];\n  return prevPainting;\n};\nvar rightArrow = function rightArrow() {\n  var nextPaintingNum = Number((0,_painting__WEBPACK_IMPORTED_MODULE_0__.activePainting)()) + 1;\n  if (nextPaintingNum === (0,_painting__WEBPACK_IMPORTED_MODULE_0__.allPaintings)().length) nextPaintingNum = 0;\n  var nextPainting = (0,_painting__WEBPACK_IMPORTED_MODULE_0__.allPaintings)()[nextPaintingNum];\n  return nextPainting;\n};\njquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow-left\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextPainting\", \"paintingToPainting\", \"arrow__prev-page-name\", leftArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeRight\", \"paintingToPainting swipeRightLoad\", \"arrow__next-page-name\", rightArrow());\n});\njquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow-right\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextPainting\", \"paintingToPainting\", \"arrow__next-page-name\", rightArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeLeft\", \"paintingToPainting\", \"arrow__prev-page-name\", leftArrow());\n});\nvar bottomArrowClick = function bottomArrowClick(addClass, classLS, arrowClass, linkFunction) {\n  if (body.hasClass(addClass)) return;\n  localStorage.setItem(\"typePaintingAnim\", classLS);\n  body.removeClass();\n  setTimeout(function () {\n    return body.addClass(addClass);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".\" + arrowClass).css(\"animation\", \"hide 0.3s forwards\");\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".cursor, #cursor\").addClass(\"close-cursor\");\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\"html\").animate({\n    scrollTop: \"0\"\n  });\n  setTimeout(function () {\n    localStorage.setItem(\"newPageArrowClick\", arrowClass);\n    location.href = \"./painting.html#\" + linkFunction;\n  }, 300);\n};\npage.on(\"popstate\", function () {\n  return location.reload();\n}); // Generate hover arrow text\n\nvar nearbyPages = function nearbyPages(direction, arrowName) {\n  var activeLanguageLS = localStorage.getItem(\"lang\");\n  __webpack_require__(\"./content/paintings/painting lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(direction, \".json\")).then(function (langJSON) {\n    var currLangExport = Object.entries(langJSON.default)[Object.keys(langJSON.default).indexOf(activeLanguageLS)][1],\n        nearbyPageName = currLangExport.main_title;\n    jquery__WEBPACK_IMPORTED_MODULE_1__(arrowName).html(nearbyPageName);\n  });\n}; // Show arrow text on load\n\npage.on(\"load\", function () {\n  var newPageArrowClickLS = localStorage.getItem(\"newPageArrowClick\");\n  var activeCursorLS = JSON.parse(localStorage.getItem(\"activeCursor\"));\n\n  if (activeCursorLS) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(\".\" + newPageArrowClickLS).css(\"opacity\", \"1\").css(\"display\", \"block\");\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow\").on(\"mouseleave\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css({\n      \"animation\": \"hide 0.4s forwards\",\n      \"display\": \"none\"\n    });\n    localStorage.setItem(\"activeCursor\", \"false\");\n  });\n  var leaveToArrow = false;\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".navigating__arrow\").on(\"mouseover\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css({\n      \"animation\": \"show 0.4s forwards\",\n      \"display\": \"block\"\n    });\n    leaveToArrow = true;\n\n    if (leaveToArrow && jquery__WEBPACK_IMPORTED_MODULE_1__(\".cursor\").hasClass(\"activeCursor\")) {\n      jquery__WEBPACK_IMPORTED_MODULE_1__(e.target.childNodes[0]).css(\"animation\", \"none\");\n    }\n\n    localStorage.setItem(\"activeCursor\", \"true\");\n  });\n  localStorage.removeItem(\"newPageArrowClick\");\n});\n\n//# sourceURL=webpack:///./ts/paintings/painting/components/arrows.ts?");

/***/ }),

/***/ "./ts/paintings/painting/components/swipe.ts":
/*!***************************************************!*\
  !*** ./ts/paintings/painting/components/swipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows */ \"./ts/paintings/painting/components/arrows.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i; // Swipe on phone\n\nsetTimeout(function () {\n  return localStorage.setItem(\"typePaintingAnim\", \"paintingToPainting\");\n}, 700);\nvar startingX, startingY, movingX, movingY;\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchstart\", function (event) {\n  startingX = event.touches[0].clientX;\n  startingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchmove\", function (event) {\n  movingX = event.touches[0].clientX;\n  movingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchend\", function () {\n  var windowWidth = page.width(),\n      checkPhone = phone.test(navigator.userAgent),\n      navWindowDisplay = jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu, .languages__choice, .colors__active\").css(\"display\");\n\n  if (startingX + 100 < movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeLeft\", \"paintingToPainting\", \"arrow__prev-page-name\", (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.leftArrow)());\n  }\n\n  if (startingX - 100 > movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeRight\", \"paintingToPainting swipeRightLoad\", \"arrow__next-page-name\", (0,_arrows__WEBPACK_IMPORTED_MODULE_1__.rightArrow)());\n  }\n});\n\n//# sourceURL=webpack:///./ts/paintings/painting/components/swipe.ts?");

/***/ }),

/***/ "./ts/paintings/painting/components/zoom.ts":
/*!**************************************************!*\
  !*** ./ts/paintings/painting/components/zoom.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_image_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-image-zoom */ \"../node_modules/js-image-zoom/js-image-zoom.js\");\n/* harmony import */ var js_image_zoom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_image_zoom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    zoomArea = jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area\"),\n    zoomImage = jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-image\"),\n    informationImage = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#information__image\"),\n    phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i; // Zoom image\n\nvar imageSize = function imageSize() {\n  var size = jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__information\").width() * 0.33;\n  return size;\n};\n\nvar zoom = function zoom() {\n  var options = {\n    width: imageSize(),\n    zoomWidth: imageSize(),\n    offset: {\n      vertical: 0,\n      horizontal: 10\n    }\n  };\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image\").remove();\n  new (js_image_zoom__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById(\"information__image\"), options);\n};\n\npage.on(\"load\", function () {\n  zoom();\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image\").remove();\n  setTimeout(function () {\n    return zoom();\n  }, 700);\n});\npage.on(\"resize\", function () {\n  return setTimeout(function () {\n    return zoom();\n  }, 50);\n});\ninformationImage.on(\"mousemove\", function (e) {\n  var checkPhone = phone.test(navigator.userAgent);\n\n  if (checkPhone || page.width() <= 1000) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image\").remove();\n  } else {\n    var zoomImageiD = document.getElementById(\"js-image-zoom__zoomed-image\");\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).hasClass(\"js-image-zoom__zoomed-image\")) {\n      hideZoomImage(zoomImageiD);\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").removeClass(\"activeCursore2\");\n      return;\n    }\n\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-image\").attr(\"id\", \"js-image-zoom__zoomed-image\");\n    if (zoomImageiD) zoomImageiD.style.setProperty(\"display\", \"block\", \"important\");\n    removeAddActiveClass(\"zoom-area-NoActive\", \"zoom-area-active\", \"zoom-image-Noactive\", \"zoom-image-active\");\n  }\n});\ninformationImage.on(\"mouseleave\", function (e) {\n  var checkPhone = phone.test(navigator.userAgent);\n\n  if (checkPhone || page.width() <= 1000) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image\").remove();\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(zoomImage).attr(\"id\", \"js-image-zoom__zoomed-image\");\n    var zoomImageiD = document.getElementById(\"js-image-zoom__zoomed-image\");\n    hideZoomImage(zoomImageiD);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").removeClass(\"activeCursore2\");\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).hasClass(\"js-image-zoom__zoomed-image\")) return;\n    removeAddActiveClass(\"zoom-area-active\", \"zoom-area-NoActive\", \"zoom-image-active\", \"zoom-image-Noactive\");\n  }\n});\n\nvar removeAddActiveClass = function removeAddActiveClass(removeClass1, addClass1, removeClass2, addClass2) {\n  var zoomArea = jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-area\"),\n      zoomImage = jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-image\");\n  zoomArea.removeClass(removeClass1).addClass(addClass1);\n  zoomImage.removeClass(removeClass2).addClass(addClass2);\n};\n\nvar hideZoomImage = function hideZoomImage(zoomImageiD) {\n  setTimeout(function () {\n    zoomImageiD.style.setProperty(\"display\", \"none\", \"important\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".js-image-zoom__zoomed-image\").removeClass(\"zoom-image-Noactive\");\n  }, 150);\n};\n\n//# sourceURL=webpack:///./ts/paintings/painting/components/zoom.ts?");

/***/ }),

/***/ "./ts/paintings/painting/painting.ts":
/*!*******************************************!*\
  !*** ./ts/paintings/painting/painting.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allPaintings\": () => (/* binding */ allPaintings),\n/* harmony export */   \"activePainting\": () => (/* binding */ activePainting)\n/* harmony export */ });\n/* harmony import */ var originSCSS_paintings_painting_painting_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/paintings/painting/painting.scss */ \"./scss/paintings/painting/painting.scss\");\n/* harmony import */ var originSCSS_paintings_painting_adap_adap_painting_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/paintings/painting/adap/adap-painting.scss */ \"./scss/paintings/painting/adap/adap-painting.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/arrows */ \"./ts/paintings/painting/components/arrows.ts\");\n/* harmony import */ var _scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/components/data-name */ \"./ts/paintings/scripts/components/data-name.ts\");\n/* harmony import */ var _components_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/zoom */ \"./ts/paintings/painting/components/zoom.ts\");\n/* harmony import */ var _components_swipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/swipe */ \"./ts/paintings/painting/components/swipe.ts\");\n\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_2__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\"),\n    informationImage = jquery__WEBPACK_IMPORTED_MODULE_2__(\"#information__image\"); // Get page identification key \n\nvar key = location.href.split(\"#\")[1];\nbody.attr(\"data-name\", key); // New user\n\nvar newUser = function newUser() {\n  if (localStorage.getItem(\"allPaintings\")) return;\n  var allPaintings = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__.allPaintingsName),\n      allAuthors = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_4__.allAuthorsName);\n  localStorage.setItem(\"allPaintings\", allPaintings);\n  localStorage.setItem(\"allAuthors\", allAuthors);\n};\n\nnewUser(); // Close page \n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".content__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").addClass(\"allPaintings\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").addClass(\"allPaintings\");\n  }, 700);\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n  setTimeout(function () {\n    return location.href = \"./paintings.html\";\n  }, 1500);\n}); // Get image\n\npage.on(\"load\", function () {\n  return jquery__WEBPACK_IMPORTED_MODULE_2__(\"#information__image img\").attr(\"src\", \"./img/paintings/\" + key + \".webp\");\n}); // Active painting\n\nvar allPaintings = function allPaintings() {\n  var allPaintingsLS = localStorage.getItem(\"allPaintings\"),\n      allPaintings = allPaintingsLS.split(\",\");\n  return allPaintings;\n};\nvar activePainting = function activePainting() {\n  var lastPainting = String(allPaintings().indexOf(key)),\n      lastPaintingName = allPaintings()[lastPainting];\n  localStorage.setItem(\"lastPainting\", lastPainting);\n  localStorage.setItem(\"lastPaintingName\", lastPaintingName);\n  return lastPainting;\n};\nactivePainting(); // Generate link to author\n\n__webpack_require__(\"./content/paintings/painting lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(key, \".json\")).then(function (langJSON) {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".description__link\").attr(\"data-author-link\", langJSON.specifical.authorLink);\n});\njquery__WEBPACK_IMPORTED_MODULE_2__(\".description__link\").on(\"click\", function () {\n  body.removeClass();\n  setTimeout(function () {\n    return body.addClass(\"paintingAuthor\");\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n  var activeAuthor = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr(\"data-author-link\");\n  localStorage.setItem(\"typeAuthorAnim\", \"paintingToAuthor\");\n  setTimeout(function () {\n    return location.href = \"./paintings_author.html#\" + activeAuthor;\n  }, 500);\n}); // Get and change body class\n\nvar checkBodyClass = function checkBodyClass() {\n  var getTypeAnimLS = localStorage.getItem(\"typePaintingAnim\");\n  getTypeAnimLS === null || getTypeAnimLS === \"authorToAuthor\" ? body.addClass(\"paintingToPainting\") : body.addClass(getTypeAnimLS);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".languages__choice\").on(\"click\", function () {\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.leftArrow)(), \".arrow__prev-page-name\");\n});\ncheckBodyClass();\npage.on(\"load\", function () {\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.nearbyPages)((0,_components_arrows__WEBPACK_IMPORTED_MODULE_3__.leftArrow)(), \".arrow__prev-page-name\");\n}); // Adap painting \n\nif (page.width() <= 1000) informationImage.removeClass(\"mouse-active2\");\npage.on(\"resize\", function () {\n  page.width() <= 1000 ? informationImage.removeClass(\"mouse-active2\") : informationImage.addClass(\"mouse-active2\");\n});\n\n//# sourceURL=webpack:///./ts/paintings/painting/painting.ts?");

/***/ }),

/***/ "./ts/paintings/scripts/components/data-name.ts":
/*!******************************************************!*\
  !*** ./ts/paintings/scripts/components/data-name.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allPaintingsName\": () => (/* binding */ allPaintingsName),\n/* harmony export */   \"allAuthorsName\": () => (/* binding */ allAuthorsName)\n/* harmony export */ });\nvar allPaintingsName = [\"arnolfini-portrait\", \"birth-of-venus\", \"mona-lisa\", \"creation-of-adam\", \"garden-of-earthly-delights\", \"harvesters\", \"girl-with-a-pearl-earring\", \"raft-of-the-medusa\", \"wanderer-above-the-sea-of-fog\", \"breakfast-on-the-grass\", \"gross-clinic\", \"luncheon-of-the-boating-party\", \"self-portrait-with-bandaged-ear\", \"starry-night\", \"son-of-man\"],\n    allAuthorsName = [\"jan-van-eyck\", \"sandro-botticelli\", \"leonardo-da-vinci\", \"michelangelo-buonarroti\", \"hieronymus-bosch\", \"pieter-bruegel\", \"johannes-vermeer\", \"theodore-gericault\", \"caspar-david-friedrich\", \"edouard-manet\", \"thomas-eakins\", \"pierre-auguste-renoir\", \"vincent-van-gogh\", \"rene-magritte\"];\n\n//# sourceURL=webpack:///./ts/paintings/scripts/components/data-name.ts?");

/***/ }),

/***/ "./scss/paintings/painting/adap/adap-painting.scss":
/*!*********************************************************!*\
  !*** ./scss/paintings/painting/adap/adap-painting.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/painting/adap/adap-painting.scss?");

/***/ }),

/***/ "./scss/paintings/painting/painting.scss":
/*!***********************************************!*\
  !*** ./scss/paintings/painting/painting.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/painting/painting.scss?");

/***/ }),

/***/ "./content/paintings/painting lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************************!*\
  !*** ./content/paintings/painting/ lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./arnolfini-portrait.json\": [\n\t\t\"./content/paintings/painting/arnolfini-portrait.json\",\n\t\t\"content_paintings_painting_arnolfini-portrait_json\"\n\t],\n\t\"./birth-of-venus.json\": [\n\t\t\"./content/paintings/painting/birth-of-venus.json\",\n\t\t\"content_paintings_painting_birth-of-venus_json\"\n\t],\n\t\"./breakfast-on-the-grass.json\": [\n\t\t\"./content/paintings/painting/breakfast-on-the-grass.json\",\n\t\t\"content_paintings_painting_breakfast-on-the-grass_json\"\n\t],\n\t\"./creation-of-adam.json\": [\n\t\t\"./content/paintings/painting/creation-of-adam.json\",\n\t\t\"content_paintings_painting_creation-of-adam_json\"\n\t],\n\t\"./garden-of-earthly-delights.json\": [\n\t\t\"./content/paintings/painting/garden-of-earthly-delights.json\",\n\t\t\"content_paintings_painting_garden-of-earthly-delights_json\"\n\t],\n\t\"./girl-with-a-pearl-earring.json\": [\n\t\t\"./content/paintings/painting/girl-with-a-pearl-earring.json\",\n\t\t\"content_paintings_painting_girl-with-a-pearl-earring_json\"\n\t],\n\t\"./gross-clinic.json\": [\n\t\t\"./content/paintings/painting/gross-clinic.json\",\n\t\t\"content_paintings_painting_gross-clinic_json\"\n\t],\n\t\"./harvesters.json\": [\n\t\t\"./content/paintings/painting/harvesters.json\",\n\t\t\"content_paintings_painting_harvesters_json\"\n\t],\n\t\"./luncheon-of-the-boating-party.json\": [\n\t\t\"./content/paintings/painting/luncheon-of-the-boating-party.json\",\n\t\t\"content_paintings_painting_luncheon-of-the-boating-party_json\"\n\t],\n\t\"./mona-lisa.json\": [\n\t\t\"./content/paintings/painting/mona-lisa.json\",\n\t\t\"content_paintings_painting_mona-lisa_json\"\n\t],\n\t\"./raft-of-the-medusa.json\": [\n\t\t\"./content/paintings/painting/raft-of-the-medusa.json\",\n\t\t\"content_paintings_painting_raft-of-the-medusa_json\"\n\t],\n\t\"./self-portrait-with-bandaged-ear.json\": [\n\t\t\"./content/paintings/painting/self-portrait-with-bandaged-ear.json\",\n\t\t\"content_paintings_painting_self-portrait-with-bandaged-ear_json\"\n\t],\n\t\"./son-of-man.json\": [\n\t\t\"./content/paintings/painting/son-of-man.json\",\n\t\t\"content_paintings_painting_son-of-man_json\"\n\t],\n\t\"./starry-night.json\": [\n\t\t\"./content/paintings/painting/starry-night.json\",\n\t\t\"content_paintings_painting_starry-night_json\"\n\t],\n\t\"./wanderer-above-the-sea-of-fog.json\": [\n\t\t\"./content/paintings/painting/wanderer-above-the-sea-of-fog.json\",\n\t\t\"content_paintings_painting_wanderer-above-the-sea-of-fog_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./content/paintings/painting lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./content/paintings/painting/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
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
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "./js/" + chunkId + "..js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
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
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 			"painting": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
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
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_js-image-zoom_js-image-zoom_js"], () => (__webpack_require__("./ts/paintings/painting/painting.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;