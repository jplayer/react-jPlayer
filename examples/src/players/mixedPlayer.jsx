/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, SeekBar, BufferBar,
  Poster, Title, FullScreen, Mute, Play, Video, Audio, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Download, Duration, CurrentTime } from '../../../src/index';
import mp3 from '../../assets/Alan Walker - Fade.mp3';
import audioPoster from '../../assets/Alan Walker - Fade.jpg';
import webmv from '../../assets/Big Buck Bunny Trailer.webm';
import videoPoster from '../../assets/Big Buck Bunny Trailer.jpg';
import jPlayerConnect from '../../../src/jPlayerConnect';

const medias = {
  video: {
    title: 'Big Buck Bunny Trailer',
    sources: {
      webmv,
    },
    poster: videoPoster,
  },
  audio: {
    title: 'Fade',
    artist: 'Alan Walker',
    sources: {
      mp3,
    },
    poster: audioPoster,
    free: true,
  },
};

let mediaId = 'video';

const MixedPlayer = (props) => {
  const changeMedia = () => {
    mediaId = mediaId === 'video' ? 'audio' : 'video';

    props.setMedia(medias[mediaId], props.uid);
  };
  const posterStyle = (
    !props.mediaSettings.video &&
    !props.fullScreen ? { width: '640px', height: '360px' } : null
  );

  return (
    <div>
      <button className="btn btn-default toggle-media" onClick={changeMedia}>Toggle Media</button>
      <JPlayer className="jp-sleek">
        <div className="jp-media">
          <Poster style={posterStyle} />
          <Video events={props.events} />
          <Audio events={props.events} />
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
            <Download><i className="fa fa-download" /></Download>
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
    </div>
  );
};

MixedPlayer.options = {
  muted: true,
  showRemainingDuration: true,
  keyEnabled: true,
  media: medias[mediaId],
};

export default jPlayerConnect(MixedPlayer);
