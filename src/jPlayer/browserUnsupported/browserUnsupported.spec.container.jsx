import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { setJPlayers } from '../../util/common.spec';
import { classes, defaultOptions } from '../../util/constants';
import { __get__ } from './browserUnsupported.container';

const mapStateToProps = __get__('mapStateToProps');
const state = {
  mediaSettings: defaultOptions.mediaSettings,
};
const props = {
  children: <div className="@@jPlayer-test" />,
  attributes: {
    'data-attribute-test': 'test',
  },
};

describe('BrowserUnsupportedContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(state), { uid: 'jPlayer-1',
      children: props.children });

    expect(expected).toEqual({
      foundSupported: defaultOptions.mediaSettings.foundSupported,
      children: props.children,
    });
  });

  it('no children renders default', () => {
    const expected = mapStateToProps(setJPlayers(state), { uid: 'jPlayer-1',
      attributes: props.attributes });
    const children = shallow(expected.children);

    expect(children.prop('data-attribute-test')).toBe(props.attributes['data-attribute-test']);
    expect(children.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
  });
});
