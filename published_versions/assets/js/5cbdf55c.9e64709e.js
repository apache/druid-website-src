"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,g=u["".concat(d,".").concat(c)]||u[c]||l[c]||s;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=c;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(7462),i=t(3366),s=(t(7294),t(3905)),o=["components"],a={layout:"doc_page",title:"Dropwizard metrics emitter"},d=void 0,p={unversionedId:"design/extensions-contrib/dropwizard",id:"design/extensions-contrib/dropwizard",title:"Dropwizard metrics emitter",description:"\x3c!--",source:"@site/docs/latest/design/extensions-contrib/dropwizard.md",sourceDirName:"design/extensions-contrib",slug:"/design/extensions-contrib/dropwizard",permalink:"/docs/latest/design/extensions-contrib/dropwizard",draft:!1,tags:[],version:"current",frontMatter:{layout:"doc_page",title:"Dropwizard metrics emitter"}},m={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Druid to Dropwizard Event Conversion",id:"druid-to-dropwizard-event-conversion",level:3},{value:"Supported Dropwizard reporters",id:"supported-dropwizard-reporters",level:3},{value:"JMX Reporter",id:"jmx-reporter",level:4},{value:"Console Reporter",id:"console-reporter",level:4},{value:"Default Metrics Mapping",id:"default-metrics-mapping",level:3}],l={toc:u},c="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dropwizard-emitter"},"Dropwizard Emitter"),(0,s.kt)("p",null,"To use this extension, make sure to ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#loading-extensions"},"include")," ",(0,s.kt)("inlineCode",{parentName:"p"},"dropwizard-emitter")," in the extensions load list."),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"This extension integrates ",(0,s.kt)("a",{parentName:"p",href:"http://metrics.dropwizard.io/3.1.0/getting-started/#"},"Dropwizard")," metrics library with druid so that dropwizard users can easily absorb druid into their monitoring ecosystem.\nIt accumulates druid metrics as dropwizard metrics, and emits them to various sinks via dropwizard supported reporters.\nCurrently supported dropwizard metrics types counter, gauge, meter, timer and histogram.\nThese metrics can be emitted using either Console or JMX reporter. "),(0,s.kt)("p",null,"To use this emitter, set"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"druid.emitter=dropwizard\n")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"All the configuration parameters for Dropwizard emitter are under ",(0,s.kt)("inlineCode",{parentName:"p"},"druid.emitter.dropwizard"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"property"),(0,s.kt)("th",{parentName:"tr",align:null},"description"),(0,s.kt)("th",{parentName:"tr",align:null},"required?"),(0,s.kt)("th",{parentName:"tr",align:null},"default"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.reporters")),(0,s.kt)("td",{parentName:"tr",align:null},"List of dropwizard reporters to be used. Here is a list of ",(0,s.kt)("a",{parentName:"td",href:"#supported-dropwizard-reporters"},"Supported Reporters")),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"none")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.prefix")),(0,s.kt)("td",{parentName:"tr",align:null},"Optional prefix to be used for metrics name"),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"none")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.includeHost")),(0,s.kt)("td",{parentName:"tr",align:null},"Flag to include the host and port as part of the metric name."),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.dimensionMapPath")),(0,s.kt)("td",{parentName:"tr",align:null},"Path to JSON file defining the dropwizard metric type, and desired dimensions for every Druid metric"),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"Default mapping provided. See below.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.alertEmitters")),(0,s.kt)("td",{parentName:"tr",align:null},"List of emitters where alerts will be forwarded to."),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"empty list (no forwarding)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"druid.emitter.dropwizard.maxMetricsRegistrySize")),(0,s.kt)("td",{parentName:"tr",align:null},"Maximum size of metrics registry to be cached at any time."),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"100 Mb")))),(0,s.kt)("h3",{id:"druid-to-dropwizard-event-conversion"},"Druid to Dropwizard Event Conversion"),(0,s.kt)("p",null,"Each metric emitted using Dropwizard must specify a type, one of ",(0,s.kt)("inlineCode",{parentName:"p"},"[timer, counter, guage, meter, histogram]"),". Dropwizard Emitter expects this mapping to\nbe provided as a JSON file.  Additionally, this mapping specifies which dimensions should be included for each metric.\nIf the user does not specify their own JSON file, a ",(0,s.kt)("a",{parentName:"p",href:"#default-metrics-mapping"},"default mapping")," is used.\nAll metrics are expected to be mapped. Metrics which are not mapped will be ignored.\nDropwizard metric path is organized using the following schema:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'<druid metric name> : { "dimensions" : <dimension list>, "type" : <Dropwizard metric type>, "timeUnit" : <For timers, timeunit in which metric is emitted>}')),(0,s.kt)("p",null,"e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"query/time" : { "dimensions" : ["dataSource", "type"], "type" : "timer", "timeUnit": "MILLISECONDS"},\n"segment/scan/pending" : { "dimensions" : [], "type" : "gauge"}\n')),(0,s.kt)("p",null,"For most use-cases, the default mapping is sufficient."),(0,s.kt)("h3",{id:"supported-dropwizard-reporters"},"Supported Dropwizard reporters"),(0,s.kt)("h4",{id:"jmx-reporter"},"JMX Reporter"),(0,s.kt)("p",null,"Used to report druid metrics via JMX."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\ndruid.emitter.dropwizard.reporters=[{"type":"jmx"}]\n\n')),(0,s.kt)("h4",{id:"console-reporter"},"Console Reporter"),(0,s.kt)("p",null,"Used to print Druid Metrics to console logs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\ndruid.emitter.dropwizard.reporters=[{"type":"console","emitIntervalInSecs":30}"}]\n\n')),(0,s.kt)("h3",{id:"default-metrics-mapping"},"Default Metrics Mapping"),(0,s.kt)("p",null,"Latest default metrics mapping can be found ","[here]"," (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/master/extensions-contrib/dropwizard-emitter/src/main/resources/defaultMetricDimensions.json"},"https://github.com/apache/druid/blob/master/extensions-contrib/dropwizard-emitter/src/main/resources/defaultMetricDimensions.json"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query/time": {\n    "dimensions": [\n      "dataSource",\n      "type"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/node/time": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/node/ttfb": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/node/backpressure": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/segment/time": {\n    "dimensions": [],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/wait/time": {\n    "dimensions": [],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "segment/scan/pending": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/segmentAndCache/time": {\n    "dimensions": [],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "query/cpu/time": {\n    "dimensions": [\n      "dataSource",\n      "type"\n    ],\n    "type": "timer",\n    "timeUnit": "NANOSECONDS"\n  },\n  "query/cache/delta/numEntries": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/sizeBytes": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/hits": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/misses": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/evictions": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/hitRate": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/averageBytes": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/timeouts": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/delta/errors": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "query/cache/total/numEntries": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/sizeBytes": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/hits": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/misses": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/evictions": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/hitRate": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/averageBytes": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/timeouts": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "query/cache/total/errors": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "ingest/events/thrownAway": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/events/unparseable": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/events/duplicate": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/events/processed": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/rows/output": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/persist/counter": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/persist/time": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "ingest/persist/cpu": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "timer",\n    "timeUnit": "NANOSECONDS"\n  },\n  "ingest/persist/backPressure": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "gauge"\n  },\n  "ingest/persist/failed": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/handoff/failed": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "counter"\n  },\n  "ingest/merge/time": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "ingest/merge/cpu": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "timer",\n    "timeUnit": "NANOSECONDS"\n  },\n  "task/run/time": {\n    "dimensions": [\n      "dataSource",\n      "taskType"\n    ],\n    "type": "timer",\n    "timeUnit": "MILLISECONDS"\n  },\n  "segment/added/bytes": {\n    "dimensions": [\n      "dataSource",\n      "taskType"\n    ],\n    "type": "counter"\n  },\n  "segment/moved/bytes": {\n    "dimensions": [\n      "dataSource",\n      "taskType"\n    ],\n    "type": "counter"\n  },\n  "segment/nuked/bytes": {\n    "dimensions": [\n      "dataSource",\n      "taskType"\n    ],\n    "type": "counter"\n  },\n  "segment/assigned/counter": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/moved/counter": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/dropped/counter": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/deleted/counter": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/unneeded/counter": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/cost/raw": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/cost/normalization": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/cost/normalized": {\n    "dimensions": [\n      "tier"\n    ],\n    "type": "counter"\n  },\n  "segment/loadQueue/size": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "gauge"\n  },\n  "segment/loadQueue/failed": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "gauge"\n  },\n  "segment/loadQueue/counter": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "gauge"\n  },\n  "segment/dropQueue/counter": {\n    "dimensions": [\n      "server"\n    ],\n    "type": "gauge"\n  },\n  "segment/size": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "gauge"\n  },\n  "segment/overShadowed/counter": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "segment/max": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "segment/used": {\n    "dimensions": [\n      "dataSource",\n      "tier",\n      "priority"\n    ],\n    "type": "gauge"\n  },\n  "segment/usedPercent": {\n    "dimensions": [\n      "dataSource",\n      "tier",\n      "priority"\n    ],\n    "type": "gauge"\n  },\n  "jvm/pool/committed": {\n    "dimensions": [\n      "poolKind",\n      "poolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/pool/init": {\n    "dimensions": [\n      "poolKind",\n      "poolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/pool/max": {\n    "dimensions": [\n      "poolKind",\n      "poolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/pool/used": {\n    "dimensions": [\n      "poolKind",\n      "poolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/bufferpool/counter": {\n    "dimensions": [\n      "bufferpoolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/bufferpool/used": {\n    "dimensions": [\n      "bufferpoolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/bufferpool/capacity": {\n    "dimensions": [\n      "bufferpoolName"\n    ],\n    "type": "gauge"\n  },\n  "jvm/mem/init": {\n    "dimensions": [\n      "memKind"\n    ],\n    "type": "gauge"\n  },\n  "jvm/mem/max": {\n    "dimensions": [\n      "memKind"\n    ],\n    "type": "gauge"\n  },\n  "jvm/mem/used": {\n    "dimensions": [\n      "memKind"\n    ],\n    "type": "gauge"\n  },\n  "jvm/mem/committed": {\n    "dimensions": [\n      "memKind"\n    ],\n    "type": "gauge"\n  },\n  "jvm/gc/counter": {\n    "dimensions": [\n      "gcName",\n      "gcGen"\n    ],\n    "type": "counter"\n  },\n  "jvm/gc/cpu": {\n    "dimensions": [\n      "gcName",\n      "gcGen"\n    ],\n    "type": "timer",\n    "timeUnit": "NANOSECONDS"\n  },\n  "ingest/events/buffered": {\n    "dimensions": [\n      "serviceName",\n      "bufferCapacity"\n    ],\n    "type": "gauge"\n  },\n  "sys/swap/free": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/swap/max": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/swap/pageIn": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/swap/pageOut": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/disk/write/counter": {\n    "dimensions": [\n      "fsDevName"\n    ],\n    "type": "counter"\n  },\n  "sys/disk/read/counter": {\n    "dimensions": [\n      "fsDevName"\n    ],\n    "type": "counter"\n  },\n  "sys/disk/write/size": {\n    "dimensions": [\n      "fsDevName"\n    ],\n    "type": "counter"\n  },\n  "sys/disk/read/size": {\n    "dimensions": [\n      "fsDevName"\n    ],\n    "type": "counter"\n  },\n  "sys/net/write/size": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "sys/net/read/size": {\n    "dimensions": [],\n    "type": "counter"\n  },\n  "sys/fs/used": {\n    "dimensions": [\n      "fsDevName",\n      "fsDirName",\n      "fsTypeName",\n      "fsSysTypeName",\n      "fsOptions"\n    ],\n    "type": "gauge"\n  },\n  "sys/fs/max": {\n    "dimensions": [\n      "fsDevName",\n      "fsDirName",\n      "fsTypeName",\n      "fsSysTypeName",\n      "fsOptions"\n    ],\n    "type": "gauge"\n  },\n  "sys/mem/used": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/mem/max": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "sys/storage/used": {\n    "dimensions": [\n      "fsDirName"\n    ],\n    "type": "gauge"\n  },\n  "sys/cpu": {\n    "dimensions": [\n      "cpuName",\n      "cpuTime"\n    ],\n    "type": "gauge"\n  },\n  "coordinator-segment/counter": {\n    "dimensions": [\n      "dataSource"\n    ],\n    "type": "gauge"\n  },\n  "historical-segment/counter": {\n    "dimensions": [\n      "dataSource",\n      "tier",\n      "priority"\n    ],\n    "type": "gauge"\n  },\n  "jetty/numOpenConnections": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/total": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/idle": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/busy": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/isLowOnThreads": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/min": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/max": {\n    "dimensions": [],\n    "type": "gauge"\n  },\n  "jetty/threadPool/queueSize": {\n    "dimensions": [],\n    "type": "gauge"\n  }\n}\n')))}g.isMDXComponent=!0}}]);