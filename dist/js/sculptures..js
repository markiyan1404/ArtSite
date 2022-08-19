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

/***/ "./ts/navigation/components/check_page_language.ts":
/*!*********************************************************!*\
  !*** ./ts/navigation/components/check_page_language.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": function() { return /* binding */ changeLang; },\n/* harmony export */   \"contentUpdate\": function() { return /* binding */ contentUpdate; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n// Get language form Local Storage\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var appLang = localStorage.getItem(\"lang\");\n\n  if (appLang === null) {\n    var userLanguage;\n    var userLang = navigator.language;\n    if (userLang === \"en\" || userLang === \"en-US\") userLanguage = \"en\";else if (userLang === \"uk\") userLanguage = \"ua\";else if (userLang === \"es\") userLanguage = \"es\";else userLanguage = \"en\";\n    contentUpdate(userLanguage);\n  } else contentUpdate(appLang);\n}); // Change language\n\nvar changeLang = function changeLang(langVal) {\n  return contentUpdate(langVal);\n}; // Change content\n\nvar contentUpdate = function contentUpdate(language) {\n  var pageName = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-name\"),\n      pageDateMenu = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-menu\");\n  var pageType = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-type\");\n  var isTemplate = location.href.indexOf(\"#\") !== -1;\n\n  if (isTemplate) {\n    if (pageType.indexOf(\"_\") !== -1) pageType = pageType.split(\"_\")[1];\n    __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageDateMenu, \"/\").concat(pageType, \"/\").concat(pageName, \".json\")).then(function (content) {\n      return importContent(content[\"default\"], language);\n    });\n  } else {\n    __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \"/\").concat(pageName, \".json\")).then(function (content) {\n      return importContent(content[\"default\"], language);\n    }).catch(function (err) {\n      return __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \"/content_files/\").concat(pageName, \".json\")).then(function (content) {\n        return importContent(content[\"default\"], language);\n      });\n    }).catch(function (err) {\n      return __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageType, \"/\").concat(pageName, \".json\")).then(function (content) {\n        return importContent(content[\"default\"], language);\n      });\n    });\n  }\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"ua\")) contentUpdate(\"ua\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"en\")) contentUpdate(\"en\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"es\")) contentUpdate(\"es\");\n});\n\nfunction importContent(obj, language) {\n  var content = obj[language],\n      contentNum = Object.entries(content).length;\n\n  for (var l = 0; l < contentNum + repeatItem(); l++) {\n    var getSelectorExport = jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[l];\n    if (getSelectorExport === undefined) continue;\n    var getAttrExport = getSelectorExport.getAttribute(\"data-key\");\n    getSelectorExport.innerHTML = content[getAttrExport];\n  }\n\n  localStorage.setItem(\"title\", document.title);\n}\n\n;\n\nvar repeatItem = function repeatItem() {\n  var allContentChangeBlocks = [];\n\n  for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\").length; i++) {\n    allContentChangeBlocks.push(jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[i].attributes[\"data-key\"].textContent);\n  }\n\n  var toFindDuplicates = function toFindDuplicates(array) {\n    return array.filter(function (item, index) {\n      return array.indexOf(item) !== index;\n    });\n  };\n\n  return toFindDuplicates(allContentChangeBlocks).length;\n};\n\n//# sourceURL=webpack:///./ts/navigation/components/check_page_language.ts?");

/***/ }),

/***/ "./ts/sculptures/scripts/components/data-name.ts":
/*!*******************************************************!*\
  !*** ./ts/sculptures/scripts/components/data-name.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allSculpturesName\": function() { return /* binding */ allSculpturesName; },\n/* harmony export */   \"allAuthorsName\": function() { return /* binding */ allAuthorsName; }\n/* harmony export */ });\nvar allSculpturesName = [\"nefertiti-bust\", \"discobolus\", \"winged-victory-of-samothrace\", \"venus-de-milo\", \"apollo-belvedere\", \"laocoon-and-his-sons\", \"david\", \"little-dancer\", \"thinker\", \"kiss\"],\n    allAuthorsName = [\"auguste-rodin\", \"michelangelo-buonarroti\", \"myron\", \"giovanni-angelo\", \"pliny-the-elder\", \"thutmose\"];\n\n//# sourceURL=webpack:///./ts/sculptures/scripts/components/data-name.ts?");

/***/ }),

/***/ "./ts/sculptures/scripts/components/points.ts":
/*!****************************************************!*\
  !*** ./ts/sculptures/scripts/components/points.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activationSlide\": function() { return /* binding */ activationSlide; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./ts/sculptures/scripts/components/slider.ts\");\n/* harmony import */ var originTS_navigation_components_check_page_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! originTS/navigation/components/check_page_language */ \"./ts/navigation/components/check_page_language.ts\");\n\n\n\nvar pointActiveClass = \"points__point-active\",\n    page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Generate points\n\nvar generateSliderPoints = function generateSliderPoints() {\n  for (var p = 0; p < _slider__WEBPACK_IMPORTED_MODULE_1__.allSlides.length; p++) {\n    var pointClass = void 0;\n    p % 2 && p !== 0 ? pointClass = \"point__icon-big\" : pointClass = \"point__icon-small\";\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".points\").append(\"<div class=\\\"points__point\\\"><h2 class=\\\"point__year language\\\" data-key=\\\"year\".concat(p, \"\\\"></h2><div class=\\\"point__icon \").concat(pointClass, \" mouse-active\\\"></div></div>\"));\n  }\n};\n\ngenerateSliderPoints(); // Add active class\n\nvar addActiveClass = function addActiveClass() {\n  var allPoints = jquery__WEBPACK_IMPORTED_MODULE_0__(\".points__point\");\n  allPoints.removeClass(pointActiveClass);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(allPoints[(0,_slider__WEBPACK_IMPORTED_MODULE_1__.getActiveImage)()]).addClass(pointActiveClass);\n};\n\naddActiveClass();\njquery__WEBPACK_IMPORTED_MODULE_0__(\".arrows__arrow\").on(\"click\", function () {\n  addActiveClass();\n}); // Point click\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".point__icon\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".points__point\").removeClass(pointActiveClass);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this.parentElement).addClass(pointActiveClass);\n  _slider__WEBPACK_IMPORTED_MODULE_1__.allSlides.removeClass(_slider__WEBPACK_IMPORTED_MODULE_1__.activeClassSlide);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(_slider__WEBPACK_IMPORTED_MODULE_1__.allSlides[activationSlide()]).addClass(_slider__WEBPACK_IMPORTED_MODULE_1__.activeClassSlide);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__image\").css(\"animation-delay\", \"0s\");\n});\nvar activationSlide = function activationSlide() {\n  var allPoints = jquery__WEBPACK_IMPORTED_MODULE_0__(\".points__point\");\n\n  for (var p = 0; p < allPoints.length; p++) {\n    if (allPoints[p].classList.value.indexOf(pointActiveClass) !== -1) {\n      return p;\n    }\n  }\n}; // Points and years position on phone\n\npage.on(\"load\", function () {\n  if (page.width() < 1000) {\n    pointsPotionOnPhone();\n    generateYearsOnPhone();\n  }\n});\npage.on(\"resize\", function () {\n  if (page.width() < 1000) {\n    generateYearsOnPhone();\n    pointsPotionOnPhone();\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__year-mobile\").remove();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content\").animate({\n      scrollTop: 0\n    }, 0);\n  }\n});\n\nvar pointsPotionOnPhone = function pointsPotionOnPhone() {\n  var allPoints = jquery__WEBPACK_IMPORTED_MODULE_0__(\".points__point\"),\n      allBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__slide\");\n\n  for (var b = 0; b < allBlocks.length; b++) {\n    var activeBlockSettings = jquery__WEBPACK_IMPORTED_MODULE_0__(allBlocks[b])[0].getBoundingClientRect();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allPoints[b]).css(\"top\", activeBlockSettings.top + jquery__WEBPACK_IMPORTED_MODULE_0__(\".content\").scrollTop() + parseInt(jquery__WEBPACK_IMPORTED_MODULE_0__(allBlocks[b]).css(\"padding-top\")));\n  }\n};\n\nvar generateYearsOnPhone = function generateYearsOnPhone() {\n  var allBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__slide\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__year-mobile\").length !== 0) return;\n\n  for (var b = 0; b < allBlocks.length; b++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allBlocks[b]).append(\"<h2 class=\\\"slide__year-mobile language\\\" data-key=\\\"year\".concat(b, \"\\\"></h2>\"));\n  }\n\n  (0,originTS_navigation_components_check_page_language__WEBPACK_IMPORTED_MODULE_2__.contentUpdate)(\"en\");\n};\n\n//# sourceURL=webpack:///./ts/sculptures/scripts/components/points.ts?");

/***/ }),

/***/ "./ts/sculptures/scripts/components/slider.ts":
/*!****************************************************!*\
  !*** ./ts/sculptures/scripts/components/slider.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allSlides\": function() { return /* binding */ allSlides; },\n/* harmony export */   \"activeClassSlide\": function() { return /* binding */ activeClassSlide; },\n/* harmony export */   \"allNames\": function() { return /* binding */ allNames; },\n/* harmony export */   \"getActiveImage\": function() { return /* binding */ getActiveImage; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-name */ \"./ts/sculptures/scripts/components/data-name.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Create slides \n\nvar createSlides = function createSlides() {\n  for (var p = 0; p < _data_name__WEBPACK_IMPORTED_MODULE_1__.allSculpturesName.length; p++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider\").append(\"\\n        <div class='slider__slide'>\\n        <img src=\\\"./img/sculptures/\".concat(_data_name__WEBPACK_IMPORTED_MODULE_1__.allSculpturesName[p], \".webp\\\" data-name=\\\"\").concat(_data_name__WEBPACK_IMPORTED_MODULE_1__.allSculpturesName[p], \"\\\" class=\\\"slide__image\\\"> \\n        <section class=\\\"slider__text\\\">\\n        <h1 class=\\\"slide__name language mouse-active\\\" data-key=\\\"sculptureName\").concat(p, \"\\\"></h1>\\n        </div>\\n        </section>\"));\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__slide\")[checkActiveSlide()]).addClass(\"slider__slide-active\");\n};\n\ncreateSlides(); // Check active slide \n\nfunction checkActiveSlide() {\n  var lastSculpture = Number(localStorage.getItem(\"lastSculpture\"));\n  if (lastSculpture !== null) return lastSculpture;else return 0;\n}\n\n; // Arrow click\n\nvar allSlides = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__slide\"),\n    activeClassSlide = \"slider__slide-active\",\n    allNames = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__name\");\nvar getActiveImage = function getActiveImage() {\n  for (var i = 0; i < allSlides.length; i++) {\n    if (allSlides[i].classList.value.indexOf(activeClassSlide) !== -1) {\n      return i;\n    }\n  }\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(\".arrows__arrow-left\").on(\"click\", function () {\n  if (getActiveImage() - 1 >= 0) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[getActiveImage() - 1]).addClass(activeClassSlide);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[getActiveImage() + 1]).removeClass(activeClassSlide);\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[allSlides.length - 1]).addClass(activeClassSlide);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[0]).removeClass(activeClassSlide);\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__image\").css(\"animation-delay\", \"0s\");\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".arrows__arrow-right\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__name\").css(\"animation\", \"slideActive 0.6s forwards\");\n\n  if (getActiveImage() + 1 >= allSlides.length) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[0]).addClass(activeClassSlide);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[allSlides.length - 1]).removeClass(activeClassSlide);\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[getActiveImage() + 1]).addClass(activeClassSlide);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[getActiveImage()]).removeClass(activeClassSlide);\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__image\").css(\"animation-delay\", \"0s\");\n}); // Arrow size\n\nvar squareSize = function squareSize() {\n  for (var i = 0; i < arguments.length; i++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(i < 0 || arguments.length <= i ? undefined : arguments[i]).css(\"height\", jquery__WEBPACK_IMPORTED_MODULE_0__(i < 0 || arguments.length <= i ? undefined : arguments[i]).css(\"width\"));\n  }\n};\n\npage.on(\"resize\", function () {\n  return squareSize(\".arrows__arrow\");\n});\n\nvar arrowSize = function arrowSize() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".arrow__icon\").css(\"border-width\", jquery__WEBPACK_IMPORTED_MODULE_0__(\".arrows__arrow\").width() * 0.25);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".arrow__icon\").css(\"border-top-width\", jquery__WEBPACK_IMPORTED_MODULE_0__(\".arrows__arrow\").width() * 0.35);\n};\n\npage.on(\"resize\", function () {\n  return arrowSize();\n}); // Generate button on mobile \n\nvar generateButton = function generateButton() {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__button\").length === 0) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__text\").append(\"<button class='slide__button language' data-key='button'></button>\");\n    goToSculpture();\n  }\n};\n\npage.on(\"load\", function () {\n  if (page.width() <= 1000) generateButton();\n});\npage.on(\"resize\", function () {\n  var getButton = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__button\").length === 0;\n  if (page.width() <= 1000 && getButton) generateButton();\n  if (page.width() > 1000) jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__button\").remove();\n}); // Add anim class \n\npage.on(\"load\", function () {\n  return addAnimClass();\n});\n\nvar addAnimClass = function addAnimClass() {\n  var allSlides = jquery__WEBPACK_IMPORTED_MODULE_0__(\".slider__slide\"),\n      speedAnim = 250;\n  var SlideNum = 1;\n  jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[0]).addClass(\"slider__slide-mobile-anim\");\n  var addClassToLines = setInterval(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(allSlides[SlideNum]).addClass(\"slider__slide-mobile-anim\");\n    SlideNum++;\n  }, speedAnim);\n  setTimeout(function () {\n    return clearInterval(addClassToLines);\n  }, speedAnim * allSlides.length);\n}; // Go to sculpture\n\n\nvar goToSculpture = function goToSculpture() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".slide__name, .slide__button\").on(\"click\", function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"sculpture-click\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\").addClass(\"sculpture-click\").css(\"z-index\", \"1000\");\n    }, 700);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor, .progress-wrap\").addClass(\"close-cursor\");\n    var allChild = this.parentElement.parentElement.childNodes;\n\n    var _loop = function _loop(i) {\n      if (allChild[i].localName === \"img\") {\n        localStorage.setItem(\"typeSculptureAnim\", \"sculpturesToSculpture\");\n        setTimeout(function () {\n          return location.href = \"sculpture.html#\" + jquery__WEBPACK_IMPORTED_MODULE_0__(allChild[i]).attr(\"data-name\");\n        }, 1550);\n      }\n    };\n\n    for (var i = 0; i < allChild.length; i++) {\n      _loop(i);\n    }\n  });\n};\n\ngoToSculpture();\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  arrowSize();\n  squareSize(\".arrows__arrow\");\n});\n\n//# sourceURL=webpack:///./ts/sculptures/scripts/components/slider.ts?");

/***/ }),

/***/ "./ts/sculptures/scripts/sculptures.ts":
/*!*********************************************!*\
  !*** ./ts/sculptures/scripts/sculptures.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var originSCSS_sculptures_style_sculptures_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/sculptures/style/sculptures.scss */ \"./scss/sculptures/style/sculptures.scss\");\n/* harmony import */ var originSCSS_sculptures_style_adap_adap_sculptures_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/sculptures/style/adap/adap-sculptures.scss */ \"./scss/sculptures/style/adap/adap-sculptures.scss\");\n/* harmony import */ var _components_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/points */ \"./ts/sculptures/scripts/components/points.ts\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider */ \"./ts/sculptures/scripts/components/slider.ts\");\n\n\n\n\n\n//# sourceURL=webpack:///./ts/sculptures/scripts/sculptures.ts?");

/***/ }),

/***/ "./scss/sculptures/style/adap/adap-sculptures.scss":
/*!*********************************************************!*\
  !*** ./scss/sculptures/style/adap/adap-sculptures.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/sculptures/style/adap/adap-sculptures.scss?");

/***/ }),

/***/ "./scss/sculptures/style/sculptures.scss":
/*!***********************************************!*\
  !*** ./scss/sculptures/style/sculptures.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/sculptures/style/sculptures.scss?");

/***/ }),

/***/ "./content lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./content/ lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./404/404.json\": [\n\t\t\"./content/404/404.json\",\n\t\t\"content_404_404_json\"\n\t],\n\t\"./architecture/content_files/architecture.json\": [\n\t\t\"./content/architecture/content_files/architecture.json\",\n\t\t\"content_architecture_content_files_architecture_json\"\n\t],\n\t\"./architecture/exemple/carson-city-post-office.json\": [\n\t\t\"./content/architecture/exemple/carson-city-post-office.json\",\n\t\t\"content_architecture_exemple_carson-city-post-office_json\"\n\t],\n\t\"./architecture/exemple/civic_center.json\": [\n\t\t\"./content/architecture/exemple/civic_center.json\",\n\t\t\"content_architecture_exemple_civic_center_json\"\n\t],\n\t\"./architecture/exemple/coconino-county-superior-court.json\": [\n\t\t\"./content/architecture/exemple/coconino-county-superior-court.json\",\n\t\t\"content_architecture_exemple_coconino-county-superior-court_json\"\n\t],\n\t\"./architecture/exemple/colosseum.json\": [\n\t\t\"./content/architecture/exemple/colosseum.json\",\n\t\t\"content_architecture_exemple_colosseum_json\"\n\t],\n\t\"./architecture/exemple/durham-cathedral.json\": [\n\t\t\"./content/architecture/exemple/durham-cathedral.json\",\n\t\t\"content_architecture_exemple_durham-cathedral_json\"\n\t],\n\t\"./architecture/exemple/florence-baptistery.json\": [\n\t\t\"./content/architecture/exemple/florence-baptistery.json\",\n\t\t\"content_architecture_exemple_florence-baptistery_json\"\n\t],\n\t\"./architecture/exemple/hotel-ritz.json\": [\n\t\t\"./content/architecture/exemple/hotel-ritz.json\",\n\t\t\"content_architecture_exemple_hotel-ritz_json\"\n\t],\n\t\"./architecture/exemple/karlskirche.json\": [\n\t\t\"./content/architecture/exemple/karlskirche.json\",\n\t\t\"content_architecture_exemple_karlskirche_json\"\n\t],\n\t\"./architecture/exemple/low-memorial-library.json\": [\n\t\t\"./content/architecture/exemple/low-memorial-library.json\",\n\t\t\"content_architecture_exemple_low-memorial-library_json\"\n\t],\n\t\"./architecture/exemple/maria-laach-abbey.json\": [\n\t\t\"./content/architecture/exemple/maria-laach-abbey.json\",\n\t\t\"content_architecture_exemple_maria-laach-abbey_json\"\n\t],\n\t\"./architecture/exemple/new-york-public-library.json\": [\n\t\t\"./content/architecture/exemple/new-york-public-library.json\",\n\t\t\"content_architecture_exemple_new-york-public-library_json\"\n\t],\n\t\"./architecture/exemple/noto-cathedral.json\": [\n\t\t\"./content/architecture/exemple/noto-cathedral.json\",\n\t\t\"content_architecture_exemple_noto-cathedral_json\"\n\t],\n\t\"./architecture/exemple/notre-dame.json\": [\n\t\t\"./content/architecture/exemple/notre-dame.json\",\n\t\t\"content_architecture_exemple_notre-dame_json\"\n\t],\n\t\"./architecture/exemple/palais-garnier.json\": [\n\t\t\"./content/architecture/exemple/palais-garnier.json\",\n\t\t\"content_architecture_exemple_palais-garnier_json\"\n\t],\n\t\"./architecture/exemple/parthenon.json\": [\n\t\t\"./content/architecture/exemple/parthenon.json\",\n\t\t\"content_architecture_exemple_parthenon_json\"\n\t],\n\t\"./architecture/exemple/petit-trianon.json\": [\n\t\t\"./content/architecture/exemple/petit-trianon.json\",\n\t\t\"content_architecture_exemple_petit-trianon_json\"\n\t],\n\t\"./architecture/exemple/pisa-cathedral.json\": [\n\t\t\"./content/architecture/exemple/pisa-cathedral.json\",\n\t\t\"content_architecture_exemple_pisa-cathedral_json\"\n\t],\n\t\"./architecture/exemple/samuel-cupples-house.json\": [\n\t\t\"./content/architecture/exemple/samuel-cupples-house.json\",\n\t\t\"content_architecture_exemple_samuel-cupples-house_json\"\n\t],\n\t\"./architecture/exemple/sint-petrus-en-pauluskerk.json\": [\n\t\t\"./content/architecture/exemple/sint-petrus-en-pauluskerk.json\",\n\t\t\"content_architecture_exemple_sint-petrus-en-pauluskerk_json\"\n\t],\n\t\"./architecture/exemple/st-pauls-cathedral.json\": [\n\t\t\"./content/architecture/exemple/st-pauls-cathedral.json\",\n\t\t\"content_architecture_exemple_st-pauls-cathedral_json\"\n\t],\n\t\"./architecture/exemple/the-academy-of-athens.json\": [\n\t\t\"./content/architecture/exemple/the-academy-of-athens.json\",\n\t\t\"content_architecture_exemple_the-academy-of-athens_json\"\n\t],\n\t\"./architecture/exemple/the-capitol-building.json\": [\n\t\t\"./content/architecture/exemple/the-capitol-building.json\",\n\t\t\"content_architecture_exemple_the-capitol-building_json\"\n\t],\n\t\"./architecture/exemple/the-chartres-cathedral.json\": [\n\t\t\"./content/architecture/exemple/the-chartres-cathedral.json\",\n\t\t\"content_architecture_exemple_the-chartres-cathedral_json\"\n\t],\n\t\"./architecture/exemple/the-cologne-cathedral.json\": [\n\t\t\"./content/architecture/exemple/the-cologne-cathedral.json\",\n\t\t\"content_architecture_exemple_the-cologne-cathedral_json\"\n\t],\n\t\"./architecture/exemple/the-milan-cathedral.json\": [\n\t\t\"./content/architecture/exemple/the-milan-cathedral.json\",\n\t\t\"content_architecture_exemple_the-milan-cathedral_json\"\n\t],\n\t\"./architecture/exemple/the-rotunda.json\": [\n\t\t\"./content/architecture/exemple/the-rotunda.json\",\n\t\t\"content_architecture_exemple_the-rotunda_json\"\n\t],\n\t\"./architecture/exemple/thomas-jefferson-building.json\": [\n\t\t\"./content/architecture/exemple/thomas-jefferson-building.json\",\n\t\t\"content_architecture_exemple_thomas-jefferson-building_json\"\n\t],\n\t\"./architecture/exemple/trevi-fountain.json\": [\n\t\t\"./content/architecture/exemple/trevi-fountain.json\",\n\t\t\"content_architecture_exemple_trevi-fountain_json\"\n\t],\n\t\"./architecture/type/baroque.json\": [\n\t\t\"./content/architecture/type/baroque.json\",\n\t\t\"content_architecture_type_baroque_json\"\n\t],\n\t\"./architecture/type/beaux-arts.json\": [\n\t\t\"./content/architecture/type/beaux-arts.json\",\n\t\t\"content_architecture_type_beaux-arts_json\"\n\t],\n\t\"./architecture/type/classic.json\": [\n\t\t\"./content/architecture/type/classic.json\",\n\t\t\"content_architecture_type_classic_json\"\n\t],\n\t\"./architecture/type/gothic.json\": [\n\t\t\"./content/architecture/type/gothic.json\",\n\t\t\"content_architecture_type_gothic_json\"\n\t],\n\t\"./architecture/type/neoclassical.json\": [\n\t\t\"./content/architecture/type/neoclassical.json\",\n\t\t\"content_architecture_type_neoclassical_json\"\n\t],\n\t\"./architecture/type/renaissance-revival.json\": [\n\t\t\"./content/architecture/type/renaissance-revival.json\",\n\t\t\"content_architecture_type_renaissance-revival_json\"\n\t],\n\t\"./architecture/type/romanesque.json\": [\n\t\t\"./content/architecture/type/romanesque.json\",\n\t\t\"content_architecture_type_romanesque_json\"\n\t],\n\t\"./game/game.json\": [\n\t\t\"./content/game/game.json\",\n\t\t\"content_game_game_json\"\n\t],\n\t\"./game/skins.json\": [\n\t\t\"./content/game/skins.json\",\n\t\t\"content_game_skins_json\"\n\t],\n\t\"./main/main.json\": [\n\t\t\"./content/main/main.json\",\n\t\t\"content_main_main_json\"\n\t],\n\t\"./paintings/author/caspar-david-friedrich.json\": [\n\t\t\"./content/paintings/author/caspar-david-friedrich.json\",\n\t\t\"content_paintings_author_caspar-david-friedrich_json\"\n\t],\n\t\"./paintings/author/edouard-manet.json\": [\n\t\t\"./content/paintings/author/edouard-manet.json\",\n\t\t\"content_paintings_author_edouard-manet_json\"\n\t],\n\t\"./paintings/author/hieronymus-bosch.json\": [\n\t\t\"./content/paintings/author/hieronymus-bosch.json\",\n\t\t\"content_paintings_author_hieronymus-bosch_json\"\n\t],\n\t\"./paintings/author/jan-van-eyck.json\": [\n\t\t\"./content/paintings/author/jan-van-eyck.json\",\n\t\t\"content_paintings_author_jan-van-eyck_json\"\n\t],\n\t\"./paintings/author/johannes-vermeer.json\": [\n\t\t\"./content/paintings/author/johannes-vermeer.json\",\n\t\t\"content_paintings_author_johannes-vermeer_json\"\n\t],\n\t\"./paintings/author/leonardo-da-vinci.json\": [\n\t\t\"./content/paintings/author/leonardo-da-vinci.json\",\n\t\t\"content_paintings_author_leonardo-da-vinci_json\"\n\t],\n\t\"./paintings/author/michelangelo-buonarroti.json\": [\n\t\t\"./content/paintings/author/michelangelo-buonarroti.json\",\n\t\t\"content_paintings_author_michelangelo-buonarroti_json\"\n\t],\n\t\"./paintings/author/pierre-auguste-renoir.json\": [\n\t\t\"./content/paintings/author/pierre-auguste-renoir.json\",\n\t\t\"content_paintings_author_pierre-auguste-renoir_json\"\n\t],\n\t\"./paintings/author/pieter-bruegel.json\": [\n\t\t\"./content/paintings/author/pieter-bruegel.json\",\n\t\t\"content_paintings_author_pieter-bruegel_json\"\n\t],\n\t\"./paintings/author/rene-magritte.json\": [\n\t\t\"./content/paintings/author/rene-magritte.json\",\n\t\t\"content_paintings_author_rene-magritte_json\"\n\t],\n\t\"./paintings/author/sandro-botticelli.json\": [\n\t\t\"./content/paintings/author/sandro-botticelli.json\",\n\t\t\"content_paintings_author_sandro-botticelli_json\"\n\t],\n\t\"./paintings/author/theodore-gericault.json\": [\n\t\t\"./content/paintings/author/theodore-gericault.json\",\n\t\t\"content_paintings_author_theodore-gericault_json\"\n\t],\n\t\"./paintings/author/thomas-eakins.json\": [\n\t\t\"./content/paintings/author/thomas-eakins.json\",\n\t\t\"content_paintings_author_thomas-eakins_json\"\n\t],\n\t\"./paintings/author/vincent-van-gogh.json\": [\n\t\t\"./content/paintings/author/vincent-van-gogh.json\",\n\t\t\"content_paintings_author_vincent-van-gogh_json\"\n\t],\n\t\"./paintings/content_files/paintings.json\": [\n\t\t\"./content/paintings/content_files/paintings.json\",\n\t\t\"content_paintings_content_files_paintings_json\"\n\t],\n\t\"./paintings/painting/arnolfini-portrait.json\": [\n\t\t\"./content/paintings/painting/arnolfini-portrait.json\",\n\t\t\"content_paintings_painting_arnolfini-portrait_json\"\n\t],\n\t\"./paintings/painting/birth-of-venus.json\": [\n\t\t\"./content/paintings/painting/birth-of-venus.json\",\n\t\t\"content_paintings_painting_birth-of-venus_json\"\n\t],\n\t\"./paintings/painting/breakfast-on-the-grass.json\": [\n\t\t\"./content/paintings/painting/breakfast-on-the-grass.json\",\n\t\t\"content_paintings_painting_breakfast-on-the-grass_json\"\n\t],\n\t\"./paintings/painting/creation-of-adam.json\": [\n\t\t\"./content/paintings/painting/creation-of-adam.json\",\n\t\t\"content_paintings_painting_creation-of-adam_json\"\n\t],\n\t\"./paintings/painting/garden-of-earthly-delights.json\": [\n\t\t\"./content/paintings/painting/garden-of-earthly-delights.json\",\n\t\t\"content_paintings_painting_garden-of-earthly-delights_json\"\n\t],\n\t\"./paintings/painting/girl-with-a-pearl-earring.json\": [\n\t\t\"./content/paintings/painting/girl-with-a-pearl-earring.json\",\n\t\t\"content_paintings_painting_girl-with-a-pearl-earring_json\"\n\t],\n\t\"./paintings/painting/gross-clinic.json\": [\n\t\t\"./content/paintings/painting/gross-clinic.json\",\n\t\t\"content_paintings_painting_gross-clinic_json\"\n\t],\n\t\"./paintings/painting/harvesters.json\": [\n\t\t\"./content/paintings/painting/harvesters.json\",\n\t\t\"content_paintings_painting_harvesters_json\"\n\t],\n\t\"./paintings/painting/luncheon-of-the-boating-party.json\": [\n\t\t\"./content/paintings/painting/luncheon-of-the-boating-party.json\",\n\t\t\"content_paintings_painting_luncheon-of-the-boating-party_json\"\n\t],\n\t\"./paintings/painting/mona-lisa.json\": [\n\t\t\"./content/paintings/painting/mona-lisa.json\",\n\t\t\"content_paintings_painting_mona-lisa_json\"\n\t],\n\t\"./paintings/painting/raft-of-the-medusa.json\": [\n\t\t\"./content/paintings/painting/raft-of-the-medusa.json\",\n\t\t\"content_paintings_painting_raft-of-the-medusa_json\"\n\t],\n\t\"./paintings/painting/self-portrait-with-bandaged-ear.json\": [\n\t\t\"./content/paintings/painting/self-portrait-with-bandaged-ear.json\",\n\t\t\"content_paintings_painting_self-portrait-with-bandaged-ear_json\"\n\t],\n\t\"./paintings/painting/son-of-man.json\": [\n\t\t\"./content/paintings/painting/son-of-man.json\",\n\t\t\"content_paintings_painting_son-of-man_json\"\n\t],\n\t\"./paintings/painting/starry-night.json\": [\n\t\t\"./content/paintings/painting/starry-night.json\",\n\t\t\"content_paintings_painting_starry-night_json\"\n\t],\n\t\"./paintings/painting/wanderer-above-the-sea-of-fog.json\": [\n\t\t\"./content/paintings/painting/wanderer-above-the-sea-of-fog.json\",\n\t\t\"content_paintings_painting_wanderer-above-the-sea-of-fog_json\"\n\t],\n\t\"./sculptures/author/auguste-rodin.json\": [\n\t\t\"./content/sculptures/author/auguste-rodin.json\",\n\t\t\"content_sculptures_author_auguste-rodin_json\"\n\t],\n\t\"./sculptures/author/edgar-degas.json\": [\n\t\t\"./content/sculptures/author/edgar-degas.json\",\n\t\t\"content_sculptures_author_edgar-degas_json\"\n\t],\n\t\"./sculptures/author/giovanni-angelo.json\": [\n\t\t\"./content/sculptures/author/giovanni-angelo.json\",\n\t\t\"content_sculptures_author_giovanni-angelo_json\"\n\t],\n\t\"./sculptures/author/michelangelo-buonarroti.json\": [\n\t\t\"./content/sculptures/author/michelangelo-buonarroti.json\",\n\t\t\"content_sculptures_author_michelangelo-buonarroti_json\"\n\t],\n\t\"./sculptures/author/myron.json\": [\n\t\t\"./content/sculptures/author/myron.json\",\n\t\t\"content_sculptures_author_myron_json\"\n\t],\n\t\"./sculptures/author/pliny-the-elder.json\": [\n\t\t\"./content/sculptures/author/pliny-the-elder.json\",\n\t\t\"content_sculptures_author_pliny-the-elder_json\"\n\t],\n\t\"./sculptures/author/thutmose.json\": [\n\t\t\"./content/sculptures/author/thutmose.json\",\n\t\t\"content_sculptures_author_thutmose_json\"\n\t],\n\t\"./sculptures/content_files/sculptures.json\": [\n\t\t\"./content/sculptures/content_files/sculptures.json\",\n\t\t\"content_sculptures_content_files_sculptures_json\"\n\t],\n\t\"./sculptures/sculpture/apollo-belvedere.json\": [\n\t\t\"./content/sculptures/sculpture/apollo-belvedere.json\",\n\t\t\"content_sculptures_sculpture_apollo-belvedere_json\"\n\t],\n\t\"./sculptures/sculpture/david.json\": [\n\t\t\"./content/sculptures/sculpture/david.json\",\n\t\t\"content_sculptures_sculpture_david_json\"\n\t],\n\t\"./sculptures/sculpture/discobolus.json\": [\n\t\t\"./content/sculptures/sculpture/discobolus.json\",\n\t\t\"content_sculptures_sculpture_discobolus_json\"\n\t],\n\t\"./sculptures/sculpture/kiss.json\": [\n\t\t\"./content/sculptures/sculpture/kiss.json\",\n\t\t\"content_sculptures_sculpture_kiss_json\"\n\t],\n\t\"./sculptures/sculpture/laocoon-and-his-sons.json\": [\n\t\t\"./content/sculptures/sculpture/laocoon-and-his-sons.json\",\n\t\t\"content_sculptures_sculpture_laocoon-and-his-sons_json\"\n\t],\n\t\"./sculptures/sculpture/little-dancer.json\": [\n\t\t\"./content/sculptures/sculpture/little-dancer.json\",\n\t\t\"content_sculptures_sculpture_little-dancer_json\"\n\t],\n\t\"./sculptures/sculpture/nefertiti-bust.json\": [\n\t\t\"./content/sculptures/sculpture/nefertiti-bust.json\",\n\t\t\"content_sculptures_sculpture_nefertiti-bust_json\"\n\t],\n\t\"./sculptures/sculpture/thinker.json\": [\n\t\t\"./content/sculptures/sculpture/thinker.json\",\n\t\t\"content_sculptures_sculpture_thinker_json\"\n\t],\n\t\"./sculptures/sculpture/venus-de-milo.json\": [\n\t\t\"./content/sculptures/sculpture/venus-de-milo.json\",\n\t\t\"content_sculptures_sculpture_venus-de-milo_json\"\n\t],\n\t\"./sculptures/sculpture/winged-victory-of-samothrace.json\": [\n\t\t\"./content/sculptures/sculpture/winged-victory-of-samothrace.json\",\n\t\t\"content_sculptures_sculpture_winged-victory-of-samothrace_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 			"sculptures": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./ts/sculptures/scripts/sculptures.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;