(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/detail/detail"],{"4d13":function(t,e,n){},"55a2":function(t,e,n){"use strict";n.r(e);var i=n("7dbf"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"7dbf":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7736");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return n.e("components/page-component/app-clerk-historys/app-clerk-historys").then(n.bind(null,"0260"))},d=function(){return n.e("components/basic-component/app-order/app-form-data").then(n.bind(null,"74a9"))},u={name:"detail",components:{appClerkHistorys:c,appFormData:d},data:function(){return{haveForm:!0,detail:{start_time:"",end_time:""},card_id:null,checkPay:!1,id:null,isShow:!1}},computed:r({},(0,i.mapState)({clerkImg:function(t){return t.mallConfig.__wxapp_img.clerk},mall:function(t){return t.mallConfig.mall}})),onLoad:function(e){this.$commonLoad.onload(e),this.$showLoading({text:"加载中..."}),e.id>0?(this.id=e.id,t.setNavigationBarTitle({title:"订单详情"})):e.card_id>0&&(this.card_id=e.card_id,t.setNavigationBarTitle({title:"卡券详情"}))},onShow:function(){this.id>0?this.getDetail():this.card_id>0&&this.getCardDetail()},methods:{showForm:function(t){console.log(t),this.haveForm=!(!t||!t.length)},toClerk:function(e){t.navigateTo({url:"/pages/order/clerk/clerk?id="+e})},toClerkCard:function(e){t.navigateTo({url:"/pages/card/clerk/clerk?cardId="+e})},getDetail:function(){var e=this;e.$request({url:e.$api.clerk.detail,data:{order_id:this.id}}).then((function(n){e.$hideLoading(),0==n.code?e.detail=n.data.order:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},getCardDetail:function(){var e=this;e.$request({url:e.$api.clerk.card_detail,data:{cardId:this.card_id}}).then((function(n){e.$hideLoading(),0==n.code?e.detail=n.data.card:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},clerkAffirmPay:function(){var e=this;e.$request({url:e.$api.order.clerk_affirm_pay,data:{id:e.id,action_type:1}}).then((function(n){e.$hideLoading(),0==n.code?(e.checkPay=!e.checkPay,e.getDetail()):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))}}};e.default=u}).call(this,n("d2c1")["default"])},9227:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isShow=!0},t.e1=function(e){t.checkPay=!t.checkPay},t.e2=function(e){t.checkPay=!t.checkPay})},a=[]},a491:function(t,e,n){"use strict";n.r(e);var i=n("9227"),a=n("55a2");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d98c");var o=n("5d22"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"0a646bdc",null);e["default"]=c.exports},d98c:function(t,e,n){"use strict";n("4d13")}},[["bd5a","common/runtime","common/vendor"]]]);