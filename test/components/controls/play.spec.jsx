import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Play from '../../../src/components/controls/play';

describe('<Play />', () => {
  const functions = {
    onClick: () => null,
  };
  const elementSelector = 'a';
  const spy = expect.spyOn(functions, 'onClick');
  const controlComponent = (
    <Play onClick={functions.onClick}>
      <i className="fa fa-play" />
    </Play>
  );
  const element = shallow(controlComponent).find(elementSelector);

  it('renders child', () => {
    expect(element.find('.fa-play').length).toBeTruthy();
  });

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  customAttributeTests(controlComponent, elementSelector);
});
