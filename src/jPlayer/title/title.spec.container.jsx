import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import TitleContainer from './title.container';
import Title from './title';

const setup = state => shallowSetup(TitleContainer, {
  children: 'fade',
}, state);

describe('TitleContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Title);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
