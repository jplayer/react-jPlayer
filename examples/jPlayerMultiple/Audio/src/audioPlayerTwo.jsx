import React from 'react';
import { JPlayer, Media, Gui, Progress, SeekBar, Buffer, BrowserUnsupported, Poster, Audio,
    Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
    VolumeBar, Duration, CurrentTime } from '../../../../src/index';

const AudioPlayerTwo = () => (
  <JPlayer data-type="jp-default">
    <Gui>
      <Media>
        <Audio>
          <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
        </Audio>
      </Media>
      <div className="jp-poster-container">
        <Poster />
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

AudioPlayerTwo.options = {
  id: 'audio-player-two',
  smoothPlayBar: false,
  muted: true,
  autoplay: false,
  keyEnabled: true,
  media: {
    title: 'Cro Magnon Man Two',
    artist: 'The Stark Palace',
    sources: {
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
      mp3: 'http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3',
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
    },
    poster: 'http://wallpapercave.com/wp/Mb4UPsY.png',
    free: true,
  },
};

export default AudioPlayerTwo;
