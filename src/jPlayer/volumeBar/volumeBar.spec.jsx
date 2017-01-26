import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import VolumeBar from './volumeBar';

const setup = () => {
  const props = {
    onClick: createSpy(),
    onMouseDown: createSpy(),
    setVolumeBar: Function.prototype,
    children: (<div />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<VolumeBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<VolumeBar />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');
    wrapper.simulate('mousedown');

    expect(props.onClick).toHaveBeenCalled();
    expect(props.onMouseDown).toHaveBeenCalled();
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.VOLUME_BAR)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
