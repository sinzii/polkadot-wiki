(self.webpackChunk=self.webpackChunk||[]).push([[6140],{47940:(a,t,e)=>{"use strict";e.d(t,{Z:()=>u});var n=e(74165),o=e(15861),i=e(67294),r=e(92519),s=e(63472),l=e(67425);function c(a,t,e){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function a(t,e,o){var i,l,c,d,p;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,l=void 0,a.t0=t,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){a.next=18;break}return a.abrupt("return");case 18:return c=new r.U(i),a.next=21,s.G.create({provider:c});case 21:d=a.sent,(p=e.split(".")).forEach((function(a){a in d&&(d=d[a])})),a.t1=p[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return l=d.toString(),a.abrupt("break",35);case 29:return a.next=31,d();case 31:return l=(l=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+e);case 35:return a.abrupt("return",l);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function p(a,t,e,n){switch(t){case"humanReadable":(0,l.HumanReadable)(a,e,n);break;case"precise":(0,l.Precise)(a,e,n);break;case"blocksToDays":(0,l.BlocksToDays)(a,n);break;case"arrayLength":(0,l.ArrayLength)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(a){var t=a.network,e=a.path,r=a.defaultValue,s=a.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),u=d[0],h=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,t,h):h(r.toString());var a=void 0;switch(t){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://statemine-rpc.polkadot.io/";break;case"statemint":a="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c(t,e,h);case 2:if(void 0!==(o=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?p(o,l,t,h):h(o);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:a=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,e,n){var o=void 0;if("polkadot"===e||"statemint"===e)o=3;else{if("kusama"!==e&&"statemine"!==e)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}a=parseFloat(a),n((a=Number.isInteger(a/t[e].precision)?a/t[e].precision+" "+t[e].symbol:(a/t[e].precision).toFixed(o)+" "+t[e].symbol).toString())},Precise:function(a,e,n){n(a=(a=parseFloat(a))/t[e].precision+" "+t[e].symbol)},BlocksToDays:function(a,t){t((a=6*a/86400).toString())},ArrayLength:function(a,t){t((a=a.split(",").length).toString())}}},65779:(a,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=e(87462),o=e(63366),i=(e(67294),e(3905)),r=e(47940),s=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},c=void 0,d={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",title:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/docs/learn-crowdloans",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crowdloans.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1677603716,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"},next:{title:"Parachains FAQ",permalink:"/docs/learn-parachains-faq"}},p={},u=[{value:"Crowdloan Campaigns vs Parachain Auctions",id:"crowdloan-campaigns-vs-parachain-auctions",level:2},{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2},{value:"Contributing to Crowdloans",id:"contributing-to-crowdloans",level:3},{value:"Withdraw Crowdloaned Tokens",id:"withdraw-crowdloaned-tokens",level:3}],h={toc:u};function m(a){var t=a.components,l=(0,o.Z)(a,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot allows parachains to source tokens\nfor their parachain bids in a decentralised crowdloan."),(0,i.kt)("admonition",{title:"Contributing to a crowdloan",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are here for guidance on how to contribute for a crowdloan, watch the video below or read\nthis\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama"},"support article on crowdloans"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/AA9mPANmzmU"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",alt:"Crowdloans on Polkadot JS"}))),(0,i.kt)("admonition",{title:"Testing on Rococo",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on Rococo,\nplease see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"))),(0,i.kt)("h2",{id:"crowdloan-campaigns-vs-parachain-auctions"},"Crowdloan Campaigns vs Parachain Auctions"),(0,i.kt)("p",null,"It is important to recognize that starting a crowdloan campaign is ",(0,i.kt)("strong",{parentName:"p"},"optional")," for participating in\na parachain slot auction. The parachain slot auction can also be won directly through self-funding\nwithout community involvement. To reiterate, crowdloan campaigns are just one of the means to win\nauctions, which allow the community to participate in a trustless and permissionless way."),(0,i.kt)("p",null,"Let's look at a scenario where Project A is hoping to gain a parachain slot on\nPolkadot, but they don't have enough tokens to\nbid directly to win the parachain auction. Project A could benefit from starting a new crowdloan\ncampaign to help secure a parachian slot. Crowdloans are trustless and are supported natively on\nPolkadot, allowing the community to bond their\ntokens on Project A's behalf for the entire parachain lease duration. This will allow Project A to\ncompete with projects that may have access to greater capital, given the project has sufficient\ncommunity support. In return, the community contributors are rewarded by the projects that win the\nparachain slot, which would typically compensate for the opportunity cost of bonding their tokens\nfor the lease duration."),(0,i.kt)("p",null,"On the other hand, let's say Project B, which is more established and has access to capital, is\nhoping to secure a parachain slot through self-funding. Project B is not relying on any community\nfunding (at least via the crowdloan mechanism), so they will have to determine how much funding they\ncan allocate towards winning a slot."),(0,i.kt)("p",null,"Project B is in full control of how much they are ultimately willing to contribute towards their\ngoal of gaining a parachain slot. Project B need not work on coming up with a rewards model for\ncommunity contributors like Project A. In contrast, crowdloan campaigns are beneficial for projects\nthat have access to limited capital but have strong community support. They are also beneficial for\nprojects that are able to successfully bid to win the auction with self-funding, but are looking for\na mechanism to bootstrap their community and get noticed by the key actors in the ecosystem."),(0,i.kt)("p",null,"It is publicly visible on-chain whether or not a project is bidding directly or through a crowdloan\ncampaign. More details regarding the process of creating and executing a crowdloan campaign are\nprovided below."),(0,i.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,i.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot by depositing a\nspecified number of tokens. A campaign is configured as a range of slots (i.e. the duration of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," will bid for), a cap, and a duration. The duration can last over\nseveral auctions as long as the range of slots matches those of the auction (i.e. the first lease\nperiod of the crowdloan is the same or bigger than that of the auction). This means that a team will\nnot need to restart the campaign just because they do not secure a slot on their first attempt."),(0,i.kt)("admonition",{title:"Crowdloan Submission Deposit Required",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order to create a new crowdloan campaign, your account must have\n500 DOT transferrable which will be reserved\nfor the duration of the crowdloan")),(0,i.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A crowdloan campaign can start well before the auction slot is opened.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," if the cap is not reached.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One way of calculating the ending block number is adding: ",(0,i.kt)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"y")," is the current block number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,i.kt)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),". The last slot must\nalso be within that range.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will\nbe returned to you."))))),(0,i.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once the\ncrowdloan is live, ",(0,i.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as the\nparachain's runtime. Of course, once the parachain is running it can always change via runtime\nupgrades (as determined through its own local governance)."),(0,i.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,i.kt)("h3",{id:"contributing-to-crowdloans"},"Contributing to Crowdloans"),(0,i.kt)("admonition",{title:"Minimum Crowdloan Contribution",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The minimum balance for contributions for a crowdloan campaign is currently set to\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}),".\n","\nThis is in an attempt to make crowdloans as accessible as possible while maintaining a balance to\njustify the use of the network's resources.")),(0,i.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,i.kt)("admonition",{title:"Do not send Crowdloan contributions directly to the Parachain address",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a campaign is\nidentified by an index, not by address. ","*","*","Never transfer tokens to an address in support of a\ncampaign.")),(0,i.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,i.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,i.kt)("h3",{id:"withdraw-crowdloaned-tokens"},"Withdraw Crowdloaned Tokens"),(0,i.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,i.kt)("li",{parentName:"ul"},"If the campaign was unsuccessful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"crowdloan.contribute")," extrinsic is trustless"),(0,i.kt)("p",{parentName:"admonition"},"Contributing to a crowdloan through Polkadot JS Apps (which uses ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdloan.contribute")," extrinsic)\nguarantees that you receive your tokens after the campaign ends. If you intend to make contributions\nthrough other websites and custodial service providers like central exchanges, review their terms\nand conditions thoroughly and assess the risks associated.")),(0,i.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. This can be done through the permissionless ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdloan.refund")," extrinsic available on\nPolkadot JS Apps > Developer > Extrinsics page, by specifying the parachain ID. This extrinsic may\nneed to be issued multiple times, if the list of contributors is too long. All contributions must be\nreturned before the crowdloan is entirely deleted from the system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowdloan refund",src:e(72239).Z,width:"1440",height:"552"})),(0,i.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,i.kt)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"crowdloan dashboard",src:e(30931).Z,width:"2328",height:"1540"})),(0,i.kt)("p",null,"Furthermore, check out this video on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}m.isMDXComponent=!0},72239:(a,t,e)=>{"use strict";e.d(t,{Z:()=>n});const n=e.p+"assets/images/crowdloan-refund-a452b6b303e27c25b3e87c42577a9265.png"},30931:(a,t,e)=>{"use strict";e.d(t,{Z:()=>n});const n=e.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"},95856:()=>{},46601:()=>{}}]);