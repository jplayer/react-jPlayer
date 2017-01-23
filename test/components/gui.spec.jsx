import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../src/util/constants';
import { customAttributeTests } from '../common';
import Gui from '../../src/components/gui';

describe('<Gui />', () => {
  const component = (
    <Gui>
      <div />
    </Gui>
  );
  const wrapper = shallow(component);

  it('renders children', () => expect(wrapper.find('.test')).toExist());
  customAttributeTests(component, `.${classes.GUI}`);
});
