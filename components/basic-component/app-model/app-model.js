(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-model/app-model"],{"046d":function(t,e,n){"use strict";n.r(e);var u=n("0e7b"),i=n.n(u);for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},"0e7b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"app-model",props:{type:{type:String,default:function(){return"1"}},background:{type:String,default:function(){return"white"}},height:{type:Number,default:function(){return 500}},value:{type:Boolean,default:function(){return!1}}},data:function(){return{display:this.value}},methods:{bubble:function(){return!1},close:function(){this.display=!1,this.$emit("input",this.display)}},computed:{setHeight:function(){return!0===this.display?"0":"-".concat(this.height+108,"rpx")}},watch:{value:function(){this.display=this.value}}};e.default=u},"3f3b":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},cf2f:function(t,e,n){"use strict";n.r(e);var u=n("3f3b"),i=n("046d");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("fb1c");var r=n("5d22"),o=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,"0ee678ce",null);e["default"]=o.exports},db78:function(t,e,n){},fb1c:function(t,e,n){"use strict";n("db78")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-model/app-model-create-component',
    {
        'components/basic-component/app-model/app-model-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("cf2f"))
        })
    },
    [['components/basic-component/app-model/app-model-create-component']]
]);                
