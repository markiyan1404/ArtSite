!function(){"use strict";var n,e={1466:function(n,e,t){var o=t(5638),i=t(8253);o(".content__close").on("click",(function(){var n=localStorage.getItem("lastPage");o(".anim-show1").addClass("menu-click"),setTimeout((function(){return o(".anim-show2").addClass("menu-click")}),700),setTimeout((function(){""===n&&(location.href="./"),n?location.href=n:(0,i.A)()}),1600)}))},8253:function(n,e,t){t.d(e,{A:function(){return r}});var o=t(5638),i=o(".anim-show"),a=o(".anim-show1"),u=o(".navigation__menu, .navigation__clouse"),s=function(){o(".navigation__menu, .navigation__clouse").attr("value","true"),setTimeout((function(){return o(".navigation__menu, .navigation__clouse").attr("value","false")}),1200)};o(".navigation__menu").on("click",(function(){return r()}));var r=function(){"true"!==o(".navigation__menu, .navigation__clouse").attr("value")&&(s(),i.removeClass("anim-show-default anim-show-close"),setTimeout((function(){return o(".anim-show1").addClass("anim-show-active")}),10),setTimeout((function(){return o(".anim-show2").addClass("anim-show-active")}),150),setTimeout((function(){return i.addClass("anim-show-default")}),800),setTimeout((function(){return i.removeClass("anim-show-active")}),1e3),o(".navigation__clouse, .anim-show").css("display","flex"),o(".navigation__menu").css("display","none"),setTimeout((function(){return o(".menu").css("display","flex")}),800))};o(".navigation__clouse").on("click",(function(){"true"!==u.attr("value")&&(s(),i.removeClass("anim-show-default anim-show-close"),a.addClass("anim-show-close"),setTimeout((function(){return o(".anim-show2").addClass("anim-show-close")}),150),setTimeout((function(){return i.fadeOut(300)}),900),setTimeout((function(){return o(".menu, .anim-show1").css("display","none")}),800),o(".navigation__menu").css("display","flex"),o(this).css("display","none"),setTimeout((function(){return o(".active-menu__child").removeClass("active-menu__child")}),1e3),setTimeout((function(){return o(".anim-show").removeClass("anim-show-close")}),1500),o("body").css("overflow-y","auto"),o(".navigation__menu").addClass("notActiveMenuIcon"))}))}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,n=[],o.O=function(e,t,i,a){if(!t){var u=1/0;for(l=0;l<n.length;l++){t=n[l][0],i=n[l][1],a=n[l][2];for(var s=!0,r=0;r<t.length;r++)(!1&a||u>=a)&&Object.keys(o.O).every((function(n){return o.O[n](t[r])}))?t.splice(r--,1):(s=!1,a<u&&(u=a));if(s){n.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,i,a]},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,{a:e}),e},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={6596:0,6327:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var i,a,u=t[0],s=t[1],r=t[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(r)var l=r(o)}for(e&&e(t);c<u.length;c++)a=u[c],o.o(n,a)&&n[a]&&n[a][0](),n[u[c]]=0;return o.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var i=o.O(void 0,[5638],(function(){return o(1466)}));i=o.O(i)}();