[![Build Status](https://travis-ci.org/MartinDawson/react-jPlayer.svg?branch=master)](https://travis-ci.org/MartinDawson/react-jPlayer)
[![Coverage Status](https://coveralls.io/repos/github/MartinDawson/react-jPlayer/badge.svg?branch=master)](https://coveralls.io/github/MartinDawson/react-jPlayer?branch=master)
https://david-dm.org/MartinDawson/react-jPlayer.svg

# react-jPlayer
A Html5 audio/video player that is based on the [jQuery](http://jquery.com/) plugin [jPlayer](http://jplayer.org/) but without the jQuery dependency.

Coverage is actually 100% but an istanbul bug doesn't recognize ES6 default parameters.

### Installation
```npm install --save react-jPlayer```

### Examples
Run the jPlayer examples:

```
git clone https://github.com/MartinDawson/react-jPlayer.git

cd react-jPlayer/examples

npm install
npm run dev

open http://localhost:8080/
```

### Features
* Cross compatible with many different Html5 browsers
* Removed the redundant Flash/Aurora fallback
* Removed the jQuery/Zepto dependency
* All [Html5 audio/video file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats) are supported

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

## License
[MIT license](http://opensource.org/licenses/MIT).

## Thanks
[1]: https://www.browserstack.com/
[2]: https://cloud.githubusercontent.com/assets/15030491/22504241/4240e478-e86d-11e6-8147-d2771655346a.png
[![BrowserStack][2]][1]

BrowserStack for giving me access to their testing software for free. Contact them if you have a free open-source project for a free account.
