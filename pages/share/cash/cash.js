(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/cash/cash"],{"0a1d":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("7736");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r=function(){return a.e("components/page-component/app-cash-model/app-cash-model").then(a.bind(null,"8637"))},c={data:function(){return{visible:!1,mark_num:-1,money:0,name:"",bank_name:"",mobile:"",moneyInput:"",pay_type:{auto:!1,alipay:!1,wechat:!1,bank:!1,balance:!1},config:[],template_message:[],cashTypeModel:!1,cashType:"",loading:!1}},components:{appCashModel:r},computed:o(o({},(0,n.mapState)({mall:function(e){return e.mallConfig.mall},custom_setting:function(e){return e.mallConfig.share_setting_custom},share_setting:function(e){return e.mallConfig.share_setting}})),{},{cashName:function(){switch(this.cashType){case"auto":return"微信零钱";case"wx":return"微信线下打款";case"alipay":return"支付宝线下打款";case"bank":return"银联线下打款";case"balance":return"商城余额";default:return}}}),methods:{getMoney:function(){var e=this.config.surplusCash?this.config.surplusCash:this.config.cash_max_day;+e<+this.money&&+e>-1?this.moneyInput=+e:this.moneyInput=+this.money},payTypeChange:function(e){switch(this.cashType=e,e){case"auto":this.mark_num=0;break;case"wx":this.mark_num=1;break;case"alipay":this.mark_num=2;break;case"bank":this.mark_num=3;break;case"balance":this.mark_num=4;break;default:this.mark_num=-1;break}},subscribe:function(){var t=this;if(-1!==this.mark_num){if(this.loading)return!1;this.loading=!0,this.$subscribe(this.template_message).then((function(e){t.submit()})).catch((function(e){t.submit()}))}else e.showToast({title:"请选择提现方式",icon:"none"})},submit:function(){var t=this,a=this,n={price:a.moneyInput,type:"auto"};if(e.showLoading({title:"申请中"}),4===a.mark_num)n.type="balance";else if(0===a.mark_num)n.type="auto";else switch(n.name=a.name,n.mobile=a.mobile,a.mark_num){case 1:n.type="wechat";break;case 2:n.type="alipay";break;case 3:n.type="bank",n.bank_name=a.bank_name;break}a.$request({url:a.$api.share.cash,data:n,method:"post"}).then((function(a){t.loading=!1,e.hideLoading(),0===a.code?(e.showToast({title:a.msg,duration:1e3}),setTimeout((function(){e.redirectTo({url:"/pages/share/cash-detail/cash-detail"})}),1e3)):e.showToast({title:a.msg,icon:"none",duration:1e3})})).catch((function(){t.loading=!1,e.hideLoading()}))},setting:function(){var t=this;t.$request({url:t.$api.share.setting}).then((function(a){if(t.$hideLoading(),0===a.code){t.config=a.msg.config,t.template_message=a.msg.template_message;for(var n=0;n<t.config.pay_type.length;n++)switch(t.config.pay_type[n]){case"auto":t.pay_type.auto=!0;break;case"alipay":t.pay_type.alipay=!0;break;case"wechat":t.pay_type.wechat=!0;break;case"balance":t.pay_type.balance=!0;break;case"bank":t.pay_type.bank=!0;break}}else e.showToast({title:a.msg,icon:"none",duration:1e3})})).catch((function(){t.$hideLoading()}))}},onLoad:function(t){this.$commonLoad.onload(t);var a=this;t.money>0&&(a.money=t.money),a.setting(),e.setNavigationBarTitle({title:a.custom_setting.menus.cash.name})}};t.default=c}).call(this,a("d2c1")["default"])},"58be":function(e,t,a){"use strict";a("ba0a")},"6e96":function(e,t,a){"use strict";a.r(t);var n=a("db84"),i=a("8aa7");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("58be");var s=a("5d22"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"6dca09f8",null);t["default"]=r.exports},"8aa7":function(e,t,a){"use strict";a.r(t);var n=a("0a1d"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},ba0a:function(e,t,a){},db84:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.visible=!e.visible},e.e1=function(t){e.cashTypeModel=!0},e.e2=function(t){e.visible=!1})},i=[]}},[["ff26","common/runtime","common/vendor"]]]);