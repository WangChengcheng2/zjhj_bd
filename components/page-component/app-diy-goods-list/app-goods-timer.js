(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-diy-goods-list/app-goods-timer"],{"07184":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"2c94":function(e,t,i){"use strict";i.r(t);var n=i("07184"),a=i("b613");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("babd");var s=i("5d22"),l=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"25d74bbc",null);t["default"]=l.exports},"4bf0":function(e,t,i){},9520:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"app-goods-timer",props:{startDateTime:String,endDateTime:String,listStyle:{type:Number,default:function(){return-1}},sign:String,pageHide:Boolean,theme:Object},data:function(){return{timeInterval:null,timer:null,timerStr:null}},computed:{time:function(){return{startDateTime:this.startDateTime,endDateTime:this.endDateTime,pageHide:this.pageHide}},listClass:function(){var e="";return 2==this.listStyle&&(e="main-center"),e},signName:function(){var e="";switch(this.sign){case"miaosha":e="秒杀";break;case"bargain":e="砍价";break;case"lottery":e="抽奖";break;case"advance":e="预售";break;case"flash-sale":e="限时抢购";break}return e}},methods:{timing:function(e,t){var i=null,n=this.$utils.timeDifference((new Date).getTime(),new Date(e).getTime());n&&(this.timer="距开始 ",i=(n["d"]>0?n["d"]+"天":"")+n["h"]+":"+n["m"]+":"+n["s"]);var a=null;i||(a=this.$utils.timeDifference((new Date).getTime(),new Date(t).getTime()),a&&(this.timer="距结束 ",i=(a["d"]>0?a["d"]+"天":"")+a["h"]+":"+a["m"]+":"+a["s"])),i||(this.timer="活动已结束",clearInterval(this.timeInterval)),this.timerStr=i}},watch:{time:{handler:function(){var e=this;if(this.pageHide)clearInterval(this.timeInterval);else{var t=this.startDateTime,i=this.endDateTime;t=t.replace(/-/g,"/"),i=i.replace(/-/g,"/"),this.timing(t,i),this.timeInterval=setInterval((function(){e.timing(t,i)}),1e3)}},immediate:!0}},beforeDestroy:function(){clearInterval(this.timeInterval)}};t.default=n},b613:function(e,t,i){"use strict";i.r(t);var n=i("9520"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},babd:function(e,t,i){"use strict";i("4bf0")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-goods-list/app-goods-timer-create-component',
    {
        'components/page-component/app-diy-goods-list/app-goods-timer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("2c94"))
        })
    },
    [['components/page-component/app-diy-goods-list/app-goods-timer-create-component']]
]);                