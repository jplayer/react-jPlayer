import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Mute from '../../../src/components/controls/mute';

describe('<Mute />', () => {
  const functions = {
    onClick: () => null,
  };
  const elementSelector = 'a';
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <Mute onClick={functions.onClick}>
      <i className="fa fa-mute" />
    </Mute>
  );
  const element = shallow(controlComponent).find(elementSelector);

  it('renders child', () => {
    expect(element.find('.fa-mute').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent, elementSelector);
});
