import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import { customAttributeTests } from '../../common';
import Download from '../../../src/components/controls/download';

describe('<Download />', () => {
  const children = <i className="fa fa-download" />;
  const component = (
    <Download free>
      {children}
    </Download>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders nothing when audio is not free', () => {
    wrapper.setProps({ free: false });
    expect(wrapper.children().length).toBe(0);
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  it('has download class', () => {
    wrapper.setProps({ className: classes.DOWNLOAD });
    expect(wrapper.hasClass(classes.DOWNLOAD)).toBeTruthy();
  });

  customAttributeTests(component);
});
