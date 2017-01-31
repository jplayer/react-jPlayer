import expect from 'expect';

import { mountedSetup } from '../../util/common.spec';
import BufferBarContainer from './bufferBar.container';
import BufferBar from './bufferBar';

const setup = () => mountedSetup(BufferBarContainer);

describe('<BufferBarContainer />', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();
    const bufferBar = wrapper.find(BufferBar);

    expect(bufferBar.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.type()).toBe(BufferBarContainer);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
