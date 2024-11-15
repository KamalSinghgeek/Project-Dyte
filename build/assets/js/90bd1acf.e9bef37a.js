"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[68743],{94655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"basics/components-basics","title":"Components Basics","description":"Learn about the structure of an individual component and figure out how to use","source":"@site/docs/ui-kit/basics/components-basics.mdx","sourceDirName":"basics","slug":"/basics/components-basics","permalink":"/ui-kit/basics/components-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ui-kit/basics/components-basics.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Design System","permalink":"/ui-kit/design-system"},"next":{"title":"Prerequisite","permalink":"/ui-kit/basics/pre-requisite"}}');var s=t(74848),r=t(28453);const d={sidebar_position:1},o="Components Basics",c={},l=[{value:"Usage Guide",id:"usage-guide",level:2},{value:"Write less code",id:"write-less-code",level:3},{value:"Using individual components",id:"using-individual-components",level:3},{value:"Default Props",id:"default-props",level:2},{value:"Component Specific Props",id:"component-specific-props",level:2},{value:"Button variants",id:"button-variants",level:3},{value:"Participant components",id:"participant-components",level:3},{value:"Grid Components",id:"grid-components",level:3},{value:"Parent Grid Component",id:"parent-grid-component",level:4},{value:"Normal Grid Components",id:"normal-grid-components",level:4},{value:"DyteSimpleGrid",id:"dytesimplegrid",level:5},{value:"DyteSimpleGrid",id:"dytesimplegrid-1",level:5},{value:"DyteMixedGrid",id:"dytemixedgrid",level:5},{value:"Example for SimpleGrid",id:"example-for-simplegrid",level:5}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"components-basics",children:"Components Basics"})}),"\n",(0,s.jsx)(n.p,{children:"Learn about the structure of an individual component and figure out how to use\r\nthe UI Kit effectively."}),"\n",(0,s.jsx)(n.h2,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,s.jsx)(n.p,{children:"With the UI Kit, we provide a few set of ways to use it, depending on your needs\r\nand use case."}),"\n",(0,s.jsx)(n.h3,{id:"write-less-code",children:"Write less code"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the provided ",(0,s.jsx)(n.code,{children:"<dyte-meeting />"})," monolith component in case you want\r\nto write less code and not handle all the states and components rendering."]}),"\n",(0,s.jsx)(n.p,{children:"It takes care of all of it and loads the entire meeting UI from your preset."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<body>\r\n  <dyte-meeting id=\"my-meeting\"></dyte-meeting>\r\n\r\n  <script>\r\n    const init = async () => {\r\n      const meeting = await DyteClient.init({\r\n        authToken: '',\r\n        roomName: '',\r\n        defaults: {\r\n          audio: true,\r\n          video: true,\r\n        },\r\n      });\r\n\r\n      document.getElementById('my-meeting').meeting = meeting;\r\n    };\r\n\r\n    init();\r\n  <\/script>\r\n</body>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-individual-components",children:"Using individual components"}),"\n",(0,s.jsx)(n.p,{children:"If you wish to integrate UI Kit components into your UI at various parts, you\r\ncan use the individual components."}),"\n",(0,s.jsx)(n.p,{children:"Here is a basic example which renders a grid if you join the meeting."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div id="app">\r\n  <div id="joining">Joining...</div>\r\n\r\n  <div id="joined-screen" style="display: none;">\r\n    <dyte-grid id="my-grid" class="dyte"></dyte-grid>\r\n    <dyte-mic-toggle class="dyte"></dyte-mic-toggle>\r\n    <dyte-camera-toggle class="dyte"></dyte-camera-toggle>\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  // load meeting\r\n  const app = document.getElementById(\'app\');\r\n\r\n  function passMeeting() {\r\n    const els = document.getElementsByClassName(\'dyte\');\r\n    for (const el of els) {\r\n      el.meeting = meeting;\r\n    }\r\n  }\r\n\r\n  function handleApp() {\r\n    meeting.self.on(\'roomJoined\', () => {\r\n      document.getElementById(\'joining\').remove();\r\n      const joinedScreen = document.getElementById(\'joined-screen\');\r\n      joinedScreen.style.display = \'block\';\r\n      passMeeting();\r\n    });\r\n  }\r\n\r\n  handleApp();\r\n<\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"default-props",children:"Default Props"}),"\n",(0,s.jsxs)(n.p,{children:["Most of the components accept a set of a ",(0,s.jsx)(n.strong,{children:"Default Props"})," for essential\r\nfeatures such as meeting data, meeting APIs, UI Configuration,\r\ninternationalisation & icons."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Prop"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"meeting"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The web-core ",(0,s.jsx)(n.code,{children:"DyteClient"})," object. Contains all the meeting specific data & APIs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"config"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,s.jsx)(n.a,{href:"../reference/interfaces/UIConfig",children:(0,s.jsx)(n.code,{children:"UI Config"})})," config"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"t"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.a,{href:"../reference/#dytei18n",children:"i18n helper"})," method"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"iconPack"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.a,{href:"../reference/#iconpack",children:(0,s.jsx)(n.code,{children:"IconPack"})})," object"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Here is a simple example of how you pass these props to components, here a\r\n",(0,s.jsx)(n.code,{children:"DyteGrid"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const gridEl = document.createElement('dyte-grid');\r\n\r\ngridEl.meeting = meeting;\r\ngridEl.config = config;\r\ngridEl.t = t;\r\ngridEl.iconPack = iconPack;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"component-specific-props",children:"Component Specific Props"}),"\n",(0,s.jsx)(n.p,{children:"Each component also has a set of props specifically."}),"\n",(0,s.jsx)(n.p,{children:"Here are some examples:"}),"\n",(0,s.jsx)(n.h3,{id:"button-variants",children:"Button variants"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<dyte-button>Primary Button (Default)</dyte-button>\r\n<dyte-button variant="secondary">Secondary button</dyte-button>\r\n<dyte-button variant="danger">Danger button</dyte-button>\r\n<dyte-button variant="ghost">Ghost button</dyte-button>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"participant-components",children:"Participant components"}),"\n",(0,s.jsx)(n.p,{children:"These are components which depend on a single participant object or a\r\nparticipant list."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"meeting.self"})," and participant objects from ",(0,s.jsx)(n.code,{children:"meeting.participants"})," can be passed\r\nas a participant to this prop."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const nameTagSelf = document.createElement('dyte-grid');\r\nconst nameTagSelfWithYou = nameTagSelf.cloneNode(true);\r\n\r\nnameTagSelf.participant = nameTagSelfWithYou.participant = participant;\r\n\r\n// You should also pass the `meeting` object to see the\r\n// `(you)` text in name tag to identify self\r\nnameTagSelfWithYou.meeting = meeting;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"grid-components",children:"Grid Components"}),"\n",(0,s.jsx)(n.p,{children:"We have a set of grid components that help you to have any kind of grid you\r\nwish."}),"\n",(0,s.jsx)(n.p,{children:"There are two types of grid components, so that the grid can be easily extended\r\nand modularized."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Parent Grid component - ",(0,s.jsx)(n.code,{children:"dyte-grid"})]}),"\n",(0,s.jsxs)(n.li,{children:["Normal Grid components - ",(0,s.jsx)(n.code,{children:"dyte-simple-grid"}),", ",(0,s.jsx)(n.code,{children:"dyte-mixed-grid"}),",\r\n",(0,s.jsx)(n.code,{children:"dyte-spotlight-grid"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parent-grid-component",children:"Parent Grid Component"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DyteGrid"})," component is a monolith component which handles all grid related\r\nevents and data on it's own and passes the following props to it's children."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Prop"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"participants[]"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Active Participants"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"pinnedParticipants[]"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Pinned Participants"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"screenShareParticipants[]"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Participants who are screen sharing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"plugins[]"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Active Plugins"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"These props are passed to it's children which it computes from the UI Config\r\nwhich is passed to it. By default it will use the default UI Config."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Try changing the ",(0,s.jsx)(n.code,{children:"aspectRatio"})," and ",(0,s.jsx)(n.code,{children:"gap"})," props."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- Pass meeting object to this component too! --\x3e\r\n<dyte-grid aspect-ratio="16:9" gap="8" size="sm"></dyte-grid>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"normal-grid-components",children:"Normal Grid Components"}),"\n",(0,s.jsx)(n.p,{children:"These components just accept the props mentioned above and render the UI."}),"\n",(0,s.jsx)(n.p,{children:"Read more about them in their Reference pages."}),"\n",(0,s.jsx)(n.h5,{id:"dytesimplegrid",children:"DyteSimpleGrid"}),"\n",(0,s.jsxs)(n.p,{children:["Accepts: ",(0,s.jsx)(n.code,{children:"participants"}),", ",(0,s.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This grid renders just the ParticipantTiles of the participants you pass to it.\r\nIt also brings ",(0,s.jsx)(n.code,{children:"pinnedParticipants"})," to the start of the grid."]}),"\n",(0,s.jsx)(n.h5,{id:"dytesimplegrid-1",children:"DyteSimpleGrid"}),"\n",(0,s.jsxs)(n.p,{children:["Accepts: ",(0,s.jsx)(n.code,{children:"participants"}),", ",(0,s.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This grid renders the ParticipantTiles of the participants and\r\npinnedParticipants in separate grids."}),"\n",(0,s.jsx)(n.p,{children:"Pinned participants are in spotlight area, i.e; larger grid."}),"\n",(0,s.jsx)(n.h5,{id:"dytemixedgrid",children:"DyteMixedGrid"}),"\n",(0,s.jsxs)(n.p,{children:["Accepts: ",(0,s.jsx)(n.code,{children:"participants"}),", ",(0,s.jsx)(n.code,{children:"pinnedParticipants"}),", ",(0,s.jsx)(n.code,{children:"screenShareParticipants"}),",\r\n",(0,s.jsx)(n.code,{children:"plugins"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This grid renders screenshares as well as plugins in the main larger view and\r\nrenders a smaller grid on the right side which is configurable via the UI\r\nConfig. You can use SimleGrid or SpotlightGrid here."}),"\n",(0,s.jsxs)(n.p,{children:["If you just want to render ",(0,s.jsx)(n.code,{children:"self"})," twice in a SimpleGrid:"]}),"\n",(0,s.jsx)(n.h5,{id:"example-for-simplegrid",children:"Example for SimpleGrid"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// load meeting\r\n\r\nconst simpleGrid = document.createElement('dyte-simple-grid');\r\nsimpleGrid.aspectRatio = '1:1';\r\nsimpleGrid.gap = 8;\r\nsimpleGrid.participants = [meeting.self, meeting.self];\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"UI Kit Components Basics"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);