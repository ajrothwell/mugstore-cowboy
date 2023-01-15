(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2771:function(t,s,e){"use strict";e("cc18")},6973:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},t._l(t.mugsPreview,(function(e){return s("div",{key:e.id,staticClass:"column is-4-desktop is-6-tablet"},[s("router-link",{attrs:{to:"/mug/"+e.fields.id}},[s("div",{staticClass:"item-title has-text-centered"},[t._v(" "+t._s(e.fields.name)+" ")]),s("photo",{attrs:{item:e.fields}})],1)],1)})),0)])])},a=[],o=e("7856"),n={name:"Mugs",components:{Photo:o["a"]},computed:{mugsPreview(){return this.$store.state.sources.mugs.data}}},r=n,c=e("2877"),u=Object(c["a"])(r,i,a,!1,null,null,null);s["default"]=u.exports},"6a78":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container columns mt-4 mb-4"},[s("div",{staticClass:"column is-3 pt-1 pb-1"},[s("router-link",{staticClass:"item-page-item-title",attrs:{to:"/Mugs"}},[s("button",{staticClass:"button"},[s("font-awesome-icon",{attrs:{icon:"arrow-left"}}),s("div",{staticClass:"pl-2"},[t._v("Back to Mugs")])],1)])],1),s("div",{staticClass:"column is-6 has-text-centered pt-1 pb-1"},[s("h2",{staticClass:"item-page-item-title"},[t._v(" "+t._s(t.currentMug.fields.name)+" Mug ")])])]),s("div",{staticClass:"container columns"},[s("div",{staticClass:"column is-7"},[s("photo-carousel",{attrs:{item:t.currentMug}})],1),s("div",{staticClass:"column is-5"},[s("div",{staticClass:"container has-text-centered mt-4"},[s("button",{staticClass:"button is-multiline",on:{click:t.buyItem}},[t._v(" Add "+t._s(t.currentMug.fields.name)+" to Square Site Cart ")])])])])])},a=[],o=e("b7ba"),n={name:"Mug",components:{PhotoCarousel:o["a"]},computed:{mugsData(){return this.$store.state.sources.mugs.data},currentMug(){let t=this.mugsData.filter(t=>t.fields.id==this.$route.params.mugId)[0];return t}},methods:{buyItem(){window.location.href=this.currentMug.fields.square}}},r=n,c=e("2877"),u=Object(c["a"])(r,i,a,!1,null,null,null);s["default"]=u.exports},"8e1f":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container columns mt-4 mb-4"},[s("div",{staticClass:"column is-3 pt-1 pb-1"},[s("router-link",{staticClass:"item-page-item-title",attrs:{to:"/Coasters"}},[s("button",{staticClass:"button"},[s("font-awesome-icon",{attrs:{icon:"arrow-left"}}),s("div",{staticClass:"pl-2"},[t._v("Back to Coasters")])],1)])],1),s("div",{staticClass:"column is-6 has-text-centered pt-1 pb-1"},[s("h2",{staticClass:"item-page-item-title"},[t._v(" "+t._s(t.currentCoaster.fields.name)+" Coaster ")])])]),s("div",{staticClass:"container columns"},[s("div",{staticClass:"column is-7"},[s("photo-carousel",{attrs:{item:t.currentCoaster}})],1),s("div",{staticClass:"column is-5"},[s("div",{staticClass:"container has-text-centered mt-4"},[s("button",{staticClass:"button is-multiline",on:{click:t.buyItem}},[t._v(" Add "+t._s(t.currentCoaster.fields.name)+" to Square Site Cart ")])])])])])},a=[],o=e("b7ba"),n={name:"Coaster",components:{PhotoCarousel:o["a"]},computed:{coastersData(){return this.$store.state.sources.coasters.data},currentCoaster(){let t=this.coastersData.filter(t=>t.fields.id==this.$route.params.coasterId)[0];return t}},methods:{buyItem(){window.location.href=this.currentCoaster.fields.square}}},r=n,c=e("2877"),u=Object(c["a"])(r,i,a,!1,null,null,null);s["default"]=u.exports},b7ba:function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-content"},[t.picsLength?s("div",[s("div",{staticClass:"image-div"},[s("img",{staticClass:"rounded-square",attrs:{src:t.imgsrc}})])]):t._e(),t.picsLength?t._e():s("div",[t._v(" No photos ")]),s("div",{staticClass:"columns is-vcentered is-mobile"},[s("div",{staticClass:"column is-2 is-offset-4 has-text-centered"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.photoNumber+1>1,expression:"photoNumber+1>1"}],staticClass:"button square-button",on:{click:function(s){return t.changePhotoNumber("down")}}},[s("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)]),s("div",{staticClass:"column is-2 has-text-centered"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.picsLength&&t.photoNumber+1<t.picsLength,expression:"picsLength && photoNumber+1<picsLength"}],staticClass:"button square-button",on:{click:function(s){return t.changePhotoNumber("up")}}},[s("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)])])])},a=[],o={name:"PhotoCarousel",components:{},props:{item:{type:Object,default(){return{}}}},data(){return{photoNumber:0,photoDate:null,imgsrc:null}},computed:{pictures(){return this.item.fields.pictures},picsLength(){return this.pictures.length}},watch:{photoNumber(t){console.log("watch photoNumber, nextPhotoNumber:",t),this.photoDate=this.pictures[t].date,this.imgsrc="./images/spinner3.png";const s=new Image;s.src=this.pictures[t].url,s.onload=()=>{this.imgsrc=s.src}}},mounted(){this.photoDate=this.pictures[this.photoNumber].date,this.imgsrc="./images/spinner3.png";const t=new Image;t.src=this.pictures[this.photoNumber].url,t.onload=()=>{this.imgsrc=t.src}},methods:{changePhotoNumber(t){let s;console.log("changePhotoNumber, direction:",t),"up"==t?s=this.photoNumber+1:"down"==t&&(s=this.photoNumber-1),this.photoNumber=s}}},n=o,r=(e("2771"),e("2877")),c=Object(r["a"])(n,i,a,!1,null,null,null);s["a"]=c.exports},cc18:function(t,s,e){},f722:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},t._l(t.coastersPreview,(function(e){return s("div",{key:e.id,staticClass:"column is-4"},[s("router-link",{attrs:{to:"/coaster/"+e.fields.id}},[s("div",{staticClass:"item-title has-text-centered"},[t._v(" "+t._s(e.fields.name)+" ")]),s("photo",{attrs:{item:e.fields}})],1)],1)})),0)])])},a=[],o=e("7856"),n={name:"Coasters",components:{Photo:o["a"]},computed:{coastersPreview(){return this.$store.state.sources.coasters.data}}},r=n,c=e("2877"),u=Object(c["a"])(r,i,a,!1,null,null,null);s["default"]=u.exports},f820:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"container has-text-centered"},[s("h1",[t._v("This is an about page")])])])}],o=e("2877"),n={},r=Object(o["a"])(n,i,a,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=about.8d70b8c4.js.map