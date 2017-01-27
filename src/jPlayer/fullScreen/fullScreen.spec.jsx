import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import FullScreen from './fullScreen';

const setup = () => {
  const props = {
    onClick: createSpy(),
    children: (<i className="fa fa-fullScreen" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<FullScreen {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<FullScreen />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.FULL_SCREEN)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
