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

/***/ "./ts/paintings/author/author.ts":
/*!***************************************!*\
  !*** ./ts/paintings/author/author.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allAuthors\": () => (/* binding */ allAuthors),\n/* harmony export */   \"activeAuthor\": () => (/* binding */ activeAuthor)\n/* harmony export */ });\n/* harmony import */ var originSCSS_paintings_author_author_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/paintings/author/author.scss */ \"./scss/paintings/author/author.scss\");\n/* harmony import */ var originSCSS_paintings_author_adap_adap_author_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/paintings/author/adap/adap-author.scss */ \"./scss/paintings/author/adap/adap-author.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_components_data_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/components/data-name */ \"./ts/paintings/scripts/components/data-name.ts\");\n/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/arrow */ \"./ts/paintings/author/components/arrow.ts\");\n/* harmony import */ var _components_swipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/swipe */ \"./ts/paintings/author/components/swipe.ts\");\n/* harmony import */ var _components_years__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/years */ \"./ts/paintings/author/components/years.ts\");\n/* harmony import */ var _components_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/close */ \"./ts/paintings/author/components/close.ts\");\n\n\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_2__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\"); // Get page identification key \n\nvar key = location.href.split(\"#\")[1];\nbody.attr(\"data-name\", key); // New user \n\nvar newUser = function newUser() {\n  if (localStorage.getItem(\"allAuthors\")) return;\n  var allPaintings = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_3__.allPaintingsName),\n      allAuthors = String(_scripts_components_data_name__WEBPACK_IMPORTED_MODULE_3__.allAuthorsName);\n  localStorage.setItem(\"allPaintings\", allPaintings);\n  localStorage.setItem(\"allAuthors\", allAuthors);\n};\n\nnewUser(); // Close author \n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".content__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n  localStorage.setItem(\"typePaintingAnim\", \"paintingsToPainting\");\n  body.removeClass();\n  setTimeout(function () {\n    return body.addClass(\"authorToPainting\");\n  });\n  setTimeout(function () {\n    var lastPaintingName = localStorage.getItem(\"lastPaintingName\");\n    lastPaintingName === null ? location.href = \"./paintings.html\" : location.href = \"./painting.html#\" + lastPaintingName;\n  }, 810);\n});\njquery__WEBPACK_IMPORTED_MODULE_2__(\".content__information img\").attr(\"src\", \"./img/paintings/authors/\" + key + \".webp\"); // Active author\n\nvar allAuthors = function allAuthors() {\n  var allAuthorsLS = localStorage.getItem(\"allAuthors\"),\n      allAuthors = allAuthorsLS.split(\",\");\n  return allAuthors;\n};\nvar activeAuthor = function activeAuthor() {\n  var lastAuthor = String(allAuthors().indexOf(key));\n  localStorage.setItem(\"lastAuthor\", lastAuthor);\n  return lastAuthor;\n};\nactiveAuthor(); // Get and change body class\n\nvar checkBodyClass = function checkBodyClass() {\n  var getTypeAnim = localStorage.getItem(\"typeAuthorAnim\");\n  getTypeAnim === null ? body.addClass(\"authorToAuthor\") : body.addClass(getTypeAnim);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_2__(\".languages__choice\").on(\"click\", function () {\n  (0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.nearbyPages)((0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.nearbyPages)((0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.leftArrow)(), \".arrow__prev-page-name\");\n});\ncheckBodyClass();\npage.on(\"load\", function () {\n  checkBodyClass();\n  (0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.nearbyPages)((0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.rightArrow)(), \".arrow__next-page-name\");\n  (0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.nearbyPages)((0,_components_arrow__WEBPACK_IMPORTED_MODULE_4__.leftArrow)(), \".arrow__prev-page-name\");\n});\n\n//# sourceURL=webpack:///./ts/paintings/author/author.ts?");

/***/ }),

/***/ "./ts/paintings/author/components/arrow.ts":
/*!*************************************************!*\
  !*** ./ts/paintings/author/components/arrow.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leftArrow\": () => (/* binding */ leftArrow),\n/* harmony export */   \"rightArrow\": () => (/* binding */ rightArrow),\n/* harmony export */   \"bottomArrowClick\": () => (/* binding */ bottomArrowClick),\n/* harmony export */   \"nearbyPages\": () => (/* binding */ nearbyPages)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author */ \"./ts/paintings/author/author.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\"); // Arrow \n\nvar leftArrow = function leftArrow() {\n  var prevAuthorNum = Number((0,_author__WEBPACK_IMPORTED_MODULE_1__.activeAuthor)()) - 1;\n  if (prevAuthorNum < 0) prevAuthorNum = (0,_author__WEBPACK_IMPORTED_MODULE_1__.allAuthors)().length - 1;\n  var prevAuthor = (0,_author__WEBPACK_IMPORTED_MODULE_1__.allAuthors)()[prevAuthorNum];\n  return prevAuthor;\n};\nvar rightArrow = function rightArrow() {\n  var prevAuthorNum = Number((0,_author__WEBPACK_IMPORTED_MODULE_1__.activeAuthor)()) + 1;\n  if (prevAuthorNum === (0,_author__WEBPACK_IMPORTED_MODULE_1__.allAuthors)().length) prevAuthorNum = 0;\n  var nextAuthor = (0,_author__WEBPACK_IMPORTED_MODULE_1__.allAuthors)()[prevAuthorNum];\n  return nextAuthor;\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigating__arrow-left\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextAuthor\", \"authorToAuthor\", \"arrow__prev-page-name\", leftArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeRight\", \"authorToAuthor swipeRightLoad\", \"arrow__next-page-name\", rightArrow());\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigating__arrow-right\").on(\"click\", function () {\n  var windowWidth = page.width();\n  bottomArrowClick(\"nextAuthor\", \"authorToAuthor\", \"arrow__next-page-name\", rightArrow());\n  if (windowWidth < 1000) bottomArrowClick(\"swipeLeft\", \"authorToAuthor\", \"arrow__prev-page-name\", leftArrow());\n});\nvar bottomArrowClick = function bottomArrowClick(addClass, classLS, arrowClass, linkFunction) {\n  if (body.hasClass(addClass)) return;\n  localStorage.setItem(\"typeAuthorAnim\", classLS);\n  body.removeClass();\n  setTimeout(function () {\n    return body.addClass(addClass);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").addClass(\"close-cursor\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + arrowClass).css(\"animation\", \"hide 0.3s forwards\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\").animate({\n    scrollTop: \"0\"\n  });\n  setTimeout(function () {\n    localStorage.setItem(\"newPageArrowClick\", arrowClass);\n    location.href = \"./paintings_author.html#\" + linkFunction;\n  }, 300);\n};\npage.on(\"popstate\", function () {\n  return location.reload();\n}); // Hover arrow\n\nvar nearbyPages = function nearbyPages(direction, arrowName) {\n  var activeLanguageLS = localStorage.getItem(\"lang\");\n  __webpack_require__(\"./content/paintings/author lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\" + direction + \".json\").then(function (langJSON) {\n    var currLangExport = Object.entries(langJSON.default)[Object.keys(langJSON.default).indexOf(activeLanguageLS)][1],\n        nearbyPageName = currLangExport.main_title;\n    jquery__WEBPACK_IMPORTED_MODULE_0__(arrowName).html(nearbyPageName);\n  });\n}; // Show arrow text on load\n\npage.on(\"load\", function () {\n  var newPageArrowClickLS = localStorage.getItem(\"newPageArrowClick\"),\n      activeCursorLS = localStorage.getItem(\"activeCursor\");\n\n  if (newPageArrowClickLS !== null && activeCursorLS !== \"false\") {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + newPageArrowClickLS).css(\"opacity\", \"1\").css(\"display\", \"block\");\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigating__arrow\").on(\"mouseleave\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(e.target.childNodes[0]).css({\n      \"animation\": \"hide 0.4s forwards\",\n      \"display\": \"none\"\n    });\n    localStorage.setItem(\"activeCursor\", \"false\");\n  });\n  var leaveToArrow = false;\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigating__arrow\").on(\"mouseover\", function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(e.target.childNodes[0]).css({\n      \"animation\": \"show 0.4s forwards\",\n      \"display\": \"block\"\n    });\n    leaveToArrow = true;\n\n    if (leaveToArrow && jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\").hasClass(\"activeCursor\")) {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(e.target.childNodes[0]).css(\"animation\", \"none\");\n    }\n\n    localStorage.setItem(\"activeCursor\", \"true\");\n  });\n  localStorage.removeItem(\"newPageArrowClick\");\n});\n\n//# sourceURL=webpack:///./ts/paintings/author/components/arrow.ts?");

/***/ }),

/***/ "./ts/paintings/author/components/close.ts":
/*!*************************************************!*\
  !*** ./ts/paintings/author/components/close.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _years__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./years */ \"./ts/paintings/author/components/years.ts\");\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".content__close\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line-show\").removeClass(\"year-line-show\");\n  (0,_years__WEBPACK_IMPORTED_MODULE_1__.allLinesAnim)();\n});\n\n//# sourceURL=webpack:///./ts/paintings/author/components/close.ts?");

/***/ }),

/***/ "./ts/paintings/author/components/swipe.ts":
/*!*************************************************!*\
  !*** ./ts/paintings/author/components/swipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow */ \"./ts/paintings/author/components/arrow.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Swipe on phone\n\nsetTimeout(function () {\n  return localStorage.setItem(\"typePaintingAnim\", \"authorToAuthor\");\n}, 700);\nvar startingX, startingY, movingX, movingY;\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchstart\", function (event) {\n  startingX = event.touches[0].clientX;\n  startingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchmove\", function (event) {\n  movingX = event.touches[0].clientX;\n  movingY = event.touches[0].clientY;\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"touchend\", function () {\n  var windowWidth = page.width(),\n      checkPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),\n      navWindowDisplay = jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu, .languages__choice, .colors__active\").css(\"display\");\n\n  if (startingX + 100 < movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrow__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeLeft\", \"authorToAuthor swipeLeftLoad\", \"arrow__prev-page-name\", (0,_arrow__WEBPACK_IMPORTED_MODULE_1__.leftArrow)());\n  }\n\n  if (startingX - 100 > movingX && checkPhone && navWindowDisplay === \"none\" && windowWidth < 1000) {\n    (0,_arrow__WEBPACK_IMPORTED_MODULE_1__.bottomArrowClick)(\"swipeRight\", \"authorToAuthor swipeRightLoad\", \"arrow__next-page-name\", (0,_arrow__WEBPACK_IMPORTED_MODULE_1__.rightArrow)());\n  }\n});\n\n//# sourceURL=webpack:///./ts/paintings/author/components/swipe.ts?");

/***/ }),

/***/ "./ts/paintings/author/components/years.ts":
/*!*************************************************!*\
  !*** ./ts/paintings/author/components/years.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allLinesAnim\": () => (/* binding */ allLinesAnim)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    body = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\"),\n    windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0__(window).width(),\n    widthHeight = jquery__WEBPACK_IMPORTED_MODULE_0__(window).height(); // Creation years\n\nvar creationYears = function creationYears() {\n  var floatNumberYears = 6,\n      activeNumberYears = 5,\n      yearsBlock = jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__year\");\n\n  for (var leftLinesNum = 1; leftLinesNum <= floatNumberYears; leftLinesNum++) {\n    yearsBlock.append(\"<div class=\\\"year-line year-line-\".concat(leftLinesNum, \"\\\"></div>\"));\n  }\n\n  for (var activeLinesNum = 1; activeLinesNum <= activeNumberYears; activeLinesNum++) {\n    yearsBlock.append(\"<div class=\\\"year-line-active year-line-active-\".concat(activeLinesNum, \"\\\"></div>\"));\n  }\n\n  ;\n\n  for (var _leftLinesNum = 6; _leftLinesNum > 0; _leftLinesNum--) {\n    yearsBlock.append(\"<div class=\\\"year-line year-line-\".concat(_leftLinesNum, \"\\\"></div>\"));\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"<p class='language year__text1' data-key='birthday_year'></p>\").insertAfter(\".year-line-active-1\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"<p class='language year__text2' data-key='dead_year'></p>\").insertAfter(\".year-line-active-5\");\n};\n\ncreationYears(); // Years position \n\nvar chengeYearsPosition = function chengeYearsPosition() {\n  var year1Position = jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line-active-1\")[0].getBoundingClientRect(),\n      year2Position = jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line-active-5\")[0].getBoundingClientRect();\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".year__text1\").css(\"top\", year1Position.bottom);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".year__text2\").css(\"top\", year2Position.bottom);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".year__text1\").css(\"left\", year1Position.left);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".year__text2\").css(\"left\", year2Position.left);\n};\n\npage.on(\"load\", function () {\n  return chengeYearsPosition();\n});\npage.on(\"resize\", function () {\n  return chengeYearsPosition();\n}); // Animate years\n\npage.on(\"load\", function () {\n  if (body.hasClass(\"paintingToAuthor\")) allLinesAnim();\n});\nfunction allLinesAnim() {\n  var speedAnim = 80;\n  var yearLineNum = 1;\n  var addClassToLines = setInterval(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line-\" + yearLineNum).addClass(\"year-line-show\");\n    yearLineNum++;\n  }, speedAnim);\n  var animationTime = jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line\").length * speedAnim;\n  setTimeout(function () {\n    return clearInterval(addClassToLines);\n  }, animationTime);\n  setTimeout(function () {\n    return activeLineAnim(speedAnim);\n  }, animationTime / 2);\n}\n;\n\nfunction activeLineAnim(speed) {\n  var test = [],\n      NumActiveLine = jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line-active\");\n\n  for (var i = 1; i <= NumActiveLine.length; i++) {\n    test.push(\"year-line-active-\".concat(i));\n  }\n\n  var addClassToActiveLines = setInterval(function () {\n    if (test.length >= 1) {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + test[0]).addClass(\"year-line-show\");\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + test[test.length - 1]).addClass(\"year-line-show\");\n      test.pop();\n      test.shift();\n    }\n\n    ;\n  }, speed);\n  var animationTime = NumActiveLine.length * speed;\n  setTimeout(function () {\n    clearInterval(addClassToActiveLines);\n    chengeYearsPosition();\n  }, animationTime);\n  var lineReading = jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line\").length * speed + animationTime - jquery__WEBPACK_IMPORTED_MODULE_0__(\".year-line\").length * speed / 2;\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__year p\").css(\"animation-delay\", lineReading + \"ms\");\n}\n\n; // Adaptation \n\nvar mobileYearsPosition = function mobileYearsPosition() {\n  if (windowWidth < 1000 || windowWidth > 900 && windowWidth < 1400 && widthHeight > 900 && widthHeight < 1600) {\n    var image = jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__information img\"),\n        yearsPosition = image[0].getBoundingClientRect().top + image.height() - jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation\").outerHeight();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__year\").css(\"top\", yearsPosition);\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__year\").css(\"top\", \"0\");\n  }\n};\n\npage.on(\"load\", function () {\n  return mobileYearsPosition();\n});\npage.on(\"resize\", function () {\n  return mobileYearsPosition();\n});\n\n//# sourceURL=webpack:///./ts/paintings/author/components/years.ts?");

/***/ }),

/***/ "./ts/paintings/scripts/components/data-name.ts":
/*!******************************************************!*\
  !*** ./ts/paintings/scripts/components/data-name.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allPaintingsName\": () => (/* binding */ allPaintingsName),\n/* harmony export */   \"allAuthorsName\": () => (/* binding */ allAuthorsName)\n/* harmony export */ });\nvar allPaintingsName = [\"arnolfini-portrait\", \"birth-of-venus\", \"mona-lisa\", \"creation-of-adam\", \"garden-of-earthly-delights\", \"harvesters\", \"girl-with-a-pearl-earring\", \"raft-of-the-medusa\", \"wanderer-above-the-sea-of-fog\", \"breakfast-on-the-grass\", \"gross-clinic\", \"luncheon-of-the-boating-party\", \"self-portrait-with-bandaged-ear\", \"starry-night\", \"son-of-man\"],\n    allAuthorsName = [\"jan-van-eyck\", \"sandro-botticelli\", \"leonardo-da-vinci\", \"michelangelo-buonarroti\", \"hieronymus-bosch\", \"pieter-bruegel\", \"johannes-vermeer\", \"theodore-gericault\", \"caspar-david-friedrich\", \"edouard-manet\", \"thomas-eakins\", \"pierre-auguste-renoir\", \"vincent-van-gogh\", \"rene-magritte\"];\n\n//# sourceURL=webpack:///./ts/paintings/scripts/components/data-name.ts?");

/***/ }),

/***/ "./scss/paintings/author/adap/adap-author.scss":
/*!*****************************************************!*\
  !*** ./scss/paintings/author/adap/adap-author.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/author/adap/adap-author.scss?");

/***/ }),

/***/ "./scss/paintings/author/author.scss":
/*!*******************************************!*\
  !*** ./scss/paintings/author/author.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/paintings/author/author.scss?");

/***/ }),

/***/ "./content/paintings/author lazy recursive ^\\.\\/.*\\.json$":
/*!************************************************************************!*\
  !*** ./content/paintings/author/ lazy ^\.\/.*\.json$ namespace object ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./caspar-david-friedrich.json\": [\n\t\t\"./content/paintings/author/caspar-david-friedrich.json\",\n\t\t\"content_paintings_author_caspar-david-friedrich_json\"\n\t],\n\t\"./edouard-manet.json\": [\n\t\t\"./content/paintings/author/edouard-manet.json\",\n\t\t\"content_paintings_author_edouard-manet_json\"\n\t],\n\t\"./hieronymus-bosch.json\": [\n\t\t\"./content/paintings/author/hieronymus-bosch.json\",\n\t\t\"content_paintings_author_hieronymus-bosch_json\"\n\t],\n\t\"./jan-van-eyck.json\": [\n\t\t\"./content/paintings/author/jan-van-eyck.json\",\n\t\t\"content_paintings_author_jan-van-eyck_json\"\n\t],\n\t\"./johannes-vermeer.json\": [\n\t\t\"./content/paintings/author/johannes-vermeer.json\",\n\t\t\"content_paintings_author_johannes-vermeer_json\"\n\t],\n\t\"./leonardo-da-vinci.json\": [\n\t\t\"./content/paintings/author/leonardo-da-vinci.json\",\n\t\t\"content_paintings_author_leonardo-da-vinci_json\"\n\t],\n\t\"./michelangelo-buonarroti.json\": [\n\t\t\"./content/paintings/author/michelangelo-buonarroti.json\",\n\t\t\"content_paintings_author_michelangelo-buonarroti_json\"\n\t],\n\t\"./pierre-auguste-renoir.json\": [\n\t\t\"./content/paintings/author/pierre-auguste-renoir.json\",\n\t\t\"content_paintings_author_pierre-auguste-renoir_json\"\n\t],\n\t\"./pieter-bruegel.json\": [\n\t\t\"./content/paintings/author/pieter-bruegel.json\",\n\t\t\"content_paintings_author_pieter-bruegel_json\"\n\t],\n\t\"./rene-magritte.json\": [\n\t\t\"./content/paintings/author/rene-magritte.json\",\n\t\t\"content_paintings_author_rene-magritte_json\"\n\t],\n\t\"./sandro-botticelli.json\": [\n\t\t\"./content/paintings/author/sandro-botticelli.json\",\n\t\t\"content_paintings_author_sandro-botticelli_json\"\n\t],\n\t\"./theodore-gericault.json\": [\n\t\t\"./content/paintings/author/theodore-gericault.json\",\n\t\t\"content_paintings_author_theodore-gericault_json\"\n\t],\n\t\"./thomas-eakins.json\": [\n\t\t\"./content/paintings/author/thomas-eakins.json\",\n\t\t\"content_paintings_author_thomas-eakins_json\"\n\t],\n\t\"./vincent-van-gogh.json\": [\n\t\t\"./content/paintings/author/vincent-van-gogh.json\",\n\t\t\"content_paintings_author_vincent-van-gogh_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./content/paintings/author lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./content/paintings/author/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 			"paintings_author": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./ts/paintings/author/author.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;