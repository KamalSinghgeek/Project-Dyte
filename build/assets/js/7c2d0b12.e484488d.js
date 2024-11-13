"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[13964],{73910:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"chat/edit-chat-messages","title":"Editing Chat Messages","description":"Edit chat messages that you have sent in a meeting.","source":"@site/docs/rn-core/chat/edit-chat-messages.mdx","sourceDirName":"chat","slug":"/chat/edit-chat-messages","permalink":"/rn-core/chat/edit-chat-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/chat/edit-chat-messages.mdx","tags":[{"inline":true,"label":"rn-core","permalink":"/rn-core/tags/rn-core"},{"inline":true,"label":"chat","permalink":"/rn-core/tags/chat"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Editing Chat Messages","description":"Edit chat messages that you have sent in a meeting.","sidebar_position":4,"tags":["rn-core","chat"]},"sidebar":"tutorialSidebar","previous":{"title":"Receiving chat messages","permalink":"/rn-core/chat/receiving-chat-messages"},"next":{"title":"Other chat functions","permalink":"/rn-core/chat/other-chat-functions"}}');var a=s(74848),i=s(28453);const r={title:"Editing Chat Messages",description:"Edit chat messages that you have sent in a meeting.",sidebar_position:4,tags:["rn-core","chat"]},c=void 0,d={},o=[{value:"Edit a text message",id:"edit-a-text-message",level:2},{value:"Edit an image",id:"edit-an-image",level:2},{value:"Edit a file",id:"edit-a-file",level:2},{value:"Extra",id:"extra",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"As mentioned in introduction, there are 3 types of chat messages - text\r\nmessages, images, and files. There is a method in meeting.chat to edit a message\r\nof each type."}),"\n",(0,a.jsx)(t.h2,{id:"edit-a-text-message",children:"Edit a text message"}),"\n",(0,a.jsxs)(t.p,{children:["To edit a text message, the ",(0,a.jsx)(t.code,{children:"meeting.chat.editTextMessage()"})," method can be used.\r\nThis accepts a ",(0,a.jsx)(t.code,{children:"messageId"})," (type ",(0,a.jsx)(t.code,{children:"string"}),") and a ",(0,a.jsx)(t.code,{children:"message"})," (type ",(0,a.jsx)(t.code,{children:"string"}),")."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const message = meeting.chat.messages[0];\r\nconst messageId = message?.id;\r\nconst newMessage = 'Is this the real life?';\r\nawait meeting.chat.editTextMessage(messageId, newMessage);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"edit-an-image",children:"Edit an image"}),"\n",(0,a.jsxs)(t.p,{children:["You can send an image with the help of meeting.chat.editImageMessage(). This\r\naccepts a ",(0,a.jsx)(t.code,{children:"messageId"})," of type ",(0,a.jsx)(t.code,{children:"string"})," and an image of type ",(0,a.jsx)(t.code,{children:"File"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"async function onEditImage() {\r\n  const messageId = '...';\r\n  // Get the image uri and create an object with the following fields\r\n  const res = await DocumentPicker.pickSingle({\r\n    type: [DocumentPicker.types.images],\r\n  });\r\n  const image = {\r\n    uri: res.uri,\r\n    name: res.name,\r\n    size: res.size,\r\n    type: res.type,\r\n  };\r\n  await meeting.chat.editImageMessage(messageId, image);\r\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"edit-a-file",children:"Edit a file"}),"\n",(0,a.jsxs)(t.p,{children:["Editing a file is quite similar to editing an image. To edit a file use\r\n",(0,a.jsx)(t.code,{children:"meeting.chat.editFileMessage()"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"async function onEditFile() {\r\n  const messageId = '...';\r\n  // Get the file uri and create an object with the following fields\r\n  const res = await DocumentPicker.pickSingle({\r\n    type: [DocumentPicker.types.allFiles],\r\n  });\r\n  const file = {\r\n    uri: res.uri,\r\n    name: res.name,\r\n    size: res.size,\r\n    type: res.type,\r\n  };\r\n  await meeting.chat.editFileMessage(messageId, file);\r\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"extra",children:"Extra"}),"\n",(0,a.jsxs)(t.p,{children:["There is also a common method called ",(0,a.jsx)(t.code,{children:"meeting.chat.editMessage()"})," that can be\r\nused to edit any of the 3 types of messages displayed above. It essentially\r\ncalls one of the methods from above depending upon the type of payload you send\r\nto the method. The ",(0,a.jsx)(t.code,{children:"editMessage()"})," method accepts a parameters ",(0,a.jsx)(t.code,{children:"messageId"}),"\r\n",(0,a.jsx)(t.code,{children:"message"})," of the following type:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"async function editMessage(\r\n    messageId: string,\r\n    message: { type: 'text', message: string }\r\n        | { type: 'image', image: File }\r\n        | { type: 'file', file: File },\r\n) {...}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Here's how you would use the ",(0,a.jsx)(t.code,{children:"editMessage()"})," method to edit a text message."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const messageId = '...';\r\nconst message = 'Is this just fantasy?';\r\nawait meeting.chat.sendMessage(messageId, { type: 'text', message });\n"})}),"\n",(0,a.jsx)(s,{children:(0,a.jsx)("title",{children:"React Native Core Editing Chat Messages"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);