import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Poster from './poster';

const setup = () => {
  const props = {
    src: 'http://www.test.jpg',
    alt: 'test-poster',
    'data-attribute-test': 'test',
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

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.hasClass(classes.POSTER)).toBeTruthy();
    expect(wrapper.prop('alt')).toBe(props.alt);
    expect(wrapper.prop('src')).toBe(props.src);
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
