"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[921],{87536:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"capabilities/polls/uikit","title":"UIKit components for Polls","description":"Using Dyte\'s UIKit you can simplify the process of adding polls in your meetings!","source":"@site/docs/guides/capabilities/polls/uikit.mdx","sourceDirName":"capabilities/polls","slug":"/capabilities/polls/uikit","permalink":"/guides/capabilities/polls/uikit","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/polls/uikit.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Getting started with Polls","permalink":"/guides/capabilities/polls/getting_started"},"next":{"title":"Introduction to Dyte\'s Webinar","permalink":"/guides/capabilities/webinar/intro-webinar"}}');var r=l(74848),o=l(28453);const i={},s="UIKit components for Polls",a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Dyte Poll Form : Create a new poll",id:"dyte-poll-form--create-a-new-poll",level:2},{value:"Dyte Polls : View existing polls",id:"dyte-polls--view-existing-polls",level:2},{value:"Dyte Poll: View poll",id:"dyte-poll-view-poll",level:2},{value:"Dyte Polls Toggle",id:"dyte-polls-toggle",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:l,TabItem:t,Tabs:i}=n;return l||h("Head",!0),t||h("TabItem",!0),i||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"uikit-components-for-polls",children:"UIKit components for Polls"})}),"\n",(0,r.jsx)(n.p,{children:"Using Dyte's UIKit you can simplify the process of adding polls in your meetings!"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install Core SDK for your framework"}),"\n",(0,r.jsx)(n.li,{children:"Install UIKit for your framework"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dyte-poll-form--create-a-new-poll",children:"Dyte Poll Form : Create a new poll"}),"\n",(0,r.jsxs)(n.p,{children:["If a user has the right set of permissions, the first thing they woulds want to do is create a poll for the meeting. The easiest way to get started is to grab the ",(0,r.jsx)(n.code,{children:"Dyte Poll Form"})," which allows you to create a poll. Check out the implementation based on the framework you are using:"]}),"\n",(0,r.jsxs)(i,{groupId:"framework",children:[(0,r.jsx)(t,{value:"web-components",label:"Web Components",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"  <dyte-poll-form id=\"dyte-el\"></dyte-poll-form>\r\n    <script>\r\n      document.getElementById('dyte-el').addEventListener('dyteCreatePoll', (e) => {\r\n      console.log('create poll', e.detail)\r\n      });\r\n    <\/script>\n"})})}),(0,r.jsxs)(t,{value:"react",label:"React",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePollForm onDyteCreatePoll={(e) => console.log('create poll', e.detail)} />\n"})}),(0,r.jsxs)(n.p,{children:["You can control what happens after a poll is creating by using ",(0,r.jsx)(n.code,{children:"onDyteCreatePoll"})," prop."]})]}),(0,r.jsx)(t,{value:"angular",label:"Angular",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"    <dyte-poll-form id=\"dyte-el\"></dyte-poll-form>\r\n\r\n    <script>\r\n      document.getElementById('dyte-el').addEventListener('dyteCreatePoll', (e) => {\r\n        console.log('create poll', e.detail);\r\n      });\r\n    <\/script>\n"})})}),(0,r.jsx)(t,{value:"flutter",label:"Flutter",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available on Flutter."})})}),(0,r.jsx)(t,{value:"react-native",label:"React Native",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePollForm onDyteCreatePoll={(e) => console.log('create poll', e.detail)} />\n"})})}),(0,r.jsx)(t,{value:"android",label:"Android(Kotlin)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for android development."})})}),(0,r.jsx)(t,{value:"ios",label:"iOS(Swift)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for iOS development."})})})]}),"\n",(0,r.jsx)(n.h2,{id:"dyte-polls--view-existing-polls",children:"Dyte Polls : View existing polls"}),"\n",(0,r.jsxs)(n.p,{children:["After a user is done creating a poll, they can see all the polls available in a meeting using ",(0,r.jsx)(n.code,{children:"Dyte Polls"})," and enable/disable the polls."]}),"\n",(0,r.jsxs)(i,{groupId:"framework",children:[(0,r.jsx)(t,{value:"web-components",label:"Web Components",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"      <dyte-polls id=\"dyte-el\"></dyte-polls>\r\n\r\n      <script>\r\n        document.getElementById('dyte-el').meeting = meeting;\r\n      <\/script>\r\n\r\n      <style>\r\n        dyte-polls {\r\n          height: 480px;\r\n          width: 100%;\r\n          max-width: 320px;\r\n          background-color: '#000';\r\n        }\r\n      </style>\n"})})}),(0,r.jsx)(t,{value:"react",label:"React",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePolls\r\n  meeting={meeting}\r\n  style={{ height: '480px', maxWidth: '320px', backgroundColor: '#000' }}\r\n/>\n"})})}),(0,r.jsx)(t,{value:"angular",label:"Angular",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"    <dyte-polls id=\"dyte-el\"></dyte-polls>\r\n    <script>\r\n      document.getElementById('dyte-el').meeting = meeting;\r\n    <\/script>\r\n\r\n    <style>\r\n      dyte-polls {\r\n        height: 480px;\r\n        width: 100%;\r\n        max-width: 320px;\r\n        background-color: '#000';\r\n      }\r\n    </style>\n"})})}),(0,r.jsx)(t,{value:"flutter",label:"Flutter",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available on Flutter."})})}),(0,r.jsx)(t,{value:"react-native",label:"React Native",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePolls\r\n  meeting={meeting}\r\n  style={{ height: '480px', maxWidth: '320px', backgroundColor: '#000' }}\r\n/>\n"})})}),(0,r.jsx)(t,{value:"android",label:"Android(Kotlin)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for android development."})})}),(0,r.jsx)(t,{value:"ios",label:"iOS(Swift)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for iOS development."})})})]}),"\n",(0,r.jsx)(n.h2,{id:"dyte-poll-view-poll",children:"Dyte Poll: View poll"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Dyte Poll"})," component lets the users view a given poll. It requires a poll object to render the poll."]}),"\n",(0,r.jsxs)(i,{groupId:"framework",children:[(0,r.jsx)(t,{value:"web-components",label:"Web Components",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"      <dyte-poll id=\"dyte-el\"></dyte-poll>\r\n\r\n      <script>\r\n        const el = document.getElementById('dyte-el');\r\n\r\n        el.addEventListener('dyteVotePoll', (e) => {\r\n          console.log('Voted', e.detail);\r\n        });\r\n\r\n        el.poll = {\r\n          id: 'poll-id',\r\n          question: 'Have you started using dyte yet?',\r\n          options: [\r\n            {\r\n              text: 'Yes',\r\n              votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\r\n              count: 0,\r\n            },\r\n            {\r\n              text: 'Nope',\r\n              votes: [],\r\n              count: 0,\r\n            },\r\n          ],\r\n          anonymous: false,\r\n          hideVotes: false,\r\n          createdBy: 'Vaibhav',\r\n          createdByUserId: 'vaibhavs-user-id',\r\n          voted: [],\r\n        };\r\n      <\/script>\n"})})}),(0,r.jsx)(t,{value:"react",label:"React",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePoll\r\n  poll={{\r\n    id: 'poll-id',\r\n    question: 'Have you started using dyte yet?',\r\n    options: [\r\n      {\r\n        text: 'Yes',\r\n        votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\r\n        count: 0,\r\n      },\r\n      {\r\n        text: 'Nope',\r\n        votes: [],\r\n        count: 0,\r\n      },\r\n    ],\r\n    anonymous: false,\r\n    hideVotes: false,\r\n    createdBy: 'Vaibhav',\r\n    createdByUserId: 'vaibhavs-user-id',\r\n    voted: [],\r\n  }}\r\n  onDyteVotePoll={(e) => {\r\n    console.log('Voted', e.detail);\r\n  }}\r\n/>\n"})})}),(0,r.jsx)(t,{value:"angular",label:"Angular",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"      <dyte-poll id=\"dyte-el\"></dyte-poll>\r\n\r\n      <script>\r\n        const el = document.getElementById('dyte-el');\r\n\r\n        el.addEventListener('dyteVotePoll', (e) => {\r\n          console.log('Voted', e.detail);\r\n        });\r\n\r\n        el.poll = {\r\n          id: 'poll-id',\r\n          question: 'Have you started using dyte yet?',\r\n          options: [\r\n            {\r\n              text: 'Yes',\r\n              votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\r\n              count: 0,\r\n            },\r\n            {\r\n              text: 'Nope',\r\n              votes: [],\r\n              count: 0,\r\n            },\r\n          ],\r\n          anonymous: false,\r\n          hideVotes: false,\r\n          createdBy: 'Vaibhav',\r\n          createdByUserId: 'vaibhavs-user-id',\r\n          voted: [],\r\n        };\r\n      <\/script>\n"})})}),(0,r.jsx)(t,{value:"flutter",label:"Flutter",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available on Flutter."})})}),(0,r.jsx)(t,{value:"react-native",label:"React Native",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<DytePoll\r\n  poll={{\r\n    id: 'poll-id',\r\n    question: 'Have you started using dyte yet?',\r\n    options: [\r\n      {\r\n        text: 'Yes',\r\n        votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\r\n        count: 0,\r\n      },\r\n      {\r\n        text: 'Nope',\r\n        votes: [],\r\n        count: 0,\r\n      },\r\n    ],\r\n    anonymous: false,\r\n    hideVotes: false,\r\n    createdBy: 'Vaibhav',\r\n    createdByUserId: 'vaibhavs-user-id',\r\n    voted: [],\r\n  }}\r\n  onDyteVotePoll={(e) => {\r\n    console.log('Voted', e.detail);\r\n  }}\r\n/>\n"})})}),(0,r.jsx)(t,{value:"android",label:"Android(Kotlin)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for android development."})})}),(0,r.jsx)(t,{value:"ios",label:"iOS(Swift)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for iOS development."})})})]}),"\n",(0,r.jsx)(n.h2,{id:"dyte-polls-toggle",children:"Dyte Polls Toggle"}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"Dyte Polls Toggle"}),", one can easily change the visibility of a poll on the screen. It requires the user's meeting object to see the unread polls count badge on the component."]}),"\n",(0,r.jsxs)(i,{groupId:"framework",children:[(0,r.jsx)(t,{value:"web-components",label:"Web Components",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'        <dyte-polls-toggle variant="horizontal" class="dyte-el"></dyte-polls-toggle>\r\n        <script>\r\n          const elements = document.getElementsByClassName(\'dyte-el\');\r\n          for (const el of elements) {\r\n            el.meeting = meeting;\r\n          }\r\n        <\/script>\n'})})}),(0,r.jsx)(t,{value:"react",label:"React",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<DytePollsToggle variant="horizontal" size="sm" meeting={meeting} />\n'})})}),(0,r.jsx)(t,{value:"angular",label:"Angular",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'      <dyte-polls-toggle variant="horizontal" class="dyte-el"></dyte-polls-toggle>\r\n\r\n      <script>\r\n        const elements = document.getElementsByClassName(\'dyte-el\');\r\n        for (const el of elements) {\r\n          el.meeting = meeting;\r\n        }\r\n      <\/script>\n'})})}),(0,r.jsx)(t,{value:"flutter",label:"Flutter",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available on Flutter."})})}),(0,r.jsx)(t,{value:"react-native",label:"React Native",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<DytePollsToggle variant="horizontal" size="sm" meeting={meeting} />\n'})})}),(0,r.jsx)(t,{value:"android",label:"Android(Kotlin)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for android development."})})}),(0,r.jsx)(t,{value:"ios",label:"iOS(Swift)",children:(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This component is not yet available for iOS development."})})})]}),"\n",(0,r.jsx)(l,{children:(0,r.jsx)("title",{children:"UIKit components for Polls Guide"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>s});var t=l(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);