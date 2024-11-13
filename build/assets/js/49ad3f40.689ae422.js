"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69530],{45392:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Introduction","title":"Introduction","description":"The Dyte Core SDK is designed to provide you with an easy way to incorporate live video, voice, livestream and chat capabilities","source":"@site/docs/android-core/Introduction.mdx","sourceDirName":".","slug":"/Introduction","permalink":"/android-core/Introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/Introduction.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Introduction","sidebar_position":3,"sidebar_class_name":"module-seperation"},"sidebar":"tutorialSidebar","previous":{"title":"Waiting Room","permalink":"/android-core/pre-call/waiting-room"},"next":{"title":"Introduction","permalink":"/android-core/local-user/introduction"}}');var o=i(74848),r=i(28453);i(55111);const s={title:"Introduction",sidebar_position:3,sidebar_class_name:"module-seperation"},a="Introduction",d={},c=[{value:"Why Core SDK?",id:"why-core-sdk",level:2},{value:"Utility Modules",id:"utility-modules",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,o.jsx)(t.p,{children:"The Dyte Core SDK is designed to provide you with an easy way to incorporate live video, voice, livestream and chat capabilities\r\ninto your Android apps. The Core SDK acts as a data-only layer. It provides simple APIs offering high-level primitives and\r\nabstracting away complex media and networking optimizations."}),"\n",(0,o.jsx)(t.h2,{id:"why-core-sdk",children:"Why Core SDK?"}),"\n",(0,o.jsxs)(t.p,{children:["The Core SDK was developed with a user-friendly approach to eliminate the complexity of managing streams. Unlike traditional\r\nSDKs that require knowledge of WebRTC functioning, Dyte's Core SDK provides a simple API that abstracts out the complexity,\r\nmaking it easier for developers to use. For instance, enabling video with Dyte's Core SDK is as easy as calling\r\n",(0,o.jsx)(t.code,{children:"meeting.localUser.enableVideo()"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"utility-modules",children:"Utility Modules"}),"\n",(0,o.jsx)(t.p,{children:"The Core SDK includes various modules for in-call utilities like chat, polls, and recording that enable building a UI on top of\r\nit. The following are the core SDK modules:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.localUser"}),": This consists of properties and methods corresponding to the current (local) user, such as enabling or\r\ndisabling their audio and video, getting a list of media devices or changing the device, or sharing your mobile screen."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.participants"}),": Use this module to get useful information about the other participants that are present in the\r\nmeeting. A host can use this module for access control. For example, the host can mute or kick a participant."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.chat"}),": It provides the methods to integrate chat features such as sending/receiving text, images, and files."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.polls"}),": Meetings can have polls. This module lets you perform actions related to polls, that is create and manage\r\na poll within a meeting."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.recording"}),": When a meeting needs to be recorded, this module can be used. It lets you start or stop a recording,\r\nand get the current status of an ongoing recording."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.meta"}),": This object consists of all the metadata related to the current meeting, such as the title, the timestamp\r\nof when it started, and more."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"meeting.plugins"}),": Provides the list of available plugins and active plugins. Use this module to enable or disable plugins as needed."]}),"\n"]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("title",{children:"Android Core Introduction"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},55111:(e,t,i)=>{i.d(t,{Ay:()=>c,RM:()=>a});var n=i(74848),o=i(28453),r=i(32985),s=i(97715);const a=[];function d(e){const{Card:t,CardSection:i}={...(0,o.R)(),...e.components};return t||l("Card",!0),i||l("CardSection",!0),(0,n.jsxs)(i,{id:"Quickstart",title:"Quickstart",description:"Learn how to integrate live video and voice, live stream, and chat experiences into your product.",children:[(0,n.jsx)(t,{title:"Live Video",icon:(0,n.jsx)(r.kz4,{}),to:"/guides/live-video/intro-video-conf",description:"Add live video functionality to your web, mobile, and desktop applications."}),(0,n.jsx)(t,{title:"Voice Conferencing",icon:(0,n.jsx)(s.isd,{}),to:"/guides/voice-conf/intro-voice-conf",description:"Integrate reliable voice calling experiences into your product."}),(0,n.jsx)(t,{title:"Interactive Livestreaming",icon:(0,n.jsx)(s.Ba9,{}),to:"/guides/livestream/livestream-overview",description:"Get started with interactive livestreaming and broadcast to a large audience"})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);