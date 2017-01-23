import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import VolumeMax from '../../../src/components/controls/volumeMax';
import { classes } from '../../../src/util/constants';

describe('<VolumeMax />', () => {
  const children = <i className="fa fa-volume-up" />;
  const component = (
    <VolumeMax>
      {children}
    </VolumeMax>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has volumeMax class', () => {
    wrapper.setProps({ className: classes.VOLUME_MAX });
    expect(wrapper.hasClass(classes.VOLUME_MAX)).toBeTruthy();
  });

  customAttributeTests(component);
});
