import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Gui from '../../src/components/gui';

describe('<Gui />', () => {
  const component = <Gui><div className={'test'} /></Gui>;
  const wrapper = shallow(component);

  it('renders children', () => expect(wrapper.find('.test')).toExist();
  customAttributeTests(component);
});
