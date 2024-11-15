'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [81821],
  {
    15653: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => a,
          metadata: () => r,
          toc: () => d,
        });
      const r = JSON.parse(
        '{"id":"quickstart","title":"Quickstart","description":"Quickstart your iOS app integration with Fleet Stack Documentation. Follow step-by-step guides for a smooth and efficient setup.","source":"@site/docs/ios/quickstart.mdx","sourceDirName":".","slug":"/quickstart","permalink":"/ios/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios/quickstart.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":2,"frontMatter":{"title":"Quickstart","sidebar_position":2,"description":"Quickstart your iOS app integration with Fleet Stack Documentation. Follow step-by-step guides for a smooth and efficient setup."},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/ios/"},"next":{"title":"Design System","permalink":"/ios/design-system"}}'
      );
      var i = n(74848),
        s = n(28453),
        o = n(20633);
      const a = {
          title: 'Quickstart',
          sidebar_position: 2,
          description:
            'Quickstart your iOS app integration with Fleet Stack Documentation. Follow step-by-step guides for a smooth and efficient setup.',
        },
        l = 'Quickstart',
        c = {},
        d = [
          { value: 'Objective', id: 'objective', level: 2 },
          {
            value: 'Before Getting Started',
            id: 'before-getting-started',
            level: 2,
          },
          {
            value: 'Step 1: Install the SDK',
            id: 'step-1-install-the-sdk',
            level: 2,
          },
          { value: '<strong>CocoaPods</strong>', id: 'cocoapods', level: 3 },
          {
            value: '<strong>Swift Package Manager</strong>',
            id: 'swift-package-manager',
            level: 3,
          },
          {
            value: 'Step 2: Configure a Dyte meeting',
            id: 'step-2-configure-a-dyte-meeting',
            level: 2,
          },
          {
            value: 'Step 3: Initialize the SDK',
            id: 'step-3-initialize-the-sdk',
            level: 2,
          },
          {
            value: 'Step 4: Launch the meeting UI',
            id: 'step-4-launch-the-meeting-ui',
            level: 2,
          },
        ];
      function u(e) {
        const t = {
            a: 'a',
            code: 'code',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            header: 'header',
            img: 'img',
            li: 'li',
            ol: 'ol',
            p: 'p',
            pre: 'pre',
            strong: 'strong',
            table: 'table',
            tbody: 'tbody',
            td: 'td',
            th: 'th',
            thead: 'thead',
            tr: 'tr',
            ul: 'ul',
            ...(0, s.R)(),
            ...e.components,
          },
          { Head: r, TabItem: a, Tabs: l } = t;
        return (
          r || p('Head', !0),
          a || p('TabItem', !0),
          l || p('Tabs', !0),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(t.header, {
                children: (0, i.jsx)(t.h1, {
                  id: 'quickstart',
                  children: 'Quickstart',
                }),
              }),
              '\n',
              (0, i.jsx)(t.p, {
                children:
                  "This quickstart shows how to use Dyte's iOS UI Kit SDK to add live video and\r\naudio to your iOS applications.",
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'For getting started quickly, you can use our sample code. You can clone and run\r\na sample application from the\r\n',
                  (0, i.jsx)(t.a, {
                    href: 'https://github.com/dyte-io/ios-samples/tree/main/',
                    children: 'iOS UI Kit Sample App GitHub repository',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, i.jsx)(t.h2, { id: 'objective', children: 'Objective' }),
              '\n',
              (0, i.jsx)(t.p, { children: "You'll learn how to:" }),
              '\n',
              (0, i.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, i.jsx)(t.li, {
                    children: (0, i.jsx)(t.a, {
                      href: '#step-1-install-the-sdk',
                      children: 'Install the Dyte SDK',
                    }),
                  }),
                  '\n',
                  (0, i.jsx)(t.li, {
                    children: (0, i.jsx)(t.a, {
                      href: '#step-2-configure-a-dyte-meeting',
                      children: 'Configure a Dyte meeting',
                    }),
                  }),
                  '\n',
                  (0, i.jsx)(t.li, {
                    children: (0, i.jsx)(t.a, {
                      href: '#step-3-initialize-the-sdk',
                      children: 'Initialize the SDK',
                    }),
                  }),
                  '\n',
                  (0, i.jsx)(t.li, {
                    children: (0, i.jsx)(t.a, {
                      href: '#step-4-launch-the-meeting-ui',
                      children: 'Launch the meeting UI',
                    }),
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, i.jsx)(t.h2, {
                id: 'before-getting-started',
                children: 'Before Getting Started',
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  "Make sure you've read the\r\n",
                  (0, i.jsx)(t.a, {
                    href: '/getting-started',
                    children: 'Getting Started with Dyte',
                  }),
                  ' topic and\r\ncompleted the steps in the\r\n',
                  (0, i.jsx)(t.a, {
                    href: '/getting-started#integrate-dyte',
                    children: 'Integrate Dyte',
                  }),
                  ' section.\r\nYou must complete the following steps:',
                ],
              }),
              '\n',
              (0, i.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, i.jsxs)(t.li, {
                    children: [
                      'Create a ',
                      (0, i.jsx)(t.a, {
                        href: 'https://dev.dyte.io/',
                        children: 'Dyte Developer Account',
                      }),
                    ],
                  }),
                  '\n',
                  (0, i.jsxs)(t.li, {
                    children: [
                      'Create a\r\n',
                      (0, i.jsx)(t.a, {
                        href: '/api/?v=v2#/operations/create_meeting',
                        children: 'Dyte Meeting',
                      }),
                    ],
                  }),
                  '\n',
                  (0, i.jsxs)(t.li, {
                    children: [
                      (0, i.jsx)(t.a, {
                        href: '/api/?v=v2#/operations/add_participant',
                        children: 'Add Participants',
                      }),
                      '\r\nto the meeting. This API returns the authentication token that is required to initialize your frontend SDKs.',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, i.jsx)(t.h2, {
                id: 'step-1-install-the-sdk',
                children: 'Step 1: Install the SDK',
              }),
              '\n',
              (0, i.jsxs)(l, {
                children: [
                  (0, i.jsxs)(a, {
                    value: 'cocoa_pod',
                    label: 'CocoaPods',
                    default: 'cocoa_pod',
                    children: [
                      (0, i.jsxs)(t.ul, {
                        children: [
                          '\n',
                          (0, i.jsxs)(t.li, {
                            children: [
                              '\n',
                              (0, i.jsx)(t.h3, {
                                id: 'cocoapods',
                                children: (0, i.jsx)(t.strong, {
                                  children: 'CocoaPods',
                                }),
                              }),
                              '\n',
                            ],
                          }),
                          '\n',
                        ],
                      }),
                      (0, i.jsxs)(t.ol, {
                        children: [
                          '\n',
                          (0, i.jsxs)(t.li, {
                            children: [
                              'Add the following line to your ',
                              (0, i.jsx)(t.code, { children: 'Podfile' }),
                              '.',
                            ],
                          }),
                          '\n',
                        ],
                      }),
                      (0, i.jsx)(o.hB, {
                        pkg: 'DyteUiKit',
                        path: '9/b/8/DyteUiKit',
                      }),
                      (0, i.jsxs)(t.ol, {
                        start: '2',
                        children: [
                          '\n',
                          (0, i.jsx)(t.li, {
                            children:
                              'Install the client SDK as a CocoaPods dependency.',
                          }),
                          '\n',
                        ],
                      }),
                      (0, i.jsx)(t.pre, {
                        children: (0, i.jsx)(t.code, {
                          className: 'language-shell',
                          children: 'pod install\n',
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(a, {
                    value: 'spm',
                    label: 'Swift Package Manager',
                    children: (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            '\n',
                            (0, i.jsx)(t.h3, {
                              id: 'swift-package-manager',
                              children: (0, i.jsx)(t.strong, {
                                children: 'Swift Package Manager',
                              }),
                            }),
                            '\n',
                            'Add ',
                            (0, i.jsx)(t.code, { children: 'DyteUiKit' }),
                            ' SDK through Swift Package Manager in Xcode. Use ',
                            (0, i.jsx)(t.a, {
                              href: 'https://github.com/dyte-in/ios-uikit-framework.git',
                              children:
                                'https://github.com/dyte-in/ios-uikit-framework.git',
                            }),
                            ' as the package source.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                  }),
                ],
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Add the necessary fonts and permission entries in the ',
                  (0, i.jsx)(t.code, { children: 'info.plist' }),
                  ' file. You can customize the strings shown in the permission pop-ups to match your audience preferences.',
                ],
              }),
              '\n',
              (0, i.jsx)(t.pre, {
                children: (0, i.jsx)(t.code, {
                  className: 'language-xml',
                  children:
                    '<key>NSBluetoothPeripheralUsageDescription</key>\r\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\r\n<key>NSBluetoothAlwaysUsageDescription</key>\r\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\r\n<key>NSCameraUsageDescription</key>\r\n<string>For people to see you during meetings, we need access to your camera.</string>\r\n<key>NSMicrophoneUsageDescription</key>\r\n<string>For people to hear you during meetings, we need access to your microphone.</string>\r\n<key>NSPhotoLibraryUsageDescription</key>\r\n<string>For people to share, we need access to your photos.</string>\r\n<key>UIBackgroundModes</key>\r\n\t<array>\r\n\t\t<string>audio</string>\r\n\t\t<string>voip</string>\r\n\t\t<string>fetch</string>\r\n\t\t<string>remote-notification</string>\r\n\t</array>\n',
                }),
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'The ',
                  (0, i.jsx)(t.code, { children: 'UIBackgroundModes' }),
                  ' key is used in the ',
                  (0, i.jsx)(t.code, { children: 'Info.plist' }),
                  " file of an iOS app to declare the app's supported background execution modes. This key is an array of strings that specifies the types of background tasks that the app supports. By declaring the background modes, the app can continue to run in the background and perform specific tasks even when it is not in the foreground.\r\nIt's important to note that the use of background modes should be justified and comply with Apple's App Store Review Guidelines. Apps that misuse background modes or unnecessarily run in the background may be rejected during the app review process.",
                ],
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Sources: Apple Developer Documentation: ',
                  (0, i.jsx)(t.a, {
                    href: 'https://developer.apple.com/documentation/bundleresources/information_property_list/uibackgroundmodes',
                    children: "Declaring Your App's Supported Background Tasks",
                  }),
                ],
              }),
              '\n',
              (0, i.jsx)(t.h2, {
                id: 'step-2-configure-a-dyte-meeting',
                children: 'Step 2: Configure a Dyte meeting',
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Configure the following properties in the ',
                  (0, i.jsx)(t.code, { children: 'DyteMeetingInfoV2' }),
                  ' class. You must pass a valid participant ',
                  (0, i.jsx)(t.code, { children: 'authToken' }),
                  '\r\nobtained from the ',
                  (0, i.jsx)(t.a, {
                    href: '/api/?v=v2#/operations/add_participant',
                    children: 'Add Participant',
                  }),
                  ' API.',
                ],
              }),
              '\n',
              (0, i.jsxs)(t.table, {
                children: [
                  (0, i.jsx)(t.thead, {
                    children: (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.th, { children: 'Name' }),
                        (0, i.jsx)(t.th, { children: 'Description' }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(t.tbody, {
                    children: [
                      (0, i.jsxs)(t.tr, {
                        children: [
                          (0, i.jsx)(t.td, {
                            children: (0, i.jsx)(t.code, {
                              children: 'authToken',
                            }),
                          }),
                          (0, i.jsxs)(t.td, {
                            children: [
                              'Authentication token generated using the ',
                              (0, i.jsx)(t.a, {
                                href: '/api/?v=v2#/operations/add_participant',
                                children: 'Add Participant API',
                              }),
                              ' after meeting creation.',
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(t.tr, {
                        children: [
                          (0, i.jsx)(t.td, {
                            children: (0, i.jsx)(t.code, {
                              children: 'enableAudio',
                            }),
                          }),
                          (0, i.jsxs)(t.td, {
                            children: [
                              'Set whether to join the meeting with your Mic ON (',
                              (0, i.jsx)(t.code, { children: 'true' }),
                              ') or OFF (',
                              (0, i.jsx)(t.code, { children: 'false' }),
                              ').',
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(t.tr, {
                        children: [
                          (0, i.jsx)(t.td, {
                            children: (0, i.jsx)(t.code, {
                              children: 'enableVideo',
                            }),
                          }),
                          (0, i.jsxs)(t.td, {
                            children: [
                              'Set whether to join the meeting with your Camera ON (',
                              (0, i.jsx)(t.code, { children: 'true' }),
                              ') or OFF (',
                              (0, i.jsx)(t.code, { children: 'false' }),
                              ').',
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(t.tr, {
                        children: [
                          (0, i.jsx)(t.td, {
                            children: (0, i.jsx)(t.code, {
                              children: 'baseUrl',
                            }),
                          }),
                          (0, i.jsx)(t.td, {
                            children:
                              'Base URL of the Dyte environment you have created the meeting on.',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, i.jsx)(t.pre, {
                children: (0, i.jsx)(t.code, {
                  className: 'language-swift',
                  children:
                    ' let meetingInfo = DyteMeetingInfoV2(authToken: "<authToken>",\r\n                                     enableAudio: true, \r\n                                     enableVideo: true, \r\n                                     baseUrl: "dyte.io")\n',
                }),
              }),
              '\n',
              (0, i.jsx)(t.h2, {
                id: 'step-3-initialize-the-sdk',
                children: 'Step 3: Initialize the SDK',
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'To set the initialization properties in the ',
                  (0, i.jsx)(t.code, { children: 'DyteUiKit' }),
                  ' class, simply initialize ',
                  (0, i.jsx)(t.code, { children: 'DyteMeetingInfoV2' }),
                  ' mention in the step 2',
                ],
              }),
              '\n',
              (0, i.jsx)(t.pre, {
                children: (0, i.jsx)(t.code, {
                  className: 'language-swift',
                  children:
                    '\r\n      let meetingInfo = DyteMeetingInfoV2(authToken: "<authToken>",\r\n                                     enableAudio: true, \r\n                                     enableVideo: true, \r\n                                     baseUrl: "dyte.io")\r\n\r\n      let dyteUikit = DyteUiKit(meetingInfoV2: meetingInfo)\r\n\n',
                }),
              }),
              '\n',
              (0, i.jsx)(t.h2, {
                id: 'step-4-launch-the-meeting-ui',
                children: 'Step 4: Launch the meeting UI',
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Follow the step 2 and step 3 to initialize MeetingObject using ',
                  (0, i.jsx)(t.code, { children: 'DyteUIKit' }),
                  ' class. Use the startMeeting method on DyteUIKit object you get in step 3 to launch UI',
                ],
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Try this in ',
                  (0, i.jsx)(t.code, { children: 'viewDidAppear()' }),
                ],
              }),
              '\n',
              (0, i.jsx)(t.pre, {
                children: (0, i.jsx)(t.code, {
                  className: 'language-swift',
                  children:
                    'import DyteUiKit\r\nimport DyteiOSCore\r\n\r\nclass ViewController: UIViewController {\r\n\r\n    override func viewDidLoad() {\r\n        super.viewDidLoad()\r\n    }\r\n    var dyteUikit: DyteUiKit!\r\n\r\n   override func viewDidAppear(_ animated: Bool) {\r\n        super.viewDidAppear(animated)\r\n        let meetingInfo = DyteMeetingInfoV2(authToken: "<authToken>",\r\n                                     enableAudio: true, \r\n                                     enableVideo: true, \r\n                                     baseUrl: "dyte.io")\r\n        dyteUikit = DyteUiKit(meetingInfoV2: meetingInfo)\r\n        let controller = dyteUikit.startMeeting {\r\n            [weak self] in\r\n            guard let self = self else {return}\r\n            self.dismiss(animated: true)\r\n        }\r\n        controller.modalPresentationStyle = .fullScreen\r\n        self.present(controller, animated: true)\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, i.jsx)(t.p, {
                children:
                  "Here's a visual representation of all the configuration options described.",
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  (0, i.jsx)(t.img, {
                    alt: 'meeting UI screenshot with labeled parts',
                    src: n(21846).A + '',
                    width: '263',
                    height: '570',
                  }),
                  '\r\n',
                  (0, i.jsx)(t.img, {
                    alt: 'meeting UI screenshot with labeled parts',
                    src: n(85858).A + '',
                    width: '263',
                    height: '570',
                  }),
                  '\r\n',
                  (0, i.jsx)(t.img, {
                    alt: 'meeting UI screenshot with labeled parts',
                    src: n(22327).A + '',
                    width: '263',
                    height: '570',
                  }),
                ],
              }),
              '\n',
              (0, i.jsxs)(r, {
                children: [
                  (0, i.jsx)('title', { children: 'iOS Quickstart' }),
                  (0, i.jsx)('meta', {
                    name: 'description',
                    content:
                      'Quickstart your iOS app integration with Fleet Stack Documentation. Follow step-by-step guides for a smooth and efficient setup.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components };
        return t
          ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(u, { ...e }) })
          : u(e);
      }
      function p(e, t) {
        throw new Error(
          'Expected ' +
            (t ? 'component' : 'object') +
            ' `' +
            e +
            '` to be defined: you likely forgot to import, pass, or provide it.'
        );
      }
    },
    20633: (e, t, n) => {
      n.d(t, {
        hB: () => l,
        OV: () => d,
        tb: () => u,
        vE: () => a,
        $r: () => c,
      });
      var r = n(96540),
        i = n(11756);
      const s = {};
      async function o({ pkg: e = 'ui-kit' }) {
        if (void 0 !== s[e]) return s[e];
        const t = await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),
          n = (await t.json())['dist-tags'].latest;
        return (s[e] = n), n;
      }
      const a = ({ pkg: e }) => {
          const [t, n] = (0, r.useState)('+');
          return (
            (0, r.useEffect)(() => {
              const t = JSON.stringify({ maven: e });
              fetch(
                'https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest',
                { method: 'POST', body: t }
              )
                .then((e) => e.json())
                .then((e) => {
                  var t;
                  return n(
                    null !== (t = e.latestVersion) && void 0 !== t ? t : '+'
                  );
                });
            }, []),
            r.createElement(
              'div',
              null,
              r.createElement(
                i.A,
                { language: 'groovy' },
                `dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:${e}:${t}'\n}`
              )
            )
          );
        },
        l = ({ pkg: e, path: t }) => {
          const [n, s] = (0, r.useState)(void 0);
          return (
            (0, r.useEffect)(() => {
              fetch(
                `https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${t}/`,
                { method: 'GET', body: null }
              )
                .then((e) => e.json())
                .then((e) => s(e[e.length - 1].name));
            }, []),
            r.createElement(
              'div',
              null,
              r.createElement(
                i.A,
                { language: 'ruby' },
                `pod '${e}' ${n ? `, '${n}'` : ''}`
              )
            )
          );
        },
        c = () => {
          const [e, t] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              !(async function () {
                const e = await o({ pkg: 'web-core' });
                t(`-${e}`);
              })();
            }, []),
            r.createElement(
              i.A,
              { language: 'html' },
              `<script src="https://cdn.dyte.in/core/dyte${e}.js" />`
            )
          );
        },
        d = () => {
          const [e, t] = (0, r.useState)(''),
            [n, s] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              !(async function () {
                const e = await o({ pkg: 'web-core' });
                t(`-${e}`);
                const n = await o({ pkg: 'ui-kit' });
                s(`@${n}`);
              })();
            }, []),
            r.createElement(
              i.A,
              { language: 'html' },
              `<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`
            )
          );
        },
        u = ({ modules: e = ['provideDyteDesignSystem', 'extendConfig,'] }) => {
          const [t, n] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              !(async function () {
                const e = await o({ pkg: 'ui-kit' });
                n(`@${e}`);
              })();
            }, []),
            r.createElement(
              i.A,
              { language: 'html' },
              `<head>\n  <script type="module">\n    import {\n      ${e.join(
                ', '
              )}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`
            )
          );
        };
    },
    74866: (e, t, n) => {
      n.d(t, { A: () => w });
      var r = n(96540),
        i = n(20053),
        s = n(12075),
        o = n(86850),
        a = n(15418),
        l = n(90062),
        c = n(65354),
        d = n(54982);
      const u = {
        playgroundContainer: 'playgroundContainer_TGbA',
        playgroundHeader: 'playgroundHeader_qwyd',
        playgroundEditor: 'playgroundEditor_PvJ1',
        playgroundPreview: 'playgroundPreview_bb8I',
      };
      var h = n(1589),
        p = n(63581),
        g = n(33257);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function y({ children: e }) {
        return r.createElement(
          'div',
          { className: (0, i.A)(u.playgroundHeader) },
          e
        );
      }
      function j() {
        return r.createElement('div', null, 'Loading...');
      }
      function x() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            y,
            null,
            r.createElement(
              a.A,
              {
                id: 'theme.Playground.result',
                description: 'The result label of the live codeblocks',
              },
              'Preview'
            )
          ),
          r.createElement(
            'div',
            { className: u.playgroundPreview },
            r.createElement(c.A, { fallback: r.createElement(j, null) }, () =>
              r.createElement(
                r.Fragment,
                null,
                r.createElement(o.pA, null),
                r.createElement(o.p1, null)
              )
            )
          )
        );
      }
      function b() {
        const e = (0, s.A)();
        return r.createElement(o.w, {
          key: String(e),
          className: (0, i.A)(
            u.playgroundEditor,
            'border border-secondary-800 !pb-4'
          ),
        });
      }
      function v() {
        return r.createElement(
          'div',
          { className: 'relative' },
          r.createElement(
            'div',
            {
              className:
                '-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900',
            },
            r.createElement(
              a.A,
              {
                id: 'theme.Playground.liveEditor',
                description: 'The live editor label of the live codeblocks',
              },
              'LIVE EDITOR'
            ),
            r.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 384 512',
                className: 'ml-2 h-4',
              },
              r.createElement('path', {
                fill: '#FFD43B',
                d: 'M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z',
              })
            )
          ),
          r.createElement(b, null)
        );
      }
      const k = { value: !1 };
      function w(e) {
        var { children: t, transformCode: n } = e,
          s = f(e, ['children', 'transformCode']);
        const {
            siteConfig: { themeConfig: a },
          } = (0, l.A)(),
          {
            liveCodeBlock: { playgroundPosition: c },
          } = a,
          y = (0, d.A)(),
          [j, b] = (0, h.useDyteClient)(),
          { colorMode: w } = (0, g.G)();
        return (
          (0, r.useEffect)(() => {
            k.value ||
              ((k.value = !0),
              b({
                roomName: 'qplrfc-uuujcj',
                authToken:
                  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',
                defaults: { audio: !1, video: !1 },
              }).then((e) => {
                0 == location.href.includes('build-pre-call-ui') && e.join(),
                  (window.meeting = e),
                  (e.meta.meetingStartedTimestamp = new Date()),
                  e.participants.setMockParticipantCount(5, 5);
                const t =
                  document.getElementsByTagName('html')[0].dataset.theme;
                (0, p.provideDyteDesignSystem)(document.body, { theme: t }),
                  (k.value = !1);
              }));
          }, []),
          (0, r.useEffect)(() => {
            (0, p.provideDyteDesignSystem)(document.body, { theme: w });
          }, [w]),
          r.createElement(
            'div',
            {
              className: (0, i.A)(
                u.playgroundContainer,
                '!rounded-none !shadow-none'
              ),
            },
            r.createElement(
              h.DyteProvider,
              { value: j },
              r.createElement(
                o.Q,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      r.forEach(function (t) {
                        m(e, t, n[t]);
                      });
                  }
                  return e;
                })(
                  {
                    code: t.replace(/\n$/, ''),
                    transformCode: null != n ? n : (e) => `${e};`,
                    theme: y,
                  },
                  s
                ),
                'top' === c
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(x, null),
                      r.createElement(v, null)
                    )
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(v, null),
                      r.createElement(x, null)
                    )
              )
            )
          )
        );
      }
    },
    72041: (e, t, n) => {
      n.d(t, { A: () => d });
      var r = n(96540),
        i = n(63581),
        s = n(1589);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const d = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      })({ React: r }, r, i, s, {
        Row: function (e) {
          var { children: t, style: n = {} } = e,
            i = l(e, ['children', 'style']);
          return r.createElement(
            'div',
            a(
              { style: a({ display: 'flex', gap: 8, flexWrap: 'wrap' }, n) },
              i
            ),
            t
          );
        },
        Col: function (e) {
          var { children: t, style: n = {} } = e,
            i = l(e, ['children', 'style']);
          return r.createElement(
            'div',
            a(
              {
                style: a(
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: 8,
                  },
                  n
                ),
              },
              i
            ),
            t
          );
        },
        Center: function (e) {
          var { children: t, style: n } = e,
            i = l(e, ['children', 'style']);
          return r.createElement(
            'div',
            a(
              {
                style: a(
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 8,
                  },
                  n
                ),
              },
              i
            ),
            t
          );
        },
        airplaneSVG:
          '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',
        activePlugin: {},
      });
    },
    22327: (e, t, n) => {
      n.d(t, { A: () => r });
      const r =
        n.p +
        'assets/images/meeting-options-854b9fb6f07cc7651852a908da6911a0.png';
    },
    21846: (e, t, n) => {
      n.d(t, { A: () => r });
      const r =
        n.p +
        'assets/images/meeting-setup-c929316cccbe4e4c20fc788089944c8d.png';
    },
    85858: (e, t, n) => {
      n.d(t, { A: () => r });
      const r =
        n.p + 'assets/images/meeting-f87fb23ca48665e51c4d92b2b097e68d.png';
    },
  },
]);
