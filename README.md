[![Build Status](https://travis-ci.org/MartinDawson/react-jPlayer.svg?branch=master)](https://travis-ci.org/MartinDawson/react-jPlayer)
[![Coverage Status](https://coveralls.io/repos/github/MartinDawson/react-jPlayer/badge.svg?branch=master)](https://coveralls.io/github/MartinDawson/react-jPlayer?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlayer/status.svg)](https://david-dm.org/martindawson/react-jPlayer)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlayer/dev-status.svg)](https://david-dm.org/martindawson/react-jPlayer?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlayer
A Html5 audio/video player that has been inspired by the [jQuery](http://jquery.com/) plugin [jPlayer](http://jplayer.org/) but without the jQuery dependency and much, much better.

react-jPlayer depends on [Redux](https://github.com/reactjs/redux). Redux is a tiny 2KB and is well worth it to keep the react-jPlayer components componentized.

jPlayer does not support playlists yet. This will be comming in an upcoming npm package called react-jPlaylist.

### Installation
#### NPM
`npm install --save react-jplayer`

#### UMD
Available from the `/dist/` folder.
For example, if you copied the `/dist/` folder to a `/packages/jPlayer/` folder at the root of your project then the src tags would look like this:

`<script src="./packages/jPlayer/dist/js/jPlayer.js"></script>`

`<script src="./packages/jPlayer/dist/css/jPlayer.css"></script>`

`<script src="./packages/jPlayer/dist/css/sleek.css"></script>`

Module is exported to a global variable called `ReactJPlayer`.

### Examples
Run the jPlayer examples. 

```
git clone https://github.com/MartinDawson/react-jPlayer.git

cd react-jPlayer/examples

npm install

npm run dev

open http://localhost:8080/
```

### Most Basic Setup
The examples in the project contain legacy browser, mobile fixes and helpers such as the run-time events and props showing.
If you just want the most basic setup to get an understanding of jPlayer, you can follow the code below.

If you want the jPlayer to look good you will need to include the examples .css or .less files from src or dist.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { getInitialStates, reducer, connect, JPlayer, Gui, SeekBar,
  Audio, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
 } from 'react-jplayer';

/* Our stateless jPlayer component. This function holds everything to do with the jPlayer components. 
If you wanted a video player instead, you could just replace `<Audio />` with `<Video />`
and provide a video src instead of an audio src as the first element in the options.media.sources. */

const AudioPlayer = () => (
  <JPlayer className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <div className="jp-progress">
          <SeekBar>
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

/* All jPlayer options must be defined statically on the jPlayer component. 
These options will be deep merged with the default jPlayer options so you actually don't 
even need to specify any apart from the media.sources if you just want the default options. */

AudioPlayer.options = {
  verticalVolume: true,
  media: {
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
    },
  },
};

/* react-jPlayer provides it's own connect function which will return a connected jPlayer. */

const ConnectedAudioPlayer = connect(AudioPlayer);

/* We now need to connect our jPlayer to the store now so each of the components inside
react-jPlayer can talk to each other. This also gives you a jPlayers object with the AudioPlayer
in it, in your redux state. */

const store = createStore(combineReducers(reducer), getInitialStates(ConnectedAudioPlayer));

const App = () => (
  <ConnectedAudioPlayer />
);

/* Pass the store to the provider. See Redux for more information. */

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

```
### Features
* Cross compatible with many legacy different Html5 browsers
* Fully customizable, modular and componentized
* Supports a large range of [Html5 Audio/Video formats](https://github.com/MartinDawson/react-jPlayer#user-content-supported-media-formats)
* Comes with a fully reponsive css skin for your players
* No jQuery dependency that is in the standard [jPlayer](http://jplayer.org/)
* Fast and performant

### To Note
* No flash player support because flash is dead. I also haven't been able to find a browser that React supports that also didn't support Html5 video/audio players either which makes flash useless.
* Dependency on [Redux](https://github.com/reactjs/redux)

## Supported browsers
* Chrome v15+
* FireFox v15+
* Edge 13+
* Internet Explorer 9+
* Opera v16+
* Yandex
* Windows Safari 5.1
* IOS Safari 5.1+
* Chrome for Android v36+
* Android browser 4+
* IEMobile 11¹

¹partially tested without audio/video because browserstack emulators don't support it.

## Documentation
#### `getInitialStates([jPlayers])`
A required function that deep merges the static options that you specified on your jPlayer with react-jPlayer's defaults. The result of this must be passed to your stores initial state.

##### Arguments
1. `jPlayer(s)` (Array or Function): Accepts either an array of jPlayers or a single jPlayer. 

##### Returns
(Object): The initial state for the jPlayer(s) that needs to be passed to the Redux store.

#### `reducer`
A required object. The jPlayer reducer that will be called whenever a jPlayer function is called or dispatched. Must be passed to your store.

#### `connect(jPlayer)`
Required to connect your jPlayer to the jPlayer store by wrapping Redux's original connect.

##### Arguments
1. `jPlayer`: (Function)

##### Returns
(function): A function that wraps your jPlayer. This means that you can use Redux original connect to wrap this connect with as well if you wanted to pass aditional Redux data from the store to your jPlayer.

##### Static Properties
1. `id`: The id of the jPlayer, this is whatever name you called your jPlayer function. This is passed down as a context so that react-jPlayer can internally know which jPlayer is the current one.
2. `jPlayer`: The original function that you passed in. E.g. if you wanted to read the original jPlayer's options that you specified.

##### Renders
The connected jPlayer. Any additional props that you passed in are passed through to your jPlayer so you can use them as usual.

### Actions
##### Returns
(Object): All actions return an object that are meant to be passed to redux's `dispatch()`.

#### `setOption(id, key, value)`
Sets any jPlayer option. A few of the other actions are just helpers for modifying the options and could also be modified by this function. You should still use the other actions to modify the option if you can as most do extra logic and error handling. 

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `key` (string): The name of the option that you want to set. Specifying nested keys is not supported.
3. `value` (any): The value to set the option to.

#### `setMedia(id, media)`
Sets the media.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `media` (object): The new media you want to set.

#### `clearMedia(id)`
Clear the media and reset all status values. This will be rarely used, if you are setting new media you **don't** need to use this function beforehand as `setMedia` already internally clears existing values before setting a new media.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.

#### `play(id, [time])`
Play the media.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `time` (number): The time that the jPlayer should start playing from, defaults to the current time.

#### `pause(id, [time])`
Pauses the media.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `time` (number): The time that the jPlayer should pause from, defaults to the current time.

#### `setPlayHead(id, percent)`
Moves the play-head to the value specified. This only moves the play-head. Whether the media plays from that point depends on its current state, i.e. If it was playing, play continues from the new play-head. If it was paused, the media is cued to the new play-head position.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `percent` (number): The percent that the play bar should be moved to.

#### `setVolume(id, volume)`
Sets the volume.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `volume` (number): Value given should be between 0 - 1. The volume will be capped at either 0 or 1 if the value given is outside this range.

#### `setMute(id, mute)`
Mutes or un-mutes.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.
2. `mute` (bool)

#### `focus(id)`
This method is called internally for each of the other actions if that jPlayer has keyEnabled set to true. You can also manually focus on the jPlayer if it has keyEnabled set to true by calling this method.

##### Arguments
1. `id` (string): Id of the jPlayer to apply this to.

### Props
#### Options
You specify these values on a functions static property that must be called `options` as shown in the [example](https://github.com/MartinDawson/react-jPlayer#most-basic-setup). Properties in this object are used to initialize the jPlayer. They are deep merged with the default values.

Some properties in this object will be updated internally, so do not rely on these options staying the same throughout the jPlayer's lifetime.

##### [`preload (string)`](https://developer.mozilla.org/en/docs/Web/HTML/Element/video#attr-preload)
Default: "metadata"

##### `minPlaybackRate (number)`
Default: 0.5

Useful to limit the lower boundary of the playbackRate, e.g. when using a slider for the playbackRate

##### `maxPlaybackRate (number)`
Default: 4

Useful to limit the upper boundary of the playbackRate, e.g. when using a slider for the playbackRate

##### [`playbackRate (number)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate)
Default: 1.0

##### [`defaultPlaybackRate (number)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
Default: 1.0

##### `bufferColour (string)`
Default: "#ddd"

The [`<BufferBar />`](https://github.com/MartinDawson/react-jPlayer#bufferbar-) component renders a `<canvas />` element and uses the fillStyle property to fill in the bar. Therefore the colour property must be set in JS and not css.

##### [`volume (number)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume)
Default: 0.8

##### `barDrag (bool)`
Default: true

Allows dragging of all of the components which are bars, e.g. [`<VolumeBar />`](https://github.com/MartinDawson/react-jPlayer#volumebar-), [`<PlaybackRateBar />`](https://github.com/MartinDawson/react-jPlayer#playbackratebar-) and [`<SeekBar />`](https://github.com/MartinDawson/react-jPlayer#seekbar-).

##### `guiFadeHoldTime (number)`
Default: 3000

The time with which the gui waits until fading out. This only starts when the user moves the mouse over the root jPlayer element, the audio/video is full screen and the media is playing.

##### `media (object)`
Default: 
```
media: {
  {
    sources: {},
    title: '',
    artist: '',
    poster: '',
    free: false,
  }
}
```
&ensp;&ensp;`sources` is where you specify the media to play. The keys must be one of the [supported formats](https://github.com/MartinDawson/react-jPlayer#user-content-supported-media-formats). The values must be a valid media url.

&ensp;&ensp;`title` is the title of the media.

&ensp;&ensp;`artist` is the artist of the media.

&ensp;&ensp;`poster` needs to be a valid image element url.

&ensp;&ensp;`free` specifies that the media is free. This is used internally to hide/show the download. [Setting this to false does not mean the media is secure](https://github.com/MartinDawson/react-jPlayer#download-).

##### `keyBindings: (object)`
Default:
```
keyBindings: {
  play: {
    key: 80, // p
    fn: () => (stateProps.paused ? dispatch(play(id)) :
                                    dispatch(pause(id))),
  },
  fullScreen: {
    key: 70, // f
    fn: () => dispatch(setOption(id, 'fullScreen', !stateProps.fullScreen)),
  },
  mute: {
    key: 77, // m
    fn: () => dispatch(setMute(id, !stateProps.muted)),
  },
  volumeUp: {
    key: 190, // .
    fn: () => {
      dispatch(setVolume(id, stateProps.volume + 0.1));
    },
  },
  volumeDown: {
    key: 188, // ,
    fn: () => dispatch(setVolume(id, stateProps.volume - 0.1)),
  },
  loop: {
    key: 76, // l
    fn: () => dispatch(setOption(id, 'loop', !stateProps.loop)),
  },
}
```
&ensp;&ensp;`key` can be a keyCode number [representing the key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) or a [key value string](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). The key value string should be preferred but it's not as supported as keyCode.

&ensp;&ensp;`fn` is the function that will be executed once the key has been pressed.

The keybindings you specify will be deep merged with the defaults.

##### `showRemainingDuration: (bool)`
Default: false

When true, the duration will count down the time remaining in the media. When false, the duration will stay at fixed at the media's time.

##### [`muted: (bool)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted)
Default: false

##### [`loop: (bool)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop)
Default: false

##### [`autoplay: (bool)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay)
Default: false

##### `smoothPlayBar: (bool)`
Default: false

The play bar width changes are animated over 250ms to smooth the change, rather than a step change. This also affects clicks on the play bar, where the bar animates to the new position.

Short duration media benefits the most, since their step changes are the largest.

##### `fullScreen: (bool)`
Default: false

Sets the jPlayer to fullScreen mode when true. The vast majority of users will not want this to be true by default as this option is usually toggled via the GUI. 

This uses the [FullScreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) internally. If the FullScreen api is not supported by the browser then everything but the jPlayer will be hidden. `jPlayer.css` will then handle making the jPlayer width and height 100% of the screen to simulate the native full screen mode as close as possible.

##### `verticalPlaybackRate: (bool)`
Default: false

Set this to true if your playback rate bar is vertical. Clicks on the playback rate bar will then be calculated properly.

##### `verticalVolume: (bool)`
Default: false

Set this to true if your volume bar is vertical. Clicks on the volume bar will then be calculated properly.

##### `keyEnabled: (bool)`
Default: true

Allows key presses to affect the jPlayer. For the [`keyBindings`](https://github.com/MartinDawson/react-jPlayer#keybindings-object) object to have any affect this will need to be true.

##### `timeFormats: (object)`
Defines the display format of the currentTime and duration times.

Default: 

```
timeFormats: {
  showHour: false,
  showMin: true,
  showSec: true,
  padHour: false,
  padMin: true,
  padSec: true,
  sepHour: ':',
  sepMin: ':',
  sepSec: '',
}
```

&ensp;&ensp;`showHour` displays the hours.

&ensp;&ensp;`showMin` displays the minutes.

&ensp;&ensp;`showSec` displays the seconds.

&ensp;&ensp;`padHour` zero pads the hour if less than 10.

&ensp;&ensp;`padMin` zero pads the minute if less than 10.

&ensp;&ensp;`padSec` zero pads the second if less than 10.

&ensp;&ensp;`sepHour` string between hour and minute.

&ensp;&ensp;`sepMin` string between minute and second.

&ensp;&ensp;`sepSec` string after second.

#### Status
Properties in this object are not meant to be modified and should be treated as read-only. These properties are automatically set and updated by jPlayer depending on the [options](https://github.com/MartinDawson/react-jPlayer#options) that you specified.

##### `mediaSettings: (object)`
Default:
```
mediaSettings: {
  video: false,
  foundSupported: false,
  formats: [],
}
```

&ensp;&ensp;`video: (bool)` renders the audio or video and is automatically determined by the media you specify.

&ensp;&ensp;`foundSupported: (bool)` true if any valid media can be played.

&ensp;&ensp;`formats: (array: objects)`

&ensp;&ensp;&ensp;&ensp;`supplied: (string)` the type of media you supplied in the `media.sources` options, e.g. `mp3`.
  
&ensp;&ensp;&ensp;&ensp;`supported: (bool)` true if the media can be played, the same as `foundSupported` but for each media type.

##### [`paused: (bool)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused)
Default: true

##### `seeking: (bool)`
Default: false

True when the user is currently seeking. This get set back to false after the user has finished seeking, i.e. in the `seeked` event.

##### `src: (string)`
Default: ''

This is the current media's src url that you specified in `media.sources`.

##### `currentTimeText: (string)`
Default: '0:00'

The current time that is formatted into text using the [`timeFormats`](https://github.com/MartinDawson/react-jPlayer#timeformats-object) object that is being used for the [`<CurrentTime />`](https://github.com/MartinDawson/react-jPlayer#currenttime-) component.

##### `durationText: (string)`
Default: ''

The duration that is formatted into text using the [`timeFormats`](https://github.com/MartinDawson/react-jPlayer#timeformats-object) object that is being used for the [`<Duration />`](https://github.com/MartinDawson/react-jPlayer#duration-) component.

##### `seekPercent: (number)`
Default: 0

This represents the percentage of the media which is seekable.

##### `currentPercentRelative: (number)`
Default: 0

The current time as a percent of seekPercent.

##### `currentPercentAbsolute: (number)`
Default: 0

The current time as a percent of duration.

##### [`currentTime: (number)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)
Default: 0

##### [`duration: (number)`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration)
Default: 0

##### `bufferedTimeRanges: (array)`
Default: []

&ensp;&ensp;`start: (string)` the start time, in seconds of where the media is buffering.

&ensp;&ensp;`end: (string)` the end time, in seconds of where the media is buffering.

The start and end of where the buffering has occured. If the user seeks to different parts of the media, then the browser will automatically start downloading from that position and skip the media in between if it hasn't already been downloaded. The properties in this array represent that and are used internally by the [`<BufferBar />`](https://github.com/MartinDawson/react-jPlayer#bufferbar-) component.

More information on this can be found in this [MDN article](https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/buffering_seeking_time_ranges).

##### `focused: (bool)`
Default: false

This property determines which jPlayer should take precendance when the user is using key presses to affect the media.
This is only ever true if the current jPlayer has [`keyEnabled`](https://github.com/MartinDawson/react-jPlayer#keyenabled-bool) set to true.

This method is set internally for each action that the user takes on the jPlayer, i.e. each time a jPlayer action is called. You can also manually focus on the jPlayer if it has keyEnabled set to true by calling [`focus`](https://github.com/MartinDawson/react-jPlayer#focusid).

### Components
#### `<JPlayer />`
A required component that needs to be the root of any other jPlayer components. Handles the states that are applied to the jPlayer DOM element.

#### `<GUI />`
Should wrap all of the components that the user interacts with. Handles the fading in and out when in full screen mode.

#### `<SeekBar />`
Should wrap the `<PlayBar />` and `<BufferBar />`. Handles the user being able to seek to a new time when the user clicks, drags or touches on the progress bar. 

#### `<PlayBar />`
Shows how much of the media has been played so far.

#### `<BufferBar />`
Shows how much of the media has been downloaded so far. This also takes in to consideration the user seeking to multiple points on the media and skipping parts of the media.

#### `<Poster />`
The poster to be displayed for the media. Uses `media.poster` as the src for the image.

#### `<Video />`
##### props
1. `events` (object): Any of the [React Media Events](https://facebook.github.io/react/docs/events.html#media-events) that you want to listen to.

If the first media source that you have supplied to `media.sources` is an [video format](https://en.wikipedia.org/wiki/Video_file_format) and it is a valid url that can be played then react-jPlayer will use this component and set the `src` to what you supplied.

#### `<Audio />`
##### props
1. `events` (object): Any of the [React Media Events](https://facebook.github.io/react/docs/events.html#media-events) that you want to listen to.

If the first media source that you have supplied to `media.sources` is an [audio format](https://en.wikipedia.org/wiki/Audio_file_format) and it is a valid url that can be played then react-jPlayer will use this component and set the `src` to what you supplied.

#### `<Title />`
Renders the media title as `media.artist` - `media.title`.

#### `<FullScreen />`
Handles clicks on this component toggling the full screen of the jPlayer.

#### `<Mute />`
Handles clicks on this component toggling the mute of the jPlayer.

#### `<Play />`
Handles clicks on this component setting the jPlayer to be paused or playing.

#### `<Repeat />`
Handles clicks on this component toggling the looping of the jPlayer.

####  `<PlaybackRateBar />`
Handles clicks, dragging or touches on this component setting the playback rate of the media.

#### `<PlaybackRateBarValue />`
This is used by the `<PlaybackRateBar />` by default so the majority of applications won't need to use this. Represents the playback rate as the width or height of the component depending on the property `verticalPlaybackRate`.

#### `<VolumeBar />`
Handles clicks, dragging or touches on this component setting the volume of the media.

#### `<VolumeBarValue />`
This is used by the `<VolumeBar />` by default so the majority of applications won't need to use this. Represents the volume as the width or height of the component depending on the property `verticalVolume`.

#### `<Download />`
Handles clicks on this component downloading the media if the `media.free` option is true. 

Warning: This will not make the media secure, i.e. users can still download the song from the network tab. You will need to secure the media this from the server instead.
If the browser doesn't support the `download` attribute then clicks on this component will open a new tab or window with the source media instead.

#### `<Duration />`
Renders the `durationText` of the jPlayer. Renders nothing if the duration hasn't been set yet (i.e IOS until the user manually plays the media).

#### `<CurrentTime />`
Renders the `currentTimeText` of the jPlayer.

#### `<BrowserUnsupported />`
Renders html that tells the user to update their browser if jPlayer doesn't support the specified media file.

### Misc
#### classes
classes that react-jPlayer uses internally for each component are exported for you to use for conveniance.

### Supported Media Formats
1. mp3
2. m4a
3. m3u8a
4. m3ua
5. oga
6. flac
7. wav
8. webma
9. fla
10. rtmpa
11. m4v
12. m3u8v
12. ogv
13. webmv
14. flv
15. rtmpv

### ToDo List
Highest to lowest priority of what needs doing

- [x] react-jPlayer
- [ ] react-jPlayer documentation
- [ ] react-jPlaylist & documentation
- [ ] react-jCirclePlayer & documentation
- [ ] Acceptance tests

## Thanks
[1]: https://www.browserstack.com/
[2]: https://cloud.githubusercontent.com/assets/15030491/22504241/4240e478-e86d-11e6-8147-d2771655346a.png
[![BrowserStack][2]][1]

BrowserStack for giving me access to their testing software for free. Contact them if you have a free open-source project for a free account.
