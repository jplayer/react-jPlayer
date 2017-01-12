import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Gui from '../../src/components/gui';
import Media from '../../src/components/media';

describe('<Gui />', () => {
  const component = <Gui><Media /></Gui>;
  const wrapper = shallow(component);

  it('renders children', () => expect(wrapper.prop('children').type).toBe(Media));
  customAttributeTests(component);
});
