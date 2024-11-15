"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[49261],{80973:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"chat/receiving-chat-messages","title":"Receiving chat messages","description":"Receive chat messages that have been sent in a meeting.","source":"@site/docs/react-web-core/chat/receiving-chat-messages.mdx","sourceDirName":"chat","slug":"/chat/receiving-chat-messages","permalink":"/react-web-core/chat/receiving-chat-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/chat/receiving-chat-messages.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/react-web-core/tags/web-core"},{"inline":true,"label":"chat","permalink":"/react-web-core/tags/chat"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Receiving chat messages","description":"Receive chat messages that have been sent in a meeting.","sidebar_position":3,"tags":["web-core","chat"]},"sidebar":"tutorialSidebar","previous":{"title":"Sending a chat message","permalink":"/react-web-core/chat/sending-a-chat-message"},"next":{"title":"Editing Chat Messages","permalink":"/react-web-core/chat/edit-chat-messages"}}');var a=s(74848),c=s(28453);const i={title:"Receiving chat messages",description:"Receive chat messages that have been sent in a meeting.",sidebar_position:3,tags:["web-core","chat"]},r="Receiving chat messages",o={},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"receiving-chat-messages",children:"Receiving chat messages"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"meeting.chat"})," object emits events when new chat messages are received. You\r\ncan listen for the ",(0,a.jsx)(t.code,{children:"chatUpdate"})," event to log when a new chat message is\r\nreceived."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const messages = useDyteSelector((m) => m.chat.messages));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Here, the ",(0,a.jsx)(t.code,{children:"message"})," is of type ",(0,a.jsx)(t.code,{children:"Message"}),", as defined in\r\n",(0,a.jsx)(t.a,{href:"./introduction",children:"introduction"}),". ",(0,a.jsx)(t.code,{children:"messages"})," is a list of all chat messages in the\r\nmeeting, which is the same as ",(0,a.jsx)(t.code,{children:"meeting.chat.messages"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["When a chat message is received, the ",(0,a.jsx)(t.code,{children:"meeting.chat.messages"})," list is also\r\nupdated."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"console.log(JSON.stringify(meeting.chat.messages));\r\nmeeting.chat.on('chatUpdate', () => {\r\n  console.log(JSON.stringify(meeting.chat.messages));\r\n});\n"})}),"\n",(0,a.jsx)(s,{children:(0,a.jsx)("title",{children:"React Web Core Receiving chat messages"})})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(96540);const a={},c=n.createContext(a);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);