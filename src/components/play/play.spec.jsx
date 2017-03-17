import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Play from './play';

const setup = () => {
  const props = {
    onClick: createSpy(),
    paused: true,
    children: (<i className="@@jPlayer-test" />),
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<Play {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Play />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.paused);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });
});
