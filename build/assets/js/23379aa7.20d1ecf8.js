'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [77894],
  {
    2067: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => c,
        });
      const r = JSON.parse(
        '{"id":"usage/stores-api/introduction","title":"Introduction","description":"Explore the introduction to the Stores API in Dyte\'s Plugin SDK Usage documentation. Learn how to effectively use stores for your plugin development. Fleet Stack Documentation.","source":"@site/docs/plugin-sdk/usage/stores-api/introduction.mdx","sourceDirName":"usage/stores-api","slug":"/usage/stores-api/introduction","permalink":"/plugin-sdk/usage/stores-api/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/plugin-sdk/usage/stores-api/introduction.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":1,"frontMatter":{"title":"Introduction","sidebar_position":1,"description":"Explore the introduction to the Stores API in Dyte\'s Plugin SDK Usage documentation. Learn how to effectively use stores for your plugin development. Fleet Stack Documentation."},"sidebar":"tutorialSidebar","previous":{"title":"Events","permalink":"/plugin-sdk/usage/rooms-api/events"},"next":{"title":"Operations on Store","permalink":"/plugin-sdk/usage/stores-api/manage-stores"}}'
      );
      var n = s(74848),
        o = s(28453);
      const l = {
          title: 'Introduction',
          sidebar_position: 1,
          description:
            "Explore the introduction to the Stores API in Dyte's Plugin SDK Usage documentation. Learn how to effectively use stores for your plugin development. Fleet Stack Documentation.",
        },
        i = void 0,
        d = {},
        c = [
          { value: 'Create a Store', id: 'create-a-store', level: 3 },
          { value: 'Populate Stores', id: 'populate-stores', level: 3 },
          { value: 'Delete a Store', id: 'delete-a-store', level: 3 },
          { value: 'Get a Store', id: 'get-a-store', level: 3 },
        ];
      function a(e) {
        const t = {
            admonition: 'admonition',
            code: 'code',
            h3: 'h3',
            p: 'p',
            pre: 'pre',
            strong: 'strong',
            table: 'table',
            tbody: 'tbody',
            td: 'td',
            th: 'th',
            thead: 'thead',
            tr: 'tr',
            ...(0, o.R)(),
            ...e.components,
          },
          { Head: s } = t;
        return (
          s ||
            (function (e, t) {
              throw new Error(
                'Expected ' +
                  (t ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Head', !0),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(t.p, {
                children: [
                  'The ',
                  (0, n.jsx)(t.code, { children: 'stores' }),
                  ' module exposes methods for creating and managing plugin stores.',
                ],
              }),
              '\n',
              (0, n.jsx)(t.p, {
                children:
                  'Plugin store is a temporary realtime database provided with Plugin SDK that can\r\nhelp you manage your data better. Each entry in the store is a key-pair value.',
              }),
              '\n',
              (0, n.jsx)(t.p, {
                children: 'The value can assume the following types:',
              }),
              '\n',
              (0, n.jsxs)(t.table, {
                children: [
                  (0, n.jsx)(t.thead, {
                    children: (0, n.jsx)(t.tr, {
                      children: (0, n.jsx)(t.th, {
                        children: (0, n.jsx)(t.strong, {
                          children: 'Data Types',
                        }),
                      }),
                    }),
                  }),
                  (0, n.jsxs)(t.tbody, {
                    children: [
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'String' }),
                      }),
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'Number' }),
                      }),
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'Object' }),
                      }),
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'Array' }),
                      }),
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'Map' }),
                      }),
                      (0, n.jsx)(t.tr, {
                        children: (0, n.jsx)(t.td, { children: 'Set' }),
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, n.jsx)(t.h3, {
                id: 'create-a-store',
                children: 'Create a Store',
              }),
              '\n',
              (0, n.jsxs)(t.p, {
                children: [
                  'You can create a ',
                  (0, n.jsx)(t.strong, { children: 'global store' }),
                  ' (Realtime store) or a ',
                  (0, n.jsx)(t.strong, { children: 'local store' }),
                  '\r\n(Available only to you, not other users).',
                ],
              }),
              '\n',
              (0, n.jsx)(t.admonition, {
                title: 'note',
                type: 'info',
                children: (0, n.jsx)(t.p, {
                  children:
                    'This method only creates a store for the current user (self), hence it must be\r\nexecuted for every user.',
                }),
              }),
              '\n',
              (0, n.jsxs)(t.table, {
                children: [
                  (0, n.jsx)(t.thead, {
                    children: (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.th, { children: 'Param' }),
                        (0, n.jsx)(t.th, { children: 'Type' }),
                        (0, n.jsx)(t.th, { children: 'Description' }),
                        (0, n.jsx)(t.th, { children: 'Default Value' }),
                        (0, n.jsx)(t.th, { children: 'Required' }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(t.tbody, {
                    children: [
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'key' }),
                          (0, n.jsx)(t.td, { children: 'string' }),
                          (0, n.jsx)(t.td, { children: 'Name of the store.' }),
                          (0, n.jsx)(t.td, { children: '-' }),
                          (0, n.jsx)(t.td, { children: 'true' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'options' }),
                          (0, n.jsx)(t.td, { children: 'Options' }),
                          (0, n.jsx)(t.td, { children: 'The options object' }),
                          (0, n.jsx)(t.td, { children: '{ local: false }' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, {
                            children: (0, n.jsx)(t.code, {
                              children: 'options.local',
                            }),
                          }),
                          (0, n.jsx)(t.td, { children: 'boolean' }),
                          (0, n.jsx)(t.td, {
                            children: 'Creates a local store when true.',
                          }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: 'language-tsx',
                  children: 'type Options = {\r\n  local: boolean;\r\n};\n',
                }),
              }),
              '\n',
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: 'language-tsx',
                  children:
                    "// create a global store\r\nplugin.stores.create('myStore');\r\n\r\n// create a local store\r\nconst options: Options = { local: true };\r\nplugin.stores.create('myLocalStore', options);\n",
                }),
              }),
              '\n',
              (0, n.jsx)(t.h3, {
                id: 'populate-stores',
                children: 'Populate Stores',
              }),
              '\n',
              (0, n.jsxs)(t.p, {
                children: [
                  'The ',
                  (0, n.jsx)(t.code, { children: 'populate' }),
                  ' method populates the global plugin stores from the backend.\r\n',
                  (0, n.jsx)(t.strong, {
                    children: 'Ideally used right after initialisation',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: 'language-tsx',
                  children: "await plugin.stores.populate('myStore');\n",
                }),
              }),
              '\n',
              (0, n.jsx)(t.h3, {
                id: 'delete-a-store',
                children: 'Delete a Store',
              }),
              '\n',
              (0, n.jsx)(t.p, {
                children: 'You can delete a store using the store name.',
              }),
              '\n',
              (0, n.jsxs)(t.table, {
                children: [
                  (0, n.jsx)(t.thead, {
                    children: (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.th, { children: 'Param' }),
                        (0, n.jsx)(t.th, { children: 'Type' }),
                        (0, n.jsx)(t.th, { children: 'Description' }),
                        (0, n.jsx)(t.th, { children: 'Default Value' }),
                        (0, n.jsx)(t.th, { children: 'Required' }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(t.tbody, {
                    children: [
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'key' }),
                          (0, n.jsx)(t.td, { children: 'string' }),
                          (0, n.jsx)(t.td, { children: 'Name of the store.' }),
                          (0, n.jsx)(t.td, { children: '-' }),
                          (0, n.jsx)(t.td, { children: 'true' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'options' }),
                          (0, n.jsx)(t.td, { children: 'Options' }),
                          (0, n.jsx)(t.td, { children: 'The options object' }),
                          (0, n.jsx)(t.td, { children: '{ local: false }' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, {
                            children: (0, n.jsx)(t.code, {
                              children: 'options.local',
                            }),
                          }),
                          (0, n.jsx)(t.td, { children: 'boolean' }),
                          (0, n.jsx)(t.td, {
                            children: 'Deletes a local store when true.',
                          }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: 'language-tsx',
                  children:
                    "// delete a global store\r\nawait plugin.stores.delete('myStore');\r\n\r\n// delete a local store\r\nplugin.stores.delete('myLocalStore', { local: true });\n",
                }),
              }),
              '\n',
              (0, n.jsx)(t.h3, { id: 'get-a-store', children: 'Get a Store' }),
              '\n',
              (0, n.jsx)(t.p, {
                children: 'You can fetch a global store using the store name.',
              }),
              '\n',
              (0, n.jsxs)(t.table, {
                children: [
                  (0, n.jsx)(t.thead, {
                    children: (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.th, { children: 'Param' }),
                        (0, n.jsx)(t.th, { children: 'Type' }),
                        (0, n.jsx)(t.th, { children: 'Description' }),
                        (0, n.jsx)(t.th, { children: 'Default Value' }),
                        (0, n.jsx)(t.th, { children: 'Required' }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(t.tbody, {
                    children: [
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'key' }),
                          (0, n.jsx)(t.td, { children: 'string' }),
                          (0, n.jsx)(t.td, { children: 'Name of the store.' }),
                          (0, n.jsx)(t.td, { children: '-' }),
                          (0, n.jsx)(t.td, { children: 'true' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, { children: 'options' }),
                          (0, n.jsx)(t.td, { children: 'Options' }),
                          (0, n.jsx)(t.td, { children: 'The options object' }),
                          (0, n.jsx)(t.td, { children: '{ local: false }' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                      (0, n.jsxs)(t.tr, {
                        children: [
                          (0, n.jsx)(t.td, {
                            children: (0, n.jsx)(t.code, {
                              children: 'options.local',
                            }),
                          }),
                          (0, n.jsx)(t.td, { children: 'boolean' }),
                          (0, n.jsx)(t.td, {
                            children: 'Gets a local store when true.',
                          }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                          (0, n.jsx)(t.td, { children: 'false' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: 'language-tsx',
                  children:
                    "// get a global store\r\nconst store = plugin.stores.get('myStore');\r\n\r\n// get a local store\r\nconst localStore = plugin.stores.get('myLocalStore', { local: true });\n",
                }),
              }),
              '\n',
              (0, n.jsxs)(s, {
                children: [
                  (0, n.jsx)('title', { children: 'Plugin SDK Introduction' }),
                  (0, n.jsx)('meta', {
                    name: 'description',
                    content:
                      "Explore the introduction to the Stores API in Dyte's Plugin SDK Usage documentation. Learn how to effectively use stores for your plugin development.",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, o.R)(), ...e.components };
        return t
          ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(a, { ...e }) })
          : a(e);
      }
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => l, x: () => i });
      var r = s(96540);
      const n = {},
        o = r.createContext(n);
      function l(e) {
        const t = r.useContext(o);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function i(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : l(e.components)),
          r.createElement(o.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
