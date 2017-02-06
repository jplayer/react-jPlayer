/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration, CurrentTime } from '../../../src/index';
import mp3 from '../../assets/Alan Walker - Fade.mp3';
import poster from '../../assets/Alan Walker - Fade.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const AudioPlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events}>
      {props.browserUnsupportedHtml}
    </Audio>
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <PlaybackRateBar />
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <div className="jp-volume-controls">
          <Mute><i className="fa">{/* Icon set in css*/}</i></Mute>
          <VolumeBar />
        </div>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
    </Gui>
  </JPlayer>
);

AudioPlayer.options = {
  muted: true,
  keyEnabled: false,
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
