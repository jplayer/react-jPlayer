import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FullScreen from '../../../src/components/controls/fullScreen';

describe('shallow: <FullScreen />', () => {
  let Component;
  let element;
  const functions = {
    onClick: () => null,
  };
  const attributes = {
    'data-test': 'test',
  };
  const spy = expect.spyOn(functions, 'onClick');

  beforeEach(() => {
    Component = shallow(
      <FullScreen onClick={functions.onClick} attributes={attributes}>
        <i className="fa fa-expand" />
      </FullScreen>,
    );
    element = Component.find('a');
  });

  it('calls onClick handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('custom attributes override existing', () => {
    expect(element.prop('data-test')).toBe(attributes['data-test']);
  });

  it('renders childen', () => {
    expect(element.children()).toExist();
  });
});
