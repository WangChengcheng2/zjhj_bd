(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/mch-detail/mch-detail"],{"20f5":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.detail.form_data,(function(e,n){var o=t.getTypeof(e.value),i=t.getTypeof(e.value);return{$orig:t.__get_orig(e),m0:o,m1:i}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[]},"2c78":function(t,e,n){"use strict";n.r(e);var o=n("20f5"),i=n("6f31");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("e90e");var a=n("5d22"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"9b953c72",null);e["default"]=u.exports},"6f31":function(t,e,n){"use strict";n.r(e);var o=n("bf11"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},bf11:function(t,e,n){"use strict";(function(t){function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"mch-detail",data:function(){return{detail:{user:{nickname:""},realname:"",mobile:"",wechat:"",scope:"",districts:"",address:"",cat_name:"",service_mobile:"",form_data:[]},model:!1,modelType:0,reasonRefusal:"",transfer_rate:null,pageShow:!1,showForm:!1}},onLoad:function(t){var e=this;this.$commonLoad.onload(t),this.$showLoading({type:"global",text:"加载中..."}),this.$request({url:this.$api.app_admin.review_detail,data:{id:t.id}}).then((function(t){if(e.$hideLoading(),0===t.code){e.pageShow=!0,e.detail=t.data.detail;var n,i=o(e.detail.form_data);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.value&&(e.showForm=!0)}}catch(a){i.e(a)}finally{i.f()}}})).catch((function(){e.$hideLoading()}))},methods:{getTypeof:function(t){return n(t)},fail:function(){this.model=!0,this.modelType=1},by:function(){this.model=!0,this.modelType=2},cancel:function(){this.model=!1,this.modelType=0},confirm:function(){var e=this;2===this.modelType?(this.detail.transfer_rate=this.transfer_rate,this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:1,status:1,form:JSON.stringify(this.detail),user_id:this.detail.id}}).then((function(n){0===n.code?(t.navigateBack(),e.model=!1):1===n.code&&t.showToast({title:n.msg})}))):1===this.modelType&&(this.detail.review_remark=this.reasonRefusal,this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:1,status:2,form:JSON.stringify(this.detail),user_id:this.detail.id}}).then((function(n){0===n.code?(t.navigateBack(),e.model=!1):1===n.code&&t.showToast({title:n.msg})})))},preview:function(e){t.previewImage({urls:[e]})},onInput:function(t){var e=this;Number(t.detail.value)>1e3&&setTimeout((function(){e.transfer_rate=1e3}))}}};e.default=a}).call(this,n("d2c1")["default"])},cd9b:function(t,e,n){},e90e:function(t,e,n){"use strict";n("cd9b")}},[["1310","common/runtime","common/vendor"]]]);