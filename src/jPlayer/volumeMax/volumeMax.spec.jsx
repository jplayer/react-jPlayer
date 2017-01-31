import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import VolumeMax from './volumeMax';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="@@jPlayer-test" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<VolumeMax {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<VolumeMax />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.VOLUME_MAX)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
