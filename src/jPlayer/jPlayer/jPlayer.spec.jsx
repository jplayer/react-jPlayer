import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes, loopOptions } from '../../util/constants';
import JPlayer from './jPlayer';
import KeyControl from '../keyControl/keyControl.container';

const classTests = [
  { props: {
    // default props
  },
    expected: [classes.JPLAYER, classes.AUDIO, classes.states.VOLUME_HIGH],
  },
  { props: {
    video: true,
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

const setup = () => {
  const props = {
    children: (<div />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<JPlayer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<JPlayer />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.children(props.children.type).type()).toBe(props.children.type);
    expect(wrapper.hasClass(classes.JPLAYER)).toBeTruthy();
    expect(wrapper.children(KeyControl).exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  classTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match classes`,
    () => {
      wrapper.setProps(test.props);

      expect(test.expected.every(x => wrapper.hasClass(x))).toBeTruthy();
    });
  });
});
