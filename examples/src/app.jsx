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
import WrappedPlayer from '../../src/wrappedPlayer';

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
      <NavLink>Mixed</NavLink>
    </NavBar>
    <NavContentContainer>
      <NavContent>
        <StatusWrapper id={AudioPlayer.id}><AudioPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper id={VideoPlayer.id}><VideoPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper id={MixedPlayer.id}><MixedPlayer /></StatusWrapper>
      </NavContent>
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <WrappedPlayer jPlayers={[AudioPlayer, VideoPlayer, MixedPlayer]}>
    <App />
  </WrappedPlayer>
), document.getElementById('app'));
