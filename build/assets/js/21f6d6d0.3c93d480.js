"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[83350],{65815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"components/dyte-settings","title":"DyteSettingViewController","description":"Learn how to use and customize the DyteSettingViewController component in Dyte\'s iOS UiKit with our detailed documentation.","source":"@site/docs/ios/components/dyte-settings.mdx","sourceDirName":"components","slug":"/components/dyte-settings","permalink":"/ios/components/dyte-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios/components/dyte-settings.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"image":"/static/ui-kit/1.x.x/components/dyte-settings.svg","description":"Learn how to use and customize the DyteSettingViewController component in Dyte\'s iOS UiKit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteRecordingView","permalink":"/ios/components/dyte-recording-indicator"},"next":{"title":"SetupViewControllerDelegate","permalink":"/ios/components/dyte-setup-screen-delegate"}}');var i=n(74848),r=n(28453);const s={image:"/static/ui-kit/1.x.x/components/dyte-settings.svg",description:"Learn how to use and customize the DyteSettingViewController component in Dyte's iOS UiKit with our detailed documentation."},l="DyteSettingViewController",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Create  DyteSettingViewController",id:"create--dytesettingviewcontroller",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Hide/Show top bar",id:"hideshow-top-bar",level:3},{value:"To show DyteSettingViewController do in iOS as follows:",id:"to-show-dytesettingviewcontroller-do-in-ios-as-follows",level:3}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dytesettingviewcontroller",children:"DyteSettingViewController"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"A screen that is used to show settings to switch between different audio/video devices."}),"\n",(0,i.jsx)(t.h3,{id:"create--dytesettingviewcontroller",children:"Create  DyteSettingViewController"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"init(nameTag: String, meeting: DyteMobileClient, completion:(()->Void)? = nil)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Creates settings screen with name tag."}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Required:"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"nameTag:"})," An String representing participant name.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"meeting:"})," Default meeting object",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:"Optional:"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"completion:"})," Closure to get a callback when user presses back button present on ",(0,i.jsx)(t.a,{href:"/ios/components/dyte-navigationbar",children:"DyteNavigationBar"})]}),"\n",(0,i.jsx)(t.h3,{id:"hideshow-top-bar",children:"Hide/Show top bar"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"var shouldShowTopBar: Bool = true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Default value is ",(0,i.jsx)(t.code,{children:"true"}),". To hide the topbar assign this to ",(0,i.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"to-show-dytesettingviewcontroller-do-in-ios-as-follows",children:"To show DyteSettingViewController do in iOS as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"let controller = DyteSettingViewController(nameTag: participant.name,\r\n                                           meeting: mobileClient)\r\ncontroller.view.backgroundColor = self.view.backgroundColor\r\ncontroller.modalPresentationStyle = .fullScreen\r\nself.present(controller, animated: true)\n"})}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"iOS DyteSettingViewController"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);