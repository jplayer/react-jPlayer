import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import { classes, loopOptions } from '../../src/util/constants';
import Gui from '../../src/components/gui';
import JPlayer from '../../src/components/jPlayer';
import KeyControl from '../../src/containers/keyControl';

describe('<JPlayer />', () => {
  const component = (
    <JPlayer uid="jPlayer-test">
      <Gui />
    </JPlayer>
  );
  const classTests = [
    { props: {
      // default props
    },
      expected: [classes.JPLAYER, classes.AUDIO, classes.states.VOLUME_HIGH],
    },
    { props: {
      mediaSettings: { video: true },
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
    { props: {
      muted: false,
      volume: 0.45,
    },
      expected: [classes.states.VOLUME_LOW],
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.children(Gui).exists()).toBeTruthy();
  });

  it('renders keyControl when keyEnabled', () => {
    wrapper.setProps({ keyEnabled: true });
    expect(wrapper.children(KeyControl).exists()).toBeTruthy();
  });

  it('has custom uid', () => {
    expect(wrapper.prop('uid')).toExist();
  });

  classTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match classes`,
    () => {
      wrapper.setProps(test.props);
      expect(test.expected.every(x => wrapper.hasClass(x))).toBeTruthy();
    });
  });

  customAttributeTests(component);
});
