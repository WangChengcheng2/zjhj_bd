(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/fxhb/detail/detail"],{"34ec":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("b096")),a=i("7736");function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,n,a,r,o){try{var s=t[r](o),u=s.value}catch(c){return void i(c)}s.done?e(u):Promise.resolve(u).then(n,a)}function s(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var r=t.apply(e,i);function s(t){o(r,n,a,s,u,"next",t)}function u(t){o(r,n,a,s,u,"throw",t)}s(void 0)}))}}function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d=function(){return Promise.all([i.e("common/vendor"),i.e("components/page-component/u-goods-list/u-ordinary-list")]).then(i.bind(null,"24ba"))},h={name:"detail",components:{uOrdinaryList:d},computed:c(c({},(0,a.mapState)({appImg:function(t){return t.mallConfig.plugin.fxhb.app_image}})),(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),data:function(){var t;return{interval_time:t,user_activity_id:0,config:null,goods_list:[],show_share_model:!1,time_str:"00:00:00",is_new:!1,coupon_total_money:0,is_join:0,is_my_hongbao:!1,list:null,min_price:0,reset_time:null,status:-1,totalUser:0,user_num:0,user_num_list:[],user_price:0,again_open:!0,page_url:"",template_message:[]}},onLoad:function(t){this.$commonLoad.onload(t),this.user_activity_id=t.user_activity_id?t.user_activity_id:"",this.loadConfig()},onUnload:function(){clearInterval(this.intervalTime)},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:this.config.share_title,path:"/plugins/fxhb/detail/detail",params:{user_activity_id:this.user_activity_id},imageUrl:this.config.share_pic_url},t)},loadConfig:function(){var e=this;t.showLoading({title:"加载中"}),e.$request({url:e.$api.fxhb.index,data:{user_activity_id:e.user_activity_id}}).then((function(i){t.hideLoading(),0===i.code?(e.config=i.data.config,e.template_message=i.data.template_message,i.data.user_activity_id?(e.user_activity_id=i.data.user_activity_id,e.loadData()):e.user_activity_id?e.subscribe():e.openNew()):(t.showToast({icon:"none",title:i.msg}),setTimeout((function(){t.redirectTo({url:"/pages/index/index"})}),2e3))})).catch((function(){t.hideLoading()}))},openNew:function(){var t=[-1,!0,[]];this.status=t[0],this.is_new=t[1],this.goods_list=t[2]},open:function(){this.again_open&&(this.user_activity_id=0,this.subscribe(),this.again_open=!1)},rules:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.fxhb.index),"&keys=").concat(JSON.stringify(["config","remark"]))})},homes:function(){t.navigateTo({url:"/pages/index/index"})},goods:function(){t.redirectTo({url:this.page_url})},subscribe:function(){this.detailSubmit()},detailSubmit:function(){var e=this,i=this;t.showLoading({title:"抢红包中",mask:!0}),this.$request({url:this.$api.fxhb.join,method:"post",data:{user_activity_id:this.user_activity_id}}).then((function(n){t.hideLoading(),0===n.code?e.result(n.data.queueId,n.data.token):(t.showToast({icon:"none",title:n.msg}),setTimeout((function(){i.openNew()}),2e3))})).catch((function(){t.hideLoading()}))},loadData:function(){var e=s(n.default.mark((function e(){var i,a,r,o,s,u,c,l,d,h,f,_,m;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中",mask:!0}),e.next=3,this.$request({url:this.$api.fxhb.detail,data:{user_activity_id:this.user_activity_id}});case 3:i=e.sent,t.hideLoading(),0===i.code?(a=i.data,r=a.coupon_total_money,o=a.is_join,s=a.is_my_hongbao,u=a.list,c=a.min_price,l=a.page_url,d=a.reset_time,h=a.status,f=a.totalUser,_=a.user_num,m=a.user_price,this.coupon_total_money=r,this.is_join=o,this.is_my_hongbao=s,this.list=u,this.min_price=c,this.page_url=l,this.reset_time=d,this.totalUser=f,this.status=h,this.user_num=_,this.user_price=m,this.user_num_list=new Array(this.user_num),this.setTimeStart(),this.getRecommend(),this.again_open=!0):(t.showToast({icon:"none",title:i.msg}),setTimeout((function(){t.redirectTo({url:"/pages/index/index"})}),2e3));case 6:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),setTimeStart:function(){var t=this;clearInterval(this.interval_time);var e=function(){var e=0,i=0,n=0,a=t.reset_time;a--,a>0&&(e=Math.floor(a/3600),i=Math.floor(a/60)-60*e,n=Math.floor(a)-60*e*60-60*i);var r=[a,{hour:e,minute:i,second:n}];t.reset_time=r[0],t.time_list=r[1],t.time_str=(e<10?"0"+e:e)+":"+(i<10?"0"+i:i)+":"+(n<10?"0"+n:n),a<=0&&clearInterval(t.intervalTime)};e(),this.interval_time=setInterval((function(){e()}),1e3)},result:function(e,i){var n=this;t.showLoading({title:"加载中",mask:!0}),this.$request({url:this.$api.fxhb.join_result,data:{queueId:e,token:i}}).then((function(a){0===a.code?a.data.retry&&1==a.data.retry?setTimeout((function(){n.result(e,i)}),1e3):(n.user_activity_id=a.data.user_activity_id,n.loadData(),t.hideLoading(),n.showShareModal()):(t.hideLoading(),n.status=2,t.showToast({icon:"none",title:a.msg}),setTimeout((function(){t.redirectTo({url:"/pages/index/index"})}),2e3))}))},showShareModal:function(){var t=[!1,!0];this.is_new=t[0],this.show_share_model=t[1]},closeShareModal:function(){var t=[!1];this.show_share_model=t[0]},getRecommend:function(){var e=s(n.default.mark((function e(){var i;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中",mask:!0}),e.next=3,this.$request({url:this.$api.fxhb.recommend});case 3:i=e.sent,t.hideLoading(),0===i.code&&(this.goods_list=i.data.list);case 6:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}()}};e.default=h}).call(this,i("d2c1")["default"])},"6f58":function(t,e,i){"use strict";i("bdf7")},b634:function(t,e,i){"use strict";i.r(e);var n=i("34ec"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b89b:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;t._self._c},a=[]},bdf7:function(t,e,i){},f99b:function(t,e,i){"use strict";i.r(e);var n=i("b89b"),a=i("b634");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6f58");var o=i("5d22"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"26fdaac8",null);e["default"]=s.exports}},[["d26c","common/runtime","common/vendor"]]]);