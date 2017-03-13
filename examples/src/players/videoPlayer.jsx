/* eslint react/prop-types: 0 */
import React from 'react';
import { connect, JPlayer, Gui, SeekBar, BufferBar,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported } from 'react-jplayer';

import videoPoster from '../../assets/Big Buck Bunny Trailer.jpg';
import { onTouchStart, onClick } from './hoverControl';

const VideoPlayer = props => (
  <JPlayer className="jp-sleek">
    <div className="jp-media">
      <Poster />
      <Video events={props.events} />
    </div>
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
           <Mute
            aria-haspopup
            onTouchStart={onTouchStart}
            onClick={onClick(props.setMute, props.options.muted)}
          >
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-bar-container jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

VideoPlayer.options = {
  muted: false,
  keyEnabled: true,
  verticalVolume: true,
  media: {
    artist: 'peach.blender',
    title: 'Big Buck Bunny Trailer',
    sources: {
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
      webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
    },
    poster: videoPoster,
  },
};

export default connect(VideoPlayer);
