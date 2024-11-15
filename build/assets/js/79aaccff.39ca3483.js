'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [67943],
  {
    26792: (e, r, n) => {
      n.r(r),
        n.d(r, {
          assets: () => l,
          contentTitle: () => a,
          default: () => m,
          frontMatter: () => t,
          metadata: () => i,
          toc: () => c,
        });
      const i = JSON.parse(
        '{"id":"local-user/manage-permissions","title":"Media Permissions","description":"Learn how to manage permissions in your Flutter application for a secure and controlled user experience with Fleet Stack Documentation.","source":"@site/docs/flutter-core/local-user/manage-permissions.mdx","sourceDirName":"local-user","slug":"/local-user/manage-permissions","permalink":"/flutter-core/local-user/manage-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/flutter-core/local-user/manage-permissions.mdx","tags":[{"inline":true,"label":"flutter-core","permalink":"/flutter-core/tags/flutter-core"},{"inline":true,"label":"local-user","permalink":"/flutter-core/tags/local-user"},{"inline":true,"label":"self","permalink":"/flutter-core/tags/self"},{"inline":true,"label":"self events","permalink":"/flutter-core/tags/self-events"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":5,"frontMatter":{"title":"Media Permissions","description":"Learn how to manage permissions in your Flutter application for a secure and controlled user experience with Fleet Stack Documentation.","sidebar_position":5,"tags":["flutter-core","local-user","self","self events"]},"sidebar":"tutorialSidebar","previous":{"title":"Manage Media Devices","permalink":"/flutter-core/local-user/manage-media-devices"},"next":{"title":"Sharing screen on iOS","permalink":"/flutter-core/local-user/screen-share-iOS-guide"}}'
      );
      var s = n(74848),
        o = n(28453);
      const t = {
          title: 'Media Permissions',
          description:
            'Learn how to manage permissions in your Flutter application for a secure and controlled user experience with Fleet Stack Documentation.',
          sidebar_position: 5,
          tags: ['flutter-core', 'local-user', 'self', 'self events'],
        },
        a = 'Media Permissions',
        l = {},
        c = [];
      function d(e) {
        const r = {
            code: 'code',
            h1: 'h1',
            header: 'header',
            p: 'p',
            pre: 'pre',
            ...(0, o.R)(),
            ...e.components,
          },
          { Head: n } = r;
        return (
          n ||
            (function (e, r) {
              throw new Error(
                'Expected ' +
                  (r ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.header, {
                children: (0, s.jsx)(r.h1, {
                  id: 'media-permissions',
                  children: 'Media Permissions',
                }),
              }),
              '\n',
              (0, s.jsx)(r.p, {
                children:
                  'To get media permissions (audio/video) for localUser we can do as follows',
              }),
              '\n',
              (0, s.jsx)(r.pre, {
                children: (0, s.jsx)(r.code, {
                  className: 'language-dart',
                  children:
                    'final isCameraPermissionGranted\r\n  = dyteMobileClient.localUser.permissions.isCameraPermissionGranted;\r\nfinal isMicrophonePermissionGranted\r\n  = dyteMobileClient.localUser.permissions.isMicrophonePermissionGranted;\n',
                }),
              }),
              '\n',
              (0, s.jsx)(r.p, {
                children:
                  'Similarly to listen to callbacks regarding media permissions once user joins\r\nthe meeting',
              }),
              '\n',
              (0, s.jsx)(r.pre, {
                children: (0, s.jsx)(r.code, {
                  className: 'language-dart',
                  children:
                    '\r\nclass LocalUserNotifier implements DyteSelfEventsListener {\r\n\r\n  ...\r\n  @override\r\n  void onMeetingRoomJoinedWithoutCameraPermission() {\r\n    // when meeting room is joined without camera permission\r\n  }\r\n\r\n  override\r\n  void onMeetingRoomJoinedWithoutMicPermission() {\r\n    // when meeting room is joined without microphone permission\r\n  }\r\n\r\n  ...\r\n}\n',
                }),
              }),
              '\n',
              (0, s.jsxs)(n, {
                children: [
                  (0, s.jsx)('title', {
                    children: 'Flutter Core Media Permissions',
                  }),
                  (0, s.jsx)('meta', {
                    name: 'description',
                    content:
                      'Learn how to manage permissions in your Flutter application for a secure and controlled user experience with Fleet Stack Documentation.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function m(e = {}) {
        const { wrapper: r } = { ...(0, o.R)(), ...e.components };
        return r
          ? (0, s.jsx)(r, { ...e, children: (0, s.jsx)(d, { ...e }) })
          : d(e);
      }
    },
    28453: (e, r, n) => {
      n.d(r, { R: () => t, x: () => a });
      var i = n(96540);
      const s = {},
        o = i.createContext(s);
      function t(e) {
        const r = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : { ...r, ...e };
          },
          [r, e]
        );
      }
      function a(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          i.createElement(o.Provider, { value: r }, e.children)
        );
      }
    },
  },
]);
