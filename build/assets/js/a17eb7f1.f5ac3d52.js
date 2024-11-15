'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [69387],
  {
    34125: (e, s, i) => {
      i.r(s),
        i.d(s, {
          assets: () => c,
          contentTitle: () => a,
          default: () => m,
          frontMatter: () => t,
          metadata: () => n,
          toc: () => l,
        });
      const n = JSON.parse(
        '{"id":"local-user/manage-permissions","title":"Media Permissions","description":"Learn how to manage permissions for local users in iOS Core with Fleet Stack Documentation. Ensure a smooth and secure user experience within your app.","source":"@site/docs/ios-core/local-user/manage-permissions.mdx","sourceDirName":"local-user","slug":"/local-user/manage-permissions","permalink":"/ios-core/local-user/manage-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/local-user/manage-permissions.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"local-user","permalink":"/ios-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/ios-core/tags/self"},{"inline":true,"label":"self events","permalink":"/ios-core/tags/self-events"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"title":"Media Permissions","description":"Learn how to manage permissions for local users in iOS Core with Fleet Stack Documentation. Ensure a smooth and secure user experience within your app.","sidebar_position":4,"tags":["ios-core","local-user","self","self events"]},"sidebar":"tutorialSidebar","previous":{"title":"Manage Media Devices","permalink":"/ios-core/local-user/manage-media-devices"},"next":{"title":"Sharing screen on iOS","permalink":"/ios-core/local-user/screen-share-guide"}}'
      );
      var o = i(74848),
        r = i(28453);
      const t = {
          title: 'Media Permissions',
          description:
            'Learn how to manage permissions for local users in iOS Core with Fleet Stack Documentation. Ensure a smooth and secure user experience within your app.',
          sidebar_position: 4,
          tags: ['ios-core', 'local-user', 'self', 'self events'],
        },
        a = 'Media Permissions',
        c = {},
        l = [];
      function d(e) {
        const s = {
            code: 'code',
            h1: 'h1',
            header: 'header',
            p: 'p',
            pre: 'pre',
            ...(0, r.R)(),
            ...e.components,
          },
          { Head: i } = s;
        return (
          i ||
            (function (e, s) {
              throw new Error(
                'Expected ' +
                  (s ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(s.header, {
                children: (0, o.jsx)(s.h1, {
                  id: 'media-permissions',
                  children: 'Media Permissions',
                }),
              }),
              '\n',
              (0, o.jsx)(s.p, {
                children:
                  'To get media permissions (audio/video) for localUser we can do as follows',
              }),
              '\n',
              (0, o.jsx)(s.pre, {
                children: (0, o.jsx)(s.code, {
                  className: 'language-swift',
                  children:
                    'let isCameraPermissionGranted\r\n  = meeting.localUser.isCameraPermissionGranted\r\nlet isMicrophonePermissionGranted\r\n  = meeting.localUser.isMicrophonePermissionGranted\n',
                }),
              }),
              '\n',
              (0, o.jsx)(s.p, {
                children:
                  'Similarly to listen to callbacks regarding media permissions once user joins the\r\nmeeting',
              }),
              '\n',
              (0, o.jsx)(s.pre, {
                children: (0, o.jsx)(s.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onMeetingRoomJoinedWithoutCameraPermission() {\r\n      // when meeting room is joined without camera permission\r\n    }\r\n\r\n    func onMeetingRoomJoinedWithoutMicPermission() {\r\n      // when meeting room is joined without microphone permission\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, o.jsxs)(i, {
                children: [
                  (0, o.jsx)('title', {
                    children: 'iOS Core Media Permissions',
                  }),
                  (0, o.jsx)('meta', {
                    name: 'description',
                    content:
                      'Learn how to manage permissions for local users in iOS Core with Fleet Stack Documentation. Ensure a smooth and secure user experience within your app.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function m(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components };
        return s
          ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(d, { ...e }) })
          : d(e);
      }
    },
    28453: (e, s, i) => {
      i.d(s, { R: () => t, x: () => a });
      var n = i(96540);
      const o = {},
        r = n.createContext(o);
      function t(e) {
        const s = n.useContext(r);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e };
          },
          [s, e]
        );
      }
      function a(e) {
        let s;
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : t(e.components)),
          n.createElement(r.Provider, { value: s }, e.children)
        );
      }
    },
  },
]);
