"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[91678],{80053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"basics/pre-requisite","title":"Prerequisite","description":"Understand the prerequisites for using Dyte\'s Angular UI Kit with our comprehensive documentation.","source":"@site/docs/angular-ui-kit/basics/pre-requisite.mdx","sourceDirName":"basics","slug":"/basics/pre-requisite","permalink":"/angular-ui-kit/basics/pre-requisite","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/angular-ui-kit/basics/pre-requisite.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"description":"Understand the prerequisites for using Dyte\'s Angular UI Kit with our comprehensive documentation."},"sidebar":"tutorialSidebar","previous":{"title":"Components Basics","permalink":"/angular-ui-kit/basics/components-basics"},"next":{"title":"Gallery","permalink":"/angular-ui-kit/components"}}');var o=n(74848),r=n(28453);const s={sidebar_position:5,description:"Understand the prerequisites for using Dyte's Angular UI Kit with our comprehensive documentation."},a="Prerequisite",c={},d=[{value:"DyteParticipantsAudio",id:"dyteparticipantsaudio",level:3},{value:"DyteNotifications",id:"dytenotifications",level:3},{value:"DyteDialogManager",id:"dytedialogmanager",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"prerequisite",children:"Prerequisite"})}),"\n",(0,o.jsx)(t.p,{children:"Make sure to read this before you start integrating the UI Kit into your app."}),"\n",(0,o.jsx)(t.p,{children:"These are a couple of components that are important for proper functioning of a\r\nmeeting."}),"\n",(0,o.jsx)(t.h3,{id:"dyteparticipantsaudio",children:"DyteParticipantsAudio"}),"\n",(0,o.jsx)(t.p,{children:"This component takes care of the audio playback and autoplay issues."}),"\n",(0,o.jsx)(t.admonition,{title:"Audio",type:"danger",children:(0,o.jsx)(t.p,{children:"The user will not hear audio without this component."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<dyte-participants-audio id=\"my-audio\"></dyte-participants-audio>\r\n\r\n<script>\r\n  document.getElementById('my-audio').meeting = meeting;\r\n<\/script>\n"})}),"\n",(0,o.jsx)(t.p,{children:"This component will also show a dialog in case the browser throws an auto play\r\nerror, requiring user interaction to allow playing audio."}),"\n",(0,o.jsxs)(t.p,{children:["Here is more information on\r\n",(0,o.jsx)(t.a,{href:"https://developer.chrome.com/blog/autoplay/",children:"Autoplay policy in Chrome"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Other browsers have similar policy, with some minor differences."}),"\n",(0,o.jsx)(t.h3,{id:"dytenotifications",children:"DyteNotifications"}),"\n",(0,o.jsx)(t.admonition,{title:"Notifications",type:"danger",children:(0,o.jsx)(t.p,{children:"The user will not be notified of important events such as network disconnection,\r\npoor network without this component."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<dyte-notifications id=\"my-notifications\"></dyte-notifications>\r\n\r\n<script>\r\n  // load meeting\r\n\r\n  document.getElementById('my-notifications').meeting = meeting;\r\n  document.getElementById('my-notifications').config = {\r\n    // which notifications to show\r\n    notifications: ['chat', 'participant_joined', 'participant_left'],\r\n    // which notifications should have sounds\r\n    notification_sounds: ['chat', 'participant_joined', 'participant_left'],\r\n    // maximum number of participant joined sound notifications\r\n    participant_joined_sound_notification_limit: 10,\r\n    // maximum number of chat message sound notifications\r\n    participant_chat_message_sound_notification_limit: 10,\r\n  };\r\n<\/script>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"dytedialogmanager",children:"DyteDialogManager"}),"\n",(0,o.jsx)(t.p,{children:"A component which handles all dialog elements in a component. This component is required for the following components to work:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"DyteLeaveButton"}),"\n",(0,o.jsx)(t.li,{children:"DyteSettingsToggle"}),"\n",(0,o.jsx)(t.li,{children:"DyteBreakoutRoomsToggle"}),"\n",(0,o.jsx)(t.li,{children:"DyteMuteAllButton"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This components depends on the values from ",(0,o.jsx)(t.code,{children:"states"})," object."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<dyte-notifications id="my-notifications"></dyte-notifications>\r\n\r\n<script>\r\n  <dyte-button onclick="showSettings()">Show Settings</dyte-button>\r\n  <dyte-button onclick="showLeaveConfirmation()">Show Settings</dyte-button>\r\n\r\n  <dyte-dialog-manager id="dyte-el"></dyte-dialog-manager>\r\n\r\n  <script>\r\n    const dialog = document.getElementById(\'dyte-el\');\r\n    dialog.meeting = meeting;\r\n    let states = {};\r\n\r\n    function updateStates() {\r\n      dialog.states = states;\r\n    }\r\n\r\n    function stateUpdate(s) {\r\n      states = { ...states, ...s };\r\n      updateStates();\r\n    }\r\n\r\n    function showSettings() {\r\n      stateUpdate({ activeSettings: true });\r\n    }\r\n\r\n    function showLeaveConfirmation() {\r\n      stateUpdate({ activeLeaveConfirmation: true });\r\n    }\r\n\r\n    dialog.addEventListener(\'dyteStateUpdate\', (e) => {\r\n      stateUpdate(e.detail);\r\n    });\r\n\r\n    updateStates();\r\n<\/script>\n'})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("title",{children:"Angular UI Kit Prerequisite"}),(0,o.jsx)("meta",{name:"description",content:"Understand the prerequisites for using Dyte's Angular UI Kit with our comprehensive documentation."})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);