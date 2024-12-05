"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[18166],{48224:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"polls/voting-on-a-poll","title":"Voting on a poll","description":"Voting on polls in a meeting.","source":"@site/docs/web-core/polls/voting-on-a-poll.mdx","sourceDirName":"polls","slug":"/polls/voting-on-a-poll","permalink":"/web-core/polls/voting-on-a-poll","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/web-core/polls/voting-on-a-poll.mdx","tags":[{"inline":true,"label":"web-core","permalink":"/web-core/tags/web-core"},{"inline":true,"label":"polls","permalink":"/web-core/tags/polls"},{"inline":true,"label":"votes","permalink":"/web-core/tags/votes"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Voting on a poll","description":"Voting on polls in a meeting.","sidebar_position":3,"tags":["web-core","polls","votes"]},"sidebar":"tutorialSidebar","previous":{"title":"Creating a poll","permalink":"/web-core/polls/creating-a-poll"},"next":{"title":"Other poll functions","permalink":"/web-core/polls/other-poll-functions"}}');var l=o(74848),i=o(28453);const s={title:"Voting on a poll",description:"Voting on polls in a meeting.",sidebar_position:3,tags:["web-core","polls","votes"]},r="Voting on a poll",d={},c=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"voting-on-a-poll",children:"Voting on a poll"})}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"meeting.polls.vote()"})," method can be used to register a vote on a poll. It\r\naccepts the following params."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Param"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Default Value"}),(0,l.jsx)(t.th,{children:"Required"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"id"}),(0,l.jsx)(t.td,{children:"string"}),(0,l.jsx)(t.td,{children:"-"}),(0,l.jsx)(t.td,{children:"yes"}),(0,l.jsx)(t.td,{children:"The ID of the poll that is to be voted on."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"index"}),(0,l.jsx)(t.td,{children:"number"}),(0,l.jsx)(t.td,{children:"-"}),(0,l.jsx)(t.td,{children:"yes"}),(0,l.jsx)(t.td,{children:"The index of the option."})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"The following snippet votes for the 1st option on the 1st poll created in the\r\nmeeting."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:"const poll = meeting.polls.items[0];\r\nawait meeting.poll.vote(poll.id, 0);\n"})}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)("title",{children:"Web Core Voting on a poll"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(96540);const l={},i=n.createContext(l);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);