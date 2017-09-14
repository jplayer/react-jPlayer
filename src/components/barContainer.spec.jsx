import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockBar = props => (
  <button
    onClick={props.onClick}
    onTouchStart={props.onTouchStart}
    onMouseDown={props.onMouseDown}
  />
);
const BarContainer = proxyquire('./barContainer', {
  './bar': mockBar,
}).default;
const setup = (jPlayers, props) => containerSetup(BarContainer, jPlayers, {
  clickMoveBar: expect.createSpy(),
  touchMoveBar: expect.createSpy(),
  ...props,
});

describe('BarContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        barDrag: false,
      },
    };
  });

  describe('onClick', () => {
    it('calls clickMoveBar', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('click');

      expect(props.clickMoveBar).toHaveBeenCalled();
    });
  });

  describe('onTouchMove', () => {
    const event = new window.Event('touchmove');

    it('calls touchMoveBar when barDrag and dragging are true', () => {
      jPlayers[id].barDrag = true;

      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('touchstart');
      document.dispatchEvent(event);

      expect(props.touchMoveBar).toHaveBeenCalled();
    });

    it('doesnt call touchMoveBar when barDrag is false', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('touchstart');
      document.dispatchEvent(event);

      expect(props.touchMoveBar).toNotHaveBeenCalled();
    });

    it('doesnt call touchMoveBar when dragging is false', () => {
      jPlayers[id].barDrag = true;

      const { props } = setup(jPlayers);

      document.dispatchEvent(event);

      expect(props.touchMoveBar).toNotHaveBeenCalled();
    });
  });

  describe('onMouseMove', () => {
    const event = new window.Event('mousemove');

    it('calls clickMoveBar when barDrag and dragging are true', () => {
      jPlayers[id].barDrag = true;

      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('mousedown');
      document.dispatchEvent(event);

      expect(props.clickMoveBar).toHaveBeenCalled();
    });

    it('doesnt call clickMoveBar when barDrag is false', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('mousedown');
      document.dispatchEvent(event);

      expect(props.clickMoveBar).toNotHaveBeenCalled();
    });

    it('doesnt call clickMoveBar when dragging is false', () => {
      jPlayers[id].barDrag = true;

      const { props } = setup(jPlayers);

      document.dispatchEvent(event);

      expect(props.clickMoveBar).toNotHaveBeenCalled();
    });
  });
});
