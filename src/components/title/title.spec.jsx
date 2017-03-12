import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Title from './title';

const setup = (newProps) => {
  const props = {
    'data-test': 'test',
    artist: 'Alan Walker',
    title: 'Fade',
    ...newProps,
  };

  const wrapper = shallow(<Title {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Title />', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    const children = <div>Alan Walker - Fade</div>;

    ({ wrapper, props } = setup({ children }));

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders artist and title if children are not specified', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('children')).toBe(`${props.artist} - ${props.title}`);
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
