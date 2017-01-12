import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Play from '../../../src/components/controls/play';

describe('<Play />', () => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <Play onClick={functions.onClick}>
      <i className="fa fa-play" />
    </Play>
  );
  const wrapper = shallow(controlComponent);

  it('renders child', () => {
    expect(wrapper.find('.fa-play').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent);
});
