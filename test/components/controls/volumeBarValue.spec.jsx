import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { customAttributeTests } from '../../common';
import VolumeBarValue from '../../../src/components/controls/volumeBarValue';
import { classes } from '../../../src/util/constants';

describe('<VolumeBarValue />', () => {
  const component = <VolumeBarValue />;
  const styleTests = [
    { props: { muted: true }, expected: { width: '0%', height: null } },
    { props: { muted: true, volume: 0.3 }, expected: { width: '0%', height: null } },
    { props: { muted: true, volume: 0.765, verticalVolume: true },
      expected: { width: null, height: '0%' } },
    { props: { volume: 0.33 }, expected: { width: '33%', height: null } },
    { props: { volume: 0 }, expected: { width: '0%', height: null } },
    { props: { volume: 0.765, verticalVolume: true }, expected: { width: null, height: '76.5%' } },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  styleTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match styles`, () => {
      wrapper.setProps(test.props);
      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });

  it('has volumeBarValue class', () => {
    expect(wrapper.hasClass(classes.VOLUME_BAR_VALUE)).toBeTruthy();
  });

  customAttributeTests(component);
});
