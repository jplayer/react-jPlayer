import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Download from './download';

const setup = () => {
  const props = {
    url: 'http://www.test.mp3',
    free: true,
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Download {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Download', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('download')).toBeTruthy();
    expect(wrapper.prop('url')).toBe(props.href);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.DOWNLOAD)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null when audio is not free', () => {
    ({ wrapper, props } = setup());

    wrapper.setProps({ free: false });
    expect(wrapper.node).toBe(null);
  });
});
