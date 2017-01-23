import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import CurrentTime from '../../src/components/currentTime';

describe('<CurrentTime />', () => {
  const currentTimeText = '13';
  const component = (
    <CurrentTime>
      {currentTimeText}
    </CurrentTime>
  );
  const wrapper = shallow(component);

  it('renders currentTimeText as a child', () => {
    expect(wrapper.prop('children')).toBe(currentTimeText);
  });
  customAttributeTests(component);
});
