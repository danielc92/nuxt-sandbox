(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{246:function(t,e,n){"use strict";n.r(e);var r=n(3).a.extend({props:{label:{type:String,default:"Click me"}},data:function(){return{secretFromChild:"The password is 123"}},methods:{emitValue:function(){this.$emit("send-message",this.secretFromChild)}}}),l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button ripple",on:{click:t.emitValue}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(246).default})},282:function(t,e,n){"use strict";n.r(e);n(73);var r=n(3).a.extend({props:{title:{type:String,required:!0},info:{type:String,required:!0},author:{type:String,required:!0},variant:{type:String,default:"light",validator:function(t){return["light","dark"].includes(t)}}},methods:{getClass:function(){return{card:!0,"card--light":"light"===this.variant,"card--dark":"dark"===this.variant}},listenForChild:function(t){console.log(t)}}}),l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.getClass()},[n("h1",{staticClass:"card__heading"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"card__info"},[t._v(t._s(t.info))]),t._v(" "),n("p",{staticClass:"card__author"},[t._v("Author: "+t._s(t.author))]),t._v(" "),n("Button",{attrs:{label:"learn more"},on:{"send-message":t.listenForChild}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(246).default})}}]);