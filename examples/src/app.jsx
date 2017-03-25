import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { getInitialStates, reducer } from 'react-jplayer';

import '../assets/examples.less';
import AudioPlayer from './players/audioPlayer';
import VideoPlayer from './players/videoPlayer';
import MultiplePlayers from './players/multiplePlayers';
import NavContainer from './helpers/navContainer';
import NavContentContainer from './helpers/navContentContainer';
import NavBar from './helpers/navBar';
import NavLink from './helpers/navLink';
import NavContent from './helpers/navContent';
import StatusWrapper from './helpers/statusWrapper';

const connectedJPlayers = [
  AudioPlayer,
  VideoPlayer,
  ...MultiplePlayers,
];

const store = createStore(combineReducers(reducer), getInitialStates(connectedJPlayers));

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
      <NavLink>Multiple</NavLink>
    </NavBar>
    <NavContentContainer>
      <NavContent key={AudioPlayer.options.id}>
        <StatusWrapper id={AudioPlayer.options.id}>
          <AudioPlayer />
        </StatusWrapper>
      </NavContent>
      <NavContent key={VideoPlayer.options.id}>
        <StatusWrapper id={VideoPlayer.options.id}>
          <VideoPlayer />
        </StatusWrapper>
      </NavContent>
      <NavContent key="MultiPlayers">
        <div>
          {MultiplePlayers.map(JPlayer =>
            <StatusWrapper key={JPlayer.options.id} id={JPlayer.options.id}>
              <JPlayer />
            </StatusWrapper>,
          )}
        </div>
      </NavContent>
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
