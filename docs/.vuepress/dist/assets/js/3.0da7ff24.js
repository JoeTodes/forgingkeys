(window.webpackJsonp=window.webpackJsonp||[]).push([[3],Array(124).concat([function(t,e,n){"use strict";var r=n(37);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var r=n(66),i=n(67),o=n(62),a=n(64),s=n(128);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,h=5==t||f,p=e||s;return function(e,s,d){for(var v,g,m=o(e),b=i(m),x=r(s,d,3),_=a(b.length),y=0,k=n?p(e,_):u?p(e,0):void 0;_>y;y++)if((h||y in b)&&(g=x(v=b[y],y,m),t))if(n)k[y]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:k.push(v)}else if(l)return!1;return f?-1:c||l?l:k}}},function(t,e,n){var r=n(63);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=s(t);return o.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&s(t.path)===s(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=s(e);for(let e=0;e<t.length;e++)if(s(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:o}=n,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const s=a.sidebar||o.sidebar;if(s){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,s);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,n){var r=n(129);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(18),i=n(126),o=n(6)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var r,i,o=n(137),a=RegExp.prototype.exec,s=String.prototype.replace,u=a,c=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(u=function(t){var e,n,r,i,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",o.call(u))),c&&(e=u.lastIndex),r=a.call(u,t),c&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),l&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=u},,,function(t,e,n){"use strict";var r=n(36),i=n(125)(3);r(r.P+r.F*!n(124)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(140)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(141),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(142);var r=n(21),i=n(3),o=n(37),a=n(38),s=n(6),u=n(130),c=s("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=s(t),p=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=p?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[h](""),!e})):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],g=n(a,h,""[t],(function(t,e,n,r,i){return e.exec===u?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=g[0],b=g[1];r(String.prototype,t,m),i(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){"use strict";var r=n(19);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(19),i=n(62),o=n(64),a=n(39),s=n(134),u=n(135),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(136)("replace",2,(function(t,e,n,d){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var x=u(f,h);if(null===x)break;if(b.push(x),!g)break;""===String(x[0])&&(f.lastIndex=s(h,o(f.lastIndex),m))}for(var _,y="",k=0,$=0;$<b.length;$++){x=b[$];for(var C=String(x[0]),w=c(l(a(x.index),h.length),0),L=[],S=1;S<x.length;S++)L.push(void 0===(_=x[S])?_:String(_));var O=x.groups;if(p){var j=[C].concat(L,w,h);void 0!==O&&j.push(O);var A=String(e.apply(void 0,j))}else A=v(C,h,w,L,O,e);w>=k&&(y+=h.slice(k,w)+A,k=w+C.length)}return y+h.slice(k)}];function v(t,e,r,o,a,s){var u=r+t.length,c=o.length,l=p;return void 0!==a&&(a=i(a),l=h),n.call(s,l,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":s=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>c){var h=f(l/10);return 0===h?n:h<=c?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):n}s=o[l-1]}return void 0===s?"":s}))}}))},function(t,e,n){},function(t,e,n){var r=n(39),i=n(38);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(63),i=n(6)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(130);n(36)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){"use strict";var r=n(36),i=n(125)(2);r(r.P+r.F*!n(124)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(36),i=n(68)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(124)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,function(t,e,n){var r=n(62),i=n(24);n(179)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){var r=n(18),i=n(63),o=n(6)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(19),i=n(64),o=n(134),a=n(135);n(136)("match",1,(function(t,e,n,s){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=a(u,c));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=o(c,i(u.lastIndex),l)),p++}return 0===p?null:h}]}))},function(t,e,n){"use strict";var r=n(36),i=n(125)(1);r(r.P+r.F*!n(124)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e){t.exports=function(t){return null==t}},function(t,e,n){var r=n(214).Symbol;t.exports=r},,,,,,,,,function(t,e,n){"use strict";n.r(e);n(133);var r=n(127),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(178).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(177).default},methods:{isActive:r.e}},o=(n(222),n(10)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(166),n(223);function s(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,o,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,o=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(o,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(r.e)(o,f.basePath+"#"+t.slug)})):p,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):s(t,f.path,f.title||f.path,d),g=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[v,u(t,f.children,f.basePath,o,g)]:(d||m)&&f.headers&&!r.d.test(f.path)?[v,u(t,Object(r.c)(f.headers),f.path,o,g)]:v}};n(224);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},h=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(206),n(10)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},function(t,e,n){var r=n(36),i=n(23),o=n(37);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},function(t,e,n){"use strict";n(181)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){var r=n(36),i=n(37),o=n(38),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){"use strict";var r=n(139);n.n(r).a},function(t,e,n){"use strict";var r=n(36),i=n(68)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(69)("includes")},function(t,e,n){"use strict";var r=n(36),i=n(185);r(r.P+r.F*n(186)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(164),i=n(38);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(6)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var r=n(36);r(r.S,"Array",{isArray:n(126)})},function(t,e,n){"use strict";n(189)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){var r=n(36),i=n(38),o=n(37),a=n(190),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o((function(){return!!a[t]()||"​"!="​"[t]()})),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(145);n.n(r).a},function(t,e,n){"use strict";var r=n(146);n.n(r).a},function(t,e,n){var r=n(2),i=n(194),o=n(20).f,a=n(197).f,s=n(164),u=n(137),c=r.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,d=new c(h)!==h;if(n(7)&&(!d||n(37)((function(){return p[n(6)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")})))){c=function(t,e){var n=this instanceof c,r=s(t),o=void 0===e;return!n&&r&&t.constructor===c&&o?t:i(d?new l(r&&!o?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&o?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||o(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(21)(r,"RegExp",c)}n(198)("RegExp")},function(t,e,n){var r=n(18),i=n(195).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(18),i=n(19),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(66)(Function.call,n(196).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(78),i=n(43),o=n(12),a=n(75),s=n(13),u=n(74),c=Object.getOwnPropertyDescriptor;e.f=n(7)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(77),i=n(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";var r=n(2),i=n(20),o=n(7),a=n(6)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){t.exports=n(200)},function(t,e,n){n(42),n(201),t.exports=n(4).Array.from},function(t,e,n){"use strict";var r=n(70),i=n(40),o=n(72),a=n(202),s=n(203),u=n(71),c=n(204),l=n(73);i(i.S+i.F*!n(205)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,g=void 0!==v,m=0,b=l(h);if(g&&(v=r(v,d>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=u(h.length));e>m;m++)c(n,m,g?v(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(i=f.next()).done;m++)c(n,m,g?a(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},function(t,e,n){var r=n(11);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(8),i=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(22),i=n(41);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(1)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(147);n.n(r).a},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},function(t,e,n){"use strict";var r=n(148);n.n(r).a},function(t,e,n){"use strict";var r=n(149);n.n(r).a},function(t,e,n){"use strict";var r=n(150);n.n(r).a},function(t,e,n){"use strict";var r=n(151);n.n(r).a},function(t,e,n){var r=n(213),i=n(218),o=n(219),a="[object String]";t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&r(t)==a}},function(t,e,n){var r=n(168),i=n(216),o=n(217),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:a:u&&u in Object(t)?i(t):o(t)}},function(t,e,n){var r=n(215),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e,n){var r=n(168),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";var r=n(152);n.n(r).a},function(t,e,n){"use strict";var r=n(153);n.n(r).a},function(t,e,n){"use strict";var r=n(154);n.n(r).a},function(t,e,n){"use strict";var r=n(36),i=n(125)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(69)("find")},function(t,e,n){"use strict";var r=n(155);n.n(r).a},function(t,e,n){"use strict";var r=n(156);n.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(65),n(163),n(133),n(180);var r=n(127),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h,focusoutAction:function(){this.$emit("focusout")}}},o=n(10),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,s={components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(182),Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(183),n(184),n(165),n(143),n(187),n(144),n(188),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},o=[],a=0;a<e.length&&!(o.length>=n);a++){var s=e[a];if(this.getPageLocalePath(s)===r&&this.isSearchable(s))if(i(s))o.push(s);else if(s.headers)for(var u=0;u<s.headers.length&&!(o.length>=n);u++){var c=s.headers[u];i(c)&&o.push(Object.assign({},s,{path:s.path+"#"+c.slug,header:c}))}}return o}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(191),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(192),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(193),n(45)),p=n.n(h);var d=n(199),v=n.n(d),g=n(56),m=n.n(g);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return v()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(138),n(166);var x=n(178),_=n(207),y=n.n(_),k={components:{NavLink:a,DropdownTransition:x.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return y()(e)===t}},watch:{$route:function(){this.open=!1}}},$=(n(208),{components:{NavLink:a,DropdownLink:Object(o.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(o){var a,s=e[o],u=i[o]&&i[o].label||s.lang;return s.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,o),r.some((function(t){return t.path===a}))||(a=o)),{text:u,link:a}}))};return[].concat(b(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),C=(n(209),Object(o.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={components:{SidebarButton:f,NavLinks:C,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(w(this.$el,"paddingLeft"))+parseInt(w(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(210),Object(o.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),O=n(167),j=n.n(O),A={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=j()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,i=void 0===r?"":r,o=e.docsBranch,a=void 0===o?"master":o,s=e.docsRepo,u=void 0===s?n:s;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,i,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,o){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+o}}},E=(n(211),Object(o.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),I=n(212),P=n.n(I),T={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return D(N.PREV,this)},next:function(){return D(N.NEXT,this)}}};var N={NEXT:{resolveLink:function(t,e){return R(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return R(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function D(t,e){var n=e.$themeConfig,i=e.$page,o=e.$route,a=e.$site,s=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,f=c(n),h=l(i),p=j()(h)?f:h;return!1===p?void 0:P()(p)?Object(r.k)(a.pages,p,o.path):u(i,s)}function R(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var o=r[i];if("page"===o.type&&o.path===decodeURIComponent(t.path))return r[i+n]}}var U=T,H=(n(220),{components:{PageEdit:E,PageNav:Object(o.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),M=(n(221),Object(o.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:n(177).default,NavLinks:C},props:["items"]},F=(n(225),{components:{Home:u,Page:M,Sidebar:Object(o.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=Object(o.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null);e.default=G.exports}])]);