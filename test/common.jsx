import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

export const customAttributeTests = (component) => {
  let attributes;
  const wrapper = shallow(React.cloneElement(component));

  beforeEach(() => {
    attributes = {};
  });

  it('custom conflicting attributes get overwritten', () => {
    Object.keys(wrapper.props()).forEach((key) => {
      const val = '@@jPlayerReact-test';
      attributes[key] = val;
      wrapper.setProps({ attributes });
      expect(wrapper.prop(key)).toNotBe(val);
    });
  });

  it('custom non-conflicting attributes get rendered', () => {
    attributes['data-@@jPlayerReact-test'] = 'test';
    wrapper.setProps({ attributes });
    expect(wrapper.prop('data-@@jPlayerReact-test')).toBe(attributes['data-@@jPlayerReact-test']);
  });
};

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
