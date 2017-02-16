/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, Poster, Audio, Title,
  FullScreen, Mute, Play, Repeat,
  VolumeBar, Duration, CurrentTime } from '../../../src/index';
import poster from '../../assets/Miaow - Bubble.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const TextPlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events} />
    <Gui>
      <div className="jp-title-container">
        <Poster />
        <Title />
      </div>
      <div className="jp-controls jp-text-controls">
        <Play><span>{/* Set in css */}</span></Play>
        <FullScreen><span>{/* Set in css*/}</span></FullScreen>
        <Repeat><span>{ /* Set in css */}</span></Repeat>
        <div className="jp-volume-controls">
          <Mute><span>{ /* Set in css */}</span></Mute>
          <VolumeBar>{'<-------->'}</VolumeBar>
        </div>
        <div className="jp-progress">
          <CurrentTime />
          <Duration />
        </div>
      </div>
    </Gui>
  </JPlayer>
);

TextPlayer.options = {
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
    },
    poster,
  },
};

export default jPlayerConnect(TextPlayer);
