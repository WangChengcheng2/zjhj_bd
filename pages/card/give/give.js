(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/card/give/give"],{"427d":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},n=[]},"7bc9":function(e,t,r){"use strict";r.r(t);var a=r("a507"),n=r.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},a507:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("7736");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(){return Promise.all([r.e("common/vendor"),r.e("pages/card/components/app-card-give")]).then(r.bind(null,"d0bd"))},d=function(){return Promise.all([r.e("common/vendor"),r.e("pages/card/components/app-card-detail")]).then(r.bind(null,"6691"))},u={name:"give",components:{appCardGive:c,appCardDetail:d},data:function(){return{card:null,type:null}},computed:i({},(0,a.mapState)({cardImg:function(e){return e.mallConfig.__wxapp_img.card}})),onLoad:function(e){this.$commonLoad.onload(e),this.loadData(e)},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){return this.$shareAppMessage({title:this.card.app_share_title?this.card.app_share_title:"送你一张卡券，赶快来领取吧",imageUrl:this.card.app_share_pic?this.card.app_share_pic:this.cardImg.img_card_2,path:"/pages/card/give/give",params:{card_id:this.card.id}})},loadData:function(t){var r=this;this.$showLoading(),this.$request({url:this.$api.card.give,method:"get",data:{cardId:t.card_id}}).then((function(t){if(r.$hideLoading(),0===t.code){var a=t.data;r.type=a.type,r.card=t.data;var n="";n="give"===a.type?"领取卡券":"卡券详情",e.setNavigationBarTitle({title:n})}}))},receive:function(){this.loadData({card_id:this.card.id})}}};t.default=u}).call(this,r("d2c1")["default"])},ae58:function(e,t){e.exports=require("../siteinfo.js")},f003:function(e,t,r){"use strict";r.r(t);var a=r("427d"),n=r("7bc9");for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);var o=r("5d22"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"111e0817",null);t["default"]=c.exports}},[["8f9b","common/runtime","common/vendor"]]]);