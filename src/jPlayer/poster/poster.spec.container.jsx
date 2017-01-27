import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import PosterContainer from './poster.container';
import Poster from './poster';

const setup = state => shallowSetup(PosterContainer, {
  alt: 'image',
}, state);

describe('PosterContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Poster);
    expect(wrapper.prop('src')).toEqual(jPlayer.media.poster);
    expect(wrapper.prop('paused')).toEqual(jPlayer.paused);
    expect(wrapper.prop('currentTime')).toEqual(jPlayer.currentTime);
    expect(wrapper.prop('video')).toEqual(jPlayer.mediaSettings.video);
    expect(wrapper.prop('alt')).toEqual(props.alt);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
