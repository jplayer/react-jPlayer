/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/examples.less';
import AudioPlayer from './players/audioPlayer';
import VideoPlayer from './players/videoPlayer';
import NavContainer from './helpers/navContainer';
import NavContentContainer from './helpers/navContentContainer';
import NavBar from './helpers/navBar';
import NavLink from './helpers/navLink';
import NavContent from './helpers/navContent';
import StatusWrapper from './helpers/statusWrapper';
import { getInitialStates, reducer } from '../../src/index';

const jPlayers = {
  AudioPlayer,
  VideoPlayer,
};

const store = createStore(combineReducers({ jPlayers: reducer }), {
  jPlayers: getInitialStates(jPlayers),
});

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
    </NavBar>
    <NavContentContainer>
      {Object.keys(jPlayers).map((key) => {
        const JPlayer = jPlayers[key];

        return (
          <NavContent key={JPlayer.id}>
            <StatusWrapper id={JPlayer.id}><JPlayer /></StatusWrapper>
          </NavContent>
        );
      })}
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
