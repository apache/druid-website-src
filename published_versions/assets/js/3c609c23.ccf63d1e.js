"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7455],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,m=p["".concat(d,".").concat(u)]||p[u]||g[u]||i;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46500:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"indexing-service",title:"Indexing Service"},d=void 0,l={unversionedId:"design/indexing-service",id:"design/indexing-service",title:"Indexing Service",description:"\x3c!--",source:"@site/docs/30.0.0/design/indexing-service.md",sourceDirName:"design",slug:"/design/indexing-service",permalink:"/docs/30.0.0/design/indexing-service",draft:!1,tags:[],version:"current",frontMatter:{id:"indexing-service",title:"Indexing Service"}},c={},p=[{value:"Overlord",id:"overlord",level:2},{value:"Middle Managers",id:"middle-managers",level:2},{value:"Peons",id:"peons",level:2},{value:"Tasks",id:"tasks",level:2}],g={toc:p},u="wrapper";function m(e){var n=e.components,o=(0,a.Z)(e,s);return(0,i.kt)(u,(0,t.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Druid indexing service is a highly-available, distributed service that runs indexing related tasks."),(0,i.kt)("p",null,"Indexing ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/ingestion/tasks"},"tasks")," are responsible for creating and ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/ingestion/tasks#kill"},"killing")," Druid ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/segments"},"segments"),"."),(0,i.kt)("p",null,"The indexing service is composed of three main components: ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/peons"},"Peons")," that can run a single task, ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/middlemanager"},"MiddleManagers")," that manage Peons, and an ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/overlord"},"Overlord")," that manages task distribution to MiddleManagers.\nOverlords and MiddleManagers may run on the same process or across multiple processes, while MiddleManagers and Peons always run on the same process."),(0,i.kt)("p",null,"Tasks are managed using API endpoints on the Overlord service. Please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/api-reference/tasks-api"},"Tasks API")," for more information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Indexing Service",src:r(36648).Z,title:"Indexing Service",width:"532",height:"621"})),(0,i.kt)("h2",{id:"overlord"},"Overlord"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/overlord"},"Overlord"),"."),(0,i.kt)("h2",{id:"middle-managers"},"Middle Managers"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/middlemanager"},"Middle Manager"),"."),(0,i.kt)("h2",{id:"peons"},"Peons"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/design/peons"},"Peon"),"."),(0,i.kt)("h2",{id:"tasks"},"Tasks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.0/ingestion/tasks"},"Tasks"),"."))}m.isMDXComponent=!0},36648:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/indexing_service-e985270b9e0e342af71c0673407e5673.png"}}]);