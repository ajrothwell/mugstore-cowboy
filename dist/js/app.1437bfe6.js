(function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"776d01ba"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"9428b4c5"}[e]+".css",a=i.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),r(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"15fd":function(e,t,r){"use strict";r("a1bb")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s=(r("92c6"),r("cee4")),u={id:"mugs",type:"http-get",dependent:"none",resettable:!1,url:"https://api.airtable.com/v0/appE6vMAbk0XuPPIP/mugs?api_key=keytSbdOgQWdMMqwt",options:{params:{}}},i={id:"coasters",type:"http-get",dependent:"none",resettable:!1,url:"https://api.airtable.com/v0/appeAGPBIv4HcRc0t/coasters?api_key=keyWNcZ2h2wSbK2pR",options:{params:{}}},c={name:"App",data(){return{sources:{mugs:u,coasters:i}}},created(){console.log("App.vue created is running");for(let e of Object.keys(this.sources)){let t=this.sources[e];console.log("in App.vue created loop, sourceName:",e,"source:",t);let r={},n=this.$store;s["a"].get(t.url,{params:r}).then((function(e,r){r?console.log("error"):(e.data.key=t.id,n.commit("setSourceData",e.data))}))}}},l=c,p=r("2877"),d=Object(p["a"])(l,o,a,!1,null,null,null),f=d.exports,m=r("8c4f"),h=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("section",[t("div",{staticClass:"container"},[t("router-link",{attrs:{to:"/mugs"}},[t("p",{staticClass:"subtitle"},[e._v(" Mugs ")])]),t("div",{staticClass:"columns"},e._l(e.mugsPreview,(function(r){return t("div",{key:r.id,staticClass:"column is-3"},[e._v(" "+e._s(r.fields.name)+" "),t("photo",{attrs:{item:r.fields}})],1)})),0)],1)]),t("section",[t("div",{staticClass:"container"},[t("router-link",{attrs:{to:"/coasters"}},[t("p",{staticClass:"subtitle"},[e._v(" Coasters ")])]),t("div",{staticClass:"columns"},e._l(e.coastersPreview,(function(r){return t("div",{key:r.id,staticClass:"column is-3"},[e._v(" "+e._s(r.fields.name)+" "),t("photo",{attrs:{item:r.fields}})],1)})),0)],1)])])},b=[function(){var e=this,t=e._self._c;return t("section",{staticClass:"section"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v(" Mugstore Cowboy ")]),t("p",{staticClass:"subtitle"},[e._v(" Welcome to Mugstore Cowboy! ")])])])}],v=r("7856"),g={name:"Home",components:{Photo:v["a"]},computed:{mugsPreview(){return this.$store.state.sources.mugs.data.slice(0,3)},coastersPreview(){return this.$store.state.sources.coasters.data.slice(0,3)}}},y=g,_=(r("15fd"),Object(p["a"])(y,h,b,!1,null,null,null)),w=_.exports;n["a"].use(m["a"]);const C=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/mugs",name:"Mugs",component:()=>r.e("about").then(r.bind(null,"6973"))},{path:"/coasters",name:"Coasters",component:()=>r.e("about").then(r.bind(null,"f722"))},{path:"/mug/:mugId",name:"Mug",component:()=>r.e("about").then(r.bind(null,"6a78"))},{path:"/coaster/:coasterId",name:"Coaster",component:()=>r.e("about").then(r.bind(null,"8e1f"))}],k=new m["a"]({routes:C});var P=k,O=r("2f62");n["a"].use(O["a"]);var j=new O["a"].Store({state:{sources:{mugs:{data:[]},coasters:{data:[]}}},mutations:{setSourceData(e,t){console.log("store setSourceData is running, payload:",t);const r=t.key,n=t.records;e.sources[r].data=n}},actions:{},modules:{}}),S=r("ad3d"),A=r("be33"),M=r("e20b"),x=r("01e5");n["a"].config.productionTip=!1,n["a"].component("font-awesome-icon",S["a"]),A["c"].add(M["faArrowRight"],x["faArrowLeft"]),new n["a"]({router:P,store:j,render:e=>e(f)}).$mount("#app")},7856:function(e,t,r){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",[e.item.pictures?t("img",{attrs:{src:e.item.pictures[0].thumbnails.full.url}}):e._e()])},o=[],a={name:"Photo",props:{item:{type:Object,default(){return{}}}}},s=a,u=r("2877"),i=Object(u["a"])(s,n,o,!1,null,null,null);t["a"]=i.exports},a1bb:function(e,t,r){}});
//# sourceMappingURL=app.1437bfe6.js.map