(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/community-detail/community-detail"],{1442:function(e,t,i){},"6d8a":function(e,t,i){"use strict";i.r(t);var n=i("e7e0"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},bffc:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},c4c4:function(e,t,i){"use strict";i.r(t);var n=i("bffc"),o=i("6d8a");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("de3f");var d=i("5d22"),u=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,"5694472c",null);t["default"]=u.exports},de3f:function(e,t,i){"use strict";i("1442")},e7e0:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{id:0,detail:{},modelType:1,reasonRefusal:"",model:!1,iphone_x:!1}},onLoad:function(t){this.$commonLoad.onload(t);var i=this;e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.$showLoading({type:"global",text:"加载中..."}),i.id=t.id,i.getDetail()},methods:{getDetail:function(){var t=this;this.$request({url:this.$api.app_admin.review_detail_v2,data:{key:"community",user_id:this.id}}).then((function(i){t.$hideLoading(),e.hideLoading(),0===i.code&&(t.detail=i.data)})).catch((function(){t.$hideLoading(),e.hideLoading()}))},refuse:function(){this.modelType=1,this.model=!0},by:function(){this.modelType=2,this.model=!0},confirm:function(){var t=this;2===this.modelType?this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:"community",status:1,user_id:this.detail.user_id}}).then((function(i){0===i.code&&(e.showToast({title:"通过申请",duration:1e3}),t.model=!1,setTimeout((function(){e.navigateBack()})))})):1===this.modelType&&this.$request({url:this.$api.app_admin.review_switch_v2,method:"post",data:{key:"community",status:2,reason:this.reasonRefusal,user_id:this.detail.user_id}}).then((function(i){0===i.code?(t.reasonRefusal="",t.model=!1,e.showToast({title:"拒绝申请",icon:"none",duration:1e3}),setTimeout((function(){e.navigateBack()}))):e.showToast({title:i.msg,icon:"none",duration:1e3})}))},cancel:function(){this.model=!1}}};t.default=i}).call(this,i("d2c1")["default"])}},[["ceca","common/runtime","common/vendor"]]]);