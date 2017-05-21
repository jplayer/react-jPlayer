import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Play from './play';

const setup = () => {
  const props = {
    play: createSpy(),
    paused: true,
    children: (<i className="@@jPlayer-test" />),
    id: 'jPlayer-1',
    'data-test': 'test',
  };

  const wrapper = shallow(<Play {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Play', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(props.play).toHaveBeenCalledWith(props.id, props.paused);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
