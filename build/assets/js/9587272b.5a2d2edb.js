"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[43727],{18795:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"design-system","title":"Design System","description":"Details about the Design System in Dyte\'s UI Kit.","source":"@site/docs/ui-kit/design-system.mdx","sourceDirName":".","slug":"/design-system","permalink":"/ui-kit/design-system","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ui-kit/design-system.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Details about the Design System in Dyte\'s UI Kit."},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart","permalink":"/ui-kit/quickstart"},"next":{"title":"Components Basics","permalink":"/ui-kit/basics/components-basics"}}');var i=n(74848),r=n(28453);const d={sidebar_position:4,description:"Details about the Design System in Dyte's UI Kit."},o="Design System",l={},a=[{value:"<code>provideDyteDesignSystem()</code> utility",id:"providedytedesignsystem-utility",level:2},{value:"Design Tokens",id:"design-tokens",level:2},{value:"Typography",id:"typography",level:3},{value:"Usage",id:"usage",level:4},{value:"Colors",id:"colors",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Spacing",id:"spacing",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Border Width &amp; Border Radius",id:"border-width--border-radius",level:3},{value:"Usage",id:"usage-3",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{ColorPalette:n,Head:t}=s;return n||g("ColorPalette",!0),t||g("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"design-system",children:"Design System"})}),"\n",(0,i.jsxs)(s.p,{children:["Read this blog post to know more:\r\n",(0,i.jsx)(s.a,{href:"https://dyte.io/blog/new-dyte-video-sdk-design-system/",children:"https://dyte.io/blog/new-dyte-video-sdk-design-system/"})]}),"\n",(0,i.jsxs)(s.h2,{id:"providedytedesignsystem-utility",children:[(0,i.jsx)(s.code,{children:"provideDyteDesignSystem()"})," utility"]}),"\n",(0,i.jsx)(s.p,{children:"This is a very handy utility to configure the design system of UI Kit components\r\nprogrammatically, with very lines of code."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:"<div id=\"app\"></div>\r\n\r\n<script>\r\n  provideDyteDesignSystem(document.getElementById('app'), {\r\n    googleFont: 'Lobster',\r\n    // sets light background colors\r\n    theme: 'light',\r\n    colors: {\r\n      danger: '#ffac00',\r\n      brand: {\r\n        300: '#00FFE1',\r\n        400: '#00FFFF',\r\n        500: '#00E1D4',\r\n        600: '#007B74',\r\n        700: '#00655F',\r\n      },\r\n      text: '#071428',\r\n      'text-on-brand': '#ffffff',\r\n      'video-bg': '#E5E7EB',\r\n    },\r\n    borderRadius: 'extra-rounded',\r\n  });\r\n<\/script>\n"})}),"\n",(0,i.jsx)(s.p,{children:"Read on to learn more about each token in detail."}),"\n",(0,i.jsx)(s.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,i.jsxs)(s.p,{children:["UI Kit uses ",(0,i.jsx)(s.a,{href:"https://css-tricks.com/what-are-design-tokens/",children:"design tokens"})," for\r\nit's design system."]}),"\n",(0,i.jsx)(s.p,{children:"Design tokens are the design related values which are used to maintain a design\r\nsystem, which provides flexibility in customizing the overall design of a system\r\nwith values such as: typography, spacing, colors etc."}),"\n",(0,i.jsxs)(s.p,{children:["These design tokens are stored and shared among components with the help of\r\n",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS variables"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"typography",children:"Typography"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"--dyte-font-family: Inter;\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can tweak the font family used in your UI Kit components easily with this\r\ntoken."}),"\n",(0,i.jsx)(s.p,{children:"You can edit this value in two ways with the provideDyteDesignSystem utility."}),"\n",(0,i.jsx)(s.h4,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const designTokens = {\r\n  fontFamily: 'Custom Font';\r\n  // or\r\n  googleFont: 'A Google Font';\r\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:"Set either of these values in your design tokens."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["With ",(0,i.jsx)(s.code,{children:"fontFamily"})," \ud83e\udea1 - Use a custom font family, you'll have to load the font\r\nmanually."]}),"\n",(0,i.jsxs)(s.li,{children:["With ",(0,i.jsx)(s.code,{children:"googleFont"})," \u2728 - Use a google font, the font is loaded automatically."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"colors",children:"Colors"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"--dyte-colors-brand-500: 33 96 253;\r\n--dyte-colors-background-1000: 8 8 8;\r\n/* ... rest of the shades */\n"})}),"\n",(0,i.jsxs)(s.p,{children:["CSS Variables are set in the format: ",(0,i.jsx)(s.code,{children:"R G B"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Here are all the color tokens, along with their default values."}),"\n",(0,i.jsx)(n,{name:"Brand",shades:{300:"#497CFD",400:"#356EFD",500:"#2160FD",600:"#0D51FD",700:"#0246FD"}}),"\n",(0,i.jsx)(n,{name:"Background",shades:{1e3:"#080808",900:"#1A1A1A",800:"#1E1E1E",700:"#2C2C2C",600:"#3C3C3C"},desc:!0}),"\n",(0,i.jsx)(n,{name:"Text",shades:{1e3:"rgb(255 255 255)",900:"rgb(255 255 255 / 0.88)",800:"rgb(255 255 255 / 0.76)",700:"rgb(255 255 255 / 0.64)",600:"rgb(255 255 255 / 0.52)"},desc:!0,rgb:!0}),"\n",(0,i.jsx)(n,{name:"Text On Brand",shades:{1e3:"rgb(255 255 255)",900:"rgb(255 255 255 / 0.88)",800:"rgb(255 255 255 / 0.76)",700:"rgb(255 255 255 / 0.64)",600:"rgb(255 255 255 / 0.52)"},desc:!0,rgb:!0}),"\n",(0,i.jsx)(n,{name:"Singular Colors",shades:{"video-bg":"#181818",success:"#83D017",warning:"#FFCD07",danger:"#FF2D2D"}}),"\n",(0,i.jsx)(s.h4,{id:"usage-1",children:"Usage"}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["Note the exception of ",(0,i.jsx)(s.code,{children:"text"})," and ",(0,i.jsx)(s.code,{children:"text-on-brand"})," colors, you only specify a\r\nsingle color even though there are the following shades: 1000 - 600."]}),(0,i.jsxs)(s.p,{children:["This is because the ",(0,i.jsx)(s.code,{children:"provideDyteDesignSystem()"})," utility sets the color you pass\r\nto ",(0,i.jsx)(s.code,{children:"text-1000"})," and calculates lighter shades and sets them as well."]}),(0,i.jsxs)(s.p,{children:["Only pass objects for ",(0,i.jsx)(s.code,{children:"brand"})," and ",(0,i.jsx)(s.code,{children:"background"})," colors."]})]}),"\n",(0,i.jsxs)(s.p,{children:["A set of commonly used ",(0,i.jsx)(s.code,{children:"background"})," shades are available by default with the\r\n",(0,i.jsx)(s.code,{children:"theme"})," property."]}),"\n",(0,i.jsxs)(s.p,{children:["Theme values are: ",(0,i.jsx)(s.code,{children:"light"}),", ",(0,i.jsx)(s.code,{children:"dark"}),", ",(0,i.jsx)(s.code,{children:"darkest"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Edit color tokens like this. Only the colors you specify will be set."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const designTokens = {\r\n  theme: 'darkest',\r\n  colors: {\r\n    brand: { 500: '#0D51FD' },\r\n    background: { 1000: '#080808' },\r\n    text: '#ffffff',\r\n    'text-on-primary': '#ffffff',\r\n    'video-bg': '#181818',\r\n  },\r\n};\n"})}),"\n",(0,i.jsx)(s.h3,{id:"spacing",children:"Spacing"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"--dyte-space-1: 4px;\r\n/* ... rest of the spacing scale */\n"})}),"\n",(0,i.jsx)(s.p,{children:"The spacing scale is used for setting width, height, margins, paddings,\r\npositions etc. throughout the components."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The default value for the spacing scale base is ",(0,i.jsx)(s.code,{children:"4px"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Rest of the values are calculated with this base, set to ",(0,i.jsx)(s.code,{children:"--dyte-space-1"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Current spacing scale ranges from ",(0,i.jsx)(s.code,{children:"0"})," to ",(0,i.jsx)(s.code,{children:"96"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"usage-2",children:"Usage"}),"\n",(0,i.jsxs)(s.p,{children:["Set the base of the spacing scale with ",(0,i.jsx)(s.code,{children:"spacingBase"})," property."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const designTokens = {\r\n  spacingBase: 4, // value in px\r\n};\n"})}),"\n",(0,i.jsx)(s.h3,{id:"border-width--border-radius",children:"Border Width & Border Radius"}),"\n",(0,i.jsx)(s.p,{children:"Border Width and Border Radius properties can also be customized with design\r\ntokens!"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Token Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Values"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"borderWidth"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"none"}),", ",(0,i.jsx)(s.code,{children:"thin"}),", ",(0,i.jsx)(s.code,{children:"fat"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"borderRadius"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"sharp"}),", ",(0,i.jsx)(s.code,{children:"rounded"}),", ",(0,i.jsx)(s.code,{children:"extra-rounded"}),", ",(0,i.jsx)(s.code,{children:"circular"})]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"usage-3",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const designTokens = {\r\n  borderWidth: 'thin',\r\n  borderRadius: 'rounded',\r\n};\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"UI Kit Design System"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function g(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);