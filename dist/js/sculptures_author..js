!function(){var e,t,n,r,o={8360:function(e,t,n){"use strict";n.d(t,{_:function(){return A},w:function(){return S}});var r=n(5638),o=["nefertiti-bust","discobolus","winged-victory-of-samothrace","venus-de-milo","apollo-belvedere","laocoon-and-his-sons","david","little-dancer","thinker","kiss"],a=["auguste-rodin","michelangelo-buonarroti","myron","giovanni-angelo","pliny-the-elder","thutmose"],i=r(window),u=r("body"),c=function(){var e=Number(A())-1;return e<0&&(e=S().length-1),S()[e]},l=function(){var e=Number(A())+1;return e===S().length&&(e=0),S()[e]};r(".navigating__arrow-left").on("click",(function(){var e=i.width();s("nextAuthor","authorToAuthor","arrow__prev-page-name",c()),e<1e3&&s("swipeRight","authorToAuthor swipeRightLoad","arrow__next-page-name",l())})),r(".navigating__arrow-right").on("click",(function(){var e=i.width();s("nextAuthor","authorToAuthor","arrow__next-page-name",l()),e<1e3&&s("swipeLeft","authorToAuthor","arrow__prev-page-name",c())}));var s=function(e,t,n,o){u.hasClass(e)||(localStorage.setItem("typeAuthorAnim",t),u.removeClass(),setTimeout((function(){return u.addClass(e)})),r(".cursor, #cursor").addClass("close-cursor"),r("."+n).css("animation","hide 0.3s forwards"),r("html").animate({scrollTop:"0"}),setTimeout((function(){localStorage.setItem("newPageArrowClick",n),location.href="./sculptures_author.html#"+o}),300))};i.on("popstate",(function(){return location.reload()}));var f=function(e,t){var o=localStorage.getItem("lang");n(7583)("./"+e+".json").then((function(e){var n=Object.entries(e.default)[Object.keys(e.default).indexOf(o)][1].main_title;r(t).html(n)}))};i.on("load",(function(){var e=localStorage.getItem("newPageArrowClick"),t=localStorage.getItem("activeCursor");null!==e&&"false"!==t&&r("."+e).css("opacity","1").css("display","block"),r(".navigating__arrow").on("mouseleave",(function(e){r(e.target.childNodes[0]).css({animation:"hide 0.4s forwards",display:"none"}),localStorage.setItem("activeCursor","false")}));r(".navigating__arrow").on("mouseover",(function(e){r(e.target.childNodes[0]).css({animation:"show 0.4s forwards",display:"block"}),!0&&r(".cursor").hasClass("activeCursor")&&r(e.target.childNodes[0]).css("animation","none"),localStorage.setItem("activeCursor","true")})),localStorage.removeItem("newPageArrowClick")}));var d=r(window),p=r("body");!function(){for(var e=r(".content__year"),t=1;t<=6;t++)e.append('<div class="year-line year-line-'.concat(t,'"></div>'));for(var n=1;n<=5;n++)e.append('<div class="year-line-active year-line-active-'.concat(n,'"></div>'));for(var o=6;o>0;o--)e.append('<div class="year-line year-line-'.concat(o,'"></div>'));r("<p class='language year__text1' data-key='born_year'></p>").insertAfter(".year-line-active-1"),r("<p class='language year__text2' data-key='died_year'></p>").insertAfter(".year-line-active-5")}();var g=function(){var e=r(".year-line-active-1")[0].getBoundingClientRect(),t=r(".year-line-active-5")[0].getBoundingClientRect();r(".year__text1").css("top",e.bottom),r(".year__text2").css("top",t.bottom),r(".year__text1").css("left",e.left),r(".year__text2").css("left",t.left)};function h(){var e=1,t=setInterval((function(){r(".year-line-"+e).addClass("year-line-show"),e++}),80),n=80*r(".year-line").length;setTimeout((function(){return clearInterval(t)}),n),setTimeout((function(){return function(e){for(var t=[],n=r(".year-line-active"),o=1;o<=n.length;o++)t.push("year-line-active-".concat(o));var a=setInterval((function(){t.length>=1&&(r("."+t[0]).addClass("year-line-show"),r("."+t[t.length-1]).addClass("year-line-show"),t.pop(),t.shift())}),e),i=n.length*e;setTimeout((function(){clearInterval(a),g()}),i);var u=r(".year-line").length*e+i-r(".year-line").length*e/2.5;r(".content__year p").css("animation-delay",u+"ms")}(80)}),n/2)}d.on("load",(function(){return g()})),d.on("resize",(function(){return g()})),d.on("load",(function(){p.hasClass("sculptureToAuthor")&&h()})),r(".content__close").on("click",(function(){r(".year-line-show").removeClass("year-line-show"),h()}));var v,m,y=r(window);setTimeout((function(){return localStorage.setItem("typePaintingAnim","authorToAuthor")}),700),r("*").on("touchstart",(function(e){v=e.touches[0].clientX,e.touches[0].clientY})),r("*").on("touchmove",(function(e){m=e.touches[0].clientX,e.touches[0].clientY})),r("*").on("touchend",(function(){var e=y.width(),t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),n=r(".menu, .languages__choice, .colors__active").css("display");v+100<m&&t&&"none"===n&&e<1e3&&s("swipeLeft","authorToAuthor swipeLeftLoad","arrow__prev-page-name",c()),v-100>m&&t&&"none"===n&&e<1e3&&s("swipeRight","authorToAuthor swipeRightLoad","arrow__next-page-name",l())}));var _=r(window),w=r("body"),b=location.href.split("#")[1];w.attr("data-name",b);!function(){if(!localStorage.getItem("allSculpturesAuthors")){var e=String(o),t=String(a);localStorage.setItem("allSculptures",e),localStorage.setItem("allSculpturesAuthors",t)}}(),r(".content__close").on("click",(function(){r(".cursor, #cursor, .progress-wrap").addClass("close-cursor"),localStorage.setItem("typeSculpturesAnim","paintingsToSculptures"),w.removeClass(),setTimeout((function(){return w.addClass("authorToSculpture")})),setTimeout((function(){var e=localStorage.getItem("lastSculptureName");localStorage.setItem("typeSculptureAnim","sculpturesToSculpture"),location.href=null===e?"./sculptures.html":"./sculpture.html#"+e}),810)})),r(".content__information img").attr("src","./img/sculptures/authors/".concat(b,".webp"));var S=function(){var e=localStorage.getItem("allSculpturesAuthors").split(",");return e},A=function(){var e=String(S().indexOf(b));return localStorage.setItem("lastSculpturesAuthor",e),e};A();var C=function(){var e=localStorage.getItem("typeAuthorAnim");null===e?w.addClass("authorToAuthor"):w.addClass(e)};r(".languages__choice").on("click",(function(){f(l(),".arrow__next-page-name"),f(c(),".arrow__prev-page-name")})),C(),_.on("load",(function(){C(),f(l(),".arrow__next-page-name"),f(c(),".arrow__prev-page-name")}));var O=function(){if(_.width()<1e3){var e=r(".content__information img"),t=e[0].getBoundingClientRect().top+e.height()-r(".navigation").outerHeight();r(".content__year").css("top",t)}else r(".content__year").css("top","0")};_.on("load",(function(){return O()})),_.on("resize",(function(){return O()}))},7583:function(e,t,n){var r={"./auguste-rodin.json":[4892,4892],"./edgar-degas.json":[1716,1716],"./giovanni-angelo.json":[7206,9072],"./michelangelo-buonarroti.json":[5698,5698],"./myron.json":[9975,9975],"./pliny-the-elder.json":[4502,4502],"./thutmose.json":[3118,3118]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=7583,e.exports=o}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e].call(n.exports,n,n.exports,i),n.exports}i.m=o,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var u=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"./js/"+e+"..js"},i.miniCssF=function(e){return"css/sculptures_author.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},i.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var a,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==e){a=s;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=e),r[e]=[t];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"}(),function(){var e={3250:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),u=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],u=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)i.o(u,r)&&(i.m[r]=u[r]);if(c)var s=c(i)}for(t&&t(n);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return i.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var u=i.O(void 0,[5638],(function(){return i(8360)}));u=i.O(u)}();