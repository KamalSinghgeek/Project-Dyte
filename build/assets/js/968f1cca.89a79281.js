"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[26660],{64461:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"capabilities/audio/processing","title":"Processing - Middlewares","description":"Dyte\'s SDK supports middlewares which are pluggable functions that can be applied to both audio and video streams in a meeting. This lets you tap in the media to either observe or modify. This guide covers the following.","source":"@site/docs/guides/capabilities/audio/processing.mdx","sourceDirName":"capabilities/audio","slug":"/capabilities/audio/processing","permalink":"/guides/capabilities/audio/processing","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/audio/processing.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Processing - Middlewares","sidebar_position":1,"sidebar_slug":"audio-processing-middlewares"},"sidebar":"tutorialSidebar","previous":{"title":"Start Building","permalink":"/guides/realtime-chat/build-in-app-chat-exp"},"next":{"title":"Transcriptions","permalink":"/guides/capabilities/audio/transcriptions"}}');var t=r(74848),a=r(28453);const n={title:"Processing - Middlewares",sidebar_position:1,sidebar_slug:"audio-processing-middlewares"},d="Audio Processing",s={},c=[{value:'Create an audio middleware <div class="header-tag tag-core">Core</div>',id:"create-an-audio-middleware-core",level:2},{value:'Add or remove audio middlewares <div class="header-tag tag-core">Core</div>',id:"add-or-remove-audio-middlewares-core",level:2}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Head:r,TabItem:o,Tabs:n}=i;return r||h("Head",!0),o||h("TabItem",!0),n||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"audio-processing",children:"Audio Processing"})}),"\n",(0,t.jsx)(i.p,{children:"Dyte's SDK supports middlewares which are pluggable functions that can be applied to both audio and video streams in a meeting. This lets you tap in the media to either observe or modify. This guide covers the following."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Create an audio middleware"}),"\n",(0,t.jsx)(i.li,{children:"Add or remove audio middlewares"}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"create-an-audio-middleware-core",children:["Create an audio middleware ",(0,t.jsx)("div",{class:"header-tag tag-core",children:"Core"})]}),"\n",(0,t.jsx)(n,{groupId:"framework",children:(0,t.jsxs)(o,{value:"js",label:"Javascript",children:[(0,t.jsxs)(i.p,{children:["Audio can be altered using ",(0,t.jsx)(i.strong,{children:"ScriptProcessor"})," and ",(0,t.jsx)(i.strong,{children:"AudioWorkletProcessor"}),". We support both ways of performing audio alterations. The middleware function has access to the ",(0,t.jsx)(i.code,{children:"audioContext"})," which can help the developer perform operations on the audio track. Audio middleware function can be synchronous or asychronous and is expected to return a ",(0,t.jsx)(i.code,{children:"AudioWorkletNode"})," or ",(0,t.jsx)(i.code,{children:"ScriptProcessorNode"}),". Here is a sample audio middleware function for your reference:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"//Somewhere in your codebase\r\nconst meeting = await DyteClient.init(...);\r\n\r\nasync function addWhiteNoise(audioContext) {\r\n    const moduleScript = `\r\n        class WhiteNoiseProcessor extends AudioWorkletProcessor {\r\n            process (inputs, outputs, parameters) {\r\n                const output = outputs[0]\r\n                output.forEach(channel => {\r\n                    for (let i = 0; i <TabItem channel.length; i++) {\r\n                        channel[i] = Math.random() * 1.0 - 0.5\r\n                    }\r\n                })\r\n                return true\r\n            }\r\n        }\r\n\r\n        registerProcessor('white-noise-processor', WhiteNoiseProcessor);\r\n    `;\r\n\r\n    const scriptUrl = URL.createObjectURL(new Blob([moduleScript], { type: 'text/javascript' }));\r\n    await audioContext.audioWorklet.addModule(scriptUrl);\r\n\r\n    const whiteNoise = new AudioWorkletNode(audioContext, 'white-noise-processor');\r\n    return whiteNoise;\r\n}\r\n\r\n// Add audio middleware\r\nmeeting.self.addAudioMiddleware(addWhiteNoise);\n"})})]})}),"\n",(0,t.jsxs)(i.h2,{id:"add-or-remove-audio-middlewares-core",children:["Add or remove audio middlewares ",(0,t.jsx)("div",{class:"header-tag tag-core",children:"Core"})]}),"\n",(0,t.jsx)(n,{groupId:"framework",children:(0,t.jsxs)(o,{value:"js",label:"Javascript",children:[(0,t.jsxs)(i.p,{children:["Middlewares can be added to a meeting, which is why they are associated with a meeting object. To add a audio middleware, you need to call the ",(0,t.jsx)(i.code,{children:"addAudioMiddleware"}),". This method takes in a audio middleware function as a parameter, creating this middleware object was covered in the previous section. To remove a audio middleware, you need to call the ",(0,t.jsx)(i.code,{children:"removeAudioMiddleware"})," method. This method also takes in the audio middleware function as a parameter."]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"meeting.self.addAudioMiddleware(YourMiddlewareFunction);\r\n\r\n// once done, in a later section remove the middleware\r\nmeeting.self.removeAudioMiddleware(YourMiddlewareFunction);\n"})}),(0,t.jsx)(i.admonition,{title:"Note",type:"info",children:(0,t.jsx)(i.p,{children:"In case you are building an Audio Transcriptions middleware or any sort of middleware that doesn\u2019t alter the original audio stream, remember to feed the output channel with whatever you get from inputChannel so that the audio can be sent to the next middleware. Otherwise, a blank audio buffer will be sent to the next middleware."})}),(0,t.jsx)(i.p,{children:"If you'd instead like to perform operations on the audio stream through your own implementation, you can also programatically access the meeting's audio stream. This is accessed from the meeting object."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"//Somewhere in your codebase\r\nconst meeting = await DyteClient.init(...);\r\n\r\n// You can get the final track which everybody will hear if your microphone is turned on after all the middlewares are applied\r\nmeeting.self.audioTrack()\r\n\r\n// You can also get raw audio track which is the raw microphone track before any middlewares are applied to it\r\nmeeting.self.rawAudioTrack();\n"})})]})}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("title",{children:"Processing - Middlewares Guide"})})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function h(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,r)=>{r.d(i,{R:()=>n,x:()=>d});var o=r(96540);const t={},a=o.createContext(t);function n(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);