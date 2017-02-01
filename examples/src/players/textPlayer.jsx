/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, SeekBar, Poster, Audio, Title,
  FullScreen, Mute, Play, Repeat, PlaybackRateBar,
  VolumeBar, Download, Duration, CurrentTime } from '../../../src/index';
import mp3 from '../../assets/Alan Walker - Fade.mp3';
import poster from '../../assets/Alan Walker - Fade.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const TextPlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events}>
      {props.browserUnsupportedHtml}
    </Audio>
    <Gui>
      <div className="jp-title-container">
        <Poster />
        <Title />
      </div>
      <div className="jp-controls jp-text-controls">
        <Play><span>{/* Set in css */}</span></Play>
        <FullScreen><span>{/* Set in css*/}</span></FullScreen>
        <Repeat><span>{ /* Set in css */}</span></Repeat>
        <PlaybackRateBar>{'<---->'}</PlaybackRateBar>
        <div className="jp-volume-controls">
          <Mute><span>{ /* Set in css */}</span></Mute>
          <VolumeBar>{'<-------->'}</VolumeBar>
        </div>
        <Download>Download</Download>
        <div className="jp-progress">
          <SeekBar>
            {'<----------------------------------------->'}
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
      </div>
    </Gui>
  </JPlayer>
);

TextPlayer.options = {
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Fade',
    artist: 'Alan Walker',
    sources: {
      mp3,
    },
    poster,
    free: true,
  },
};

export default jPlayerConnect(TextPlayer);
