!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={22:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+""+{1:"94a95d6c78870c89bb0d",2:"6a76ad3ff163ae13ce7a",3:"6b5faa4704c36775d7d1",4:"d8ef7146fa94b42b8d6f",5:"2f92ba574b1b241f618a",6:"f1f56c6326f97e49f1fd",7:"00596c9ddd95a0bce9aa",8:"3d887a4df4ecfafd3883",9:"7b9ad24e5c0b5e75d3a5",10:"48777a4564d67d6261c2",11:"24a492365c7ca4236f7a",12:"146838d23ef6ceb3c9b5",13:"abce90505a9478f6c0c5",14:"d79db8525bc02e4c00b2",15:"997cdd120cd687e16c17",16:"519541ccc2da05df142d",17:"c1daf3898a417cef62df",18:"d401d3489891e4dcbd1b",19:"e8e352cee0112135dd6d",20:"7e3d5801fb9829451696",21:"b6f34eb92b271e463b0e"}[t]+".js"}(t);var u=setTimeout(function(){c({type:"timeout",target:s})},12e4);function c(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}}s.onerror=s.onload=c,a.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/nuxt-styleguide/_nuxt/",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([74,0]),n()}({33:function(t,e,n){var r=n(75);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(51).default)("1c80a88e",r,!1,{sourceMap:!1,ident:"ref--3-oneOf-1-0"})},34:function(t,e,n){var r=n(79);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(51).default)("132530e1",r,!1,{sourceMap:!1,ident:"ref--3-oneOf-1-0"})},35:function(t,e){t.exports=function(t){t.options.__styleguide||(t.options.__styleguide={}),t.options.__styleguide.docs='<h2 id="default-empty-noop-layout">Default empty noop-layout</h2>\n'}},49:function(t,e,n){"use strict";var r=n(35),o=n.n(r);e.default=o.a},51:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){c=n,d=o||{};var i=r(t,e);return m(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,n.push(u)}e?m(i=r(t,e)):i=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(x(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(x(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function g(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function x(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=g()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=g(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var v,y=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},52:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},53:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("nuxt")};r._withStripped=!0;var o={name:"Default"},a=n(17),i=n(49),s=Object(a.a)(o,r,[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(s);e.a=s.exports},74:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n.n(r),a=n(2),i=n.n(a),s=n(1),u=n.n(s),c=n(16),l=n.n(c),d=n(6),f=n.n(d),p=n(12),h=n.n(p),m=n(7),g=n.n(m),x=n(0),v={},y=n(48),b=n.n(y),w=n(20),_=n.n(w),C=(n(78),n(72)),k=n.n(C),$=n(50),E=function(){return n.e(21).then(n.bind(null,190)).then(function(t){return t.default||t})},R=function(){return n.e(20).then(n.bind(null,189)).then(function(t){return t.default||t})},T=function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,206)).then(function(t){return t.default||t})},S=function(){return Promise.all([n.e(1),n.e(18)]).then(n.bind(null,205)).then(function(t){return t.default||t})},A=function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,204)).then(function(t){return t.default||t})},D=function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,203)).then(function(t){return t.default||t})},j=function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,202)).then(function(t){return t.default||t})},P=function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,201)).then(function(t){return t.default||t})},L=function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,200)).then(function(t){return t.default||t})},N=function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,199)).then(function(t){return t.default||t})},M=function(){return Promise.all([n.e(0),n.e(3),n.e(11)]).then(n.bind(null,198)).then(function(t){return t.default||t})},O=function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,197)).then(function(t){return t.default||t})},q=function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,192)).then(function(t){return t.default||t})},I=function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,196)).then(function(t){return t.default||t})},U=function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,193)).then(function(t){return t.default||t})},B=function(){return Promise.all([n.e(0),n.e(2),n.e(6)]).then(n.bind(null,195)).then(function(t){return t.default||t})},z=function(){return Promise.all([n.e(0),n.e(2),n.e(5)]).then(n.bind(null,194)).then(function(t){return t.default||t})},H=function(){return Promise.all([n.e(0),n.e(2),n.e(4)]).then(n.bind(null,191)).then(function(t){return t.default||t})};x.default.use($.a),window.history.scrollRestoration="manual";var K=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new i.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var W={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}},F={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};J.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var d={};Q.forEach(function(t){"function"==typeof c[t]&&(d[t]=c[t].bind(a))});var f=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),f)return f.call(a,t)};var p=[t("router-view",r)];return void 0!==o.keepAlive&&(p=[t("keep-alive",p)]),t("transition",{props:l,on:d},p)}},J=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],Q=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],G={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])};V._withStripped=!0;var X={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Y=(n(76),n(17)),Z=Object(Y.a)(X,V,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,tt=function(){return{}};function et(t,e){var n=t.options.data||tt;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function nt(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function rt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function ot(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function at(t){var e,n=this;return i.a.all(ot(t,(e=f()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=nt(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var it,st,ut=(it=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,at(e);case 2:return t.abrupt("return",_()({},e,{meta:rt(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return it.apply(this,arguments)}),ct=(st=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/nuxt-styleguide/",env:{nsgLayout:"default"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=vt(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,ut(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,ut(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)})),function(t,e){return st.apply(this,arguments)});function lt(t,e){var n=void 0;return(n=2===t.length?new i.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof i.a||"function"==typeof n.then)||(n=i.a.resolve(n)),n}function dt(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function ft(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?mt:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var d,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+l()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(d=s(f[p]),!e[u].test(d))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+l()(d)+"`");o+=(0===p?c.prefix:c.delimiter)+d}}else{if(d=c.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(f),!e[u].test(d))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+d+'"');o+=c.prefix+d}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=ht.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var d=t[a],f=n[2],p=n[3],h=n[4],m=n[5],g=n[6],x=n[7];i&&(r.push(i),i="");var v=null!=f&&null!=d&&d!==f,y="+"===g||"*"===g,b="?"===g||"*"===g,w=n[2]||s,_=h||m;r.push({name:p||o++,prefix:f||"",delimiter:w,optional:b,repeat:y,partial:v,asterisk:!!x,pattern:_?xt(_):x?".*":"[^"+gt(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function pt(t,e){var n={},r=_()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}var ht=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function mt(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function gt(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function xt(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function vt(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),a=(n?n+"://":"//")+o.shift(),i=o.filter(Boolean).join("/"),s=void 0;return 2===(o=i.split("#")).length&&(i=o[0],s=o[1]),a+=i?"/"+i:"",e&&"{}"!==l()(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=s?"#"+s:""}var yt={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){x.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||ft(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:F,NuxtError:Z}},bt=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};bt._withStripped=!0;var wt,_t={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,x.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},Ct=(n(80),Object(Y.a)(_t,bt,[],!1,null,null,null).exports),kt={_default:n(53).a},$t={head:{meta:[],link:[],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){x.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){x.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&kt["_"+t]||(t="default"),this.layoutName=t,this.layout=kt["_"+t],this.layout},loadLayout:function(t){return t&&kt["_"+t]||(t="default"),i.a.resolve(kt["_"+t])}},components:{NuxtLoading:Ct}},Et=g.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rt=n(0),Tt=(wt=Rt)&&wt.__esModule?wt:{default:wt};function St(t){return t.length?(St.cache||(St.cache=t.filter(function(t){return t.meta&&t.meta.nsg}).map(function(t){var e=t.meta,n=e.name,r=e.category;return Et({},t,{name:n,path:""+Tt.default.prototype.$styleguide.basePath+t.path.replace(/^\//,""),category:r})}).sort(function(t,e){return t.meta.order===e.meta.order?t.meta.name>e.meta.name?1:t.meta.name<e.meta.name?-1:0:t.meta.order-e.meta.order})),St.cache):[]}Tt.default.use({install:function(){Tt.default.prototype.$styleguide=g()(JSON.parse('{"name":"@sum.cumo/nuxt-styleguide-demo-library","version":"6.1.1","description":"styleguide and pattern library support for your nuxt application","homepage":"https://github.com/sumcumo/nuxt-styleguide#readme","layout":"default","basePath":"/nuxt-styleguide/","path":"/nuxt-styleguide","repositoryHomepage":"https://github.com/sumcumo/nuxt-styleguide/blob/master"}'))}}),St.cache=null,Tt.default.mixin({created:function(){this.$styleguide.routes=St(this.$router?this.$router.options.routes:[])}});var At,Dt=(At=f()(u.a.mark(function t(e){var n,r,o,a,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new $.a({mode:"history",base:"/nuxt-styleguide/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:K,routes:[{path:"/components/",component:E,meta:{name:"Index",category:"Components",nsg:!0,order:1},name:"components:index"},{path:"/icons/",component:R,meta:{name:"Index",category:"Icons",nsg:!0,order:3},name:"icons:index"},{path:"/",component:T,meta:{name:"Index",category:"Docs",nsg:!0,order:0},name:"docs:index"},{path:"/docs/configuration",component:S,meta:{name:"Configuration",category:"Docs",nsg:!0,order:0},name:"docs:docs:configuration"},{path:"/docs/getting-started",component:A,meta:{name:"Getting Started",category:"Docs",nsg:!0,order:0},name:"docs:docs:getting-started"},{path:"/docs/packages",component:D,meta:{name:"Packages",category:"Docs",nsg:!0,order:0},name:"docs:docs:packages"},{path:"/docs/working-with-components",component:j,meta:{name:"Working With Components",category:"Docs",nsg:!0,order:0},name:"docs:docs:working-with-components"},{path:"/docs/working-with-design-tokens",component:P,meta:{name:"Working With Design Tokens",category:"Docs",nsg:!0,order:0},name:"docs:docs:working-with-design-tokens"},{path:"/docs/writing-documentation",component:L,meta:{name:"Writing Documentation",category:"Docs",nsg:!0,order:0},name:"docs:docs:writing-documentation"},{path:"/layouts/default",component:N,meta:{name:"Default",category:"Layouts",nsg:!0,order:4},name:"layouts:default"},{path:"/design-tokens/colors",component:M,meta:{name:"Colors",category:"Design Tokens",nsg:!0,order:2},name:"design-tokens:Colors"},{path:"/design-tokens/fonts",component:O,meta:{name:"Fonts",category:"Design Tokens",nsg:!0,order:2},name:"design-tokens:Fonts"},{path:"/icons/cal",component:q,meta:{name:"Cal",category:"Icons",nsg:!0,order:3},name:"icons:cal"},{path:"/components/a",component:I,meta:{name:"A",category:"Components",nsg:!0,order:1},name:"components:A"},{path:"/components/docgen-example",component:U,meta:{name:"Docgen Example",category:"Components",nsg:!0,order:1},name:"components:DocgenExample"},{path:"/components/headline",component:B,meta:{name:"Headline",category:"Components",nsg:!0,order:1},name:"components:Headline"},{path:"/components/highlight",component:z,meta:{name:"Sc Highlight",category:"Components",nsg:!0,order:1},name:"components:Highlight"},{path:"/components/topbar",component:H,meta:{name:"Topbar",category:"Components",nsg:!0,order:1},name:"components:Topbar"}],fallback:!1});case 2:return n=t.sent,r=_()({router:n,nuxt:{defaultTransition:Pt,transitions:[Pt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?g()({},Pt,{name:t}):g()({},Pt,t):Pt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$t),o=e?e.next:function(t){return r.router.push(t)},a=void 0,e?a=n.resolve(e.url).route:(i=dt(n.options.base),a=n.resolve(i).route),t.next=9,ct(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 9:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";x.default[n]||(x.default[n]=!0,x.default.use(function(){x.default.prototype.hasOwnProperty(t)||b()(x.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=13;break;case 13:t.next=16;break;case 16:return t.abrupt("return",{app:r,router:n});case 17:case"end":return t.stop()}},t,this)})),function(t){return At.apply(this,arguments)});x.default.component(W.name,W),x.default.component(F.name,F),x.default.component(G.name,G),x.default.component(yt.name,yt),x.default.use(k.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var jt,Pt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"},Lt=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!qt.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?pt(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,at(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Nt=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,s,c,l,d,f,p,h,m=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ot=e===n?[]:rt(n,o=[]).map(function(t,e){return ft(n.matched[o[e]].path)(n.params)}),a=!1,s=function(t){n.path===t.path&&m.$loading.finish&&m.$loading.finish(),n.path!==t.path&&m.$loading.pause&&m.$loading.pause(),a||(a=!0,r(t))},t.next=7,ct(qt,{route:e,from:n,next:s.bind(this)});case 7:if(this._dateLastError=qt.nuxt.dateErr,this._hadError=!!qt.nuxt.err,(l=rt(e,c=[])).length){t.next=25;break}return t.next=14,Kt.call(this,l,qt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof Z.layout?Z.layout(qt.context):Z.layout);case 18:return d=t.sent,t.next=21,Kt.call(this,l,qt.context,d);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return qt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return l.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Bt(l,e,n)),t.prev=27,t.next=30,Kt.call(this,l,qt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!qt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=l[0].options.layout)&&(f=f(qt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Kt.call(this,l,qt.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!qt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:if(p=!0,l.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate(qt.context))}),p){t.next=50;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 50:return t.next=52,i.a.all(l.map(function(t,n){if(t._path=ft(e.matched[c[n]].path)(e.params),t._dataRefresh=!1,m._pathChanged&&t._path!==Ot[n])t._dataRefresh=!0;else if(!m._pathChanged&&m._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return m._diffQuery[t]}))}if(!m._hadError&&m._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var l=lt(t.options.asyncData,qt.context).then(function(e){et(t,e),m.$loading.increase&&m.$loading.increase(u)});o.push(l)}if(s){var d=t.options.fetch(qt.context);d&&(d instanceof i.a||"function"==typeof d.then)||(d=i.a.resolve(d)),d.then(function(t){m.$loading.increase&&m.$loading.increase(u)}),o.push(d)}return i.a.all(o)}));case 52:a||(this.$loading.finish&&this.$loading.finish(),r()),t.next=67;break;case 55:return t.prev=55,t.t0=t.catch(27),t.t0||(t.t0={}),Ot=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(h=Z.layout)&&(h=h(qt.context)),t.next=64,this.loadLayout(h);case 64:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 67:case"end":return t.stop()}},t,this,[[27,55]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Mt=(jt=f()(u.a.mark(function t(e){var n,r,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return qt=e.app,It=e.router,t.next=4,i.a.all(Ht(It));case 4:return n=t.sent,r=new x.default(qt),o=Ut.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),x.default.nextTick(function(){Qt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Bt(n,It.currentRoute)),Ot=It.currentRoute.matched.map(function(t){return ft(t.path)(It.currentRoute.params)})),r.$loading={},Ut.error&&r.error(Ut.error),It.beforeEach(Lt.bind(r)),It.beforeEach(Nt.bind(r)),It.afterEach(Wt),It.afterEach(Jt.bind(r)),!Ut.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:Nt.call(r,It.currentRoute,It.currentRoute,function(t){if(!t)return Wt(It.currentRoute,It.currentRoute),Ft.call(r,It.currentRoute),void a();It.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}},t,this)})),function(t){return jt.apply(this,arguments)}),Ot=[],qt=void 0,It=void 0,Ut=window.__NUXT__||{};function Bt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=g()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function zt(t,e){return Ut.serverRendered&&e&&et(t,e),t._Ctor=t,t}function Ht(t){var e,n=this,r=dt(t.options.base,t.options.mode);return ot(t.match(r),(e=f()(u.a.mark(function t(e,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=zt(nt(e),Ut.data?Ut.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function Kt(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof v[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),v[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?i.a.resolve():lt(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Wt(t,e){ot(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=x.default.extend(t))._Ctor=t,n.components[r]=t),t})}function Ft(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?Z.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(qt.context)),this.setLayout(e)}function Jt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=rt(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}}),Ft.call(n,t)})}function Qt(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),It.afterEach(function(e,n){x.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Dt().then(Mt).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},75:function(t,e,n){(t.exports=n(52)(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},76:function(t,e,n){"use strict";var r=n(33);n.n(r).a},79:function(t,e,n){(t.exports=n(52)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},80:function(t,e,n){"use strict";var r=n(34);n.n(r).a}});