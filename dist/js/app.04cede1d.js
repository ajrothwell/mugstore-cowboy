(function(t){function e(e){for(var o,n,u=e[0],i=e[1],c=e[2],l=0,p=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,n=1;n<r.length;n++){var u=r[n];0!==s[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},s={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"20ef9905"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"7af7d319"}[t]+".css",s=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===s))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===o||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[t],d.parentNode.removeChild(d),r(a)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,r){o=s[t]=[e,r]}));e.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=s[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,r[1](p)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1722:function(t,e,r){"use strict";r("3ef0")},"3ef0":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v(" Mugstore Cowboy ")]),e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),e("router-link",{attrs:{to:"/Mugs"}},[t._v("Mugs")]),t._v(" | "),e("router-link",{attrs:{to:"/Coasters"}},[t._v("Coasters")])],1)])]),e("router-view")],1)},s=[],a=(r("92c6"),r("cee4")),u={id:"mugs",type:"http-get",dependent:"none",resettable:!1,url:"https://api.airtable.com/v0/appE6vMAbk0XuPPIP/mugs?api_key=keytSbdOgQWdMMqwt",options:{params:{}}},i={id:"coasters",type:"http-get",dependent:"none",resettable:!1,url:"https://api.airtable.com/v0/appeAGPBIv4HcRc0t/coasters?api_key=keyWNcZ2h2wSbK2pR",options:{params:{}}},c={name:"App",data(){return{sources:{mugs:u,coasters:i}}},created(){console.log("App.vue created is running");for(let t of Object.keys(this.sources)){let e=this.sources[t];console.log("in App.vue created loop, sourceName:",t,"source:",e);let r={},o=this.$store;a["a"].get(e.url,{params:r}).then((function(t,r){r?console.log("error"):(t.data.key=e.id,o.commit("setSourceData",t.data))}))}}},l=c,p=(r("1722"),r("2877")),d=Object(p["a"])(l,n,s,!1,null,null,null),f=d.exports,m=r("8c4f"),v=function(){var t=this,e=t._self._c;return e("div",[e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6 has-text-centered"},[e("router-link",{attrs:{to:"/mugs"}},[e("div",{staticClass:"subtitle"},[t._v(" Mugs ")]),e("div",{staticClass:"columns"},t._l(t.mugsPreview,(function(t){return e("div",{key:t.id,staticClass:"column is-8 is-offset-2"},[e("photo",{attrs:{item:t.fields}})],1)})),0)])],1),e("div",{staticClass:"column is-6 has-text-centered"},[e("router-link",{attrs:{to:"/coasters"}},[e("p",{staticClass:"subtitle"},[t._v(" Coasters ")]),e("div",{staticClass:"columns"},t._l(t.coastersPreview,(function(t){return e("div",{key:t.id,staticClass:"column is-8 is-offset-2"},[e("photo",{attrs:{item:t.fields}})],1)})),0)])],1)])])])])},h=[],b=r("7856"),g={name:"Home",components:{Photo:b["a"]},computed:{mugsPreview(){return this.$store.state.sources.mugs.data.slice(8,9)},coastersPreview(){return this.$store.state.sources.coasters.data.slice(2,3)}}},y=g,_=Object(p["a"])(y,v,h,!1,null,null,null),w=_.exports;o["a"].use(m["a"]);const C=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/mugs",name:"Mugs",component:()=>r.e("about").then(r.bind(null,"6973"))},{path:"/coasters",name:"Coasters",component:()=>r.e("about").then(r.bind(null,"f722"))},{path:"/mug/:mugId",name:"Mug",component:()=>r.e("about").then(r.bind(null,"6a78"))},{path:"/coaster/:coasterId",name:"Coaster",component:()=>r.e("about").then(r.bind(null,"8e1f"))}],k=new m["a"]({routes:C});var P=k,O=r("2f62");o["a"].use(O["a"]);var j=new O["a"].Store({state:{sources:{mugs:{data:[]},coasters:{data:[]}}},mutations:{setSourceData(t,e){console.log("store setSourceData is running, payload:",e);const r=e.key,o=e.records;t.sources[r].data=o}},actions:{},modules:{}}),A=r("ad3d"),S=r("be33"),x=r("e20b"),M=r("01e5");o["a"].config.productionTip=!1,o["a"].component("font-awesome-icon",A["a"]),S["c"].add(x["faArrowRight"],M["faArrowLeft"]),new o["a"]({router:P,store:j,render:t=>t(f)}).$mount("#app")},7856:function(t,e,r){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",[t.item.pictures?e("img",{staticClass:"circle",attrs:{src:t.item.pictures[0].thumbnails.full.url}}):t._e()])},n=[],s={name:"Photo",props:{item:{type:Object,default(){return{}}}}},a=s,u=r("2877"),i=Object(u["a"])(a,o,n,!1,null,null,null);e["a"]=i.exports}});
//# sourceMappingURL=app.04cede1d.js.map