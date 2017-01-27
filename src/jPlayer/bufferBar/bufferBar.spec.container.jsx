import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { mockStore } from '../../util/common.spec';
import BufferBarContainer from './bufferBar.container';
import BufferBar from './bufferBar';

const setup = (state) => {
  const props = {
    'data-attribute-test': 'test',
  };

  const context = {
    store: mockStore({
      bufferedTimeRanges: [
        {
          start: 0,
          end: 10,
        },
      ],
      duration: 30,
      bufferColour: '#fff',
      ...state,
    }),
    uid: 'player-1',
  };

  expect.spyOn(context.store, 'dispatch');

  const wrapper = mount(
    <Provider store={context.store}>
      <BufferBarContainer {...props} />
    </Provider>, {
      context: { uid: context.uid }, childContextTypes: { uid: React.PropTypes.string },
    },
  ).find(BufferBarContainer);

  return {
    props,
    context,
    wrapper,
  };
};

describe('<BufferBarContainer />', () => {
  it('requires component and maps state', () => {
    const { wrapper, props } = setup();
    const bufferBar = wrapper.find(BufferBar);
    const bufferBarContainer = wrapper.find(BufferBarContainer.name);

    expect(wrapper.type()).toBe(BufferBarContainer);
    expect(bufferBar.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
  });
});
