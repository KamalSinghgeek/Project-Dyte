"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69300],{78253:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"usage/stores-api/manage-stores","title":"Operations on Store","description":"Learn how to manage stores in Dyte\'s Plugin SDK Usage documentation. Effectively handle and organize stores for seamless plugin development. Dyte Docs.","source":"@site/docs/plugin-sdk/usage/stores-api/manage-stores.mdx","sourceDirName":"usage/stores-api","slug":"/usage/stores-api/manage-stores","permalink":"/plugin-sdk/usage/stores-api/manage-stores","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/plugin-sdk/usage/stores-api/manage-stores.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Operations on Store","sidebar_position":2,"description":"Learn how to manage stores in Dyte\'s Plugin SDK Usage documentation. Effectively handle and organize stores for seamless plugin development. Dyte Docs."},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/plugin-sdk/usage/stores-api/introduction"},"next":{"title":"How to work with Plugin Stores","permalink":"/plugin-sdk/guides/how-to-work-with-plugin-stores"}}');var r=s(74848),i=s(28453);const d={title:"Operations on Store",sidebar_position:2,description:"Learn how to manage stores in Dyte's Plugin SDK Usage documentation. Effectively handle and organize stores for seamless plugin development. Dyte Docs."},l=void 0,a={},c=[{value:"Get store name",id:"get-store-name",level:3},{value:"Check if store is local",id:"check-if-store-is-local",level:3},{value:"Set a value",id:"set-a-value",level:3},{value:"Update a value",id:"update-a-value",level:3},{value:"Get a value",id:"get-a-value",level:3},{value:"Delete a value",id:"delete-a-value",level:3},{value:"Get all data",id:"get-all-data",level:3},{value:"Subscribe to data change",id:"subscribe-to-data-change",level:3},{value:"Unsubscribe to data change",id:"unsubscribe-to-data-change",level:3}];function o(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"There are two kinds of stores global (realtime) and local (accessible only to\r\nthe person who created them). You can perform CRUD operations on each store."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const store = plugin.stores.create('myStore');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-store-name",children:"Get store name"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const name = store.name;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"check-if-store-is-local",children:"Check if store is local"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const isLocal = store.isLocal;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"set-a-value",children:"Set a value"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier used to store value."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"Data to be set."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"await store.set('key', { ... });\n"})}),"\n",(0,r.jsx)(t.h3,{id:"update-a-value",children:"Update a value"}),"\n",(0,r.jsxs)(t.p,{children:["Updates an already existing value in the store. If the stored value is\r\n",(0,r.jsx)(t.code,{children:"['a', 'b']"}),", the operation ",(0,r.jsx)(t.code,{children:"store.update('key', ['c'])"})," will modify the value\r\nto ",(0,r.jsx)(t.code,{children:"['a','b','c']"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier used to update value."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"Data to be updated."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"await store.update('key', { ... });\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-a-value",children:"Get a value"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier used to get a value."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"store.get('key');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"delete-a-value",children:"Delete a value"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier used to delete a value."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"await store.delete('key');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-all-data",children:"Get all data"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"store.getAll();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"subscribe-to-data-change",children:"Subscribe to data change"}),"\n",(0,r.jsxs)(t.p,{children:["Attaches an event listener on store key's to listen for data change on a\r\nspecific key. ",(0,r.jsx)(t.strong,{children:"Ideally called just after store is created."})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"store.subscribe('key', () => { ... });\n"})}),"\n",(0,r.jsx)(t.h3,{id:"unsubscribe-to-data-change",children:"Unsubscribe to data change"}),"\n",(0,r.jsx)(t.p,{children:"Removes all event listeners attached to a store key."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Unique identifier."}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"true"})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"store.unsubscribe('key');\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("title",{children:"Plugin SDK Operations on Store"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to manage stores in Dyte's Plugin SDK Usage documentation. Effectively handle and organize stores for seamless plugin development."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);