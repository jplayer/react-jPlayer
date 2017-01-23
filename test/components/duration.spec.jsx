import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Duration from '../../src/components/duration';

describe('<Duration />', () => {
  const durationText = '55';
  const component = (
    <Duration durationText={durationText}>
      {durationText}
    </Duration>
  );
  const wrapper = shallow(component);

  it('renders durationText as a child', () => {
    expect(wrapper.prop('children')).toBe(durationText);
  });
  customAttributeTests(component);
});
