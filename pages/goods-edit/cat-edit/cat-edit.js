(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods-edit/cat-edit/cat-edit"],{"0287":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("7736"),a=s(i("d5ea"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=r(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==i.return||i.return()}finally{if(c)throw s}}}}function r(t,e){if(t){if("string"===typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={data:function(){return{dialog:!1,level:[{value:1,label:"一级"},{value:2,label:"二级"},{value:3,label:"三级"}],iphone_x:!1,showParams:!1,parents:null,parents_two:null,mode:"",params:[],pickList:[],linkType:[{value:"base",name:"基础"},{value:"order",name:"订单"},{value:"marketing",name:"营销"},{value:"plugin",name:"插件"},{value:"diy",name:"微页面"}],chooseType:"base",title:"",linkList:[],list:[],mch_id:null,id:0,type:"",newIndex:0,chooseIndex:[0],catItem:{level:1,name:"",sort:100,pic_url:"",big_pic_url:"",advert_pic:"",status:1,advert_url:"",advert_open_type:"",advert_params:[],is_show:1,parent_id:""},color:""}},computed:h({},(0,n.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{paramsConfirm:function(){var e,i=o(this.params);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(n.is_required&&!n.value)return t.showToast({title:n.desc,icon:"none",duration:1e3}),!1}}catch(a){i.e(a)}finally{i.f()}this.dialog=!1,this.showParams=!1,this.catItem.advert_url=this.pickList[this.newIndex].value,this.catItem.advert_open_type=this.pickList[this.newIndex].open_type,this.catItem.advert_params=this.params},toggleType:function(t){var e=this;this.chooseType=t,this.pickList=[],this.newIndex=0,this.chooseIndex[0]=0,setTimeout((function(){e.pickList=e.linkList[t]}),200)},getList:function(e){var i=this;if(this.pickList=[],this.mode=e,this.newIndex=0,this.chooseIndex[0]=0,"one"==e){var n,a=[],s=o(this.list);try{for(s.s();!(n=s.n()).done;){var r=n.value;3==this.catItem.level?r.children&&a.push(r):a.push(r)}}catch(u){s.e(u)}finally{s.f()}for(var c in a)this.parents&&this.parents.value==a[c].value&&(this.newIndex=+c,this.chooseIndex[0]=+c),this.pickList.push(a[c]);if(0==this.pickList.length)return t.showToast({title:"暂无可用的一级分类",icon:"none",duration:1e3}),this.catItem.level--,!1;this.$nextTick((function(){i.dialog=!0}))}if("two"==e){if(!this.parents)return t.showToast({title:"请选择归属的一级分类",icon:"none",duration:1e3}),!1;if(this.parents.children){for(var l in this.parents.children)this.parents_two&&this.parents_two.value==this.parents.children[l].value&&(this.newIndex=+l,this.chooseIndex[0]=+l),this.pickList.push(this.parents.children[l]);if(0==this.pickList.length)return t.showToast({title:"暂无二级分类",icon:"none",duration:1e3}),this.catItem.level--,!1;this.$nextTick((function(){i.dialog=!0}))}}if("ad"==e){for(var h in this.pickList=this.linkList[this.chooseType],this.linkList[this.chooseType])this.catItem.advert_url&&this.catItem.advert_url==this.linkList[this.chooseType][h].value&&(this.newIndex=+h,this.chooseIndex[0]=+h);this.$nextTick((function(){i.dialog=!0}))}},submitChoose:function(){"one"==this.mode?(this.dialog=!1,this.parents&&this.parents.value!=this.pickList[this.newIndex].value&&(this.parents_two=null),this.parents=this.pickList[this.newIndex]):"two"==this.mode?(this.dialog=!1,this.parents_two=this.pickList[this.newIndex]):"ad"==this.mode&&(this.pickList[this.newIndex].params?(this.params=this.pickList[this.newIndex].params,this.title=this.pickList[this.newIndex].name,this.showParams=!0):(this.dialog=!1,this.catItem.advert_url=this.pickList[this.newIndex].value,this.catItem.advert_open_type=this.pickList[this.newIndex].open_type,this.catItem.advert_params=[]))},bindChange:function(t){this.newIndex=+t.detail.value[0]},getCat:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat;e.$request({url:i,data:{mch_id:e.mch_id}}).then((function(i){e.$hideLoading(),0==i.code?e.list=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},getPickLine:function(){var e=this;e.$request({url:e.$api.app_admin.pick_link}).then((function(i){e.$hideLoading(),0==i.code?e.linkList=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},add:function(e){var i=this;this.menu=!1,t.chooseImage({count:1,sizeType:["original","compressed"],success:function(n){var s=n.tempFilePaths;t.showLoading({mask:!0,title:"上传中..."}),s.forEach((function(n,s){var o="";(0,a.default)({url:i.$api.upload.file,filePath:n,fileType:"image",mch_id:0,fileName:o}).then((function(n){t.hideLoading();var a=void 0;a=JSON.parse(n.data),0==a.code&&("pic_url"==e?i.catItem.pic_url=a.data.url:"big_pic_url"==e?i.catItem.big_pic_url=a.data.url:"advert_pic"==e&&(i.catItem.advert_pic=a.data.url))}))}))}})},typeChange:function(t){if(this.id>0)return!1;this.catItem.level=t.target.value,3==this.catItem.level&&this.parents&&!this.parents.children&&(this.parents=null)},save:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat_edit:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat_edit;if(e.catItem.status=e.catItem.status.toString(),3==e.catItem.level){if(!e.parents_two||!e.parents_two.value)return t.showToast({title:"请选择归属的二级分类",icon:"none",duration:1e3}),!1;e.catItem.parent_id=e.parents_two.value}else if(2==e.catItem.level){if(!e.parents||!e.parents.value)return t.showToast({title:"请选择归属的一级分类",icon:"none",duration:1e3}),!1;e.catItem.parent_id=e.parents.value}if(!e.catItem.name)return t.showToast({title:"分类名称不能为空",icon:"none",duration:1e3}),!1;t.showLoading({mask:!0,title:"提交中..."}),e.mch_id>0&&(e.catItem.mch_id=e.mch_id),e.catItem.is_show=+e.catItem.is_show,e.catItem.status=e.catItem.status.toString(),e.$request({url:i,data:{form:JSON.stringify(e.catItem),mch_id:e.mch_id},method:"post"}).then((function(i){e.$hideLoading(),t.hideLoading(),0==i.code?(t.showToast({title:i.msg,duration:1e3}),setTimeout((function(){t.navigateBack()}),1e3)):t.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(i){t.hideLoading(),e.$hideLoading()}))},getDetail:function(){var e=this,i=0==this.mch_id?e.$api.app_admin.cat_edit:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat_edit;e.$request({url:i,data:{id:e.id,mch_id:e.mch_id}}).then((function(i){if(e.$hideLoading(),0==i.code){if(e.catItem=i.data.detail,e.catItem.level=i.data.detail.parents.length+1,e.catItem.level>1){var n,a=o(e.catItem.parents);try{for(a.s();!(n=a.n()).done;){var s=n.value;0==s.parent_id?e.parents={label:s.name,value:s.id}:e.parents_two={label:s.name,value:s.id}}}catch(r){a.e(r)}finally{a.f()}}}else t.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))}},onLoad:function(e){var i=this;this.id=e.id?e.id:0,this.type=e.type?e.type:"",this.mch_id=e.mch_id?e.mch_id:0,this.color=this.mch_id>0?"#ff4544":"#446dfd",t.setNavigationBarTitle({title:this.id>0?"编辑分类":"新增分类"}),0==this.mch_id&&i.getPickLine(),this.id>0&&(i.$showLoading({type:"global",text:"加载中..."}),this.getDetail()),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.getCat()}};e.default=d}).call(this,i("d2c1")["default"])},"1f9e":function(t,e,i){},"26d1":function(t,e,i){"use strict";i.r(e);var n=i("0287"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"61a5":function(t,e,i){"use strict";i("1f9e")},ae58:function(t,e){t.exports=require("../siteinfo.js")},b445:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.params,(function(e,i){var n=Array.isArray(e.value);return{$orig:t.__get_orig(e),g0:n}})));t._isMounted||(t.e0=function(e){t.catItem.status=0==t.catItem.status?1:0},t.e1=function(e){t.catItem.is_show=!t.catItem.is_show},t.e2=function(e){t.dialog=!1},t.e3=function(e){var i=t.item.value,n=e.target,a=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&t.$set(t.item,"value",i.concat([s])):o>-1&&t.$set(t.item,"value",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.item,"value",a)},t.e4=function(e){t.showParams=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},a=[]},fe08:function(t,e,i){"use strict";i.r(e);var n=i("b445"),a=i("26d1");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("61a5");var o=i("5d22"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"384277ee",null);e["default"]=r.exports}},[["521c","common/runtime","common/vendor"]]]);