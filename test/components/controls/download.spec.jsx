import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import { customAttributeTests } from '../../common';
import Download from '../../../src/components/controls/download';

describe('<Download />', () => {
  let wrapper;
  const children = <i className="fa fa-download" />;
  const component = (
    <Download free>
      {children}
    </Download>
  );

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders nothing when audio is not free', () => {
    wrapper.setProps({ free: false });
    expect(wrapper.find(`.${classes.DOWNLOAD}`).exists()).toBeFalsy();
  });

  it('renders child', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  customAttributeTests(component);
});
