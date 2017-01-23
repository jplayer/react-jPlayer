import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Mute from '../../../src/components/controls/mute';

describe('<Mute />', () => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  const component = (
    <Mute onClick={functions.onClick}>
      <i className="fa fa-mute" />
    </Mute>
  );
  const wrapper = shallow(component);

  it('renders child', () => {
    expect(wrapper.find('.fa-mute').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(component);
});
