(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/exchange/goods/goods"],{2261:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("b096")),i=o("7736"),s=r(o("1639"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,o,n,i,s,r){try{var a=t[s](r),d=a.value}catch(u){return void o(u)}a.done?e(d):Promise.resolve(d).then(n,i)}function d(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var s=t.apply(e,o);function r(t){a(s,n,i,r,d,"next",t)}function d(t){a(s,n,i,r,d,"throw",t)}r(void 0)}))}}function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var h=function(){return o.e("components/page-component/goods/app-goods-banner").then(o.bind(null,"12b6"))},p=function(){return o.e("components/page-component/goods/app-goods-full-reduce").then(o.bind(null,"6132"))},g=function(){return o.e("components/basic-component/app-close/app-close").then(o.bind(null,"f0dd"))},f=function(){return o.e("components/page-component/goods/bd-info").then(o.bind(null,"0e01"))},_=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/bd-coupon")]).then(o.bind(null,"11b2"))},m=function(){return o.e("components/page-component/goods/bd-xbc").then(o.bind(null,"8639"))},b=function(){return o.e("components/page-component/goods/bd-kb").then(o.bind(null,"4c29"))},v=function(){return o.e("components/page-component/goods/bd-hc").then(o.bind(null,"de37"))},y=function(){return o.e("components/page-component/goods/bd-detail").then(o.bind(null,"3e70"))},w=function(){return o.e("components/page-component/goods/bd-comments").then(o.bind(null,"9470"))},x=function(){return o.e("components/page-component/goods/app-sell-tip").then(o.bind(null,"571a"))},T={name:"goods",mixins:[s.default],data:function(){return{showClose:!1,is_open:!1,goods:{id:"",name:"",cover_pic:"",price:""},posterConfig:this.$api.exchange.poster_config,posterGenerate:this.$api.exchange.poster_generate,url:"",is_vip:!1,is_vip_card_user:0,show:!1,list:[],goods_id:-1,loading:!1,first:!0,discount:null,flash_sale:null,full_reduce:null,disable:"disable"}},onLoad:function(t){var e=this;this.$commonLoad.onload(t),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),this.goods_id=+t.goods_id,this.posterConfig=this.posterConfig+"&goods_id="+this.goods_id,this.posterGenerate=this.posterGenerate+"&goods_id="+this.goods_id,this.$showLoading({type:"global",text:"加载中..."}),this.request({url:this.$api.exchange.detail,data:{id:this.goods_id}}).then((function(t){if(t){e.first=!1;var o=t.goods;e.goods=o,e.loading=!0,e.url="".concat(e.$api.goods.poster,"&goods_id=").concat(e.goods.id),e.goods.vip_card_appoint.discount&&(e.is_vip=!0,e.discount=e.goods.vip_card_appoint.discount),e.full_reduce=o.goods_activity.full_reduce,e.flash_sale=e.goods.plugin_extra.flash_sale,e.is_vip_card_user=e.goods.vip_card_appoint.is_vip_card_user,e.$hideLoading()}}))},onShow:function(){var t=this;if(this.showClose=!1,setTimeout((function(){t.showClose=!0})),this.first)return!1;this.$showLoading(),this.$nextTick((function(){t.request({url:t.$api.exchange.detail,data:{id:t.goods_id}}).then((function(e){var o=e.goods;t.goods=o,t.loading=!0,t.full_reduce=o.goods_activity.full_reduce,t.url="".concat(t.$api.goods.poster,"&goods_id=").concat(t.goods.id),t.goods.vip_card_appoint.discount&&(t.is_vip=!0,t.discount=t.goods.vip_card_appoint.discount),t.flash_sale=t.goods.plugin_extra.flash_sale,t.is_vip_card_user=t.goods.vip_card_appoint.is_vip_card_user,t.$hideLoading()}))}))},computed:c(c(c(c({},(0,i.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}})),(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),(0,i.mapState)({mall:function(t){return t.mallConfig.mall},userInfo:function(t){return t.user.info},isTip:function(t){return t.mallConfig.mall.setting.is_remind_sell_time}})),{},{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backO:this.getTheme+"-m-back-o "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}},buyBtn:function(){return!this.goods||this.goods.buy_goods_auth?this.getTheme+"-m-gradient-o "+this.getTheme:this.disable+"-m-back "+this.disable},uBottomHeight:function(){return this.full_reduce&&this.goods.sell_time>0?"u-bottom-height-2":this.full_reduce||this.goods.sell_time>0?"u-bottom-height-1":"u-bottom-height-0"},leftTip:function(){var t="";return t=0==this.isTip&&this.goods.sell_time>0?"box-grow-1":"bd-btn-left bd-btn-half",this.goods&&"goods"===this.goods.type?t:""},disableBtn:function(){return this.goods.is_finish_sell||this.goods.sell_time>0?"btn-finish-sell":"bd-oversell-btn"},disableBtnText:function(){return this.goods.is_finish_sell?"商品已下架":this.goods.sell_time>0?"商品未开售":"已售罄"},remindParams:function(){return{sell_time:this.goods.sell_time,goods_id:this.goods.id,template_message_list:this.goods.template_message_list,buy_text:"立即购买"}}}),onShareTimeline:function(){return this.$shareTimeline({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.pic_url[0].pic_url,query:{goods_id:this.goods.id}})},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({path:"/plugins/exchange/goods/goods",title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:this.goods.pic_url[0].pic_url,desc:this.goods.subtitle,params:{goods_id:this.goods.id}},t)},getMall:function(t){this.is_open=1==t.is_open},toExchange:function(){if(this.goods.buy_goods_auth)if(this.goods.sell_time>0)this.rightTip();else{if("undefined"!==typeof this.goods.limit_buy&&1==this.goods.limit_buy.status&&this.goods.limit_buy.rest_number<1)return this.$tips.showToast({title:this.goods.limit_buy.text,icon:"none"}),!1;var e=[];for(var o in this.goods.attr[0].attr_list)e.push({attr_id:this.goods.attr[0].attr_list[o].attr_id,attr_group_id:this.goods.attr[0].attr_list[o].attr_group_id});var n=[{mch_id:0,goods_list:[{id:this.goods.id,attr:e,num:1,cat_id:0,goods_attr_id:this.goods.attr[0].id}]}],i="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(n));i+="&preview_url=".concat(encodeURIComponent(this.$api.exchange.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.exchange.order_submit),"&plugin=exchange"),t.navigateTo({url:i})}else this.$tips.showToast({title:"您暂无权限购买该商品",icon:"none"})},request:function(){var e=d(n.default.mark((function e(o){var i,s,r;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=o.url,s=o.data,e.next=3,this.$request({url:i,data:s});case 3:if(r=e.sent,0!==r.code){e.next=8;break}return e.abrupt("return",r.data);case 8:t.showModal({title:"提示",content:r.msg,showCancel:!1,success:function(e){t.navigateBack()}});case 9:case"end":return e.stop()}}),e,this)})));function o(t){return e.apply(this,arguments)}return o}(),setCoupon:function(t){this.$set(this.goods.goods_coupon_center[t],"is_receive",1)},changeTime:function(t){this.goods.sell_time=t}},components:{"app-banner":h,appClose:g,appGoodsFullReduce:p,bdInfo:f,bdCoupon:_,bdXbc:m,bdKb:b,bdHc:v,bdDetail:y,bdComments:w,appSellTip:x}};e.default=T}).call(this,o("d2c1")["default"])},4588:function(t,e,o){"use strict";o("7418")},7418:function(t,e,o){},"99ad":function(t,e,o){"use strict";o.r(e);var n=o("2261"),i=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},a976:function(t,e,o){"use strict";o.r(e);var n=o("ee50"),i=o("99ad");for(var s in i)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(s);o("4588");var r=o("5d22"),a=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},ae58:function(t,e){t.exports=require("../siteinfo.js")},ee50:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["dfea","common/runtime","common/vendor"]]]);