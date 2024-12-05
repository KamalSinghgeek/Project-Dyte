"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47307],{40449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"components/dyte-button","title":"DyteButton","description":"Learn how to use and customize the DyteButton component in Dyte\'s iOS UiKit with our detailed documentation.","source":"@site/docs/ios/components/dyte-button.mdx","sourceDirName":"components","slug":"/components/dyte-button","permalink":"/ios/components/dyte-button","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios/components/dyte-button.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"image":"/static/ui-kit/1.x.x/components/dyte-button.svg","description":"Learn how to use and customize the DyteButton component in Dyte\'s iOS UiKit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteAvatarView","permalink":"/ios/components/dyte-avatar"},"next":{"title":"DyteSwitchCameraButtonControlBar","permalink":"/ios/components/dyte-camera-toggle"}}');var s=n(74848),i=n(28453);const r={image:"/static/ui-kit/1.x.x/components/dyte-button.svg",description:"Learn how to use and customize the DyteButton component in Dyte's iOS UiKit with our detailed documentation."},a="DyteButton",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Topics:",id:"topics",level:3},{value:"Creating a button.",id:"creating-a-button",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Style",id:"style",level:3},{value:"States",id:"states",level:3},{value:"Size",id:"size",level:3}];function l(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"dytebutton",children:"DyteButton"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"A button that follows Dyte's Design System."}),"\n",(0,s.jsx)(t.h3,{id:"topics",children:"Topics:"}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-button",children:"Creating a button."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"public init(style: Style = .solid, dyteButtonState: States = .active, size: Size = .large, appearance: DyteButtonAppearance = DyteButtonAppearanceModel()) \n"})}),"\n",(0,s.jsxs)(t.p,{children:["Creates DyteButton for the ",(0,s.jsx)(t.strong,{children:"Style"})," ",(0,s.jsx)(t.strong,{children:"States"})," ",(0,s.jsx)(t.strong,{children:"Size"})," you passed."]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Optional"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"style:"})," passed any type of Style. Default value of style is ",(0,s.jsx)(t.code,{children:"solid"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"dyteButtonState:"})," passed any type of States. Default value of states is ",(0,s.jsx)(t.code,{children:"active"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"size:"}),"  passed any type of Size. Default value of size is ",(0,s.jsx)(t.code,{children:"large"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"appearance:"})," Any type which conforms to protocol ",(0,s.jsx)(t.code,{children:"DyteButtonAppearance"})]}),"\n",(0,s.jsx)(t.h3,{id:"style",children:"Style"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"public enum Style {\r\n  case solid\r\n  case line\r\n  case iconLeftLable(icon: DyteImage)\r\n  case iconRightLable(icon: DyteImage)\r\n  case text\r\n  case textIconLeft(icon: DyteImage)\r\n  case textIconRight(icon: DyteImage)\r\n  case iconOnly(icon: DyteImage)\r\n  case splitButton\r\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"states",children:"States"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"public enum States\r\n{\r\n  case active\r\n  case disabled\r\n  case hover\r\n  case focus\r\n  case pressed\r\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"size",children:"Size"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"public enum Size {\r\n  case small\r\n  case medium\r\n  case large \r\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example we can use DyteButton as follows"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'let dyteImage = DyteImage(image:ImageProvider.image(named: "icon_down_arrow"))\r\nlet downloadButton: DyteButton = {\r\n    let button = DyteButton(style: .iconOnly(icon: dyteImage),\r\n                  dyteButtonState: .active)\r\n    button.backgroundColor = dyteSharedTokenColor.background.shade800\r\n    button.isUserInteractionEnabled = false\r\n    button.tintColor = .white\r\n    // Set additional button properties if needed\r\n    button.selectedStateTintColor = DesignLibrary.shared.color.status.danger\r\n    return button\r\n}()\n'})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("title",{children:"iOS DyteButton"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);