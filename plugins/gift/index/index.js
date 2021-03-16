(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/index/index"],{"26f3":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("b096")),s=i("7736");function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e,i,n,s,r,o){try{var a=t[r](o),u=a.value}catch(c){return void i(c)}a.done?e(u):Promise.resolve(u).then(n,s)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var r=t.apply(e,i);function o(t){c(r,n,s,o,a,"next",t)}function a(t){c(r,n,s,o,a,"throw",t)}o(void 0)}))}}var h=function(){return i.e("plugins/gift/components/index/pick-gift").then(i.bind(null,"6e04"))},l=function(){return i.e("plugins/gift/components/index/gift-method").then(i.bind(null,"c660"))},d=function(){return i.e("plugins/gift/components/index/blessing-message").then(i.bind(null,"0474"))},p=function(){return Promise.all([i.e("common/vendor"),i.e("plugins/gift/components/index/generate-package")]).then(i.bind(null,"8158"))},g=function(){return i.e("plugins/gift/components/announcement/gift-navigation").then(i.bind(null,"aaa8"))},_=function(){return i.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(i.bind(null,"0c06"))},m=function(){return i.e("plugins/gift/components/index/get-right-now").then(i.bind(null,"dc75"))},b=function(){return i.e("plugins/gift/components/index/voice").then(i.bind(null,"dac0"))},v={name:"index",data:function(){return{gift_list:[],totalPrice:0,method_type:"direct_open",open_type:0,open_num:null,select_str:"",open_time:"",bless_word:"",config:{},is_gift:!1,gift_id:-1,turn_no:"",gift:{},currentRoute:this.$platDiff.route(),navBool:!1,new_open_type:"",src:"",innerAudioContext:"",is_play:!1,audio:{},recorderManager:null,music_play:!1,bless_music:"",voice_i:0,voice_time:-1}},onLoad:function(e){var i=this;if(this.$commonLoad.onload(e),this.$user.isLogin()){if(e.gift_id&&e.user_id)this.is_gift=!0,this.gift_id=e.gift_id,this.turn_no=e.turn_no,this.getGift(this.gift_id);else if(e.pay_data){var n=JSON.parse(e.pay_data).gift_id;this.$request({url:this.$api.gift.cancel,data:{gift_id:n}})}}else this.$user.getInfo().then((function(){e.gift_id&&e.user_id&&(i.gift_id=e.gift_id,i.is_gift=!0,i.turn_no=e.turn_no,i.getGift(i.gift_id))}));this.request();var s=this;this.recorderManager=t.getRecorderManager({duration:3e4}),this.innerAudioContext=t.createInnerAudioContext(),this.innerAudioContext.onEnded((function(t){s.is_play=!1,s.music_play=!1})),this.innerAudioContext.onStop((function(){})),this.innerAudioContext.autoplay=!0,this.recorderManager.onStop((function(e){t.uploadFile({url:s.$api.upload.file,filePath:e.tempFilePath,name:"file",fileType:"audio",formData:{file:e.tempFilePath,file_name:""},success:function(t){var e=JSON.parse(t.data),i=(e.code,e.data);s.bless_music=i.url}}),s.audio=e})),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},onShow:function(){this.gift_list=this.$storage.getStorageSync("GIFT_CART");for(var t=0;t<this.gift_list.length;t++)this.gift_list[t].number=Number(this.gift_list[t].number),this.gift_list[t].total_cost=parseFloat((this.gift_list[t].number*this.gift_list[t].price).toFixed(2))},onUnload:function(){this.innerAudioContext&&(this.music_play=!1,this.is_play=!1,this.innerAudioContext.stop())},onHide:function(){this.innerAudioContext&&(this.music_play=!1,this.is_play=!1,this.innerAudioContext.stop())},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/gift/index/index",title:this.config.ask_gift})},onShareTimeline:function(){return this.$shareTimeline({title:this.config.ask_gift,query:{}})},methods:{request:function(){var e=f(n.default.mark((function e(){var i,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.gift.config,method:"get"});case 4:if(i=e.sent,this.$utils.hideLoading(),0!==i.code){e.next=32;break}this.config=i.data,t.setNavigationBarTitle({title:i.data.title}),s="",e.t0=Number(i.data.theme.id),e.next=1===e.t0?13:2===e.t0?15:3===e.t0?17:4===e.t0?19:5===e.t0?21:6===e.t0?23:25;break;case 13:return s="streamer-gold-gift",e.abrupt("break",26);case 15:return s="romantic-powder-gift",e.abrupt("break",26);case 17:return s="taste-red-gift",e.abrupt("break",26);case 19:return s="elegant-purple-gift",e.abrupt("break",26);case 21:return s="fresh-green-gift",e.abrupt("break",26);case 23:return s="business-blue-gift",e.abrupt("break",26);case 25:s="streamer-gold-gift";case 26:this.$storage.setStorageSync("giftTheme",s),this.$store.commit("gift/setTheme",Number(i.data.theme.id)),this.$store.commit("gift/setGiftPic",i.data.big_gift_pic),this.method_type=this.config.type[0],e.next=33;break;case 32:t.showModal({title:"提示",content:i.msg});case 33:e.next=39;break;case 35:throw e.prev=35,e.t1=e["catch"](1),this.$utils.hideLoading(),new Error(e.t1);case 39:case"end":return e.stop()}}),e,this,[[1,35]])})));function i(){return e.apply(this,arguments)}return i}(),giftNumber:function(t){var e=t.index,i=t.type;this.gift_list[e].number=i?this.gift_list[e].number+1:this.gift_list[e].number-1,this.changeNumber(e)},giftInput:function(t){var e=t.index,i=t.quantity;if(i>=this.gift_list[e].attr.stock){var n=JSON.parse(JSON.stringify(this.gift_list[e]));n.number=this.gift_list[e].attr.stock,this.$set(this.gift_list,e,n),this.changeNumber(e)}else this.$set(this.gift_list[e],"number",i),this.changeNumber(e)},changeNumber:function(t){var e=this.gift_list[t],i=e.number,n=e.price;this.$set(this.gift_list[t],"total_cost",parseFloat((i*n).toFixed(2))),0===this.gift_list[t].number&&this.$delete(this.gift_list,t),this.$storage.setStorageSync("GIFT_CART",this.gift_list)},submit:function(){var e=f(n.default.mark((function e(){var i,s,r,o,a;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.$utils.showLoading(),i=[{mch_id:0,type:this.method_type,open_num:this.open_num,open_time:this.open_time,bless_word:this.bless_word?this.bless_word:this.config.bless_word,bless_music:this.bless_music,open_type:this.open_type,goods_list:[],remark:"",use_integral:0,user_coupon_id:0}],s=0;s<this.gift_list.length;s++){for(r={id:this.gift_list[s].attr.goods_id,attr:[],num:this.gift_list[s].number,cat_id:0,goods_attr_id:this.gift_list[s].attr.id},o=0;o<this.gift_list[s].attr.attr_list.length;o++)r.attr.push({attr_id:this.gift_list[s].attr.attr_list[o].attr_id,attr_group_id:this.gift_list[s].attr.attr_list[o].attr_group_id});i[0].goods_list.push(r)}a={form_data:JSON.stringify({list:i})},this.$store.commit("gift/setFormData",a),"direct_open"===this.method_type?(delete i[0].open_num,delete i[0].open_time):"time_open"===this.method_type?delete i[0].open_num:"num_open"===this.method_type&&delete i[0].open_time,this.$utils.hideLoading(),t.navigateTo({url:"/pages/order-submit/order-submit?preview_url=".concat(encodeURIComponent(this.$api.gift.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.gift.order_submit),"&pay_data_url=").concat(encodeURIComponent(this.$api.gift.pay_data),"&show_pay_result=false&mch_list=").concat(JSON.stringify(i),"&theme=").concat(this.theme,"&order_page_url=/plugins/gift/share/share&pay_cancel_url=/plugins/gift/index/index")});case 8:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),generatePackage:function(){this.submit()},set_methods:function(t){this.method_type=t},set_people_status:function(t){this.open_type=t},change_people:function(t){this.open_num=t},set_lottery_time:function(t,e){this.select_str=t,this.open_time=e},changeTextarea:function(t){this.bless_word=t},pay_data:function(){var e=f(n.default.mark((function e(i){var s,r=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$request({url:this.$api.gift.pay_data,method:"post",data:a({},i)});case 3:s=e.sent,0===s.code?s.data.hasOwnProperty("id")?(this.$payment.pay(s.data.id).then((function(){r.$storage.setStorageSync("GIFT_CART",[]),t.redirectTo({url:"/plugins/gift/share/share?gift_id=".concat(s.data.gift_id)})})).catch((function(){})),this.$utils.hideLoading()):setTimeout((function(){r.pay_data(i)}),1e3):(this.$utils.hideLoading(),t.showModal({title:"提示",content:s.msg})),e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](0),this.$utils.hideLoading(),new Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function i(t){return e.apply(this,arguments)}return i}(),setGift:function(t){this.is_gift=t},getGift:function(){var e=f(n.default.mark((function e(i){var s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.next=3,this.$request({url:this.$api.gift.gift,data:{gift_id:i}});case 3:s=e.sent,0===s.code?(this.gift=s.data,this.wordYun(this.gift.list.bless_word)):t.showModal({title:"提示",content:s.msg}),this.$utils.hideLoading();case 6:case"end":return e.stop()}}),e,this)})));function i(t){return e.apply(this,arguments)}return i}(),setNav:function(){var t=void 0;if(t=this.currentRoute,t){for(var e=0;e<this.tabBarNavs.length;e++)if(t.includes(this.tabBarNavs[e].url.split("?")[0]))return this.navBool=!0;return this.navBool=!1}},play:function(t){this.is_play=t,this.voice_i=0,t?(this.innerAudioContext.src=this.audio.tempFilePath,this.innerAudioContext.play()):this.innerAudioContext.stop()},recorder:function(t){var e=this;t?(clearInterval(this.voice_time),this.voice_i=0,this.voice_time=setInterval((function(){e.voice_i++}),1e3),this.recorderManager.start()):(this.recorderManager.stop(),clearInterval(this.voice_time))},music:function(t,e){this.music_play=t,t?(this.innerAudioContext.src=e,this.innerAudioContext.play()):this.innerAudioContext.stop()},close:function(){this.is_play=!1,this.innerAudioContext.stop()}},watch:{gift_list:{handler:function(t){this.totalPrice=0;for(var e=0;e<t.length;e++)this.totalPrice+=t[e].total_cost;this.totalPrice=this.totalPrice.toFixed(2)},immediate:!0,deep:!0},tabBarNavs:{handler:function(){this.setNav()},immediate:!0}},computed:a(a(a({},(0,s.mapState)("gift",{theme:function(t){return t.theme},big_gift_pic:function(t){return t.big_gift_pic}})),(0,s.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs}})),(0,s.mapGetters)("iPhoneX",{BotHeight:"getNavHei"})),components:{"pick-gift":h,"gift-method":l,"blessing-message":d,"generate-package":p,"gift-navigation":g,"app-empty-bottom":_,"get-right-now":m,voice:b}};e.default=v}).call(this,i("d2c1")["default"])},"6efe":function(t,e,i){"use strict";i("fc8c")},ae58:function(t,e){t.exports=require("../siteinfo.js")},bbb0:function(t,e,i){"use strict";i.r(e);var n=i("e1ed"),s=i("f21a");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("6efe");var o=i("5d22"),a=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},e1ed:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,Number(96)),n=Object.keys(t.gift);t._isMounted||(t.e0=function(e){t.voice_i=0}),t.$mp.data=Object.assign({},{$root:{m0:i,g0:n}})},s=[]},f21a:function(t,e,i){"use strict";i.r(e);var n=i("26f3"),s=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},fc8c:function(t,e,i){}},[["b4fe","common/runtime","common/vendor"]]]);