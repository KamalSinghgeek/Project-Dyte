"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[34347],{78447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"local-user/screen-share-iOS-guide","title":"Sharing screen on iOS","description":"This document explains how to setup screen sharing on a Flutter iOS App using Dyte SDK","source":"@site/docs/flutter-core/local-user/screen-share-iOS-guide.mdx","sourceDirName":"local-user","slug":"/local-user/screen-share-iOS-guide","permalink":"/flutter-core/local-user/screen-share-iOS-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/flutter-core/local-user/screen-share-iOS-guide.mdx","tags":[{"inline":true,"label":"flutter-core","permalink":"/flutter-core/tags/flutter-core"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":12,"frontMatter":{"title":"Sharing screen on iOS","sidebar_position":12,"tags":["flutter-core"]},"sidebar":"tutorialSidebar","previous":{"title":"Media Permissions","permalink":"/flutter-core/local-user/manage-permissions"},"next":{"title":"Room Metadata","permalink":"/flutter-core/room-metadata"}}');var r=n(74848),i=n(28453);const o={title:"Sharing screen on iOS",sidebar_position:12,tags:["flutter-core"]},a=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Add a new Broadcast Upload Extension to your project.",id:"add-a-new-broadcast-upload-extension-to-your-project",level:3},{value:"Setup app groups",id:"setup-app-groups",level:3},{value:"Setup SampleHandler",id:"setup-samplehandler",level:3},{value:"Modify Info.plist",id:"modify-infoplist",level:3},{value:"Start the Screenshare",id:"start-the-screenshare",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This document explains how to setup screen sharing on a Flutter iOS App using Dyte SDK"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Add a new Broadcast Upload Extension to your project."}),"\n",(0,r.jsx)(t.li,{children:"Setup app groups"}),"\n",(0,r.jsx)(t.li,{children:"Have your SampleHandler class initialize DyteBroadcastHandler and proxy a few methods."}),"\n",(0,r.jsx)(t.li,{children:"Update Info.plist"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"add-a-new-broadcast-upload-extension-to-your-project",children:"Add a new Broadcast Upload Extension to your project."}),"\n",(0,r.jsxs)(t.p,{children:["Add a Broadcast Upload Extension through ",(0,r.jsx)(t.code,{children:"File"})," -> ",(0,r.jsx)(t.code,{children:"New"})," -> ",(0,r.jsx)(t.code,{children:"Target"}),".\r\nChoose ",(0,r.jsx)(t.code,{children:"iOS"})," -> ",(0,r.jsx)(t.code,{children:"Broadcast Upload Extension"})," and fill out the required information for your extension and click ",(0,r.jsx)(t.code,{children:"Finish"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"meeting UI screenshot with labeled parts",src:n(56857).A+"",width:"1474",height:"1052"}),"\r\n",(0,r.jsx)(t.img,{alt:"meeting UI screenshot with labeled parts",src:n(1428).A+"",width:"1474",height:"1052"})]}),"\n",(0,r.jsx)(t.h3,{id:"setup-app-groups",children:"Setup app groups"}),"\n",(0,r.jsx)(t.p,{children:"Add your extension to an app group by going to your extension's target in the project; in the Signings & Capabilities tab, click the + button in the top left and add App Groups. If you haven't done so already, add App Groups to your main app as well, ensuring that the App Group identifier is the same for both."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"meeting UI screenshot with labeled parts",src:n(41350).A+"",width:"1480",height:"1050"}),"\r\n",(0,r.jsx)(t.img,{alt:"meeting UI screenshot with labeled parts",src:n(50608).A+"",width:"1480",height:"1050"})]}),"\n",(0,r.jsx)(t.h3,{id:"setup-samplehandler",children:"Setup SampleHandler"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Place the ",(0,r.jsx)(t.code,{children:"DyteSampleHandler.swift"})," file present ",(0,r.jsx)(t.a,{href:"https://github.com/dyte-io/iOS-ScreenShare/blob/main/DyteSampleHandler.swift",children:"here"})," in the ",(0,r.jsx)(t.code,{children:"ios/<screenshare-folder>/"})," folder in your flutter project."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:"SampleHandler.swift"})," file or replace the contents of the file if already present in the same ",(0,r.jsx)(t.code,{children:"ios/<screenshare-folder>/"})," to look something like this:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"\r\nimport ReplayKit\r\n\r\nclass SampleHandler: DyteSampleHandler {\r\n\r\n}\r\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"modify-infoplist",children:"Modify Info.plist"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure ",(0,r.jsx)(t.strong,{children:"both of them"})," (App and Extension Info.plist) contains these keys"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    <key>RTCAppGroupIdentifier</key>\r\n\t<string>(name of the group)</string>\r\n\t<key>RTCScreenSharingExtension</key>\r\n\t<string>(Bundle Identifier)</string>\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Info.plist screenshot",src:n(25821).A+"",width:"1862",height:"300"})}),"\n",(0,r.jsx)(t.h3,{id:"start-the-screenshare",children:"Start the Screenshare"}),"\n",(0,r.jsxs)(t.p,{children:["Call the method ",(0,r.jsx)(t.code,{children:"enableScreenshare()"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"dyteClient.localUser.enableScreenshare()\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"screenshot",src:n(73720).A+"",width:"590",height:"1280"}),"\r\n",(0,r.jsx)(t.img,{alt:"screenshot",src:n(72788).A+"",width:"3418",height:"1804"})]}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("title",{children:"Flutter Core Sharing screen on iOS"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},56857:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-0-a201a4ac7eaace77756cc6e89ba578c7.png"},1428:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-01-938876034f3e175b56c37e767fda4750.png"},41350:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-03-b0569240a9c0a32a0d453535c193cd17.png"},50608:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-1-4ed0ad6d5ff14cfcf9c1fd7fd93979a4.png"},73720:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-app-267a40a208c4fd0ca2cdd9f65f241788.png"},72788:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-demo-8bca0fa4bcf0188616c9dd85d5c8c2e6.png"},25821:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ios-setup-info-cbd73ef2ff5ff087e8fb89ae94ca3c93.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);