/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/examples.less';
import AudioPlayer, { audioOptions } from './players/audioPlayer';
import VideoPlayer, { videoOptions } from './players/videoPlayer';
import MixedPlayer, { mixedOptions } from './players/mixedPlayer';
import jPlayerReducers from '../../src/reducers';
import jPlayerInitialState from '../../src/initialState';
import NavContainer from './helpers/navContainer';
import NavContentContainer from './helpers/navContentContainer';
import NavBar from './helpers/navBar';
import NavLink from './helpers/navLink';
import NavContent from './helpers/navContent';
import StatusWrapper from './helpers/statusWrapper';

const initialState = jPlayerInitialState(audioOptions, videoOptions, mixedOptions);

const App = () => (
  <NavContainer>
    <NavBar>
      <NavLink>Audio</NavLink>
      <NavLink>Video</NavLink>
      <NavLink>Mixed</NavLink>
    </NavBar>
    <NavContentContainer>
      <NavContent>
        <StatusWrapper id={audioOptions.id}><AudioPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper id={videoOptions.id}><VideoPlayer /></StatusWrapper>
      </NavContent>
      <NavContent>
        <StatusWrapper id={mixedOptions.id}><MixedPlayer /></StatusWrapper>
      </NavContent>
    </NavContentContainer>
  </NavContainer>
);

ReactDOM.render((
  <Provider store={createStore(jPlayerReducers, initialState)}>
    <App />
  </Provider>
), document.getElementById('app'));
