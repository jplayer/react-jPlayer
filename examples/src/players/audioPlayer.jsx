/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported } from '../../../src/index';
import poster from '../../assets/Miaow - Bubble.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const volumeControlOnClick = (e) => {
  const volumeBarContainer =
    e.currentTarget.nextElementSibling.querySelector('.jp-volume-bar-container');
  /* Stop propogation is for mobiles to stop
    triggering mute when showing volume bar */
  if (volumeBarContainer.clientHeight === 0) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
};

const AudioPlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events} />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute onTouchStart={volumeControlOnClick}><i className="fa">{/* Icon set in css*/}</i></Mute>
          <div className="jp-volume-controls" >
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

AudioPlayer.options = {
  muted: true,
  keyEnabled: false,
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    },
    poster,
    free: true,
  },
};

export default jPlayerConnect(AudioPlayer);

/*
onShuffleClick = (event) => {
    event.preventDefault();

    this.context.shuffle(!this.props.shuffled);
    this.context.blur(event.target);
}
onPreviousClick = (event) => {
    event.preventDefault();

    this.context.previous();
    this.context.blur(event.target);
}
onNextClick = (event) => {
    event.preventDefault();

    this.context.next();
    this.context.blur(event.target);
}
onVideoPlayClick = () => this.props.dispatch(play())
shuffle: (<a className={classes.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
previous: (<a className={classes.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
next: (<a className={classes.NEXT} onClick={props.onNextClick}>{props.children}</a>);
*/
