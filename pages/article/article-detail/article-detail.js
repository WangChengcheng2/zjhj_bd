(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/article-detail/article-detail"],{"144d":function(t,e,i){"use strict";i.r(e);var n=i("b9f6"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2d0f":function(t,e,i){"use strict";i.r(e);var n=i("6c38"),a=i("144d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("920e");var c=i("5d22"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"1bed735c",null);e["default"]=r.exports},"6c38":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"920e":function(t,e,i){"use strict";i("fa45")},b9f6:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("7736");var n=function(){return Promise.all([i.e("common/vendor"),i.e("components/basic-component/app-rich/parse")]).then(i.bind(null,"cb0e"))},a={data:function(){return{page:2,loading:!0,list:{content:" "}}},components:{appRichText:n},methods:{getList:function(){var e=this;this.$request({url:e.$api.article.detail,data:{article_id:e.id}}).then((function(i){e.$hideLoading(),0==i.code&&(e.loading=!1,e.list=i.data.article,setTimeout((function(){t.setNavigationBarTitle({title:e.list.title})}),0))})).catch((function(t){e.$hideLoading()}))}},onLoad:function(t){this.$commonLoad.onload(t),this.$showLoading({type:"global",text:"加载中..."}),this.id=t.id,this.getList(),this.$store.dispatch("gConfig/setImageWidth",48)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.list.title,path:"/pages/article/article-detail/article-detail",params:{id:this.id}})}};e.default=a}).call(this,i("d2c1")["default"])},fa45:function(t,e,i){}},[["d706","common/runtime","common/vendor"]]]);