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
