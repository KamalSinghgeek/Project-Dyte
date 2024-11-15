"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[34087],{96820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"components/dyte-poll","title":"dyte-poll","description":"Learn how to use and customize the dyte-poll component in Dyte\'s UI Kit with our detailed documentation.","source":"@site/docs/ui-kit/components/dyte-poll.mdx","sourceDirName":"components","slug":"/components/dyte-poll","permalink":"/ui-kit/components/dyte-poll","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ui-kit/components/dyte-poll.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"description":"Learn how to use and customize the dyte-poll component in Dyte\'s UI Kit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"dyte-poll-form","permalink":"/ui-kit/components/dyte-poll-form"},"next":{"title":"dyte-polls-toggle","permalink":"/ui-kit/components/dyte-polls-toggle"}}');var r=n(74848),s=n(28453);const l={description:"Learn how to use and customize the dyte-poll component in Dyte's UI Kit with our detailed documentation."},d="dyte-poll",i={},c=[{value:"Props",id:"props",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:n,PropsTable:o}=t;return n||u("Head",!0),o||u("PropsTable",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"dyte-poll",children:"dyte-poll"})}),"\n",(0,r.jsx)(t.p,{children:"A poll component."}),"\n",(0,r.jsx)(t.p,{children:"Shows a poll where a user can vote."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<dyte-poll id=\"dyte-el\"></dyte-poll>\r\n\r\n<script>\r\n  const el = document.getElementById('dyte-el');\r\n\r\n  el.addEventListener('dyteVotePoll', (e) => {\r\n    console.log('Voted', e.detail);\r\n  });\r\n\r\n  el.poll = {\r\n    id: 'poll-id',\r\n    question: 'Have you started using dyte yet?',\r\n    options: [\r\n      {\r\n        text: 'Yes',\r\n        votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\r\n        count: 0,\r\n      },\r\n      {\r\n        text: 'Nope',\r\n        votes: [],\r\n        count: 0,\r\n      },\r\n    ],\r\n    anonymous: false,\r\n    hideVotes: false,\r\n    createdBy: 'Vaibhav',\r\n    createdByUserId: 'vaibhavs-user-id',\r\n    voted: [],\r\n  };\r\n<\/script>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,r.jsx)(o,{of:"dyte-poll"}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"UI Kit dyte-poll"})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var o=n(96540);const r={},s=o.createContext(r);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);