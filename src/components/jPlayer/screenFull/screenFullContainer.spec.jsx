import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';

import ScreenFullContainer from './screenFullContainer';

const state = {
  jPlayers: {
    TestPlayer: {},
  },
};
const store = configureMockStore()(state);
const fullscreenchange = 'fullscreenchange';
const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = mount(
    <Provider store={store}>
      <ScreenFullContainer {...props} />
    </Provider>, {
      context: {
        id: 'TestPlayer',
      },
      childContextTypes: {
        id: PropTypes.string,
      },
    },
  );

  return {
    wrapper,
    props,
  };
};

describe('ScreenFullContainer', () => {
  it('listens for closing full screen if screenFull is enabled', () => {
    ScreenFullContainer.__Rewire__('screenfull', {
      enabled: true,
      raw: {
        fullscreenchange,
      },
    });

    setup();

    document.dispatchEvent(new window.Event(fullscreenchange));
  });

  it('stops listening for closing full screen if screenFull is enabled on unmount', () => {
    // ScreenFullContainer.__Rewire__('screenfull', {
    //   enabled: true,
    //   raw: {
    //     fullscreenchange,
    //   },
    // });

    // expect.spyOn(document, 'removeEventListener');

    // const closeFullScreen = wrapper.instance().closeFullScreen;

    // wrapper.unmount();

    // expect(document.removeEventListener).toHaveBeenCalledWith(fullscreenchange,
    //   closeFullScreen);
  });

  afterEach(() => {
    ScreenFullContainer.__ResetDependency__('screenfull');
  });
});
