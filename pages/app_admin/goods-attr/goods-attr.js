(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/goods-attr/goods-attr"],{"11f2":function(t,e,i){},"868e":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},a6cc:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{list:[],attr:[],iphone_x:!1,noDetail:!0,first:!0,index:-1}},methods:{changeName:function(e){var i=this;if(this.attr.length>0){for(var o in this.attr)for(var a in this.attr[o].attr_list)e.attr_group_id==this.attr[o].attr_list[a].attr_group_id&&(this.attr[o].attr_list[a].attr_group_name=e.attr_group_name);this.$storage.setStorageSync("temp_attr_info",i.attr),t.hideLoading()}},pop:function(t){this.index=t,this.list[this.index].attr_group_name||0!==this.list[this.index].attr_list.length||(this.list.splice(this.index,1),this.index=-1,this.attr=[],this.$storage.removeStorageSync("temp_attr_info"))},close:function(){this.index=-1},changeValue:function(e){this.$storage.setStorageSync("temp_attr",this.list),t.navigateTo({url:"/pages/app_admin/goods-attr-edit/goods-attr-edit?index=".concat(e)})},chooseDetail:function(){if(0===this.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;var e=1;for(var i in this.list)e*=+this.list[i].attr_list.length;if(e>1e3)return t.showToast({title:"规格组合超出1000，请删减规格值再继续操作",icon:"none",duration:1e3}),!1;for(var o in this.list)if(!this.list[o].attr_group_name||0==this.list[o].attr_list.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;this.$storage.setStorageSync("temp_attr",this.list),t.navigateTo({url:"/pages/app_admin/goods-attr-info/goods-attr-info"})},toDelete:function(){this.list.splice(this.index,1),this.index=-1,this.attr=[],this.$storage.removeStorageSync("temp_attr_info")},save:function(){var e=this;if(0===e.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;for(var i in e.list)if(!e.list[i].attr_group_name||0===e.list[i].attr_list.length||0===e.attr.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;this.$storage.setStorageSync("goods_attr_groups",this.list),t.showLoading({mask:!0,title:"保存中..."}),this.$storage.setStorageSync("goods_attr",this.attr),setTimeout((function(){t.hideLoading(),t.navigateBack()}),500)},add_attr:function(){this.list.push({attr_group_id:this.list.length+1,attr_group_name:"",attr_list:[]}),this.attr=[],this.$storage.removeStorageSync("temp_attr_info")}},onLoad:function(){this.$commonLoad.onload();var e=this;e.$showLoading({type:"global",text:"加载中..."});e.$storage.getStorageSync("goods_attr_groups")?(e.list=e.$storage.getStorageSync("goods_attr_groups"),e.$storage.setStorageSync("temp_attr",e.list)):e.list=e.$storage.getStorageSync("temp_attr"),e.$storage.getStorageSync("goods_attr")?(e.attr=e.$storage.getStorageSync("goods_attr"),e.$storage.setStorageSync("temp_attr_info",e.$storage.getStorageSync("goods_attr")),e.$hideLoading(),e.first=!1):(e.first=!1,e.$hideLoading()),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(e.iphone_x=!0)}})},onShow:function(){var t=this;this.first||(t.list=t.$storage.getStorageSync("temp_attr")?t.$storage.getStorageSync("temp_attr"):[],t.attr=t.$storage.getStorageSync("temp_attr_info")?t.$storage.getStorageSync("temp_attr_info"):[])}};e.default=i}).call(this,i("d2c1")["default"])},b6ac:function(t,e,i){"use strict";i.r(e);var o=i("868e"),a=i("d19c");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("fcec");var r=i("5d22"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"5cd62a44",null);e["default"]=s.exports},d19c:function(t,e,i){"use strict";i.r(e);var o=i("a6cc"),a=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},fcec:function(t,e,i){"use strict";i("11f2")}},[["9be2","common/runtime","common/vendor"]]]);