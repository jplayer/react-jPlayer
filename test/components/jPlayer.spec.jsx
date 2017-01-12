import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { customAttributeTests } from '../common';
import JPlayer from '../../src/components/jPlayer';
import { jPlayerDefaultOptions, defaultValues } from '../../src/containers/jPlayer';
import Gui from '../../src/components/gui';

describe('<JPlayer />', () => {
  const component = (
    <JPlayer
      {...jPlayerDefaultOptions} {...defaultValues} updateOption={() => null}
      setMedia={() => null}
    >
      <Gui />
    </JPlayer>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('renders children', () => expect(wrapper.prop('children').type).toBe(Gui));
  it('renders keyControls if keyEnabled', () => {
    wrapper.setProps({ keyEnabled: true });
    var p = wrapper;
  });

  customAttributeTests(component);
});
