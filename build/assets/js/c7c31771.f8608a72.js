"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27467],{33799:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/dyte-dialog","title":"DyteDialog","description":"Learn how to use and customize the DyteDialog component in Dyte\'s React UI Kit with our detailed documentation.","source":"@site/docs/react-ui-kit/components/dyte-dialog.mdx","sourceDirName":"components","slug":"/components/dyte-dialog","permalink":"/react-ui-kit/components/dyte-dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/components/dyte-dialog.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"image":"/static/ui-kit/1.x.x/components/dyte-dialog.svg","description":"Learn how to use and customize the DyteDialog component in Dyte\'s React UI Kit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteDialogManager","permalink":"/react-ui-kit/components/dyte-dialog-manager"},"next":{"title":"DyteEmojiPicker","permalink":"/react-ui-kit/components/dyte-emoji-picker"}}');var i=o(74848),r=o(28453);const a={image:"/static/ui-kit/1.x.x/components/dyte-dialog.svg",description:"Learn how to use and customize the DyteDialog component in Dyte's React UI Kit with our detailed documentation."},s="DyteDialog",d={},c=[{value:"Props",id:"props",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:o,PropsTable:n}=t;return o||u("Head",!0),n||u("PropsTable",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dytedialog",children:"DyteDialog"})}),"\n",(0,i.jsx)(t.p,{children:"A dialog component."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\r\n  const [showDialog, setShowDialog] = useState(false);\r\n\r\n  return (\r\n    <div>\r\n      <DyteButton onClick={() => setShowDialog(true)}>Show Dialog</DyteButton>\r\n      <DyteDialog\r\n        open={showDialog}\r\n        onDyteDialogClose={() => setShowDialog(false)}\r\n      >\r\n        <div\r\n          style={{\r\n            width: '512px',\r\n            backgroundColor: '#000',\r\n            color: '#fff',\r\n            padding: 12,\r\n            borderRadius: 8,\r\n          }}\r\n        >\r\n          <h3>Hello!</h3>\r\n          <p style={{ marginBottom: 0 }}>This is some text inside dialog!</p>\r\n        </div>\r\n      </DyteDialog>\r\n    </div>\r\n  );\r\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n,{of:"dyte-dialog"}),"\n",(0,i.jsx)(o,{children:(0,i.jsx)("title",{children:"React UI Kit DyteDialog"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);