import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { getInitialStates, reducer } from 'react-jplayer';

import '../assets/examples.less';
import AudioPlayer from './players/audioPlayer';
import VideoPlayer from './players/videoPlayer';
import NavContainer from './helpers/navContainer';
import NavContentContainer from './helpers/navContentContainer';
import NavBar from './helpers/navBar';
import NavLink from './helpers/navLink';
import NavContent from './helpers/navContent';
import StatusWrapper from './helpers/statusWrapper';

const connectedJPlayers = [
  AudioPlayer,
  VideoPlayer,
];

const store = createStore(combineReducers(reducer), getInitialStates(connectedJPlayers));

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
    </NavBar>
    <NavContentContainer>
      {connectedJPlayers.map(ConnectedJPlayer =>
        <NavContent key={ConnectedJPlayer.options.id}>
          <StatusWrapper id={ConnectedJPlayer.options.id}>
            <ConnectedJPlayer />
          </StatusWrapper>
        </NavContent>,
      )}
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
