[![Build Status](https://travis-ci.org/MartinDawson/react-jPlayer.svg?branch=master)](https://travis-ci.org/MartinDawson/react-jPlayer)
[![Coverage Status](https://coveralls.io/repos/github/MartinDawson/react-jPlayer/badge.svg?branch=master)](https://coveralls.io/github/MartinDawson/react-jPlayer?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlayer/status.svg)](https://david-dm.org/martindawson/react-jPlayer)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlayer/dev-status.svg)](https://david-dm.org/martindawson/react-jPlayer?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlayer
A Html5 audio/video player that has been inspired by the [jQuery](http://jquery.com/) plugin [jPlayer](http://jplayer.org/) but without the jQuery dependency and much, much better.

react-jPlayer depends on [Redux](https://github.com/reactjs/redux). Redux is a tiny 2KB and is well worth it to keep the react-jPlayer components componentized.

### Installation
```npm install --save react-jPlayer```

### Examples
Run the jPlayer examples:

```
git clone https://github.com/MartinDawson/react-jPlayer.git

cd react-jPlayer

npm install

cd ./examples

npm run dev

open http://localhost:8080/
```

### Features
* Cross compatible with many legacy different Html5 browsers
* Fully customizable, modular and componentized
* All [Html5 audio/video file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats) are supported
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

# Documentation
## Required Exports

### `getInitialStates(jPlayers)`
A required function that deep merges the static options that you specified on your jPlayer with react-jPlayer's defaults. The result of this must be passed to your stores initial state.

#### Arguments
1. `jPlayer(s)` (Array or Function): Accepts either an array of jPlayers or a single jPlayer. 

### Returns
(Object): The initial state for the jPlayer(s) that needs to be passed to the Redux store.

### `reducer`
A required object. The jPlayer reducer that will be called whenever a jPlayer function is called or dispatched. Must be passed to your store.

### `connect(jPlayer)`
Connects your jPlayer to the jPlayer store by wrapping Redux's original connect.

#### Arguments
1. `jPlayer`: (Function)

### Returns
(function): A function that wraps your jPlayer.

### Static Properties
1. `id`: The id of the jPlayer, this is whatever name you called your jPlayer function. This is passed down as a context so that react-jPlayer can internally know which jPlayer is the current one.
2. `jPlayer`: The original function that you passed in. E.g. if you wanted to read the original jPlayer's options that you specified again.

### Renders
The connected jPlayer. Any additional props that you passed in are passed through to your jPlayer so you can use them as usual.

## Optional Exports

## Misc Exports
### classes
classes that react-jPlayer uses internally for each component are exported for you to use for conveniance.

## Thanks
[1]: https://www.browserstack.com/
[2]: https://cloud.githubusercontent.com/assets/15030491/22504241/4240e478-e86d-11e6-8147-d2771655346a.png
[![BrowserStack][2]][1]

BrowserStack for giving me access to their testing software for free. Contact them if you have a free open-source project for a free account.
