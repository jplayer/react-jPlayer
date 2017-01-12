import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import VolumeMax from '../../../src/components/controls/volumeMax';

describe('<VolumeMax />', () => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <VolumeMax onClick={functions.onClick}>
      <i className="fa fa-volume-up" />
    </VolumeMax>
  );
  const wrapper = shallow(controlComponent);

  it('renders child', () => {
    expect(wrapper.find('.fa-volume-up').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent);
});
