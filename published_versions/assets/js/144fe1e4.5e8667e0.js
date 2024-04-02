"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},49235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"rolling-updates",title:"Rolling updates"},s=void 0,d={unversionedId:"operations/rolling-updates",id:"operations/rolling-updates",title:"Rolling updates",description:"\x3c!--",source:"@site/docs/29.0.1/operations/rolling-updates.md",sourceDirName:"operations",slug:"/operations/rolling-updates",permalink:"/docs/29.0.1/operations/rolling-updates",draft:!1,tags:[],version:"current",frontMatter:{id:"rolling-updates",title:"Rolling updates"},sidebar:"docs",previous:{title:"High availability",permalink:"/docs/29.0.1/operations/high-availability"},next:{title:"Using rules to drop and retain data",permalink:"/docs/29.0.1/operations/rule-configuration"}},u={},p=[{value:"Historical",id:"historical",level:2},{value:"Overlord",id:"overlord",level:2},{value:"Middle Managers/Indexers",id:"middle-managersindexers",level:2},{value:"Rolling restart (restore-based)",id:"rolling-restart-restore-based",level:3},{value:"Rolling restart (graceful-termination-based)",id:"rolling-restart-graceful-termination-based",level:3},{value:"Autoscaling-based replacement",id:"autoscaling-based-replacement",level:3},{value:"Standalone Real-time",id:"standalone-real-time",level:2},{value:"Broker",id:"broker",level:2},{value:"Coordinator",id:"coordinator",level:2}],c={toc:p},g="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(g,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For rolling Apache Druid cluster updates with no downtime, we recommend updating Druid processes in the\nfollowing order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Historical"),(0,o.kt)("li",{parentName:"ol"},"Middle Manager and Indexer (if any)"),(0,o.kt)("li",{parentName:"ol"},"Broker"),(0,o.kt)("li",{parentName:"ol"},"Router"),(0,o.kt)("li",{parentName:"ol"},"Overlord (Note that you can upgrade the Overlord before any MiddleManager processes if you use ",(0,o.kt)("a",{parentName:"li",href:"#autoscaling-based-replacement"},"autoscaling-based replacement"),".)"),(0,o.kt)("li",{parentName:"ol"},"Coordinator ( or merged Coordinator+Overlord )")),(0,o.kt)("p",null,"If you need to do a rolling downgrade, reverse the order and start with the Coordinator processes."),(0,o.kt)("p",null,"For information about the latest release, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/releases"},"Druid releases"),"."),(0,o.kt)("h2",{id:"historical"},"Historical"),(0,o.kt)("p",null,"Historical processes can be updated one at a time. Each Historical process has a startup time to memory map\nall the segments it was serving before the update. The startup time typically takes a few seconds to\na few minutes, depending on the hardware of the host. As long as each Historical process is updated\nwith a sufficient delay (greater than the time required to start a single process), you can rolling\nupdate the entire Historical cluster."),(0,o.kt)("h2",{id:"overlord"},"Overlord"),(0,o.kt)("p",null,"Overlord processes can be updated one at a time in a rolling fashion."),(0,o.kt)("h2",{id:"middle-managersindexers"},"Middle Managers/Indexers"),(0,o.kt)("p",null,"Middle Managers or Indexer nodes run both batch and real-time indexing tasks. Generally you want to update Middle\nManagers in such a way that real-time indexing tasks do not fail. There are three strategies for\ndoing that."),(0,o.kt)("h3",{id:"rolling-restart-restore-based"},"Rolling restart (restore-based)"),(0,o.kt)("p",null,"Middle Managers can be updated one at a time in a rolling fashion when you set\n",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.restoreTasksOnRestart=true"),". In this case, indexing tasks that support restoring\nwill restore their state on Middle Manager restart, and will not fail."),(0,o.kt)("p",null,"Currently, only realtime tasks support restoring, so non-realtime indexing tasks will fail and will\nneed to be resubmitted."),(0,o.kt)("h3",{id:"rolling-restart-graceful-termination-based"},"Rolling restart (graceful-termination-based)"),(0,o.kt)("p",null,'Middle Managers can be gracefully terminated using the "disable" API. This works for all task types,\neven tasks that are not restorable.'),(0,o.kt)("p",null,"To prepare a Middle Manager for update, send a POST request to\n",(0,o.kt)("inlineCode",{parentName:"p"},"<MiddleManager_IP:PORT>/druid/worker/v1/disable"),". The Overlord will now no longer send tasks to\nthis Middle Manager. Tasks that have already started will run to completion. Current state can be checked\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"<MiddleManager_IP:PORT>/druid/worker/v1/enabled")," ."),(0,o.kt)("p",null,"To view all existing tasks, send a GET request to ",(0,o.kt)("inlineCode",{parentName:"p"},"<MiddleManager_IP:PORT>/druid/worker/v1/tasks"),".\nWhen this list is empty, you can safely update the Middle Manager. After the Middle Manager starts\nback up, it is automatically enabled again. You can also manually enable Middle Managers by POSTing\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"<MiddleManager_IP:PORT>/druid/worker/v1/enable"),"."),(0,o.kt)("h3",{id:"autoscaling-based-replacement"},"Autoscaling-based replacement"),(0,o.kt)("p",null,"If autoscaling is enabled on your Overlord, then Overlord processes can launch new Middle Manager processes\nen masse and then gracefully terminate old ones as their tasks finish. This process is configured by\nsetting ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.minWorkerVersion=#{VERSION}"),". Each time you update your Overlord process,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION")," value should be increased, which will trigger a mass launch of new Middle Managers."),(0,o.kt)("p",null,"The config ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.autoscale.workerVersion=#{VERSION}")," also needs to be set."),(0,o.kt)("h2",{id:"standalone-real-time"},"Standalone Real-time"),(0,o.kt)("p",null,"Standalone real-time processes can be updated one at a time in a rolling fashion."),(0,o.kt)("h2",{id:"broker"},"Broker"),(0,o.kt)("p",null,"Broker processes can be updated one at a time in a rolling fashion. There needs to be some delay between\nupdating each process as Brokers must load the entire state of the cluster before they return valid\nresults."),(0,o.kt)("h2",{id:"coordinator"},"Coordinator"),(0,o.kt)("p",null,"Coordinator processes can be updated one at a time in a rolling fashion."))}m.isMDXComponent=!0}}]);