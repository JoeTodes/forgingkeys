(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{131:function(t,a,n){var o=n(19).f,r=Function.prototype,e=/^\s*function ([^ (]*)/;"name"in r||n(7)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(e)[1]}catch(t){return""}}})},256:function(t,a,n){"use strict";n.r(a);n(132),n(133),n(131),n(66),n(135);var o=n(163),r={props:["name","caption"],data:function(){return{cotaData:o}},computed:{img:function(){var t=this,a="";if(this.cotaData.forEach((function(n){n.card_title.toLowerCase()==t.name.toLowerCase()&&(a=n.front_image)})),a.length>0)return a;this.cotaData.forEach((function(n){n.card_title.toLowerCase().includes(t.name.toLowerCase())&&(a=n.front_image)}))}}},e=n(10),c=Object(e.a)(r,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("br"),t._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"1",sm:3}}),t._v(" "),n("v-col",{attrs:{cols:"10",sm:6}},[n("v-card",{attrs:{raised:""}},[n("v-img",{attrs:{eager:"",src:t.img}}),t._v(" "),n("div"),t._v(" "),t.caption?n("v-card-subtitle",[t._v(t._s(t.caption))]):t._e()],1)],1),t._v(" "),n("v-col",{attrs:{cols:"1",sm:3}})],1)],1),t._v(" "),n("br")],1)}),[],!1,null,null,null);a.default=c.exports}}]);