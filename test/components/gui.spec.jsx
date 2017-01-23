import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../src/util/constants';
import { customAttributeTests } from '../common';
import Gui from '../../src/components/gui';

describe('<Gui />', () => {
  const children = <div className="title-container" />;
  const component = (
    <Gui>
      {children}
    </Gui>
  );
  const wrapper = shallow(component);

  it('renders children', () => {
    expect(wrapper.dive().prop('children')).toBe(children);
  });

  it('has gui class', () => {
    wrapper.setProps({ className: classes.GUI });
    expect(wrapper.dive().hasClass(classes.GUI)).toBeTruthy();
  });

  customAttributeTests(component, `.${classes.GUI}`);
});
