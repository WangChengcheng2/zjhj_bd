(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/money/money"],{"0703":function(t,e,n){"use strict";n.r(e);var o=n("306f"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"306f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("7736");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{open:!1,list:[],config:[]}},computed:r({},(0,o.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{toCash:function(){t.navigateTo({url:"/pages/share/cash/cash?money="+this.list.money})},toDetail:function(){t.navigateTo({url:"/pages/share/cash-detail/cash-detail"})},setting:function(){var e=this;e.$request({url:e.$api.share.setting}).then((function(n){e.$hideLoading(),0==n.code?e.config=n.msg.config:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))}},onLoad:function(){this.$commonLoad.onload();var e=this;t.setNavigationBarTitle({title:e.custom_setting.menus.money.name}),e.$showLoading({type:"global",text:"加载中..."}),e.$request({url:e.$api.share.brokerage}).then((function(n){0==n.code?(e.list=n.data.list,e.setting()):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))}};e.default=c}).call(this,n("d2c1")["default"])},6237:function(t,e,n){"use strict";n("bdd7")},"7d94":function(t,e,n){"use strict";n.r(e);var o=n("cd6d"),i=n("0703");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("6237");var a=n("5d22"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"1c24f12a",null);e["default"]=c.exports},bdd7:function(t,e,n){},cd6d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.open=!t.open})},i=[]}},[["8a13","common/runtime","common/vendor"]]]);