'use strict';
(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [43247],
  {
    24165: (e, t, n) => {
      n.d(t, { A: () => i });
      var r = n(96540),
        a = n(28618),
        o = n(20053);
      function i({ className: e = '' }) {
        return r.createElement(
          'section',
          { className: 'px-4 pt-16' },
          r.createElement(
            'div',
            {
              className: (0, o.A)(
                'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
                e
              ),
            },
            r.createElement(
              'h2',
              { className: 'mb-12 text-center lg:text-3xl' },
              'How can we help you today?'
            ),
            r.createElement(
              'div',
              { className: 'grid grid-cols-1 gap-4 lg:grid-cols-3' },
              r.createElement(
                'div',
                { className: 'rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900' },
                r.createElement('img', {
                  src: '/static/landing-page/calendar.svg',
                  alt: 'Book a demo',
                  width: '48',
                  height: '48',
                }),
                r.createElement('h3', { className: 'my-3' }, 'Book a Demo'),
                r.createElement(
                  'p',
                  { className: 'text-zinc-600 dark:text-zinc-400' },
                  'Contact us for a demo. We are looking forward to connecting with you.'
                ),
                r.createElement(
                  a.A,
                  {
                    href: 'https://dyte.io/schedule-demo',
                    className: 'text-primary dark:text-primary-100',
                  },
                  'Schedule a Call \u2192'
                )
              ),
              r.createElement(
                'div',
                { className: 'rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900' },
                r.createElement('img', {
                  src: '/static/landing-page/customer.svg',
                  alt: 'Support',
                  width: '48',
                  height: '48',
                }),
                r.createElement('h3', { className: 'my-3' }, 'Support'),
                r.createElement(
                  'p',
                  { className: 'text-zinc-600 dark:text-zinc-400' },
                  "Fleet Stack's expert support team is always available to help. Connect for dedicated 1:1 support!"
                ),
                r.createElement(
                  a.A,
                  {
                    href: 'https://dyte.io/contact',
                    className: 'text-primary dark:text-primary-100',
                  },
                  'Contact Us \u2192'
                )
              ),
              r.createElement(
                'div',
                { className: 'rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900' },
                r.createElement('img', {
                  src: '/static/landing-page/chat.svg',
                  alt: 'Forum',
                  width: '48',
                  height: '48',
                }),
                r.createElement('h3', { className: 'my-3' }, 'Forum'),
                r.createElement(
                  'p',
                  { className: 'text-zinc-600 dark:text-zinc-400' },
                  'Browse through our Forum to find answers to commonly asked questions.'
                ),
                r.createElement(
                  a.A,
                  {
                    href: '/faq',
                    className: 'text-primary dark:text-primary-100',
                  },
                  'View Forum \u2192'
                )
              )
            )
          )
        );
      }
    },
    52153: (e, t, n) => {
      n.r(t), n.d(t, { default: () => y });
      var r = n(96540),
        a = n(55017),
        o = n(45653),
        i = n(20053),
        s = n(33282),
        c = n(62340),
        l = n(94520),
        d = n(41310),
        u = n(43379);
      const m = n(20382).Ay.load(
        '#\r\n# General FAQs\r\n#\r\n\r\n- question: What does Dyte do?\r\n  tags: ["General"]\r\n  answer: |-\r\n    Dyte offers a real-time video and voice solution for integrating\r\n    high-quality video/voice calls into your web, mobile, and desktop\r\n    applications and websites.\r\n\r\n    Call recording, live streaming, webinars,\r\n    live transcription and translation, chatting, polling, quizzes, and\r\n    many other features are available with Dyte.\r\n\r\n    Dyte includes:\r\n\r\n    **Core SDKs:** These SDKs enable you to create high-quality custom\r\n    video and voice calls with real-time communication. Core SDKs are\r\n    completely customizable and simple to integrate.\r\n\r\n    **UI Kit:** Using Dyte&quot;s prebuilt design library of UI\r\n    components, you can integrate video and voice calls into your app or\r\n    website in minutes.\r\n\r\n    The following platforms are currently supported:\r\n\r\n    - Mobile: Flutter, Android (Java/Kotlin), iOS(Objective-C/Swift), React Native\r\n    - Web: Javascript Core SDK + UI Kit for React JS, Angular, Web Components for everything else\r\n    - Desktop: Electron\r\n\r\n    For more information, see [Fleet Stack Documentation](/)\r\n\r\n- question: What businesses can use Dyte?\r\n  tags: ["General"]\r\n  answer: |-\r\n    Dyte can add value to a wide range of industries, including telehealth, eLearning, gaming, remote working, education, event management, metaverse, adult entertainment, and others.\r\n\r\n- question: What is a Developer Portal?\r\n  tags: ["General"]\r\n  answer: |-\r\n    To get started with Dyte, you must first register in the [developer portal](https://dev.dyte.io/).\r\n\r\n    The developer portal provides the following information:\r\n\r\n    - Dashboard: A view of your usage, billing, and organization details etc.\r\n    - API Keys: The API Keys are required to instantiate a meeting.\r\n      The values for Organization ID, API Key, and Base URL are generated\r\n      dynamically for your Organization. You require these settings when\r\n      performing different actions, such as, create a meeting, delete a\r\n      meeting, add a participant, etc. Learn more: [Web SDKs](/react-ui-kit), [Mobile SDKs](/rn-core), [APIs](/api).\r\n    - Logs and Sample Apps: You can view logs and sample apps in developer portal.\r\n\r\n    You can also create a webhook, roles, presets, and so on using the developer portal.\r\n\r\n- question: What are Presets?\r\n  tags: ["General"]\r\n  answer: |-\r\n    A set of roles, UI elements, buttons, and configurations that determines how the meeting will appear for a specific participant. Presets can be created using [Developer Portal](https://dev.dyte.io/roles-presets) as well as [REST APIs](https://docs.dyte.io/api#/operations/post-presets). Learn more: [DytePermissionsPreset](/rn-core/reference/DytePermissionsPreset#module_DytePermissionsPreset).\r\n\r\n- question: What are Core SDKs used for?\r\n  tags: ["General"]\r\n  answer: |-\r\n    The Dyte Core SDKs are designed to provide developers with an easy way to incorporate real-time communication (RTC) solutions into their apps and websites. With full customization and branding options, you can build your own UI from the ground up without dealing with complicated media layers. \r\n\r\n    The Core SDK acts as a data-only layer, offering high-level primitives and abstracting away complex media and networking optimizations. It only provides simple APIs that are user-friendly and easy to work with.\r\n    See [Fleet Stack Documentation](/).\r\n\r\n- question: What is the UI Kit?\r\n  tags: ["General"]\r\n  answer: |-\r\n    Dyte\'s React UI Kit is a prebuilt design library of UI components that makes it easy to integrate video and voice calls into any app or website within minutes. See [Fleet Stack Documentation](/react-ui-kit).\r\n\r\n- question: What is the Plugin SDK?\r\n  tags: ["General"]\r\n  answer: |-\r\n    You can use [Dyte plugin SDKs](https://docs.dyte.io/plugin-sdk) to add third-party plugins to experience the most immersive, collaborative, and more human interaction right in your video and audio calls. Dyte provides multiple out-of-the-box plugins, for example, YouTube, Miro, WhiteBoard, and so on.\r\n\r\n- question: How to access API Keys and other details from the Developer Portal?\r\n  tags: ["General"]\r\n  answer: |-\r\n    Log onto [https://dev.dyte.io/apikeys](https://dev.dyte.io/apikeys) with the credentials you used to sign up for Dyte.\r\n\r\n- question: How many people can join a Dyte meeting with audio & video turned ON?\r\n  tags: ["General"]\r\n  answer: |-\r\n    On Dyte, you can have up to 2000 people on the same call with video and voice enabled.\r\n    However, if you have any specific requirements that require more people joining the same call, please\r\n    [contact us](https://dyte.io/contact).\r\n\r\n    We will support you with your requirements.\r\n\r\n- question: How many attendees can be seen on a live grid?\'\r\n  tags: ["General"]\r\n  answer: |-\r\n    In order to provide the best possible experience, we recommend the number of attendees on live grid to be set in range of 4 to 9. However, we can tailor it to a maximum of 25 attendees.\r\n\r\n- question: How many people can join a Dyte webinar?\r\n  tags: ["General"]\r\n  answer: |-\r\n    5000 people. 100 users with the audio-video enabled and everyone else attending\r\n    the call. However, if you have any specific\r\n    requirements that require more people joining the same call, please \r\n    [contact us](https://dyte.io/contact).\r\n\r\n    We will support you with your requirements.\r\n\r\n- question: What is an organization in Dyte?\r\n  tags: ["General"]\r\n  answer: |-\r\n    In Dyte, organization allows you to group all of your company\'s\r\n    members. This is a top-level entity to which all members of your group\r\n    are added. Dyte also considers the organization to be a billing unit.\r\n\r\n- question: Where can I find my auth token and room name?\r\n  tags: ["General"]\r\n  answer: |-\r\n    The Add Participant API call returns your authentication token.\r\n\r\n    See [Add a participant](/api#/operations/addParticipant).\r\n\r\n    Room name is generated when you create a meeting. You can get the room\r\n    name from the developer portal or using REST APIs. For example,\r\n\r\n    ![Create Meeting response](/static/faq/create-meeting.png)\r\n\r\n    It is to be noted that a V2 integration of our APIs doesn\'t have the concept of roomName therefore neither the APIs return roomName nor it is needed by SDK to initialize the meeting.\r\n\r\n    For more information, see [Create a meeting](/api#/operations/createMeeting).\r\n\r\n- question: Can I join a meeting from the mobile which is started on the web?\r\n  tags: ["General"]\r\n  answer: |-\r\n    Yes, you can.\r\n\r\n#\r\n# Technical FAQs\r\n#\r\n\r\n- question: What are the minimum browser and internet requirements for Dyte?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Browser Requirements:\r\n    - Chrome (or Chromium based) 74+\r\n    - Firefox 78+\r\n    - Opera 64+\r\n    - Safari 12+\r\n    - Edge 79+\r\n    - iOS (Safari) 12.1+\r\n    - iOS (Non-Safari) 15+\r\n\r\n    Internet Requirements:\r\n    - Downlink (Minimum) 4 Mbps\r\n    - Downlink (Optimal) 8 Mbps\r\n    - Uplink (Minimum) 2 Mbps\r\n    - Uplink (Optimal) 4 Mbps\r\n\r\n- question: What is the difference between a meeting and a session?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Every Dyte communication channel is referred to as a meeting. A meeting is basically a recurring instance of that communication channel, and an ongoing meeting is referred to as a session.\r\n\r\n- question: Which part of the meeting is customizable?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    To match your branding, you can change the logo, colors, font, border,\r\n    and spacing. Design tokens in UI Kit are used to customize these\r\n    components.\r\n\r\n    Our Core SDKs can also be used to create fully customized video/voice\r\n    calls for your applications.\r\n\r\n- question: Can I record a meeting?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    Yes, you can record a meeting. See [Start recording a meeting](/guides/recording/start-recording).\r\n\r\n    However, it\'s important to note that if there are no participants in the meeting for a duration of 1 minute after you\'ve started the recording, the recording automatically stops and the recording is not saved.\r\n\r\n- question: Where are the meeting recordings stored?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    The meeting recordings are saved in your cloud storage that you set up. The supported cloud providers are AWS S3 bucket, DigitalOcean Spaces, Azure Blob storage, and Google Cloud Storage (GCS) buckets. \r\n\r\n    For more information on how to configure storage configs for Dyte Recordings, see [Set storage configuration](/guides/capabilities/recording/custom-cloud-storage#set-storage-configuration). \r\n\r\n    If you haven\'t set up your storage configurations, Dyte will keep your recordings for 7 days, after which they will expire and become inaccessible.\r\n\r\n- question: Where is Dyte hosted?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Resiliency is important. Dyte uses multi-cloud and multi-region\r\n    architecture to provide that seamless experience. Dyte is hosted in\r\n    Mumbai, Virginia (US East), Singapore, Frankfurt & [more](https://dyte.io/blog/new-media-regions/). You can also read\r\n    through [this](https://dyte.io/blog/multi-region-resiliency/) blog to understand how Dyte manages a multi-region setup.\r\n\r\n- question: Can I self-host Dyte on my own servers?\r\n  tags: ["Technical"]\r\n  answer: No. Dyte is a Software as a Service (SaaS), fully managed and hosted by Dyte.\r\n\r\n- question: What platforms, language, and technologies can I build on using Dyte?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    The following are the supported platforms:\r\n    - Web: React JS, Angular, Javascript\r\n    - Mobile: Flutter, Kotlin, Swift, React Native\r\n    - Desktop: Electron\r\n\r\n- question: What backend services can I use with Dyte?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    We have no restrictions on our end. Our APIs are HTTP REST APIs and thus\r\n    can be called from services written in any language or framework. To\r\n    find your language-specific backend code, refer to our [API reference](/api)\r\n\r\n- question: What are webhooks?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Webhook service enables you to subscribe to server events. These events\r\n    allow to trigger specific server actions in response to Dyte meeting\r\n    events and state changes. \r\n\r\n    To access the current list of events that can be used with webhooks, see [Webhook Events List](/guides/capabilities/webhooks/webhook-events).\r\n\r\n- question: How do I set up and transfer a recording to my storage configuration?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    You can pass an optional object storageConfig in the start recording\r\n    request, and we will publish the recording directly to your cloud provider\r\n    once it stops. For more information, see [Publishing a recording to your\r\n    cloud provider](/guides/capabilities/recording/custom-cloud-storage).\r\n\r\n- question: I\'m unable to locate my recorded meeting through the Developer Portal or downloadUrl. Was my meeting successfully recorded?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    There are two possible reasons:\r\n\r\n    1. Dyte\'s recording feature will automatically stop recording if no participants are present in the meeting for 1 minute or longer. Please verify whether there were any participants present during the time the recording was initiated. \r\n\r\n    2. In case you haven\'t set up an external storage configuration and have also disabled uploads to Dyte\'s bucket, the recording will not be saved in any location and will be considered invalid. For more information, see [Publishing a recording to your\r\n    cloud provider](/guides/capabilities/recording/custom-cloud-storage).\r\n\r\n- question: How do I create a region-specific room?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    To create a meeting in your preferred region, pass preferredRegion in\r\n    the body of the createMeeting endpoint. For more information, see [Create a meeting](/api#/operations/createMeeting).\r\n\r\n- question: Is it possible to record specific streams or users during a meeting, regardless of who is on the screen?\r\n  tags: ["Technical", "Recording"]\r\n  answer: No, it is not possible to selectively record specific streams or users. Instead, our recording feature captures the entire screen and not individual streams or users.\r\n\r\n- question: Can I send an attachment via chat in a live session?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Yes, you can share media files via chat during a live session. You can\r\n    send files, pdfs, images, and more. You can also use plugins such as Doc\r\n    sync to view the shared file as a group and annotate the points that you\r\n    would want to clarify.\r\n\r\n- question: Can I retrieve the chat history of a session?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    You can programmatically retrieve all chat messages of a Dyte session using [Chat Replay API](/guides/export-chat-dump).\r\n    For more information, see [How to Fetch Chat History of a Dyte Session](https://dyte.io/blog/fetch-chat-history-of-a-dyte-session/)\r\n    blog.\r\n\r\n- question: What is the duration for which Dyte keeps chat records?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Dyte stores chat records for a period of 7 days, only if you\'ve enabled [Chat Replay API](/guides/export-chat-dump) for your organization. You can download the chat using the `chat_download_url` in CSV format from AWS S3.\r\n    However, it is important to note that this download link is only valid for 24 hours. In case the link has expired, you can request for a new `chat_download_url` by sending an HTTP GET request to the [Chat Replay API](/guides/export-chat-dump).\r\n\r\n- question: |-\r\n    How do I view session metadata such as start time, end time, number of\r\n    participants, and so on?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    You can use the [Session API](/api?v=v2#/operations/GetSessionDetails) to\r\n    fetch the metadata for a given session.\r\n\r\n- question: Is there a way for me to write on the screen during the meeting?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    Dyte provides multiple out-of-the-box plugins, for example, YouTube, Miro,\r\n    WhiteBoard, and so on. You can use WhiteBoard for the collaboration.\r\n\r\n- question: Can I add participants when creating a meeting only?\r\n  tags: ["Technical"]\r\n  answer: No, after creating a meeting, use the [Add Participants\r\n    API](/api/?v=v2#/operations/add_participant) to add participants to the\r\n    meeting.\r\n\r\n- question: |-\r\n    Can I pass recording parameters such as codec and storage configurations\r\n    when creating a meeting or create a template that can be used for all the\r\n    meetings?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    Yes, codec and storage information can be passed through the recording API.\r\n    Per recording, you can pass the parameters storageConfig and videoConfig.\r\n    You can also send an email to [dev@dyte.io](mailto:dev.dyte.io) to set the\r\n    orgs default configuration.\r\n\r\n- question: |-\r\n    Can I save my recordings directly to my storage bucket without saving them to Dyte?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    Yes, you can. By default, Dyte uploads all recordings to Dyte\'s S3 bucket in the AWS ap-south-1 region. However, Dyte provides users with the flexibility to choose whether or not to upload their recordings to Dyte\'s S3 bucket. \r\n\r\n    If you wish to disable uploads to Dyte\'s bucket, you can set the `dyte_bucket_config` parameter to false in the [Start Recording](/api?v=v2#/operations/start_recording) endpoint. For more information, see [Manage Dyte\'s Default Recording Upload Settings](/guides/recording/configure-dyte-bucket-config).\r\n\r\n- question: |-\r\n    What is the average file size of a Dyte recording?\r\n  tags: ["Technical", "Recording"]\r\n  answer: |-\r\n    Based on historical data, here are estimations for recording sizes with different components:\r\n\r\n    - Format: H264 video codec\r\n    - Resolution: 720p\r\n    - Duration: 1 hour\r\n    - Estimated size: On average, around 230MB\r\n    - Range: Typically falls between 200-250MB, with potential outliers for static or rapidly changing content.\r\n\r\n    Please note that these estimations are based on historical data and apply to recordings with a resolution of 720p. Actual sizes may vary depending on factors such as content, codec settings, and resolution.\r\n\r\n- question: |-\r\n    What if our server fails to consume the webhook? When will they be fired\r\n    again, and are they idempotent?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    For timeouts and 5xx errors, we retry three times with a one-second delay\r\n    between each retry.\r\n\r\n- question: Is it possible to get the total running time of a session from the meeting.ended webhook?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    We send `startedAt` and `endedAt` timestamps in a `meeting.ended` webhook\r\n    that can be used to compute the session\'s running time.\r\n\r\n- question: What is the expected delay in the livestream, and what happens if it exceeds the expected delay?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: Typically, there is a 3-5 second lag in all livestreams. If the delay exceeds 10 seconds, users can "Skip to Live," which involves dropping frames in order to synchronize the user\'s video with the live stream. Once the videos are synced, we stop dropping frames until the time exceeds 10 seconds again.\r\n\r\n- question: What is the maximum number of hosts and viewers allowed to participate in a livestream?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: Dyte\'s Interactive Livestreaming (ILS) can currently accommodate 25,000 viewers and 100 hosts on a single livestream.\r\n\r\n- question: What is the maximum number of users that the livestream can handle, and how does this impact its quality?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: Currently, our platform can support up to 25,000 viewers in a single livestream, and the quality of the stream is not affected by the number of viewers. However, an increase in the number of users may impact other features such as chats and polls.\r\n\r\n- question: How do I manage viewer permissions for a livestream?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: You can manage the permissions for a viewer using presets. For livestreaming, you must create two presets. One preset is for the livestreaming host, while the other is for the livestreaming viewer. For details, see Create [Presets](/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\r\n\r\n- question: Can I join the livestream as a host in the middle of the livestream?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: Yes, you can. However, ensure that you\'ve the required preset permissions. For details, see Create [Presets](/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\r\n\r\n- question: What permissions does a host require to start a livestream?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: The host requires certain host controls such as the ability to Kick Participants, Mute Audio, Mute Video, and Pin Participant, as well as media permissions like Start Livestream and Admit or remove participants from the livestream. For details, see Create [Presets](/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\r\n\r\n- question: How much latency can be expected with Dyte\'s live streams?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: Dyte provides live streams with a low latency of only 3 to 6 seconds.\r\n\r\n- question: Is it necessary to generate new stream keys for each live event?\r\n  tags: ["Technical", "Livestreaming"]\r\n  answer: |-\r\n    No, stream keys can be reused multiple times. However, it\'s important to keep the stream key private as it grants access to the live stream. Therefore, users should be informed to keep their stream key secure.\r\n\r\n    For more information, see [Live Stream Custom Video Input via RTMP](/guides/livestream/livestream-any-rtmp).\r\n\r\n- question: |-\r\n    I\'m encountering audio and video problems while developing a live video\r\n    solution for my app. I\'m using Chrome to test the microphone and camera.\r\n    What could be causing this?\r\n  tags: ["Technical"]\r\n  answer: |-\r\n    The issue could be due to the security features implemented by the\r\n    browser. Most of the standard browsers with best security practices restrict\r\n    many features to HTTPS instead of HTTP. You can read about the details of\r\n    the features that are restricted in Chrome\r\n    [here](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins).\r\n\r\n\r\n    To troubleshoot, we recommend trying the steps mentioned in this\r\n    [document](https://web.dev/how-to-use-local-https/). If this does not\r\n    resolve the issue, you can try using [ngrok](https://ngrok.com/) as an\r\n    alternative solution.\r\n\r\n\r\n    To use ngrok, download the software and run it with the local port\r\n    specified. This generates an HTTPS URL that you can use for testing the\r\n    microphone and camera.\r\n\r\n    1. Download ngrok.\r\n\r\n    2. Run the command \'ngrok http PUT_LOCAL_PORT_HERE\'.\r\n\r\n    3. Use the HTTPS URL to test your microphone and camera.\r\n\r\n#\r\n# Pricing FAQs\r\n#\r\n\r\n- question: How do I make a payment?\r\n  tags: ["Pricing"]\r\n  answer: |-\r\n    Once Dyte has generated an invoice, you can pay using a link, a saved card, or do a direct bank transfer.\r\n'
      );
      var h = n(24165);
      const g = m.reduce((e, t) => {
        if (!t.tags) return e;
        for (const n of t.tags) e.includes(n) || e.push(n);
        return e;
      }, []);
      function p({ title: e, children: t, open: n, onOpen: a, onClose: o }) {
        const l = (0, d.c)(e),
          u = l + '-panel',
          m = () => {
            n
              ? (o(), history.pushState({}, '', ''))
              : (a(), history.pushState({}, '', '#' + l));
          };
        return r.createElement(
          'div',
          {
            id: 'parent-' + l,
            className: (0, i.A)(
              'dyte-accordion cursor-pointer border-0 border-solid last-of-type:border-0',
              n
                ? 'mb-4 rounded-2xl bg-secondary-800'
                : 'border-b border-zinc-300 dark:border-zinc-700'
            ),
            role: 'tab',
            'aria-expanded': n,
            'aria-controls': u,
          },
          r.createElement(
            'div',
            {
              role: 'heading',
              className: (0, i.A)(
                'flex w-full cursor-pointer select-none items-center justify-between gap-4 border-0 border-solid bg-transparent p-6',
                n && '!pb-0 text-primary dark:text-primary-100'
              ),
              tabIndex: 0,
              onClick: m,
              onKeyDown: (e) => {
                ('Enter' !== e.key && ' ' !== e.key) ||
                  (e.preventDefault(), m());
              },
              id: l,
            },
            r.createElement(
              'h3',
              { id: l, className: 'text-lg font-semibold' },
              e
            ),
            r.createElement(
              'div',
              { className: 'text-zinc-300' },
              r.createElement(s.A, {
                className: (0, i.A)(
                  'h-4 w-4 text-zinc-500 dark:text-zinc-300',
                  !n && 'hidden'
                ),
              }),
              r.createElement(c.A, {
                className: (0, i.A)(
                  'h-4 w-4 text-primary-100',
                  n ? 'hidden' : 'block'
                ),
              })
            )
          ),
          r.createElement(
            'div',
            {
              role: 'region',
              id: u,
              'aria-labelledby': l,
              className: (0, i.A)(
                'accordion-content p-6 !pt-0',
                n ? 'block' : 'hidden'
              ),
            },
            t
          )
        );
      }
      function y() {
        const [e, t] = (0, r.useState)(''),
          [n, s] = (0, r.useState)(''),
          [c, y] = (0, r.useState)('All');
        (0, r.useEffect)(() => {
          if ('undefined' == typeof window) return;
          const e = window.location.hash.substring(1);
          var n;
          '' !== e &&
            (t(e),
            null === (n = document.querySelector('#parent-' + e)) ||
              void 0 === n ||
              n.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
              }));
        }, []);
        const f = (0, r.useMemo)(
          () =>
            '' === n.trim()
              ? 'All' === c
                ? m
                : m.filter((e) => e.tags.includes(c))
              : m.filter((e) =>
                  (e.question + ' ' + e.answer + ' ' + e.tags.join(' '))
                    .toLowerCase()
                    .includes(n.toLowerCase())
                ),
          [c, n]
        );
        function w({ tag: e }) {
          return r.createElement(
            'button',
            {
              className: (0, i.A)(
                'cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium',
                c === e
                  ? 'bg-primary text-white'
                  : 'bg-secondary-800 text-black dark:text-white'
              ),
              'data-tag': e,
              onClick: () => y(e),
            },
            e
          );
        }
        return r.createElement(
          a.A,
          {
            title: 'FAQ Documentation',
            description:
              "Find answers to frequently asked questions in Dyte's comprehensive FAQ documentation. Explore solutions and get insights into common queries.",
            wrapperClassName: 'faq-page bg-secondary-1000',
            noFooter: !0,
          },
          r.createElement(
            'section',
            { className: 'noise-bg px-6 py-24' },
            r.createElement(
              'div',
              {
                className:
                  'mx-auto flex max-w-7xl flex-col place-items-center justify-center',
              },
              r.createElement(
                'div',
                { className: 'font-semibold text-zinc-800 dark:text-zinc-300' },
                'Frequently Asked Questions'
              ),
              r.createElement(
                'div',
                {
                  className:
                    'my-8 text-center text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 lg:text-6xl',
                },
                r.createElement('div', null, 'Any questions?'),
                r.createElement('div', null, 'We got you.')
              ),
              r.createElement(
                'div',
                {
                  className:
                    'relative flex w-full max-w-md items-center text-zinc-700 dark:text-white',
                },
                r.createElement(l.A, {
                  className: 'z-10 h-5 w-5 translate-x-1.5',
                }),
                r.createElement('input', {
                  type: 'text',
                  className:
                    '-ml-5 h-10 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200',
                  placeholder: 'Search your query...(sdk, api, write code)',
                  value: n,
                  onInput: (e) => s(e.currentTarget.value),
                })
              )
            )
          ),
          r.createElement(
            'section',
            { className: 'mb-20 px-6 py-12' },
            r.createElement(
              'div',
              { className: 'mx-auto max-w-7xl' },
              '' !== n.trim()
                ? 0 === f.length
                  ? r.createElement(
                      'div',
                      { className: 'mb-12 text-2xl font-semibold' },
                      '\ud83d\ude22 Sorry, no results matched your search terms'
                    )
                  : r.createElement(
                      'div',
                      { className: 'mb-12 text-xl font-semibold' },
                      '\ud83d\ude4c Showing ',
                      f.length,
                      ' results for "',
                      n,
                      '"'
                    )
                : r.createElement(
                    'div',
                    {
                      className:
                        'inline-flex items-center gap-2 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800',
                    },
                    r.createElement(w, { tag: 'All' }),
                    g.map((e) => r.createElement(w, { tag: e, key: e }))
                  ),
              r.createElement(
                'div',
                { className: 'mt-12 flex flex-col gap-3' },
                f.map((n) => {
                  const a = (0, d.c)(n.question);
                  return r.createElement(
                    p,
                    {
                      title: n.question,
                      tags: n.tags || [],
                      key: n.question,
                      open: e === a,
                      onOpen: () => {
                        t(a);
                      },
                      onClose: () => {
                        t('');
                      },
                    },
                    r.createElement(u.$, null, n.answer)
                  );
                })
              )
            )
          ),
          r.createElement(h.A, {
            className: 'relative z-10 border border-solid border-secondary-700',
          }),
          r.createElement(o.A, { className: '-mt-20 pt-32 pb-12' })
        );
      }
    },
  },
]);
