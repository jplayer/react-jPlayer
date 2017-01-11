import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

export const customAttributeTests = (component, elementSelector) => {
  const attributes = {
    'data-test': 'test',
    className: 'jp-test',
  };

  const shallowComponent = shallow(React.cloneElement(component, { attributes }));
  const element = shallowComponent.find(elementSelector);

  it('custom conflicting attributes get overwritten', () => {
    expect(element.hasClass(attributes.className)).toBeFalsy();
  });

  it('custom non-conflicting attributes get rendered', () => {
    expect(element.prop('data-test')).toBe(attributes['data-test']);
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
