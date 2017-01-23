import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Play from '../../../src/components/controls/play';
import { classes } from '../../../src/util/constants';

describe('<Play />', () => {
  const children = <i className="fa fa-play" />;
  const component = (
    <Play>
      {children}
    </Play>
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

  it('has play class', () => {
    wrapper.setProps({ className: classes.PLAY });
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
  });

  customAttributeTests(component);
});
