import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Repeat from '../../../src/components/controls/repeat';
import { classes } from '../../../src/util/constants';

describe('<Repeat />', () => {
  const children = <i className="fa fa-repeat" />;
  const component = (
    <Repeat>
      {children}
    </Repeat>
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

  it('has repeat class', () => {
    wrapper.setProps({ className: classes.REPEAT });
    expect(wrapper.hasClass(classes.REPEAT)).toBeTruthy();
  });

  customAttributeTests(component);
});
