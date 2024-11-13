"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[96161],{79733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"chat/introduction","title":"Introducing chat","description":"Learn the basics of integrating Dyte\'s chat functionality into your iOS application \u2013 a step towards immersive real-time communication.","source":"@site/docs/ios-core/chat/introduction.mdx","sourceDirName":"chat","slug":"/chat/introduction","permalink":"/ios-core/chat/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/chat/introduction.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"chat","permalink":"/ios-core/tags/chat"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introducing chat","description":"Learn the basics of integrating Dyte\'s chat functionality into your iOS application \u2013 a step towards immersive real-time communication.","sidebar_position":1,"tags":["ios-core","chat"]},"sidebar":"tutorialSidebar","previous":{"title":"Waitlisted Participants","permalink":"/ios-core/participants/waitlisted-participants"},"next":{"title":"Sending a chat message","permalink":"/ios-core/chat/sending-a-chat-message"}}');var s=n(74848),r=n(28453);const a={title:"Introducing chat",description:"Learn the basics of integrating Dyte's chat functionality into your iOS application \u2013 a step towards immersive real-time communication.",sidebar_position:1,tags:["ios-core","chat"]},c="Introducing chat",o={},l=[];function d(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introducing-chat",children:"Introducing chat"})}),"\n",(0,s.jsxs)(t.p,{children:["The meeting chat object is stored in ",(0,s.jsx)(t.code,{children:"meeting.chat"}),", which has methods for sending and receiving messages. There are 3 types of messages that can be sent in chat - text messages, images, and files."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"meeting.chat.messages"})," array contains all the messages that have been sent\r\nin the chat. This is an array of objects, where each object is of type\r\n",(0,s.jsx)(t.code,{children:"DyteChatMessage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"We support three types of chat messages, they are as follows"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Text Message"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"class DyteTextMessage {\r\n  let userId: String\r\n  let displayName: String\r\n  let read: Bool\r\n  let pluginId: String?\r\n  let message: String\r\n  let time: String\r\n  let channelId: String? = null\r\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Image Message"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"class DyteImageMessage{\r\n  let userId: String\r\n  let displayName: String\r\n  let read: Bool\r\n  let pluginId: String?\r\n  let link: String\r\n  let time: String\r\n  let channelId: String? = null\r\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"File Message"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"class DyteFileMessage{\r\n  let userId: String\r\n  let displayName: String\r\n  let read: Bool\r\n  let pluginId: String?\r\n  let name: String\r\n  let time: String\r\n  let link: String\r\n  let size: Int64\r\n  let channelId: String? = null\r\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["All above objects are of type ",(0,s.jsx)(t.code,{children:"DyteChatMessage"})," along with their own class\r\nvariables."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);