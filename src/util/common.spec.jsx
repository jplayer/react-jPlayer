import React from 'react';
import merge from 'lodash.merge';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { defaultOptions, statusDefaultValues } from './constants';

export const barDraggingTests = (wrapper, { barValueFn }) => {
  let instance;
  let barValue;

  beforeEach(() => {
    instance = wrapper.instance();
    wrapper.setProps({
      [barValueFn]: newBarValue => (barValue = newBarValue),
      barDrag: true,
    });
  });

  it('moves bar on click', () => {
    wrapper.simulate('click');
    expect(barValue).toEqual(NaN);
  });

  it('moves bar on mouse move', () => {
    instance.componentWillMount();
    instance.dragging = true;
    document.dispatchEvent(new Event('mousemove'));
    expect(barValue).toEqual(NaN);
  });

  it('starts dragging on mouse down', () => {
    instance.dragging = false;
    wrapper.simulate('mousedown');
    expect(instance.dragging).toBeTruthy();
  });

  it('stops dragging on mouse up', () => {
    instance.dragging = true;
    instance.componentWillMount();
    document.dispatchEvent(new Event('mouseup'));
    expect(instance.dragging).toBeFalsy();
  });
};

export const setJPlayerState = (...states) => {
  const jPlayers = {};

  states.forEach((state, i) => {
    const current = i + 1;
    jPlayers[`player-${current}`] = state;
  });

  return {
    jPlayers,
  };
};

export const getJPlayerState = (numberOfJPlayers, mergeDefault) => {
  const jPlayers = {};

  for (let i = 1; i < numberOfJPlayers + 1; i += 1) {
    jPlayers[`player-${i}`] = mergeDefault ? merge({}, statusDefaultValues, defaultOptions) : {};
  }

  return {
    jPlayers,
  };
};

const setup = (component, props, state) => {
  const newState = {
    store: configureMockStore()(setJPlayerState({
      ...merge({}, statusDefaultValues, defaultOptions, state),
    })),
    uid: 'player-1',
  };

  const newProps = {
    'data-attribute-test': 'test',
    ...props,
  };

  expect.spyOn(newState.store, 'dispatch');

  const wrapper = component(newProps, newState);

  return {
    wrapper,
    props: newProps,
    state: newState,
    jPlayer: newState.store.getState().jPlayers[newState.uid],
  };
};

export const shallowSetup = (component, props, state) => {
  const shallowComponent = (newProps, newState) => {
    const Component = component;

    return shallow(
      <Component {...newProps} />, { context: { uid: newState.uid } },
    ).dive({ context: { store: newState.store } });
  };

  return setup(shallowComponent, props, state);
};

export const mountedSetup = (component, props, state) => {
  const mountedComponent = (newProps, newState) => {
    const Component = component;

    return mount(
      <Provider store={newState.store}>
        <Component {...newProps} />
      </Provider>, {
        context: { uid: newState.uid }, childContextTypes: { uid: React.PropTypes.string },
      },
    );
  };

  return setup(mountedComponent, props, state);
};

