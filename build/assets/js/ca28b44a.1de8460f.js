'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [83050],
  {
    86722: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => t,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => c,
        });
      const r = JSON.parse(
        '{"id":"local-user/introduction","title":"Introduction","description":"Learn about local user management in iOS Core with Fleet Stack Documentation. Understand the fundamentals for effective integration and app customization.","source":"@site/docs/ios-core/local-user/introduction.mdx","sourceDirName":"local-user","slug":"/local-user/introduction","permalink":"/ios-core/local-user/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/local-user/introduction.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"local-user","permalink":"/ios-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/ios-core/tags/self"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Introduction","description":"Learn about local user management in iOS Core with Fleet Stack Documentation. Understand the fundamentals for effective integration and app customization.","sidebar_position":3,"tags":["ios-core","local-user","self"]},"sidebar":"tutorialSidebar","previous":{"title":"Events","permalink":"/ios-core/local-user/events"},"next":{"title":"Manage Media Devices","permalink":"/ios-core/local-user/manage-media-devices"}}'
      );
      var a = i(74848),
        s = i(28453);
      const o = {
          title: 'Introduction',
          description:
            'Learn about local user management in iOS Core with Fleet Stack Documentation. Understand the fundamentals for effective integration and app customization.',
          sidebar_position: 3,
          tags: ['ios-core', 'local-user', 'self'],
        },
        l = 'Introduction - Local User',
        t = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          {
            value: 'Change default audio / video settings',
            id: 'change-default-audio--video-settings',
            level: 2,
          },
          {
            value: 'Get local user video view',
            id: 'get-local-user-video-view',
            level: 2,
          },
          {
            value: 'Turn audio/video tracks after joining the room',
            id: 'turn-audiovideo-tracks-after-joining-the-room',
            level: 2,
          },
          {
            value: 'Change the name of the local user',
            id: 'change-the-name-of-the-local-user',
            level: 2,
          },
          {
            value: 'Mute/Unmute microphone',
            id: 'muteunmute-microphone',
            level: 2,
          },
          {
            value: 'Enable/Disable camera',
            id: 'enabledisable-camera',
            level: 2,
          },
          {
            value: 'Pinning &amp; unpinning',
            id: 'pinning--unpinning',
            level: 2,
          },
          {
            value: 'Enable / Disable Screen share',
            id: 'enable--disable-screen-share',
            level: 2,
          },
          {
            value: 'Switch camera between primary and secondary',
            id: 'switch-camera-between-primary-and-secondary',
            level: 2,
          },
        ];
      function d(e) {
        const n = {
            code: 'code',
            h1: 'h1',
            h2: 'h2',
            header: 'header',
            li: 'li',
            p: 'p',
            pre: 'pre',
            ul: 'ul',
            ...(0, s.R)(),
            ...e.components,
          },
          { Head: i } = n;
        return (
          i ||
            (function (e, n) {
              throw new Error(
                'Expected ' +
                  (n ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n.header, {
                children: (0, a.jsx)(n.h1, {
                  id: 'introduction---local-user',
                  children: 'Introduction - Local User',
                }),
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'The local user has the methods and properties on the local user media controls.\r\nAccessible via ',
                  (0, a.jsx)(n.code, { children: 'localUser' }),
                  ' within the ',
                  (0, a.jsx)(n.code, { children: 'meeting' }),
                  ' object.',
                ],
              }),
              '\n',
              (0, a.jsx)(n.h2, { id: 'properties', children: 'Properties' }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'Here is a list of properties that ',
                  (0, a.jsx)(n.code, { children: 'meeting.localUser' }),
                  ' user provides:',
                ],
              }),
              '\n',
              (0, a.jsxs)(n.ul, {
                children: [
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'id' }),
                      ': The ID of the participant pertaining to local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'name' }),
                      ': Contains Name of the local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'clientSpecificId' }),
                      ': Identifier provided by the developer while adding the\r\nparticipant.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'permissions' }),
                      ': The permissions related to various capabilities within a\r\nmeeting context for the local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'audioTrack' }),
                      ': The audio track for the local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'videoTrack' }),
                      ': The video track for the local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'screenShareTrack' }),
                      ': The screen share video tracks for the local user.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'audioEnabled' }),
                      ': A boolean value indicating if the audio currently enabled.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, { children: 'videoEnabled' }),
                      ': A boolean value indicating if the video currently enabled.',
                    ],
                  }),
                  '\n',
                  (0, a.jsxs)(n.li, {
                    children: [
                      (0, a.jsx)(n.code, {
                        children: 'isScreenShareParticipant',
                      }),
                      ': A boolean value indicating if the participant is a\r\nscreen share participant in this meeting.',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'change-default-audio--video-settings',
                children: 'Change default audio / video settings',
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'By default as soon as you join the meeting the SDK will produce your video and\r\naudio streams. To change this behaviour use the ',
                  (0, a.jsx)(n.code, { children: 'audioEnabled' }),
                  ' & ',
                  (0, a.jsx)(n.code, { children: 'videoEnabled' }),
                  '\r\nparameter',
                ],
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'let meetingInfo = DyteMeetingInfo(\r\n            roomName = MEETING_ROOM_NAME,\r\n            authToken = AUTH_TOKEN,\r\n            audioEnabled = false,\r\n            videoEnabled = true)\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'get-local-user-video-view',
                children: 'Get local user video view',
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'To show localUser preview inside a view. Use ',
                  (0, a.jsx)(n.code, { children: 'getSelfPreview()' }),
                  ' method on\r\nlocalUser. This method returns a View which can be added in any View.',
                ],
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children: 'meeting.localUser.getSelfPreview()\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'turn-audiovideo-tracks-after-joining-the-room',
                children: 'Turn audio/video tracks after joining the room',
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'If audio and video tracks are disabled during the ',
                  (0, a.jsx)(n.code, { children: 'DyteMobileClient' }),
                  '\r\ninitialization process. You can setup the audio and video tracks by simply\r\ncalling ',
                  (0, a.jsx)(n.code, { children: 'enableAudio()' }),
                  ' and ',
                  (0, a.jsx)(n.code, { children: 'enableVideo()' }),
                  ' like below:',
                ],
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'meeting.localUser.enableAudio()\r\nmeeting.localUser.enableVideo()\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'change-the-name-of-the-local-user',
                children: 'Change the name of the local user',
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  "Change the user's name by calling ",
                  (0, a.jsx)(n.code, { children: 'setDisplayName' }),
                  ' method. The changed name will\r\nreflect across all participants ONLY if the change happens before ',
                  (0, a.jsx)(n.code, { children: 'joinRoom()' }),
                  '\r\nthe meeting and after ',
                  (0, a.jsx)(n.code, { children: 'init()' }),
                  '.',
                ],
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children: 'meeting.localUser.setDisplayName("New Name")\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'muteunmute-microphone',
                children: 'Mute/Unmute microphone',
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '// Mute Audio\r\nmeeting.localUser.disableAudio()\r\n\r\n// Unmute Audio\r\nmeeting.localUser.enableAudio()\r\n\r\n// Get current status\r\nmeeting.localUser.audioEnabled\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'enabledisable-camera',
                children: 'Enable/Disable camera',
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '// Disable Video\r\nmeeting.localUser.disableVideo()\r\n\r\n// Enable Video\r\nmeeting.localUser.enableVideo()\r\n\r\n// Get current status\r\nmeeting.localUser.videoEnabled\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'pinning--unpinning',
                children: 'Pinning & unpinning',
              }),
              '\n',
              (0, a.jsxs)(n.p, {
                children: [
                  'You can pin or unpin yourself given you have the appropriate permissions. You\r\ncan check the pinned status of the local user using ',
                  (0, a.jsx)(n.code, {
                    children: 'meeting.localUser.isPinned',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children: 'meeting.localUser.pin();\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children: 'meeting.localUser.unpin();\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'enable--disable-screen-share',
                children: 'Enable / Disable Screen share',
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '// Enable Screenshare\r\nmeeting.localUser.enableScreenshare();\r\n\r\n// Disable Screenshare\r\nmeeting.localUser.disableScreenshare();\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.h2, {
                id: 'switch-camera-between-primary-and-secondary',
                children: 'Switch camera between primary and secondary',
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '// switch camera\r\nmeeting.localUser.switchCamera()\n',
                }),
              }),
              '\n',
              (0, a.jsx)(n.p, { children: 'OR' }),
              '\n',
              (0, a.jsx)(n.p, {
                children: 'If you want to set video device yourself:',
              }),
              '\n',
              (0, a.jsx)(n.pre, {
                children: (0, a.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'meeting.localUser.setVideoDevice(videoDevice: DyteVideoDevice)\n',
                }),
              }),
              '\n',
              (0, a.jsxs)(i, {
                children: [
                  (0, a.jsx)('title', { children: 'iOS Core Introduction' }),
                  (0, a.jsx)('meta', {
                    name: 'description',
                    content:
                      'Learn about local user management in iOS Core with Fleet Stack Documentation. Understand the fundamentals for effective integration and app customization.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n
          ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) })
          : d(e);
      }
    },
    28453: (e, n, i) => {
      i.d(n, { R: () => o, x: () => l });
      var r = i(96540);
      const a = {},
        s = r.createContext(a);
      function o(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(a)
              : e.components || a
            : o(e.components)),
          r.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
