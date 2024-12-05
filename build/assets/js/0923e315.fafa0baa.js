"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[4385],{55459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"This quickstart shows how to use Dyte\'s UI Kit prebuilt components to add live","source":"@site/docs/ui-kit/quickstart.mdx","sourceDirName":".","slug":"/quickstart","permalink":"/ui-kit/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ui-kit/quickstart.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/ui-kit/"},"next":{"title":"Design System","permalink":"/ui-kit/design-system"}}');var i=n(74848),s=n(28453),o=n(20633),l=n(81398);const a={sidebar_position:3},c="Quickstart",d={},u=[{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Version",id:"version",level:3},{value:"Step 2: Get Started with Dyte Prebuilt Components",id:"step-2-get-started-with-dyte-prebuilt-components",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Head:n,TabItem:r,Tabs:a}=t;return n||h("Head",!0),r||h("TabItem",!0),a||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,i.jsx)(t.p,{children:"This quickstart shows how to use Dyte's UI Kit prebuilt components to add live\r\nvideo and audio to your web applications with minimal coding and a variety of\r\nmeeting UI customization options."}),"\n",(0,i.jsxs)(t.p,{children:["For getting started quickly, you can use our\r\n",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples#samples",children:"sample code"}),". You can clone\r\nand run a sample application from the\r\n",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples",children:"HTML UI Kit GitHub repository"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure you've read the ",(0,i.jsx)(t.a,{href:"/getting-started",children:"Getting Started with Dyte"})," topic\r\nand completed the following steps:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Dyte Developer Account"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"/api/?v=v2#/operations/create_meeting",children:"Dyte Meeting"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/api/?v=v2#/operations/add_participant",children:"Add Participant"})," to the meeting"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-install-the-sdk",children:"Step 1: Install the SDK"}),"\n",(0,i.jsxs)(t.p,{children:["Since the UI Kit is built on top of the Core SDK, you must install the\r\n",(0,i.jsx)(t.code,{children:"web-core"})," package along with the ",(0,i.jsx)(t.code,{children:"ui-kit"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"There are two ways to use UI Kit in your project, according to your project\r\nsetup."}),"\n",(0,i.jsx)(t.p,{children:"You can install the SDK using CDN, npm, or Yarn."}),"\n",(0,i.jsxs)(a,{groupId:"cdn-npm",children:[(0,i.jsxs)(r,{value:"cdn",label:"CDN",default:!0,children:[(0,i.jsxs)(t.p,{children:["To set up UI Kit components and web-core, add the following script tags inside\r\nthe ",(0,i.jsx)(t.code,{children:"<head />"})," tag."]}),(0,i.jsx)(o.OV,{}),(0,i.jsx)(t.p,{children:"You can also import utilities or any other export from CDN:"}),(0,i.jsx)(o.tb,{})]}),(0,i.jsxs)(r,{value:"npm",label:"npm",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install @dytesdk/ui-kit @dytesdk/web-core\n"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]}),(0,i.jsxs)(r,{value:"yarn",label:"yarn",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add @dytesdk/ui-kit @dytesdk/web-core\n"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]})]}),"\n",(0,i.jsx)(t.h3,{id:"version",children:"Version"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"@dytesdk/ui-kit"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"@dytesdk/web-core"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fweb-core",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-get-started-with-dyte-prebuilt-components",children:"Step 2: Get Started with Dyte Prebuilt Components"}),"\n",(0,i.jsx)(t.p,{children:"Here's a series of steps that you need to perform:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Load the Dyte component."}),"\n",(0,i.jsx)(t.li,{children:"Initialize the Dyte client."}),"\n",(0,i.jsxs)(t.li,{children:["Call the ",(0,i.jsx)(t.code,{children:"init()"})," method and pass the ",(0,i.jsx)(t.code,{children:"authToken"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"authToken"})}),(0,i.jsxs)(t.td,{children:["After you've created the meeting, add each participant to the meeting using the ",(0,i.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"}),". The API response contains the authToken."]})]})})]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Pass the meeting object to UI Kit, which will use it to retrieve meeting\r\ninformation and display it on the user interface."}),"\n",(0,i.jsx)(t.p,{children:"The meeting object serves as the link between web-core and UI Kit, allowing\r\nthem to communicate with one another. Once the UI Kit has the meeting object,\r\nit can join and leave meetings, and so on."}),"\n"]}),"\n"]}),"\n","\n",(0,i.jsx)(l.A,{highlight:[{start:10,end:10}],hide:[{start:1,end:8}],framework:"static",file:"<head>\n<script type=\"module\">\n    import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit@latest/loader/index.es2017.js';\n    defineCustomElements();\n<\/script>\n\x3c!-- Import Web Core via CDN too --\x3e\n\x3c!-- <script src=\"https://cdn.dyte.in/core/dyte.js\"><\/script> --\x3e\n</head>\n<body>\n<dyte-meeting id=\"my-meeting\"></dyte-meeting>\n<script>\n  const init = async () => {\n    const meeting = await DyteClient.init({\n      // Add your own auth token here\n      authToken: yourAuthToken,\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    });\n\n    document.getElementById('my-meeting').showSetupScreen = false;\n    document.getElementById('my-meeting').meeting = meeting;\n  };\n\ninit();\n<\/script>\n</body>\n"}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"UI Kit Quickstart"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81398:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(24967),i=n(96540);const s=e=>`import React, { useEffect } from 'react';\nimport { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';\nimport { provideDyteDesignSystem } from '@dytesdk/react-ui-kit';\nimport Custom from './meeting.tsx';\n\nconst initInProgress = {\n  value: false,\n};\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    if (initInProgress.value) return;\n    initInProgress.value = true;\n    initMeeting({\n      roomName: 'qplrfc-uuujcj',\n      authToken:\n        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    }).then((m) => {\n\n\n      // window.meeting = m;\n      m.meta.meetingStartedTimestamp = new Date();\n      m.participants.setMockParticipantCount(5, 5);\n      // m.recording.recordingState = 'RECORDING';\n      const theme = document.getElementsByTagName('html')[0].dataset['theme'];\n      initInProgress.value = false;\n      provideDyteDesignSystem(document.body, {\n        theme: "${e}",\n      });\n      document.getElementsByTagName("html")[0].classList.remove("dark");\n      document.getElementsByTagName("html")[0].classList.remove("light");\n      document.getElementsByTagName("html")[0].classList.add("${e}");\n\n      HTMLAudioElement.prototype.play = function() {};\n      window.tailwind.config.darkMode = 'selector';\n    });\n  }, []);\n\n\n  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">\n    <DyteProvider value={meeting}><Custom /></DyteProvider>\n    </div>\n  );\n}`;var o=n(33257),l=n(59047);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}const d=(e,t,n,r={})=>"react-ts"==e?{files:{"/App.tsx":s(t),"/meeting.tsx":n},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(r)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":n,"/src/app/app.module.ts":"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\nimport { DyteComponentsModule } from '@dytesdk/angular-ui-kit';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, DyteComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(r)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":n},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]},u=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},p=(e,t)=>{let n=[];return e.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"highlight",line:t})})),t.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"hide",line:t})})),n},m=e=>"light"===e?l.Zw:l.iU;function h({file:e,files:t={},framework:n="react-ts",entry:s,highlight:l=[],additionalDecorators:a=[],hide:h=[],minHeight:f="480px"}){const{colorMode:g}=(0,o.G)(),y=d(n,g,null!=e?e:"",t),j=u(n),b=[...a,...p(l,h)],[x,v]=(0,i.useState)(0===b.length);return(0,i.useEffect)((()=>{const e=()=>{0!==b.length&&1==x&&v(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[b.length,x]),i.createElement(r.l5,{template:n,customSetup:{dependencies:c({},j)},theme:m(g),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files},i.createElement("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},i.createElement("span",null,"LIVE EDITOR"),i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},i.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),i.createElement("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4"},i.createElement("div",{onClick:e=>{e.stopPropagation(),v(!0)},className:"cursor-text"},x?i.createElement(r.cW,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):i.createElement(r.R8,{className:"code-viewer",initMode:"immediate",decorators:b,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})),i.createElement(r.G5,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})))}},20633:(e,t,n)=>{n.d(t,{hB:()=>a,OV:()=>d,tb:()=>u,vE:()=>l,$r:()=>c});var r=n(96540),i=n(11756);const s={};async function o({pkg:e="ui-kit"}){if(void 0!==s[e])return s[e];const t=await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),n=(await t.json())["dist-tags"].latest;return s[e]=n,n}const l=({pkg:e})=>{const[t,n]=(0,r.useState)("+");return(0,r.useEffect)((()=>{const t=JSON.stringify({maven:e});fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:t}).then((e=>e.json())).then((e=>{var t;return n(null!==(t=e.latestVersion)&&void 0!==t?t:"+")}))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"groovy"},`dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:${e}:${t}'\n}`))},a=({pkg:e,path:t})=>{const[n,s]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{fetch(`https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${t}/`,{method:"GET",body:null}).then((e=>e.json())).then((e=>s(e[e.length-1].name)))}),[]),r.createElement("div",null,r.createElement(i.A,{language:"ruby"},`pod '${e}' ${n?`, '${n}'`:""}`))},c=()=>{const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"web-core"});t(`-${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`)},d=()=>{const[e,t]=(0,r.useState)(""),[n,s]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"web-core"});t(`-${e}`);const n=await o({pkg:"ui-kit"});s(`@${n}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`)},u=({modules:e=["provideDyteDesignSystem","extendConfig,"]})=>{const[t,n]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await o({pkg:"ui-kit"});n(`@${e}`)}()}),[]),r.createElement(i.A,{language:"html"},`<head>\n  <script type="module">\n    import {\n      ${e.join(", ")}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`)}},74866:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(20053),s=n(12075),o=n(86850),l=n(15418),a=n(90062),c=n(65354),d=n(54982);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var p=n(1589),m=n(63581),h=n(33257);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y({children:e}){return r.createElement("div",{className:(0,i.A)(u.playgroundHeader)},e)}function j(){return r.createElement("div",null,"Loading...")}function b(){return r.createElement(r.Fragment,null,r.createElement(y,null,r.createElement(l.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),r.createElement("div",{className:u.playgroundPreview},r.createElement(c.A,{fallback:r.createElement(j,null)},(()=>r.createElement(r.Fragment,null,r.createElement(o.pA,null),r.createElement(o.p1,null))))))}function x(){const e=(0,s.A)();return r.createElement(o.w,{key:String(e),className:(0,i.A)(u.playgroundEditor,"border border-secondary-800 !pb-4")})}function v(){return r.createElement("div",{className:"relative"},r.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},r.createElement(l.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},r.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),r.createElement(x,null))}const w={value:!1};function k(e){var{children:t,transformCode:n}=e,s=g(e,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,a.A)(),{liveCodeBlock:{playgroundPosition:c}}=l,y=(0,d.A)(),[j,x]=(0,p.useDyteClient)(),{colorMode:k}=(0,h.G)();return(0,r.useEffect)((()=>{w.value||(w.value=!0,x({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,m.provideDyteDesignSystem)(document.body,{theme:t}),w.value=!1})))}),[]),(0,r.useEffect)((()=>{(0,m.provideDyteDesignSystem)(document.body,{theme:k})}),[k]),r.createElement("div",{className:(0,i.A)(u.playgroundContainer,"!rounded-none !shadow-none")},r.createElement(p.DyteProvider,{value:j},r.createElement(o.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:y},s),"top"===c?r.createElement(r.Fragment,null,r.createElement(b,null),r.createElement(v,null)):r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(b,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(96540),i=n(63581),s=n(1589);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({React:r},r,i,s,{Row:function(e){var{children:t,style:n={}}=e,i=a(e,["children","style"]);return r.createElement("div",l({style:l({display:"flex",gap:8,flexWrap:"wrap"},n)},i),t)},Col:function(e){var{children:t,style:n={}}=e,i=a(e,["children","style"]);return r.createElement("div",l({style:l({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},i),t)},Center:function(e){var{children:t,style:n}=e,i=a(e,["children","style"]);return r.createElement("div",l({style:l({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},i),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);