(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/detail/detail"],{"16fd":function(t,e,i){"use strict";i.r(e);var n=i("5769"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"2b9a":function(t,e,i){},3329:function(t,e,i){"use strict";i.r(e);var n=i("7a06"),r=i("16fd");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("b8a5");var o=i("5d22"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"5c8995c7",null);e["default"]=s.exports},5769:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b096")),r=i("7736");function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e,i,n,r,a,o){try{var s=t[a](o),u=s.value}catch(c){return void i(c)}s.done?e(u):Promise.resolve(u).then(n,r)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var a=t.apply(e,i);function o(t){c(a,n,r,o,s,"next",t)}function s(t){c(a,n,r,o,s,"throw",t)}o(void 0)}))}}var f=function(){return i.e("plugins/gift/components/detail/order").then(i.bind(null,"17ae"))},l=function(){return i.e("plugins/gift/components/detail/order-information").then(i.bind(null,"e1db"))},p=function(){return i.e("plugins/gift/components/detail/win-order-information").then(i.bind(null,"8b3b"))},h=function(){return i.e("plugins/gift/components/detail/receiving-status").then(i.bind(null,"0fc1"))},g=function(){return i.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(i.bind(null,"0c06"))},b=function(){return i.e("plugins/gift/components/detail/win-order").then(i.bind(null,"f4a3"))},m=function(){return i.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(i.bind(null,"409e"))},_=function(){return i.e("plugins/gift/components/detail/logistics").then(i.bind(null,"0c75"))},w={name:"detail",data:function(){return{gift_id:-1,detail:{},gift_status:-1,win_detail:{},share:!1,turn_no:"",loading:!1}},onLoad:function(t){this.$commonLoad.onload(t),this.gift_id=t.gift_id,this.gift_status=t.status,this.$store.dispatch("gift/getConfig",this.$api.gift.config)},onShow:function(){var t=this.$api.gift,e=t.send_detail,i=t.win_detail,n=t.join_detail;switch(this.gift_status){case"0":this.getDetail({url:e,data:{gift_id:this.gift_id}});break;case"1":this.getDetail({url:i,data:{user_order_id:this.gift_id}});break;case"2":this.getDetail({url:n,data:{user_order_id:this.gift_id}});break}},onShareAppMessage:function(t){if("button"===t.from)return this.$shareAppMessage({path:"/plugins/gift/index/index",imageUrl:0===this.detail.is_big_gift?this.detail.detail[0].cover_pic:this.big_gift_pic,title:this.detail.giftLog.bless_word,params:{gift_id:this.detail.gift_id,turn_no:this.turn_no}})},methods:{getDetail:function(){var e=d(n.default.mark((function e(i){var r;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:i.url,method:"get",data:s({},i.data)});case 4:r=e.sent,this.$utils.hideLoading(),0===r.code?(this.detail=r.data.detail,this.loading=!0):t.showModal({title:"提示",content:r.msg}),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),this.$utils.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));function i(t){return e.apply(this,arguments)}return i}(),setShare:function(){var e=d(n.default.mark((function e(){var i;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.next=3,this.$request({url:this.$api.gift.turn,data:{id:this.gift_id}});case 3:i=e.sent,0===i.code?(this.turn_no=i.data.turn_no,this.share=!0):t.showModal({title:"提示",content:i.msg}),this.$utils.hideLoading();case 6:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),setSwitch:function(t){this.detail.detail[t].switch=!this.detail.detail[t].switch},receipt:function(e){var i=this;t.showModal({title:"提示",content:"确认收货",success:function(t){t.confirm&&i.$request({url:i.$api.order.confirm,data:{id:e}}).then((function(t){if(0===t.code)switch(i.gift_status){case"0":i.getDetail({url:i.$api.gift.send_detail,data:{gift_id:i.gift_id}});break;case"1":i.getDetail({url:i.$api.gift.win_detail,data:{user_order_id:i.gift_id}});break;case"2":i.getDetail({url:i.$api.gift.join_detail,data:{user_order_id:i.gift_id}});break}}))}})}},computed:s({},(0,r.mapState)("gift",{theme:function(t){return t.theme},big_gift_pic:function(t){return t.big_gift_pic}})),components:{order:f,"order-information":l,"receiving-status":h,"app-empty-bottom":g,"win-order":b,"win-order-information":p,"app-share-qr-code-poster":m,logistics:_}};e.default=w}).call(this,i("d2c1")["default"])},"7a06":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,Number(110));t.$mp.data=Object.assign({},{$root:{m0:i}})},r=[]},b8a5:function(t,e,i){"use strict";i("2b9a")}},[["a88e","common/runtime","common/vendor"]]]);