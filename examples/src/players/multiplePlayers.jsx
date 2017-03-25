/* eslint react/prop-types: 0 */
import React from 'react';
import { connect, JPlayer, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import { isVolumeBarVisible, setMuteIfVolumeVisible } from '../util/muteHoverControl';
import FooterPlayer from './audioPlayer';

const AudioPlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events} />
    <Gui style={!props.options.fullScreen ? { bottom: 'auto', position: 'static' } : null}>
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
            onTouchStart={isVolumeBarVisible}
            onClick={() => setMuteIfVolumeVisible(props.setMute, props.id, props.options.muted)}
          >
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
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

const options = {
  id: 'MultiAudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'Tempered Song',
    artist: 'Miaow',
    sources: {
      mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
      oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
    },
  },
};

export default [
  connect(FooterPlayer.jPlayer, {
    ...FooterPlayer.options,
    id: 'MultiFooterPlayer',
  }),
  connect(AudioPlayer, options),
];
