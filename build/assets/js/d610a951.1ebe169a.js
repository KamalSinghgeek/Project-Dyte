"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[22365],{58951:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var r=n(74848),i=n(28453),s=n(20633);const o=[{value:"Quickstart",id:"quickstart",level:2},{value:"Before getting started",id:"before-getting-started",level:2},{value:"Step 1: Install Dyte SDK packages",id:"step-1-install-dyte-sdk-packages",level:2},{value:"Version",id:"version",level:3},{value:"Step 2: Prepare meeting object",id:"step-2-prepare-meeting-object",level:2},{value:"Step 3: Bring up the UI",id:"step-3-bring-up-the-ui",level:2},{value:"UI Kit",id:"ui-kit",level:3},{value:"Build your own UI",id:"build-your-own-ui",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{TabItem:n,Tabs:o}=t;return n||c("TabItem",!0),o||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)("span",{children:(0,r.jsxs)(t.p,{children:["This quickstart shows how to use Dyte's ",e.product," to your web\r\napplications with a variety of meeting UI customization options."]})}),"\n",(0,r.jsxs)(t.p,{children:["For getting started quickly, you can use our ",(0,r.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples#samples",children:"sample code"}),". You can clone\r\nand run a sample application from the ",(0,r.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples",children:"HTML UI Kit GitHub repository"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"before-getting-started",children:"Before getting started"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure you've a mechanism to get authToken from your server-side, which you would have received as part of ",(0,r.jsx)(t.a,{href:"/guides/live-video/build-live-video-app#step-2-add-participants",children:"Add Participant"})," call."]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-install-dyte-sdk-packages",children:"Step 1: Install Dyte SDK packages"}),"\n",(0,r.jsx)(t.p,{children:"To begin, install the following packages:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@dytesdk/web-core"}),": This core package powers video, voice, livestream and chat SDKs. This is a required package."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@dytesdk/ui-kit"}),": This package includes Dyte UI components which can be used with core to easily build your own UI, including a prebuilt UI component. You can skip installing this package if you wish to build your own UI from scratch."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You can install the SDKs using CDN, npm, or Yarn."}),"\n",(0,r.jsxs)(o,{groupId:"cdn-npm",children:[(0,r.jsxs)(n,{value:"cdn",label:"CDN",default:!0,children:[(0,r.jsxs)(t.p,{children:["To set up web-core and UI Kit components, add the following script tags inside\r\nthe ",(0,r.jsx)(t.code,{children:"<head />"})," tag."]}),(0,r.jsx)(s.OV,{}),(0,r.jsx)(t.p,{children:"You can also import utilities or any other export from CDN:"}),(0,r.jsx)(s.tb,{})]}),(0,r.jsx)(n,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install @dytesdk/web-core @dytesdk/ui-kit\n"})})}),(0,r.jsx)(n,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @dytesdk/web-core @dytesdk/ui-kit\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"version",children:"Version"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"@dytesdk/web-core"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fweb-core",children:(0,r.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"@dytesdk/ui-kit"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,r.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-prepare-meeting-object",children:"Step 2: Prepare meeting object"}),"\n",(0,r.jsx)(t.p,{children:"Here's a series of steps that you need to perform:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Fetch the ",(0,r.jsx)(t.code,{children:"authToken"})," from your server-side."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"{10}",children:"<body>\r\n  <script>\r\n    const get_auth_token = async () => {\r\n      // fetch('https://your-server/path-to-token');\r\n      return '<auth-token>';\r\n    };\r\n\r\n    const init = async () => {\r\n      // Fetch auth token from server side\r\n      const authToken = await get_auth_token();\r\n    };\r\n    init();\r\n  <\/script>\r\n</body>\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Call the ",(0,r.jsx)(t.code,{children:"DyteClient.init()"})," method from the ",(0,r.jsx)(t.code,{children:"web-core"})," package and pass the ",(0,r.jsx)(t.code,{children:"authToken"}),". This will establish the connection with the Dyte server. You should keep the returned ",(0,r.jsx)(t.code,{children:"meeting"})," object."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"{12-18}",children:"<body>\r\n  <script>\r\n    const get_auth_token = async () => {\r\n      // fetch('https://your-server/path-to-token');\r\n      return '{participant-auth-token}';\r\n    };\r\n\r\n    const init = async () => {\r\n      // Fetch auth token from server side\r\n      const authToken = await get_auth_token();\r\n\r\n      const meeting = await DyteClient.init({\r\n        authToken,\r\n        defaults: {\r\n          audio: true,\r\n          video: true,\r\n        },\r\n      });\r\n    };\r\n\r\n    init();\r\n  <\/script>\r\n</body>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now, you have established the connection with the Dyte meeting server\r\nsuccessfully."}),"\n",(0,r.jsx)(t.h2,{id:"step-3-bring-up-the-ui",children:"Step 3: Bring up the UI"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"meeting"})," object serves as the link between web-core and UI Kit, allowing them to communicate with one another. Once the UI Kit has the meeting object, it can join and leave meetings, and so on.\r\nDyte offers a UI Kit that is highly customizatble and uses the ",(0,r.jsx)(t.code,{children:"meeting"})," instance that you just created."]}),"\n",(0,r.jsx)(t.h3,{id:"ui-kit",children:"UI Kit"}),"\n",(0,r.jsxs)(t.p,{children:["A single ",(0,r.jsx)(t.code,{children:"<dyte-meeting />"})," component that is feature rich and renders a complete meeting UI and handles all events."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"{2,21}",children:"<body>\r\n  <dyte-meeting id=\"my-meeting\"></dyte-meeting>\r\n  <script>\r\n    const get_auth_token = async () => {\r\n      // fetch('https://your-server/path-to-token');\r\n      return '{participant-auth-token}';\r\n    };\r\n\r\n    const init = async () => {\r\n      // Fetch auth token from server side\r\n      const authToken = await get_auth_token();\r\n\r\n      const meeting = await DyteClient.init({\r\n        authToken,\r\n        defaults: {\r\n          audio: true,\r\n          video: true,\r\n        },\r\n      });\r\n\r\n      document.getElementById('my-meeting').meeting = meeting;\r\n    };\r\n\r\n    init();\r\n  <\/script>\r\n</body>\n"})}),"\n",(0,r.jsx)(t.h3,{id:"build-your-own-ui",children:"Build your own UI"}),"\n",(0,r.jsxs)(t.p,{children:["If you want more customizations, pick the components that are needed and build the UI that suits your need using low level APIs that our core SDK offers ",(0,r.jsx)(t.a,{href:"/web-core/",children:"here"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"{2,21}",children:"<body>\r\n  <div>\r\n    <dyte-grid id=\"my-grid\"></dyte-grid>\r\n    \x3c!--your own UI --\x3e\r\n    <div class=\"controlbar\">\r\n      \x3c!-- Your own components --\x3e\r\n      <button id=\"mic\">Toggle Mic</button>\r\n    </div>\r\n  </div>\r\n  <script>\r\n    const get_auth_token = async () => {\r\n      // fetch('https://your-server/path-to-token');\r\n      return '{participant-auth-token}';\r\n    };\r\n\r\n    const init = async () => {\r\n      // Fetch auth token from server side\r\n      const authToken = await get_auth_token();\r\n\r\n      const meeting = await DyteClient.init({\r\n        authToken,\r\n        defaults: {\r\n          audio: true,\r\n          video: true,\r\n        },\r\n      });\r\n\r\n      document.getElementById('my-grid').meeting = meeting;\r\n      document.getElementById('mic').addEventListener('click', (e) => {\r\n        if (meeting.self.audioEnabled) {\r\n          meeting.self.disableAudio();\r\n        } else {\r\n          meeting.self.enableAudio();\r\n        }\r\n      });\r\n    };\r\n\r\n    init();\r\n  <\/script>\r\n</body>\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"livestream/client-setup/javascript","title":"HTML","description":"Explore the setup of the Livestream client in JavaScript with Dyte. Follow our guide for effective JavaScript client setup.","source":"@site/docs/guides/livestream/client-setup/javascript.mdx","sourceDirName":"livestream/client-setup","slug":"/livestream/client-setup/javascript","permalink":"/guides/livestream/client-setup/javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/livestream/client-setup/javascript.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"HTML","sidebar_position":1,"description":"Explore the setup of the Livestream client in JavaScript with Dyte. Follow our guide for effective JavaScript client setup."},"sidebar":"tutorialSidebar","previous":{"title":"Angular","permalink":"/guides/livestream/client-setup/angular"},"next":{"title":"React","permalink":"/guides/livestream/client-setup/react"}}');var i=n(74848),s=n(28453),o=n(58951);const a={title:"HTML",sidebar_position:1,description:"Explore the setup of the Livestream client in JavaScript with Dyte. Follow our guide for effective JavaScript client setup."},l=void 0,c={},d=[...o.RM];function u(e){const{Head:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Ay,{product:"Livestream"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"HTML Guide"}),(0,i.jsx)("meta",{name:"description",content:"Explore the setup of the Livestream client in JavaScript with Dyte. Follow our guide for effective JavaScript client setup."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},20633:(e,t,n)=>{n.d(t,{hB:()=>l,OV:()=>d,tb:()=>u,vE:()=>a,$r:()=>c});var r=n(96540),i=n(11756);const s={};async function o({pkg:e="ui-kit"}){if(void 0!==s[e])return s[e];const t=await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),n=(await t.json())["dist-tags"].latest;return s[e]=n,n}const a=({pkg:e})=>{const[t,n]=(0,r.useState)("+");return(0,r.useEffect)((()=>{const t=JSON.stringify({maven:e});fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:t}).then((e=>e.json())).then((e=>{var t;return n(null!==(t=e.latestVersion)&&void 0!==t?t:"+")}))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"groovy"},`dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:${e}:${t}'\n}`))},l=({pkg:e,path:t})=>{const[n,s]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{fetch(`https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${t}/`,{method:"GET",body:null}).then((e=>e.json())).then((e=>s(e[e.length-1].name)))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"ruby"},`pod '${e}' ${n?`, '${n}'`:""}`))},c=()=>{const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"web-core"});t(`-${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`)},d=()=>{const[e,t]=(0,r.useState)(""),[n,s]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"web-core"});t(`-${e}`);const n=await o({pkg:"ui-kit"});s(`@${n}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`)},u=({modules:e=["provideDyteDesignSystem","extendConfig,"]})=>{const[t,n]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"ui-kit"});n(`@${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n    import {\n      ${e.join(", ")}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`)}},74866:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(20053),s=n(12075),o=n(86850),a=n(15418),l=n(90062),c=n(65354),d=n(54982);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var h=n(1589),p=n(63581),m=n(33257);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f({children:e}){return r.createElement("div",{className:(0,i.A)(u.playgroundHeader)},e)}function v(){return r.createElement("div",null,"Loading...")}function b(){return r.createElement(r.Fragment,null,r.createElement(f,null,r.createElement(a.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),r.createElement("div",{className:u.playgroundPreview},r.createElement(c.A,{fallback:r.createElement(v,null)},(()=>r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null))))))}function j(){const e=(0,s.A)();return r.createElement(o.w,{key:String(e),className:(0,i.A)(u.playgroundEditor,"border border-secondary-800 !pb-4")})}function x(){return r.createElement("div",{className:"relative"},r.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},r.createElement(a.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},r.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),r.createElement(j,null))}const k={value:!1};function w(e){var{children:t,transformCode:n}=e,s=y(e,["children","transformCode"]);const{siteConfig:{themeConfig:a}}=(0,l.A)(),{liveCodeBlock:{playgroundPosition:c}}=a,f=(0,d.A)(),[v,j]=(0,h.useDyteClient)(),{colorMode:w}=(0,m.G)();return(0,r.useEffect)((()=>{k.value||(k.value=!0,j({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,p.provideDyteDesignSystem)(document.body,{theme:t}),k.value=!1})))}),[]),(0,r.useEffect)((()=>{(0,p.provideDyteDesignSystem)(document.body,{theme:w})}),[w]),r.createElement("div",{className:(0,i.A)(u.playgroundContainer,"!rounded-none !shadow-none")},r.createElement(h.DyteProvider,{value:v},r.createElement(o.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:f},s),"top"===c?r.createElement(r.Fragment,null,r.createElement(b,null),r.createElement(x,null)):r.createElement(r.Fragment,null,r.createElement(x,null),r.createElement(b,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(96540),i=n(63581),s=n(1589);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({React:r},r,i,s,{Row:function(e){var{children:t,style:n={}}=e,i=l(e,["children","style"]);return r.createElement("div",a({style:a({display:"flex",gap:8,flexWrap:"wrap"},n)},i),t)},Col:function(e){var{children:t,style:n={}}=e,i=l(e,["children","style"]);return r.createElement("div",a({style:a({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},i),t)},Center:function(e){var{children:t,style:n}=e,i=l(e,["children","style"]);return r.createElement("div",a({style:a({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},i),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);