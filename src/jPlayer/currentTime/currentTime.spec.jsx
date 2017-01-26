import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import CurrentTime from './currentTime';

const setup = () => {
  const props = {
    children: '0:00',
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<CurrentTime {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<CurrentTime />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.CURRENT_TIME)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
