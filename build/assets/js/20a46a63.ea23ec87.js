"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[87384],{93694:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"advanced/advance","title":"Advance","description":"Defaults Configuration","source":"@site/docs/react-web-core/advanced/advance.mdx","sourceDirName":"advanced","slug":"/advanced/advance","permalink":"/react-web-core/advanced/advance","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/advanced/advance.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Advance","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/react-web-core/introduction"},"next":{"title":"Introduction","permalink":"/react-web-core/local-user/introduction"}}');var t=i(74848),a=i(28453);const o={title:"Advance",sidebar_position:1},d=void 0,c={},s=[{value:"Defaults Configuration",id:"defaults-configuration",level:2},{value:"audio",id:"audio",level:3},{value:"video",id:"video",level:3},{value:"screenShare.displaySurface",id:"screensharedisplaysurface",level:3},{value:"mediaConfiguration",id:"mediaconfiguration",level:3},{value:"isNonPreferredDevice",id:"isnonpreferreddevice",level:3},{value:"autoSwitchAudioDevice",id:"autoswitchaudiodevice",level:3},{value:"recording",id:"recording",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"defaults-configuration",children:"Defaults Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"await DyteClient.init({\r\n  defaults: {\r\n    ...\r\n  }\r\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"While initializing DyteClient you can pass configuration overrides, the available options are"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type DefaultOptions {\r\n\tvideo?: boolean;\r\n\taudio?: boolean;\r\n\tscreenShare?: {\r\n\t\tdisplaySurface?: 'window' | 'monitor' | 'browser';\r\n\t};\r\n\tmediaConfiguration?: {\r\n\t\tvideo?: VideoQualityConstraints,\r\n\t\taudio?: AudioQualityConstraints,\r\n\t}\r\n\tisNonPreferredDevice?: (device: MediaDeviceInfo) => boolean;\r\n\t/**\r\n\t * If true, will automatically switch audio input and output device\r\n\t * to a new device connected mid call. (In case of disconnection switch\r\n\t * will happen automatically in both cases)\r\n\t */\r\n\tautoSwitchAudioDevice?: boolean;\r\n\trecording?: RecordingConfig;\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"audio",children:"audio"}),"\n",(0,t.jsx)(n.p,{children:"This optional propery is true by default and defines whether audioTrack would be acquired and enabled on SDK initialization"}),"\n",(0,t.jsx)(n.h3,{id:"video",children:"video"}),"\n",(0,t.jsx)(n.p,{children:"This optional propery is true by default and defines whether videoTrack would be acquired and enabled on SDK initialization"}),"\n",(0,t.jsx)(n.h3,{id:"screensharedisplaysurface",children:"screenShare.displaySurface"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the ",(0,t.jsx)(n.em,{children:"preferred"})," screenshare surface, user will still be shown all possible options but the one configured here will be preselected"]}),"\n",(0,t.jsx)(n.h3,{id:"mediaconfiguration",children:"mediaConfiguration"}),"\n",(0,t.jsx)(n.p,{children:"Defines media quality configuration"}),"\n",(0,t.jsx)(n.p,{children:"For audio -"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\r\n\techoCancellation?: boolean, // default true\r\n\tnoiseSupression?: boolean, // default true\r\n\tautoGainControl?: boolean, // default true\r\n\tenableStereo?: boolean, // default false\r\n\tenableHighBitrate?: boolean // default false\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For applications where audio quality needs to be high and as loseless as possible"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\r\n\techoCancellation: false,\r\n\tnoiseSupression: false,\r\n\tautoGainControl: false,\r\n\tenableStereo: true,\r\n\tenableHighBitrate: true,\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For video -"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\r\n\twidth: { ideal: number },\r\n\theight: { ideal: number },\r\n\tframeRate?: { ideal: number },\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"isnonpreferreddevice",children:"isNonPreferredDevice"}),"\n",(0,t.jsx)(n.p,{children:"Our SDK will acquire media devices preferring virtual devices to not be selected by default (OBS, iPhone continuity)\r\nYou can override this logic by using your own function to decide the preference"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'defaults: {\r\n  ...\r\n  isNonPreferredDevice: (device: MediaDeviceInfo) => {\r\n    if(device.label.startsWith("Virtual")) {\r\n      return false\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"autoswitchaudiodevice",children:"autoSwitchAudioDevice"}),"\n",(0,t.jsx)(n.p,{children:"By default, when a new audio device is plugged in our SDK switches to that device. You can configure that behaviour"}),"\n",(0,t.jsx)(n.h3,{id:"recording",children:"recording"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\r\n\tfileNamePrefix?: string;\r\n\tvideoConfig?: {\r\n\t\theight?: number;\r\n\t\twidth?: number;\r\n\t\tcodec?: string;\r\n\t};\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/guides/capabilities/recording/configure-codecs#configure-codecs",children:"recording codec guide"})," for info the ",(0,t.jsx)(n.code,{children:"codec"})," parameter"]}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("title",{children:"React Web Core Advance"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var r=i(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);