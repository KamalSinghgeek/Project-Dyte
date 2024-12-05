"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5312],{23454:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"rest-apis/v2-migration-guide","title":"Migrate to v2 REST API","description":"Dyte v2 REST API is now the primary API for Dyte and the focus of development","source":"@site/docs/guides/rest-apis/v2-migration-guide.mdx","sourceDirName":"rest-apis","slug":"/v2-migration-guide","permalink":"/guides/v2-migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/rest-apis/v2-migration-guide.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"frontMatter":{"title":"Migrate to v2 REST API","slug":"/v2-migration-guide"},"sidebar":"tutorialSidebar","previous":{"title":"Live Stream APIs","permalink":"/guides/rest-apis/livestream-dyte-meeting"},"next":{"title":"FAQ","permalink":"/guides/faq"}}');var r=i(74848),s=i(28453);const d={title:"Migrate to v2 REST API",slug:"/v2-migration-guide"},a="Migrate to v2 REST API",o={},l=[{value:"What&#39;s new with Dyte v2 REST API",id:"whats-new-with-dyte-v2-rest-api",level:2},{value:"New endpoints",id:"new-endpoints",level:3},{value:"Improved performance",id:"improved-performance",level:3},{value:"Authentication schema changes",id:"authentication-schema-changes",level:3},{value:"Preset changes",id:"preset-changes",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Enhanced structure",id:"enhanced-structure",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Migrate to v2",id:"migrate-to-v2",level:2},{value:"Copy v1 Presets to v2",id:"copy-v1-presets-to-v2",level:3},{value:"General guidelines",id:"general-guidelines",level:3},{value:"Postman collection",id:"postman-collection",level:2},{value:"Dyte API endpoint map",id:"dyte-api-endpoint-map",level:2},{value:"Meetings and participants",id:"meetings-and-participants",level:3},{value:"Webhooks",id:"webhooks",level:3},{value:"Recording",id:"recording",level:3},{value:"Presets",id:"presets",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"migrate-to-v2-rest-api",children:"Migrate to v2 REST API"})}),"\n",(0,r.jsx)(n.p,{children:"Dyte v2 REST API is now the primary API for Dyte and the focus of development\r\nefforts. The API has been redesigned to cater to a wider range of developer\r\nrequirements and to enhance the developer experience. With v2 endpoints you can\r\nmanage Dyte's organizations, sessions, meetings, recording, webhooks,\r\nlivestreaming, analytics, and much more."}),"\n",(0,r.jsx)(n.p,{children:"We highly recommend that you start migrating to v2, as v1 will eventually be\r\ndiscontinued. However, rest assured that support for v1 will still be provided\r\nfor the near future."}),"\n",(0,r.jsx)(n.h2,{id:"whats-new-with-dyte-v2-rest-api",children:"What's new with Dyte v2 REST API"}),"\n",(0,r.jsx)(n.p,{children:"The Dyte v2 REST API includes a range of new features to help you get more from\r\nthe Dyte API."}),"\n",(0,r.jsx)(n.h3,{id:"new-endpoints",children:"New endpoints"}),"\n",(0,r.jsx)(n.p,{children:"While the majority of the endpoints in Dyte API v2 are replacements, we have\r\nintroduced several new endpoints. Here are a few examples of new endpoints we've\r\nadded to v2:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chat Replay"}),": Allows you to programmatically\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/GetSessionChat",children:"retrieve all chat messages"}),"\r\nof a Dyte session."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sessions"}),": Provides information about all\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/GetSessions",children:"meetings"})," that have taken\r\nplace within your organization, including the list of participants, their\r\ndetails, and more."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active session"}),": Provides details about an\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/GetActiveSession",children:"ongoing meeting"}),",\r\nallows to mute participants, create polls, kick participants, and so on."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Livestreaming"}),": Enables you to\r\n",(0,r.jsx)(n.a,{href:"/api#/paths/livestreams/post",children:"create a livestream"}),", start\r\nlivestreaming a meeting, and retrieve livestreaming details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Analytics"}),": Provides complete\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/GetOverallStats",children:"analytics data"})," of an\r\norganization for the specified time period."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Organizations"}),": Allows you to\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/createOrg",children:"create"})," an organization,\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/getOrg",children:"view details"})," of an\r\norganization,\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/editOrg",children:"edit the details"}),", and so on."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Participant token"}),": Allows you to\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/regenerate_token",children:"regenerate authentication token"}),"\r\nfor the given meeting and participant ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Presets"}),": Allows you to\r\n",(0,r.jsx)(n.a,{href:"/api#/operations/delete-presets-preset_id",children:"delete"})," a\r\npreset."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"improved-performance",children:"Improved performance"}),"\n",(0,r.jsx)(n.p,{children:"APIs are optimized for better performance resulting in:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"71% improvement in adding participant time"}),"\n",(0,r.jsx)(n.li,{children:"89% improvement in response times for most endpoint"}),"\n",(0,r.jsx)(n.li,{children:"Significant improvement in caching"}),"\n",(0,r.jsx)(n.li,{children:"32% improvement in analytics"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"authentication-schema-changes",children:"Authentication schema changes"}),"\n",(0,r.jsx)(n.p,{children:"The v2 APIs employ Basic authentication with the organizationId serving as the\r\nusername and APIKEY as the password."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Basic ${base64encode(orgId + ':' + apikey)}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"preset-changes",children:"Preset changes"}),"\n",(0,r.jsx)(n.p,{children:"In v1 REST APIs preset is an optional requirement but you can set it at both the\r\nmeeting and participants level. In V2 preset can only be applied at participant\r\nlevel, but it is a mandatory requirement."}),"\n",(0,r.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,r.jsx)(n.p,{children:"All endpoints now support pagination. The responses to v2 APIs are paginated to\r\nmake them easier to handle."}),"\n",(0,r.jsx)(n.h3,{id:"enhanced-structure",children:"Enhanced structure"}),"\n",(0,r.jsx)(n.p,{children:"The structure of our API requests and responses has been improved, with\r\nambiguous terms and routes present in the v1 APIs being deprecated. The new APIs\r\nare more intuitive to use and perfectly align with your specific needs."}),"\n",(0,r.jsx)(n.h3,{id:"consistency",children:"Consistency"}),"\n",(0,r.jsx)(n.p,{children:"A key feature of the updated v2 version of the Dyte API is consistency among\r\nendpoints, which ensures uniform objects, functions, and behavior across similar\r\nendpoints."}),"\n",(0,r.jsx)(n.h2,{id:"migrate-to-v2",children:"Migrate to v2"}),"\n",(0,r.jsx)(n.p,{children:"To start the migration, do the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Log into the ",(0,r.jsx)(n.a,{href:"https://dev.dyte.io/",children:"Developer Portal"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"API Version"}),", select ",(0,r.jsx)(n.strong,{children:"v2"})," from the drop-down.","\n",(0,r.jsx)("img",{src:"/static/v2-API-migration/v2_selector.png",width:"400",height:"100",alt:"v2 Selector",className:"v2-switch"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"That's all, you are in the v2 version."}),"\n",(0,r.jsx)(n.p,{children:"In the v2 view of the Developer Portal, you can view and manage the meetings and\r\nrecordings that you have created using v2 APIs, as well as access and manage the\r\ndashboard, API keys, logs, and webhooks."}),"\n",(0,r.jsx)(n.p,{children:"Dyte also provides the option to copy your v1 presets to v2, which offers\r\ngreater flexibility."}),"\n",(0,r.jsx)(n.h3,{id:"copy-v1-presets-to-v2",children:"Copy v1 Presets to v2"}),"\n",(0,r.jsx)(n.p,{children:"To copy your v1 presets, do the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"https://dev.dyte.io/",children:"Developer Portal"}),", select ",(0,r.jsx)(n.strong,{children:"Presets"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"Presets"}),", click ",(0,r.jsx)(n.strong,{children:"Migrate from v1"}),". If you're in the v1 view of the\r\nDeveloper Portal, click ",(0,r.jsx)(n.strong,{children:"Migrate to v2"}),"."]}),"\n",(0,r.jsx)("img",{src:"/static/v2-API-migration/Preset1.png",alt:"Migrate Preset",className:"v2-preset-migrate"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select all the presets that you want to copy to v2 and click ",(0,r.jsx)(n.strong,{children:"Migrate\r\nselected"}),". You can also copy all the presets by selecting ",(0,r.jsx)(n.strong,{children:"Select all"}),"."]}),"\n",(0,r.jsx)("img",{src:"/static/v2-API-migration/Preset2.png",width:"300",height:"200",alt:"Migrate Preset All",className:"v2-preset-selectall"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Done"}),". All the selected presets are copied to v2 as well."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By copying the chosen presets in v2, you can maintain consistent roles, UI\r\nelements, buttons, and configurations for your participants in v2 meetings, just\r\nas in v1 meetings."}),"\n",(0,r.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,r.jsx)(n.p,{children:"It is important to understand that v1 and v2 are\r\ndistinct systems. You can not make API calls for v1 entities using v2 APIs."}),(0,r.jsx)(n.p,{children:"Ensure that you are using v2 APIs only for all your v2 meetings. If you need to\r\ncreate an organization using v1 APIs, please use v1 APIs only to create\r\nmeetings, add participants, and so on."}),(0,r.jsx)(n.p,{children:"Although the v1 APIs will continue to function, we strongly recommend that you\r\ntransition to v2 APIs as soon as possible. The updated version offers several\r\nenhancements, such as improved performance and additional capabilities.\r\nAdditionally, all future features will be exclusively developed for the v2 APIs."})]}),"\n",(0,r.jsx)(n.h3,{id:"general-guidelines",children:"General guidelines"}),"\n",(0,r.jsx)(n.p,{children:"The migration process from REST API v1 to v2 can vary depending on the specific\r\nuse case, but here are some general guidelines:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Review changes in API endpoint and payload format"}),": Before making any\r\nchanges, familiarize yourself with the changes in the endpoint URLs and the\r\nformat of the payload data in API v2 compared to API v1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Update API calls"}),": Update all API calls in your code to use the new API v2\r\nendpoints and payload formats."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Understand error codes"})," : Update error handling in your application for v2\r\nerrors."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"postman-collection",children:"Postman collection"}),"\n",(0,r.jsxs)(n.p,{children:["We've provided a ready-to-use\r\n",(0,r.jsx)(n.a,{href:"https://www.postman.com/dyte-api/workspace/dyte-s-public-workspace/collection/208979%5B%E2%80%A6%5D8d7-8739-49ac-b88c-c5e6ec365e21?action=share&creator=20897959",children:"Postman collection"}),"\r\nof relevant APIs to help you get started quickly with the new endpoints and\r\ncapabilities. This allows you to test authentication and experiment with\r\nendpoints."]}),"\n",(0,r.jsx)(n.h2,{id:"dyte-api-endpoint-map",children:"Dyte API endpoint map"}),"\n",(0,r.jsx)(n.p,{children:"The following table maps the Dyte API v2 endpoints to the corresponding v1."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Base URL"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v2"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://api.dyte.io/v1"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://api.dyte.io/v2"})})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"meetings-and-participants",children:"Meetings and participants"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v2"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Create a meeting"}),(0,r.jsx)(n.td,{children:"POST /v1/organizations/{orgId}/meeting"}),(0,r.jsx)(n.td,{children:"POST /v2/meetings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Update details of a meeting"}),(0,r.jsx)(n.td,{children:"PATCH /v1/organizations/{orgId}/meetings/{meetingId}"}),(0,r.jsx)(n.td,{children:"PATCH /v2/meetings/{meetingId}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of a meeting in an org"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{orgId}/meetings/{meetingId}"}),(0,r.jsx)(n.td,{children:"GET /v2/meetings/{meetingId}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of all the meetings in an org"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{orgId}/meetings"}),(0,r.jsx)(n.td,{children:"GET /v2/meetings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Add a participant"}),(0,r.jsx)(n.td,{children:"POST /v1/organizations/{orgId}/meetings/{meetingId}/participant"}),(0,r.jsx)(n.td,{children:"POST /v2/meetings/{meetingId}/participants"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch all participants in a meeting"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{orgId}/meetings/{meetingId}/participants"}),(0,r.jsx)(n.td,{children:"GET /v2/meetings/{meetingId}/participants"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of a participant in a meeting"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{orgId}/meetings/{meetingId}/participants/{participantId}"}),(0,r.jsx)(n.td,{children:"GET /v2/meetings/{meetingId}/participants/{participantId}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edit participant details"}),(0,r.jsx)(n.td,{children:"PATCH /v1/organizations/{orgId}/meetings/{meetingId}/participants/{participantId}"}),(0,r.jsx)(n.td,{children:"PATCH /v2/meetings/{meetingId}/participants/{participantId}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Delete a participant"}),(0,r.jsx)(n.td,{children:"DELETE /v1/organizations/{orgId}/meetings/{meetingId}/participants/{participantId}"}),(0,r.jsx)(n.td,{children:"DELETE /v2/meetings/{meetingId}/participants/{participantId}"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"webhooks",children:"Webhooks"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v2"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Add a webhook"}),(0,r.jsx)(n.td,{children:"POST /v1/organizations/{organizationId}/webhook"}),(0,r.jsx)(n.td,{children:"POST /v2/webhooks"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edit a webhook"}),(0,r.jsx)(n.td,{children:"PATCH /v1/organizations/{organizationId}/webhooks/{webhookId}"}),(0,r.jsx)(n.td,{children:"PATCH /v2/webhooks/{webhook_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of all the webhooks in an org"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{organizationId}/webhooks/{webhookId}/logs"}),(0,r.jsx)(n.td,{children:"GET /v2/webhooks"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Update a webhook"}),(0,r.jsx)(n.td,{children:"PUT /v1/organizations/{organizationId}/webhooks/{webhookId}"}),(0,r.jsx)(n.td,{children:"PUT /v2/webhooks/{webhook_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Delete a webhook"}),(0,r.jsx)(n.td,{children:"PUT /v1/organizations/{organizationId}/meetings/{meetingId}/recordings/{recordingId}"}),(0,r.jsx)(n.td,{children:"PUT /v2/recordings/{recording_id}"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"recording",children:"Recording"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v2"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Start recording a meeting"}),(0,r.jsx)(n.td,{children:"POST /v1/organizations/{organizationId}/meetings/{meetingId}/recording"}),(0,r.jsx)(n.td,{children:"POST /v2/recordings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stop recording a meeting"}),(0,r.jsx)(n.td,{children:"PUT /v1/organizations/{organizationId}/meetings/{meetingId}/recordings/{recordingId}"}),(0,r.jsx)(n.td,{children:"PUT /v2/recordings/{recording_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of an active recording in a meeting"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{organizationId}/rooms/{roomName}/active-recording"}),(0,r.jsx)(n.td,{children:"GET /v2/recordings/active-recordings/{meeting_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of a recording"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{organizationId}/meetings/{meetingId}/recordings/{recordingId}"}),(0,r.jsx)(n.td,{children:"GET /v2/recordings/{recording_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of all recordings in an org"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{organizationId}/recordings"}),(0,r.jsx)(n.td,{children:"GET /v2/recordings"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"presets",children:"Presets"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"v2"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Create a preset"}),(0,r.jsx)(n.td,{children:"POST /v1/organizations/{organizationId}/preset"}),(0,r.jsx)(n.td,{children:"POST /v2/presets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Update a preset"}),(0,r.jsx)(n.td,{children:"PATCH /v1/organizations/{organizationId}/preset"}),(0,r.jsx)(n.td,{children:"PATCH /v2/presets/{preset_id}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fetch details of a preset"}),(0,r.jsx)(n.td,{children:"GET /v1/organizations/{organizationId}/presets"}),(0,r.jsx)(n.td,{children:"GET /v2/presets/{preset_id}"})]})]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("title",{children:"Migrate to v2 REST API Guide"}),(0,r.jsx)("meta",{name:"description",content:"Explore the migration guide for transitioning to Dyte's V2. Follow our guide for effective migration strategies and implementation."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);