import React from "react";
import {Motion, spring} from "react-motion";
import merge from "lodash.merge";
import isEqual from "lodash/isEqual";
import store from "../store";
import * as utilities from "../util/index";
import * as actions from "./actions";

const jPlayer = (WrappedComponent, AdditionalControls) => class JPlayer extends React.Component {
	static get propTypes() {
		return {
			updateOptions: React.PropTypes.func.isRequired,
			functions: React.PropTypes.array,
			overrideFunctions: React.PropTypes.array,
			status: React.PropTypes.object,
			jPlayerStatus: React.PropTypes.func,
			jPlayerSelector: React.PropTypes.string,
			cssSelectorAncestor: React.PropTypes.string,
			html: React.PropTypes.objectOf(React.PropTypes.element),
			supplied:  React.PropTypes.arrayOf(React.PropTypes.string),
			preload: React.PropTypes.string,
			volume: React.PropTypes.number,
			muted: React.PropTypes.bool,
			remainingDuration: React.PropTypes.bool,
			toggleDuration: React.PropTypes.bool,
			captureDuration: React.PropTypes.bool,
			playbackRate: React.PropTypes.number,
			defaultPlaybackRate: React.PropTypes.number,
			minPlaybackRate: React.PropTypes.number,
			maxPlaybackRate: React.PropTypes.number,
			stateClass: React.PropTypes.objectOf(React.PropTypes.string),
			smoothPlayBar: React.PropTypes.bool,
			fullScreen: React.PropTypes.bool,
			fullWindow: React.PropTypes.bool,
			autoHide: React.PropTypes.shape({
				restored: React.PropTypes.bool, // Controls the interface autohide feature.
				full: React.PropTypes.bool, // Controls the interface autohide feature.
				hold: React.PropTypes.number, // Milliseconds. The period of the pause before autohide beings.
			}),
			loop: React.PropTypes.string,
			nativeVideoControls: React.PropTypes.objectOf(React.PropTypes.string),
			noFullWindow: React.PropTypes.objectOf(React.PropTypes.string),
			noVolume: React.PropTypes.objectOf(React.PropTypes.string),
			timeFormat: React.PropTypes.shape({
				showHour: React.PropTypes.bool,
				showMin: React.PropTypes.bool,
				showSec: React.PropTypes.bool,
				padHour: React.PropTypes.bool,
				padMin: React.PropTypes.bool,
				padSec: React.PropTypes.bool,
				sepHour: React.PropTypes.string,
				sepMin: React.PropTypes.string,
				sepSec: React.PropTypes.string
			}),
			keyEnabled: React.PropTypes.bool,
			audioFullScreen: React.PropTypes.bool,
			keyBindings: React.PropTypes.shape({
				play: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				fullScreen: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				muted: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				volumeUp: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				volumeDown: React.PropTypes.shape({
					key: React.PropTypes.number,
					fn: React.PropTypes.func
				}),
				loop: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				})
			}),
			verticalVolume: React.PropTypes.bool,
			verticalPlaybackRate: React.PropTypes.bool,
			globalVolume: React.PropTypes.bool, // Set to make volume and muted changes affect all jPlayer instances with this option enabled
			sizeCssClass: React.PropTypes.string,
			sizeFullCssClass: React.PropTypes.string,
			shuffleAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			displayAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			removeAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			addAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			onProgress: React.PropTypes.func,
			onLoadedData: React.PropTypes.func,
			onTimeUpdate: React.PropTypes.func,
			onDurationChange: React.PropTypes.func,
			onPlay: React.PropTypes.func,
			onPlaying: React.PropTypes.func,
			onPause: React.PropTypes.func,
			onWaiting: React.PropTypes.func,
			onSeeking: React.PropTypes.func,
			onSeeked: React.PropTypes.func,
			onVolumeChange: React.PropTypes.func,
			onRateChange: React.PropTypes.func,
			onSuspend: React.PropTypes.func,
			onEnded: React.PropTypes.func,
			onError: React.PropTypes.func,
			onLoadStart: React.PropTypes.func,
			onAbort: React.PropTypes.func,
			onEmptied: React.PropTypes.func,
			onStalled: React.PropTypes.func,
			onLoadedMetadata: React.PropTypes.func,
			onCanPlay: React.PropTypes.func,
			onCanPlayThrough: React.PropTypes.func,
		}
	}
	static get defaultProps() {
		return {
			cssSelectorAncestor: "jp_container_1",
			jPlayerSelector: "jplayer_1",
			preload: "metadata", // HTML5 Spec values: none, metadata, auto.
			supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,		
			captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
			playbackRate: 1.0,
			defaultPlaybackRate: 1.0,
			minPlaybackRate: 0.5,
			maxPlaybackRate: 4,
			volume: 0.8, // The volume. Number 0 to 1.
			nativeVideoControls: {
				// Works well on standard browsers.
				// Phone and tablet browsers can have problems with the controls disappearing.
			},
			guiFadeInAnimation: {
				stiffness: 40 // Velocity of the animation (higher the faster), other properties automatically set in the Motion component
			},
			guiFadeOutAnimation: {
				stiffness: 40 
			},
			html: {},
			jPlayerStatus: () => {},
			overrideFunctions: [],
			functions: [],
			status: defaultStatus,
			playClass: [jPlayer.className.play],
			pauseClass: [jPlayer.className.pause],
			posterClass: [],
			videoClass: [],
			repeatClass: [jPlayer.className.repeat],
			fullScreenClass: [jPlayer.className.fullScreen],
			volumeMaxClass: [jPlayer.className.volumeMax],
			volumeBarClass: [jPlayer.className.volumeBar],
			volumeBarValueClass: [jPlayer.className.volumeBarValue],
			playbackRateBarClass: [jPlayer.className.playbackRateBar],
			playbackRateBarValueClass: [jPlayer.className.playbackRateBarValue],
			seekBarClass: [jPlayer.className.seekBar],
			noSolutionClass: [jPlayer.className.noSolution]
		}
	}
	constructor(props) {
		super(props);

		this.state = {};	

        this.assignOptions = utilities.assignOptions.bind(this);
		this.mergeOptions = utilities.mergeOptions.bind(this);
		this.modifyOptionsArray = utilities.modifyOptionsArray.bind(this);
		this.addClass = utilities.addClass.bind(this);
		this.removeClass = utilities.removeClass.bind(this);
		this.assignStyle = utilities.assignStyle.bind(this);

		this._setupInternalProperties();
		this._setupOptions();
		this._setupEvents();
		this._setupErrors();
	}
	_setupInternalProperties = () => {
		this.solution = "html";
		this.timeFormat = merge(jPlayer.timeFormat, this.props.timeFormat);
		this.internal = {
			// instance: undefined
			// htmlDlyCmdId: undefined
			// mouse: undefined
			// cmdsIgnored
		};
	}
	_setupOptions = () => {
		this.loopOptions = [
			"off",
			"loop"
		].concat(this.props.loopOptions);	

		// Classes added to the cssSelectorAncestor to indicate the state.
		this.stateClass = merge({ 
			playing: "jp-state-playing",
			seeking: "jp-state-seeking",
			muted: "jp-state-muted",
			looped: "jp-state-looped",
			fullScreen: "jp-state-full-screen",
			noVolume: "jp-state-no-volume"
		}, this.props.stateClass);

		this.autoHide = merge({
			restored: false, // Controls the interface autoHide feature.
			full: true, // Controls the interface autoHide feature.
			hold: 2000 // Milliseconds. The period of the pause before autoHide beings.
		}, this.props.autoHide);

		this.noFullWindow = merge({
			msie: /msie [0-6]\./,
			ipad: /ipad.*?os [0-4]\./,
			iphone: /iphone/,
			ipod: /ipod/,
			android_pad: /android [0-3]\.(?!.*?mobile)/,
			android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
			blackberry: /blackberry/,
			windows_ce: /windows ce/,
			iemobile: /iemobile/,
			webos: /webos/
		}, this.props.noFullWindow);

		this.noVolume = merge({
			ipad: /ipad/,
			iphone: /iphone/,
			ipod: /ipod/,
			android_pad: /android(?!.*?mobile)/,
			android_phone: /android.*?mobile/,
			blackberry: /blackberry/,
			windows_ce: /windows ce/,
			iemobile: /iemobile/,
			webos: /webos/,
			playbook: /playbook/
		}, this.props.noVolume);
		
		// The key control object, defining the key codes and the functions to execute.
		this.keyBindings = merge({
			// The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
			// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
			play: {
				key: 80, // p
				fn: () => this.mergeOptions({status: {paused: !this.props.status.paused}})
			},
			fullScreen: {
				key: 70, // f
				fn: () => {
					if(this.props.status.video || this.props.audioFullScreen) {
						this.assignOptions({fullScreen: !this.props.fullScreen});
					}
				}
			},
			muted: {
				key: 77, // m
				fn: () => this.assignOptions({muted: !this.props.muted})
			},
			volumeUp: {
				key: 190, // .
				fn: () => this.assignOptions({volume: this.props.volume + 0.1})
			},
			volumeDown: {
				key: 188, // ,
				fn: () => this.assignOptions({volume: this.props.volume - 0.1})
			},
			loop: {
				key: 76, // l
				fn: () => this.assignOptions({loop: this._incrementCurrentLoop()})
			}
		}, this.props.keyBindings);
	}
	_setupEvents = () => {
		this.mediaEvent = { 
			onProgress: () => {
				if(this.internal.cmdsIgnored && this.readyState > 0) { // Detect iOS executed the command
					this.internal.cmdsIgnored = false;
				}
				this._getHtmlStatus(this.currentMedia, null, () => {
					this._updateInterface();
					this._trigger(this.props.onProgress);
				});				
			},
			onLoadedData: () => {				
				this.androidFix.setMedia = false; // Disable the fix after the first progress event.
				if(this.androidFix.play) { // Play Android audio - performing the fix.
					this.androidFix.play = false;
					this.mergeOptions({status: {paused: false, currentTime: this.androidFix.time}});
				}
				if(this.androidFix.pause) { // Pause Android audio at time - performing the fix.
					this.androidFix.pause = false;
					this.mergeOptions({status: {paused: true, currentTime: this.androidFix.time}});
				}
				this._trigger(this.props.onLoadedData);
			},
			onTimeUpdate: () => {		
				this._getHtmlStatus(this.currentMedia);
				this._trigger(this.props.onTimeUpdate);
			},
			onDurationChange: () => {			
				this._getHtmlStatus(this.currentMedia);	
				this._trigger(this.props.onDurationChange);
			},
			onPlay: () => {			
				this._updateButtons(true);
				this._htmlCheckWaitForPlay(); // So the native controls update this variable and puts the hidden interface in the correct state. Affects toggling native controls.
				this._trigger(this.props.onPlay);
			},
			onPlaying: () => {			
				this._updateButtons(true);
				this._seeked();
				this._trigger(this.props.onPlaying);
			},
			onPause: () => {				
				this._updateButtons(false);
				this._trigger(this.props.onPause);
			},
			onWaiting: () => {			
				this._seeking();
				this._trigger(this.props.onWaiting);
			},
			onSeeking: () => {
				this._seeking();
				this._trigger(this.props.onSeeking);
			},
			onSeeked: () => {			
				this._seeked();
				this._trigger(this.props.onSeeked);
			},
			onVolumeChange: () => {	
				this._updateMute();
				this._updateVolume();
				this._trigger(this.props.onVolumeChange);
			},
			onRateChange: () => {				
				this._updatePlaybackRate();
				this._trigger(this.props.onRateChange);
			},
			onSuspend: () => { // Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.				
				this._seeked();
				this._trigger(this.props.onSuspend);
			},
			onEnded: () => {			
				// Order of the next few commands are important. Change the time and then pause.
				// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
				if(!jPlayer.platform.webkit) { // Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
					this.currentMedia.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
				}
				// Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
				this.mergeOptions({status: {paused: true}});
				this._updateButtons(false);
				// With override true. Otherwise Chrome leaves progress at full.
				this._getHtmlStatus(this.currentMedia, true);
				this._trigger(this.props.onEnded);
				if (this.props.loop === "loop") {	
					this._trigger(this.props.onRepeat);
				}
			},
			onError: () => {		
				this._updateButtons(false);
				this._seeked();
				if(this.props.status.srcSet) { // Deals with case of clearMedia() causing an error event.
					clearTimeout(this.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution
					this.mergeOptions({status: 
						{ 
							waitForLoad: true, // Allows the load operation to try again.
							waitForPlay: true // Reset since a play was captured..
						}
					});
					
					if(this.props.status.video && !this.props.status.nativeVideoControls) {
						this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
					}

					if(this._validString(this.props.status.media.poster) && !this.props.status.nativeVideoControls) {
						this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
					}
					this.removeClass(utilities.className.hidden, jPlayer.key.videoPlayClass);

					this._error( {
						type: this.error.URL,
						context: this.props.status.src, // this.src shows absolute urls. Want context to show the url given.
						message: this.errorMsg.URL,
						hint: this.errorHint.URL
					});
				}
				this._trigger(this.props.onError);
			},
			onLoadStart: () => this._trigger(this.props.onLoadStart),
			onAbort: () => this._trigger(this.props.onAbort),
			onEmptied: () => this._trigger(this.props.onEmptied),
			onStalled: () => this._trigger(this.props.onStalled),
			onLoadedMetadata: () => this._trigger(this.props.onLoadedMetadata),
			onCanPlay: () => this._trigger(this.props.onCanPlay),
			onCanPlayThrough: () => this._trigger(this.props.onCanPlayThrough)
		};
	}
	_setupErrors = () => {
		this.error = {
			NO_SOLUTION: "e_no_solution",
			NO_SUPPORT: "e_no_support",
			URL: "e_url",
			URL_NOT_SET: "e_url_not_set",
			VERSION: "e_version"
		};
		this.errorMsg = {
			NO_SOLUTION: "No solution can be found by jPlayer in this browser. HTML can not be used.", // Used in: _init()
			NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
			URL: "Media URL could not be loaded.",
			URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set." // Used in: load(), play(), pause(), stop() and playHead()
		};
		this.errorHint = {
			NO_SOLUTION: "Review the jPlayer supplied option.",
			NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
			URL: "Check media URL is valid.",
			URL_NOT_SET: "Use setMedia() to set the media URL.",
			VERSION: "Update jPlayer files."
		};
	}
	_initBeforeRender = () => {
		this.props.updateOptions((prevOptions) => merge({}, this.constructor.defaultProps, prevOptions));

		// On iOS, assume commands will be ignored before user initiates them.
		this.internal.cmdsIgnored = jPlayer.platform.ipad || jPlayer.platform.iphone || jPlayer.platform.ipod;

		// Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
		if(this.props.keyEnabled && !jPlayer.focusInstance) {
			jPlayer.focusInstance = this;
		}

		// A fix for Android where older (2.3) and even some 4.x devices fail to work when changing the *audio* SRC and then playing immediately.
		this.androidFix = {
			setMedia: false, // True when media set
			play: false, // True when a progress event will instruct the media to play
			pause: false, // True when a progress event will instruct the media to pause at a time.
			time: NaN // The play(time) parameter
		};

		this.formats = []; // Array based on supplied string option. Order defines priority.
		this.require = {}; // Which media types are required: video, audio.

		// In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
		this.html = {
			audio: {},
			video: {}
		}; 

		this.css = {};
		this.css.cs = {}; // Holds the css selector strings

		// Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < this.props.supplied.length; index1++) {
			var format = this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim

			if(jPlayer.format[format]) { // Check format is valid.
				var dupFound = false;

				for (var index2 = 0; index2 < this.formats.length; index2++) {
					var value2 = this.formats[index2];

					if(format === value2) {
						dupFound = true;
						break;
					}
				}

				if(!dupFound) {
					this.formats.push(format);
				}
			}
		}

		// Determine if we require solutions for audio, video or both media types.
		this.require.audio = false;
		this.require.video = false;

		for (var priority in this.formats) {
			var format = this.formats[priority];

			this.require[jPlayer.format[format].media] = true;
		}

		const updateCssClass = () => {
			const sizeClass = this.props.fullScreen ? this.props.sizeFullCssClass : this.props.sizeCssClass;
			this.addClass(this.stateClass[sizeClass], utilities.key.stateClass);
			this.mergeOptions({status: {cssClass: sizeClass}});
		};

		// Now required types are known, finish the options default settings.
		if(this.require.video) {	
			this.addClass("jp-video", utilities.key.stateClass);

			this.assignOptions(merge({
				sizeCssClass: "jp-video-270p",
				sizeFullCssClass: "jp-video-full"
			}, {
				sizeCssClass: this.props.sizeCssClass,
				sizeFullCssClass: this.props.sizeFullCssClass
			}), updateCssClass);		
		} else {
			this.addClass("jp-audio", utilities.key.stateClass);

			this.assignOptions({
				sizeCssClass: this.props.sizeCssClass,
				sizeFullCssClass: this.props.sizeFullCssClass
			}, updateCssClass);		
		}
		
		this._setNextProps();	
		
		this.addClass(utilities.className.hidden, jPlayer.key.posterClass);

		// Determine the status for Blocklisted options.
		this.mergeOptions({status: { 
			nativeVideoControls: this._uaBlocklist(this.props.nativeVideoControls),
			noVolume: this._uaBlocklist(this.props.noVolume),
			noFullWindow: this._uaBlocklist(this.props.noFullWindow)
		}});

		// Create event handlers if native fullscreen is supported
		if(jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled) {
			this._fullscreenAddEventListeners();
		}
	}
	_initAfterRender = () => {
		this.currentMedia.volume = this.props.volume;
		this.currentMedia.muted = this.props.muted;
		this.currentMedia.autoplay = this.props.autoPlay;
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;

		// The native controls are only for video and are disabled when audio is also used.
		this._restrictNativeVideoControls(); 

		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			this.html.canPlay = {
				[format]: this.html[jPlayer.format[format].media].available && "" !== this._testCanPlayType(jPlayer.format[format].codec)
			}
		}

		this.html.desired = this.require.audio || this.require.video;
		
		// This is what jPlayer will support, based on solution and supplied.
		this.html.support = {};

		for (var priotity = 0; priotity < this.formats.length; priotity++) {
			var format = this.formats[priotity];

			this.html.support[format] = this.html.canPlay[format] && this.html.desired;
		}

		// If jPlayer is supporting any format in a solution, then the solution is used.
		this.html.used = false;

		for (var formatPriority in this.formats) {
			var format = this.formats[formatPriority];

			if(this.html.support[format]) {
				this.html.used = true;
				break;
			}
		}

		if (jPlayer.platform.android) {
			this.assignOptions({preload: this.props.preload !== 'auto' ? 'metadata' : 'auto'});
		}

		this.html.active = false;

		// Set up the css selectors for the control and feedback entities.
		this._cssSelectorAncestor();

		// If html is not being used by this browser, then media playback is not possible. Trigger an error event.
		if(!(this.html.used)) {
			this._error({
				type: this.error.NO_SOLUTION, //Todo: fix errors
				context: "{solution:'" + this.props.solution + "', supplied:'" + this.props.supplied.join(", ") + "'}",
				message: this.errorMsg.NO_SOLUTION,
				hint: this.errorHint.NO_SOLUTION
			});
			this.removeClass(utilities.className.hidden, jPlayer.key.noSolutionClass);
		} else {
			this.addClass(utilities.className.hidden, jPlayer.key.noSolutionClass);
		}
		this.mergeOptions({status: {playbackRateEnabled: this._testPlaybackRate()}}, () => {
			// Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
			if(this.props.status.playbackRateEnabled) {
				this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
				this.currentMedia.playbackRate = this.props.playbackRate;
			}

			this._updatePlaybackRate();
		});

		if(this.props.status.nativeVideoControls) {
			this.removeClass(utilities.className.hidden, jPlayer.key.videoClass);
			this.assignStyle({width: this.props.status.width, height: this.props.status.height}, "videoStyle");
		} else {
			this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
		}
		
		// Initialize the interface components with the options.
		this._updateNativeVideoControls();

		// The other controls are now setup in _cssSelectorAncestor()
		this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
	}
	_testCanPlayType = (codec) => {
		// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
		try {
			this.currentMedia.canPlayType(codec); // The type is irrelevant.
			return true;
		} catch(err) {
			return false;
		}
	}
	_testPlaybackRate = () => {
		var rate = 0.5;

		// Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
		try {
			if('playbackRate' in this.currentMedia) {
				this.currentMedia.playbackRate = rate;
				return this.currentMedia.playbackRate === rate;
			} else {
				return false;
			}
		} catch(err) {
			return false;
		}
	}
	_uaBlocklist = (list) => {
		// list : object with properties that are all regular expressions. Property names are irrelevant.
		// Returns true if the user agent is matched in list.
		var	ua = navigator.userAgent.toLowerCase(),
			block = false;

		for (var p in list) {
			var re = list[p];

			if(re && re.test(ua)) {
				block = true;
				break;
			}
		}

		return block;
	}
	_restrictNativeVideoControls = () => {
		// Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
		if(this.require.audio) {
			if(this.props.status.nativeVideoControls) {
				this.mergeOptions({status: {nativeVideoControls: false, noFullWindow: true}});
			}
		}
	}
	_updateNativeVideoControls = () => {
		if(this.html.video.available && this.html.used) {
			// Turn the HTML Video controls on/off
			this.setState({videoControls: this.props.status.nativeVideoControls});
			// For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
			if(this.props.status.nativeVideoControls && this.require.video) {
				this.addClass(utilities.className.hidden, jPlayer.key.posterClass);
				this.assignStyle({width: this.props.status.width, height: this.props.status.height}, "videoStyle");
			} else if(this.props.status.waitForPlay && this.props.status.video) {
				this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
				this.removeClass(utilities.className.hidden, jPlayer.key.videoClass);
			}
		}
	}
	_removeEventListeners = () => {
		//Remove the fullscreen event listeners
		var fs = jPlayer.nativeFeatures.fullscreen;

		if(this.internal.fullscreenchangeHandler) {
			document.removeEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
		}
	}
	_getHtmlStatus = (media, override) => {
		let ct = 0, cpa = 0, sp = 0, cpr = 0;

		const duration = media.duration;

		ct = media.currentTime;
		cpa = (duration > 0) ? 100 * ct / duration : 0;
		if((typeof media.seekable === "object") && (media.seekable.length > 0)) {
			sp = (duration > 0) ? 100 * media.seekable.end(media.seekable.length-1) / duration : 100;
			cpr = (duration > 0) ? 100 * media.currentTime / media.seekable.end(media.seekable.length - 1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
		} else {
			sp = 100;
			cpr = cpa;
		}

		if(override) {
			ct = 0;
			cpr = 0;
			cpa = 0;
		}

		this.mergeOptions({status: {
			seekPercent: sp,
			currentPercentRelative: cpr,
			currentPercentAbsolute: cpa,
			currentTime: ct,
			remaining: duration - ct,
			// Fixes the duration bug in iOS, where the durationchange event occurs when media.duration is not always correct.
			// Fixes the initial duration bug in BB OS7, where the media.duration is infinity and displays as NaN:NaN due to Date() using inifity.
			duration: isFinite(media.duration) ? duration : this.props.status.duration,
			videoWidth: media.videoWidth,
			videoHeight: media.videoHeight,
			readyState: media.readyState,
			networkState: media.networkState,
			playbackRate: media.playbackRate,
			ended: media.ended
		}});
	}
	_trigger = (func, error) => {
		var jPlayerOptions = {
			version: Object.assign({}, jPlayer.version),
			element: this.currentMedia,
			//status: merge({}, this.status), // Deep copy
			html: merge({}, this.html), // Deep copy
			error: Object.assign({}, error)
		}

		if (func !== undefined) {
			func.bind(this)(jPlayerOptions);
		}
	}
	_updateButtons = (playing) => {
		if(playing === undefined) {
			playing = !this.props.status.paused;
		} else {
			this.mergeOptions({status: {paused: !playing}});
		}
		
		if(playing) {
			this.addClass(this.stateClass.playing, utilities.key.stateClass);
		} else {
			this.removeClass(this.stateClass.playing, utilities.key.stateClass);
		}
		if(!this.props.status.noFullWindow && this.nextProps.fullWindow) {
			this.addClass(this.stateClass.fullScreen, utilities.key.stateClass);
		} else {
			this.removeClass(this.stateClass.fullScreen, utilities.key.stateClass);
		}
		if(this.nextProps.loop === "loop") {
			this.addClass(this.stateClass.looped, utilities.key.stateClass);
		} else {
			this.removeClass(this.stateClass.looped, utilities.key.stateClass);
		}
	}
	_updateInterface = () => {
		this.assignStyle({width: `${this.props.status.seekPercent}%`}, "seekBarStyle");

		this.props.smoothPlayBar ? this.assignStyle({width: `${this.props.status.currentPercentAbsolute}%`}, "playBarStyle")
								: this.assignStyle({width: `${this.props.status.currentPercentRelative}%`}, "playBarStyle");
		
		var currentTimeText = this._convertTime(this.props.status.currentTime);

		this.setState({currentTimeText: currentTimeText});

		var durationText = '',
			duration = this.props.status.duration,
			remaining = this.props.status.remaining;

		if(this.props.status.media.duration === 'string') {
			durationText = this.props.status.media.duration;
		} else {
			if(this.props.status.media.duration === 'number') {
				duration = this.props.status.media.duration;
				remaining = duration - this.props.status.currentTime;
			}
			if(this.nextProps.remainingDuration) {
				durationText = (remaining > 0 ? '-' : '') + this._convertTime(remaining);
			} else {
				durationText = this._convertTime(duration);
			}
		}

		this.setState({durationText: durationText});
	}
	_convertTime = ConvertTime.prototype.time
	_seeking = () => {
		this.addClass(jPlayer.className.seeking, jPlayer.key.seekBarClass);
		this.addClass(this.stateClass.seeking, utilities.key.stateClass);
	}
	_seeked = () => {
		this.removeClass(jPlayer.className.seeking, jPlayer.key.seekBarClass);
		this.removeClass(this.stateClass.seeking, utilities.key.stateClass);
	}
	_escapeHtml = (s) =>  s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;')
	_qualifyURL = (url) => {
		var el = document.createElement('div');
		el.innerHTML= '<a href="' + this._escapeHtml(url) + '">x</a>';
		return el.firstChild.href;
	}
	_absoluteMediaUrls = (media) => {
		for (var type in media) {
			var url = media[type];

			if(url && jPlayer.format[type] && url.substr(0, 5) !== "data:") {
				media[type] = this._qualifyURL(url);
			}
		}

		return media;
	}
	setMedia = (media) => {
		/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
		*	media.poster = String: Video poster URL.
		*	media.track = Array: Of objects defining the track element: kind, src, srclang, label, def.
		*	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files.
		*/
		var	supported = false,
			posterChanged = this.props.status.media.poster !== media.poster; // Compare before reset. Important for OSX Safari as this.htmlElement.poster.src is absolute, even if original poster URL was relative.
			
		this._resetMedia();
		
		this.html.active = false;
					
		//Clear the Android Fix.
		this.androidFix.setMedia = false;
		this.androidFix.play = false;
		this.androidFix.pause = false;

		// Convert all media URLs to absolute URLs.
		media = this._absoluteMediaUrls(media);

		for (var formatPriority = 0; formatPriority < this.formats.length; formatPriority++) {
			var format = this.formats[formatPriority];
			var isVideo = jPlayer.format[format].media === 'video';

			if(this.html.support[format] && this._validString(media[format])) { // Format supported in solution and url given for format.

			if(isVideo) {
				this._htmlSetVideo(media);
				this.html.active = true;
				this.mergeOptions({status: {video: true}});
				this.removeClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
			} else {
				this._htmlSetAudio(media);
				this.html.active = true;

				// Setup the Android Fix - Only for HTML audio.
				if(jPlayer.platform.android) {
					this.androidFix.setMedia = true;
				}
				this.mergeOptions({status: {video: false, media: media}});
				this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
			}
			supported = true;
			break;
			}
		}

		if(supported) {
			if(!(this.props.status.nativeVideoControls && this.html.video.gate)) {
				// Set poster IMG if native video controls are not being used
				// Note: With IE the IMG onload event occurs immediately when cached.
				// Note: Poster hidden by default in _resetMedia()
				if(this._validString(media.poster)) {
					if(posterChanged) { // Since some browsers do not generate img onload event.
						this.setState({posterSrc: media.poster});
					} else {
						this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
					}
				}
			}

			if(typeof media.title === 'string') {
				this.setState({titleText: media.title});
			}
			
			this.mergeOptions({status: {srcSet: true}});
			this._updateButtons(false);
			this._trigger(this.props.onSetMedia);
		} else { // jPlayer cannot support any formats provided in this browser
			// Send an error event
			this._error( {
				type: this.error.NO_SUPPORT,
				context: "{supplied:'" + this.props.supplied.join(", ") + "'}",
				message: this.errorMsg.NO_SUPPORT,
				hint: this.errorHint.NO_SUPPORT
			});
		}
	}
	_resetMedia = () => {
		this._updateButtons(false);
		this._updateInterface();
		this._seeked();
		this.addClass(utilities.className.hidden, jPlayer.key.posterClass);

		// Maintains the status properties that persist through a reset.	
		this.mergeOptions({status: defaultStatus});
		
		clearTimeout(this.internal.htmlDlyCmdId);

		if(this.html.active) {
			this._htmlResetMedia();
		}
	}
	clearMedia = () => {
		this._resetMedia();

		if(this.html.active) {
			this._htmlClearMedia();
		}

		this.html.active = false;
	}
	load = () => {
		if(this.props.status.srcSet) {
			if(this.html.active) {
				this._htmlLoad();
			}
		} else {
			this._urlNotSetError("load");
		}
	}
	focus = () => {
		if(this.props.keyEnabled) {
			jPlayer.focusInstance = this;
		}
	}
	play = (time) => {
		if(this.props.status.srcSet) {
			this.focus();
			if(this.html.active) {
				this._htmlPlay(time);
			}
		} else {
			this._urlNotSetError("play");
			this.mergeOptions({status: {paused: true}});
		}
	}
	pause = (time) => {
		if(this.props.status.srcSet) {
			if(this.html.active) {
				this._htmlPause(time);
			}
		} else {
			this._urlNotSetError("pause");
		}
	}
	// tellOthers = (command, conditions, ...others) => {
	// 	var	hasConditions = typeof conditions === 'function';

	// 	if(typeof command !== 'string') { // Ignore, since no command.
	// 		return; // Return undefined to maintain chaining.
	// 	}

	// 	for (var index in jPlayer.instances) {
	// 		var instance = jPlayer.instances[index];

	// 		if(this.jPlayerElement !== instance.jPlayerElement) { // Do not tell this instance.
	// 			if(!hasConditions || conditions.bind(instance)()) {
	// 				this.setOptions.bind(instance)(command, ...others);
	// 			}
	// 		}
	// 	}
	// }
	// pauseOthers = (time) => {
	// 	this.tellOthers("pause", function() {
	// 		// In the conditions function, the "this" context is the other instance's jPlayer object.
	// 		return this.props.status.srcSet;
	// 	}, time);
	// }
	stop = () => {
		if(this.props.status.srcSet) {
			if(this.html.active) {
				this._htmlPause(0);
			}
		} else {
			this._urlNotSetError("stop");
		}
	}
	playHead = (p) => {
		p = this._limitValue(p, 0, 100);
		if(this.props.status.srcSet) {
			if(this.html.active) {
				this._htmlPlayHead(p);
			}
		} else {
			this._urlNotSetError("playHead");
		}
	}
	mute = (mute) => {					
		if(this.props.muted) {
			this.assignOptions({muted: false});
		} else {
			mute = mute === undefined ? true : !!mute;
			this.assignOptions({muted: mute});
		}
	}
	_updateMute = (mute) => {
		if(mute === undefined) {
			mute = this.props.muted;
		}
		if(mute) {
			this.addClass(this.stateClass.muted, utilities.key.stateClass);
		} else {
			this.removeClass(this.stateClass.muted, utilities.key.stateClass);
		}	
	}
	_updateVolume = (v) => {
		v = this._limitValue(v, 0, 1);
		if(v === undefined) {
			v = this.props.volume;
		}
		v = this.props.muted ? 0 : v;

		if(this.props.status.noVolume) {
			this.addClass(this.stateClass.noVolume, utilities.key.stateClass);
			this.addClass(utilities.className.hidden, jPlayer.key.volumeBarClass);
			this.addClass(utilities.className.hidden, jPlayer.key.volumeBarValueClass);
			this.addClass(utilities.className.hidden, jPlayer.key.volumeMaxClass);
		} else {
			this.removeClass(this.stateClass.noVolume, utilities.key.stateClass);

			const volumeValue = (v * 100) + "%";

			this.assignStyle({
				width: !this.props.verticalVolume ? volumeValue : null,
				height: this.props.verticalVolume ? volumeValue : null
			}, "volumeBarValueStyle");
			
			this.removeClass(utilities.className.hidden, jPlayer.key.volumeBarClass);
			this.removeClass(utilities.className.hidden, jPlayer.key.volumeBarValueClass);
			this.removeClass(utilities.className.hidden, jPlayer.key.volumeMaxClass);
		}
	}
	_cssSelectorAncestor = (ancestor) => {
		this.removeClass(this.props.status.cssClass, utilities.key.stateClass);
		this.addClass(this.props.status.cssClass, utilities.key.stateClass);
							
		// Set the GUI to the current state.
		this._updateInterface();
		this._updateButtons();
		this._updateVolume();
		this._updateMute();
	}
	duration = (e) => {
		if(this.props.toggleDuration) {
			if(this.props.captureDuration) {
				e.stopPropagation();
			}
			this.assignOptions({remainingDuration: !this.props.remainingDuration});
		}
	}
	_updatePlaybackRate = () => {
		var pbr = this.nextProps.playbackRate,
			ratio = (pbr - this.props.minPlaybackRate) / (this.props.maxPlaybackRate - this.props.minPlaybackRate);
		if(this.props.status.playbackRateEnabled) {
		
			this.removeClass(utilities.className.hidden, jPlayer.key.playbackRateBarClass);
			this.removeClass(utilities.className.hidden, jPlayer.key.playbackRateBarValueClass);

			const playbackRateBarValue = (ratio*100)+"%";

			this.assignStyle({
				width: !this.props.verticalPlaybackRate ? playbackRateBarValue : null,
				height: this.props.verticalPlaybackRate ? playbackRateBarValue : null
			}, "playbackRateBarValueStyle");
		} else {
			this.addClass(utilities.className.hidden, jPlayer.key.playbackRateBarClass);
			this.addClass(utilities.className.hidden, jPlayer.key.playbackRateBarValueClass);
		}
	}
	_incrementCurrentLoop = () => {	
		var loopIndex = this.loopOptions.indexOf(this.props.loop || this.loopOptions[0]);

		if (loopIndex >= this.loopOptions.length - 1) {
			loopIndex = -1;
		}
		return this.loopOptions[++loopIndex];
	}
	_loop = () => {
		this._updateButtons(); 
		this._trigger(this.props.onRepeat);
	}
	_setNextProps = (nextProps = {}) => {
		//props that get updated within the jPlayer component as well as through props
		this.nextProps = {
			playbackRate: nextProps.playbackRate === undefined ? this.props.playbackRate : nextProps.playbackRate,
			fullWindow: nextProps.fullWindow === undefined ? this.props.fullWindow : nextProps.fullWindow,
			remainingDuration: nextProps.remainingDuration === undefined ? this.props.remainingDuration : nextProps.remainingDuration,
			loop: nextProps.loop === undefined ? this.props.loop : nextProps.loop,
			sizeCssClass: nextProps.sizeCssClass === undefined ? this.props.sizeCssClass : nextProps.sizeCssClass,
			sizeFullCssClass: nextProps.sizeFullCssClass === undefined ? this.props.sizeFullCssClass : nextProps.sizeFullCssClass
		};
	}
	_setOptions = (options) => {
		const dynamicOption = {	
			status: (value) => {
				for (let key in value) {
					let option = value[key];

					const status = {
						paused: () => option ? this.pause(options.status.currentTime) : this.play(options.status.currentTime),
						media: () => this.setMedia(option)
					};

					if (status.hasOwnProperty(key) && !isEqual(this.props.status[key], option)) {
						status[key]();		
					}
				}		
			},
			volume: (value) => {
				if(this.html.used) {
					this.currentMedia.volume = value;
				}

				if(this.props.globalVolume) {
					this.props.dispatch(actions.updateOthersOption(this.props.jPlayerSelector, value, "volume"));
				}
			},
			muted: (value) => {	
				debugger;
				if(this.html.used) {
					this.currentMedia.muted = value;
				}

				if(this.props.globalVolume) {
					this.props.dispatch(actions.updateOthersOption(this.props.jPlayerSelector, value, "muted"));
				}
			},
			autoPlay: (value) => {
				if (this.html.used) {
					this.currentMedia.autoplay = value
				}
			},
			playbackRate: (value) => {
				if(this.html.used) {
					this.currentMedia.playbackRate = value;
				}
				this._setNextProps({playbackRate: value});
				this._updatePlaybackRate();
			},
			defaultPlaybackRate: (value) => { 
				if(this.html.used) {
					this.currentMedia.defaultPlaybackRate = value;
				}
				this._updatePlaybackRate();
			},
			minPlaybackRate: () => this._updatePlaybackRate(),
			maxPlaybackRate: () => this._updatePlaybackRate(),
			fullScreen: (value) => { 
				var wkv = jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
				if(!wkv || wkv && !this.props.status.waitForPlay) {
					if(value) {
						this._requestFullscreen();
					} else {
						this._exitFullscreen();
					}
					if(!wkv) {
						this.assignOptions({fullWindow: value});
					}
				}
			},
			fullWindow: (value) => { 
				const sizeClass = this.nextProps.fullWindow ? this.props.sizeFullCssClass : this.props.sizeCssClass;
				this.removeClass(this.props.status.cssClass, utilities.key.stateClass);
				this.addClass(this.stateClass[sizeClass], utilities.key.stateClass);
				this._setNextProps({fullWindow: value});			
				this.mergeOptions({status: {cssClass: sizeClass}}, () => this._trigger(this.props.onResize));			
			},
			loop: (value) => { 
				this._setNextProps({loop: value});
				this._loop();
			},
			remainingDuration: (value) => { 
				this._setNextProps({remainingDuration: value});
				this._updateInterface();
			},
			nativeVideoControls: () => { 
				//this.props.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls);
				this._restrictNativeVideoControls();
			},
			noFullWindow: () => { 
				//this.props.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls); // Need to check again as noFullWindow can depend on this flag and the restrict() can override it.
				//this.props.status.noFullWindow = this._uaBlocklist(this.props.noFullWindow);
				this._restrictNativeVideoControls();
			},
			noVolume: () => { 
				//this.props.status.noVolume = this._uaBlocklist(this.props.noVolume);
				this._updateVolume();
				this._updateMute();
			},
			keyEnabled: (value) => { 
				if(!value && this === jPlayer.focusInstance) {
					jPlayer.focusInstance = null;
				}
			}
		};

		for (let key in options) {
			let option = options[key];
			if (dynamicOption.hasOwnProperty(key) && !isEqual(this.props[key], option)) {
				dynamicOption[key](option);		
			}
		}
	}
	_setFunctions = (functions) => {
		if (!functions.length) {
			return;
		}

		functions.forEach((func) => Array.isArray(func) ? this[func.shift()](...func) : this[func]());

		this.assignOptions({[utilities.key.functions]: []});
	}
	_updateSize = () => {
		// Video html resized if necessary at this time, or if native video controls being used.
		if(!this.props.status.waitForPlay && this.html.active && this.props.status.video
				|| this.html.video.available && this.html.used && this.props.status.nativeVideoControls) {
			this.assignStyle({width: this.props.status.width, height: this.props.status.height}, "videoStyle");
		}
	}
	_fullscreenAddEventListeners = () => {
		var	fs = jPlayer.nativeFeatures.fullscreen;

		if(fs.api.fullscreenEnabled) {
			if(fs.event.fullscreenchange) {
				// Create the event handler function and store it for removal.
				if(typeof this.internal.fullscreenchangeHandler !== 'function') {
					this.internal.fullscreenchangeHandler = () => {
						this._fullscreenchange();
					};
				}
				document.addEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
			}
			// No point creating handler for fullscreenerror.
			// Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
		}
	}
	_fullscreenchange = () => {
		// If nothing is fullscreen, then we cannot be in fullscreen mode.
		if(this.props.fullScreen && !jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()) {
			this.assignOptions({fullScreen: false});
		}
	}
	_requestFullscreen = () => {
		var e = document.querySelector(this.props.cssSelectorAncestor),
			fs = jPlayer.nativeFeatures.fullscreen;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.currentMedia;
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.requestFullscreen(e);
		}
	}
	_posterLoad = () => {
		if(!this.props.status.video || this.props.status.waitForPlay) {
			this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
		}
	}
	_exitFullscreen = () => {
		var fs = jPlayer.nativeFeatures.fullscreen,
			e;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.video.element();
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.exitFullscreen(e);
		}
	}
	_htmlInitMedia = (media) => {
		var mediaArray = media.track || [];
		var tracks = [];

		// Create any track elements given with the media, as an Array of track Objects.
		for (var index = 0; index < mediaArray.length; index++) {
			var v = array[index];
			var vDef = undefined

			if(v.def) {
				vDef = v.def;
			}

			trackElements.push(<track kind={v.Kind} src={v.src} srclang={v.srclang} label={v.label} default={vDef}/>);
		}

		this.setState({tracks: tracks});
		this.currentMedia.src = this.props.status.src;

		 if(this.props.preload !== 'none') {
		 	this._htmlLoad();
		 	this._trigger(this.props.onTimeUpdate)
		 }
	}
	_htmlSetFormat = (media, formatSetCallback) => {
		// Always finds a format due to checks in setMedia()
		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			if(this.html.support[format] && media[format]) {
				this.mergeOptions({status: {
					src: media[format],
					formatType: format,
					format: {
						[format]: true
					}	
				}, formatSetCallback});
				break;
			}
		}
	}
	_htmlSetAudio = (media) => this._htmlSetFormat(media)
	_htmlSetVideo = (media) => {
		this._htmlSetFormat(media);
		if(this.props.status.nativeVideoControls) {
			this.video.element().poster = this._validString(media.poster) ? media.poster : "";
		}
	}
	_htmlResetMedia = () => {
		if(this.currentMedia) {
			if(!this.props.status.nativeVideoControls) {
				this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
			}
			this.currentMedia.pause();
		}
	}
	_htmlClearMedia = () => {
		if(this.currentMedia) {
			this.currentMedia.src = "about:blank";

			// The following load() is only required for Firefox 3.6 (PowerMacs).
			// Recent HTMl5 browsers only require the src change. Due to changes in W3C spec and load() effect.
			this.currentMedia.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
		}
	}
	_htmlLoad = (htmlLoadedCallback) => {
		// This function remains to allow the early HTML5 browsers to work, such as Firefox 3.6
		// A change in the W3C spec for the media.load() command means that this is no longer necessary.
		// This command should be removed and actually causes minor undesirable effects on some browsers. Such as loading the whole file and not only the metadata.
		if(this.props.status.waitForLoad) {
			this.currentMedia.load();
			this.mergeOptions({status: {waitForLoad: false}});
		}
		clearTimeout(this.internal.htmlDlyCmdId);
	}
	_htmlPlay = (time) => {
		this.androidFix.pause = false; // Cancel the pause fix.

		this._htmlLoad(); // Loads if required and clears any delayed commands.

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.play = true;
			this.androidFix.time = time;
		} else if(!isNaN(time)) {
			// Attempt to play it, since iOS has been ignoring commands
			if(this.internal.cmdsIgnored) {
				this.currentMedia.play();
			}
			try {
				// !this.currentMedia.seekable is for old HTML5 browsers, like Firefox 3.6.
				// Checking seekable.length is important for iOS6 to work with setMedia().play(time)
				if(!this.currentMedia.seekable || typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
					this.currentMedia.currentTime = time;
					this.currentMedia.play();
				} else {
					throw 1;
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(() => {
					this.mergeOptions({status: {paused: false, currentTime: time}});
				}, 250);
				return; // Cancel execution and wait for the delayed command.
			}
		} else {
			this.currentMedia.play();
		}
	}
	_htmlPause = (time) => {
		this.androidFix.play = false; // Cancel the play fix.

		if(time > 0) { // We do not want the stop() command, which does pause(0), causing a load operation.
			this._htmlLoad();
		} else {
			clearTimeout(this.internal.htmlDlyCmdId);
		}

		// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
		this.currentMedia.pause();

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.pause = true;
			this.androidFix.time = time;

		} else if(!isNaN(time)) {
			try {
				if(!this.currentMedia.seekable || typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
					this.currentMedia.currentTime = time;
				} else {
					throw 1;
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(() => {
					this.mergeOptions({status: {paused: true, currentTime: time}});
				}, 250);
				return; // Cancel execution and wait for the delayed command.
			}
		}
	}
	_htmlPlayHead = (percent) => {
		this._htmlLoad();

		// This playHead() method needs a refactor to apply the android fix.
		try {
			if(typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
				this.currentMedia.currentTime = percent * this.currentMedia.seekable.end(this.currentMedia.seekable.length-1) / 100;
			} else if(this.currentMedia.duration > 0 && !isNaN(this.currentMedia.duration)) {
				this.currentMedia.currentTime = percent * this.currentMedia.duration / 100;
			} else {
				throw "e";
			}
		} catch(err) {
			this.internal.htmlDlyCmdId = setTimeout(() => {
				this.playHead(percent);
			}, 250);
			return; // Cancel execution and wait for the delayed command.
		}
	}
	_htmlCheckWaitForPlay = () => {
		if(this.props.status.waitForPlay) {
			this.mergeOptions({status: {waitForPlay: false}});
			this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);

			if(this.props.status.video) {
				this.addClass(utilities.className.hidden, jPlayer.key.posterClass);
				this.assignStyle({width: this.props.status.width, height: this.props.status.height}, "videoStyle");
			}
		}
	}
	_validString = (url) => (url && typeof url === "string"); // Empty strings return false
	_limitValue = (value, min, max) => (value < min) ? min : ((value > max) ? max : value);
	_urlNotSetError = (context) => {
		this._error( {
			type: this.error.URL_NOT_SET,
			context: context,
			message: this.errorMsg.URL_NOT_SET,
			hint: this.errorHint.URL_NOT_SET
		});
	}
	_error = (error) => {
		this._trigger(this.props.onError, error);
	}
	onPlayClick = () => this.mergeOptions({status: {paused: !this.props.status.paused}})
	onSeekBarClick = (e) => {	
		// Using $(e.currentTarget) to enable multiple seek bars
		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			p = 100 * x / w;

		this.playHead(p);
	}
	onPlaybackRateBarClick = (e) => {
		// Using e.currentTarget to enable multiple playbackRate bars
		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			y = getHeight(bar) - e.pageY + offset.top,
			h = getHeight(bar),
			ratio,
			pbr;

		if(this.props.verticalPlaybackRate) {
			ratio = y/h;
		} else {
			ratio = x/w;
		}

		pbr = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
		this.assignOptions({playbackRate: pbr});
	}
	onVolumeBarClick = (e) => {
		// Using $(e.currentTarget) to enable multiple volume bars
		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			y = getHeight(bar) - e.pageY + offset.top,
			h = getHeight(bar);

		if(this.props.verticalVolume) {
			this.assignOptions({volume: y/h});
		} else {
			this.assignOptions({volume: x/w});
		}

		if(this.props.muted) {
			this.assignOptions({muted: false});
		}
	}
	onVolumeMaxClick = () => {
		this.assignOptions({volume: 1});

		if(this.props.muted) {
			this.assignOptions({muted: false});
		}
	} 
	onVideoPlayClick = () => this.mergeOptions({status: {paused: false}})
	onMuteClick = () => this.assignOptions({muted: !this.props.muted})
	onRepeatClick = () => this.assignOptions({loop: this._incrementCurrentLoop()})
	onFullScreenClick = () => this.assignOptions({fullScreen: !this.props.fullScreen})
	componentWillReceiveProps(nextProps) {
		this._setOptions(nextProps);
		this._setFunctions(nextProps.functions);
	}	
	componentWillUnmount() {
		this._removeEventListeners();
		document.documentElement.removeEventListener("keydown", this._keyBindings);
	}
	componentWillMount() {
		this._initBeforeRender();
		// store.on("jPlayerChange", () => {

		// 	if (store.identifier !== this.props.jPlayerSelector) {
		// 		this.assignOptions({
		// 			volume: store.volume, 
		// 			muted: store.muted
		// 		});				
		// 	}
		// });
	}
	componentDidUpdate(prevProps, prevState) {
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;

		if (this.props.status.nativeVideoControls !== prevProps.status.nativeVideoControls) {
			this._updateNativeVideoControls();
		}
	
		if (this.props.status.currentTime !== prevProps.status.currentTime || this.props.status.duration !== prevProps.status.duration) {
			this._updateInterface();
		}

		if (this.props.status.paused !== prevProps.status.paused || this.props.status.noFullWindow !== prevProps.status.noFullWindow || this.props.status.loop !== prevProps.status.loop ||
			this.props.status.sizeCssClass !== prevProps.status.sizeCssClass || this.props.status.sizeFullCssClass !== prevProps.status.sizeFullCssClass ||  
			this.props.fullWindow !== prevProps.fullWindow || this.props.fullScreen !== prevProps.fullScreen) {
			this._updateButtons();
		}

		if (this.props.status.src !== prevProps.status.src) {
			this._htmlInitMedia(this.props.status.media);
		}

		if (this.props.status.waitForLoad !== prevProps.status.waitForLoad) {
			//if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
				this._htmlCheckWaitForPlay();
			//}
		}

		if (prevProps.status.width !== this.props.status.width || prevProps.status.height !== this.props.status.height) {
			this.assignStyle({width: this.props.status.width, height: this.props.status.height}, "jPlayerStyle");
		}
	}
	componentDidMount() {
		if (this.audio.element()){
			this.currentMedia = this.audio.element();
			this.html.audio.available = !!this.audio.element().canPlayType && this._testCanPlayType(jPlayer.format.mp3.codec); // Test is for IE9 on Win Server 2008. 
		}

		if (this.video.element()){
			this.currentMedia = this.video.element();
			this.html.video.available = !!this.video.element().canPlayType && this._testCanPlayType(jPlayer.format.m4v.codec);
		}

		this._initAfterRender();
	}
	render() {
		return (
			<WrappedComponent playd={this.play} {...this.props}>
				<div id={this.props.cssSelectorAncestor} className={this.props.status.stateClass.join(" ")}>
					{this.props.children}		
					<div ref={(jPlayerElement) => this.jPlayerElement = jPlayerElement} className="jp-jplayer" style={this.state.jPlayerStyle}>
						<Poster posterClass={this.props.posterClass.join(" ")} src={this.state.posterSrc} onLoad={this._posterLoad} onClick={() => this._trigger(this.props.onClick)} /> 
						<Audio ref={(audio) => this.audio = audio} require={this.require.audio} events={this.mediaEvent}>
							{this.state.videoTracks}
						</Audio>
						<Video ref={(video) => this.video = video} require={this.require.video} videoClass={this.props.videoClass.join(" ")} style={this.state.videoStyle} onClick={() => this._trigger(this.props.onClick)} events={this.mediaEvent}>
							{this.state.videoTracks}
						</Video>				 
					</div>
					<GUI nativeVideoControls={this.props.status.nativeVideoControls} fullWindow={this.props.fullWindow} autoHide={this.autoHide} fadeInConfig={this.props.guiFadeInAnimation} fadeOutConfig={this.props.guiFadeOutAnimation}>
						<div className="jp-controls">
							<a className={jPlayer.className.play} onClick={this.onPlayClick}>
								{this.props.html.play}
							</a>
							<a className={jPlayer.className.mute} onClick={this.onMuteClick}>
								{this.props.html.mute}
							</a>
							<a className={jPlayer.className.volumeMax} onClick={this.onVolumeMaxClick}>
								{this.props.html.volumeMax}
							</a>
							<a className={this.props.repeatClass.join(" ")} onClick={this.onRepeatClick}>							
								{this.props.html.repeat}			
							</a>																
							<a className={this.props.fullScreenClass.join(" ")} onClick={this.onFullScreenClick}>
								{this.props.html.fullScreen}
							</a>		
							<div className={this.props.volumeBarClass.join(" ")} style={this.state.volumeBarStyle} onClick={this.onVolumeBarClick}>
								<div className={this.props.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} />
							</div>
							<div className={jPlayer.className.title}>
								{this.state.titleText}
							</div>
							<div className={this.props.playbackRateBarClass.join(" ")} style={this.state.playbackRateBarStyle} onClick={this.onPlaybackRateBarClick}>
								<div className={this.props.playbackRateBarValueClass.join(" ")} style={this.state.playbackRateBarValueStyle} />
							</div>		
							<AdditionalControls {...this.props.additionalControlProps} />
						</div>
						<div className="jp-progress">
							<div className={this.props.seekBarClass.join(" ")} style={this.state.seekBarStyle} onClick={this.onSeekBarClick}>                         
								<PlayBar smoothPlayBar={this.props.smoothPlayBar} currentPercentAbsolute={this.props.status.currentPercentAbsolute} playBarStyle={this.state.playBarStyle} />
								<div className={jPlayer.className.currentTime}>{this.state.currentTimeText}</div>
								<div className={jPlayer.className.duration} onClick={this.state.durationOnClick}>{this.state.durationText}</div>
							</div>
						</div>
					</GUI>
					<div className={this.props.noSolutionClass.join(" ")} style={this.state.noSolutionStyle}>
						<span>Update Required</span>
						To play the media you will need to update your browser to a recent version.
					</div>		
				</div>
			</WrappedComponent>
		);
	}
}

class GUI extends React.Component {
	constructor() {
		super();
		
		this.state = {};
	}
	_setFading = (event) => {	
		if (!this.state.isFadingIn) {
			
			this.fadeHoldTimeout = setTimeout(() => {
				this.setState({isFadingIn: false});
			}, this.props.autoHide.hold);
		}
		
		this.setState({isFadingIn: true});
	}
	_updateAutoHide = () => (
		<div className={this.props.nativeVideoControls ? utilities.className.hidden : null} onMouseMove={this._setFading} style={{width: "100%", height: "100%", position: "fixed", top: "0"}}>
			<Motion defaultStyle={{opacityToInterpTo: 1}} style={{opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig)}}>
				{(values) => <div className="jp-gui" onMouseLeave={() => this.setState({isFadingIn: false})} onMouseEnter={() => clearTimeout(this.fadeHoldTimeout)} style={{opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : ""}}>{this.props.children}</div>}
			</Motion>
		</div>
	);
	render() {
		return (
			this.props.fullWindow && this.props.autoHide.full || !this.props.fullWindow && this.props.autoHide.restored ?
				this._updateAutoHide()  
			:	<div className={this.props.nativeVideoControls ? "jp-gui " + utilities.className.hidden : "jp-gui"}>{this.props.children}</div>
		);
	}
};

const PlayBar = (props) => (
	props.smoothPlayBar ? 
		<Motion style={{smoothWidth: spring(props.currentPercentAbsolute, [250])}}>
			{(values) => <div className="jp-play-bar" style={{width: values.smoothWidth + "%"}} />}
		</Motion>
	:	<div className="jp-play-bar" style={props.playBarStyle} />
);

PlayBar.defaultProps = {
    currentPercentAbsolute: 0
};

const Poster = (props) => (
	<img className={props.posterClass} src={props.src} style={props.style} onLoad={props.onLoad} onClick={props.onClick} />
);

class Audio extends React.Component {
	element = () => this.audioElement
	render() {
		return (
			this.props.require ?
				<audio ref={(audioElement) => this.audioElement = audioElement} {...this.props.events}>
					{this.props.children}
				</audio>
			: null
		);
	}
}

class Video extends React.Component {
	element = () => this.videoElement
	render(){
		return (
			this.props.require &&
				<video ref={(videoElement) => this.videoElement = videoElement} className={this.props.videoClass} style={this.props.style} onClick={this.props.onClick} {...this.props.events}>
					{this.props.children}
				</video>
		);
	}
}

var keyBindings = (event) => {
	var f = jPlayer.focusInstance,
		ignoreKey;

	//A jPlayer instance must be in focusInstance. ie., keyEnabled and the last one played.
	if(f) {
		// What generated the key press?
		for (var index = 0; index < jPlayer.keyIgnoreElementNames.length; index++) {
			var name = jPlayer.keyIgnoreElementNames[index];

			if(event.target.nodeName.toUpperCase() === name.toUpperCase()) {
				ignoreKey = true;
				break;
			}
		}

		if(!ignoreKey) {
			var keyBindings = f.keyBindings;

			for (var action in keyBindings) {
				var binding = keyBindings[action];

				if(
					(binding && isFunction(binding.fn)) &&
					((typeof binding.key === 'number' && event.which === binding.key) ||
					(typeof binding.key === 'string' && event.key === binding.key))
				) {
					event.preventDefault(); // Key being used by jPlayer, so prevent default operation.
					binding.fn.bind(f)();
					break;
				}
			}
		}
	}
}

const defaultStatus = {
	src: "",
	media: {},
	paused: true,
	format: {},
	formatType: "",
	waitForPlay: true, // Same as waitForLoad except in case where preloading.
	waitForLoad: true,
	srcSet: false,
	video: false, // True if playing a video
	seekPercent: 0,
	currentPercentRelative: 0,
	currentPercentAbsolute: 0,
	currentTime: 0,
	duration: 0,
	remaining: 0,
	videoWidth: 0, // Intrinsic width of the video in pixels.
	videoHeight: 0, // Intrinsic height of the video in pixels.
	readyState: 0,
	networkState: 0,
	playbackRate: 1, // Warning - Now both an option and a status property
	ended: 0,
	stateClass: []
	/*
	Persistant status properties created dynamically at _init():
	nativeVideoControls
	noFullWindow
	noVolume
	playbackRateEnabled
	*/
};

jPlayer.key = {
	volumeBarClass: "volumeBarClass",
	volumeBarValueClass: "volumeBarValueClass",
	volumeMaxClass: "volumeMaxClass",
	playbackRateBarClass: "playbackRateBarClass",
	playbackRateBarValueClass: "playbackRateBarValueClass",
	seekBarClass: "seekBarClass",
	noSolutionClass: "noSolutionClass",
	posterClass: "posterClass",
	videoClass: "videoClass",
	videoPlayClass: "videoPlayClass",
	playClass: "playClass",
	pauseClass: "pauseClass",
	repeatClass: "repeatClass",    
	fullScreenClass: "fullScreenClass"
};

jPlayer.className = {
	seeking: "jp-seeking-bg",
	mute: "jp-mute",
	volumeBar: "jp-volume-bar",
	volumeBarValue: "jp-volume-bar-value",
	volumeMax: "jp-volume-max",
	playbackRateBar: "jp-playback-rate-bar",
	playbackRateBarValue: "jp-playback-rate-bar-value",
	seekBar: "jp-seek-bar",
	noSolution: "jp-no-solution",
	play: "jp-play",
	pause: "jp-pause",
	repeat: "jp-repeat",
	fullScreen: "jp-full-screen",
	title: "jp-title",
	currentTime: "jp-current-time",
	duration: "jp-duration"				
};

jPlayer.keys = ((en) => {
	var event = "keydown";

	// Remove any binding, just in case enabled more than once.
	document.documentElement.removeEventListener(event, keyBindings);

	if(en) {
		document.documentElement.addEventListener(event, keyBindings);
	}
})(true);

jPlayer.timeFormat = {
	showHour: false,
	showMin: true,
	showSec: true,
	padHour: false,
	padMin: true,
	padSec: true,
	sepHour: ":",
	sepMin: ":",
	sepSec: ""
};

jPlayer.keyIgnoreElementNames = ["A", "INPUT", "TEXTAREA", "SELECT", "BUTTON"];
jPlayer.focusInstance = null;

jPlayer.uaBrowser = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rwebkit = /(webkit)[ \/]([\w.]+)/;
	var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
	var rmsie = /(msie) ([\w.]+)/;
	var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

	var match = rwebkit.exec( ua ) ||
		ropera.exec( ua ) ||
		rmsie.exec( ua ) ||
		ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
		[];

	return { browser: match[1] || "", version: match[2] || "0" };
}

jPlayer.uaPlatform = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
	var rtablet = /(ipad|playbook)/;
	var randroid = /(android)/;
	var rmobile = /(mobile)/;

	var platform = rplatform.exec( ua ) || [];
	var tablet = rtablet.exec( ua ) ||
		!rmobile.exec( ua ) && randroid.exec( ua ) ||
		[];

	if(platform[1]) {
		platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
	}

	return { platform: platform[1] || "", tablet: tablet[1] || "" };
}

// Internet Explorer (IE) Browser Document Mode Sniffer. Based on code at:
// http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx#GetMode
jPlayer.getDocMode = () => {
	var docMode;

	if (jPlayer.browser.msie) {
		if (document.documentMode) { // IE8 or later
			docMode = document.documentMode;
		} else { // IE 5-7
			docMode = 5; // Assume quirks mode unless proven otherwise

			if (document.compatMode && document.compatMode === "CSS1Compat") {
				docMode = 7; // standards mode
			}
		}
	}
	return docMode;
}

jPlayer.browser = {};
jPlayer.platform = {};

var browserMatch = jPlayer.uaBrowser(navigator.userAgent);

if (browserMatch.browser) {
	jPlayer.browser[browserMatch.browser] = true;
	jPlayer.browser.version = browserMatch.version;
}

var platformMatch = jPlayer.uaPlatform(navigator.userAgent);

if (platformMatch.platform) {
	jPlayer.platform[platformMatch.platform] = true;
	jPlayer.platform.mobile = !platformMatch.tablet;
	jPlayer.platform.tablet = !!platformMatch.tablet;
}

jPlayer.browser.documentMode = jPlayer.getDocMode();

jPlayer.nativeFeatures = {
	init: function() {
		/* Fullscreen function naming influenced by W3C naming.
			* No support for: Mozilla Proposal: https://wiki.mozilla.org/Gecko:FullScreenAPI
			*/
		var d = document,
			v = d.createElement('video'),
			spec = {
				// http://www.w3.org/TR/fullscreen/
				w3c: [
					'fullscreenEnabled',
					'fullscreenElement',
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenchange',
					'fullscreenerror'
				],
				// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
				moz: [
					'mozFullScreenEnabled',
					'mozFullScreenElement',
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				// http://developer.apple.com/library/safari/#documentation/WebKit/Reference/ElementClassRef/Element/Element.html
				// http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/DocumentAdditionsReference/DocumentAdditions/DocumentAdditions.html
				webkit: [
					'',
					'webkitCurrentFullScreenElement',
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					''
				],
				// http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
				// https://developer.apple.com/library/safari/samplecode/HTML5VideoEventFlow/Listings/events_js.html#//apple_ref/doc/uid/DTS40010085-events_js-DontLinkElementID_5
				// Events: 'webkitbeginfullscreen' and 'webkitendfullscreen'
				webkitVideo: [
					'webkitSupportsFullscreen',
					'webkitDisplayingFullscreen',
					'webkitEnterFullscreen',
					'webkitExitFullscreen',
					'',
					''
				],
				ms: [
					'',
					'msFullscreenElement',
					'msRequestFullscreen',
					'msExitFullscreen',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			},
			specOrder = [
				'w3c',
				'moz',
				'webkit',
				'webkitVideo',
				'ms'
			],
			fs, i, il;

		this.fullscreen = fs = {
			support: {
				w3c: !!d[spec.w3c[0]],
				moz: !!d[spec.moz[0]],
				webkit: typeof d[spec.webkit[3]] === 'function',
				webkitVideo: typeof v[spec.webkitVideo[2]] === 'function',
				ms: typeof v[spec.ms[2]] === 'function'
			},
			used: {}
		};

		// Store the name of the spec being used and as a handy boolean.
		for(i = 0, il = specOrder.length; i < il; i++) {
			var n = specOrder[i];
			if(fs.support[n]) {
				fs.spec = n;
				fs.used[n] = true;
				break;
			}
		}

		if(fs.spec) {
			var s = spec[fs.spec];
			fs.api = {
				fullscreenEnabled: true,
				fullscreenElement: (elem) => {
					elem = elem ? elem : d; // Video element required for webkitVideo
					return elem[s[1]];
				},
				requestFullscreen: (elem) => {
					return elem[s[2]](); // Chrome and Opera want parameter (Element.ALLOW_KEYBOARD_INPUT) but Safari fails if flag used.
				},
				exitFullscreen: (elem) => {
					elem = elem ? elem : d; // Video element required for webkitVideo
					return elem[s[3]]();
				}
			};
			fs.event = {
				fullscreenchange: s[4],
				fullscreenerror: s[5]
			};
		} else {
			fs.api = {
				fullscreenEnabled: false,
				fullscreenElement: () => {
					return null;
				},
				requestFullscreen: () => {},
				exitFullscreen: () => {}
			};
			fs.event = {};
		}
	}
}
jPlayer.nativeFeatures.init();

var ConvertTime = function() {
	this.init();
};

ConvertTime.prototype = {
	init: function() {
		this.options = {
			timeFormat: jPlayer.timeFormat
		};
	},
	time: function(s) {
		s = (s && typeof s === 'number') ? s : 0;

		var myTime = new Date(s * 1000),
			hour = myTime.getUTCHours(),
			min = this.timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
			sec = this.timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
			strHour = (this.timeFormat.padHour && hour < 10) ? "0" + hour : hour,
			strMin = (this.timeFormat.padMin && min < 10) ? "0" + min : min,
			strSec = (this.timeFormat.padSec && sec < 10) ? "0" + sec : sec,
			strTime = "";

			strTime += this.timeFormat.showHour ? strHour + this.timeFormat.sepHour : "";
			strTime += this.timeFormat.showMin ? strMin + this.timeFormat.sepMin : "";
			strTime += this.timeFormat.showSec ? strSec + this.timeFormat.sepSec : "";

			return strTime;
	}
};

var myConvertTime = new ConvertTime();

jPlayer.convertTime = (s) => myConvertTime.time(s);

jPlayer.version = {
	script: "2.9.2"
}

// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
jPlayer.format = {
	mp3: {
		codec: 'audio/mpeg',
		media: 'audio'
	},
	m4a: { // AAC / MP4
		codec: 'audio/mp4; codecs="mp4a.40.2"',
		media: 'audio'
	},
	m3u8a: { // AAC / MP4 / Apple HLS
		codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
		media: 'audio'
	},
	m3ua: { // M3U
		codec: 'audio/mpegurl',
		media: 'audio'
	},
	oga: { // OGG
		codec: 'audio/ogg; codecs="vorbis, opus"',
		media: 'audio'
	},
	flac: { // FLAC
		codec: 'audio/x-flac',
		media: 'audio'
	},
	wav: { // PCM
		codec: 'audio/wav; codecs="1"',
		media: 'audio'
	},
	webma: { // WEBM
		codec: 'audio/webm; codecs="vorbis"',
		media: 'audio'
	},
	fla: { // FLV / F4A
		codec: 'audio/x-flv',
		media: 'audio'
	},
	rtmpa: { // RTMP AUDIO
		codec: 'audio/rtmp; codecs="rtmp"',
		media: 'audio'
	},
	m4v: { // H.264 / MP4
		codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
		media: 'video'
	},
	m3u8v: { // H.264 / AAC / MP4 / Apple HLS
		codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
		media: 'video'
	},
	m3uv: { // M3U
		codec: 'audio/mpegurl',
		media: 'video'
	},
	ogv: { // OGG
		codec: 'video/ogg; codecs="theora, vorbis"',
		media: 'video'
	},
	webmv: { // WEBM
		codec: 'video/webm; codecs="vorbis, vp8"',
		media: 'video'
	},
	flv: { // FLV / F4V
		codec: 'video/x-flv',
		media: 'video'
	},
	rtmpv: { // RTMP VIDEO
		codec: 'video/rtmp; codecs="rtmp"',
		media: 'video'
	}
}

var getOffset = (el) => ({top: el.getBoundingClientRect().top + document.body.scrollTop, left: el.getBoundingClientRect().left + document.body.scrollLeft});
var getWidth = (el) => el.getBoundingClientRect().width;
var getHeight = (el) => el.getBoundingClientRect().height;
var isFunction = (obj) => Object.prototype.toString.call(obj) == '[object Function]';

export default jPlayer;