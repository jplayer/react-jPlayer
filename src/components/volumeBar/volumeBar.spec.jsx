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
    children: (<div className="@@jPlayer-test" />),
    'data-test': 'test',
  };

  const wrapper = shallow(<VolumeBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<VolumeBar />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');
    wrapper.simulate('mousedown');

    expect(props.onClick).toHaveBeenCalled();
    expect(props.onMouseDown).toHaveBeenCalled();
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.VOLUME_BAR)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
