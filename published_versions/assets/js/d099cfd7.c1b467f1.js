"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6101],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>m});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=n,m=c["".concat(s,".").concat(h)]||c[h]||g[h]||a;return t?o.createElement(m,i(i({ref:r},d),{},{components:t})):o.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},34943:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=t(58168),n=t(98587),a=(t(96540),t(15680)),i=["components"],l={id:"zookeeper",title:"ZooKeeper"},s=void 0,p={unversionedId:"design/zookeeper",id:"design/zookeeper",title:"ZooKeeper",description:"\x3c!--",source:"@site/docs/29.0.0/design/zookeeper.md",sourceDirName:"design",slug:"/design/zookeeper",permalink:"/docs/29.0.0/design/zookeeper",draft:!1,tags:[],version:"current",frontMatter:{id:"zookeeper",title:"ZooKeeper"},sidebar:"docs",previous:{title:"Metadata storage",permalink:"/docs/29.0.0/design/metadata-storage"},next:{title:"Overview",permalink:"/docs/29.0.0/ingestion/"}},d={},c=[{value:"Minimum ZooKeeper versions",id:"minimum-zookeeper-versions",level:2},{value:"ZooKeeper Operations",id:"zookeeper-operations",level:2},{value:"Coordinator Leader Election",id:"coordinator-leader-election",level:2},{value:"Segment &quot;publishing&quot; protocol from Historical and Realtime",id:"segment-publishing-protocol-from-historical-and-realtime",level:2},{value:"Segment load/drop protocol between Coordinator and Historical",id:"segment-loaddrop-protocol-between-coordinator-and-historical",level:2}],g={toc:c},h="wrapper";function m(e){var r=e.components,t=(0,n.A)(e,i);return(0,a.yg)(h,(0,o.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache Druid uses ",(0,a.yg)("a",{parentName:"p",href:"http://zookeeper.apache.org/"},"Apache ZooKeeper")," (ZK) for management of current cluster state."),(0,a.yg)("h2",{id:"minimum-zookeeper-versions"},"Minimum ZooKeeper versions"),(0,a.yg)("p",null,"Apache Druid supports ZooKeeper versions 3.5.x and above."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"}," Note: Starting with Apache Druid 0.22.0, support for ZooKeeper 3.4.x has been removed")),(0,a.yg)("h2",{id:"zookeeper-operations"},"ZooKeeper Operations"),(0,a.yg)("p",null,"The operations that happen over ZK are"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/coordinator"},"Coordinator")," leader election"),(0,a.yg)("li",{parentName:"ol"},'Segment "publishing" protocol from ',(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/historical"},"Historical")),(0,a.yg)("li",{parentName:"ol"},"Segment load/drop protocol between ",(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/coordinator"},"Coordinator")," and ",(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/historical"},"Historical")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/overlord"},"Overlord")," leader election"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/overlord"},"Overlord")," and ",(0,a.yg)("a",{parentName:"li",href:"/docs/29.0.0/design/middlemanager"},"MiddleManager")," task management")),(0,a.yg)("h2",{id:"coordinator-leader-election"},"Coordinator Leader Election"),(0,a.yg)("p",null,"We use the Curator ",(0,a.yg)("a",{parentName:"p",href:"https://curator.apache.org/curator-recipes/leader-latch.html"},"LeaderLatch")," recipe to perform leader election at path"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"${druid.zk.paths.coordinatorPath}/_COORDINATOR\n")),(0,a.yg)("h2",{id:"segment-publishing-protocol-from-historical-and-realtime"},'Segment "publishing" protocol from Historical and Realtime'),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"announcementsPath")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"servedSegmentsPath")," are used for this."),(0,a.yg)("p",null,"All ",(0,a.yg)("a",{parentName:"p",href:"/docs/29.0.0/design/historical"},"Historical")," processes publish themselves on the ",(0,a.yg)("inlineCode",{parentName:"p"},"announcementsPath"),", specifically, they will create an ephemeral znode at"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"${druid.zk.paths.announcementsPath}/${druid.host}\n")),(0,a.yg)("p",null,"Which signifies that they exist. They will also subsequently create a permanent znode at"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"${druid.zk.paths.servedSegmentsPath}/${druid.host}\n")),(0,a.yg)("p",null,"And as they load up segments, they will attach ephemeral znodes that look like"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"${druid.zk.paths.servedSegmentsPath}/${druid.host}/_segment_identifier_\n")),(0,a.yg)("p",null,"Processes like the ",(0,a.yg)("a",{parentName:"p",href:"/docs/29.0.0/design/coordinator"},"Coordinator")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/29.0.0/design/broker"},"Broker")," can then watch these paths to see which processes are currently serving which segments."),(0,a.yg)("h2",{id:"segment-loaddrop-protocol-between-coordinator-and-historical"},"Segment load/drop protocol between Coordinator and Historical"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"loadQueuePath")," is used for this."),(0,a.yg)("p",null,"When the ",(0,a.yg)("a",{parentName:"p",href:"/docs/29.0.0/design/coordinator"},"Coordinator")," decides that a ",(0,a.yg)("a",{parentName:"p",href:"/docs/29.0.0/design/historical"},"Historical")," process should load or drop a segment, it writes an ephemeral znode to"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"${druid.zk.paths.loadQueuePath}/_host_of_historical_process/_segment_identifier\n")),(0,a.yg)("p",null,"This znode will contain a payload that indicates to the Historical process what it should do with the given segment. When the Historical process is done with the work, it will delete the znode in order to signify to the Coordinator that it is complete."))}m.isMDXComponent=!0}}]);