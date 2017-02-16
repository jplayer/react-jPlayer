/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, SeekBar, BufferBar,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration, CurrentTime } from '../../../src/index';
import videoPoster from '../../assets/Big Buck Bunny Trailer.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const VideoPlayer = props => (
  <JPlayer className="jp-sleek">
    <div className="jp-media">
      <Poster />
      <Video events={props.events} />
    </div>
    <Gui>
      <div className="jp-title-container">
        <Title />
      </div>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <PlaybackRateBar />
        <div className="jp-volume-controls">
          <Mute><i className="fa">{/* Icon set in css*/}</i></Mute>
          <VolumeBar />
        </div>
        <div className="jp-progress">
          <SeekBar>
            <PlayBar />
            <BufferBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
      </div>
    </Gui>
  </JPlayer>
);

VideoPlayer.options = {
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Big Buck Bunny Trailer',
    sources: {
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
      webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
    },
    poster: videoPoster,
  },
};

export default jPlayerConnect(VideoPlayer);
