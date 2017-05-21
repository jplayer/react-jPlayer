import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import FullScreen from './fullScreen';

const setup = () => {
  const props = {
    setFullScreen: expect.createSpy(),
    children: 'test',
    fullScreen: false,
    id: 'jPlayer-1',
    'data-test': 'test',
  };

  const wrapper = shallow(<FullScreen {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('FullScreen', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(props.setFullScreen).toHaveBeenCalledWith(props.id, !props.fullScreen);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.FULL_SCREEN)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
