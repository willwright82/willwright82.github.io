(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],f=0,p=[];f<c.length;f++)o=c[f],r[o]&&p.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},4038:function(e,t,n){"use strict";var a=n("5089"),r=n.n(a);r.a},5089:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui container",attrs:{id:"app"}},[n("v-data-table",{attrs:{columns:e.columns,rows:e.campaigns,"per-page":4}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"ui striped very padded table"},[n("thead",[n("tr",e._l(e.columns,function(t){return n("th",{key:t.dataKey,class:t.align?t.align+" aligned":""},[e._v("\n        "+e._s(t.name)+"\n      ")])}),0)]),n("tbody",[e._l(e.display_rows(),function(t){return n("tr",{key:t.code},e._l(e.columns,function(a){return n("td",{key:a.dataKey,class:a.align?a.align+" aligned":""},[e._v("\n        "+e._s(a.formatValue?e.formatValue(a,t[a.dataKey]):t[a.dataKey])+"\n      ")])}),0)}),e._l(e.perPage-e.display_rows().length,function(t){return n("tr",{key:t},e._l(e.columns,function(t){return n("td",{key:t.dataKey},[e._v("\n         \n      ")])}),0)})],2),n("tfoot",[n("tr",[n("th",{attrs:{colspan:"3"}},[n("div",{staticClass:"ui pagination menu"},[n("a",{staticClass:"icon item",class:e.currentPage<=0?"disabled":"",on:{click:function(t){e.currentPage>0&&(e.currentPage-=1)}}},[n("i",{staticClass:"left chevron icon"})]),e._l(e.pages,function(t,a){return n("a",{key:a,staticClass:"item",class:a===e.currentPage?"active":"",on:{click:function(t){e.currentPage=a}}},[e._v("\n            "+e._s(a+1)+"\n          ")])}),n("a",{staticClass:"icon item",class:e.currentPage>=e.pages-1?"disabled":"",on:{click:function(t){e.currentPage<e.pages-1&&(e.currentPage+=1)}}},[n("i",{staticClass:"right chevron icon"})])],2),e._v("\n         \n        "+e._s(e.pages)+" pages\n        ("+e._s(e.rows.length)+" results)\n      ")])])])])},c=[],i=(n("c5f6"),{name:"v-data-table",props:{columns:Array,rows:Array,perPage:Number},data:function(){return{currentPage:0}},methods:{formatValue:function(e,t){return e.formatValue(t)},display_rows:function(){var e=this.currentPage*this.perPage,t=e+this.perPage;return this.rows.slice(e,t)},change_page:function(e){this.currentPage=e}},computed:{pages:function(){return Math.ceil(this.rows.length/this.perPage)}}}),u=i,l=(n("4038"),n("2877")),f=Object(l["a"])(u,o,c,!1,null,"19829b8b",null),p=f.exports,d=n("340b"),g={name:"app",components:{VDataTable:p},data:function(){return{columns:[{dataKey:"code",name:"Code",align:"left"},{dataKey:"startDate",name:"Start Date",align:"left",formatValue:function(e){return Object(d["format"])(e,"DD MMM YYYY")}},{dataKey:"sales",name:"Sales",align:"right",formatValue:function(e){return"£"+e.toLocaleString("en-GB")}}],campaigns:[{code:"CAM1",startDate:new Date(2019,2,15),sales:3209},{code:"CAM2",startDate:new Date(2019,1,15),sales:42469},{code:"CAM3",startDate:new Date(2019,2,10),sales:469},{code:"CAM4",startDate:new Date(2019,2,9),sales:11203},{code:"CAM5",startDate:new Date(2019,0,1),sales:123},{code:"CAM6",startDate:new Date(2019,0,15),sales:0},{code:"CAM7",startDate:new Date(2019,0,10),sales:8096}]}}},m=g,h=(n("034f"),Object(l["a"])(m,r,s,!1,null,null,null)),y=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.388732f6.js.map