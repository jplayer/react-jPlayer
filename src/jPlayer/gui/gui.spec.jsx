import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import { customAttributeTests } from '../../util/common.spec';
import Gui from './gui';

describe('<Gui />', () => {
  const component = (
    <Gui>
      <div className="title-container" />
    </Gui>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.dive().children('.title-container').exists()).toBeTruthy();
  });

  it('has gui class', () => {
    expect(wrapper.dive().hasClass(classes.GUI)).toBeTruthy();
  });

  it('calls handler on mouse enter', () => {
    wrapper.setProps({ onMouseEnter: spy });
    wrapper.dive().simulate('mouseenter');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(component, `.${classes.GUI}`);
});
