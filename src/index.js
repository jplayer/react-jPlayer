import React from "react";
import ReactDOM from "react-dom";

import {Provider, connect} from "react-redux";
import store from "./store";
import * as jPlayerActions from "./jPlayer/actions";

const mapStateToProps = (state, ownProps) => {
    debugger
    const isCurrentPlayer = state.jPlayer.jPlayerSelector === ownProps.jPlayerSelector;
    let globalProperties = {...state};

    // if (state.jPlayer.globalVolume === ownProps.globalVolume) {
    //     globalProperties.volume = state.jPlayer.volume;
    //     globalProperties.muted = state.jPlayer.muted;
    // }

    //globalProperties.paused = state.jPlayer.paused;

    // if (isCurrentPlayer) {
    //     globalProperties.loop = state.jPlayer.loop;
    //     globalProperties.fullScreen = state.jPlayer.fullScreen;
    //     globalProperties.preload = state.jPlayer.preload;
    //     globalProperties.remainingDuration = state.jPlayer.remainingDuration;
    //     globalProperties.fullWindow = state.jPlayer.fullWindow;
    //     globalProperties.playbackRate = state.jPlayer.playbackRate;
    // }

    return globalProperties.jPlayer;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateOption: (key, value) => dispatch(jPlayerActions.updateOption(key, value, ownProps.jPlayerSelector, ownProps.globalVolume)),
    addClass: (key, existingClasses, classToAdd) => dispatch(jPlayerActions.addClass(key, existingClasses, classToAdd)),
    removeClass: (key, classToRemove) => dispatch(jPlayerActions.removeClass(key, classToRemove))
})

export default (WrappedPlayer, options) => {
    let JPlayerWrapper = class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                jPlayerOptions: options
            }
        }
        updateOptions = (update, callback) => this.setState((prevState) => prevState.jPlayerOptions = update(prevState.jPlayerOptions), callback)
        render() {
            return <WrappedPlayer {...this.state.jPlayerOptions} {...this.props} updateOptions={this.updateOptions} />
        }
    }

    JPlayerWrapper = connect(mapStateToProps, mapDispatchToProps)(JPlayerWrapper);
    ReactDOM.render(<Provider store={store}><JPlayerWrapper {...options}/></Provider>, document.getElementById(options.jPlayerSelector));
}