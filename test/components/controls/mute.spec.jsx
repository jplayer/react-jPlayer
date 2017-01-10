import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Mute from '../../../src/components/controls/mute';

describe('shallow: <Mute />', () => {
  let Component;
  let element;
  const functions = {
    onClick: () => null,
  };
  const attributes = {
    'data-test': 'test',
    className: 'jp-full-screen-mute',
  };
  const spy = expect.spyOn(functions, 'onClick');

  beforeEach(() => {
    Component = shallow(
      <Mute onClick={functions.onClick} attributes={attributes}>
        <i className="fa fa-mute" />
      </Mute>,
    );
    element = Component.find('a');
  });

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  
});
