(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/appraise/appraise"],{"1cee":function(e,t,a){"use strict";a.r(t);var i=a("89e8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"306d":function(e,t,a){"use strict";a("f4bd")},"625c":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c},n=[]},"89e8":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("7736");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=function(){return Promise.all([a.e("common/vendor"),a.e("components/basic-component/app-upload-image/app-upload-image")]).then(a.bind(null,"798e"))},s={components:{"app-upload-image":c},data:function(){return{id:null,maxNum:6,appraiseData:[],is_show:!1}},computed:o({},(0,i.mapState)({scoreImg:function(e){return e.mallConfig.__wxapp_img.mall}})),methods:{getOrderDetail:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.order.detail,data:{id:this.id}}).then((function(a){if(t.$hideLoading(),0===a.code){var i=a.data.detail,n=[];i.detail.forEach((function(e){n.push({id:e.id,goods_pic_url:e.goods_info.pic_url?e.goods_info.pic_url:e.goods.goodsWarehouse.cover_pic,goods_name:e.goods.goodsWarehouse.name,content:"",pic_list:[],grade:[{id:3,title:"好评",active:!0,text_color:"#ff4544"},{id:2,title:"中评",active:!1,text_color:"#ff964a"},{id:1,title:"差评",active:!1,text_color:"#606e78"}],grade_level:3,is_anonymous:!1})})),t.appraiseData=n,t.is_show=!0}else e.showModal({title:"",content:a.msg,showCancel:!1}),e.navigateBack()})).catch((function(){t.$hideLoading()}))},imageEvent:function(e){var t=this,a=e.sign,i=e.imageList;t.appraiseData.forEach((function(e){if(e.id===a)return e.pic_list=i,!1})),this.appraiseData=t.appraiseData},grade:function(e,t,a){t.grade.forEach((function(e){e.active=!1})),e.active=!0,0==a&&(t.grade_level=3),1==a&&(t.grade_level=2),2==a&&(t.grade_level=1)},checkedChange:function(e){e.is_anonymous=!e.is_anonymous},formSubmit:function(){var t=this;e.showLoading({title:"提交中"}),t.$request({url:t.$api.order.appraise,method:"post",data:{appraiseData:JSON.stringify(t.appraiseData),order_id:t.id}}).then((function(a){e.hideLoading(),0===a.code?e.redirectTo({url:"/pages/order/appraise-finish/index?id=".concat(t.id)}):e.showModal({title:"",content:a.msg,showCancel:!1})})).catch((function(){e.hideLoading()}))},inputEvent:function(e){var t=this,a=e.id,i=e.value;t.appraiseData.forEach((function(e){e.id!=a||(e.content=i)})),this.appraiseData=t.appraiseData}},onLoad:function(e){this.$commonLoad.onload(e),this.id=e.id,this.getOrderDetail()}};t.default=s}).call(this,a("d2c1")["default"])},ae58:function(e,t){e.exports=require("../siteinfo.js")},cc49:function(e,t,a){"use strict";a.r(t);var i=a("625c"),n=a("1cee");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("306d");var r=a("5d22"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"f93b9990",null);t["default"]=c.exports},f4bd:function(e,t,a){}},[["ab96","common/runtime","common/vendor"]]]);