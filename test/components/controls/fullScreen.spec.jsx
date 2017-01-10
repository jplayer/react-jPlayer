import React from 'react';

import { controlTests } from '../../common';
import FullScreen from '../../../src/components/controls/fullScreen';

describe('shallow: <FullScreen />', () => {
  const component = <FullScreen />;

  controlTests(component, 'a');
});
