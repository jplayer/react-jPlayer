import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Play from './play';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="fa fa-play" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Play {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Play />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
