import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Duration from './duration';

const setup = () => {
  const props = {
    children: '50',
    attributes: {
      'data-attribute-test': 'test',
    },
  };

  const wrapper = shallow(<Duration {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Duration />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.DURATION)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props.attributes['data-attribute-test']);
  });
});
