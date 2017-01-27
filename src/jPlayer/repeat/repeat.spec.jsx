import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Repeat from './repeat';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="fa fa-repeat" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Repeat {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Repeat />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.REPEAT)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
