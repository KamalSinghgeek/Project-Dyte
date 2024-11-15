"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[59449],{80518:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"pre-call/virtual-bg","title":"","description":"Virtual Background","source":"@site/docs/react-web-core/pre-call/3-virtual-bg.mdx","sourceDirName":"pre-call","slug":"/pre-call/virtual-bg","permalink":"/react-web-core/pre-call/virtual-bg","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/pre-call/3-virtual-bg.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Virtual BG and Noise Cancellation"},"sidebar":"tutorialSidebar","previous":{"title":"Handling Browser Permissions","permalink":"/react-web-core/pre-call/handling-permissions"},"next":{"title":"Meeting Metadata","permalink":"/react-web-core/pre-call/meeting-meta"}}');var i=n(74848),t=n(28453);const d={sidebar_label:"Virtual BG and Noise Cancellation"},s="",o={},l=[{value:"Virtual Background",id:"virtual-background",level:2},{value:"Installation",id:"installation",level:3},{value:"Initialize",id:"initialize",level:3},{value:"Add an image as a background",id:"add-an-image-as-a-background",level:3},{value:"Blur the background",id:"blur-the-background",level:3},{value:"Remove blur/virtual background",id:"remove-blurvirtual-background",level:3},{value:"Noise Cancellation (Krisp.ai)",id:"noise-cancellation-krispai",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{TabItem:n,Tabs:a}=r;return n||h("TabItem",!0),a||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:""})}),"\n",(0,i.jsx)(r.h2,{id:"virtual-background",children:"Virtual Background"}),"\n",(0,i.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(r.p,{children:'To enable the virtual background feature in your application, first you need to install the "Background Transformer" package.'}),"\n",(0,i.jsxs)(a,{groupId:"framework",children:[(0,i.jsx)(n,{value:"npm",label:"NPM",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm i @dytesdk/video-background-transformer\n"})})}),(0,i.jsxs)(n,{value:"cdn",label:"CDN",children:[(0,i.jsx)(r.p,{children:"If you are using the web-core CDN script bundle, you can add the package by including a script tag in the head section of your HTML file:"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'<script src="https://cdn.jsdelivr.net/npm/@dytesdk/video-background-transformer/dist/index.iife.js"><\/script>\n'})})]})]}),"\n",(0,i.jsx)(r.h3,{id:"initialize",children:"Initialize"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"import DyteVideoBackgroundTransformer from '@dytesdk/video-background-transformer';\n"})}),"\n",(0,i.jsxs)(r.p,{children:["If you installed the package using a script tag, the ",(0,i.jsx)(r.code,{children:"DyteVideoBackgroundTransformer"})," will be automatically available for use once the installation process is complete."]}),"\n",(0,i.jsx)(r.p,{children:"2.x versions of DyteVideoBackgroundTransformer use their own rendering mechanism thus require you to disable the default per frame canvas rendering."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"await meeting.self.setVideoMiddlewareGlobalConfig({ disablePerFrameCanvasRendering: true });\n"})}),"\n",(0,i.jsxs)(r.p,{children:["For reference, A middleware such as ",(0,i.jsx)(r.a,{href:"https://github.com/dyte-in/streams-middleware-samples/blob/main/video/company-branding.js",children:"company branding"})," with the default per frame rendering can be rewritten without per frame rendering as ",(0,i.jsx)(r.a,{href:"https://github.com/dyte-in/streams-middleware-samples/blob/main/video/middleware-with-per-frame-rendering-disabled/company-branding.js",children:"this"}),"."]}),"\n",(0,i.jsx)(r.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(r.p,{children:["If you don't want to disable the default per frame rendering mechanism due to a custom middleware, please use the ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@dytesdk/video-background-transformer/v/1.1.8",children:"legacy version"})," (README included) of DyteVideoBackgroundTransformer that is compatible with react-web-core 1.x versions."]})}),"\n",(0,i.jsx)(r.p,{children:"Now that we have disabled the per frame rendering, We can initialise the DyteVideoBackgroundTransformer."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"const videoBackgroundTransformer = await DyteVideoBackgroundTransformer.init({\r\n    meeting: meeting,\r\n    segmentationConfig: {\r\n      pipeline: 'canvas2dCpu', // 'webgl2' | 'canvas2dCpu'\r\n    },\r\n});\r\n\n"})}),"\n",(0,i.jsxs)(r.p,{children:["To customise DyteVideoBackgroundTransformer configs, please refer to the ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@dytesdk/video-background-transformer?activeTab=readme",children:"video background transfomer"})," NPM package."]}),"\n",(0,i.jsxs)(r.admonition,{title:"Note",type:"info",children:[(0,i.jsxs)(r.p,{children:["DyteVideoBackgroundTransformer's 2.x version requires you to use web-core 2.x versions. Please refer to our web-core ",(0,i.jsx)(r.a,{href:"https://docs.dyte.io/web-core/upgrade",children:"upgrade guide"}),"."]}),(0,i.jsxs)(r.p,{children:["If, In case you don't want to upgrade SDKs yet, Please use the ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@dytesdk/video-background-transformer/v/1.1.8",children:"legacy version"})," (README included) of DyteVideoBackgroundTransformer that is compatible with react-web-core 1.x versions."]})]}),"\n",(0,i.jsx)(r.h3,{id:"add-an-image-as-a-background",children:"Add an image as a background"}),"\n",(0,i.jsxs)(r.p,{children:["To incorporate an image as a background, create a static background video middleware using the ",(0,i.jsx)(r.code,{children:"createStaticBackgroundVideoMiddleware"})," method provided by the ",(0,i.jsx)(r.code,{children:"videoBackgroundTransformer"})," object."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"const videoMiddleware =\r\n  await videoBackgroundTransformer.createStaticBackgroundVideoMiddleware(\r\n    `https://assets.dyte.io/backgrounds/bg-dyte-office.jpg`\r\n  );\r\nmeeting.self.addVideoMiddleware(videoMiddleware);\n"})}),"\n",(0,i.jsx)(r.admonition,{title:"note",type:"info",children:(0,i.jsx)(r.p,{children:"Ensure that the URL of the image allows Cross-Origin Resource Sharing (CORS) to avoid canvas tainting issues. If the CORS policy is not allowed for the image, it may result in the video feed getting stuck on a frame or appearing blank."})}),"\n",(0,i.jsx)(r.h3,{id:"blur-the-background",children:"Blur the background"}),"\n",(0,i.jsxs)(r.p,{children:["Create a background blur video middleware using the ",(0,i.jsx)(r.code,{children:"createBackgroundBlurVideoMiddleware"})," method provided by the ",(0,i.jsx)(r.code,{children:"videoBackgroundTransformer"})," object."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"const videoMiddleware =\r\n  await videoBackgroundTransformer.createBackgroundBlurVideoMiddleware(10);\r\nmeeting.self.addVideoMiddleware(videoMiddleware);\n"})}),"\n",(0,i.jsx)(r.p,{children:"Pass intensity as a parameter between 1-100"}),"\n",(0,i.jsx)(r.h3,{id:"remove-blurvirtual-background",children:"Remove blur/virtual background"}),"\n",(0,i.jsxs)(r.p,{children:["Use the ",(0,i.jsx)(r.code,{children:"removeVideoMiddleware"})," method"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"meeting.self.removeVideoMiddleware(videoMiddleware);\n"})}),"\n",(0,i.jsx)(r.h2,{id:"noise-cancellation-krispai",children:"Noise Cancellation (Krisp.ai)"}),"\n",(0,i.jsx)(r.admonition,{title:"note",type:"info",children:(0,i.jsxs)(r.p,{children:["This is a paid addon, contact ",(0,i.jsx)(r.a,{href:"mailto:support@dyte.io",children:"support@dyte.io"})," for access."]})}),"\n",(0,i.jsx)(r.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsx)(r.p,{children:"Create/Append to the .npmrc file in the project root with the below contents"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"//registry.npmjs.org/:_authToken=<token-from-dyte>\r\n@dytesdk:registry=https://registry.npmjs.org/\r\n#always-auth=true\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"npm i @dytesdk/krisp-noise-cancellation\n"})}),"\n",(0,i.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Initialise the middleware"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const krisp = new Krisp();\r\nawait krisp.init(meeting);\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Enable / disable the noise cancellation"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"krisp.activate()\r\n// krisp.deactivate()\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>s});var a=n(96540);const i={},t=a.createContext(i);function d(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);