(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,n){"use strict";n.r(e);var l=n(3).a.extend({props:{label:{type:String,default:"Click me"}},data:function(){return{secretFromChild:"The password is 123"}},methods:{emitValue:function(){this.$emit("send-message",this.secretFromChild)}}}),o=n(30),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button ripple",on:{click:t.emitValue}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(246).default})}}]);