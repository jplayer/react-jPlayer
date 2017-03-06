import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Play from './play';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="@@jPlayer-test" />),
    'data-test': 'test',
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

    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
