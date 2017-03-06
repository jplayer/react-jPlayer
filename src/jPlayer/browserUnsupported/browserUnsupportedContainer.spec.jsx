import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { classes, defaultOptions } from '../../util/constants';
import { __get__ } from './browserUnsupportedContainer';

const mapStateToProps = __get__('mapStateToProps');

const attributes = {
  'data-test': 'test',
  children: <div />,
};
const uid = 'jPlayer-1';

describe('BrowserUnsupportedContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, ...attributes });

    expect(expected).toEqual({
      foundSupported: defaultOptions.mediaSettings.foundSupported,
      children: attributes.children,
    });
  });

  it('renders children as default', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, 'data-test': attributes['data-test'] });
    const wrapper = shallow(expected.children);

    expect(wrapper.prop('data-test')).toBe(attributes['data-test']);
    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
  });
});
