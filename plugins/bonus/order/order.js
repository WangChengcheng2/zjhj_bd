(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bonus/order/order"],{"737a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("7736");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return n.e("components/basic-component/app-tab-nav/app-tab-nav").then(n.bind(null,"7fd0"))},s={data:function(){return{theme:{color:"#ff4544"},tabList:[{id:1,name:"未完成"},{id:2,name:"已完成"}],loading:null,list:[],activeTab:1,page:2,keyword:"",toSearch:!1,haveKeyword:!1}},components:{"app-tab-nav":c},computed:a({},(0,o.mapState)({mall:function(t){return t.mallConfig.mall}})),methods:{open:function(t){this.id=t},goSearch:function(){t.showLoading({mask:!0,title:"加载中..."}),this.getList()},tabStatus:function(e){t.showLoading({mask:!0,title:"加载中..."}),this.list=[],this.page=2,this.activeTab=e.currentTarget.dataset.id,this.getList()},getSetting:function(){var e=this;e.$request({url:e.$api.bonus.setting}).then((function(n){0==n.code?(e.setting=n.data.list,e.setting.form&&e.setting.form.orders?t.setNavigationBarTitle({title:e.setting.form.orders}):t.setNavigationBarTitle({title:"分红订单"})):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$event.on(e.$const.EVENT_USER_LOGIN).then((function(){e.getSetting()}))}))},getList:function(){var e=this;e.$request({url:e.$api.bonus.order,data:{status:e.activeTab,keyword:e.keyword}}).then((function(n){e.$hideLoading(),t.hideLoading(),0==n.code?e.list=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(n){e.$hideLoading(),t.hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then((function(){e.getList()}))}))},getMore:function(){var e=this;t.showLoading({mask:!0,title:"加载中..."}),e.$request({url:e.$api.bonus.order,data:{status:e.activeTab,keyword:e.keyword,page:e.page}}).then((function(n){t.hideLoading(),0==n.code?n.data.list.length>0&&(e.loading=null,e.list=e.list.concat(n.data.list),e.page++):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(e){t.hideLoading()}))},cancelSeacrch:function(){this.keyword="",this.toSearch=!this.toSearch,this.getList(),this.$hideLoading()}},onLoad:function(t){this.$commonLoad.onload(t);var e=this;t.nickname&&(e.keyword=t.nickname,e.haveKeyword=!0,e.toSearch=!0),e.$showLoading({text:"加载中..."}),e.getSetting(),e.getList()},onReachBottom:function(){this.getMore()}};e.default=s}).call(this,n("d2c1")["default"])},"8d19":function(t,e,n){"use strict";n("eb2c")},dd2b:function(t,e,n){"use strict";n.r(e);var o=n("737a"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},e62a:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.toSearch=!t.toSearch})},i=[]},eb2c:function(t,e,n){},f100:function(t,e,n){"use strict";n.r(e);var o=n("e62a"),i=n("dd2b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("8d19");var r=n("5d22"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"3cfe7a2e",null);e["default"]=c.exports}},[["f163","common/runtime","common/vendor"]]]);