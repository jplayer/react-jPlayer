import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';

import jPlayers from '../../../reducer/reducer';
import { setOption } from '../../../actions/actions';
import ErrorLoggerContainer from './errorLoggerContainer';

const id = 'TestPlayer';
const setup = (stateProperties, newProps) => {
  const props = {
    ...newProps,
  };

  const state = {
    jPlayers: {
      [id]: {
        ...stateProperties,
      },
    },
  };

  const store = createStore(combineReducers({ jPlayers }), state);

  const wrapper = mount(
    <Provider store={store}>
      <ErrorLoggerContainer {...props} />
    </Provider>, {
      context: {
        id,
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

describe('ErrorLoggerContainer', () => {
  let store;
  let mockConsoleError;

  beforeEach(() => {
    mockConsoleError = expect.spyOn(console, 'error');
  });

  it('logs error to console', () => {
    ({ store } = setup());

    const error = {
      context: 'testContext',
      message: 'testMessage',
      hint: 'testHint',
    };

    store.dispatch(setOption(id, 'error', error));

    expect(mockConsoleError).toHaveBeenCalledWith(error);
  });

  afterEach(() => {
    mockConsoleError.restore();
  });
});
