(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5],{273:function(t,e,n){"use strict";n.r(e);var l={props:{isActive:Boolean},data:function(){return{listDots:[1,2,3]}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-[#F5F6FA] p-1.5 rounded-md"},[n("div",{staticClass:"h-5 w-5 flex flex-col justify-between items-center ease-in duration-100",class:{"-rotate-90":t.isActive}},t._l(t.listDots,(function(t){return n("div",{key:t,staticClass:" h-1 w-1 bg-natural-2 rounded-full",attrs:{id:t}})})),0)])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var l={props:{item:{title:String,info:String},iterate:Boolean},data:function(){return{isActive:!1}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row items-center justify-between gap-2 mt-2 p-2 rounded-md",class:{"bg-[#EFEFEF]":!t.iterate}},[n("div",{staticClass:"h-8 w-8 rounded-full ring-2 ring-gray-300",attrs:{id:"avatar"}}),t._v(" "),n("div",{staticClass:"w-52"},[n("p",{staticClass:"text-left"},[t._v(t._s(t.item.title))]),t._v(" "),n("p",{staticClass:"text-gray-400 text-sm"},[t._v(t._s(t.item.info))])]),t._v(" "),n("button",{on:{click:function(e){t.isActive=!t.isActive}}},[n("IconsMore",{attrs:{"is-active":t.isActive}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconsMore:n(273).default})},275:function(t,e,n){"use strict";n.r(e);var l={props:{title:String},data:function(){return{listUsers:[{title:"lau",info:"hola"},{title:"fran",info:"chau"},{title:"tizi",info:"si"},{title:"otros",info:"no"}]}},methods:{iterateFunction:function(t){return t%2!=0}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-row justify-between mb-5"},[n("h3",{staticClass:"font-bold text-lg"},[t._v(t._s(t.title))]),t._v(" "),n("button",[t._v("New")])]),t._v(" "),t._l(t.listUsers,(function(e,l){return n("BodyItemList",{key:e.info,attrs:{item:e,iterate:t.iterateFunction(l)}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BodyItemList:n(274).default})}}]);