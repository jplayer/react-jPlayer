// import React from "react";
// import merge from "lodash.merge";
// import isEqual from "lodash/isEqual";
// import store from "../store";
// import * as util from "../util/index";
// import * as constants from "../util/constants";
// import * as actions from "../actions/jPlayerActions";
// import {connect} from "react-redux";
// import {bindActionCreators} from 'redux';
// import screenfull from "screenfull";
// import Gui from "../components/gui";
// import Controls from "../components/controls";
// import Progress from "../components/progress";
// import PlayBar from "../components/playBar";
// import Poster from "../components/poster";
// import Audio from "../components/audio";
// import Video from "../components/video";
// import PlayerContainer from "../components/playerContainer";
// import BrowserUnsupported from "../components/browserUnsupported";
// import {addUniqueToArray, removeFromArrayByValue} from "../reducers/index";
// import * as jPlayerActions from "../actions/jPlayerActions";

// const mapStateToProps = (state) => ({
// 	...state.jPlayer, 
// 	shuffled: state.jPlaylist.shuffled,
// 	playlistControls: state.jPlaylist.controls
// });
// const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

// export default connect(mapStateToProps, mapDispatchToProps)(
// 	class JPlayer extends React.PureComponent {
// 		constructor(props) {
// 			super(props);

// 			this.state = {
                
// 			};
			
// 		}

// 		static get propTypes() {
// 			return {
// 				updateOptions: React.PropTypes.func.isRequired,
// 				jPlayerid: React.PropTypes.string,
// 				cssidAncestor: React.PropTypes.string,
// 				controls: React.PropTypes.objectOf(React.PropTypes.element),
// 				supplied: React.PropTypes.arrayOf(React.PropTypes.string),
// 				preload: React.PropTypes.string,
// 				volume: React.PropTypes.number,
// 				muted: React.PropTypes.bool,
// 				remainingDuration: React.PropTypes.bool,
// 				duration: React.PropTypes.duration,
// 				toggleDuration: React.PropTypes.bool,
// 				captureDuration: React.PropTypes.bool,
// 				playbackRate: React.PropTypes.number,
// 				defaultPlaybackRate: React.PropTypes.number,
// 				minPlaybackRate: React.PropTypes.number,
// 				maxPlaybackRate: React.PropTypes.number,
// 				smoothPlayBar: React.PropTypes.bool,
// 				fullScreen: React.PropTypes.bool,
// 				fullWindow: React.PropTypes.bool,			
// 				loop: React.PropTypes.string,				
// 				noFullWindow: React.PropTypes.objectOf(React.PropTypes.string),
// 				noVolume: React.PropTypes.objectOf(React.PropTypes.string),
// 				timeFormat: React.PropTypes.shape({
// 					showHour: React.PropTypes.bool,
// 					showMin: React.PropTypes.bool,
// 					showSec: React.PropTypes.bool,
// 					padHour: React.PropTypes.bool,
// 					padMin: React.PropTypes.bool,
// 					padSec: React.PropTypes.bool,
// 					sepHour: React.PropTypes.string,
// 					sepMin: React.PropTypes.string,
// 					sepSec: React.PropTypes.string
// 				}),
// 				keyEnabled: React.PropTypes.bool,
// 				audioFullScreen: React.PropTypes.bool,		
// 				verticalVolume: React.PropTypes.bool,
// 				verticalPlaybackRate: React.PropTypes.bool,
// 				globalVolume: React.PropTypes.bool, // Set to make volume and muted changes affect all jPlayer instances with this option enabled
// 				sizeCssClass: React.PropTypes.string,
// 				sizeFullCssClass: React.PropTypes.string,
// 				shuffleAnimation: React.PropTypes.shape({
// 					stiffness: React.PropTypes.number, 
// 					damping: React.PropTypes.number, 
// 					precision: React.PropTypes.number
// 				}),
// 				displayAnimation: React.PropTypes.shape({
// 					stiffness: React.PropTypes.number, 
// 					damping: React.PropTypes.number, 
// 					precision: React.PropTypes.number
// 				}),
// 				removeAnimation: React.PropTypes.shape({
// 					stiffness: React.PropTypes.number, 
// 					damping: React.PropTypes.number, 
// 					precision: React.PropTypes.number
// 				}),
// 				addAnimation: React.PropTypes.shape({
// 					stiffness: React.PropTypes.number, 
// 					damping: React.PropTypes.number,
// 					precision: React.PropTypes.number
// 				}),
// 				onProgress: React.PropTypes.func,
// 				onLoadedData: React.PropTypes.func,
// 				onTimeUpdate: React.PropTypes.func,
// 				onDurationChange: React.PropTypes.func,
// 				onPlay: React.PropTypes.func,
// 				onPlaying: React.PropTypes.func,
// 				onPause: React.PropTypes.func,
// 				onWaiting: React.PropTypes.func,
// 				onSeeking: React.PropTypes.func,
// 				onSeeked: React.PropTypes.func,
// 				onVolumeChange: React.PropTypes.func,
// 				onRateChange: React.PropTypes.func,
// 				onSuspend: React.PropTypes.func,
// 				onEnded: React.PropTypes.func,
// 				onError: React.PropTypes.func,
// 				onLoadStart: React.PropTypes.func,
// 				onAbort: React.PropTypes.func,
// 				onEmptied: React.PropTypes.func,
// 				onStalled: React.PropTypes.func,
// 				onLoadedMetadata: React.PropTypes.func,
// 				onCanPlay: React.PropTypes.func,
// 				onCanPlayThrough: React.PropTypes.func
// 			}
// 		}
// 		static get childContextTypes() {
// 			return {
// 				setMedia: React.PropTypes.func,
// 				clearMedia: React.PropTypes.func,
// 				play: React.PropTypes.func,
// 				pause: React.PropTypes.func,
// 				playHead: React.PropTypes.func,
// 				focus: React.PropTypes.func,
// 				volume: React.PropTypes.func,
// 				mute: React.PropTypes.func,
// 				unmute: React.PropTypes.func,
// 				incrementLoop: React.PropTypes.func,
// 				fullScreen: React.PropTypes.func,
// 				duration: React.PropTypes.func,
// 				playbackRate: React.PropTypes.func,
// 			}
// 		}
// 		getChildContext = () => ({
// 			setMedia: this.setMedia,
// 			clearMedia: this.clearMedia,
// 			play: this.play,
// 			pause: this.pause,
// 			playHead: this.playHead,
// 			focus: this.focus,
// 			volume: this.volume,
// 			mute: this.mute,
// 			unmute: this.unmute,
// 			incrementLoop: this.incrementLoop,
// 			fullScreen: this.fullScreen,
// 			duration: this.duration,
// 			playbackRate: this.playbackRate
// 		})
		
// 		componentWillMount() {			
// 			this._initBeforeRender();
// 		}
// 		render() {
// 			return (
// 				<PlayerContainer mediaSettings={this.props.mediaSettings} cssidAncestor={this.props.cssidAncestor} sizeClass={this.sizeClass} paused={this.props.paused}
// 				fullWindow={this.props.fullWindow} noVolume={this.props.noVolume} muted={this.props.muted} seeking={this.props.seeking} loop={this.props.loop} shuffled={this.props.shuffled}
// 				noFullWindow={this.props.noFullWindow}>
// 					{this.props.children}
// 				</PlayerContainer>
// 			);
// 		}
// 	}
// )