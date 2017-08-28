// /* eslint-disable jsx-a11y/media-has-caption */

// import React from 'react';
// import expect from 'expect';
// import proxyquire from 'proxyquire';
// import containerSetup from '../../util/specHelpers/containerSetup.spec';

// proxyquire.noCallThru();

// const id = 'TestPlayer';
// const mockEvents = ({ children }) => <div>{children}</div>;
// const MediaContainer = proxyquire('./mediaContainer', {
//   './events/eventsContainer': mockEvents,
// }).default;
// const mockCurrentMedia = {
//   seekable: {
//     end: expect.createSpy(),
//   },
//   pause: expect.createSpy(),
//   play: expect.createSpy(),
// };
// const MockChildren = ({ setMedia }) => {
//   const mockRef = () => {
//     setMedia(mockCurrentMedia);
//   };

//   return <audio ref={mockRef} />;
// };

// const setup = (jPlayers, props) => containerSetup(MediaContainer, jPlayers, {
//   children: <MockChildren />,
//   ...props,
// });

// describe('MediaContainer', () => {
//   let jPlayers;

//   beforeEach(() => {
//     jPlayers = {
//       [id]: {
//         src: 'www.test.com',
//         playHeadPercent: 0,
//         paused: false,
//         loop: false,
//         autoplay: false,
//         defaultPlaybackRate: 0,
//         muted: false,
//         plabackRate: 0,
//         preload: 'auto',
//         volume: 0,
//         media: {
//           tracks: [
//             { src: 'www.test.vrt' },
//           ],
//         },
//       },
//     };
//   });

//   describe('onLoad', () => {
//     it('sets src if src not null', () => {
//       const { wrapper } = setup(jPlayers);

//       expect(mockCurrentMedia.src).toBe(jPlayers[id].src);
//     });
//   });
// });
