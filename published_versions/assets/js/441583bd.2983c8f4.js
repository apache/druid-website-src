"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1424],{14137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(14137)),s=["components"],i={id:"druid-vs-elasticsearch",title:"Apache Druid vs Elasticsearch"},c=void 0,u={unversionedId:"comparisons/druid-vs-elasticsearch",id:"comparisons/druid-vs-elasticsearch",title:"Apache Druid vs Elasticsearch",description:"\x3c!--",source:"@site/docs/31.0.0/comparisons/druid-vs-elasticsearch.md",sourceDirName:"comparisons",slug:"/comparisons/druid-vs-elasticsearch",permalink:"/docs/31.0.0/comparisons/druid-vs-elasticsearch",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-vs-elasticsearch",title:"Apache Druid vs Elasticsearch"}},l={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are not experts on search systems, if anything is incorrect about our portrayal, please let us know on the mailing list or via some other means."),(0,o.kt)("p",null,"Elasticsearch is a search system based on Apache Lucene. It provides full text search for schema-free documents\nand provides access to raw event level data. Elasticsearch is increasingly adding more support for analytics and aggregations.\n",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!msg/druid-development/nlpwTHNclj8/sOuWlKOzPpYJ"},"Some members of the community")," have pointed out\nthe resource requirements for data ingestion and aggregation in Elasticsearch is much higher than those of Druid."),(0,o.kt)("p",null,"Elasticsearch also does not support data summarization/roll-up at ingestion time, which can compact the data that needs to be\nstored up to 100x with real-world data sets. This leads to Elasticsearch having greater storage requirements."),(0,o.kt)("p",null,"Druid focuses on OLAP work flows. Druid is optimized for high performance (fast aggregation and ingestion) at low cost,\nand supports a wide range of analytic operations. Druid has some basic search support for structured event data, but does not support\nfull text search. Druid also does not support completely unstructured data. Measures must be defined in a Druid schema such that\nsummarization/roll-up can be done."))}f.isMDXComponent=!0}}]);