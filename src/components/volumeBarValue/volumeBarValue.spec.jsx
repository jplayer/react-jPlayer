import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import VolumeBarValue from './volumeBarValue';

const styleTests = [
  { props: { muted: true }, expected: { width: '0%', height: null } },
  { props: { muted: true, volume: 0.3 }, expected: { width: '0%', height: null } },
  { props: { muted: true, verticalVolume: true },
    expected: { width: null, height: '0%' } },
  { props: { volume: 0.33 }, expected: { width: '33%', height: null } },
  { props: { volume: 0 }, expected: { width: '0%', height: null } },
  { props: { verticalVolume: true }, expected: { width: null, height: '80%' } },
];

const setup = () => {
  const props = {
    muted: false,
    volume: 0.8,
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<VolumeBarValue {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<VolumeBarValue />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.hasClass(classes.VOLUME_BAR_VALUE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });

  styleTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match styles`, () => {
      wrapper.setProps(test.props);

      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });
});
