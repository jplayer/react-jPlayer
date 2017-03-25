import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Seekbar from './seekBar';

const setup = () => {
  const props = {
    onMouseDown: createSpy(),
    onClick: createSpy(),
    setSeekBar: Function.prototype,
    seekPercent: 33,
    children: (<div className="@@jPlayer-test" />),
    'data-test': 'test',
  };

  const wrapper = shallow(<Seekbar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<SeekBar />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('mousedown');
    wrapper.simulate('click');

    expect(props.onMouseDown).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalled();
    expect(wrapper.prop('style').width).toBe(`${props.seekPercent}%`);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.SEEK_BAR)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
