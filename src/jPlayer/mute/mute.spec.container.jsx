// import React from 'react';
// import expect from 'expect';
// import { shallow } from 'enzyme';
// import configureMockStore from 'redux-mock-store';

// import MuteContainer from '../../../src/containers/controls/mute';
// import Mute from '../../../src/components/controls/mute';
// import { mute } from '../../../src/actions/jPlayerActions';

// describe('Mute Container', () => {
//   const children = <i />;
//   const attributes = {
//     className: 'test',
//   };
//   const store = configureMockStore()({
//     jPlayers: {
//       'audio-player-one': { muted: true },
//     },
//   });
//   let dispatchSpy;
//   let wrapper;

//   beforeEach(() => {
//     dispatchSpy = expect.spyOn(store, 'dispatch');
//     wrapper = shallow(
//       <MuteContainer className={attributes.className}>
//         {children}
//       </MuteContainer>,
//       { context: { uid: 'audio-player-one' } },
//       ).shallow({ context: { store } });
//   });

//   it('onClick toggles mute', () => {
//     const current = 'audio-player-one';

//     wrapper.simulate('click');
//     expect(dispatchSpy).toHaveBeenCalledWith(mute(
//       !store.getState().jPlayers[current].muted,
//       current,
//     ));
//   });
//   it('renders component', () => expect(wrapper.type()).toBe(Mute));
//   it('maps children', () => expect(wrapper.prop('children')).toBe(children));
//   it('maps attributes', () => expect(wrapper.prop('attributes')).toEqual(attributes));
// });
