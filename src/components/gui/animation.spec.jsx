import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import GuiAnimation from './animation';

const setup = (newProps) => {
  const props = {
    onMouseMove: createSpy(),
    children: (<div className="@@jPlayer-test" />),
    fullScreen: false,
    guiFadeOut: false,
    'data-test': 'test',
    ...newProps,
  };

  const wrapper = shallow(<GuiAnimation {...props} />);
  const gui = wrapper.dive();

  return {
    props,
    wrapper,
    gui,
  };
};

describe('GuiAnimation', () => {
  let wrapper;
  let props;
  let gui;

  describe('GUI as child', () => {
    it('renders additional properties', () => {
      ({ gui, props } = setup());

      expect(gui.prop('data-test')).toBe(props['data-test']);
    });
  });

  describe('Motion', () => {
    it('default opacity for motion is 1', () => {
      ({ wrapper } = setup());

      expect(wrapper.prop('defaultStyle')).toEqual({
        opacity: 1,
      });
    });

    it('opacity for motion is 1 when fullScreen false', () => {
      ({ wrapper } = setup());

      expect(wrapper.prop('style')).toEqual({
        opacity: 1,
      });
    });

    it('opacity value is 1 when fullScreen true and guiFadeOut false', () => {
      ({ wrapper } = setup({ fullScreen: true }));

      expect(wrapper.prop('style').opacity.val).toBe(1);
    });

    it('opacity value is 0 when fullScreen true and guiFadeOut true', () => {
      ({ wrapper } = setup({ fullScreen: true, guiFadeOut: true }));

      expect(wrapper.prop('style').opacity.val).toBe(0);
    });
  });
});
