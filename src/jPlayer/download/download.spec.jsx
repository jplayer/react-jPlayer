import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Download from './download';

const setup = () => {
  const props = {
    href: 'http://www.test.mp3',
    free: true,
    children: (<i className="@@jPlayer-test" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Download {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Download />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.prop('download')).toBeTruthy();
    expect(wrapper.prop('href')).toBe(props.href);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.DOWNLOAD)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  it('renders null when audio is not free', () => {
    wrapper.setProps({ free: false });
    expect(wrapper.node).toBe(null);
  });
});
