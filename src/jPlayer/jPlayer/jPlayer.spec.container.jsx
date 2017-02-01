import React from 'react';
import expect from 'expect';

import { classes, loopOptions } from '../../util/constants';
import { mountedSetup } from '../../util/common.spec';
import JPlayerContainer from './jPlayer.container';
import JPlayer from './jPlayer';

const classTests = [
  { state: {
    // default state
  },
    expected: [classes.JPLAYER, classes.AUDIO, classes.states.VOLUME_HIGH],
  },
  { state: {
    mediaSettings: {
      video: true,
    },
    paused: true,
    fullScreen: true,
    muted: true,
    volume: 0.3,
    seeking: true,
    loop: loopOptions.LOOP,
  },
    expected: [classes.VIDEO, classes.states.FULL_SCREEN,
      classes.states.MUTED, classes.states.SEEKING, classes.states.LOOPED,
    ],
  },
  { state: {
    muted: false,
    volume: 0.45,
  },
    expected: [classes.states.VOLUME_LOW],
  },
];

const setup = state => mountedSetup(JPlayerContainer, {
  children: (<div className="@@jPlayer-test" />),
}, {
  media: {
    sources: {
      mp3: 'test.mp3',
    },
  },
  ...state,
});

describe('<JPlayerContainer />', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();
    const jPlayerContainer = wrapper.find('JPlayerContainer');
    const jPlayer = wrapper.find(JPlayer);

    expect(jPlayer.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(jPlayerContainer.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(jPlayerContainer.prop('uid')).toNotExist();
    expect(jPlayerContainer.prop('dispatch')).toNotExist();
  });

  classTests.forEach((test) => {
    it(`state (${Object.entries(test.state).join(' & ')}) match classes`,
    () => {
      const { wrapper } = setup(test.state);
      const jPlayerContainer = wrapper.find('JPlayerContainer');

      expect(test.expected.every(x =>
        jPlayerContainer.prop('attributes').className.includes(x),
      )).toBeTruthy();
    });
  });
});
