(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/balance/password"],{"3df3":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"9d73":function(t,e,s){"use strict";s("c4cc")},c4cc:function(t,e,s){},e462:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s("7736");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={name:"password",data:function(){return{is_success:!1,old_pay_password:"",pay_password:"",verify_pay_password:"",haveBackground:!1,isPassword:!1}},computed:n(n({},(0,r.mapState)({userInfo:function(t){return t.user.info},mall:function(t){return t.mallConfig.mall}})),{},{inputPass:function(){return this.userInfo&&this.userInfo.is_pay_password?this.old_pay_password.length+this.pay_password.length+this.verify_pay_password.length==18:this.pay_password.length+this.verify_pay_password.length==12}}),onLoad:function(){var e=this;e.$request({url:e.$api.balance.index}).then((function(e){0===e.code&&0==e.data.setting.is_pay_password&&(t.showToast({icon:"none",title:"支付密码功能未开启"}),setTimeout((function(){t.navigateBack()}),1e3))})),this.isPassword=!0},methods:{toForget:function(){t.navigateTo({url:"/pages/balance/forget"})},toIndex:function(){t.reLaunch({url:"/pages/index/index"})},modify:function(){var e=this;if(this.inputPass)if(this.verify_pay_password=this.verify_pay_password.trim(),this.pay_password=this.pay_password.trim(),this.old_pay_password=this.old_pay_password.trim(),this.pay_password===this.verify_pay_password){this.$showLoading({type:"global",text:"设置中..."});var s={pay_password:this.pay_password,verify_pay_password:this.verify_pay_password};this.userInfo.is_pay_password&&(s.old_pay_password=this.old_pay_password),this.$request({url:this.userInfo.is_pay_password?this.$api.member.update_password:this.$api.member.set_password,method:"post",data:s}).then((function(s){e.$hideLoading(),0===s.code?(e.is_success=!0,e.$store.dispatch("user/refresh"),t.showToast({title:s.msg,type:"success"})):t.showToast({icon:"none",title:s.msg})}))}else t.showToast({icon:"none",title:"两次输入的密码不一致"})}}};e.default=i}).call(this,s("d2c1")["default"])},f288:function(t,e,s){"use strict";s.r(e);var r=s("e462"),a=s.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},f532:function(t,e,s){"use strict";s.r(e);var r=s("3df3"),a=s("f288");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(n);s("9d73");var o=s("5d22"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"6c7d729d",null);e["default"]=i.exports}},[["2f21","common/runtime","common/vendor"]]]);