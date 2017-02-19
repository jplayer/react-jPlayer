/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/examples.less';
import AudioPlayer from './players/audioPlayer';
import VideoPlayer from './players/videoPlayer';
import MixedPlayer from './players/mixedPlayer';
import NavContainer from './helpers/navContainer';
import NavContentContainer from './helpers/navContentContainer';
import NavBar from './helpers/navBar';
import NavLink from './helpers/navLink';
import NavContent from './helpers/navContent';
import StatusWrapper from './helpers/statusWrapper';
import { JPlayerProvider } from '../../src/index';

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
      <NavLink>Mixed</NavLink>
      <NavLink>Text Player</NavLink>
    </NavBar>
    <NavContentContainer>
      <NavContent>
        <StatusWrapper uid={AudioPlayer.uid}><AudioPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper uid={VideoPlayer.uid}><VideoPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper uid={MixedPlayer.uid}><MixedPlayer /></StatusWrapper>
      </NavContent>
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <JPlayerProvider jPlayers={[AudioPlayer, VideoPlayer, MixedPlayer]}>
    <App />
  </JPlayerProvider>
), document.getElementById('app'));
