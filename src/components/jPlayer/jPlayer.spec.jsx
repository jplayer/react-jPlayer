import React from 'react';
import expect from 'expect';

import JPlayer from './jPlayer';
import KeyControl from './keyControl/keyControlContainer';
import ScreenFull from './screenFull/screenFullContainer';
import ErrorLogger from './errorLogger/errorLoggerContainer';
import TimeDisplay from './timeDisplay/timeDisplayContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(JPlayer, {
  onMouseMoveCapture: expect.createSpy(),
  className: 'jp-test',
  id: 'TestPlayer',
  children: <div />,
  ...props,
});

describe('JPlayer', () => {
  it('has custom class', () => {
    const { wrapper, props } = setup();

    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  it('has id', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('id')).toBe(props.id);
  });

  describe('children', () => {
    it('passes keyBindings to KeyControl', () => {
      const keyBindings = {
        test: {
          key: 44,
          fn: expect.createSpy(),
        },
      };
      const { wrapper } = setup({ keyBindings });

      expect(wrapper.find(KeyControl).prop('keyBindings')).toBe(keyBindings);
    });

    it('renders TimeDisplay', () => {
      const { wrapper } = setup();

      expect(wrapper.find(TimeDisplay).exists()).toBe(true);
    });

    it('renders ScreenFull', () => {
      const { wrapper } = setup();

      expect(wrapper.find(ScreenFull).exists()).toBe(true);
    });

    it('renders ErrorLogger', () => {
      const { wrapper } = setup();

      expect(wrapper.find(ErrorLogger).exists()).toBe(true);
    });

    it('renders custom children', () => {
      const { wrapper, props } = setup();

      expect(wrapper.contains(props.children)).toBe(true);
    });
  });
});
