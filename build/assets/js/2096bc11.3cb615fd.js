"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[32359],{75708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"polls/creating-a-poll","title":"Creating a poll","description":"Create and manage polls in your Android app using Dyte\'s documentation on Polls Creation.","source":"@site/docs/android-core/polls/creating-a-poll.mdx","sourceDirName":"polls","slug":"/polls/creating-a-poll","permalink":"/android-core/polls/creating-a-poll","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/android-core/polls/creating-a-poll.mdx","tags":[{"inline":true,"label":"android-core","permalink":"/android-core/tags/android-core"},{"inline":true,"label":"polls","permalink":"/android-core/tags/polls"},{"inline":true,"label":"create","permalink":"/android-core/tags/create"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Creating a poll","description":"Create and manage polls in your Android app using Dyte\'s documentation on Polls Creation.","sidebar_position":2,"tags":["android-core","polls","create"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/android-core/polls/introduction"},"next":{"title":"Voting on a poll","permalink":"/android-core/polls/voting-on-a-poll"}}');var r=t(74848),i=t(28453);const l={title:"Creating a poll",description:"Create and manage polls in your Android app using Dyte's documentation on Polls Creation.",sidebar_position:2,tags:["android-core","polls","create"]},d="Creating a poll",s={},a=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-a-poll",children:"Creating a poll"})}),"\n",(0,r.jsxs)(n.p,{children:["A new poll can be created using the ",(0,r.jsx)(n.code,{children:"create"})," method from the\r\n",(0,r.jsx)(n.a,{href:"./introduction",children:(0,r.jsx)(n.code,{children:"meeting.polls"})})," object. The ",(0,r.jsx)(n.code,{children:"meeting.polls.create()"})," method\r\naccepts the following params."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"question"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"The question that is to be voted for."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"string[]"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"The options of the poll."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"anonymous"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"If true, the poll votes are anonymous."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hideVotes"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"If true, the votes on the poll are hidden."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The following snippet creates a poll where votes are anonymous."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'meeting.poll.create(\r\n    "Are you an early bird or a night owl?",\r\n    listOf("Early bird", "Night owl"),\r\n    true,\r\n    false\r\n)\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("title",{children:"Android Core Creating a poll"}),(0,r.jsx)("meta",{name:"description",content:"Create and manage polls in your Android app using Dyte's documentation on Polls Creation."})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var o=t(96540);const r={},i=o.createContext(r);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);