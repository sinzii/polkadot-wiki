"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"maintain-guides-avoid-slashing",title:"Participate in Democracy",sidebar_label:"Validator Best Practices",description:"Best practices to avoid slashing.",keywords:["validator","rewards","slashing"],slug:"../maintain-guides-avoid-slashing"},l=void 0,d={unversionedId:"maintain/maintain-guides-avoid-slashing",id:"maintain/maintain-guides-avoid-slashing",title:"Participate in Democracy",description:"Best practices to avoid slashing.",source:"@site/../docs/maintain/maintain-guides-best-practices-to-avoid-slashes.md",sourceDirName:"maintain",slug:"/maintain-guides-avoid-slashing",permalink:"/docs/maintain-guides-avoid-slashing",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-best-practices-to-avoid-slashes.md",tags:[],version:"current",lastUpdatedBy:"Will | Paradox",lastUpdatedAt:1669813409,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{id:"maintain-guides-avoid-slashing",title:"Participate in Democracy",sidebar_label:"Validator Best Practices",description:"Best practices to avoid slashing.",keywords:["validator","rewards","slashing"],slug:"../maintain-guides-avoid-slashing"}},c={},h=[{value:"Best practices to prevent slashing",id:"best-practices-to-prevent-slashing",level:2},{value:"Liveliness",id:"liveliness",level:2},{value:"Equivocation",id:"equivocation",level:2},{value:"Application Related",id:"application-related",level:2},{value:"Examples",id:"examples",level:2}],u={toc:h};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"best-practices-to-prevent-slashing"},"Best practices to prevent slashing"),(0,r.kt)("p",null,"Slashing is implemented as a deterrent for validators to misbehave. Slashes are applied to a validators total stake (own + nominated) and can range from as little as 0.01% or rise to 100%.  In all instances slashes are accompanied by a loss of nominators.  "),(0,r.kt)("p",null,"Broadly speaking, a slash may occur under four circumstances:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Liveliness \u2013 Slashing starts when 10% of the active validators set are offline and increases in a linear manner until 44% of the validator set is offline, at this point the slash is held at 7% "),(0,r.kt)("li",{parentName:"ol"},"Equivocation \u2013 A slash of 0.01% is applied with as little as a single evocation.   The slashed amount increases to 100% incrementally as more validators also equivocate."),(0,r.kt)("li",{parentName:"ol"},"Malicious action \u2013 This may result from a validator trying to falsely represent the contents of a block.  Slashing penalties of 100% may apply."),(0,r.kt)("li",{parentName:"ol"},"Application related (bug or otherwise) \u2013 The amount is unknown and may manifest itself as scenarios 1, 2 and 3 above.")),(0,r.kt)("p",null,"This article seeks to provide some best-practices to prevent slashing based on lesson\u2019s learned from previous slashes.  It provides comments and guidance for all circumstances except for malicious action by the node-operator."),(0,r.kt)("h2",{id:"liveliness"},"Liveliness"),(0,r.kt)("p",null,"An offline event occurs when a validator does not produce a BLOCK or IMONLINE message within an EPOCH.  Isolated offline events do not result in a slash however the validator would not earn any era points while offline.\nA slash under liveliness occurs when 10% or more of the active validators are offline at the same time.  "),(0,r.kt)("p",null,"The following are recommendations to validators to avoid slashing under liveliness for servers that have historically functioned:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Utilize systemd to host your validator instance.  Systemd should be configured to auto reboot the service with a minimum of 60 second delay.  This configuration should aid with re-establishing the instance under isolated failures with the binary.  "),(0,r.kt)("li",{parentName:"ol"},"A validator instance can demonstrate un-lively behaviour if it is unable to sync new blocks.  This may be as a result of insufficient disk space or a corrupt database."),(0,r.kt)("li",{parentName:"ol"},"Monitoring should be implemented that allows node-operators to monitor connectivity network connectivity to the peer-to-peer port of the validator instance.  Monitoring should also be implemented to ensure that there is <50 Block \u2018drift\u2019 between the target and best blocks.  If either event produces a failure the node-operator should be notified.\nThe following are recommendations to validators to avoid liveliness for new servers / migrated servers:"),(0,r.kt)("li",{parentName:"ol"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator")," flag is used when starting the validator instance"),(0,r.kt)("li",{parentName:"ol"},"If switching keys ensure that the correct session keys are applied"),(0,r.kt)("li",{parentName:"ol"},"If migrating using a two server approach, ensure that you don\u2019t switch off the original server too soon."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the database on the new server is fully synchronized\nIt is highly recommended to avoid hosting on providers that other validators may also utilize.  If the provider fails, there is a probability that one or more other validators would also fail due to liveliness building to a slash.",(0,r.kt)("br",{parentName:"li"}),"There is precedent that a slash maybe forgiven if a single validator faces an offline event when a larger operator also faces multiple offline events which results in a slash.")),(0,r.kt)("h2",{id:"equivocation"},"Equivocation"),(0,r.kt)("p",null,"Equivocation events can occur when a validator produces two or more of the same block, under this condition it is referred to as a BABE equivocation.  Equivocation may also occur when a validator signs two or more of the same consensus vote, under this condition it is referred to as a GRANDPA Equivocation.\nEquivocations usually occur when there is the existence of duplicate signing keys that reside on the validator host.  If keys are never duplicated the probability of an equivocation slash decreases to near 0.\nThe following are scenarios that build towards slashes under equivocation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cloning a server i.e. copying all contents when migrating to new hardware.  This action should be avoided.  If an image is desired, it should be taken before keys are generated."),(0,r.kt)("li",{parentName:"ol"},"High Availability (HA) Systems \u2013 Equivocation can occur if there are any concurrent operations either when a failed server restarts or if there\u2019s a false positive event resulting in both servers being online at the same time.  HA systems are to be treated with extreme caution and are not advised."),(0,r.kt)("li",{parentName:"ol"},"The keystore folder is copied when attempting to copy a database from one instance to another.",(0,r.kt)("br",{parentName:"li"}),"It is important to note that equivocation slashes occur with a single incident.  This can happen if duplicated keystores are in use for only a few seconds.  A slash results in loss of nominators, loss of funds, removal from the Thousand Validator Programme and reputational damage.  An offline event results in loss of some funds but retention of nominators and a fault under the Thousand Validator Programme.  ")),(0,r.kt)("h2",{id:"application-related"},"Application Related"),(0,r.kt)("p",null,"In the past there have been releases with bugs that lead to slashes, these issues are not as prevalent in current releases.  The following are advised to node operators to ensure that they obtain pristine binaries or source code and to ensure security of their node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Always download either source files or binaries from the official Parity repository"),(0,r.kt)("li",{parentName:"ol"},"Verify the hash of downloaded files."),(0,r.kt)("li",{parentName:"ol"},"Use the W3F secure validator setup or adhere to its principles"),(0,r.kt)("li",{parentName:"ol"},"Ensure basic security items are checked, use a firewall, manage user access, use SSH certificates"),(0,r.kt)("li",{parentName:"ol"},"Avoiding using your server as a general purpose system.  Hosting a validator on your workstation or one that hosts other services increases the risk of maleficence.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Era"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"),(0,r.kt)("th",{parentName:"tr",align:null},"Action Taken"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"774"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io/$165562246360408hKCfC:matrix.org?via=matrix.parity.io&via=corepaper.org&via=matrix.org"},"The validator")," migrated servers and cloned the keystore folder.  The onchain event can be viewed ",(0,r.kt)("a",{parentName:"td",href:"https://polkadot.subscan.io/extrinsic/11190109-0?event=11190109-5"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"The validator did not submit a request for the slash to be cancelled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"3329"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},"The validator operated a test machine with cloned keys, the test machine was online at the same time as the primary which resulted in a slash.  Details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/post/1343"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"The validator requested a cancellation of the slash but the council declined.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"3995"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},"The validator noticed several errors after which the client crashed and a slash was applied.  The validator recorded all events and opened github issues to allow for technical opinions to be shared.  Details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/post/1733"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"The validator made a request to have the slashed cancelled.  The council approved the request as they believe the error was not operator related.")))))}p.isMDXComponent=!0}}]);