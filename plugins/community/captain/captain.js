(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/community/captain/captain"],{"108d":function(t,e,n){"use strict";n.r(e);var i=n("b801"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"95b1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},a5a8b:function(t,e,n){"use strict";n("d228")},b801:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7736");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{longitude:"",latitude:"",list:[],loading:!1,page:1}},computed:a(a({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),(0,i.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus},userInfo:function(t){return t.user.info}})),onLoad:function(t){this.$commonLoad.onload(t),this.longitude=t.longitude,this.latitude=t.latitude,this.getList()},methods:{bind:function(e){var n=this;t.showLoading({mask:!0,title:"绑定中..."}),n.$request({url:n.$api.community.bind,data:{middleman_id:e.user_id}}).then((function(n){t.hideLoading(),t.removeStorage({key:"middleman_info"}),n.data.is_private?(t.showToast({title:"切换成功",icon:"none",duration:1e3}),e.is_allow_change=1,t.setStorage({key:"middleman_info",data:e})):t.showToast({title:n.msg,icon:"none",duration:1e3}),0==n.code&&t.setStorage({key:"bind",data:e.user_id,success:function(){setTimeout((function(){t.navigateBack({})}),1e3)},fail:function(){setTimeout((function(){t.navigateBack({})}),1e3)}})})).catch((function(t){n.$hideLoading()}))},getList:function(){var e=this;e.loading=!0,e.$showLoading({type:"global",text:"加载中..."}),e.$request({url:e.$api.community.middleman_list,data:{longitude:this.longitude,latitude:this.latitude,page:this.page}}).then((function(n){if(e.$hideLoading(),e.loading=!1,0==n.code)for(var i in e.list=n.data.list,e.list)e.list[i].space=~~e.list[i].distance+"m",e.list[i].distance>1e3&&(e.list[i].space=(e.list[i].distance/1e3).toFixed(1)+"km");else t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.loading=!1,e.$hideLoading()}))}}};e.default=u}).call(this,n("d2c1")["default"])},d228:function(t,e,n){},d85e:function(t,e,n){"use strict";n.r(e);var i=n("95b1"),o=n("108d");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a5a8b");var r=n("5d22"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"50a2980b",null);e["default"]=u.exports}},[["60f8","common/runtime","common/vendor"]]]);