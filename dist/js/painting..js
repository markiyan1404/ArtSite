!function(){var e,o,t,n,i={7699:function(e,o,t){"use strict";t.d(o,{b:function(){return S},$:function(){return x}});var n=t(5638),i=n(window),r=n("body"),a=function(){var e=Number(S())-1;return e<0&&(e=x().length-1),x()[e]},s=function(){var e=Number(S())+1;return e===x().length&&(e=0),x()[e]};n(".navigating__arrow-left").on("click",(function(){var e=i.width();m("nextPainting","paintingToPainting","arrow__prev-page-name",a()),e<1e3&&m("swipeRight","paintingToPainting swipeRightLoad","arrow__next-page-name",s())})),n(".navigating__arrow-right").on("click",(function(){var e=i.width();m("nextPainting","paintingToPainting","arrow__next-page-name",s()),e<1e3&&m("swipeLeft","paintingToPainting","arrow__prev-page-name",a())}));var m=function(e,o,t,i){r.hasClass(e)||(localStorage.setItem("typePaintingAnim",o),r.removeClass(),setTimeout((function(){return r.addClass(e)})),n("."+t).css("animation","hide 0.3s forwards"),n(".cursor, #cursor").addClass("close-cursor"),n("html").animate({scrollTop:"0"}),setTimeout((function(){localStorage.setItem("newPageArrowClick",t),location.href="./painting.html#"+i}),300))};i.on("popstate",(function(){return location.reload()}));var l=function(e,o){var i=localStorage.getItem("lang");t(2845)("./".concat(e,".json")).then((function(e){var t=Object.entries(e.default)[Object.keys(e.default).indexOf(i)][1],r=t.main_title;n(o).html(r),console.log(t)}))};i.on("load",(function(){var e=localStorage.getItem("newPageArrowClick");JSON.parse(localStorage.getItem("activeCursor"))&&n("."+e).css("opacity","1").css("display","block"),n(".navigating__arrow").on("mouseleave",(function(e){n(e.target.childNodes[0]).css({animation:"hide 0.4s forwards",display:"none"}),localStorage.setItem("activeCursor","false")}));n(".navigating__arrow").on("mouseover",(function(e){n(e.target.childNodes[0]).css({animation:"show 0.4s forwards",display:"block"}),!0&&n(".cursor").hasClass("activeCursor")&&n(e.target.childNodes[0]).css("animation","none"),localStorage.setItem("activeCursor","true")})),localStorage.removeItem("newPageArrowClick")}));var c=["arnolfini-portrait","birth-of-venus","mona-lisa","creation-of-adam","garden-of-earthly-delights","harvesters","girl-with-a-pearl-earring","raft-of-the-medusa","wanderer-above-the-sea-of-fog","breakfast-on-the-grass","gross-clinic","luncheon-of-the-boating-party","self-portrait-with-bandaged-ear","starry-night","son-of-man"],u=["jan-van-eyck","sandro-botticelli","leonardo-da-vinci","michelangelo-buonarroti","hieronymus-bosch","pieter-bruegel","johannes-vermeer","theodore-gericault","caspar-david-friedrich","edouard-manet","thomas-eakins","pierre-auguste-renoir","vincent-van-gogh","rene-magritte"],g=t(9300),d=t.n(g),f=n(window),h=(n(".js-image-zoom__zoomed-area"),n(".js-image-zoom__zoomed-image")),p=n("#information__image"),v=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i,z=function(){return.33*n(".content__information").width()},y=function(){var e={width:z(),zoomWidth:z(),offset:{vertical:0,horizontal:10}};n(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove(),new(d())(document.getElementById("information__image"),e)};f.on("load",(function(){y(),n(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove(),setTimeout((function(){return y()}),700)})),f.on("resize",(function(){return setTimeout((function(){return y()}),50)})),p.on("mousemove",(function(e){if(v.test(navigator.userAgent)||f.width()<=1e3)n(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();else{var o=document.getElementById("js-image-zoom__zoomed-image");if(n(e.target).hasClass("js-image-zoom__zoomed-image"))return b(o),void n(".cursor, #cursor").removeClass("activeCursore2");n(".js-image-zoom__zoomed-image").attr("id","js-image-zoom__zoomed-image"),o&&o.style.setProperty("display","block","important"),_("zoom-area-NoActive","zoom-area-active","zoom-image-Noactive","zoom-image-active")}})),p.on("mouseleave",(function(e){if(v.test(navigator.userAgent)||f.width()<=1e3)n(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();else{n(h).attr("id","js-image-zoom__zoomed-image");var o=document.getElementById("js-image-zoom__zoomed-image");if(b(o),n(".cursor, #cursor").removeClass("activeCursore2"),n(e.target).hasClass("js-image-zoom__zoomed-image"))return;_("zoom-area-active","zoom-area-NoActive","zoom-image-active","zoom-image-Noactive")}}));var I,w,_=function(e,o,t,i){var r=n(".js-image-zoom__zoomed-area"),a=n(".js-image-zoom__zoomed-image");r.removeClass(e).addClass(o),a.removeClass(t).addClass(i)},b=function(e){setTimeout((function(){e.style.setProperty("display","none","important"),n(".js-image-zoom__zoomed-image").removeClass("zoom-image-Noactive")}),150)},j=n(window),L=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;setTimeout((function(){return localStorage.setItem("typePaintingAnim","paintingToPainting")}),700),n("*").on("touchstart",(function(e){I=e.touches[0].clientX,e.touches[0].clientY})),n("*").on("touchmove",(function(e){w=e.touches[0].clientX,e.touches[0].clientY})),n("*").on("touchend",(function(){var e=j.width(),o=L.test(navigator.userAgent),t=n(".menu, .languages__choice, .colors__active").css("display");I+100<w&&o&&"none"===t&&e<1e3&&m("swipeLeft","paintingToPainting","arrow__prev-page-name",a()),I-100>w&&o&&"none"===t&&e<1e3&&m("swipeRight","paintingToPainting swipeRightLoad","arrow__next-page-name",s())}));var k=n(window),C=n("body"),P=n("#information__image"),O=location.href.split("#")[1];C.attr("data-name",O);!function(){if(!localStorage.getItem("allPaintings")){var e=String(c),o=String(u);localStorage.setItem("allPaintings",e),localStorage.setItem("allAuthors",o)}}(),n(".content__close").on("click",(function(){n(".anim-show1").addClass("allPaintings"),setTimeout((function(){return n(".anim-show2").addClass("allPaintings")}),700),n(".cursor, #cursor, .progress-wrap").addClass("close-cursor"),setTimeout((function(){return location.href="./paintings.html"}),1500)})),k.on("load",(function(){return n("#information__image img").attr("src","./img/paintings/"+O+".webp")}));var x=function(){var e=localStorage.getItem("allPaintings").split(",");return e},S=function(){var e=String(x().indexOf(O)),o=x()[e];return localStorage.setItem("lastPainting",e),localStorage.setItem("lastPaintingName",o),e};S(),t(2845)("./".concat(O,".json")).then((function(e){n(".description__link").attr("data-author-link",e.specifical.authorLink)})),n(".description__link").on("click",(function(){C.removeClass(),setTimeout((function(){return C.addClass("paintingAuthor")})),n(".cursor, #cursor, .progress-wrap").addClass("close-cursor");var e=n(this).attr("data-author-link");localStorage.setItem("typeAuthorAnim","paintingToAuthor"),setTimeout((function(){return location.href="./paintings_author.html#"+e}),500)}));var E=function(){var e=localStorage.getItem("typePaintingAnim");null===e?C.addClass("paintingToPainting"):C.addClass(e)};n(".languages__choice").on("click",(function(){l(s(),".arrow__next-page-name"),l(a(),".arrow__prev-page-name")})),E(),k.on("load",(function(){E(),l(s(),".arrow__next-page-name"),l(a(),".arrow__prev-page-name")})),k.width()<=1e3&&P.removeClass("mouse-active2"),k.on("resize",(function(){k.width()<=1e3?P.removeClass("mouse-active2"):P.addClass("mouse-active2")}))},9300:function(e){var o,t;o=this,t=function(){return function(e,o){"use strict";var t=o;if(e){var n,i,r,a={sourceImg:{element:null,width:0,height:0,naturalWidth:0,naturalHeight:0},zoomedImgOffset:{vertical:0,horizontal:0},zoomedImg:{element:null,width:0,height:0},zoomLens:{element:null,width:0,height:0}},s=document.createElement("div"),m=document.createElement("div");a.zoomedImgOffset={vertical:t.offset&&t.offset.vertical?t.offset.vertical:0,horizontal:t.offset&&t.offset.horizontal?t.offset.horizontal:0},a.zoomPosition=t.zoomPosition||"right",a.zoomContainer=t.zoomContainer?t.zoomContainer:e;var l={handleEvent:function(e){switch(e.type){case"mousemove":return this.handleMouseMove(e);case"mouseenter":return this.handleMouseEnter(e);case"mouseleave":return this.handleMouseLeave(e);case"scroll":return this.handleScroll(e)}},handleMouseMove:function(e){var o,t,s;r&&(o=g(e.clientX-r.left),t=d(e.clientY-r.top),s="-"+o*n+"px -"+t*i+"px",a.zoomedImg.element.style.backgroundPosition=s,a.zoomLens.element.style.cssText+="top:"+t+"px;left:"+o+"px;display: block;")},handleMouseEnter:function(){a.zoomedImg.element.style.display="block",a.zoomLens.element.style.display="block"},handleMouseLeave:function(){a.zoomedImg.element.style.display="none",a.zoomLens.element.style.display="none"},handleScroll:function(){r=c(a.sourceImg.element)}};return h(),a.sourceImg.element.complete?f():a.sourceImg.element.onload=f,{setup:function(){h()},kill:function(){p()},_getInstanceInfo:function(){return{setup:h,kill:p,onSourceImgLoad:f,data:a,options:t}}}}function c(e){if(e){var o=e.getBoundingClientRect();return{left:o.left,top:o.top}}return{left:0,top:0}}function u(e,o,t){var n=function(e,o,t){return e<o?o:e>t?t:e}(e,o,t);return n-o}function g(e){var o,n=a.zoomLens.width/2;return u(e,n,(o=n,t.width-o))}function d(e){var o,n=a.zoomLens.height/2;return u(e,n,(o=n,t.height-o))}function f(){t.height=t.height||a.sourceImg.element.height,a.sourceImg.element.style.height=t.height+"px",t.width=t.width||a.sourceImg.element.width,a.sourceImg.element.style.width=t.width+"px",function(e,o){e.scale?(o.zoomedImg.element.style.width=e.width*e.scale+"px",o.zoomedImg.element.style.height=e.height*e.scale+"px"):e.zoomWidth?(o.zoomedImg.element.style.width=e.zoomWidth+"px",o.zoomedImg.element.style.height=o.sourceImg.element.style.height):(o.zoomedImg.element.style.width="100%",o.zoomedImg.element.style.height="100%")}(t,a),a.sourceImg.naturalWidth=a.sourceImg.element.naturalWidth,a.sourceImg.naturalHeight=a.sourceImg.element.naturalHeight,a.zoomedImg.element.style.backgroundSize=a.sourceImg.naturalWidth+"px "+a.sourceImg.naturalHeight+"px",t.zoomStyle&&(a.zoomedImg.element.style.cssText+=t.zoomStyle),t.zoomLensStyle?a.zoomLens.element.style.cssText+=t.zoomLensStyle:(a.zoomLens.element.style.background="white",a.zoomLens.element.style.opacity="0.4"),n=a.sourceImg.naturalWidth/t.width,i=a.sourceImg.naturalHeight/t.height,r=c(a.sourceImg.element),t.scale?(a.zoomLens.width=t.width/(a.sourceImg.naturalWidth/(t.width*t.scale)),a.zoomLens.height=t.height/(a.sourceImg.naturalHeight/(t.height*t.scale))):t.zoomWidth?(a.zoomLens.width=t.zoomWidth/n,a.zoomLens.height=t.height/i):(a.zoomedImg.element.style.display="block",a.zoomLens.width=a.zoomedImg.element.clientWidth/n,a.zoomLens.height=a.zoomedImg.element.clientHeight/i,a.zoomedImg.element.style.display="none"),a.zoomLens.element.style.position="absolute",a.zoomLens.element.style.width=a.zoomLens.width+"px",a.zoomLens.element.style.height=a.zoomLens.height+"px",a.zoomLens.element.pointerEvents="none"}function h(){if(t.img){var o=document.createElement("img");o.src=t.img,a.sourceImg.element=e.appendChild(o)}else a.sourceImg.element=e.children[0],"IMG"!==a.sourceImg.element.nodeName&&(a.sourceImg.element=a.sourceImg.element.querySelector("img"));switch(t=t||{},e.style.position="relative",a.sourceImg.element.style.width=t.width?t.width+"px":"auto",a.sourceImg.element.style.height=t.height?t.height+"px":"auto",a.zoomLens.element=e.appendChild(m),a.zoomLens.element.style.display="none",a.zoomLens.element.classList.add("js-image-zoom__zoomed-area"),a.zoomedImg.element=a.zoomContainer.appendChild(s),a.zoomedImg.element.classList.add("js-image-zoom__zoomed-image"),a.zoomedImg.element.style.backgroundImage="url('"+a.sourceImg.element.src+"')",a.zoomedImg.element.style.backgroundRepeat="no-repeat",a.zoomedImg.element.style.display="none",a.zoomPosition){case"left":a.zoomedImg.element.style.position="absolute",a.zoomedImg.element.style.top=a.zoomedImgOffset.vertical+"px",a.zoomedImg.element.style.left=a.zoomedImgOffset.horizontal-2*a.zoomedImgOffset.horizontal+"px",a.zoomedImg.element.style.transform="translateX(-100%)";break;case"top":a.zoomedImg.element.style.position="absolute",a.zoomedImg.element.style.top=a.zoomedImgOffset.vertical-2*a.zoomedImgOffset.vertical+"px",a.zoomedImg.element.style.left="calc(50% + "+a.zoomedImgOffset.horizontal+"px)",a.zoomedImg.element.style.transform="translate3d(-50%, -100%, 0)";break;case"bottom":a.zoomedImg.element.style.position="absolute",a.zoomedImg.element.style.bottom=a.zoomedImgOffset.vertical-2*a.zoomedImgOffset.vertical+"px",a.zoomedImg.element.style.left="calc(50% + "+a.zoomedImgOffset.horizontal+"px)",a.zoomedImg.element.style.transform="translate3d(-50%, 100%, 0)";break;case"original":a.zoomedImg.element.style.position="absolute",a.zoomedImg.element.style.top="0px",a.zoomedImg.element.style.left="0px";break;default:a.zoomedImg.element.style.position="absolute",a.zoomedImg.element.style.top=a.zoomedImgOffset.vertical+"px",a.zoomedImg.element.style.right=a.zoomedImgOffset.horizontal-2*a.zoomedImgOffset.horizontal+"px",a.zoomedImg.element.style.transform="translateX(100%)"}return e.addEventListener("mousemove",l,!1),e.addEventListener("mouseenter",l,!1),e.addEventListener("mouseleave",l,!1),a.zoomLens.element.addEventListener("mouseenter",l,!1),a.zoomLens.element.addEventListener("mouseleave",l,!1),window.addEventListener("scroll",l,!1),a}function p(){return e.removeEventListener("mousemove",l,!1),e.removeEventListener("mouseenter",l,!1),e.removeEventListener("mouseleave",l,!1),a.zoomLens.element.removeEventListener("mouseenter",l,!1),a.zoomLens.element.removeEventListener("mouseleave",l,!1),window.removeEventListener("scroll",l,!1),a.zoomLens&&a.zoomedImg&&(e.removeChild(a.zoomLens.element),a.zoomContainer.removeChild(a.zoomedImg.element)),t.img?e.removeChild(a.sourceImg.element):(a.sourceImg.element.style.width="",a.sourceImg.element.style.height=""),a}}},e.exports?e.exports=t():o.ImageZoom=t()},2845:function(e,o,t){var n={"./arnolfini-portrait.json":[3206,3206],"./birth-of-venus.json":[9251,9251],"./breakfast-on-the-grass.json":[3253,3253],"./creation-of-adam.json":[6696,6696],"./garden-of-earthly-delights.json":[5013,5013],"./girl-with-a-pearl-earring.json":[5247,5247],"./gross-clinic.json":[8245,8245],"./harvesters.json":[4768,4768],"./luncheon-of-the-boating-party.json":[7314,7314],"./mona-lisa.json":[7021,7021],"./raft-of-the-medusa.json":[2541,2541],"./self-portrait-with-bandaged-ear.json":[1765,1765],"./son-of-man.json":[1303,1303],"./starry-night.json":[1592,1592],"./wanderer-above-the-sea-of-fog.json":[5367,5367]};function i(e){if(!t.o(n,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=n[e],i=o[0];return t.e(o[1]).then((function(){return t.t(i,19)}))}i.keys=function(){return Object.keys(n)},i.id=2845,e.exports=i}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var t=r[e]={exports:{}};return i[e].call(t.exports,t,t.exports,a),t.exports}a.m=i,e=[],a.O=function(o,t,n,i){if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,m=0;m<t.length;m++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](t[m])}))?t.splice(m--,1):(s=!1,i<r&&(r=i));if(s){e.splice(c--,1);var l=n();void 0!==l&&(o=l)}}return o}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,n,i]},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,{a:o}),o},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);a.r(i);var r={};o=o||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~o.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(o){r[o]=function(){return e[o]}}));return r.default=function(){return e},a.d(i,r),i},a.d=function(e,o){for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(o,t){return a.f[t](e,o),o}),[]))},a.u=function(e){return"./js/"+e+"..js"},a.miniCssF=function(e){return"css/painting.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n={},a.l=function(e,o,t,i){if(n[e])n[e].push(o);else{var r,s;if(void 0!==t)for(var m=document.getElementsByTagName("script"),l=0;l<m.length;l++){var c=m[l];if(c.getAttribute("src")==e){r=c;break}}r||(s=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.src=e),n[e]=[o];var u=function(o,t){r.onerror=r.onload=null,clearTimeout(g);var i=n[e];if(delete n[e],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(t)})),o)return o(t)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),s&&document.head.appendChild(r)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var o=a.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"}(),function(){var e={1677:0};a.f.j=function(o,t){var n=a.o(e,o)?e[o]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=e[o]=[t,i]}));t.push(n[2]=i);var r=a.p+a.u(o),s=new Error;a.l(r,(function(t){if(a.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+o+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}}),"chunk-"+o,o)}},a.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,i,r=t[0],s=t[1],m=t[2],l=0;if(r.some((function(o){return 0!==e[o]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(m)var c=m(a)}for(o&&o(t);l<r.length;l++)i=r[l],a.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return a.O(c)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var s=a.O(void 0,[5638],(function(){return a(7699)}));s=a.O(s)}();