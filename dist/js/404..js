(()=>{"use strict";var n,e={1466:(n,e,o)=>{var t=o(5638),a=o(8253);t(".content__close").on("click",(function(){var n=localStorage.getItem("lastPage");t(".anim-show1").addClass("menu-click"),setTimeout((function(){return t(".anim-show2").addClass("menu-click")}),700),setTimeout((function(){""===n&&(location.href="/"),n?location.href=n:(0,a.A)()}),1600)}))},8253:(n,e,o)=>{o.d(e,{A:()=>r});var t=o(5638),a=t(".anim-show"),i=t(".anim-show1"),s=t(".navigation__menu, .navigation__clouse"),u=function(){t(".navigation__menu, .navigation__clouse").attr("value","true"),setTimeout((function(){return t(".navigation__menu, .navigation__clouse").attr("value","false")}),1200)};t(".navigation__menu").on("click",(function(){return r()}));var r=function(){"true"!==t(".navigation__menu, .navigation__clouse").attr("value")&&(u(),a.removeClass("anim-show-default anim-show-close"),setTimeout((function(){return t(".anim-show1").addClass("anim-show-active")}),10),setTimeout((function(){return t(".anim-show2").addClass("anim-show-active")}),150),setTimeout((function(){return a.addClass("anim-show-default")}),800),setTimeout((function(){return a.removeClass("anim-show-active")}),1e3),t(".navigation__clouse, .anim-show").css("display","flex"),t(".navigation__menu").css("display","none"),setTimeout((function(){return t(".menu").css("display","flex")}),800))};t(".navigation__clouse").on("click",(function(){"true"!==s.attr("value")&&(u(),a.removeClass("anim-show-default anim-show-close"),i.addClass("anim-show-close"),setTimeout((function(){return t(".anim-show2").addClass("anim-show-close")}),150),setTimeout((function(){return a.fadeOut(300)}),900),setTimeout((function(){return t(".menu, .anim-show1").css("display","none")}),800),t(".navigation__menu").css("display","flex"),t(this).css("display","none"),setTimeout((function(){return t(".active-menu__child").removeClass("active-menu__child")}),1e3),setTimeout((function(){return t(".anim-show").removeClass("anim-show-close")}),1500),t("body").css("overflow-y","auto"),t(".navigation__menu").addClass("notActiveMenuIcon"))}))}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,n=[],t.O=(e,o,a,i)=>{if(!o){var s=1/0;for(c=0;c<n.length;c++){for(var[o,a,i]=n[c],u=!0,r=0;r<o.length;r++)(!1&i||s>=i)&&Object.keys(t.O).every((n=>t.O[n](o[r])))?o.splice(r--,1):(u=!1,i<s&&(s=i));if(u){n.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,a,i]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={6596:0,6327:0};t.O.j=e=>0===n[e];var e=(e,o)=>{var a,i,[s,u,r]=o,l=0;if(s.some((e=>0!==n[e]))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(r)var c=r(t)}for(e&&e(o);l<s.length;l++)i=s[l],t.o(n,i)&&n[i]&&n[i][0](),n[s[l]]=0;return t.O(c)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var a=t.O(void 0,[5638],(()=>t(1466)));a=t.O(a)})();