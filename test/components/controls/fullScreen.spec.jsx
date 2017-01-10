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
    className: 'jp-full-screen-test',
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

  it('calls handler on click', () => {
    element.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('custom conflicting attributes get overwritten', () => {
    expect(element.hasClass(attributes.className)).toBeFalsy();
  });

  it('custom non-conflicting attributes get rendered', () => {
    expect(element.prop('data-test')).toBe(attributes['data-test']);
  });

  it('renders childen', () => {
    expect(element.children()).toExist();
  });
});
