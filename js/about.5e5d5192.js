(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2bc0":function(t,s,e){"use strict";e("e7a4")},6973:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},t._l(t.mugsPreview,(function(e){return s("div",{key:e.id,staticClass:"column is-4-desktop is-6-tablet"},[s("router-link",{attrs:{to:"/mug/"+e.fields.id}},[s("div",{staticClass:"item-title has-text-centered"},[t._v(" "+t._s(e.fields.name)+" ")]),s("photo",{attrs:{item:e.fields}})],1)],1)})),0)])])},o=[],a=e("7856"),r={name:"Home",components:{Photo:a["a"]},computed:{mugsPreview(){return this.$store.state.sources.mugs.data}}},n=r,c=e("2877"),u=Object(c["a"])(n,i,o,!1,null,null,null);s["default"]=u.exports},"6a78":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container has-text-centered"},[s("h2",{staticClass:"item-name"},[t._v(" "+t._s(t.currentMug.fields.name)+" Mug ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[s("photo-carousel",{attrs:{item:t.currentMug}})],1)])])])},o=[],a=e("b7ba"),r={name:"Home",components:{PhotoCarousel:a["a"]},computed:{mugsData(){return this.$store.state.sources.mugs.data},currentMug(){let t=this.mugsData.filter(t=>t.fields.id==this.$route.params.mugId)[0];return t}}},n=r,c=e("2877"),u=Object(c["a"])(n,i,o,!1,null,null,null);s["default"]=u.exports},"8e1f":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container has-text-centered"},[s("h2",{staticClass:"item-name"},[t._v(" "+t._s(t.currentCoaster.fields.name)+" Coaster ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[s("photo-carousel",{attrs:{item:t.currentCoaster}})],1)])])])},o=[],a=e("b7ba"),r={name:"Home",components:{PhotoCarousel:a["a"]},computed:{coastersData(){return this.$store.state.sources.coasters.data},currentCoaster(){let t=this.coastersData.filter(t=>t.fields.id==this.$route.params.coasterId)[0];return t}}},n=r,c=e("2877"),u=Object(c["a"])(n,i,o,!1,null,null,null);s["default"]=u.exports},b7ba:function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-content"},[s("div",{staticClass:"columns is-vcentered is-mobile"},[s("div",{staticClass:"column is-2 has-text-centered"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.photoNumber+1>1,expression:"photoNumber+1>1"}],staticClass:"button square-button",on:{click:function(s){return t.changePhotoNumber("down")}}},[s("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)]),t.picsLength?s("div",{staticClass:"column is-8 has-text-centered"},[s("div",{staticClass:"image-div"},[s("img",{staticClass:"rounded-square",attrs:{src:t.imgsrc}})])]):t._e(),t.picsLength?t._e():s("div",{staticClass:"column is-8 has-text-centered"},[t._v(" No photos ")]),s("div",{staticClass:"column is-2 has-text-centered"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.picsLength&&t.photoNumber+1<t.picsLength,expression:"picsLength && photoNumber+1<picsLength"}],staticClass:"button square-button",on:{click:function(s){return t.changePhotoNumber("up")}}},[s("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)])])])},o=[],a={name:"PhotoCarousel",components:{},props:{item:{type:Object,default(){return{}}}},data(){return{photoNumber:0,photoDate:null,imgsrc:null}},computed:{pictures(){return this.item.fields.pictures},picsLength(){return this.pictures.length}},watch:{photoNumber(t){console.log("watch photoNumber, nextPhotoNumber:",t),this.photoDate=this.pictures[t].date,this.imgsrc="./images/spinner3.png";const s=new Image;s.src=this.pictures[t].url,s.onload=()=>{this.imgsrc=s.src}}},mounted(){this.photoDate=this.pictures[this.photoNumber].date,this.imgsrc="./images/spinner3.png";const t=new Image;t.src=this.pictures[this.photoNumber].url,t.onload=()=>{this.imgsrc=t.src}},methods:{changePhotoNumber(t){let s;console.log("changePhotoNumber, direction:",t),"up"==t?s=this.photoNumber+1:"down"==t&&(s=this.photoNumber-1),this.photoNumber=s}}},r=a,n=(e("2bc0"),e("2877")),c=Object(n["a"])(r,i,o,!1,null,null,null);s["a"]=c.exports},e7a4:function(t,s,e){},f722:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},t._l(t.coastersPreview,(function(e){return s("div",{key:e.id,staticClass:"column is-4"},[s("router-link",{attrs:{to:"/coaster/"+e.fields.id}},[s("div",{staticClass:"item-title has-text-centered"},[t._v(" "+t._s(e.fields.name)+" ")]),s("photo",{attrs:{item:e.fields}})],1)],1)})),0)])])},o=[],a=e("7856"),r={name:"Home",components:{Photo:a["a"]},computed:{coastersPreview(){return this.$store.state.sources.coasters.data}}},n=r,c=e("2877"),u=Object(c["a"])(n,i,o,!1,null,null,null);s["default"]=u.exports},f820:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container has-text-centered"},[s("h1",[t._v("This is an about page")])])])}],a=e("2877"),r={},n=Object(a["a"])(r,i,o,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=about.5e5d5192.js.map