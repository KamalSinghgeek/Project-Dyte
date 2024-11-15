'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [45381],
  {
    1200: (e, i, s) => {
      s.r(i),
        s.d(i, {
          assets: () => c,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => n,
          metadata: () => a,
          toc: () => l,
        });
      const a = JSON.parse(
        '{"id":"local-user/manage-media-devices","title":"Manage Media Devices","description":"Discover how to manage media devices for local users in iOS Core with Fleet Stack Documentation. Optimize your app\'s media handling capabilities seamlessly.","source":"@site/docs/ios-core/local-user/manage-media-devices.mdx","sourceDirName":"local-user","slug":"/local-user/manage-media-devices","permalink":"/ios-core/local-user/manage-media-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/local-user/manage-media-devices.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"local-user","permalink":"/ios-core/tags/local-user"},{"inline":true,"label":"localUser","permalink":"/ios-core/tags/local-user"},{"inline":true,"label":"localUser events","permalink":"/ios-core/tags/local-user-events"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":3,"frontMatter":{"title":"Manage Media Devices","description":"Discover how to manage media devices for local users in iOS Core with Fleet Stack Documentation. Optimize your app\'s media handling capabilities seamlessly.","sidebar_position":3,"tags":["ios-core","local-user","localUser","localUser events"]},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/ios-core/local-user/introduction"},"next":{"title":"Media Permissions","permalink":"/ios-core/local-user/manage-permissions"}}'
      );
      var o = s(74848),
        t = s(28453);
      const n = {
          title: 'Manage Media Devices',
          description:
            "Discover how to manage media devices for local users in iOS Core with Fleet Stack Documentation. Optimize your app's media handling capabilities seamlessly.",
          sidebar_position: 3,
          tags: ['ios-core', 'local-user', 'localUser', 'localUser events'],
        },
        r = 'Manage Media Devices',
        c = {},
        l = [{ value: 'Set device', id: 'set-device', level: 2 }];
      function d(e) {
        const i = {
            code: 'code',
            h1: 'h1',
            h2: 'h2',
            header: 'header',
            p: 'p',
            pre: 'pre',
            ...(0, t.R)(),
            ...e.components,
          },
          { Head: s } = i;
        return (
          s ||
            (function (e, i) {
              throw new Error(
                'Expected ' +
                  (i ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(i.header, {
                children: (0, o.jsx)(i.h1, {
                  id: 'manage-media-devices',
                  children: 'Manage Media Devices',
                }),
              }),
              '\n',
              (0, o.jsx)(i.p, {
                children:
                  'Media devices represents the hardware for the camera, microphone and speaker\r\ndevices. To get the list of media devices that are currently being used, you can\r\nuse the following methods:',
              }),
              '\n',
              (0, o.jsx)(i.pre, {
                children: (0, o.jsx)(i.code, {
                  className: 'language-swift',
                  children:
                    '// Get all audio devices\r\nlet audioDevices = meeting.localUser.getAudioDevices();\r\n\r\n// Get all video devices\r\nlet videoDevices = meeting.localUser.getVideoDevices();\n',
                }),
              }),
              '\n',
              (0, o.jsx)(i.h2, { id: 'set-device', children: 'Set device' }),
              '\n',
              (0, o.jsxs)(i.p, {
                children: [
                  'To set a device as an active device, you can call ',
                  (0, o.jsx)(i.code, { children: 'setDevice' }),
                  ' method. This takes\r\na ',
                  (0, o.jsx)(i.code, { children: 'MediaDeviceInfo' }),
                  ' object, and replaces the same ',
                  (0, o.jsx)(i.code, { children: 'kind' }),
                  ' device.',
                ],
              }),
              '\n',
              (0, o.jsx)(i.pre, {
                children: (0, o.jsx)(i.code, {
                  className: 'language-swift',
                  children: 'meeting.localUser.setDevice(device);\n',
                }),
              }),
              '\n',
              (0, o.jsxs)(s, {
                children: [
                  (0, o.jsx)('title', {
                    children: 'iOS Core Manage Media Devices',
                  }),
                  (0, o.jsx)('meta', {
                    name: 'description',
                    content:
                      "Discover how to manage media devices for local users in iOS Core with Fleet Stack Documentation. Optimize your app's media handling capabilities seamlessly.",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function m(e = {}) {
        const { wrapper: i } = { ...(0, t.R)(), ...e.components };
        return i
          ? (0, o.jsx)(i, { ...e, children: (0, o.jsx)(d, { ...e }) })
          : d(e);
      }
    },
    28453: (e, i, s) => {
      s.d(i, { R: () => n, x: () => r });
      var a = s(96540);
      const o = {},
        t = a.createContext(o);
      function n(e) {
        const i = a.useContext(t);
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : { ...i, ...e };
          },
          [i, e]
        );
      }
      function r(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : n(e.components)),
          a.createElement(t.Provider, { value: i }, e.children)
        );
      }
    },
  },
]);
