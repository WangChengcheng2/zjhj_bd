(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/review-message/review-message"],{"14df":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(i("b096")),n=i("7736");function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,r,n,o,s){try{var a=t[o](s),u=a.value}catch(c){return void i(c)}a.done?e(u):Promise.resolve(u).then(r,n)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(r,n){var o=t.apply(e,i);function a(t){s(o,r,n,a,u,"next",t)}function u(t){s(o,r,n,a,u,"throw",t)}a(void 0)}))}}function u(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=l(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function c(t){return d(t)||f(t)||l(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return m(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={name:"review-message",data:function(){return{type:"share",first:!0,over:!1,titleShow:!1,showForm:!1,form:[],list:[],tab:[],getFocus:!1,keyword:"",searchBool:!1,modelType:1,reasonRefusal:"",setItem:{},titleWidth:"100%",model:!1,page:1}},computed:y({},(0,n.mapState)({windowHeight:function(t){return t.gConfig.systemInfo.windowHeight}})),onLoad:function(){this.$commonLoad.onload(),this.$showLoading({type:"global",text:"加载中..."}),this.getTabs()},onShow:function(){var t=this;if(this.first)return!1;this.request({key:this.type,page:1,keyword:this.keyword}).then((function(e){e&&(t.list=e.list)}))},methods:{getMore:function(){var t=this;this.over||(this.page++,this.request({key:this.type,page:this.page,keyword:this.keyword}).then((function(e){e&&e.list.length>0?t.list=[].concat(c(t.list),c(e.list)):e&&0===e.list.length&&(t.over=!0)})))},imageLoad:function(t){this.form[t].loadOver=!1},look:function(e){t.previewImage({current:e,urls:[e]})},toggle:function(t){for(var e in this.form=t.form,this.form)if("img_upload"==this.form[e].key&&Array.isArray(this.form[e].value)){var i,r=!1,n=u(this.form[e].value);try{for(n.s();!(i=n.n()).done;){var o=i.value;""!=o&&(r=!0)}}catch(s){n.e(s)}finally{n.f()}r||this.form.splice(e,1)}this.showForm=!0},toUrl:function(e){if("region"==this.type||"community"==this.type||"mch"==this.type){var i="/pages/app_admin/"+this.type+"-detail/"+this.type+"-detail?id=";"region"==this.type&&(i+=e.id+"&name="+e.nickname),"mch"==this.type&&(i+=e.id),"community"==this.type&&(i+=e.user_id),t.navigateTo({url:i})}},tabSwitch:function(e){var i=this;this.list=[],this.type=e,t.showLoading({mask:!0,title:"加载中..."}),this.request({key:e,page:1,keyword:""}).then((function(e){t.hideLoading(),e&&(i.list=e.list)}))},getTabs:function(){var e=this,i=this;i.$request({url:i.$api.app_admin.tabs_v2,method:"get"}).then((function(r){i.$hideLoading(),t.hideLoading(),0==r.code?(i.tab=r.data,1==i.tab.length?t.setNavigationBarTitle({title:i.tab[0].plugin+"审核消息"}):i.titleShow=!0,i.titleWidth=1/i.tab.length*100+"%",i.type=r.data[0].key,i.request({key:r.data[0].key,page:1,keyword:""}).then((function(t){e.first=!1,t&&(i.list=t.list)}))):t.showToast({title:r.msg,icon:"none",duration:1e3})}))},blurFocus:function(){var t=this;setTimeout((function(e){t.getFocus=!1,t.searchText()}),300)},clearSearch:function(){this.keyword="",this.searchBool=!1,this.searchBool||this.searchText()},changeType:function(t){var e=this;this.list=[],this.page=1,this.type=t,this.over=!1,this.keyword="",this.searchBool=!1,this.request({key:t,page:this.page,keyword:this.keyword}).then((function(t){t&&(e.list=t.list)}))},request:function(){var e=a(r.default.mark((function e(i){var n,o,s,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.key,o=i.page,s=i.keyword,e.next=3,this.$request({url:this.$api.app_admin.review_v2,data:{key:n,page:o,keyword:s}});case 3:if(a=e.sent,0!==a.code){e.next=8;break}return e.abrupt("return",a.data);case 8:return t.showToast({title:a.msg,icon:"none",duration:1e3}),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this)})));function i(t){return e.apply(this,arguments)}return i}(),checkQueue:function(t){var e=this;this.$request({url:this.$api.app_admin.queue,data:{queue_id:t}}).then((function(i){if(i.retry&&1==i.retry)e.checkQueue(t);else for(var r=0;r<e.list.length;r++)e.list[r].id===e.setItem.id&&(e.$delete(e.list,r),e.model=!1,e.setItem={})}))},searchText:function(){var e=this;""===this.keyword&&(this.searchBool=!1),this.page=1,this.over=!1,t.showLoading({mask:!0,title:"搜索中..."}),this.request({key:this.type,page:this.page,keyword:this.keyword}).then((function(i){t.hideLoading(),i&&(e.list=i.list)}))},refuse:function(t){this.setItem=t,this.modelType=1,this.model=!0},by:function(t){this.setItem=t,this.modelType=2,this.model=!0},confirm:function(){var e=this;2===this.modelType?this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:this.type,status:1,form:JSON.stringify(this.setItem),user_id:this.setItem.user_id}}).then((function(t){if(0===t.code)if(3==e.type)e.checkQueue(t.data.queue_id);else for(var i=0;i<e.list.length;i++)e.list[i].id===e.setItem.id&&(e.$delete(e.list,i),e.model=!1,e.setItem={})})):1===this.modelType&&(this.setItem.review_remark=this.reasonRefusal,this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:this.type,status:2,form:JSON.stringify(this.setItem),reason:this.reasonRefusal,user_id:this.setItem.user_id}}).then((function(i){if(0===i.code){e.reasonRefusal="";for(var r=0;r<e.list.length;r++)e.list[r].id===e.setItem.id&&(e.$delete(e.list,r),e.model=!1,e.setItem={})}else t.showToast({title:i.msg,icon:"none",duration:1e3})})))},cancel:function(){this.model=!1,this.form=[],this.showForm=!1,this.setItem={}}}};e.default=v}).call(this,i("d2c1")["default"])},"260f":function(t,e,i){"use strict";i.r(e);var r=i("14df"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},2643:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.form,(function(e,i){var r=Array.isArray(e.value);return{$orig:t.__get_orig(e),g0:r}})));t._isMounted||(t.e0=function(e){t.searchBool=!0,t.getFocus=!0},t.e1=function(e){t.getFocus=!0},t.e2=function(e){t.getFocus=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[]},4732:function(t,e,i){"use strict";i.r(e);var r=i("2643"),n=i("260f");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7c70");var s=i("5d22"),a=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,"2cfb3c48",null);e["default"]=a.exports},"7c70":function(t,e,i){"use strict";i("dcc6")},dcc6:function(t,e,i){}},[["8afb","common/runtime","common/vendor"]]]);