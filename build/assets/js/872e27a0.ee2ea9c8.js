"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[93457],{81361:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"polls/other-poll-functions","title":"Other poll functions","description":"Other poll functions","source":"@site/docs/rn-core/polls/other-poll-functions.mdx","sourceDirName":"polls","slug":"/polls/other-poll-functions","permalink":"/rn-core/polls/other-poll-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/rn-core/polls/other-poll-functions.mdx","tags":[{"inline":true,"label":"rn-core","permalink":"/rn-core/tags/rn-core"},{"inline":true,"label":"polls","permalink":"/rn-core/tags/polls"},{"inline":true,"label":"results","permalink":"/rn-core/tags/results"},{"inline":true,"label":"updates","permalink":"/rn-core/tags/updates"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Other poll functions","description":"Other poll functions","sidebar_position":4,"tags":["rn-core","polls","results","updates"]},"sidebar":"tutorialSidebar","previous":{"title":"Voting on a poll","permalink":"/rn-core/polls/voting-on-a-poll"},"next":{"title":"Introduction","permalink":"/rn-core/plugins/introduction"}}');var l=o(74848),s=o(28453);const r={title:"Other poll functions",description:"Other poll functions",sidebar_position:4,tags:["rn-core","polls","results","updates"]},i="Other poll functions",c={},a=[{value:"View poll results",id:"view-poll-results",level:2},{value:"Get notified when a poll is created or updated",id:"get-notified-when-a-poll-is-created-or-updated",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"other-poll-functions",children:"Other poll functions"})}),"\n",(0,l.jsx)(n.h2,{id:"view-poll-results",children:"View poll results"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"The total votes on a poll can be accessed in the following manner."})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const poll = meeting.polls.items[0];\r\nconst votes = poll.voted;\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"votes"})," is an array of participant ID's (",(0,l.jsx)(n.code,{children:"meeting.participant.id"}),")."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"The total votes on a poll option can be accessed in the following manner."})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const poll = meeting.polls.items[0];\r\nconst options = poll.options;\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"options"})," returns an array of objects, where each object is of type\r\n",(0,l.jsx)(n.a,{href:"./introduction",children:(0,l.jsx)(n.code,{children:"PollObject"})}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"get-notified-when-a-poll-is-created-or-updated",children:"Get notified when a poll is created or updated"}),"\n",(0,l.jsxs)(n.p,{children:["An event is fired each time ",(0,l.jsx)(n.code,{children:"meeting.polls.items"})," is updated or created. User\r\ncan listen for this to get the updated list of polls. the response object\r\ncontains the following properties."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"polls"}),": List of all polls."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"newPoll"}),": A boolean variable which is true when a new poll has been created."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"meeting.polls.on('pollsUpdate', ({ polls, newPoll }) => {\r\n  console.log(polls, newPoll);\r\n});\n"})}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)("title",{children:"React Native Core Other poll functions"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(96540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);