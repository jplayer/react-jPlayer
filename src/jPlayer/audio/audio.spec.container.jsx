import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { mockStore } from '../../util/common.spec';
import AudioContainer from './audio.container';
import Audio from './audio';

const setup = (state) => {
  const props = {
    children: (<track />),
    'data-attribute-test': 'test',
  };

  const context = {
    store: mockStore({
      mediaSettings: {},
      ...state,
    }),
    uid: 'player-1',
  };

  expect.spyOn(context.store, 'dispatch');

  const wrapper = shallow(
    <AudioContainer {...props} />, { context: { uid: context.uid } },
  ).dive({ context: { store: context.store } });

  return {
    props,
    context,
    wrapper,
  };
};

describe('AudioContainer', () => {
  it('requires component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Audio);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
  });

  it('require is true when video is false', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('require')).toBe(true);
  });

  it('require is false when video is true', () => {
    const { wrapper } = setup({ mediaSettings: { video: true } });

    expect(wrapper.prop('require')).toBe(false);
  });
});
