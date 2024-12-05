"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[28328],{18080:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"chat/receiving-chat-messages","title":"Receiving chat messages","description":"Receive chat messages that have been sent in a meeting.","source":"@site/docs/web-core/chat/receiving-chat-messages.mdx","sourceDirName":"chat","slug":"/chat/receiving-chat-messages","permalink":"/web-core/chat/receiving-chat-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/chat/receiving-chat-messages.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/web-core/tags/web-core"},{"inline":true,"label":"chat","permalink":"/web-core/tags/chat"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Receiving chat messages","description":"Receive chat messages that have been sent in a meeting.","sidebar_position":3,"tags":["web-core","chat"]},"sidebar":"tutorialSidebar","previous":{"title":"Sending a chat message","permalink":"/web-core/chat/sending-a-chat-message"},"next":{"title":"Editing Chat Messages","permalink":"/web-core/chat/edit-chat-messages"}}');var a=t(74848),c=t(28453);const i={title:"Receiving chat messages",description:"Receive chat messages that have been sent in a meeting.",sidebar_position:3,tags:["web-core","chat"]},r="Receiving chat messages",o={},h=[];function d(e){const s={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"receiving-chat-messages",children:"Receiving chat messages"})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"meeting.chat"})," object emits events when new chat messages are received. You\r\ncan listen for the ",(0,a.jsx)(s.code,{children:"chatUpdate"})," event to log when a new chat message is\r\nreceived."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"meeting.chat.on('chatUpdate', ({ message, messages }) => {\r\n  console.log(`Received message ${message}`);\r\n  console.log(`All messages in chat: ${messages.join(', ')}`);\r\n});\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Here, the ",(0,a.jsx)(s.code,{children:"message"})," is of type ",(0,a.jsx)(s.code,{children:"Message"}),", as defined in\r\n",(0,a.jsx)(s.a,{href:"./introduction",children:"introduction"}),". ",(0,a.jsx)(s.code,{children:"messages"})," is a list of all chat messages in the\r\nmeeting, which is the same as ",(0,a.jsx)(s.code,{children:"meeting.chat.messages"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["When a chat message is received, the ",(0,a.jsx)(s.code,{children:"meeting.chat.messages"})," list is also\r\nupdated."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"console.log(JSON.stringify(meeting.chat.messages));\r\nmeeting.chat.on('chatUpdate', () => {\r\n  console.log(JSON.stringify(meeting.chat.messages));\r\n});\n"})}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("title",{children:"Web Core Receiving chat messages"})})]})}function g(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(96540);const a={},c=n.createContext(a);function i(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);