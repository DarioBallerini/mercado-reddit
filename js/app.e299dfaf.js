(function(t){function e(e){for(var c,o,i=e[0],s=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},r={app:0},a=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0928":function(t,e,n){},"11c7":function(t,e,n){t.exports=n.p+"img/cart-loader.ddcfd301.svg"},"19d6":function(t,e,n){t.exports=n.p+"img/cart-header.5196e469.svg"},3620:function(t,e,n){"use strict";n("0928")},"43e8":function(t,e,n){},4690:function(t,e,n){"use strict";n("43e8")},"9f89":function(t,e,n){"use strict";n("eb5d")},a541:function(t,e,n){},b255:function(t,e,n){},b406:function(t,e,n){"use strict";n("a541")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={key:0,class:"loader-container"};function a(t,e,n,a,o,i){var s=Object(c["p"])("Header"),u=Object(c["p"])("SpinningCart"),l=Object(c["p"])("ProductGrid"),d=Object(c["p"])("Footer");return Object(c["l"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(s,{onSearchProducts:e[0]||(e[0]=function(e){return t.searchProducts(e)}),onGoHome:e[1]||(e[1]=function(e){return t.goHome()})}),t.loading?(Object(c["l"])(),Object(c["e"])("div",r,[Object(c["h"])(u)])):Object(c["d"])("",!0),t.loading?Object(c["d"])("",!0):(Object(c["l"])(),Object(c["c"])(l,{key:1,class:"paddings",products:t.products},null,8,["products"])),Object(c["h"])(d)],64)}var o=n("2909");n("d3b7"),n("99af"),n("25f0");Object(c["n"])("data-v-6558c25d");var i={class:"container"};function s(t,e,n,r,a,o){var s=Object(c["p"])("Product");return Object(c["l"])(),Object(c["e"])("div",i,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["o"])(t.products,(function(e){return Object(c["l"])(),Object(c["e"])("div",{key:e.id},[Object(c["h"])(s,{title:e.data.title,headerClass:t.getClassName(e.data.link_flair_css_class),link:e.data.permalink,time:e.data.created_utc.toString(),thumbnail:t.getThumbnailLink(e.data.media_metadata)},null,8,["title","headerClass","link","time","thumbnail"])])})),128))])}Object(c["m"])();n("07ac");var u=n("11c7"),l=n.n(u),d={class:"body"},f={class:"images"},h=["src"],b={key:1,class:"img-placeholder",src:l.a,alt:""},p={class:"product-title"},m={class:"time-span"},O=Object(c["f"])("span",{class:"material-icons"},"schedule",-1);function j(t,e,n,r,a,o){return Object(c["l"])(),Object(c["e"])("div",{class:"card",onClick:e[0]||(e[0]=function(e){return t.goTo()})},[Object(c["f"])("div",d,[Object(c["f"])("div",f,["self"!==t.thumbnail?(Object(c["l"])(),Object(c["e"])("img",{key:0,src:t.thumbnail,alt:""},null,8,h)):Object(c["d"])("",!0),"self"==t.thumbnail?(Object(c["l"])(),Object(c["e"])("img",b)):Object(c["d"])("",!0)]),Object(c["f"])("div",p,[Object(c["f"])("span",null,Object(c["q"])(t.title),1)])]),Object(c["f"])("div",{class:Object(c["k"])(["header",t.headerClass])},[Object(c["f"])("span",null,Object(c["q"])(t.headerClass),1),Object(c["f"])("span",m,[O,Object(c["g"])(Object(c["q"])(t.relativeTime()),1)])],2)])}n("9911");var g=Object(c["i"])({name:"Product",props:{title:String,headerClass:String,link:String,time:String,thumbnail:String},methods:{goTo:function(){window.open("https://www.reddit.com".concat(this.link))},relativeTime:function(){var t=6e4,e=60*t,n=24*e,c=30*n,r=365*n,a=new Date-new Date(1e3*this.time);if(a<t)return Math.round(a/1e3)+"s";if(a<e)return Math.round(a/t)+"m";if(a<n)return Math.round(a/e)+"h";if(a<c)return Math.round(a/n)+"d";if(a<r){var o=Math.round(a/c);return o+(o>1?" meses":" mes")}var i=Math.round(a/r);return i+(i>1?" años":" año ")}}});n("d120");g.render=j;var v=g,y=Object(c["i"])({name:"ProductGrid",props:{products:Array},components:{Product:v},methods:{getClassName:function(t){switch(t){case"COMPRO":return"COMPRO";case"class_compra":return"COMPRO";case"SERVICIO":return"SERVICIO";case"GRATIS":return"GRATIS";case"CANJEO":return"CANJEO";default:return"VENDO"}},getThumbnailLink:function(t){return t&&void 0!==Object.values(t)[0].p?Object.values(t)[0].p[2].u.replaceAll("amp;",""):"self"}}});n("b406");y.render=s,y.__scopeId="data-v-6558c25d";var w=y,k=n("19d6"),P=n.n(k),C={class:"item"},S={class:"input-container"},_={class:"item dark-theme-button"};function T(t,e,n,r,a,o){return Object(c["l"])(),Object(c["e"])("header",null,[Object(c["f"])("div",C,[Object(c["f"])("img",{src:l.a,alt:"",class:"img-mobile",onClick:e[0]||(e[0]=function(e){return t.goHome()})}),Object(c["f"])("img",{src:P.a,alt:"",class:"img-desktop",onClick:e[1]||(e[1]=function(e){return t.goHome()})}),Object(c["f"])("form",{action:"",onSubmit:e[4]||(e[4]=Object(c["u"])((function(){}),["prevent"])),onKeyup:e[5]||(e[5]=Object(c["t"])((function(e){return t.searchProducts()}),["enter"]))},[Object(c["f"])("div",S,[Object(c["s"])(Object(c["f"])("input",{type:"text",class:"search-input",placeholder:"Busca productos, servicios, etc","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.searchInput=e})},null,512),[[c["r"],t.searchInput]]),Object(c["f"])("i",{class:"search-icon material-icons",onClick:e[3]||(e[3]=function(e){return t.searchProducts()})},"search")])],32)]),Object(c["f"])("div",_,[Object(c["f"])("i",{class:"dark-theme-icon material-icons",onClick:e[6]||(e[6]=function(e){return t.toggleTheme()})},"dark_mode")])])}var I=n("a584"),M=Object(c["i"])({name:"Header",data:function(){return{searchInput:""}},methods:{searchProducts:function(){this.$emit("searchProducts",this.searchInput),Object(I["b"])("search",{event_category:"interactions",event_label:"product search",value:this.searchInput})},goHome:function(){this.searchInput="",this.$emit("goHome")},toggleTheme:function(){var t,e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?(document.body.classList.toggle("light-theme"),t=document.body.classList.contains("light-theme")?"light":"dark"):(document.body.classList.toggle("dark-theme"),t=document.body.classList.contains("dark-theme")?"dark":"light"),localStorage.setItem("theme",t)}}});n("9f89");M.render=T;var H=M,x={class:"loading-animation"},N=Object(c["f"])("img",{class:"carrito",src:l.a,alt:""},null,-1),L=[N];function A(t,e,n,r,a,o){return Object(c["l"])(),Object(c["e"])("div",x,L)}var G=Object(c["i"])({name:"SpinningCart"});n("ef1c");G.render=A;var R=G,E=Object(c["f"])("div",null,[Object(c["g"])("Icons made by "),Object(c["f"])("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")],-1),q=[E];function Q(t,e,n,r,a,o){return Object(c["l"])(),Object(c["e"])("footer",null,q)}var D=Object(c["i"])({name:"Footer"});n("3620");D.render=Q;var J=D,V=Object(c["i"])({name:"App",components:{ProductGrid:w,Header:H,SpinningCart:R,Footer:J},data:function(){return{products:[],api:"https://www.reddit.com/r/mercadoreddit/new.json",loading:!0,searchQuery:"",lastTime:0}},created:function(){var t=localStorage.getItem("theme");"dark"===t?document.body.classList.toggle("dark-theme"):"light"===t&&document.body.classList.toggle("light-theme"),this.goHome(),this.getNextPage()},methods:{searchProducts:function(t){var e=this;this.searchQuery=t,this.loading||(this.loading=!0,fetch("https://www.reddit.com/r/Mercadoreddit/search.json?q=".concat(t,"&restrict_sr=1&sort=new")).then((function(t){return t.json()})).then((function(t){e.products=t.data.children,e.loading=!1})))},goHome:function(){var t=this;this.loading=!0,this.searchQuery="",fetch(this.api).then((function(t){return t.json()})).then((function(e){t.products=e.data.children,t.loading=!1}))},getNextPage:function(){var t=this;window.onscroll=function(){var e=document.documentElement,n=e.scrollTop+e.offsetHeight+600>=e.scrollHeight||e.scrollTop+e.offsetHeight>=e.scrollHeight,c=t.products.length-1;if(n){var r=(new Date).getTime();if(r-t.lastTime<3e3)return;t.lastTime=r,t.searchQuery?fetch("https://www.reddit.com/r/Mercadoreddit/search.json?q=".concat(t.searchQuery,"&after=").concat(t.products[c].kind,"_").concat(t.products[c].data.id,"&restrict_sr=1&sort=new")).then((function(t){return t.json()})).then((function(e){var n;(n=t.products).push.apply(n,Object(o["a"])(e.data.children))})):fetch("".concat(t.api,"?after=").concat(t.products[c].kind,"_").concat(t.products[c].data.id)).then((function(t){return t.json()})).then((function(e){var n;(n=t.products).push.apply(n,Object(o["a"])(e.data.children))}))}}}}});n("4690");V.render=a;var F=V;Object(c["b"])(F).use(I["a"],{config:{id:"G-6P7WN4YNZ6"}}).mount("#app")},d120:function(t,e,n){"use strict";n("e9b1")},e9b1:function(t,e,n){},eb5d:function(t,e,n){},ef1c:function(t,e,n){"use strict";n("b255")}});