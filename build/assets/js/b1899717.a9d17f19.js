"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[30949],{26363:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"local-user/manage-permissions","title":"Media Permissions","description":"Learn how to manage permissions in your Android application for a secure and controlled user experience with Fleet Stack Documentation.","source":"@site/docs/android-core/local-user/manage-permissions.mdx","sourceDirName":"local-user","slug":"/local-user/manage-permissions","permalink":"/android-core/local-user/manage-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/local-user/manage-permissions.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"local-user","permalink":"/android-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/android-core/tags/self"},{"inline":true,"label":"self events","permalink":"/android-core/tags/self-events"}],"version":"current","lastUpdatedAt":1731695156000,"sidebarPosition":4,"frontMatter":{"title":"Media Permissions","description":"Learn how to manage permissions in your Android application for a secure and controlled user experience with Fleet Stack Documentation.","sidebar_position":4,"tags":["android-core","local-user","self","self events"]},"sidebar":"tutorialSidebar","previous":{"title":"Manage Media Devices","permalink":"/android-core/local-user/manage-media-devices"},"next":{"title":"Participant Types","permalink":"/android-core/participants/"}}');var r=i(74848),s=i(28453);const t={title:"Media Permissions",description:"Learn how to manage permissions in your Android application for a secure and controlled user experience with Fleet Stack Documentation.",sidebar_position:4,tags:["android-core","local-user","self","self events"]},a="Media Permissions",d={},c=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"media-permissions",children:"Media Permissions"})}),"\n",(0,r.jsx)(n.p,{children:"To get media permissions (audio/video) for localUser we can do as follows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val isCameraPermissionGranted\r\n  = meeting.localUser.isCameraPermissionGranted\r\nval isMicrophonePermissionGranted\r\n  = meeting.localUser.isMicrophonePermissionGranted\n"})}),"\n",(0,r.jsx)(n.p,{children:"Similarly to listen to callbacks regarding media permissions once user joins\r\nthe meeting"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\r\n    override fun onMeetingRoomJoinedWithoutCameraPermission() {\r\n      // when meeting room is joined without camera permission\r\n    }\r\n\r\n    override fun onMeetingRoomJoinedWithoutMicPermission() {\r\n      // when meeting room is joined without microphone permission\r\n    }\r\n});\n"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("title",{children:"Android Core Media Permissions"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to manage permissions in your Android application for a secure and controlled user experience with Fleet Stack Documentation."})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var o=i(96540);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);