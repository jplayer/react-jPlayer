import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import Poster from './poster';

describe('<Poster />', () => {
  const component = (
    <Poster
      video={false} currentTime={0} paused={false}
      src={'http://www.test.jpg'}
    />
  );
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
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  classTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match classes`,
    () => {
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

  // customAttributeTests(component);
});
