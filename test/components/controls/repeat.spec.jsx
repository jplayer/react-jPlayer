import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Repeat from '../../../src/components/controls/repeat';

describe('<Repeat />', () => {
  const functions = {
    onClick: () => null,
  };
  const elementSelector = 'a';
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <Repeat onClick={functions.onClick}>
      <i className="fa fa-repeat" />
    </Repeat>
  );
  const element = shallow(controlComponent).find(elementSelector);

  it('renders child', () => {
    expect(element.find('.fa-repeat').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent, elementSelector);
});
