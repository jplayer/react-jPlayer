import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Gui from './gui';

const setup = () => {
  const props = {
    onMouseEnter: createSpy(),
    children: (<div className="@@jPlayer-test" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Gui {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Gui />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    const gui = wrapper.dive();

    gui.simulate('mouseenter');

    expect(props.onMouseEnter).toHaveBeenCalled();
    expect(gui.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(gui.hasClass(classes.GUI)).toBeTruthy();
    expect(gui.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
