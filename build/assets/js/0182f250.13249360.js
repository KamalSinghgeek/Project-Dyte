"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[24075],{60683:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"livestream/advanced/livestream-any-rtmp","title":"Custom / RTMP Video Input","description":"Learn how to livestream to any RTMP server with Dyte. Follow our guide for effective RTMP livestreaming and integration.","source":"@site/docs/guides/livestream/advanced/livestream-any-rtmp.mdx","sourceDirName":"livestream/advanced","slug":"/livestream/advanced/livestream-any-rtmp","permalink":"/guides/livestream/advanced/livestream-any-rtmp","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/livestream/advanced/livestream-any-rtmp.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Custom / RTMP Video Input","sidebar_position":2,"description":"Learn how to livestream to any RTMP server with Dyte. Follow our guide for effective RTMP livestreaming and integration."},"sidebar":"tutorialSidebar","previous":{"title":"Configure Permissions","permalink":"/guides/livestream/advanced/configuring-permissions"},"next":{"title":"Create Meeting","permalink":"/guides/interactive-onboarding/create-meeting"}}');var r=s(74848),i=s(28453);const a={title:"Custom / RTMP Video Input",sidebar_position:2,description:"Learn how to livestream to any RTMP server with Dyte. Follow our guide for effective RTMP livestreaming and integration."},o="Live Stream any Custom Video Input",d={},l=[{value:"Step 1: Get your API Keys",id:"step-1-get-your-api-keys",level:2},{value:"Step 2: Generate credentials for a livestream",id:"step-2-generate-credentials-for-a-livestream",level:2},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Step 3: Specify RTMP ingestion URL for live streaming",id:"step-3-specify-rtmp-ingestion-url-for-live-streaming",level:2},{value:"Fetch details of a livestream",id:"fetch-details-of-a-livestream",level:2},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"live-stream-any-custom-video-input",children:"Live Stream any Custom Video Input"})}),"\n",(0,r.jsxs)(t.p,{children:["Dyte can livestream video from any applications like\r\n",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/OBS_Studio",children:"OBS"}),",\r\n",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/FFmpeg",children:"ffmpeg"})," that can stream via RTMP in a few\r\nsimple steps."]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-get-your-api-keys",children:"Step 1: Get your API Keys"}),"\n",(0,r.jsxs)(t.p,{children:["Login to the ",(0,r.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Developer Portal"})," and create an account. Copy the ",(0,r.jsx)(t.a,{href:"https://dev.dyte.io/apikeys",children:"API Keys"})," for your organization from the Developer portal. These API Keys are unique to your organization and are required to use Dyte REST APIs such as when instantiating a meeting."]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-generate-credentials-for-a-livestream",children:"Step 2: Generate credentials for a livestream"}),"\n",(0,r.jsx)(t.p,{children:"This step generates credentials and ingest URLs for the livestream."}),"\n",(0,r.jsx)(t.h4,{id:"request",children:"Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl --location --request POST 'https://api.dyte.io/v2/livestreams' \\\r\n     --header 'Content-Type: application/json' \\\r\n     --header 'Authorization: Basic ZGVtbzpwQDU1dzByZA==' \\\r\n     --data-raw '{\r\n    \"name\": \"test_livestream\"\r\n}'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(t.p,{children:["The response contains the ",(0,r.jsx)(t.code,{children:"ingest_server"}),", livestream ",(0,r.jsx)(t.code,{children:"id"}),", ",(0,r.jsx)(t.code,{children:"stream_key"}),", and\r\n",(0,r.jsx)(t.code,{children:"playback_url"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n  "success": true,\r\n  "data": {\r\n    "status": "OFFLINE",\r\n    "name": "test_livestream",\r\n    "meeting_id": null,\r\n    "ingest_server": "rtmps://2bd803bb7b1.global-contribute.live-video.net:443/app/",\r\n    "id": "9fb22eea-3392-42ad-b884-1129a4f517d2",\r\n    "stream_key": "sk_ap-south-2_JKLBQlfOE_eb14jL5zj3lbj58xHSb",\r\n    "playback_url": "https://2bd803bb7b1.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944908621410.channel.e1lAS0BHpDxP.m3u8"\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Parameters"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ingest_server"}),(0,r.jsxs)(t.td,{children:["The ingest server URL in RTMP livestreaming is the server URL to which the RTMP encoder sends the video and audio data. The ingest server receives the RTMP stream and transcodes it into different video formats and bitrates, which can then be distributed to viewers through a content delivery network (CDN). It is essentially the address of the server where the video data is sent to be processed and distributed for live streaming. You need to enter the ",(0,r.jsx)(t.code,{children:"ingest_server"})," along with ",(0,r.jsx)(t.code,{children:"stream_key"})," in your application. See step 2."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"This is your livestream ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stream_key"}),(0,r.jsxs)(t.td,{children:["The stream key in RTMP livestreaming is a unique identifier that is used to authorize and link the RTMP encoder to a specific live stream. The stream key is like a password that allows the encoder to access the specific live stream on the server and start sending data to it. It is an important security measure to prevent unauthorized access to the live stream, as the stream key is needed to begin streaming to a specific event or channel. It's important to keep the stream key safe and secure. You need to enter the ",(0,r.jsx)(t.code,{children:"stream_key"})," in your application. See step 2."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playback_url"}),(0,r.jsx)(t.td,{children:"The playback URL is the web address that viewers can use to watch the live stream. Viewers can enter the playback URL into their web browser or use a media player that supports HLS or LHLS streaming to watch the live stream."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-specify-rtmp-ingestion-url-for-live-streaming",children:"Step 3: Specify RTMP ingestion URL for live streaming"}),"\n",(0,r.jsx)(t.p,{children:"In your application, enter the ingestion URL you generated in the previous step."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If you're using ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/OBS_Studio",children:"OBS"}),", then enter the ingest server URL and stream key separately.\r\n",(0,r.jsx)(t.img,{alt:"obs-example",src:s(27219).A+"",width:"1832",height:"1304"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["However, for ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/FFmpeg",children:"ffmpeg"}),", you must specify\r\nboth the ingest URL and the stream key together. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'ffmpeg -re -f lavfi -i "testsrc=size=1280x720 [out0]; sine=frequency=500 [out1]" \\\r\n-acodec aac -vcodec h264 -f flv \\\r\nrtmps://2ec802dd47b0.global-contribute.live-video.net:443/app/sk_ap-south-1_nDT9sbq3qZyf_SYSyPE7wnVGUQYNyejMe6Z3n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"fetch-details-of-a-livestream",children:"Fetch details of a livestream"}),"\n",(0,r.jsxs)(t.p,{children:["Using the livestream ID that you generated in the previous ",(0,r.jsx)(t.a,{href:"/guides/livestream/advanced/livestream-any-rtmp#step-2-generate-credentials-for-a-livestream",children:"step"}),", you can fetch details of\r\nlivestream."]}),"\n",(0,r.jsx)(t.h4,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(t.p,{children:["This request returns the ",(0,r.jsx)(t.code,{children:"ingest_seconds"}),", ",(0,r.jsx)(t.code,{children:"viewer_seconds"}),", ",(0,r.jsx)(t.code,{children:"ingest_server"}),",\r\n",(0,r.jsx)(t.code,{children:"id"}),", ",(0,r.jsx)(t.code,{children:"stream_key"}),", and ",(0,r.jsx)(t.code,{children:"playback_url"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl --location \\\r\n     --request GET 'https://api.dyte.io/v2/livestreams/9fb22eea-3392-42ad-b884-1129a4f517d2' \\\r\n     --header 'Authorization: Basic ZGVtbzpwQDU1dzByZA=='\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"note",type:"info",children:(0,r.jsx)(t.p,{children:"The ingest and viewer seconds details are returned after 40-50 seconds; until then,\r\nthey default to 60."})}),"\n",(0,r.jsx)(t.h4,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n  "success": true,\r\n  "data": {\r\n    "status": "OFFLINE",\r\n    "name": "test_livestream",\r\n    "meeting_id": null,\r\n    "ingest_seconds": 0,\r\n    "viewer_seconds": 0,\r\n    "ingest_server": "rtmps://2bd803bb7b1.global-contribute.live-video.net:443/app/",\r\n    "id": "9fb22eea-3392-42ad-b884-1129a4f517d2",\r\n    "stream_key": "sk_ap-south-2_JKLBQlfOE_eb14jL5zj3lbj58xHSb",\r\n    "playback_url": "https://2bd803bb7b1.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944908621410.channel.e1lAS0BHpDxP.m3u8"\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("title",{children:"Custom / RTMP Video Input Guide"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to livestream to any RTMP server with Dyte. Follow our guide for effective RTMP livestreaming and integration."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},27219:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/obs-example-c441f3bb11d0512c1be78f4f241c9581.jpeg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);