(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/order/order"],{"05a0":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("7736");function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d=function(){return i.e("components/page-component/app-time-screening/app-time-screening").then(i.bind(null,"d285"))},r={data:function(){return{theme:{color:"#ff4544"},mch_id:0,cancelRefund:!1,time_start:[],noAddress:!1,status:"1",_num:"0",more_list:!1,addressId:"0",refund_price:0,page:1,notRefund:!1,openAddress:!1,isReason:!1,menu:[{name:"待收货",value:"3"},{name:"待处理",value:"7"},{name:"已取消",value:"6"},{name:"已完成",value:"8"}],active:null,show:!1,start:[],end:[],search:!1,keyword:"",list:[],candidate:[],date_start:"",date_end:"",time:0,inSearch:!1,address:[],chooseTime:!1,isRefund:!1,noRefund:!1,beToSend:!1,cancelOrder:!1,confirmOrder:!1,detail:{},changePrice:!1,callPhone:!1,custom:!1,mobile:"",isSend:!1,sendType:0,price:0,express:0,msg:!1,first:!1,searchResult:!1,total:0,about:"",actions:[{name:"取消",color:"#666666"},{name:"去设置",color:"#ff4544",loading:!1}]}},components:{"app-time-screening":d},computed:o({},(0,n.mapState)({userInfo:function(e){return e.user.info},adminImg:function(e){return e.mallConfig.__wxapp_img.mch}})),methods:{toDetail:function(t,i){var n=t.order_id;2==i&&(n=t.id),e.navigateTo({url:"/plugins/mch/mch/order-detail/order-detail?id="+n+"&status="+i+"&mch_id="+this.mch_id})},toRedirect:function(t){e.redirectTo({url:t})},cancel:function(){this.about="",this.isRefund=!1,this.chooseTime=!1,this.noRefund=!1,this.changePrice=!1,this.cancelOrder=!1,this.confirmOrder=!1,this.beToSend=!1,this.callPhone=!1,this.isSend=!1,this.notRefund=!1,this.openAddress=!1,this.isReason=!1,this.addressId=0,this.noAddress=!1},toChangeAddress:function(t){this.beToSend=!1;var i=t.order_no?t.order_no:this.detail.order_no;e.navigateTo({url:"/plugins/mch/mch/change-add/change-add?mch_id="+this.mch_id+"&order_no="+i})},tabStatus:function(e){var t=this;t.status=e,t.active=null,t.list=[],t.date_start="",t.date_end="",t.keyword="",t.time=0,t.show=!1,t._num="0",2==e&&(t._num=0),t.page=1,this.getList()},toCall:function(e){1==this.status?this.mobile=e.mobile:this.mobile=e.order.mobile,this.callPhone=!this.callPhone},beConfirm:function(){var t=this;t.$request({url:t.$api.app_admin.shou_huo,data:{refund_order_id:t.detail.id},method:"post"}).then((function(i){t.$hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:1e3,type:"success",mask:!1}),t.cancel(),setTimeout((function(i){t.list=[],t.page=1,e.showLoading({title:"加载中..."}),t.getList()}),1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(e){t.$hideLoading()}))},call:function(){e.makePhoneCall({phoneNumber:this.mobile}),this.callPhone=!this.callPhone},toSearch:function(){this.search=!0,this.list=[],this.searchResult=!1,this.candidate=this.$storage.getStorageSync("mch_keyword")?this.$storage.getStorageSync("mch_keyword"):[],this.inSearch=!1},keywordSearch:function(e){this.keyword=e,this.searchResult=!0,this.getList()},clear:function(){var t=this;this.$storage.removeStorageSync("mch_keyword"),t.candidate=[],e.showToast({title:"清理成功",duration:1e3,type:"success",mask:!1})},searchMethod:function(){var e=this.$storage.getStorageSync("mch_keyword")?this.$storage.getStorageSync("mch_keyword"):[];0!=this.keyword.length&&(e.length>0?e.unshift(this.keyword):e=[this.keyword],this.page=1,this.list=[],this.getList(),e.forEach((function(t,i){e[0]==e[i]&&i>0&&e.splice(i,1)})),this.$storage.setStorageSync("mch_keyword",e),this.inSearch=!0,this.searchResult=!0)},cancelSeacrch:function(){this.search=!1,this.keyword="",this.list=[],this.page=1,this.getList()},toChoose:function(t){var i=this;e.showLoading({title:"加载中..."}),i.date_start=t.date_start,i.date_end=t.date_end,i.time=t.choose,i.page=1,i.list=[],i.getList(),i.chooseTime=!1},toTime:function(){var e=this;e.chooseTime=!e.chooseTime,e.show=!1},chooseItem:function(e){var t=this;t._num=e,t.menu.forEach((function(e,i){e.value==t._num&&(t.active=e)})),t.show=!t.show,t.page=1,t.list=[],t.getList()},tab:function(e){this._num=e,this.show=!1,this.active=null,this.list=[],this.page=1,this.getList()},getList:function(){var t=this;t.about="";var i=0;2==t.status&&(i=t._num),e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.order_list,data:{status:2==t.status?"0":t._num,mch_id:t.mch_id,end_date:t.date_end,start_date:t.date_start,order_type:2==t.status?"refund_order":"order",refund_status:i,page:t.page,keyword:t.keyword}}).then((function(i){if(t.$hideLoading(),e.hideLoading(),t.first=!0,0==i.code){var n=i.data.list;if(2==t.status){var s=i.data.address;s.forEach((function(e,t){e.address=e.address.replace(/"/g,""),e.address=e.address.replace(/,/g,""),e.address=e.address.replace("[",""),e.address=e.address.replace("]","")})),t.address=s}else n.forEach((function(e){e.order_id=e.id,e.detail.forEach((function(t){t.refund_status>0&&(e.have_refund=1)}))}));t.more_list=!1,n.length==i.data.pagination.pageSize&&(t.more_list=!0),t.page++,t.list=t.list.concat(n),t.$forceUpdate()}else e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(i){t.$hideLoading(),e.hideLoading()}))},toCancelorder:function(e){this.detail=e,this.cancelOrder=!this.cancelOrder},toConfirm:function(e){this.detail=e,this.confirmOrder=!this.confirmOrder},cancelSubmit:function(t){var i=this;e.showLoading({title:"加载中..."});var n=1==t?i.$api.mch.cancel:i.$api.mch.force_cancel;i.$request({url:n,data:{status:1,mch_id:i.mch_id,remark:"",order_id:i.detail.id},method:"post"}).then((function(t){e.hideLoading(),0==t.code?(e.showToast({title:"取消成功",duration:2e3,type:"success",mask:!1}),i.isRefund=!1,i.cancelOrder=!1,setTimeout((function(){i.list=[],i.page=1,i.getList()}),1e3)):e.showToast({title:t.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))},toChange:function(e){this.detail=e,this.changePrice=!this.changePrice,this.price=e.total_goods_price,this.express=e.express_price,this.total="￥"+e.total_pay_price},priceInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.express).toFixed(2):this.total="数据有误"},expressInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.price).toFixed(2):this.total="数据有误"},submitChange:function(){var t=this;e.showLoading({title:"加载中..."}),t.price>-.01&&t.express>-.01?t.$request({url:t.$api.mch.update_total_price,data:{order_id:t.detail.id,mch_id:t.mch_id,total_price:t.price,express_price:t.express},method:"post"}).then((function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:2e3,type:"success",mask:!1}),t.page=1,t.list=[],t.changePrice=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):t.price&&"number"==typeof t.price?t.express&&"number"==typeof t.express||e.showToast({title:"运费必须大于等于0",icon:"none",duration:1e3}):e.showToast({title:"商品总价必须大于等于0",icon:"none",duration:1e3})},toRefundOrder:function(e){var t=this;t.list=[],t.more_list=!1,t.keyword=e,t.status=2,t._num=0,t.search=!0,t.searchMethod()},toSend:function(e){this.detail=e,1!=e.send_type||e.address?this.isSend=!0:this.beToSend=!0},toExpress:function(t,i){var n=t.id,s=t.refund;n>0?e.navigateTo({url:"/plugins/mch/mch/send/send?id="+n+"&is_send="+i+"&mch_id="+this.mch_id}):s&&e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+s+"&is_send="+i+"&mch_id="+this.mch_id})},toSendType:function(){var t=this;if(1==t.sendType)if(t.detail.status_text)e.showLoading({title:"加载中..."}),t.$request({url:t.$api.mch.refund_handle,data:{is_express:0,merchant_remark:"",mch_id:t.mch_id,type:t.detail.type,is_agree:1,order_refund_id:t.detail.id},method:"post"}).then((function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.list=[],t.page=1,t.isSend=!1,t.sendType=0,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}));else{e.showLoading({title:"加载中..."});var i={is_express:2,mch_id:t.mch_id,words:"",order_id:t.detail.id};t.detail.detailExpress.length>0&&(i.express_id=t.detail.detailExpress[0].id),t.$request({url:t.$api.mch.order_send,data:i,method:"post"}).then((function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.isSend=!1,setTimeout((function(){t.list=[],t.page=1,t.sendType=0,t.getList()}),1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))}else t.isSend=!1,t.detail.status_text?e.navigateTo({url:"/plugins/mch/mch/send/send?order_refund_id="+t.detail.id+"&mch_id="+t.mch_id+"&is_send="+t.detail.is_send}):e.navigateTo({url:"/plugins/mch/mch/send/send?id="+t.detail.id+"&mch_id="+t.mch_id+"&is_send="+t.detail.is_send})},look:function(t){e.previewImage({current:t,urls:[t]})},lookAbout:function(e){this.detail=e,this.isReason=!0},toRefund:function(e){this.detail=e,this.refund_price=e.refund_price,this.isRefund=!this.isRefund},agree:function(){var t=this;e.showLoading({title:"处理中..."}),t.detail.refund_price>0?t.$request({url:t.$api.mch.refund_handle,data:{order_refund_id:t.detail.id,type:t.detail.type,is_agree:1,mch_id:t.mch_id,refund_price:t.refund_price,merchant_remark:t.about},method:"post"}).then((function(i){e.hideLoading(),0==i.code?e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(e){e.confirm&&(t.list=[],t.notRefund=!1,t.openAddress=!1,t.isRefund=!1,t.addressId=0,t.page=1,t.getList())}}):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})):e.showToast({title:"退款金额需大于零",icon:"none",duration:1e3})},refundHandle:function(e,t,i){1==i&&(this.cancelRefund=!0),1==e?0==this.address.length?this.noAddress=!0:(this.detail=t,this.openAddress=!0):2==e&&(this.detail=t,this.notRefund=!0),this.$forceUpdate()},toAgreeCancel:function(e){this.detail=e,this.isRefund=!this.isRefund},decline:function(t){var i=this;if(1==t&&i.addressId<1)return e.showToast({title:"请选择地址",icon:"none",duration:1e3}),!1;i.cancelRefund&&(t=2),e.showLoading({title:"处理中..."}),i.$request({url:i.$api.mch.refund_handle,data:{order_refund_id:i.detail.id,type:i.detail.type,is_agree:t,mch_id:i.mch_id,address_id:i.addressId,refund_price:i.detail.refund_price,merchant_remark:i.about},method:"post"}).then((function(t){e.hideLoading(),0==t.code?e.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&(i.page=1,i.list=[],i.notRefund=!1,i.cancelOrder=!1,i.openAddress=!1,i.addressId=0,i.getList())}}):e.showToast({title:t.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))},chooseAddress:function(e){this.addressId==e?this.addressId="":this.addressId=e},noCancel:function(){var t=this;e.showLoading({title:"处理中..."}),t.$request({url:t.$api.mch.cancel,data:{status:2,remark:t.about,mch_id:t.mch_id,order_id:t.detail.id},method:"post"}).then((function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.list=[],t.page=1,t.noRefund=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))},beNotRefund:function(e){this.detail=e,this.noRefund=!this.noRefund}},onReachBottom:function(){this.more_list&&this.getList()},onShow:function(){!this.search&&this.first&&(this.list=[],this.page=1,this.getList())},onLoad:function(e){this.$commonLoad.onload(e);var t=this;t.$showLoading({type:"global",text:"加载中..."}),t.status="1",t._num="0",t.mch_id=e.mch_id,t.getList()}};t.default=r}).call(this,i("d2c1")["default"])},"0bb8":function(e,t,i){"use strict";i.r(t);var n=i("0c41"),s=i("e60c");for(var o in s)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(o);i("6ccc");var a=i("5d22"),d=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"4ffeaee6",null);t["default"]=d.exports},"0c41":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!e.show},e.e1=function(t){e.show=!e.show},e.e2=function(t){e.sendType=0},e.e3=function(t){e.sendType=1})},s=[]},"3b64":function(e,t,i){},"6ccc":function(e,t,i){"use strict";i("3b64")},e60c:function(e,t,i){"use strict";i.r(t);var n=i("05a0"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=s.a}},[["c8bb","common/runtime","common/vendor"]]]);