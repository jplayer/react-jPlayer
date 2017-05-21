import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';

import { getJPlayers } from '../util/common.spec';
import { __get__ } from './bar';

const mapStateToProps = __get__('mapStateToProps');
const Bar = __get__('Bar');
const id = 'jPlayer-1';
const getProps = props => ({
  clickMoveBar: createSpy(),
  touchMoveBar: createSpy(),
  barDrag: true,
  children: <MockChildren className="test" />,
  ...props,
});

const MockChildren = ({ setBar }) => <div ref={setBar} />;

MockChildren.defaultProps = {
  setBar: null,
};

MockChildren.propTypes = {
  setBar: PropTypes.func,
};

describe('Bar', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id });

    expect(expected).toEqual({
      barDrag: true,
    });
  });

  const draggingData = [
    { eventName: 'mouseup' },
    { eventName: 'touchend' },
  ];

  draggingData.forEach((draggingDatum) => {
    it(`${draggingDatum.eventName} sets dragging to false`, () => {
      const props = getProps();
      const event = new window.UIEvent(draggingDatum.eventName);
      const wrapper = shallow(<Bar {...props} />);
      const instance = wrapper.instance();

      instance.dragging = true;

      document.dispatchEvent(event);

      expect(instance.dragging).toBe(false);
    });
  });

  const moveBarData = [
    { eventName: 'mousemove', moveBarKey: 'clickMoveBar' },
    { eventName: 'touchmove', moveBarKey: 'touchMoveBar' },
  ];

  moveBarData.forEach((moveBarDatum) => {
    it(`${moveBarDatum.eventName} calls moveBar if dragging and 
      barDrag`, () => {
      const props = getProps();
      const event = new window.UIEvent(moveBarDatum.eventName);
      const wrapper = mount(<Bar {...props} />);
      const instance = wrapper.instance();

      instance.dragging = true;
      document.dispatchEvent(event);

      expect(props[moveBarDatum.moveBarKey]).toHaveBeenCalledWith(instance.bar, event);
    });
  });

  moveBarData.forEach((moveBarDatum) => {
    it(`${moveBarDatum.eventName} doesn't call moveBar if not dragging 
      and not barDrag`, () => {
      const props = getProps({ barDrag: false });
      const event = new window.UIEvent(moveBarDatum.eventName);
      mount(<Bar {...props} />);

      document.dispatchEvent(event);

      expect(props[moveBarDatum.moveBarKey]).toNotHaveBeenCalled();
    });
  });

  const draggingUnmountData = [
    { eventName: 'mouseup' },
    { eventName: 'touchend' },
  ];

  draggingUnmountData.forEach((draggingUnmountDatum) => {
    it(`doesn't set dragging if unmounted for ${draggingUnmountDatum.eventName}
      event`, () => {
      const props = getProps();
      const event = new window.UIEvent(draggingUnmountDatum.eventName);
      const wrapper = shallow(<Bar {...props} />);
      const instance = wrapper.instance();
      instance.dragging = true;

      wrapper.unmount();

      document.dispatchEvent(event);

      expect(instance.dragging).toBe(true);
    });
  });

  const moveBarUnmountData = [
    { eventName: 'mousemove', moveBarKey: 'clickMoveBar' },
    { eventName: 'touchmove', moveBarKey: 'touchMoveBar' },
  ];

  moveBarUnmountData.forEach((moveBarUnmountDatum) => {
    it(`doesn't call moveBar if unmounted for ${moveBarUnmountDatum.eventName}
        event`, () => {
      const props = getProps({ barDrag: true });
      const event = new window.UIEvent(moveBarUnmountDatum.eventName);
      const wrapper = shallow(<Bar {...props} />);
      const instance = wrapper.instance();
      instance.dragging = true;

      wrapper.unmount();

      document.dispatchEvent(event);

      expect(props[moveBarUnmountDatum.moveBarKey]).toNotHaveBeenCalled();
    });
  });

  it('onClick moves bar', () => {
    const props = getProps();
    const wrapper = shallow(<Bar {...props} />);

    wrapper.simulate('click');

    expect(props.clickMoveBar).toHaveBeenCalled();
  });

  const renderDraggingData = [
    { eventName: 'mouseDown' },
    { eventName: 'touchStart' },
  ];

  renderDraggingData.forEach((renderDraggingDatum) => {
    it(`${renderDraggingDatum.eventName} sets dragging to true`, () => {
      const props = getProps();
      const wrapper = shallow(<Bar {...props} />);
      const instance = wrapper.instance();

      wrapper.simulate(renderDraggingDatum.eventName);

      expect(instance.dragging).toBe(true);
    });
  });

  it('sets ref', () => {
    const props = getProps();
    const wrapper = mount(<Bar {...props} />);
    const instance = wrapper.instance();

    expect(instance.bar).toNotBe(undefined);
  });
});
