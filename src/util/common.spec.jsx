import React from 'react';
import merge from 'lodash.merge';
import expect, { createSpy, isSpy } from 'expect';
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

export const setJPlayers = (...options) => {
  const jPlayers = {};

  const setJPlayer = (jPlayerNumber = 1, option) => {
    jPlayers[`jPlayer-${jPlayerNumber}`] = merge({}, statusDefaultValues, defaultOptions, option);
  };

  options.forEach((option, i) => {
    setJPlayer(i + 1, option);
  });

  if (options.length === 0) {
    setJPlayer();
  }

  return {
    jPlayers,
  };
};

export const mockCanvasContext = {
  fillRect: createSpy(),
  clearRect: createSpy(),
  getImageData: createSpy().andReturn([]),
  putImageData: createSpy(),
  createImageData: createSpy().andReturn([]),
  setTransform: createSpy(),
  drawImage: createSpy(),
  save: createSpy(),
  fillText: createSpy(),
  restore: createSpy(),
  beginPath: createSpy(),
  moveTo: createSpy(),
  lineTo: createSpy(),
  closePath: createSpy(),
  stroke: createSpy(),
  translate: createSpy(),
  scale: createSpy(),
  rotate: createSpy(),
  arc: createSpy(),
  fill: createSpy(),
  resetSpies: () => Object.values(mockCanvasContext).forEach((spy) => {
    if (isSpy(spy)) {
      spy.reset();
    }
  }),
};

export const setJPlayerState = (...states) => {
  const jPlayers = {};

  states.forEach((state, i) => {
    const current = i + 1;
    jPlayers[`jPlayer-${current}`] = state;
  });

  return {
    jPlayers,
  };
};

export const getJPlayerState = (numberOfJPlayers, mergeDefault) => {
  const jPlayers = {};

  for (let i = 1; i < numberOfJPlayers + 1; i += 1) {
    jPlayers[`jPlayer-${i}`] = mergeDefault ? merge({}, statusDefaultValues, defaultOptions) : {};
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
    uid: 'jPlayer-1',
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

