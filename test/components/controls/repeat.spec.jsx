import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Repeat from '../../../src/components/controls/repeat';

describe('<Repeat />', () => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  const component = (
    <Repeat onClick={functions.onClick}>
      <i className="fa fa-repeat" />
    </Repeat>
  );
  const wrapper = shallow(component);

  it('renders child', () => {
    expect(wrapper.find('.fa-repeat').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(component);
});
