import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

export const customAttributeTests = (component, element) => {
  const attributes = {
    'data-test': 'test',
    className: 'jp-full-screen-test',
  };
  React.cloneElement(component, attributes);

  it('custom conflicting attributes get overwritten', () => {
    expect(element.hasClass(attributes.className)).toBeFalsy();
  });

  it('custom non-conflicting attributes get rendered', () => {
    expect(element.prop('data-test')).toBe(attributes['data-test']);
  });
};

export const controlTests = (component, elementSelector) => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  let element;

  beforeEach(() => {
    const Component = React.createElement(component, {
      onClick: functions.onClick,
    }, <i className="fa fa-expand" />);

    shallow(Component);
    element = Component.find(elementSelector);
  });

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders childen', () => {
    expect(element.children()).toExist();
  });

  customAttributeTests(component, element);
};
