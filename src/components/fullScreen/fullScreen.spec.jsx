import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import FullScreen from './fullScreen';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="@@jPlayer-test" />),
    fullScreen: false,
    id: 'jPlayer-1',
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<FullScreen {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<FullScreen />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.id, props.fullScreen);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.FULL_SCREEN)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });
});
