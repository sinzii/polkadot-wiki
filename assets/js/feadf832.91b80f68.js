"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2794],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return o?a.createElement(k,i(i({ref:t},p),{},{components:o})):a.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},61487:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),i=["components"],l={id:"build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",sidebar_label:"Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../build-guides-coretime-start"},s=void 0,d={unversionedId:"build/build-guides-coretime-start",id:"build/build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",source:"@site/../docs/build/build-guides-coretime-start.md",sourceDirName:"build",slug:"/build-guides-coretime-start",permalink:"/docs/build-guides-coretime-start",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-guides-coretime-start.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1715065584,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",sidebar_label:"Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../build-guides-coretime-start"}},p={},c=[{value:"Using the Polkadot SDK",id:"using-the-polkadot-sdk",level:2},{value:"Deploying on a Core",id:"deploying-on-a-core",level:2},{value:"Deploy adder collator",id:"deploy-adder-collator",level:3}],u={toc:c},m="wrapper";function k(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"This section is under construction and moving! (Expect Chaos)",type:"warning"}),(0,n.kt)("admonition",{title:"Only for Kusama and testnets!",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Agile coretime is only for the Kusama and testnet networks at the moment, and is not yet deployed on\nPolkadot.")),(0,n.kt)("h2",{id:"using-the-polkadot-sdk"},"Using the Polkadot SDK"),(0,n.kt)("p",null,"At first glance, the Polkadot SDK can be rather overwhelming, and in a way it is - it packs a lot of\ntech into one place. The Polkadot SDK used to be overarching ",(0,n.kt)("strong",{parentName:"p"},"three")," repositories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#polkadot"},(0,n.kt)("strong",{parentName:"a"},"Polkadot"))," -\nWhich for a time, included both the client implementation and runtime, until the runtime was moved\nto the Polkadot Fellows organization."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#substrate"},(0,n.kt)("strong",{parentName:"a"},"Substrate"))," -\nThe underlying, core primitives and libraries for building blockchains (any blockchain, not just\none for Polkadot). Much of Polkadot is built with Substrate!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#cumulus"},(0,n.kt)("strong",{parentName:"a"},"Cumulus"))," -\nA set of libraries and tools which pertain specifically with connecting blockchains to Polkadot,\nknown as parachains.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For an in-depth dive into the monorepo, it is highly recommended that you look into the\n",(0,n.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html"},"Polkadot SDK Docs, which explains everything."))),(0,n.kt)("admonition",{title:"What is a task?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},'You might see the term "task" referenced quite a bit, but in most cases, it refers to a process\nutilizing Polkadot\'s compute. This could be a parachain or any other computational process, provided\nthat it adheres to the Polkadot protocol.'),(0,n.kt)("p",{parentName:"admonition"},"The full definition can be found ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-agile-coretime#task"},"here"),".")),(0,n.kt)("h2",{id:"deploying-on-a-core"},"Deploying on a Core"),(0,n.kt)("p",null,"Once you have your runtime and pallets developed, you will be able to deploy it on a\n",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-agile-coretime#core"},"core"),", which is how one utilizes the shared security of the\nPolkadot network. One does so by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reserving")," a ",(0,n.kt)("a",{parentName:"li",href:"/docs/glossary#paraid"},(0,n.kt)("inlineCode",{parentName:"a"},"ParaId")),", where you will upload your runtime and\ngenesis state."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Compiling")," the runtime (written in Rust) to a ",(0,n.kt)("a",{parentName:"li",href:"/docs/learn-wasm"},"WebAssembly")," blob,\nthereby defining how your state transitions from one state to the next. This runtime is created\nusing the Polkadot SDK."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ensure")," your chain spec is viable and ready to be deployed as a live, working parachain."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Generating")," your genesis state and wasm."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Obtaining")," a core, most likely through a\n",(0,n.kt)("a",{parentName:"li",href:"/docs/learn-guides-coretime-marketplaces"},"Coretime marketplace"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Assigning")," that core to your",(0,n.kt)("a",{parentName:"li",href:"/docs/glossary#paraid"}," ",(0,n.kt)("inlineCode",{parentName:"a"},"ParaId")),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ensuring")," you have at least one honest, synced collator for your task")),(0,n.kt)("h3",{id:"deploy-adder-collator"},"Deploy adder collator"),(0,n.kt)("p",null,"Try out the above by deploying the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-guides-coretime-parachains"},'adder collator, a very simple "counter" parachain implementation.'),"."))}k.isMDXComponent=!0}}]);