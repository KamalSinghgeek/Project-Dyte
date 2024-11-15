"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[36582],{81990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"design-token","title":"Design System","description":"Explore design token integration in Flutter with Dyte\'s documentation. Follow our guide for effective design token implementation in your app.","source":"@site/docs/flutter/design-token.mdx","sourceDirName":".","slug":"/design-token","permalink":"/flutter/design-token","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/flutter/design-token.mdx","tags":[{"inline":true,"label":"Flutter UI Kit","permalink":"/flutter/tags/flutter-ui-kit"},{"inline":true,"label":"Design System","permalink":"/flutter/tags/design-system"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Design System","description":"Explore design token integration in Flutter with Dyte\'s documentation. Follow our guide for effective design token implementation in your app.","sidebar_position":3,"tags":["Flutter UI Kit","Design System"]},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart","permalink":"/flutter/quickstart"},"next":{"title":"DyteAudioIndicatorIconWidget","permalink":"/flutter/Components/dyte-audio-indicator-icon-widget"}}');var s=n(74848),i=n(28453);const r={title:"Design System",description:"Explore design token integration in Flutter with Dyte's documentation. Follow our guide for effective design token implementation in your app.",sidebar_position:3,tags:["Flutter UI Kit","Design System"]},l="Design System",d={},c=[{value:"Design Tokens",id:"design-tokens",level:2},{value:"Customize themes with design tokens",id:"customize-themes-with-design-tokens",level:3},{value:"Pass a single color.",id:"pass-a-single-color",level:4},{value:"Use a color swatch.",id:"use-a-color-swatch",level:4},{value:"Customize borders with configuration",id:"customize-borders-with-configuration",level:3},{value:"Example",id:"example",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"design-system",children:"Design System"})}),"\n",(0,s.jsx)(t.p,{children:"A design system is a collection of reusable components, defined by clear standards, that can be assembled together to build any number of applications."}),"\n",(0,s.jsx)(t.p,{children:"Dyte's UI kit uses the Atomic design principle, which logically organizes screens for various devices, making it a versatile system. Design tokens are used in Dyte's UI Kit to maintain a consistent look across platforms. By combining design tokens and Atomic design principles, Dyte ensures a smooth and adaptable user interface experience on different platforms."}),"\n",(0,s.jsx)(t.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,s.jsx)(t.p,{children:"Design tokens are the single source of truth to name and store design decisions.They are values that help keep the design consistent and flexible. These values include things like font styles, spacing, colors, borders, and more, allowing you to easily customize the overall look and feel of a system."}),"\n",(0,s.jsxs)(t.p,{children:["In the Flutter UI kit, design tokens are shared and managed using ",(0,s.jsx)(t.code,{children:"themes"}),". Themes in Flutter use the ",(0,s.jsx)(t.code,{children:"ThemeData"})," class to store and propagate design properties, such as colors, fonts, and more, throughout the widget tree."]}),"\n",(0,s.jsx)(t.p,{children:"Let's understand how you can customize your UI with Dyte's Flutter UI Kit using design tokens."}),"\n",(0,s.jsx)(t.h3,{id:"customize-themes-with-design-tokens",children:"Customize themes with design tokens"}),"\n",(0,s.jsxs)(t.p,{children:["Dyte offers the ",(0,s.jsx)(t.code,{children:"DyteDesignToken"})," class to customize the theme of the UI kit. Pass the ",(0,s.jsx)(t.code,{children:"DyteDesignToken"})," object within the ",(0,s.jsx)(t.code,{children:"DyteUIKitInfo"})," object to customize the theme."]}),"\n",(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.code,{children:"DyteDesignToken"}),", you can customize the following design properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"backgroundColor"}),":The"," background color of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"textOnBackground"}),": The text color on the background of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"backgroundColorSwatch"}),": The background color swatch of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"brandColor"}),": The primary color of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"textOnBrand"}),": The text color on the brand color of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"brandColorSwatch"}),": The brand color swatch of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"danger"}),": The danger color of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"success"}),": The success color of the UI Kit."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"warning"}),": The warning color of the UI Kit."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You have two options to customize the UI Kit's theme:"}),"\n",(0,s.jsx)(t.h4,{id:"pass-a-single-color",children:"Pass a single color."}),"\n",(0,s.jsxs)(t.p,{children:["You can pass a single color to the ",(0,s.jsx)(t.code,{children:"backgroundColor"}),", ",(0,s.jsx)(t.code,{children:"brandColor"})," parameters. Or you can use a combination of ",(0,s.jsx)(t.code,{children:"backgroundColorSwatch"})," and ",(0,s.jsx)(t.code,{children:"brandColor"})," to customize the theme."]}),"\n",(0,s.jsx)(t.h4,{id:"use-a-color-swatch",children:"Use a color swatch."}),"\n",(0,s.jsx)(t.p,{children:"For the brand color swatch, make sure it contains 5 entries with keys 300, 400, 500, 600, and 700.\r\nFor the background color swatch, provide 5 entries with keys 600, 700, 800, 900, and 1000."}),"\n",(0,s.jsxs)(t.p,{children:["To achieve this, utilize the ",(0,s.jsx)(t.code,{children:"DyteColorSwatch"})," class with two parameters: the default color key and a map of colors."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"final primarySwatch = DyteColorSwatch(\r\n    500,\r\n    {\r\n      300: Colors.blue.shade300,\r\n      400: Colors.blue.shade400,\r\n      500: Colors.blue.shade500,\r\n      600: Colors.blue.shade600,\r\n      700: Colors.blue.shade700,\r\n    },\r\n  );\n"})}),"\n",(0,s.jsx)(t.h3,{id:"customize-borders-with-configuration",children:"Customize borders with configuration"}),"\n",(0,s.jsxs)(t.p,{children:["To customize the border radius and border width of the UI Kit, you can use the ",(0,s.jsx)(t.code,{children:"DyteBorderRadius"})," and ",(0,s.jsx)(t.code,{children:"DyteBorderWidth"})," enum values in the design token."]}),"\n",(0,s.jsxs)(t.p,{children:["Here are the available ",(0,s.jsx)(t.code,{children:"DyteBorderRadius"})," values:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Token Name"}),(0,s.jsx)(t.th,{children:"values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DyteBorderRadius"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"sharp"}),", ",(0,s.jsx)(t.code,{children:"rounded"}),", ",(0,s.jsx)(t.code,{children:"extraRounded"}),", ",(0,s.jsx)(t.code,{children:"circular"})]})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["Here are the available ",(0,s.jsx)(t.code,{children:"DyteBorderWidth"})," values:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Token Name"}),(0,s.jsx)(t.th,{children:"values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DyteBorderWidth"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"none"}),", ",(0,s.jsx)(t.code,{children:"thin"}),", ",(0,s.jsx)(t.code,{children:"fat"})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Here's an example of how you can customize the Flutter UI Kit using the design token:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"final uikitInfo = DyteUIKitInfo(meetingInfo,\r\n    designToken: DyteDesignToken(\r\n      colorToken: DyteColorToken(\r\n          borderRadius: DyteBorderRadius.circular,\r\n          borderWidth: DyteBorderWidth.fat,\r\n          backgroundColor: Colors.black,\r\n          textOnBrand: Colors.white,\r\n          textOnBackground: Colors.white,\r\n          danger: Colors.red,\r\n          success: Colors.green,\r\n          warning: Colors.yellow,\r\n          brandColorSwatch: DyteColorSwatch(\r\n            500,\r\n            {\r\n              300: Colors.blue.shade300,\r\n              400: Colors.blue.shade400,\r\n              500: Colors.blue.shade500,\r\n              600: Colors.blue.shade600,\r\n              700: Colors.blue.shade700,\r\n            },\r\n          )),\r\n    ));\n"})}),"\n",(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",flex:"1 1 0",justifyContent:"center"},children:["/static/mobile/0.x.x/flutter-setup-ct.png","/static/mobile/0.x.x/flutter-vc-ct.png","/static/mobile/0.x.x/flutter-host-actions-ct.png","/static/mobile/0.x.x/flutter-poll-ct.png","/static/mobile/0.x.x/flutter-participants-list-ct.png"].map((e=>(0,s.jsx)("img",{src:e,alt:"Image 1",width:"220",style:{margin:"10px",borderRadius:"8px"}})))}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("title",{children:"Flutter Design System"}),(0,s.jsx)("meta",{name:"description",content:"Explore design token integration in Flutter with Dyte's documentation. Follow our guide for effective design token implementation in your app."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);