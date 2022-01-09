(()=>{var t={511:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-cart-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-cart",toString:function(){return this.url}}},151:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-facebook-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-facebook",toString:function(){return this.url}}},319:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-instagram-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-instagram",toString:function(){return this.url}}},596:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-left-arrow-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-left-arrow",toString:function(){return this.url}}},63:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-logo-usage",viewBox:"0 0 176 31",url:r.p+"./icons.svg#svg-icon-logo",toString:function(){return this.url}}},504:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-minus-usage",viewBox:"0 0 27 27",url:r.p+"./icons.svg#svg-icon-minus",toString:function(){return this.url}}},272:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-moon-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-moon",toString:function(){return this.url}}},200:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-pg-complete-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-pg-complete",toString:function(){return this.url}}},774:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-plus-usage",viewBox:"0 0 27 27",url:r.p+"./icons.svg#svg-icon-plus",toString:function(){return this.url}}},898:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-right-arrow-usage",viewBox:"0 0 25 24",url:r.p+"./icons.svg#svg-icon-right-arrow",toString:function(){return this.url}}},294:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-search-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-search",toString:function(){return this.url}}},789:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-sun-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-sun",toString:function(){return this.url}}},859:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-toggle-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-toggle",toString:function(){return this.url}}},562:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const o={id:"svg-icon-whatsapp-usage",viewBox:"0 0 24 24",url:r.p+"./icons.svg#svg-icon-whatsapp",toString:function(){return this.url}}},455:(t,e,r)=>{var o={"./cart.svg":511,"./facebook.svg":151,"./instagram.svg":319,"./left-arrow.svg":596,"./logo.svg":63,"./minus.svg":504,"./moon.svg":272,"./pg-complete.svg":200,"./plus.svg":774,"./right-arrow.svg":898,"./search.svg":294,"./sun.svg":789,"./toggle.svg":859,"./whatsapp.svg":562};function n(t){var e=s(t);return r(e)}function s(t){if(!r.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id=455}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";var t;(t=r(455)).keys().forEach(t),fetch("http://142.93.30.84/icons.svg").then((t=>t.text())).then((t=>{document.getElementById("svg-icons-container").innerHTML=t}));let e="dark"===localStorage.getItem("theme");function o(){e=!e,e?(n("dark"),localStorage.setItem("theme","dark")):(n("light"),localStorage.setItem("theme","light"))}function n(t){document.body.setAttribute("data-theme",t)}function s(t,e){t.setAttribute("data-phase",e)}function i(t,e,r){document.querySelector(t).addEventListener("click",s.bind(null,e,r))}document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("#theme-toggle").addEventListener("click",o),n(e?"dark":"light");const t={address:{next:2},shipping:{prev:1,next:3},"credit-card":{prev:2,next:3}},r=document.querySelector("section.register-container");for(let e in t){const o=t[e];for(let t in o)i(`section.button-group[data-phase="${e}"] > .${t}`,r,o[t])}}))})()})();
//# sourceMappingURL=bundle.js.map