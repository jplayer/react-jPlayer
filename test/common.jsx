import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

export const customAttributeTests = (component, elementSelector) => {
  const attributes = {
    'data-test': 'test',
    className: 'jp-full-screen-test',
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

export const controlTests = (component, elementSelector) => {
  const functions = {
    onClick: () => null,
  };
  const spy = expect.spyOn(functions, 'onClick');
  const Component = component;
  const controlComponent = (
    <Component onClick={functions.onClick}>
      <i className="fa fa-icon" />
    </Component>
  );
  const element = shallow(controlComponent).find(elementSelector);

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders childen', () => {
    expect(element.children()).toExist();
  });

  customAttributeTests(controlComponent, elementSelector);
};
