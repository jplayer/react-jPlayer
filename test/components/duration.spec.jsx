import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Duration from '../../src/components/duration';

describe('<Duration />', () => {
  const durationText = '55';
  const onClickSpy = expect.createSpy();
  const component = <Duration durationText={durationText} onClick={onClickSpy} />;
  const wrapper = shallow(component);

  it('onClick handler is called', () => {
    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('renders durationText as a child', () => {
    expect(wrapper.prop('children')).toBe(durationText);
  });
  customAttributeTests(component);
});
