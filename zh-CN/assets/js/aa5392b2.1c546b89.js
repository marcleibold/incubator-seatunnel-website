"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[45920],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59237:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="Apache Pulsar",s={unversionedId:"connector-v2/source/pulsar",id:"version-2.2.0-beta/connector-v2/source/pulsar",title:"Apache Pulsar",description:"Apache Pulsar source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/source/pulsar.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/pulsar",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/pulsar",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/source/pulsar.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/common-options"},next:{title:"Sink",permalink:"/zh-CN/docs/2.2.0-beta/category/sink-v2"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic String",id:"topic-string",level:3},{value:"topic-pattern String",id:"topic-pattern-string",level:3},{value:"topic-discovery.interval Long",id:"topic-discoveryinterval-long",level:3},{value:"subscription.name String",id:"subscriptionname-string",level:3},{value:"client.service-url String",id:"clientservice-url-string",level:3},{value:"admin.service-url String",id:"adminservice-url-string",level:3},{value:"auth.plugin-class String",id:"authplugin-class-string",level:3},{value:"auth.params String",id:"authparams-string",level:3},{value:"poll.timeout Integer",id:"polltimeout-integer",level:3},{value:"poll.interval Long",id:"pollinterval-long",level:3},{value:"poll.batch.size Integer",id:"pollbatchsize-integer",level:3},{value:"cursor.startup.mode Enum",id:"cursorstartupmode-enum",level:3},{value:"cursor.startup.timestamp String",id:"cursorstartuptimestamp-string",level:3},{value:"cursor.reset.mode Enum",id:"cursorresetmode-enum",level:3},{value:"cursor.stop.mode String",id:"cursorstopmode-string",level:3},{value:"cursor.startup.timestamp String",id:"cursorstartuptimestamp-string-1",level:3},{value:"Example",id:"example",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apache-pulsar"},"Apache Pulsar"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache Pulsar source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Source connector for Apache Pulsar."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic-pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic-discovery.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscription.name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client.service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admin.service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth.plugin-class"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth.params"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poll.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poll.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poll.batch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor.startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"LATEST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor.startup.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor.reset.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"LATEST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor.stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor.stop.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"topic-string"},"topic ","[String]"),(0,l.kt)("p",null,"Topic name(s) to read data from when the table is used as source. It also supports topic list for source by separating topic by semicolon like 'topic-1;topic-2'."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, only one of "topic-pattern" and "topic" can be specified for sources.')),(0,l.kt)("h3",{id:"topic-pattern-string"},"topic-pattern ","[String]"),(0,l.kt)("p",null,"The regular expression for a pattern of topic names to read from. All topics with names that match the specified regular expression will be subscribed by the consumer when the job starts running."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, only one of "topic-pattern" and "topic" can be specified for sources.')),(0,l.kt)("h3",{id:"topic-discoveryinterval-long"},"topic-discovery.interval ","[Long]"),(0,l.kt)("p",null,"The interval (in ms) for the Pulsar source to discover the new topic partitions. A non-positive value disables the topic partition discovery."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note, This option only works if the 'topic-pattern' option is used.")),(0,l.kt)("h3",{id:"subscriptionname-string"},"subscription.name ","[String]"),(0,l.kt)("p",null,"Specify the subscription name for this consumer. This argument is required when constructing the consumer."),(0,l.kt)("h3",{id:"clientservice-url-string"},"client.service-url ","[String]"),(0,l.kt)("p",null,"Service URL provider for Pulsar service.\nTo connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL.\nYou can assign Pulsar protocol URLs to specific clusters and use the Pulsar scheme."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650,localhost:6651"),"."),(0,l.kt)("h3",{id:"adminservice-url-string"},"admin.service-url ","[String]"),(0,l.kt)("p",null,"The Pulsar service HTTP URL for the admin endpoint."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"http://my-broker.example.com:8080"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://my-broker.example.com:8443")," for TLS."),(0,l.kt)("h3",{id:"authplugin-class-string"},"auth.plugin-class ","[String]"),(0,l.kt)("p",null,"Name of the authentication plugin."),(0,l.kt)("h3",{id:"authparams-string"},"auth.params ","[String]"),(0,l.kt)("p",null,"Parameters for the authentication plugin."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"key1:val1,key2:val2")),(0,l.kt)("h3",{id:"polltimeout-integer"},"poll.timeout ","[Integer]"),(0,l.kt)("p",null,"The maximum time (in ms) to wait when fetching records. A longer time increases throughput but also latency."),(0,l.kt)("h3",{id:"pollinterval-long"},"poll.interval ","[Long]"),(0,l.kt)("p",null,"The interval time(in ms) when fetcing records. A shorter time increases throughput, but also increases CPU load."),(0,l.kt)("h3",{id:"pollbatchsize-integer"},"poll.batch.size ","[Integer]"),(0,l.kt)("p",null,"The maximum number of records to fetch to wait when polling. A longer time increases throughput but also latency."),(0,l.kt)("h3",{id:"cursorstartupmode-enum"},"cursor.startup.mode ","[Enum]"),(0,l.kt)("p",null,"Startup mode for Pulsar consumer, valid values are ",(0,l.kt)("inlineCode",{parentName:"p"},"'EARLIEST'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'LATEST'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'SUBSCRIPTION'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'TIMESTAMP'"),"."),(0,l.kt)("h3",{id:"cursorstartuptimestamp-string"},"cursor.startup.timestamp ","[String]"),(0,l.kt)("p",null,"Start from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "cursor.startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'TIMESTAMP'"),".")),(0,l.kt)("h3",{id:"cursorresetmode-enum"},"cursor.reset.mode ","[Enum]"),(0,l.kt)("p",null,"Cursor reset strategy for Pulsar consumer valid values are ",(0,l.kt)("inlineCode",{parentName:"p"},"'EARLIEST'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'LATEST'"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option only works if the "cursor.startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'SUBSCRIPTION'"),".")),(0,l.kt)("h3",{id:"cursorstopmode-string"},"cursor.stop.mode ","[String]"),(0,l.kt)("p",null,"Stop mode for Pulsar consumer, valid values are ",(0,l.kt)("inlineCode",{parentName:"p"},"'NEVER'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'LATEST'"),"and ",(0,l.kt)("inlineCode",{parentName:"p"},"'TIMESTAMP'"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note, When ",(0,l.kt)("inlineCode",{parentName:"strong"},"'NEVER' "),"is specified, it is a real-time job, and other mode are off-line jobs.")),(0,l.kt)("h3",{id:"cursorstartuptimestamp-string-1"},"cursor.startup.timestamp ","[String]"),(0,l.kt)("p",null,"Stop from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "cursor.stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'TIMESTAMP'"),".")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Jdbc",metastring:"{","{":!0},'source {\n  Pulsar {\n    topic = "example"\n    subscription.name = "seatunnel"\n    client.service-url = "localhost:pulsar://localhost:6650"\n    admin.service-url = "http://my-broker.example.com:8080"\n    result_table_name = "test"\n  }\n}\n')))}d.isMDXComponent=!0}}]);