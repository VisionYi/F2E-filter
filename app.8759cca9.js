(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={0:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,1]),i()})({0:function(t,e,i){t.exports=i("Vtdi")},"EG/1":function(t,e,i){},FqPw:function(t,e,i){"use strict";var n=i("HBsz"),a=i.n(n);a.a},HBsz:function(t,e,i){},IWBu:function(t,e,i){"use strict";var n=i("VAa8"),a=i.n(n);a.a},IbvK:function(t,e,i){"use strict";var n=i("h3a7"),a=i.n(n);a.a},VAa8:function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("RW0V"),i("rGqo"),i("yt8O"),i("VRzm"),i("v0CA"),i("kxLX"),i("wcMv");var n=i("Kw5r"),a=i("zlta"),s=i.n(a),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("the-navbar"),i("main",[i("router-view"),i("c-scroll-top",{attrs:{startOffsetTop:500,stopBodyBottom:80}})],1)],1)},o=[],c=i("yT7P"),l=i("L2JU"),u={name:"App",mounted:function(){this.initialData()},methods:Object(c["a"])({},Object(l["b"])(["initialData"]))},d=u,f=(i("XAuw"),i("KHd+")),p=Object(f["a"])(d,r,o,!1,null,null,null),h=p.exports,m=i("jE9Z"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main container-fluid mb-m"},[t._v("\n  "+t._s(t.loading?"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!":"")+"\n  "),i("div",{staticClass:"grid no-gap mobile-1"},[i("div",{staticClass:"col-auto"},[i("aside",{staticClass:"filter"},[t._l(t.selectors,function(e){return i("div",{key:e.id,staticClass:"filter__item"},[i("h3",{staticClass:"filter__item__title",class:{"is-expanded":t.filterType==="s-"+e.id},on:{click:function(i){t.selectFilterType("s-"+e.id)}}},[t._v("\n            "+t._s(e.typeName)+"\n          ")]),i("div",{directives:[{name:"watch-data",rawName:"v-watch-data",value:{fn:t.slideToggle,data:t.filterType==="s-"+e.id},expression:"{fn: slideToggle, data: filterType === `s-${selector.id}`}"}],staticClass:"expansion expansion--mobile"},[i("div",{staticClass:"filter__item__content"},[i("v-select",{attrs:{items:e.items,value:e.value,solo:"",flat:"","hide-details":""},on:{input:function(i){t.updateSelector({id:e.id,value:i})}}})],1)])])}),i("div",{staticClass:"filter__item"},[i("h3",{staticClass:"filter__item__title",class:{"is-expanded":"checkbox"===t.filterType},on:{click:function(e){t.selectFilterType("checkbox")}}},[t._v("\n            進階篩選\n          ")]),i("div",{directives:[{name:"watch-data",rawName:"v-watch-data",value:{fn:t.slideToggle,data:"checkbox"===t.filterType},expression:"{fn: slideToggle, data: filterType === 'checkbox'}"}],staticClass:"expansion expansion--mobile"},[i("div",{staticClass:"filter__item__content"},t._l(t.checkboxItems,function(e,n){return i("v-checkbox",{key:n,attrs:{label:n,value:n,color:"primary","hide-details":""},model:{value:t.$_checkboxValue,callback:function(e){t.$_checkboxValue=e},expression:"$_checkboxValue"}})}))])])],2)]),i("div",{staticClass:"col flexible"},[i("div",{staticClass:"main__content"},[i("p",{staticClass:"text-l mb-s"},[t._v("\n          共 "),i("strong",{staticClass:"primary--text"},[t._v(t._s(t.filterListTotal))]),t._v(" 筆搜尋結果...\n        ")]),i("div",{staticClass:"main__tags mb-m"},[t.search?i("v-chip",{attrs:{color:"primary",close:"",outline:""},on:{input:function(e){t.closeTagSearch()}}},[t._v("\n            "+t._s(t.search)+"\n          ")]):t._e(),t._l(t.tagSelectors,function(e){return i("v-chip",{key:"s-"+e.id,attrs:{color:"primary",close:"",outline:""},on:{input:function(i){t.closeTagSelector(e.id)}}},[t._v("\n            "+t._s(e.value)+"\n          ")])}),t._l(t.checkboxValue,function(e,n){return i("v-chip",{key:"c-"+n,attrs:{color:"primary",close:"",outline:""},on:{input:function(i){t.closeTagCheckbox(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})],2),i("ul",{staticClass:"main__cards mb-m"},t._l(t.pageFilterList,function(e){return i("li",{key:e.id,staticClass:"card card--pointer"},[i("router-link",{staticClass:"card__link-item",attrs:{to:t.routerLinkItem(e.id)}},[i("div",{staticClass:"grid no-gap tablet-1 mobile-1"},[i("div",{staticClass:"col-auto"},[i("figure",{staticClass:"card__figure card__figure--desktop-height"},[i("img",{attrs:{src:e.picture,alt:"picture"}})])]),i("div",{staticClass:"col flexible"},[i("div",{staticClass:"card__content"},[i("h2",{staticClass:"text-l primary--text mb-b"},[t._v(t._s(e.name))]),i("p",{staticClass:"card__text mb-b"},[t._v(t._s(e.description))]),i("div",{staticClass:"mb-s d-f-center-height"},[i("span",{staticClass:"text-s text--light mr-m"},[i("v-icon",{staticClass:"mr-s"},[t._v("fas fa-map-marker-alt")]),t._v(t._s(e.zone)+"\n                      ")],1),""!==e.ticketInfo?i("span",{staticClass:"text-s text--light mr-m"},[i("v-icon",{staticClass:"mr-s"},[t._v("fas fa-ticket-alt")]),t._v(t._s(e.ticketInfo)+"\n                      ")],1):t._e(),i("v-chip",{attrs:{small:""}},[t._v(t._s(e.category))])],1),i("span",{staticClass:"text-s text--light card__text card__text--one"},[i("v-icon",{staticClass:"mr-s"},[t._v("far fa-clock")]),t._v(t._s(e.openTime)+"\n                    ")],1)])])])])],1)})),0!==t.filterListTotal?i("div",{staticClass:"grid align-space-between mobile-1"},[i("div",{staticClass:"col-auto hidden-mobile"},[i("p",{staticClass:"d-f-center text--light"},[t._v("\n              共 "+t._s(t.pageTotal)+" 頁 | 目前第 "+t._s(t.pageCurrent)+" 頁 ( 每頁 "+t._s(t.numberPerPage)+" 筆 )\n            ")])]),i("div",{staticClass:"col-auto"},[i("v-pagination",{attrs:{length:t.pageTotal,"total-visible":7},on:{input:function(e){t.handleChangePage()}},model:{value:t.pageCurrent,callback:function(e){t.pageCurrent=e},expression:"pageCurrent"}})],1)]):t._e()])])])])},b=[];i("f3/d"),i("Z2Ku"),i("L9s1"),i("OG14");function g(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var n=this,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];clearTimeout(e),e=setTimeout(function(){return t.apply(n,s)},i)}}function _(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(_),window.scrollTo(0,t-t/6))}function x(t){return void 0===t||null===t||0===Object.keys(t).length}function y(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"block",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=parseInt(window.getComputedStyle(t).getPropertyValue("border-top-width"),10),s=parseInt(window.getComputedStyle(t).getPropertyValue("border-bottom-width"),10);return t.style.display=i,t.style.overflow="hidden",t.classList.contains(e)?t.style.height="".concat(t.scrollHeight+a+s,"px"):t.style.height="".concat(n,"px"),setTimeout(function(){t.classList.contains(e)?t.style.height="".concat(n,"px"):t.style.height="".concat(t.scrollHeight+a+s,"px"),t.classList.toggle(e)},10),new Promise(function(i){t.addEventListener("transitionend",function(a){"height"===a.propertyName&&(t.style.display="",t.style.overflow="",t.style.height=""),t.classList.contains(e)?i(t.offsetHeight):i(n)})})}var w={name:"Home",directives:{slideToggle:{update:function(t,e){e.value!==e.oldValue&&y(t,"is-active")}},watchData:{update:function(t,e){e.value.data!==e.oldValue.data&&e.value.fn(t,e.value.data,e.oldValue.data)}}},data:function(){return{pageCurrent:1,numberPerPage:10,filterType:null}},computed:Object(c["a"])({},Object(l["c"])(["list","search","selectors","tagSelectors","checkboxItems","checkboxValue","loading"]),{$_checkboxValue:{get:function(){return this.checkboxValue},set:function(t){this.setCheckboxValue(t)}},filterListTotal:function(){return this.filterList.length},pageTotal:function(){var t=this.filterListTotal/this.numberPerPage;return t%1?t-t%1+1:t},routerLinkItem:function(){return function(t){return{name:"item",params:{id:t}}}},filterList:function(){var t=this;return this.list.filter(function(e){return!(t.search&&!e.name.includes(t.search))&&(!(!x(t.tagSelectors)&&!t.tagSelectors.every(function(t){return e[t.type]===t.value}))&&!(!x(t.checkboxValue)&&!t.checkboxValue.every(function(i){return e[t.checkboxItems[i]]===i})))})},pageFilterList:function(){var t=(this.pageCurrent-1)*this.numberPerPage,e=t+this.numberPerPage;return this.filterList.slice(t,e)}}),watch:{search:function(){this.pageCurrent=1},tagSelectors:function(){this.pageCurrent=1},checkboxValue:function(){this.pageCurrent=1}},methods:Object(c["a"])({},Object(l["d"])(["setCheckboxValue","updateSelector"]),Object(l["b"])(["closeTagSearch","closeTagSelector","closeTagCheckbox"]),{selectFilterType:function(t){this.filterType=this.filterType===t?null:t},handleChangePage:function(){_()},slideToggle:function(t){y(t,"is-active")}})},C=w,k=(i("IbvK"),Object(f["a"])(C,v,b,!1,null,null,null)),T=k.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-page"},[i("transition",{attrs:{appear:"",name:"fade"}},[i("div",[i("div",{staticClass:"item-page__header mb-l"},[i("div",{staticClass:"grid align-middle"},[i("div",{staticClass:"col-auto"},[i("v-btn",{attrs:{color:"primary",depressed:""},on:{click:function(e){t.backHistory()}}},[t._v("回上一頁")])],1),i("div",{staticClass:"col flexible"},[i("div",{staticClass:"item-page__breadcrumbs-wrapper"},[i("v-breadcrumbs",{attrs:{divider:"/"}},[i("v-breadcrumbs-item",{attrs:{href:"#/"}},[t._v("首頁")]),i("v-breadcrumbs-item",{attrs:{disabled:""}},[t._v(t._s(t.item.name))])],1)],1)])])]),i("div",{staticClass:"card elevation-1"},[i("figure",{staticClass:"card__figure"},[i("img",{attrs:{src:t.item.picture,alt:"picture"}})]),i("div",{staticClass:"card__content"},[i("h1",{staticClass:"text-xl primary--text mb-b"},[t._v(t._s(t.item.name))]),i("div",{staticClass:"text-s text--light mb-b"},[i("v-icon",{staticClass:"mr-s"},[t._v("far fa-clock")]),t._v(t._s(t.item.openTime)+"\n          ")],1),i("div",{staticClass:"text-s text--light mb-l"},[i("v-icon",{staticClass:"mr-s"},[t._v("fas fa-map-marker-alt")]),t._v(t._s(t.item.address)+"\n          ")],1),i("p",[t._v(t._s(t.item.description))])])])])])],1)},O=[],I=(i("pIFo"),i("ls82"),i("MECJ")),j=i("vDqi"),P=i.n(j),L="https://data.kcg.gov.tw/api/action/",V=6e3,H={1:"文化類",2:"生態類",3:"古蹟類",4:"廟宇類",5:"藝術類",6:"小吃/特產類",7:"國家公園類",8:"國家風景區類",9:"休閒農業類",10:"溫泉類",11:"自然風景類",12:"遊憩類",13:"體育健身類",14:"觀光工廠類",15:"都會公園類",16:"森林遊樂區類",17:"林場類",18:"其他"};P.a.defaults.baseURL=L,P.a.defaults.timeout=V;var E={onSuccess:{onlyReturnData:!0},onError:{redirectPath:null}};function N(t){var e=t.defaults.onSuccess.onlyReturnData;return function(t){return e?t.data:t}}function $(t){t.defaults.onError.redirectPath;return function(t){if(t.response){var e=t.response,i=e.status,n=e.data,a=e.headers;return console.error("Status:",i),console.error("Data:",n),console.error("Headers:",a),Promise.reject(t.response)}return console.error("Error Message:",t.message),Promise.reject(t)}}P.a.defaults=Object(c["a"])({},P.a.defaults,E),P.a.interceptors.response.use(N(P.a),$(P.a)),P.a.createNew=function(t){var e=P.a.create(Object(c["a"])({},E,t));return e.interceptors.response.use(N(e),$(e)),e};var B=P.a,D={getAllData:function(){return B.get("/datastore_search",{params:{resource_id:"92290ee5-6e61-456f-80c0-249eae2fcc97",sort:"Zone, Class1, Name asc",limit:"500"}})},getItem:function(t){return B.get("/datastore_search",{params:{resource_id:"92290ee5-6e61-456f-80c0-249eae2fcc97",q:'{"Id": "'.concat(t,'"}')}})}},F={name:"Item",data:function(){return{item:{}}},computed:Object(c["a"])({},Object(l["c"])(["getListItemById"])),mounted:function(){var t=this.getListItemById(this.$route.params.id);t?this.item=t:this.initialItem(this.$route.params.id),_()},methods:{initialItem:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D.getItem(e);case 2:i=t.sent.result.records[0],this.item={name:i.Name,picture:i.Picture1.replace("http","https"),openTime:i.Opentime,address:i.Add,description:i.Description};case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),backHistory:function(){window.history.go(-1)}}},A=F,z=(i("IWBu"),Object(f["a"])(A,S,O,!1,null,null,null)),R=z.exports;n["default"].use(m["a"]);var M=new m["a"]({routes:[{path:"/",name:"home",component:T},{path:"/item/:id",name:"item",component:R}]}),q=(i("INYr"),i("Ez3a"));i("dRSK");n["default"].use(l["a"]);var K=new l["a"].Store({state:{list:[],search:"",selectors:[],checkbox:{items:{"免費參觀":"ticketInfo","全天候開放":"openTime"},value:[]},loading:!1},getters:{list:function(t){return t.list},loading:function(t){return t.loading},search:function(t){return t.search},selectors:function(t){return t.selectors},tagSelectors:function(t){return t.selectors.filter(function(t){return"全部"!==t.value})},checkboxItems:function(t){return t.checkbox.items},checkboxValue:function(t){return t.checkbox.value},getListItemById:function(t){return function(e){return t.list.find(function(t){return t.id===e})}},getSelectorItems:function(t){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.list.reduce(function(t,i){return i[e]in t?t[i[e]]+=1:t[i[e]]=0,t},{}),a=Object.keys(n);return""!==i&&a.unshift(i),a}}},actions:{initialData:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var i,n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,n=e.getters,i("setLoading",!0),t.next=4,D.getAllData();case 4:a=t.sent.result.records,s=a.map(function(t){return{id:t.Id,name:t.Name,openTime:t.Opentime,description:t.Description,picture:t.Picture1.replace("http","https"),zone:t.Zone,category:H[t.Class1],ticketInfo:t.Ticketinfo,address:t.Add,website:t.Website}}),i("setList",s),i("setSelectors",[{id:1,type:"zone",typeName:"地區",value:"全部",items:n.getSelectorItems("zone","全部")},{id:2,type:"category",typeName:"類別",value:"全部",items:n.getSelectorItems("category","全部")}]),i("setLoading",!1);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),closeTagSearch:function(t){var e=t.commit;e("setSearch","")},closeTagSelector:function(t,e){var i=t.commit;i("updateSelector",{id:e,value:"全部"})},closeTagCheckbox:function(t,e){var i=t.commit;i("deleteCheckboxValueItem",e)}},mutations:{setList:function(t,e){t.list=e},setSearch:function(t,e){t.search=e},setSelectors:function(t,e){t.selectors=e},setCheckboxItems:function(t,e){t.checkbox.items=e},setCheckboxValue:function(t,e){t.checkbox.value=e},deleteCheckboxValueItem:function(t,e){t.checkbox.value.splice(t.checkbox.value.indexOf(e),1)},setLoading:function(t,e){t.loading=e},updateSelector:function(t,e){var i=e.id,n=Object(q["a"])(e,["id"]),a=t.selectors.findIndex(function(t){return t.id===i});t.selectors.splice(a,1,Object(c["a"])({},t.selectors[a],n))}}}),G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("div",{staticClass:"container-fluid navbar__container"},[i("ul",{staticClass:"grid no-gap w-100"},[t._m(0),"home"===t.$route.name?i("li",{staticClass:"col flexible hidden-mobile"},[i("v-text-field",{attrs:{label:"search",placeholder:"search...",color:"white","prepend-inner-icon":"fas fa-search","single-line":"","hide-details":"",clearable:""},on:{"click:clear":function(e){t.setSearch("")}},model:{value:t.$_search,callback:function(e){t.$_search=e},expression:"$_search"}})],1):t._e()])])])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"col-auto flexible-mobile"},[i("h3",{staticClass:"navbar__title"},[i("a",{attrs:{href:"#/"}},[t._v("高雄 Fun")])])])}],W={name:"Navbar",computed:Object(c["a"])({},Object(l["c"])(["search"]),{$_search:{get:function(){return this.search},set:g(function(t){this.setSearch(t)},400)}}),methods:Object(c["a"])({},Object(l["d"])(["setSearch"]))},X=W,Z=(i("FqPw"),Object(f["a"])(X,G,J,!1,null,null,null)),Y=Z.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"scroll",rawName:"v-scroll.init",value:t.handleScroll,expression:"handleScroll",modifiers:{init:!0}}],staticClass:"scroll-top",style:t.mainStyle},[i("transition",{attrs:{name:"zoom"}},[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{color:t.color,fab:""},on:{click:function(e){t.doScrollToTop()}}},[i("v-icon",[t._v("fas fa-angle-up")])],1)],1)],1)},U=[],tt=(i("xfY5"),{name:"ScrollTop",directives:{scroll:{inserted:function(t,e){e.modifiers.init&&e.value(t);var i=function i(){var n=e.value(t);n&&window.removeEventListener("scroll",i)};window.addEventListener("scroll",i)}}},props:{color:{type:String,default:"primary"},bottom:{type:Number,default:20},right:{type:Number,default:20},top:Number,left:Number,startOffsetTop:{type:Number,default:0},stopOffsetTop:Number,stopBodyBottom:Number},data:function(){return{btnHeight:0,windowHeight:0,bodyHeight:0,windowScrollTop:0}},computed:{isShow:function(){return this.windowScrollTop>=this.startOffsetTop},btnFixedTop:function(){return this.top||0===this.top?this.top:this.windowHeight-this.btnHeight-this.bottom},stopPoint:function(){return this.stopOffsetTop?this.stopOffsetTop:this.stopBodyBottom?this.bodyHeight-this.btnHeight-this.stopBodyBottom:null},mainStyle:function(){return this.stopPoint&&this.btnFixedTop+this.windowScrollTop>=this.stopPoint?{position:"absolute",top:"".concat(this.stopPoint,"px"),right:"".concat(this.right,"px"),left:!(!this.left&&0!==this.left)&&"".concat(this.left,"px")}:{position:"fixed",top:"".concat(this.btnFixedTop,"px"),right:"".concat(this.right,"px"),left:!(!this.left&&0!==this.left)&&"".concat(this.left,"px")}}},mounted:function(){var t=this;this.windowHeight=window.innerHeight,window.addEventListener("resize",g(function(){t.windowHeight=window.innerHeight},300))},methods:{doScrollToTop:function(){_()},handleScroll:function(t){this.windowScrollTop=window.pageYOffset||document.documentElement.scrollTop,this.btnHeight=t.offsetHeight,this.bodyHeight=document.querySelector("body").offsetHeight}}}),et=tt,it=(i("yIf6"),Object(f["a"])(et,Q,U,!1,null,null,null)),nt=it.exports,at={"the-navbar":Y,"c-scroll-top":nt};n["default"].use(s.a,{iconfont:"fa",theme:{primary:"#00BCD4",secondary:"#4DD0E1"}}),Object.keys(at).forEach(function(t){n["default"].component(t,at[t])}),new n["default"]({router:M,store:K,render:function(t){return t(h)}}).$mount("#app")},XAuw:function(t,e,i){"use strict";var n=i("EG/1"),a=i.n(n);a.a},btlQ:function(t,e,i){},h3a7:function(t,e,i){},kxLX:function(t,e,i){},wcMv:function(t,e,i){},yIf6:function(t,e,i){"use strict";var n=i("btlQ"),a=i.n(n);a.a}});
//# sourceMappingURL=app.8759cca9.js.map