(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{131:function(t,n,a){var r=a(20).f,o=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in o||a(7)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},252:function(t,n,a){"use strict";a.r(n);a(131),a(65),a(132);var r=a(157),o={props:["name","caption"],data:function(){return{cotaData:r}},computed:{img:function(){var t=this,n="";return this.cotaData.forEach((function(a){a.card_title.toLowerCase()==t.name.toLowerCase()&&(n=a.front_image)})),n}}},c=a(10),e=Object(c.a)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("br"),t._v(" "),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"4"}}),t._v(" "),a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{raised:""}},[a("v-img",{attrs:{src:t.img}}),t._v(" "),a("div"),t._v(" "),t.caption?a("v-card-subtitle",[t._v(t._s(t.caption))]):t._e()],1)],1),t._v(" "),a("v-col",{attrs:{cols:"4"}})],1)],1),t._v(" "),a("br")],1)}),[],!1,null,null,null);n.default=e.exports}}]);