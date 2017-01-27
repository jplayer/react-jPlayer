import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import DownloadContainer from './download.container';
import Download from './download';

const setup = () => shallowSetup(DownloadContainer, {
  children: (<i />),
});

describe('DownloadContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Download);
    expect(wrapper.prop('free')).toBe(jPlayer.media.free);
    expect(wrapper.prop('href')).toBe(jPlayer.src);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
