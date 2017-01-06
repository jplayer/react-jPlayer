// import React from 'react';
// import { uaBlocklist, nativeFeatures } from '../util/index';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);

//         // Create event handlers if native fullscreen is supported
//     if (nativeFeatures.fullscreen.api.fullscreenEnabled) {
//       this.fullscreenAddEventListeners();
//     }

//         // The native controls are only for video and are disabled when audio is also used.
//     this.restrictNativeVideoControls();
//         // Initialize the interface components with the options.
//     this.updateNativeVideoControls();
//   }
//   static get propTypes() {
//     return {
//       nativeVideoControls: React.PropTypes.objectOf(React.PropTypes.string),
//     };
//   }
//   static get defaultProps() {
//     return {
//             // Works well on standard browsers.
//             // Phone and tablet browsers can have problems with the controls disappearing.
//       nativeVideoControls: uaBlocklist(this.props.nativeVideoControls),
//     };
//   }
//   fullscreenAddEventListeners = () => {
//     const	fs = nativeFeatures.fullscreen;

//     if (fs.api.fullscreenEnabled) {
//       if (fs.event.fullscreenchange) {
//                 // Create the event handler function and store it for removal.
//         if (typeof this.internal.fullscreenchangeHandler !== 'function') {
//           this.internal.fullscreenchangeHandler = () => {
//             this.fullscreenchange();
//           };
//         }
//         document.addEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
//       }
//             // No point creating handler for fullscreenerror.
//             // Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
//     }
//   }
//   fullscreenchange = () => {
//         // If nothing is fullscreen, then we cannot be in fullscreen mode.
//     if (this.props.fullScreen && !nativeFeatures.fullscreen.api.fullscreenElement()) {
//       this.props.updateOption('fullScreen', false);
//     }
//   }
//   restrictNativeVideoControls = () => {
//         // Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
//     if (this.props.require.audio) {
//       if (this.props.nativeVideoControls) {
//         this.props.updateOption('nativeVideoControls', false);
//         this.props.updateOption('noFullWindow', true);
//       }
//     }
//   }
//   updateNativeVideoControls = () => {
//     if (this.html.video.available && this.html.used) {
//             // Turn the HTML Video controls on/off
//       this.setState({ videoControls: this.props.nativeVideoControls });
//             // For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
//       if (this.props.nativeVideoControls && this.props.require.video) {
//         this.props.addClass(keys.POSTER_CLASS, this.props[keys.POSTER_CLASS], classes.HIDDEN);
//         this.assignStyle({ width: this.props.width, height: this.props.height }, 'videoStyle');
//       } else if (this.props.waitForPlay && this.props.video) {
//         this.props.removeClass(keys.POSTER_CLASS, classes.HIDDEN);
//         this.props.removeClass(keys.VIDEO_CLASS, classes.HIDDEN);
//       }
//     }
//   }
//   removeEventListeners = () => {
//         // Remove the fullscreen event listeners
//     const fs = util.nativeFeatures.fullscreen;

//     if (this.internal.fullscreenchangeHandler) {
//       document.removeEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
//     }
//   }
//   componentWillUnmount() {
//     this.removeEventListeners();
//   }
//   componentWillReceiveProps(nextProps) {
//     if (this.props.nativeVideoControls !== nextProps.nativeVideoControls) {
//             // this.props.nativeVideoControls = util._uaBlocklist(this.props.nativeVideoControls);
//       this.restrictNativeVideoControls();
//     }

//     if (this.props.noFullWindow !== nextProps.noFullWindow) {
//             // this.props.nativeVideoControls = util._uaBlocklist(this.props.nativeVideoControls);
//       this.restrictNativeVideoControls();
//     }
//   }
// }
