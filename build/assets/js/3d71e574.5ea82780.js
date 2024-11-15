'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [24353],
  {
    52593: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => o,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => a,
          metadata: () => t,
          toc: () => c,
        });
      const t = JSON.parse(
        '{"id":"events","title":"Events","description":"Access comprehensive documentation on iOS events with Fleet Stack Documentation. Stay informed and integrate events seamlessly into your app.","source":"@site/docs/ios/events.mdx","sourceDirName":".","slug":"/events","permalink":"/ios/events","draft":false,"unlisted":false,"editUrl":"https://github.com/dyte-io/docs/tree/main/docs/ios/events.mdx","tags":[],"version":"current","lastUpdatedAt":1731210620000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Access comprehensive documentation on iOS events with Fleet Stack Documentation. Stay informed and integrate events seamlessly into your app."},"sidebar":"tutorialSidebar","previous":{"title":"Design System","permalink":"/ios/design-system"},"next":{"title":"DyteSetupScreen","permalink":"/ios/build-pre-call-ui/default-setup-screen"}}'
      );
      var r = i(74848),
        s = i(28453);
      const a = {
          sidebar_position: 4,
          description:
            'Access comprehensive documentation on iOS events with Fleet Stack Documentation. Stay informed and integrate events seamlessly into your app.',
        },
        d = 'Events',
        o = {},
        c = [
          { value: 'Local User - Events', id: 'local-user---events', level: 2 },
          { value: 'Room joined', id: 'room-joined', level: 3 },
          { value: 'Video update', id: 'video-update', level: 3 },
          { value: 'Audio update', id: 'audio-update', level: 3 },
          {
            value: 'Room disconnected update',
            id: 'room-disconnected-update',
            level: 3,
          },
          { value: 'Proximity changed', id: 'proximity-changed', level: 3 },
          { value: 'Waitlist status', id: 'waitlist-status', level: 3 },
          {
            value: 'Participants list events',
            id: 'participants-list-events',
            level: 2,
          },
          { value: 'Participant joined', id: 'participant-joined', level: 3 },
          { value: 'Participant left', id: 'participant-left', level: 3 },
          { value: 'Screenshare updates', id: 'screenshare-updates', level: 3 },
          { value: 'Grid change', id: 'grid-change', level: 3 },
          { value: 'Video update', id: 'video-update-1', level: 3 },
          { value: 'Audio update', id: 'audio-update-1', level: 3 },
          { value: 'Active speaker', id: 'active-speaker', level: 3 },
          { value: 'Pinned participant', id: 'pinned-participant', level: 3 },
          {
            value: 'Active participants list change',
            id: 'active-participants-list-change',
            level: 3,
          },
          { value: 'Recording', id: 'recording', level: 2 },
          {
            value: 'Get active recording state',
            id: 'get-active-recording-state',
            level: 3,
          },
          {
            value: 'Listen to recording state changes',
            id: 'listen-to-recording-state-changes',
            level: 3,
          },
        ];
      function l(e) {
        const n = {
            code: 'code',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
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
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(n.header, {
                children: (0, r.jsx)(n.h1, {
                  id: 'events',
                  children: 'Events',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h2, {
                id: 'local-user---events',
                children: 'Local User - Events',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'You can subscribe to various events on the local user by implementing\r\n',
                  (0, r.jsx)(n.code, { children: 'DyteSelfEventsListener' }),
                  ' and passing the object to\r\n',
                  (0, r.jsx)(n.code, {
                    children:
                      'meeting.addSelfEventsListener(dyteSelfEventsListener)',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, r.jsx)(n.h3, { id: 'room-joined', children: 'Room joined' }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggered when the room join event completes and now the meeting is ready to\r\nproduce and consume media.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onRoomJoined() {\r\n        //Room Joined\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'video-update',
                children: 'Video update',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'Triggered when the user starts / stops the video using ',
                  (0, r.jsx)(n.code, { children: 'enableVideo' }),
                  ' or\r\n',
                  (0, r.jsx)(n.code, { children: 'disableVideo' }),
                ],
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-kotlin',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onVideoUpdate(videoEnabled: Bool) {\r\n      if (videoEnabled) {\r\n        // video is enabled, and other participants in room can see local user\r\n      } else {\r\n        // video is disabled, and other participants in room can not see local user.\r\n      }\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'audio-update',
                children: 'Audio update',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'Triggered when the user starts / stops the audio using ',
                  (0, r.jsx)(n.code, { children: 'enableAudio' }),
                  ' or\r\n',
                  (0, r.jsx)(n.code, { children: 'disableAudio' }),
                ],
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '\r\nextension MeetingViewModel: DyteSelfEventsListener {\r\n    func onAudioUpdate(audioEnabled: Bool) {\r\n      if (audioEnabled) {\r\n        // audio is enabled, and other participants in room can hear local user\r\n      } else {\r\n        // audio is disabled, and other participants in room can not hear local user.\r\n      }\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'room-disconnected-update',
                children: 'Room disconnected update',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggered when the user is disconnected due to media/network errors',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-kotlin',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onMeetingRoomDisconnected() {\r\n      //disconnected\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'proximity-changed',
                children: 'Proximity changed',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggered when there is any change in proximity. Meaning if device is near ear\r\npiece which triggers display on/off.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onProximityChanged(isNear: Bool) {\r\n      // isNear\r\n      // if true, display should be turned off, as user might be speaking through earpiece\r\n      // if false, display should be turned on, as user might be looking at display and listening through speaker/earphones.\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'waitlist-status',
                children: 'Waitlist status',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children: 'For meetings whose waiting room is enabled:',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'To get status of localUser in waiting room we can use',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'let waitListStatus = meeting.localUser.waitListStatus\n',
                }),
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'Developers can listen to those changes in ',
                  (0, r.jsx)(n.code, { children: 'onWaitListStatusUpdate()' }),
                  ' callbacks',
                ],
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    'extension MeetingViewModel: DyteSelfEventsListener {\r\n    func onWaitListStatusUpdate(waitListStatus: WaitListStatus) {\r\n\r\n    }\r\n}\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h2, {
                id: 'participants-list-events',
                children: 'Participants list events',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'You can subscribe to events for all participants by implementing\r\n',
                  (0, r.jsx)(n.code, {
                    children: 'DyteParticipantEventsListener',
                  }),
                  ' callback and then passing that object to\r\n',
                  (0, r.jsx)(n.code, {
                    children:
                      'meeting.addParticipantEventsListener(dyteParticipantEventsListener)',
                  }),
                  ' method.\r\nHere are the supported methods:',
                ],
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'participant-joined',
                children: 'Participant joined',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggers an event when any participant joins the meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onParticipantJoin(participant: DyteMeetingParticipant) {\r\n            // your code here to handle new participant\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'participant-left',
                children: 'Participant left',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggers an event when any participant leaves the meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onParticipantLeave(participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant left from meeting\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'screenshare-updates',
                children: 'Screenshare updates',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggers an event when there is any change in screenshares in a meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onScreenSharesUpdated() {\r\n            // your code here to handle screenshares from meeting\r\n            // you can use `meeting.participants.screenshares` to get latest screenshare participants\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, { id: 'grid-change', children: 'Grid change' }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Whenever there is a change in the GridInfo for the room, the following method is triggered.\r\ncalled.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onGridUpdated(gridInfo: GridInfo) {\r\n            // your code here to handle grid changes.\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'video-update-1',
                children: 'Video update',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Trigger an event when any participant starts / stops video.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onVideoUpdate(videoEnabled: Bool, participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant video toggle update\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'audio-update-1',
                children: 'Audio update',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Trigger an event when any participant starts / stops audio.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onAudioUpdate(audioEnabled: Bool, participant: DyteMeetingParticipant) {\r\n            // your code here to handle participant audio toggle update\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'active-speaker',
                children: 'Active speaker',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Trigger an event when any is change in active speaker in the meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onActiveSpeakerChanged(participant: DyteMeetingParticipant) {\r\n            // your code here to handle active speaker\r\n        }\r\n\r\n        func onNoActiveSpeaker() {\r\n            // your code here to handle no active speaker\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'pinned-participant',
                children: 'Pinned participant',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Trigger an event when any is change in pinned participant in the meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onParticipantPinned(participant: DyteMeetingParticipant) {\r\n            // your code here to show pinned participant\r\n        }\r\n\r\n        func onParticipantUnpinned() {\r\n            // your code here to remove pinned participant\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'active-participants-list-change',
                children: 'Active participants list change',
              }),
              '\n',
              (0, r.jsx)(n.p, {
                children:
                  'Triggers an event when any change in active participants list in the meeting.',
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-swift',
                  children:
                    '    extension MeetingViewModel: DyteParticipantEventsListener {\r\n        func onActiveParticipantsChanged(active: [DyteMeetingParticipant]) {\r\n            // your code here to refresh active participants\r\n        }\r\n    }\n',
                }),
              }),
              '\n',
              (0, r.jsx)(n.h2, { id: 'recording', children: 'Recording' }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'The ',
                  (0, r.jsx)(n.code, { children: 'meeting.recording' }),
                  ' object can be used start and stop recordings in a\r\nmeeting. You can also get the current status of a recording using this API.',
                ],
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'The ',
                  (0, r.jsx)(n.code, { children: 'meeting.recording' }),
                  ' object has the following properties:',
                ],
              }),
              '\n',
              (0, r.jsxs)(n.ul, {
                children: [
                  '\n',
                  (0, r.jsxs)(n.li, {
                    children: [
                      (0, r.jsx)(n.code, { children: 'recordingState' }),
                      ': Indicates the current recording state of the meeting.',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'get-active-recording-state',
                children: 'Get active recording state',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'The ',
                  (0, r.jsx)(n.code, {
                    children: 'meeting.recording.recordingState',
                  }),
                  ' property describes the current state of\r\nthe recording. The valid states are ',
                  (0, r.jsx)(n.code, { children: 'IDLE' }),
                  ', ',
                  (0, r.jsx)(n.code, { children: 'STARTING' }),
                  ', ',
                  (0, r.jsx)(n.code, { children: 'RECORDING' }),
                  ', and\r\n',
                  (0, r.jsx)(n.code, { children: 'STOPPING' }),
                  '.',
                ],
              }),
              '\n',
              (0, r.jsx)(n.h3, {
                id: 'listen-to-recording-state-changes',
                children: 'Listen to recording state changes',
              }),
              '\n',
              (0, r.jsxs)(n.p, {
                children: [
                  'The changes to ',
                  (0, r.jsx)(n.code, {
                    children: 'meeting.recording.recordingState',
                  }),
                  ' can be listened by\r\nimplementing ',
                  (0, r.jsx)(n.code, {
                    children: 'onMeetingRecordingStateUpdated',
                  }),
                  ' from\r\n',
                  (0, r.jsx)(n.code, {
                    children: 'DyteMeetingRoomEventsListener',
                  }),
                  '. You can attach this observer by calling\r\n',
                  (0, r.jsx)(n.code, {
                    children: 'meeting.addMeetingRoomEventsListener(listener)',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, r.jsx)(n.pre, {
                children: (0, r.jsx)(n.code, {
                  className: 'language-kotlin',
                  children:
                    'meeting.addMeetingRoomEventsListener(object : DyteMeetingRoomEventsListener {\r\n    override fun onMeetingRecordingStarted() {\r\n      super.onMeetingRecordingStarted()\r\n      // on recording started\r\n    }\r\n\r\n    override fun onMeetingRecordingEnded() {\r\n      super.onMeetingRecordingEnded()\r\n      // on recording ended\r\n    }\r\n\r\n    override fun onMeetingRecordingStateUpdated(state: DyteRecordingState) {\r\n      super.onMeetingRecordingStateUpdated(state)\r\n      // on recording state update\r\n    }\r\n\r\n    override fun onMeetingRecordingStopError(e: Exception) {\r\n      super.onMeetingRecordingStopError(e)\r\n      // when local user tried to end recording but it fails\r\n    }\r\n  })\n',
                }),
              }),
              '\n',
              (0, r.jsxs)(i, {
                children: [
                  (0, r.jsx)('title', { children: 'iOS Events' }),
                  (0, r.jsx)('meta', {
                    name: 'description',
                    content:
                      'Access comprehensive documentation on iOS events with Fleet Stack Documentation. Stay informed and integrate events seamlessly into your app.',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n
          ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) })
          : l(e);
      }
    },
    28453: (e, n, i) => {
      i.d(n, { R: () => a, x: () => d });
      var t = i(96540);
      const r = {},
        s = t.createContext(r);
      function a(e) {
        const n = t.useContext(s);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : a(e.components)),
          t.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
