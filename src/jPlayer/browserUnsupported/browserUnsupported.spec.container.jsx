import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import { shallowSetup } from '../../util/common.spec';
import BrowserUnsupportedContainer from './browserUnsupported.container';
import BrowserUnsupported from './browserUnsupported';

const setup = () => shallowSetup(BrowserUnsupportedContainer, null, {
  mediaSettings: {
    foundSupported: true,
  },
});

describe('BrowserUnsupportedContainer', () => {
  it('render component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();
    const children = shallow(wrapper.prop('children'));

    expect(wrapper.type()).toBe(BrowserUnsupported);
    expect(children.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(children.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
    expect(wrapper.prop('foundSupported')).toBe(jPlayer.mediaSettings.foundSupported);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('custom children overwrite default children', () => {
    const { wrapper } = setup();
    wrapper.setProps({ children: <div className="@@jPlayer-test" /> });

    const children = shallow(wrapper.prop('children'));
    expect(children.hasClass('@@jPlayer-test')).toBeTruthy();
  });
});
