// import expect from 'expect';

// import Audio from './audio';
// import Media from '../media/mediaContainer';
// import componentSetup from '../../util/specHelpers/componentSetup.spec';

// const setup = (props) => {
//   const values = componentSetup(Audio, {
//     ...props,
//   });

//   values.audio = values.wrapper.dive();

//   return values;
// };

// describe('Audio', () => {
//   describe('when audio is required', () => {
//     const require = true;

//     it('renders audio in Media', () => {
//       const { audio } = setup({ require });

//       expect(audio.find(Media).find('audio').exists()).toBe(true);
//     });

//     it('passes events to media', () => {
//       const events = {
//         onCanPlay: expect.createSpy(),
//       };
//       const { audio } = setup({ events, require });

//       expect(audio.find(Media).prop('events')).toBe(events);
//     });
//   });

//   it('renders nothing if audio is not required', () => {
//     const { audio } = setup();

//     expect(audio.type()).toBe(null);
//   });
// });
