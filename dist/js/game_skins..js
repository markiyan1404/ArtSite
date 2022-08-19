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

/***/ "./ts/cursor/cursor.ts":
/*!*****************************!*\
  !*** ./ts/cursor/cursor.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mouveHover\": function() { return /* binding */ mouveHover; },\n/* harmony export */   \"mouveHover2\": function() { return /* binding */ mouveHover2; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var originSCSS_cursor_cursor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/cursor/cursor.scss */ \"./scss/cursor/cursor.scss\");\n/* harmony import */ var originSCSS_cursor_adap_adap_cursor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! originSCSS/cursor/adap/adap-cursor.scss */ \"./scss/cursor/adap/adap-cursor.scss\");\n\n\n\n;\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window),\n    cursorInner = jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\"),\n    cursor = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#cursor\"),\n    cursorInnerAndCursor = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#cursor, .cursor\"),\n    cursorCircle = jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-wrap\"),\n    mouse = {\n  x: checkLastMousePosition()[0],\n  y: checkLastMousePosition()[1]\n},\n    pos = {\n  x: checkLastMousePosition()[0],\n  y: checkLastMousePosition()[1]\n},\n    speed = 0.11; // Get mouse position\n\npage.on(\"mousemove\", function (e) {\n  mouse.x = e.clientX;\n  mouse.y = e.clientY;\n}); // Mouse style effect\n\nvar getSqueeze = function getSqueeze(diffX, diffY) {\n  var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)),\n      maxSqueeze = 20.15,\n      accelerator = 1500;\n  return Math.min(distance / accelerator, maxSqueeze);\n};\n\nvar updateCursor = function updateCursor() {\n  var diffX = Math.round(mouse.x - pos.x),\n      diffY = Math.round(mouse.y - pos.y);\n  pos.x += diffX * speed;\n  pos.y += diffY * speed;\n  var squeeze = getSqueeze(diffX, diffY); // const scale: string = \"scale(\" + (1 + squeeze) + \", \" + (1 - squeeze) + \")\";\n\n  var translate = \"translate3d(\" + pos.x + \"px ,\" + pos.y + \"px, 0)\";\n  cursorInner.css(\"transform\", translate);\n  cursor.css(\"transform\", translate); // cursorCircle.css(\"transform\", scale);\n}; // Show mouse\n\n\nvar loop = function loop() {\n  updateCursor();\n  requestAnimationFrame(loop);\n  saveMousePosition();\n};\n\nrequestAnimationFrame(loop); // Active elements hover\n\nvar mouveHover = function mouveHover() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".mouse-active\").on(\"mousemove\", function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"activeArchitecture\")) {\n      cursorInner.removeClass(\"activeCursor\");\n      return;\n    }\n\n    cursorInner.addClass(\"activeCursor\");\n  });\n  page.on(\"mouseover\", function (e) {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).hasClass(\"mouse-active\")) return;else {\n      cursorInner.removeClass(\"activeCursor\");\n    }\n  });\n};\nvar mouveHover2 = function mouveHover2() {\n  var mouseActive2 = jquery__WEBPACK_IMPORTED_MODULE_0__(\".mouse-active2\");\n  mouseActive2.on(\"mouseenter\", function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"mouse-active2\")) cursorInnerAndCursor.addClass(\"activeCursore2\");\n  });\n  mouseActive2.on(\"mouseleave\", function () {\n    cursorInnerAndCursor.removeClass(\"activeCursore2\");\n  });\n};\npage.on(\"load\", function () {\n  mouveHover();\n  mouveHover2();\n});\npage.on(\"resize\", function () {\n  return mouveHover2();\n}); // Mouse down/up\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"mousedown\", function () {\n  return cursorCircle.addClass(\"mousedown\");\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"*\").on(\"mouseup\", function () {\n  return cursorCircle.removeClass(\"mousedown\");\n}); // Cursor progress bar \n\npage.on(\"load\", function () {\n  var progressPath = jquery__WEBPACK_IMPORTED_MODULE_0__(\".progress-wrap__path\"),\n      pathLength = progressPath[0].getTotalLength();\n  progressPath.css({\n    transition: \"stroke-dashoffset 10ms linear\",\n    WebkitTransition: \"stroke-dashoffset 10ms linear\",\n    strokeDasharray: pathLength + \" \" + pathLength,\n    strokeDashoffset: pathLength\n  });\n\n  var updateProgress = function updateProgress() {\n    var scroll = page.scrollTop(),\n        height = jquery__WEBPACK_IMPORTED_MODULE_0__(document).height() - page.height(),\n        progress = pathLength - scroll * pathLength / height;\n    progressPath.css(\"strokeDashoffset\", progress);\n  };\n\n  page.on(\"scroll\", updateProgress);\n}); // Save and give mouse position\n\nvar saveMousePosition = function saveMousePosition() {\n  var left = String(cursorInner.position().left + cursorInner.width() / 2),\n      top = String(cursorInner.position().top + cursorInner.height() / 2);\n  localStorage.setItem(\"lastMousePositionLeft\", left);\n  localStorage.setItem(\"lastMousePositionTop\", top);\n};\n\nfunction checkLastMousePosition() {\n  var left = Number(localStorage.getItem(\"lastMousePositionLeft\")),\n      top = Number(localStorage.getItem(\"lastMousePositionTop\"));\n  var cursorPosition = [left, top];\n  return cursorPosition;\n}\n\n; // Show saved active/leave cursor\n\npage.on(\"load\", function () {\n  var checkActiveCursor = JSON.parse(localStorage.getItem(\"activeCursor\")),\n      mouseLeave = JSON.parse(localStorage.getItem(\"mouseLeave\"));\n  if (mouseLeave || checkLastMousePosition()[0] === 0 && checkLastMousePosition()[1] === 0) return;\n\n  if (checkActiveCursor) {\n    cursorInner.addClass(\"activeCursor\");\n    setTimeout(function () {\n      cursorInnerAndCursor.css(\"opacity\", \"1\");\n      pageHover();\n    }, 200);\n  } else {\n    setTimeout(function () {\n      cursorInnerAndCursor.css(\"opacity\", \"1\");\n      pageHover();\n    }, 300);\n  }\n\n  localStorage.setItem(\"activeCursor\", \"false\");\n});\n\nvar pageHover = function pageHover() {\n  page.on(\"mousemove\", function () {\n    cursorInnerAndCursor.css(\"opacity\", \"1\");\n  });\n  page.on(\"mouseleave\", function () {\n    cursorInnerAndCursor.css(\"opacity\", \"0\");\n  });\n  cursor.css(\"transition\", \"transform 0.05s linear, opacity 0.2s\");\n  cursorCircle.css(\"transition\", \"transform 0.2s, opacity 0.2s\");\n};\n\npage.on(\"mouseleave\", function () {\n  localStorage.setItem(\"mouseLeave\", \"true\");\n  cursorInnerAndCursor.css(\"opacity\", \"0\").addClass(\"hideCursor\");\n});\npage.on(\"mousemove\", function () {\n  localStorage.setItem(\"mouseLeave\", \"false\");\n  cursorInnerAndCursor.css(\"opacity\", \"1\").removeClass(\"hideCursor\");\n  setTimeout(function () {\n    cursor.css(\"transition\", \"transform 0.05s linear, opacity 0.2s\");\n    cursorCircle.css(\"transition\", \"transform 0.2s, opacity 0.2s\");\n  }, 500);\n}); // Cursor adaptation\n\npage.on(\"mousemove\", function () {\n  return checkClientDevice();\n});\npage.on(\"load\", function () {\n  return checkClientDevice();\n});\n\nvar checkClientDevice = function checkClientDevice() {\n  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {\n    cursorInnerAndCursor.css(\"display\", \"none\");\n  } else {\n    cursorInnerAndCursor.fadeIn();\n  }\n};\n\n//# sourceURL=webpack:///./ts/cursor/cursor.ts?");

/***/ }),

/***/ "./ts/game/skins/components/change_img_color.ts":
/*!******************************************************!*\
  !*** ./ts/game/skins/components/change_img_color.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n // Change images color\n\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var activeColor = localStorage.getItem(\"contrastColor1LS\");\n\n  if (activeColor === \"#fff\") {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").addClass(\"black_images\");\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").addClass(\"white_images\");\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__white\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").removeClass().addClass(\"black_images\");\n  changeSkinsColor(\"black\");\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".colors__black\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").removeClass().addClass(\"white_images\");\n  changeSkinsColor(\"white\");\n}); // Change skins color\n\nvar getAllSkinsWays = function getAllSkinsWays() {\n  var allSkins = jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide__image\"),\n      allSkinsSrc = [],\n      allSkinsDataSrc = [],\n      allSkinsSrcWays = [],\n      allSkinsDataSrcWays = [];\n\n  for (var i = 0; i < allSkins.length; i++) {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(allSkins[i]).hasClass(\"swiper-lazy-loaded\")) {\n      allSkinsSrcWays.push(jquery__WEBPACK_IMPORTED_MODULE_0__(allSkins[i]).attr(\"src\"));\n      allSkinsSrc.push(allSkins[i]);\n    } else {\n      allSkinsDataSrcWays.push(jquery__WEBPACK_IMPORTED_MODULE_0__(allSkins[i]).attr(\"data-src\"));\n      allSkinsDataSrc.push(allSkins[i]);\n    }\n  }\n\n  return [allSkinsSrc, allSkinsDataSrc, allSkinsSrcWays, allSkinsDataSrcWays];\n};\n\nvar changeSkinsColor = function changeSkinsColor(color) {\n  var allSrcWays = getAllSkinsWays()[2],\n      allDataSrcWays = getAllSkinsWays()[3],\n      allSkinsSrc = getAllSkinsWays()[0],\n      allSkinsDataSrc = getAllSkinsWays()[1];\n  workWithWays(allDataSrcWays);\n  workWithWays(allSrcWays);\n\n  function workWithWays(way) {\n    if (way.length === 1) {\n      for (var w = 0; w < way.length; w++) {\n        CutAndAddWay(w);\n      }\n    } else {\n      for (var _w = 0; _w < way.length; _w++) {\n        CutAndAddWay(_w);\n      }\n    }\n\n    function CutAndAddWay(w) {\n      if (jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(allSkinsSrc)[w]).attr(\"data-section\") === \"backgrounds\") return;\n      var cutWay = String(way[w]).split(\"/\");\n      var baseWay = \"\";\n\n      for (var b = 0; b < cutWay.length - 2; b++) {\n        baseWay += cutWay[b] + \"/\";\n      }\n\n      var newWay = \"\".concat(baseWay).concat(color, \"/\").concat(cutWay[cutWay.length - 1]);\n      jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(allSkinsSrc)[w]).attr(\"src\", newWay);\n      jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(allSkinsDataSrc)[w]).attr(\"data-src\", newWay);\n    }\n\n    ;\n  }\n};\n\n//# sourceURL=webpack:///./ts/game/skins/components/change_img_color.ts?");

/***/ }),

/***/ "./ts/game/skins/components/skin_section.ts":
/*!**************************************************!*\
  !*** ./ts/game/skins/components/skin_section.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n // Remove and add animation for sections\n\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__skins\").css({\n      animation: \"none\",\n      transition: \"0.3s\",\n      transform: \"scale(1)\"\n    });\n  }, 600);\n}); // Close \n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".content__close\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__character\").css(\"display\") !== \"none\") {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__character\").fadeOut(400);\n    setTimeout(function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container\").css(\"display\", \"none\");\n    }, 500);\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".content\").fadeOut(300);\n    setTimeout(function () {\n      location.href = \"./game.html\";\n    }, 400);\n  }\n});\n\n//# sourceURL=webpack:///./ts/game/skins/components/skin_section.ts?");

/***/ }),

/***/ "./ts/game/skins/components/slider.ts":
/*!********************************************!*\
  !*** ./ts/game/skins/components/slider.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _sliders_constructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliders_constructions */ \"./ts/game/skins/components/sliders_constructions.ts\");\n/* harmony import */ var originTS_cursor_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! originTS/cursor/cursor */ \"./ts/cursor/cursor.ts\");\n/* harmony import */ var originTS_navigation_components_check_page_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! originTS/navigation/components/check_page_language */ \"./ts/navigation/components/check_page_language.ts\");\n\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".content__skins\").on(\"click\", function () {\n  var activeSkinsSection = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-skins\");\n  swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_1__.Lazy]);\n  var isSlider = jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container-\".concat(activeSkinsSection)).length;\n\n  if (isSlider === 0) {\n    createStandartSlider(activeSkinsSection);\n    generateSkins(activeSkinsSection);\n    addSkinsType(activeSkinsSection);\n\n    if (activeSkinsSection === \"characters\" || activeSkinsSection === \"obstacles\") {\n      (0,_sliders_constructions__WEBPACK_IMPORTED_MODULE_2__.createSlider)(\".swiper-container-\".concat(activeSkinsSection), \".swiper-wrapper-\".concat(activeSkinsSection), 4, 1.5, 2.5, 3.5, 3.9);\n    } else {\n      (0,_sliders_constructions__WEBPACK_IMPORTED_MODULE_2__.createSlider)(\".swiper-container-backgrounds\", \".swiper-wrapper-backgrounds\", 3, 1.2, 1.5, 2.5, 2.8);\n    }\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container-\".concat(activeSkinsSection)).css(\"display\", \"flex\");\n  }\n\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").css(\"animation\", \"none\");\n  }, 700); // Choose active \n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide\").on(\"click\", function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"open\")) {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container-\".concat(activeSkinsSection, \" .active\")).removeClass(\"active\").addClass(\"open\");\n      jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass(\"open\").addClass(\"active\");\n      var points = JSON.parse(localStorage.getItem(\"skins\")); // remove active from object\n\n      var allValues = Object.values(points[activeSkinsSection]);\n\n      for (var i = 0; i < allValues.length; i++) {\n        if (allValues[i] === \"active\") {\n          points[activeSkinsSection][Object.keys(points[activeSkinsSection])[i]] = \"open\";\n        }\n      } // add active to object\n\n\n      var activePoint = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-point\");\n      points[activeSkinsSection][activePoint] = \"active\";\n      localStorage.setItem(\"skins\", JSON.stringify(points));\n    }\n  });\n});\n\nvar createStandartSlider = function createStandartSlider(activeSkinsSection) {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".content__character\").append(\"<div class=\\\"swiper-container swiper-container-\".concat(activeSkinsSection, \"\\\">\\n            <div class=\\\"scrollbar\\\">\\n                <h1 class=\\\"scrollbar__year language\\\" data-key=\\\"scrollBar\\\"></h1>\\n                <div class=\\\"swiper-scrollbar mouse-active\\\"></div>\\n            </div>\\n            <div class=\\\"swiper-wrapper swiper-wrapper-\").concat(activeSkinsSection, \"\\\"></div>\\n        </div>\"));\n  (0,originTS_cursor_cursor__WEBPACK_IMPORTED_MODULE_3__.mouveHover)();\n  (0,originTS_navigation_components_check_page_language__WEBPACK_IMPORTED_MODULE_4__.contentUpdate)(localStorage.getItem(\"lang\"));\n}; // Generate skins\n\n\nvar generateSkins = function generateSkins(activeSkinsSection) {\n  var points = JSON.parse(localStorage.getItem(\"skins\"))[activeSkinsSection],\n      skinsNumbers = 6;\n  var colorOfSkins = \"\";\n  if (localStorage.getItem(\"contrastColor1LS\") === \"#fff\") colorOfSkins = \"black/\";else colorOfSkins = \"white/\";\n\n  if (activeSkinsSection === \"backgrounds\") {\n    colorOfSkins = \"\";\n  }\n\n  for (var p = 0; p < skinsNumbers; p++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-wrapper-\".concat(activeSkinsSection)).append(\"<section class=\\\"swiper-slide swiper-slide-\".concat(p, \"\\\" data-point=\\\"\").concat(Object.keys(points)[p], \"\\\">\\n                <img data-src=\\\"/../img/game/choose_skin/\").concat(activeSkinsSection, \"/\").concat(colorOfSkins).concat(p, \".webp\\\" class=\\\"swiper-slide__image\\\" data-section=\\\"\").concat(activeSkinsSection, \"\\\"/>\\n                <div class='swiper-lazy-preloader'></div>\\n            </section>\"));\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide img\").addClass(\"swiper-lazy\");\n  }\n};\n\nvar addSkinsType = function addSkinsType(activeSkinsSection) {\n  var point = JSON.parse(localStorage.getItem(\"skins\"))[activeSkinsSection];\n  var skinsClasses = Object.values(point);\n\n  for (var s = 0; s < skinsClasses.length; s++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container-\".concat(activeSkinsSection, \" .swiper-slide-\").concat(s)).addClass(skinsClasses[s]);\n\n    if (skinsClasses[s] === \"close\") {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-container-\".concat(activeSkinsSection, \" .swiper-slide-\").concat(s)).append(\"<section class='swiper-slide__lock'>\\n                <img src='/../img/game/choose_skin/lock.webp' class='lock__image' />\\n                <h2>\".concat(Object.keys(point)[s], \" <b class='language' data-key='point'></b></h2>\\n                </section>\"));\n    }\n  }\n};\n\n//# sourceURL=webpack:///./ts/game/skins/components/slider.ts?");

/***/ }),

/***/ "./ts/game/skins/components/sliders_constructions.ts":
/*!***********************************************************!*\
  !*** ./ts/game/skins/components/sliders_constructions.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSlider\": function() { return /* binding */ createSlider; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n\n\nvar createSlider = function createSlider(mainBlock, wrapper, slidersStandart, sliders0, sliders600, sliders1000, sliders1600) {\n  new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(mainBlock, {\n    scrollbar: {\n      el: \".swiper-scrollbar\",\n      draggable: true,\n      dragSize: 25\n    },\n    mousewheel: {\n      eventsTarget: wrapper,\n      invert: true\n    },\n    slidesPerView: slidersStandart,\n    initialSlide: 0,\n    centeredSlides: true,\n    freeMode: true,\n    speed: 400,\n    touchStartPreventDefault: null,\n    touchStartForcePreventDefault: null,\n    preloadImages: false,\n    observeParents: true,\n    observeSlideChildren: true,\n    observer: true,\n    spaceBetween: 30,\n    lazy: {\n      loadPrevNext: true,\n      loadPrevNextAmount: 3\n    },\n    breakpoints: {\n      3200: {\n        slidesPerView: slidersStandart,\n        scrollbar: {\n          dragSize: 35\n        }\n      },\n      1600: {\n        slidesPerView: sliders1600,\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 3\n        }\n      },\n      1000: {\n        slidesPerView: sliders1000,\n        scrollbar: {\n          dragSize: 25\n        },\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 3\n        }\n      },\n      600: {\n        slidesPerView: sliders600,\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 3\n        }\n      },\n      400: {\n        slidesPerView: sliders0,\n        scrollbar: {\n          dragSize: 20\n        },\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 3\n        }\n      },\n      0: {\n        slidesPerView: sliders0,\n        scrollbar: {\n          dragSize: 20\n        },\n        lazy: {\n          loadPrevNext: true,\n          loadOnTransitionStart: true,\n          loadPrevNextAmount: 3\n        }\n      }\n    },\n    on: {\n      scrollbarDragStart: function scrollbarDragStart() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").css(\"opacity\", \"0\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\").removeClass(\"activeCursor\");\n      },\n      scrollbarDragEnd: function scrollbarDragEnd() {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor, #cursor\").css(\"opacity\", \"1\");\n      }\n    }\n  });\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".swiper-slide__image\").addClass(\"slider__img-horizontal\").removeClass(\"slider__img-vertical\");\n  });\n};\n\n//# sourceURL=webpack:///./ts/game/skins/components/sliders_constructions.ts?");

/***/ }),

/***/ "./ts/game/skins/skins.ts":
/*!********************************!*\
  !*** ./ts/game/skins/skins.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var originSCSS_game_skins_skins_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! originSCSS/game/skins/skins.scss */ \"./scss/game/skins/skins.scss\");\n/* harmony import */ var originSCSS_game_skins_adap_adap_skins_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! originSCSS/game/skins/adap/adap-skins.scss */ \"./scss/game/skins/adap/adap-skins.scss\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"../node_modules/swiper/swiper.min.css\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider */ \"./ts/game/skins/components/slider.ts\");\n/* harmony import */ var _components_skin_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skin_section */ \"./ts/game/skins/components/skin_section.ts\");\n/* harmony import */ var _components_change_img_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/change_img_color */ \"./ts/game/skins/components/change_img_color.ts\");\n\n\n\n\n\n\n // Choose section of skins \n\njquery__WEBPACK_IMPORTED_MODULE_3__(\".content__skins\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_3__(\".content__character\").fadeIn();\n  jquery__WEBPACK_IMPORTED_MODULE_3__(\".content__character\").css(\"display\", \"flex\");\n});\n\n//# sourceURL=webpack:///./ts/game/skins/skins.ts?");

/***/ }),

/***/ "./ts/navigation/components/check_page_language.ts":
/*!*********************************************************!*\
  !*** ./ts/navigation/components/check_page_language.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": function() { return /* binding */ changeLang; },\n/* harmony export */   \"contentUpdate\": function() { return /* binding */ contentUpdate; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n// Get language form Local Storage\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var appLang = localStorage.getItem(\"lang\");\n\n  if (appLang === null) {\n    var userLanguage;\n    var userLang = navigator.language;\n    if (userLang === \"en\" || userLang === \"en-US\") userLanguage = \"en\";else if (userLang === \"uk\") userLanguage = \"ua\";else if (userLang === \"es\") userLanguage = \"es\";else userLanguage = \"en\";\n    contentUpdate(userLanguage);\n  } else contentUpdate(appLang);\n}); // Change language\n\nvar changeLang = function changeLang(langVal) {\n  return contentUpdate(langVal);\n}; // Change content\n\nvar contentUpdate = function contentUpdate(language) {\n  var pageName = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-name\"),\n      pageDateMenu = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-menu\");\n  var pageType = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-type\");\n  var isTemplate = location.href.indexOf(\"#\") !== -1;\n\n  if (isTemplate) {\n    if (pageType.indexOf(\"_\") !== -1) pageType = pageType.split(\"_\")[1];\n    __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageDateMenu, \"/\").concat(pageType, \"/\").concat(pageName, \".json\")).then(function (content) {\n      return importContent(content[\"default\"], language);\n    });\n  } else {\n    __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \"/\").concat(pageName, \".json\")).then(function (content) {\n      return importContent(content[\"default\"], language);\n    }).catch(function (err) {\n      return __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \"/content_files/\").concat(pageName, \".json\")).then(function (content) {\n        return importContent(content[\"default\"], language);\n      });\n    }).catch(function (err) {\n      return __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageType, \"/\").concat(pageName, \".json\")).then(function (content) {\n        return importContent(content[\"default\"], language);\n      });\n    });\n  }\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"ua\")) contentUpdate(\"ua\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"en\")) contentUpdate(\"en\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"es\")) contentUpdate(\"es\");\n});\n\nfunction importContent(obj, language) {\n  var content = obj[language],\n      contentNum = Object.entries(content).length;\n\n  for (var l = 0; l < contentNum + repeatItem(); l++) {\n    var getSelectorExport = jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[l];\n    if (getSelectorExport === undefined) continue;\n    var getAttrExport = getSelectorExport.getAttribute(\"data-key\");\n    getSelectorExport.innerHTML = content[getAttrExport];\n  }\n\n  localStorage.setItem(\"title\", document.title);\n}\n\n;\n\nvar repeatItem = function repeatItem() {\n  var allContentChangeBlocks = [];\n\n  for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\").length; i++) {\n    allContentChangeBlocks.push(jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[i].attributes[\"data-key\"].textContent);\n  }\n\n  var toFindDuplicates = function toFindDuplicates(array) {\n    return array.filter(function (item, index) {\n      return array.indexOf(item) !== index;\n    });\n  };\n\n  return toFindDuplicates(allContentChangeBlocks).length;\n};\n\n//# sourceURL=webpack:///./ts/navigation/components/check_page_language.ts?");

/***/ }),

/***/ "./scss/cursor/adap/adap-cursor.scss":
/*!*******************************************!*\
  !*** ./scss/cursor/adap/adap-cursor.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/cursor/adap/adap-cursor.scss?");

/***/ }),

/***/ "./scss/cursor/cursor.scss":
/*!*********************************!*\
  !*** ./scss/cursor/cursor.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/cursor/cursor.scss?");

/***/ }),

/***/ "./scss/game/skins/adap/adap-skins.scss":
/*!**********************************************!*\
  !*** ./scss/game/skins/adap/adap-skins.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/game/skins/adap/adap-skins.scss?");

/***/ }),

/***/ "./scss/game/skins/skins.scss":
/*!************************************!*\
  !*** ./scss/game/skins/skins.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/game/skins/skins.scss?");

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
/******/ 			"game_skins": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_swiper_swiper_min_css-node_modules_normalize_css_normalize_css-node_modu-2dbbff"], function() { return __webpack_require__("./ts/game/skins/skins.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;