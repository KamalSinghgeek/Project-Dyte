'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [38305],
  {
    48710: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => d,
        });
      const i = JSON.parse(
        '{"id":"room-metadata","title":"Room Metadata","description":"Learn about managing room metadata in your iOS application using Fleet Stack Documentation.","source":"@site/docs/ios-core/room-metadata.mdx","sourceDirName":".","slug":"/room-metadata","permalink":"/ios-core/room-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios-core/room-metadata.mdx","tags":[{"inline":true,"label":"ios-core","permalink":"/ios-core/tags/ios-core"},{"inline":true,"label":"room-metadata","permalink":"/ios-core/tags/room-metadata"}],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":6,"frontMatter":{"title":"Room Metadata","description":"Learn about managing room metadata in your iOS application using Fleet Stack Documentation.","sidebar_position":6,"tags":["ios-core","room-metadata"]},"sidebar":"tutorialSidebar","previous":{"title":"Receiving chat messages","permalink":"/ios-core/chat/receiving-chat-messages"},"next":{"title":"Introduction","permalink":"/ios-core/plugins/introduction"}}'
      );
      var o = n(74848),
        a = n(28453);
      const r = {
          title: 'Room Metadata',
          description:
            'Learn about managing room metadata in your iOS application using Fleet Stack Documentation.',
          sidebar_position: 6,
          tags: ['ios-core', 'room-metadata'],
        },
        s = 'Room Metadata',
        c = {},
        d = [];
      function l(e) {
        const t = {
            code: 'code',
            h1: 'h1',
            header: 'header',
            li: 'li',
            p: 'p',
            pre: 'pre',
            ul: 'ul',
            ...(0, a.R)(),
            ...e.components,
          },
          { Head: n } = t;
        return (
          n ||
            (function (e, t) {
              throw new Error(
                'Expected ' +
                  (t ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(t.header, {
                children: (0, o.jsx)(t.h1, {
                  id: 'room-metadata',
                  children: 'Room Metadata',
                }),
              }),
              '\n',
              (0, o.jsxs)(t.p, {
                children: [
                  'All metadata pertaining to a meeting is stored in ',
                  (0, o.jsx)(t.code, { children: 'meeting.meta' }),
                  '. This includes:',
                ],
              }),
              '\n',
              (0, o.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'meetingId' }),
                      ': The unique identifier of the meeting.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'meetingType' }),
                      ': Indicates the meeting is a group-call or a webinar.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'meetingTitle' }),
                      ': The title of the meeting.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, {
                        children: 'meetingStartedTimestamp',
                      }),
                      ': The timestamp when the meeting started.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'meetingState' }),
                      ': The state of the meeting of type ',
                      (0, o.jsx)(t.code, { children: 'DyteMeetingState' }),
                      '.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'authToken' }),
                      ': The authentication token for the meeting.',
                    ],
                  }),
                  '\n',
                  (0, o.jsxs)(t.li, {
                    children: [
                      (0, o.jsx)(t.code, { children: 'meetingConfig' }),
                      ': The configuration of the meeting of type ',
                      (0, o.jsx)(t.code, { children: 'MeetingConfig' }),
                      '.',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, o.jsx)(t.pre, {
                children: (0, o.jsx)(t.code, {
                  className: 'language-swift',
                  children:
                    'enum DyteMeetingState {\r\n  case notInitialised\r\n  case initStarted\r\n  case initCompleted\r\n  case initFailed\r\n}\r\n\r\nstruct MeetingConfig {\r\n  let enableAudio: Bool\r\n  let enableVideo: Bool\r\n}\n',
                }),
              }),
              '\n',
              (0, o.jsx)(t.p, {
                children:
                  'For example, if you want to get the name of the meeting the current participant is\r\nconnected to, you can do so by doing:',
              }),
              '\n',
              (0, o.jsx)(t.pre, {
                children: (0, o.jsx)(t.code, {
                  className: 'language-swift',
                  children: 'let meetingTitle = meeting.meta.meetingTitle\n',
                }),
              }),
              '\n',
              (0, o.jsx)(n, {
                children: (0, o.jsx)('title', {
                  children: 'Mobile Core Room Metadata',
                }),
              }),
            ],
          })
        );
      }
      function m(e = {}) {
        const { wrapper: t } = { ...(0, a.R)(), ...e.components };
        return t
          ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(l, { ...e }) })
          : l(e);
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => r, x: () => s });
      var i = n(96540);
      const o = {},
        a = i.createContext(o);
      function r(e) {
        const t = i.useContext(a);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : r(e.components)),
          i.createElement(a.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
