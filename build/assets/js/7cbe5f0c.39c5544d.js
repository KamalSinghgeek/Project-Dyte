"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[2292],{34503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"components/dyte-dialog-manager","title":"DyteDialogManager","description":"Learn how to use and customize the DyteDialogManager component in Dyte\'s React UI Kit with our detailed documentation.","source":"@site/docs/react-ui-kit/components/dyte-dialog-manager.mdx","sourceDirName":"components","slug":"/components/dyte-dialog-manager","permalink":"/react-ui-kit/components/dyte-dialog-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/components/dyte-dialog-manager.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"description":"Learn how to use and customize the DyteDialogManager component in Dyte\'s React UI Kit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteControlbar","permalink":"/react-ui-kit/components/dyte-controlbar"},"next":{"title":"DyteDialog","permalink":"/react-ui-kit/components/dyte-dialog"}}');var r=n(74848),a=n(28453);const i={description:"Learn how to use and customize the DyteDialogManager component in Dyte's React UI Kit with our detailed documentation."},s="DyteDialogManager",c={},d=[{value:"Props",id:"props",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:n,PropsTable:o}=t;return n||m("Head",!0),o||m("PropsTable",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"dytedialogmanager",children:"DyteDialogManager"})}),"\n",(0,r.jsx)(t.p,{children:"A component which handles all dialog elements in a component such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"dyte-settings"}),"\n",(0,r.jsx)(t.li,{children:"dyte-leave-meeting"}),"\n",(0,r.jsx)(t.li,{children:"dyte-permissions-message"}),"\n",(0,r.jsx)(t.li,{children:"dyte-image-viewer"}),"\n",(0,r.jsx)(t.li,{children:"dyte-remote-access-manager"}),"\n",(0,r.jsx)(t.li,{children:"dyte-breakout-rooms-manager"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This components depends on the values from ",(0,r.jsx)(t.code,{children:"states"})," object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\r\n  const [states, setStates] = useState({});\r\n\r\n  const setState = (s) => setStates((states) => ({ ...states, ...s }));\r\n\r\n  return (\r\n    <Row>\r\n      <DyteButton onClick={() => setState({ activeSettings: true })}>\r\n        Show Settings\r\n      </DyteButton>\r\n      <DyteButton onClick={() => setState({ activeLeaveConfirmation: true })}>\r\n        Show Leave Confirmation\r\n      </DyteButton>\r\n      <DyteButton\r\n        onClick={() =>\r\n          setState({\r\n            activePermissionsMessage: { enabled: true, kind: 'audio' },\r\n          })\r\n        }\r\n      >\r\n        Show Permissions Troubleshooting UI\r\n      </DyteButton>\r\n      <DyteButton onClick={() => setState({ activeRemoteAccessManager: true })}>\r\n        Show Remote Access Manager\r\n      </DyteButton>\r\n      <DyteDialogManager\r\n        meeting={meeting}\r\n        states={states}\r\n        onDyteStateUpdate={(e) => setState(e.detail)}\r\n      />\r\n    </Row>\r\n  );\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,r.jsx)(o,{of:"dyte-dialog-manager"}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"React UI Kit DyteDialogManager"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);