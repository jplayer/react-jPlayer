import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Poster from './poster';

const classTests = [
  {
    props: { /* default props */ },
    expected: { [classes.POSTER]: true, [classes.HIDDEN]: false },
  },
  {
    props: { video: true },
    expected: { [classes.POSTER]: true, [classes.HIDDEN]: true },
  },
  {
    props: { video: true, paused: true, currentTime: 20 },
    expected: { [classes.POSTER]: true, [classes.HIDDEN]: true },
  },
  {
    props: { video: true, paused: true },
    expected: { [classes.POSTER]: true, [classes.HIDDEN]: false },
  },
];

const setup = () => {
  const props = {
    video: false,
    src: 'http://www.test.jpg',
    alt: 'test-poster',
    currentTime: 0,
    paused: false,
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Poster {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Poster />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('alt')).toBe(props.alt);
    expect(wrapper.prop('src')).toBe(props.src);
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  classTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match classes`,
    () => {
      const { wrapper } = setup();

      wrapper.setProps(test.props);

      Object.entries(test.expected).forEach((keyValuePair) => {
        const hasClass = wrapper.hasClass(keyValuePair[0]);

        if (keyValuePair[1]) {
          expect(hasClass).toBeTruthy();
        } else {
          expect(hasClass).toBeFalsy();
        }
      });
    });
  });
});
