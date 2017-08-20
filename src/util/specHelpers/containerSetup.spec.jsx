import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';

import reducer from '../../reducer/reducer';

export default (Container, jPlayers, props) => {
  const state = {
    jPlayers,
  };

  const store = createStore(combineReducers({ jPlayers: reducer }), state);

  const wrapper = mount(
    <Provider store={store}>
      <Container {...props} />
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
    store,
  };
};
