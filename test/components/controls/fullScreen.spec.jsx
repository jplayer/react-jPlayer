import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import FullScreen from '../../../src/components/controls/fullScreen';

describe('<FullScreen />', () => {
  const functions = {
    onClick: () => null,
  };
  const children = <i className="fa fa-fullScreen" />;
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <FullScreen onClick={functions.onClick}>
      {children}
    </FullScreen>
  );
  const wrapper = shallow(controlComponent);

  it('renders child', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  it('calls handler on click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent);
});
