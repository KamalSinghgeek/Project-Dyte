'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [6513],
  {
    36198: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => o,
          metadata: () => t,
          toc: () => d,
        });
      const t = JSON.parse(
        '{"id":"local-user/events","title":"Events","description":"Explore local user events in iOS Core with Fleet Stack Documentation. Understand how to leverage these events for enhanced user experiences within your app.","source":"@site/docs/ios-core/local-user/events.mdx","sourceDirName":"local-user","slug":"/local-user/events","permalink":"/ios-core/local-user/events","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/local-user/events.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"local-user","permalink":"/ios-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/ios-core/tags/self"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Events","description":"Explore local user events in iOS Core with Fleet Stack Documentation. Understand how to leverage these events for enhanced user experiences within your app.","sidebar_position":2,"tags":["ios-core","local-user","self"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/ios-core/Introduction"},"next":{"title":"Introduction","permalink":"/ios-core/local-user/introduction"}}'
      );
      var i = s(74848),
        r = s(28453);
      const o = {
          title: 'Events',
          description:
            'Explore local user events in iOS Core with Fleet Stack Documentation. Understand how to leverage these events for enhanced user experiences within your app.',
          sidebar_position: 2,
          tags: ['ios-core', 'local-user', 'self'],
        },
        a = 'Local User - Events',
        l = {},
        d = [
          { value: 'Video update', id: 'video-update', level: 3 },
          { value: 'Audio update', id: 'audio-update', level: 3 },
          {
            value: 'Room disconnected update',
            id: 'room-disconnected-update',
            level: 3,
          },
          { value: 'Proximity changed', id: 'proximity-changed', level: 3 },
          { value: 'Waitlist status', id: 'waitlist-status', level: 3 },
          { value: 'Webinar Request', id: 'webinar-request', level: 2 },
          { value: 'LocalUser removed', id: 'localuser-removed', level: 2 },
          {
            value: 'Listen to Broadcast message within the room',
            id: 'listen-to-broadcast-message-within-the-room',
            level: 2,
          },
        ];
      function c(e) {
        const n = {
            code: 'code',
            em: 'em',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            header: 'header',
            p: 'p',
            pre: 'pre',
            ...(0, r.R)(),
            ...e.components,
          },
          { Head: s } = n;
        return (
          s ||
            (function (e, n) {
              throw new Error(
                'Expected ' +
                  (n ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.header, {
                children: (0, i.jsx)(n.h1, {
                  id: 'local-user---events',
                  children: 'Local User - Events',
                }),
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'You can subscribe to various events on the local user by implementing\r\n',
                  (0, i.jsx)(n.code, { children: 'DyteSelfEventsListener' }),
                  ' and passing the object to\r\n',
                  (0, i.jsx)(n.code, {
                    children:
                      'meeting.addSelfEventsListener(dyteSelfEventsListener)',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, i.jsx)(n.h3, {
                id: 'video-update',
                children: 'Video update',
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'Triggered when the user starts / stops the video using ',
                  (0, i.jsx)(n.code, { children: 'enableVideo' }),
                  ' or\r\n',
                  (0, i.jsx)(n.code, { children: 'disableVideo' }),
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onVideoUpdate(videoEnabled: Bool) {\r\n      if (videoEnabled) {\r\n        // video is enabled, and other participants in room can see local user\r\n      } else {\r\n        // video is disabled, and other participants in room can not see local user.\r\n      }\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h3, {
                id: 'audio-update',
                children: 'Audio update',
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'Triggered when the user starts / stops the audio using ',
                  (0, i.jsx)(n.code, { children: 'enableAudio' }),
                  ' or\r\n',
                  (0, i.jsx)(n.code, { children: 'disableAudio' }),
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '\r\nextension MeetingViewModel: DyteSelfEventsListener {\r\n    func onAudioUpdate(audioEnabled: Bool) {\r\n      if (audioEnabled) {\r\n        // audio is enabled, and other participants in room can hear local user\r\n      } else {\r\n        // audio is disabled, and other participants in room can not hear local user.\r\n      }\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h3, {
                id: 'room-disconnected-update',
                children: 'Room disconnected update',
              }),
              '\n',
              (0, i.jsx)(n.p, {
                children:
                  'Triggered when the user is disconnected due to media/network errors',
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onMeetingRoomDisconnected() {\r\n      //disconnected\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h3, {
                id: 'proximity-changed',
                children: 'Proximity changed',
              }),
              '\n',
              (0, i.jsx)(n.p, {
                children:
                  'Triggered when there is any change in proximity. Meaning if device is near ear\r\npiece which triggers display on/off.',
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onProximityChanged(isNear: Bool) {\r\n      // isNear\r\n      // if true, display should be turned off, as user might be speaking through earpiece\r\n      // if false, display should be turned on, as user might be looking at display and listening through speaker/earphones.\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h3, {
                id: 'waitlist-status',
                children: 'Waitlist status',
              }),
              '\n',
              (0, i.jsx)(n.p, {
                children: 'For meetings whose waiting room is enabled:',
              }),
              '\n',
              (0, i.jsx)(n.p, {
                children:
                  'To get status of localUser in waiting room we can use',
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'let waitListStatus = meeting.localUser.waitListStatus\n',
                }),
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'Developers can listen to those changes in ',
                  (0, i.jsx)(n.code, { children: 'onWaitListStatusUpdate()' }),
                  ' callbacks',
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onWaitListStatusUpdate(waitListStatus: WaitListStatus) {\r\n\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h2, {
                id: 'webinar-request',
                children: 'Webinar Request',
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'The ',
                  (0, i.jsx)(n.code, {
                    children: 'onWebinarPresentRequestReceived()',
                  }),
                  ' callback is triggered when the local user receives a request to join the webinar, while the ',
                  (0, i.jsx)(n.code, { children: 'onStoppedPresenting()' }),
                  ' callback is triggered when the local user ends their presentation.',
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onWebinarPresentRequestReceived() {\r\n        // Display an alert to the user here, allowing them to accept or reject the request.\r\n    }\r\n    func onStoppedPresenting() {\r\n        //Display an alert to the user indicating that they are no longer presenting.\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h2, {
                id: 'localuser-removed',
                children: 'LocalUser removed',
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'Whenever local user is removed from the meeting, ',
                  (0, i.jsx)(n.code, { children: 'onRemovedFromMeeting()' }),
                  ' callback is triggered.',
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onRemovedFromMeeting() {\r\n      // Display an alert here that user no longer in the meeting.\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(n.h2, {
                id: 'listen-to-broadcast-message-within-the-room',
                children: 'Listen to Broadcast message within the room',
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  'Get broadcast messages within the room using ',
                  (0, i.jsx)(n.code, { children: 'onRoomMessage' }),
                  ' callback.',
                ],
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [(0, i.jsx)(n.em, { children: 'Parameters' }), ':'],
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  (0, i.jsx)(n.code, { children: 'type' }),
                  ': A client-specific type to differentiate between custom messages like "emoji" or "greetings"',
                ],
              }),
              '\n',
              (0, i.jsxs)(n.p, {
                children: [
                  (0, i.jsx)(n.code, { children: 'payload' }),
                  ': A dictionary containing the message payload, where keys are strings and values are of any type.',
                ],
              }),
              '\n',
              (0, i.jsx)(n.pre, {
                children: (0, i.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n  func onRoomMessage(type: String, payload: [String : Any]) {\r\n    // triggered when a message is sent within the room.\r\n  }\n',
                }),
              }),
              '\n',
              (0, i.jsxs)(s, {
                children: [
                  (0, i.jsx)('title', { children: 'iOS Core Events' }),
                  (0, i.jsx)('meta', {
                    name: 'description',
                    content:
                      'Explore local user events in iOS Core with Fleet Stack Documentation. Understand how to leverage these events for enhanced user experiences within your app.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components };
        return n
          ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) })
          : c(e);
      }
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => o, x: () => a });
      var t = s(96540);
      const i = {},
        r = t.createContext(i);
      function o(e) {
        const n = t.useContext(r);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          t.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
