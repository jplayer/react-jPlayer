import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Audio from '../../src/components/audio';

describe('<Audio />', () => {
  const component = (
    <Audio require>
      <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
    </Audio>
  );
  const wrapper = shallow(component);

  it('renders child', () => {
    expect(wrapper.find('track').length).toBeTruthy();
  });

  customAttributeTests(component, 'audio');
});
