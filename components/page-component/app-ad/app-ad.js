(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-ad/app-ad"],{4961:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"72dc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"app-ad",props:{type:String,unitId:String,picUrl:String,videoUrl:String,theme:{type:String,default:function(){return"white"}},couponUrl:String,couponParams:Object},data:function(){return{rewardedVideoAd:null,interstitialAd:null}},created:function(){this.init()},methods:{onAdLoad:function(){},onAdPlay:function(){},onAdClose:function(){},onAdError:function(){},init:function(){switch(this.type){case"rewarded-video":this.initRewardedVideoAd();break;case"interstitial":this.initInterstitialAd();break;default:break}},initRewardedVideoAd:function(){var t=this;wx.createRewardedVideoAd&&(this.rewardedVideoAd=wx.createRewardedVideoAd({adUnitId:this.unitId}),this.rewardedVideoAd.onClose((function(e){e&&e.isEnded&&t.getUserCoupon()})))},initInterstitialAd:function(){wx.createInterstitialAd&&(this.interstitialAd=wx.createInterstitialAd({adUnitId:this.unitId}))},showRewardedVideoAd:function(){var e=this;this.rewardedVideoAd.show().catch((function(){e.rewardedVideoAd.load().then((function(){return e.rewardedVideoAd.show()})).catch((function(e){t.showToast({title:e.errMsg,icon:"none"})}))}))},showInterstitialAd:function(){this.interstitialAd.show().catch((function(e){t.showToast({title:e.errMsg,icon:"none"})}))},getUserCoupon:function(){var e=this;this.$request({url:this.couponUrl,method:"POST",data:Object.assign({},this.couponParams)}).then((function(n){0===n.code?e.$store.dispatch("page/actionSetCoupon",{list:n.data.list,type:"award"}):t.showToast({title:n.msg,icon:"none"})}))}}};e.default=n}).call(this,n("d2c1")["default"])},ba36:function(t,e,n){"use strict";n.r(e);var i=n("4961"),o=n("bcb4");for(var d in o)["default"].indexOf(d)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(d);n("e257");var a=n("5d22"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"8c155a3e",null);e["default"]=r.exports},bcb4:function(t,e,n){"use strict";n.r(e);var i=n("72dc"),o=n.n(i);for(var d in i)["default"].indexOf(d)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(d);e["default"]=o.a},e257:function(t,e,n){"use strict";n("f68e")},f68e:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-ad/app-ad-create-component',
    {
        'components/page-component/app-ad/app-ad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("ba36"))
        })
    },
    [['components/page-component/app-ad/app-ad-create-component']]
]);                
