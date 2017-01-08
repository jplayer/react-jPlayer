import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FullScreen from '../../../src/components/controls/fullScreen';

describe('shallow: <FullScreen />', () => {
  it('calls onClick handler on click', () => {
    const functions = {
      onClick: () => null,
    };
    const spy = expect.spyOn(functions, 'onClick');
    const fullScreen = shallow(<FullScreen onClick={functions.onClick} />);
    fullScreen.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
