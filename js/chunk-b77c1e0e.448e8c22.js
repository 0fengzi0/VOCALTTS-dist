(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b77c1e0e"],{4650:function(a,t,i){"use strict";i("a535")},a535:function(a,t,i){},cac8:function(a,t,i){"use strict";var s=i("d4ec"),c=i("bee2"),e=i("677a"),n=function(){function a(){Object(s.a)(this,a)}return Object(c.a)(a,[{key:"getPlacardList",value:function(){return e.a.doHttp("/placard/getPlacard","get")}}]),a}();t.a=new n},d55a:function(a,t,i){"use strict";i.r(t);var s=i("cac8"),c={name:"PcNotice",data:function(){return{placard_list:[{id:0,title:"",msg:"",time:""}]}},mounted:function(){this.get_placard_list()},methods:{get_placard_list:function(){var a=this;s.a.getPlacardList().then((function(t){a.placard_list=[];for(var i=0;i<t.data.length;i++)t.data[i].show=!0,t.data[i].animation=!1,a.placard_list.unshift(t.data[i]);for(var s=function(t){setTimeout((function(){a.animation_hide_placard(t)}),5e3*(t+1))},c=0;c<a.placard_list.length;c++)s(c)}))},animation_hide_placard:function(a){var t=this;t.placard_list[a].animation=!0,setTimeout((function(){t.placard_list[a].show=!1}),1500)}}},e=(i("4650"),i("2877")),n=Object(e.a)(c,(function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{attrs:{id:"PcNotice"}},[i("div",{staticClass:"placard_div"},a._l(a.placard_list,(function(t,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"list.show"}],key:s,staticClass:"placard_list",class:t.animation?"hide_placard_list_animation":""},[i("div",{staticClass:"placard_head"},[i("div",{staticClass:"placard_title"},[a._v(a._s(t.title))]),i("div",{staticClass:"placard_time"},[a._v(a._s(t.create_date))]),i("div",{staticStyle:{clear:"both"}})]),i("div",{staticClass:"placard_body"},[i("div",{staticClass:"placard_msg",domProps:{innerHTML:a._s(t.msg)}})])])})),0)])}),[],!1,null,"4aa6970a",null);t.default=n.exports}}]);