import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes, defaultStatus } from '../../util/constants';
import Poster from './poster';

const setup = (newProps) => {
  const props = {
    src: 'http://www.test.jpg',
    alt: 'test-poster',
    'data-test': 'test',
    ...newProps,
  };

  const wrapper = shallow(<Poster {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Poster />', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.hasClass(classes.POSTER)).toBeTruthy();
    expect(wrapper.prop('alt')).toBe(props.alt);
    expect(wrapper.prop('src')).toBe(props.src);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null if src is not set', () => {
    ({ wrapper, props } = setup({ src: defaultStatus.src }));

    expect(wrapper.type()).toBe(null);
  });
});
