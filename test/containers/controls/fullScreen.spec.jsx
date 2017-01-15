// import React from 'react';
// import expect from 'expect';
// import { shallow } from 'enzyme';
// import configureMockStore from 'redux-mock-store';

// import FullScreenContainer from '../../../src/containers/controls/fullScreen';
// import FullScreen from '../../../src/components/controls/fullScreen';
// import { fullScreen } from '../../../src/actions/jPlayerActions';

// describe('FullScreen Container', () => {
//   const children = <i />;
//   const attributes = {
//     className: 'test',
//   };
//   const store = configureMockStore()({
//     jPlayers: {
//       'audio-player-one': { fullScreen: true },
//     },
//   });
//   let dispatchSpy;
//   let wrapper;

//   beforeEach(() => {
//     dispatchSpy = expect.spyOn(store, 'dispatch');
//     wrapper = shallow(
//       <FullScreenContainer className={attributes.className}>
//         {children}
//       </FullScreenContainer>,
//       { context: { id: 'audio-player-one' } },
//       ).shallow({ context: { store } });
//   });

//   it('onClick toggles fullScreen', () => {
//     const current = 'audio-player-one';

//     wrapper.simulate('click');
//     expect(dispatchSpy).toHaveBeenCalledWith(fullScreen(
//       !store.getState().jPlayers[current].fullScreen,
//       current,
//     ));
//   });
//   it('renders component', () => expect(wrapper.type()).toBe(FullScreen));
//   it('maps children', () => expect(wrapper.prop('children')).toBe(children));
//   it('maps attributes', () => expect(wrapper.prop('attributes')).toEqual(attributes));
// });
