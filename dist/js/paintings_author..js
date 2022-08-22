(()=>{var e,t,r,n,o={1457:(e,t,r)=>{"use strict";r.d(t,{_:()=>k,w:()=>j});var n=r(5638),o=["arnolfini-portrait","birth-of-venus","mona-lisa","creation-of-adam","garden-of-earthly-delights","harvesters","girl-with-a-pearl-earring","raft-of-the-medusa","wanderer-above-the-sea-of-fog","breakfast-on-the-grass","gross-clinic","luncheon-of-the-boating-party","self-portrait-with-bandaged-ear","starry-night","son-of-man"],a=["jan-van-eyck","sandro-botticelli","leonardo-da-vinci","michelangelo-buonarroti","hieronymus-bosch","pieter-bruegel","johannes-vermeer","theodore-gericault","caspar-david-friedrich","edouard-manet","thomas-eakins","pierre-auguste-renoir","vincent-van-gogh","rene-magritte"],i=n(window),s=n("body"),l=function(){var e=Number(k())-1;return e<0&&(e=j().length-1),j()[e]},c=function(){var e=Number(k())+1;return e===j().length&&(e=0),j()[e]};n(".navigating__arrow-left").on("click",(function(){var e=i.width();u("nextAuthor","authorToAuthor","arrow__prev-page-name",l()),e<1e3&&u("swipeRight","authorToAuthor swipeRightLoad","arrow__next-page-name",c())})),n(".navigating__arrow-right").on("click",(function(){var e=i.width();u("nextAuthor","authorToAuthor","arrow__next-page-name",c()),e<1e3&&u("swipeLeft","authorToAuthor","arrow__prev-page-name",l())}));var u=function(e,t,r,o){s.hasClass(e)||(localStorage.setItem("typeAuthorAnim",t),s.removeClass(),setTimeout((function(){return s.addClass(e)})),n(".cursor, #cursor").addClass("close-cursor"),n("."+r).css("animation","hide 0.3s forwards"),n("html").animate({scrollTop:"0"}),setTimeout((function(){localStorage.setItem("newPageArrowClick",r),location.href="./paintings_author.html#"+o}),300))};i.on("popstate",(function(){return location.reload()}));var d=function(e,t){var o=localStorage.getItem("lang");r(4486)("./"+e+".json").then((function(e){var r=Object.entries(e.default)[Object.keys(e.default).indexOf(o)][1].main_title;n(t).html(r)}))};i.on("load",(function(){var e=localStorage.getItem("newPageArrowClick"),t=localStorage.getItem("activeCursor");null!==e&&"false"!==t&&n("."+e).css("opacity","1").css("display","block"),n(".navigating__arrow").on("mouseleave",(function(e){n(e.target.childNodes[0]).css({animation:"hide 0.4s forwards",display:"none"}),localStorage.setItem("activeCursor","false")}));n(".navigating__arrow").on("mouseover",(function(e){n(e.target.childNodes[0]).css({animation:"show 0.4s forwards",display:"block"}),!0&&n(".cursor").hasClass("activeCursor")&&n(e.target.childNodes[0]).css("animation","none"),localStorage.setItem("activeCursor","true")})),localStorage.removeItem("newPageArrowClick")}));var g,h,f=n(window);setTimeout((function(){return localStorage.setItem("typePaintingAnim","authorToAuthor")}),700),n("*").on("touchstart",(function(e){g=e.touches[0].clientX,e.touches[0].clientY})),n("*").on("touchmove",(function(e){h=e.touches[0].clientX,e.touches[0].clientY})),n("*").on("touchend",(function(){var e=f.width(),t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),r=n(".menu, .languages__choice, .colors__active").css("display");g+100<h&&t&&"none"===r&&e<1e3&&u("swipeLeft","authorToAuthor swipeLeftLoad","arrow__prev-page-name",l()),g-100>h&&t&&"none"===r&&e<1e3&&u("swipeRight","authorToAuthor swipeRightLoad","arrow__next-page-name",c())}));var v=n(window),p=n("body");!function(){for(var e=n(".content__year"),t=1;t<=6;t++)e.append('<div class="year-line year-line-'.concat(t,'"></div>'));for(var r=1;r<=5;r++)e.append('<div class="year-line-active year-line-active-'.concat(r,'"></div>'));for(var o=6;o>0;o--)e.append('<div class="year-line year-line-'.concat(o,'"></div>'));n("<p class='language year__text1' data-key='birthday_year'></p>").insertAfter(".year-line-active-1"),n("<p class='language year__text2' data-key='dead_year'></p>").insertAfter(".year-line-active-5")}();var m=function(){var e=n(".year-line-active-1")[0].getBoundingClientRect(),t=n(".year-line-active-5")[0].getBoundingClientRect();n(".year__text1").css("top",e.bottom),n(".year__text2").css("top",t.bottom),n(".year__text1").css("left",e.left),n(".year__text2").css("left",t.left)};function y(){var e=1,t=setInterval((function(){n(".year-line-"+e).addClass("year-line-show"),e++}),80),r=80*n(".year-line").length;setTimeout((function(){return clearInterval(t)}),r),setTimeout((function(){return function(e){for(var t=[],r=n(".year-line-active"),o=1;o<=r.length;o++)t.push("year-line-active-".concat(o));var a=setInterval((function(){t.length>=1&&(n("."+t[0]).addClass("year-line-show"),n("."+t[t.length-1]).addClass("year-line-show"),t.pop(),t.shift())}),e),i=r.length*e;setTimeout((function(){clearInterval(a),m()}),i);var s=n(".year-line").length*e+i-n(".year-line").length*e/2;n(".content__year p").css("animation-delay",s+"ms")}(80)}),r/2)}v.on("load",(function(){return m()})),v.on("resize",(function(){return m()})),v.on("load",(function(){p.hasClass("paintingToAuthor")&&y()})),n(".content__close").on("click",(function(){n(".year-line-show").removeClass("year-line-show"),y()}));var _=n(window),w=n("body"),b=location.href.split("#")[1];w.attr("data-name",b);!function(){if(!localStorage.getItem("allAuthors")){var e=String(o),t=String(a);localStorage.setItem("allPaintings",e),localStorage.setItem("allAuthors",t)}}(),n(".content__close").on("click",(function(){n(".cursor, #cursor, .progress-wrap").addClass("close-cursor"),localStorage.setItem("typePaintingAnim","paintingsToPainting"),w.removeClass(),setTimeout((function(){return w.addClass("authorToPainting")})),setTimeout((function(){var e=localStorage.getItem("lastPaintingName");location.href=null===e?"./paintings.html":"./painting.html#"+e}),810)})),n(".content__information img").attr("src","./img/paintings/authors/"+b+".webp");var j=function(){var e=localStorage.getItem("allAuthors").split(",");return e},k=function(){var e=String(j().indexOf(b));return localStorage.setItem("lastAuthor",e),e};k();var C=function(){var e=localStorage.getItem("typeAuthorAnim");null===e?w.addClass("authorToAuthor"):w.addClass(e)};n(".languages__choice").on("click",(function(){d(c(),".arrow__next-page-name"),d(l(),".arrow__prev-page-name")})),C(),_.on("load",(function(){C(),d(c(),".arrow__next-page-name"),d(l(),".arrow__prev-page-name")}));var O=function(){if(_.width()<1e3){var e=n(".content__information img"),t=e[0].getBoundingClientRect().top+e.height()-n(".navigation").outerHeight();n(".content__year").css("top",t)}else n(".content__year").css("top","0")};_.on("load",(function(){return O()})),_.on("resize",(function(){return O()}))},4486:(e,t,r)=>{var n={"./caspar-david-friedrich.json":[1241,1241],"./edouard-manet.json":[9210,9210],"./hieronymus-bosch.json":[1441,1441],"./jan-van-eyck.json":[6522,6522],"./johannes-vermeer.json":[1544,1544],"./leonardo-da-vinci.json":[7529,7529],"./michelangelo-buonarroti.json":[4306,4306],"./pierre-auguste-renoir.json":[9804,9804],"./pieter-bruegel.json":[1931,1931],"./rene-magritte.json":[4649,4649],"./sandro-botticelli.json":[3977,3977],"./theodore-gericault.json":[7381,7381],"./thomas-eakins.json":[2667,2667],"./vincent-van-gogh.json":[5634,5634]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r.t(o,19)))}o.keys=()=>Object.keys(n),o.id=4486,e.exports=o}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"./js/"+e+"..js",i.miniCssF=e=>"css/paintings_author.css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var a,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=e),n[e]=[t];var d=(t,r)=>{a.onerror=a.onload=null,clearTimeout(g);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={7434:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,s,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var u=l(i)}for(t&&t(r);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;return i.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=i.O(void 0,[5638],(()=>i(1457)));s=i.O(s)})();