(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bargain/index/index"],{"1e8d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("7736");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=function(){return t.e("components/page-component/app-swiper/app-swiper").then(t.bind(null,"8af3"))},c=function(){return t.e("plugins/bargain/common-buttom").then(t.bind(null,"2faf"))},s=function(){return t.e("components/basic-component/app-iphone-x/app-iphone-x").then(t.bind(null,"7598"))},l=function(){return t.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(t.bind(null,"0c06"))},p={name:"index",components:{appSwiper:u,commonButtom:c,appEmptyBottom:l,appIphoneX:s},computed:a(a({},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo",getTheme:"getTheme"})),(0,o.mapState)({appImg:function(e){return e.mallConfig.__wxapp_img.mall},appSetting:function(e){return e.mallConfig.mall.setting}})),data:function(){return{list:[],args:!1,page:1,load:!1,banner_list:null,title:"砍价"}},onShareAppMessage:function(){return this.$shareAppMessage({title:this.title,path:"/plugins/bargain/index/index",params:{}})},onShareTimeline:function(){return this.$shareTimeline({title:this.title})},onLoad:function(){this.$commonLoad.onload();var e=this;e.$request({url:e.$api.bargain.banner}).then((function(n){0===n.code&&(e.banner_list=n.data.list)})),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},onShow:function(){var e=this;e.$showLoading(),e.$request({url:e.$api.bargain.goods_list}).then((function(n){e.$hideLoading(),0===n.code&&(e.list=n.data.list),e.args=!1,e.page=1})).catch((function(n){e.$hideLoading()}))},onReachBottom:function(){var e=this;if(!e.args&&!e.load){e.load=!0;var n=e.page+1;e.$request({url:e.$api.bargain.goods_list,data:{page:n}}).then((function(t){if(0===t.code){var o=[n,0===t.data.list.length,e.list.concat(t.data.list)];e.page=o[0],e.args=o[1],e.list=o[2]}e.load=!1}))}},methods:{goods:function(n){e.navigateTo({url:"/plugins/bargain/goods/goods?goods_id="+n.goods_id})}}};n.default=p}).call(this,t("d2c1")["default"])},2707:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"5ac6":function(e,n,t){"use strict";t.r(n);var o=t("2707"),i=t("8011");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("e7e5");var r=t("5d22"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"3d480afd",null);n["default"]=u.exports},6318:function(e,n,t){},8011:function(e,n,t){"use strict";t.r(n);var o=t("1e8d"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},e7e5:function(e,n,t){"use strict";t("6318")}},[["046e","common/runtime","common/vendor"]]]);