"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[52841],{49273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"build-pre-call-ui/default-setup-screen","title":"DyteSetupScreen","description":"Dyte provides a default pre-call preview UI, also known as setup screen as part of our UI components.","source":"@site/docs/rn-ui-kit/build-pre-call-ui/default-setup-screen.mdx","sourceDirName":"build-pre-call-ui","slug":"/build-pre-call-ui/default-setup-screen","permalink":"/react-native/build-pre-call-ui/default-setup-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-ui-kit/build-pre-call-ui/default-setup-screen.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"DyteSetupScreen","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Use React Native Core Hooks","permalink":"/react-native/using-hooks"},"next":{"title":"Basic structure","permalink":"/react-native/build-pre-call-ui/build-your-own/initial-code-skeleton"}}');var o=n(74848),s=n(28453);const i={title:"DyteSetupScreen",sidebar_position:4},a=void 0,c={},u=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Dyte provides a default pre-call preview UI, also known as setup screen as part of our UI components."}),"\n",(0,o.jsx)(t.p,{children:"Previously in the Quickstart example, we used the following component."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<DyteMeeting meeting={meeting} showSetupScreen={true} />\n"})}),"\n",(0,o.jsx)(t.p,{children:"If you want to break down the above for a custom UI but still want to reuse the default setup screen, use the following component."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { DyteSetupScreen, DyteText } from '@dytesdk/react-native-ui-kit';\r\nimport { useDyteMeeting, useDyteSelector } from '@dytesdk/react-native-core';\r\n\r\nexport default function MyMeeting() {\r\n  const { meeting } = useDyteMeeting();\r\n  const roomState = useDyteSelector((m) => m.self.roomState);\r\n\r\n  return (\r\n    <View>\r\n      {roomState === 'init' && <DyteSetupScreen meeting={meeting} />}\r\n      {roomState === 'joined' && <DyteText>Custom in-meeting UI</DyteText>}\r\n      {roomState === 'ended' && <DyteText>Custom post-meeting UI</DyteText>}\r\n    </View>\r\n  );\r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"If you want to build a custom pre-call UI, let's go to the next page to start building one."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);