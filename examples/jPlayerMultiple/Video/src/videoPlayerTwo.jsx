import React from 'react';

import { JPlayer, Gui, Progress, SeekBar, Buffer, BrowserUnsupported,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration, CurrentTime } from '../../../../src/index';

const VideoPlayer = () => (
  <JPlayer data-type="jp-default">
    <div className="jp-media">
      <Poster />
      <Video />
    </div>
    <Gui>
      <div className="jp-title-container">
        <Title />
      </div>
      <div className="jp-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <PlaybackRateBar />
        <div className="jp-volume-controls">
          <Mute><i className="fa">{/* Icon set in css*/}</i></Mute>
          <VolumeBar />
        </div>
        <Progress>
          <SeekBar>
            <PlayBar />
            <Buffer />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </Progress>
      </div>
    </Gui>
    <BrowserUnsupported />
  </JPlayer>
);

VideoPlayer.options = {
  id: 'video-player-two',
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Big Buck Bunny Trailer',
    sources: {
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
    },
    poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
  },
};

export default VideoPlayer;
