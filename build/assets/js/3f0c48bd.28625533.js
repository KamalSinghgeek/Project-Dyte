"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[50277],{98697:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"local-user/manage-media-devices","title":"Manage Media Devices","description":"Local user media guide to manage media permissions.","source":"@site/docs/web-core/local-user/manage-media-devices.mdx","sourceDirName":"local-user","slug":"/local-user/manage-media-devices","permalink":"/web-core/local-user/manage-media-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/local-user/manage-media-devices.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/web-core/tags/web-core"},{"inline":true,"label":"local-user","permalink":"/web-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/web-core/tags/self"},{"inline":true,"label":"self events","permalink":"/web-core/tags/self-events"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Manage Media Devices","description":"Local user media guide to manage media permissions.","sidebar_position":3,"tags":["web-core","local-user","self","self events"]},"sidebar":"tutorialSidebar","previous":{"title":"Events","permalink":"/web-core/local-user/events"},"next":{"title":"Media Permission Errors","permalink":"/web-core/local-user/media-permission-errors"}}');var t=i(74848),r=i(28453);const a={title:"Manage Media Devices",description:"Local user media guide to manage media permissions.",sidebar_position:3,tags:["web-core","local-user","self","self events"]},c="Manage Media Devices",o={},d=[{value:"Set device",id:"set-device",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"manage-media-devices",children:"Manage Media Devices"})}),"\n",(0,t.jsx)(s.p,{children:"Media devices represents the hardware for the camera, microphone and speaker\r\ndevices. To get the list of media devices that are currently being used, you can\r\nuse the following methods:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Get all media devices\r\nconst devices = meeting.self.getAllDevices();\r\n\r\n// Get all audio devices\r\nconst audioDevices = meeting.self.getAudioDevices();\r\n\r\n// Get all video devices\r\nconst videoDevices = meeting.self.getVideoDevices();\r\n\r\n// Get all speakers\r\nconst speakerDevices = meeting.self.getSpeakerDevices();\r\n\r\n// Get device by ID\r\nconst device = meeting.self.getDeviceById('12345', 'audio');\r\n\r\n// Fetch current media devices being used\r\nconst currentDevices = meeting.self.getCurrentDevices();\n"})}),"\n",(0,t.jsx)(s.h2,{id:"set-device",children:"Set device"}),"\n",(0,t.jsxs)(s.p,{children:["To set a device as an active device, you can call ",(0,t.jsx)(s.code,{children:"setDevice"})," method. This takes\r\na ",(0,t.jsx)(s.code,{children:"MediaDeviceInfo"})," object, and replaces the same ",(0,t.jsx)(s.code,{children:"kind"})," device."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"meeting.self.setDevice(device);\n"})}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("title",{children:"Web Core Manage Media Devices"})})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>c});var n=i(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);