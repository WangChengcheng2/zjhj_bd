(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-category-list/app-category-list"],{"0048":function(t,e,n){},"087c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-category-list",props:{list:{type:Array,default:function(){return[]}},windowHeight:{type:Number,default:function(){return 0}},windowWidth:{type:Number,default:function(){return 0}},botHeight:{type:Number,default:function(){return 0}},noSetHeight:{type:String},theme:Object},methods:{active:function(t,e){this.$emit("click",{item:t,index:e})}},computed:{setHeight:function(){var t=0;return this.$parent.$parent.$children[0].tabbarbool&&(t=this.botHeight),this.windowHeight*(750/this.windowWidth)-t-88+"rpx"}}};e.default=i},"1adb":function(t,e,n){"use strict";n("0048")},"5d3fb":function(t,e,n){"use strict";n.r(e);var i=n("d51d"),r=n("87c7");for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("1adb");var o=n("5d22"),a=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"87c7":function(t,e,n){"use strict";n.r(e);var i=n("087c"),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},d51d:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-category-list/app-category-list-create-component',
    {
        'components/page-component/app-category-list/app-category-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("5d3fb"))
        })
    },
    [['components/page-component/app-category-list/app-category-list-create-component']]
]);                
