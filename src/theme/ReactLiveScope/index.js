import React from 'react';
import * as ReactUIKit from '@dytesdk/web-application';
import * as ReactWebCore from '@dytesdk/react-web-core';

import DemoElements from '../../components/DemoElements';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...ReactUIKit,
  ...ReactWebCore,

  // DemoElements used in web-application live codeblocks
  ...DemoElements,
};

export default ReactLiveScope;
