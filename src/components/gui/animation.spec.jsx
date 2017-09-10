import React from 'react';
import expect from 'expect';

import GuiAnimation from './animation';
import Gui from './gui';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(GuiAnimation, {
  guiFadeOut: false,
  fullScreen: false,
  children: <div />,
  onMouseMove: expect.createSpy(),
  ...props,
});

describe('GuiAnimation', () => {
  it('renders GUI as a child', () => {
    const { wrapper } = setup();
    const gui = wrapper.dive();

    expect(gui.type()).toBe(Gui);
  });

  it('calls onMouseMove', () => {
    const { wrapper, props } = setup();
    const gui = wrapper.dive();

    gui.simulate('mousemove');

    expect(props.onMouseMove).toHaveBeenCalled();
  });

  describe('Motion', () => {
    it('default opacity for motion is 1', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('defaultStyle')).toEqual({
        opacity: 1,
      });
    });

    it('opacity for motion is 1 when fullScreen false', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('style')).toEqual({
        opacity: 1,
      });
    });

    it('opacity value is 1 when fullScreen true and guiFadeOut false', () => {
      const { wrapper } = setup({ fullScreen: true });

      expect(wrapper.prop('style').opacity.val).toBe(1);
    });

    it('opacity value is 0 when fullScreen true and guiFadeOut true', () => {
      const { wrapper } = setup({ fullScreen: true, guiFadeOut: true });

      expect(wrapper.prop('style').opacity.val).toBe(0);
    });
  });
});
