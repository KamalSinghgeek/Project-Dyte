"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[74582],{14127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"build-pre-call-ui/build-your-own/initial-code-skeleton","title":"Basic structure","description":"What are we building?","source":"@site/docs/rn-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/initial-code-skeleton","permalink":"/react-native/build-pre-call-ui/build-your-own/initial-code-skeleton","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Basic structure","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"DyteSetupScreen","permalink":"/react-native/build-pre-call-ui/default-setup-screen"},"next":{"title":"Edit user name","permalink":"/react-native/build-pre-call-ui/build-your-own/edit-user-name"}}');var r=n(74848),s=n(28453);n(81398);const o={title:"Basic structure",sidebar_position:1},l=void 0,a={},c=[{value:"What are we building?",id:"what-are-we-building",level:2},{value:"File: Meeting.tsx",id:"file-meetingtsx",level:3},{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"what-are-we-building",children:"What are we building?"}),"\n",(0,r.jsx)(t.p,{children:"We are deconstructing the default setup screen."}),"\n",(0,r.jsx)(t.p,{children:"At the end of this group of docs, we should have the following screen built using low level components."}),"\n",(0,r.jsx)("img",{src:"/static/guides/build-pre-call-ui/skeleton-page/meeting-precall.png",width:"1280",height:"720",alt:"Meeting Precall post skeleton changes",className:"mb-4"}),"\n",(0,r.jsx)(t.p,{children:"Let's put a basic skeleton and the initial boilerplate code."}),"\n",(0,r.jsx)(t.h3,{id:"file-meetingtsx",children:"File: Meeting.tsx"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useDyteMeeting } from '@dytesdk/react-native-core';\r\nimport { DyteSetupScreen } from '@dytesdk/react-native-ui-kit';\r\nimport type DyteClient from '@dytesdk/web-core';\r\nimport { useEffect, useState } from 'react';\r\nimport { View } from 'react-native';\r\nimport { CustomStates, SetState } from './types';\r\nimport CustomMeetingPreview from './CustomMeetingPreview';\r\n\r\nfunction MyMeeting() {\r\n  const { meeting } = useDyteMeeting();\r\n  const roomState = useDyteSelector((m) => m.self.roomState);\r\n\r\n  return (\r\n    <View style={{ height: '480px' }}>\r\n      {/* Our custom pre-call UI */}\r\n      {roomState === 'init' && <CustomMeetingPreview />}\r\n\r\n      {/* Essential components to play audio, show notifications etc */}\r\n      <DyteParticipantsAudio meeting={meeting} />\r\n      <DyteNotifications meeting={meeting} />\r\n      <DyteDialogManager meeting={meeting} />\r\n\r\n      {/* \r\n\r\n      For the sake of simplicty, the next couple of pages \r\n        will only talk about CustomMeetingPreview \r\n      \r\n      {roomState === 'joined' && <CustomInMeetingUI />}\r\n      {roomState === 'ended' && <CustomPostMeetingUI />)}\r\n      \r\n      */}\r\n    </View>\r\n  );\r\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useDyteMeeting } from '@dytesdk/react-native-core';\r\nimport { DyteButton, DyteText } from '@dytesdk/react-native-ui-kit';\r\nimport { View } from 'react-native';\r\n\r\nexport default function CustomMeetingPreview() {\r\n  const { meeting } = useDyteMeeting();\r\n  return (\r\n    <View>\r\n      <View>\r\n        <DyteText>Joining as {meeting.self.name}</DyteText>\r\n      </View>\r\n      <DyteButton\r\n        size=\"lg\"\r\n        onClick={async () => {\r\n          // Call join() to enter the meeting\r\n          await meeting.join();\r\n        }}\r\n      >\r\n        Join\r\n      </DyteButton>\r\n    </View>\r\n  );\r\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},81398:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(24967),r=n(96540);const s=e=>`import React, { useEffect } from 'react';\nimport { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';\nimport { provideDyteDesignSystem } from '@dytesdk/react-ui-kit';\nimport Custom from './meeting.tsx';\n\nconst initInProgress = {\n  value: false,\n};\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    if (initInProgress.value) return;\n    initInProgress.value = true;\n    initMeeting({\n      roomName: 'qplrfc-uuujcj',\n      authToken:\n        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    }).then((m) => {\n\n\n      // window.meeting = m;\n      m.meta.meetingStartedTimestamp = new Date();\n      m.participants.setMockParticipantCount(5, 5);\n      // m.recording.recordingState = 'RECORDING';\n      const theme = document.getElementsByTagName('html')[0].dataset['theme'];\n      initInProgress.value = false;\n      provideDyteDesignSystem(document.body, {\n        theme: "${e}",\n      });\n      document.getElementsByTagName("html")[0].classList.remove("dark");\n      document.getElementsByTagName("html")[0].classList.remove("light");\n      document.getElementsByTagName("html")[0].classList.add("${e}");\n\n      HTMLAudioElement.prototype.play = function() {};\n      window.tailwind.config.darkMode = 'selector';\n    });\n  }, []);\n\n\n  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">\n    <DyteProvider value={meeting}><Custom /></DyteProvider>\n    </div>\n  );\n}`;var o=n(33257),l=n(59047);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}const d=(e,t,n,i={})=>"react-ts"==e?{files:{"/App.tsx":s(t),"/meeting.tsx":n},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(i)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":n,"/src/app/app.module.ts":"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\nimport { DyteComponentsModule } from '@dytesdk/angular-ui-kit';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, DyteComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(i)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":n},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},u=(e,t)=>{let n=[];return e.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"highlight",line:t})})),t.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"hide",line:t})})),n},p=e=>"light"===e?l.Zw:l.iU;function g({file:e,files:t={},framework:n="react-ts",entry:s,highlight:l=[],additionalDecorators:a=[],hide:g=[],minHeight:f="480px"}){const{colorMode:h}=(0,o.G)(),y=d(n,h,null!=e?e:"",t),w=m(n),x=[...a,...u(l,g)],[v,b]=(0,r.useState)(0===x.length);return(0,r.useEffect)((()=>{const e=()=>{0!==x.length&&1==v&&b(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[x.length,v]),r.createElement(i.l5,{template:n,customSetup:{dependencies:c({},w)},theme:p(h),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files},r.createElement("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},r.createElement("span",null,"LIVE EDITOR"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},r.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),r.createElement("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4"},r.createElement("div",{onClick:e=>{e.stopPropagation(),b(!0)},className:"cursor-text"},v?r.createElement(i.cW,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):r.createElement(i.R8,{className:"code-viewer",initMode:"immediate",decorators:x,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})),r.createElement(i.G5,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);