import React from 'react';

import { JPlayer, Gui, Progress, SeekBar, Buffer, BrowserUnsupported,
  Poster, Title, FullScreen, Mute, Play, Video, Audio, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration, CurrentTime } from '../../../../src/index';

const medias = {
  video: {
    title: 'Big Buck Bunny Trailer',
    sources: {
      m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
    },
    poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
  },
  audio: {
    title: 'Cro Magnon Man',
    artist: 'The Stark Palace',
    sources: {
      mp3: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    },
    poster: 'http://wallpapercave.com/wp/Mb4UPsY.png',
    free: true,
  },
};

let mediaId = 'video';

const MixedPlayer = (props) => {
  const changeMedia = () => {
    mediaId = mediaId === 'video' ? 'audio' : 'video';

    props.setMedia(medias[mediaId], props.id);
  };
  return (
    <div>
      <div onClick={changeMedia}>ChangeMedia</div>
      <JPlayer data-type="jp-default">
        <div className="jp-media">
          <Poster />
          <Video />
          <Audio />
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
    </div>
  );
};

MixedPlayer.options = {
  id: 'mixed-player',
  muted: true,
  keyEnabled: true,
  media: medias[mediaId],
};

export default MixedPlayer;
