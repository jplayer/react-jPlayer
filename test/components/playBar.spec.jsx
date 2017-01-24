import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import PlayBar from '../../src/components/playBar';
import { classes } from '../../src/util/constants';

describe('<PlayBar />', () => {
  const currentPercentRelative = 30;
  const currentPercentAbsolute = 20;
  const component = (
    <PlayBar
      currentPercentAbsolute={currentPercentAbsolute}
      currentPercentRelative={currentPercentRelative}
    />
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('has playBar class', () => {
    expect(wrapper.dive().hasClass(classes.PLAY_BAR)).toBeTruthy();
  });

  it('width is currentPercentRelative when !smoothPlayBar', () => {
    expect(wrapper.dive().prop('style').width).toBe(`${currentPercentRelative}%`);
  });

  it('width is currentPercentAbsolute when smoothPlayBar', () => {
    wrapper.setProps({ smoothPlayBar: true });
    expect(wrapper.dive().prop('style').width).toBe(`${currentPercentAbsolute}%`);
  });

  customAttributeTests(component, `.${classes.PLAY_BAR}`);
});
