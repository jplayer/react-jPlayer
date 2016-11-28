import React from "react";
import ReactDOM from "react-dom";

import {Provider, connect} from "react-redux";
import store from "./store";
import * as jPlayerActions from "./jPlayer/actions";

export default (WrappedPlayer, options) => {
    debugger

    const mapStateToProps = (state, ownProps) => {
            debugger

        return {
            volume: state.jPlayer.volume,
            muted: state.jPlayer.muted,
            paused: state.jPlayer.paused,
            loop: state.jPlayer.loop
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            updateOption: (key, value) => {
                          debugger
                dispatch(jPlayerActions.updateOption(key, value));
                
            },
            updateOtherOption: (key, value) => {
                          debugger
                dispatch(jPlayerActions.updateOption(key, value));
            }
        }
    }

    let JPlayerWrapper = class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                jPlayerOptions: options
            }
        }
        static get defaultProps() {
		    return {
                muted: options.muted,
                paused: false
            }
        }
        updateOptions = (update, callback) => this.setState((prevState) => prevState.jPlayerOptions = update(prevState.jPlayerOptions), callback)
        render() {
            debugger
            return <WrappedPlayer {...this.state.jPlayerOptions} {...this.props} updateOptions={this.updateOptions} />
        }
    }

    JPlayerWrapper = connect(mapStateToProps, mapDispatchToProps)(JPlayerWrapper);
    ReactDOM.render(<Provider store={store}><JPlayerWrapper/></Provider>, document.getElementById(options.jPlayerSelector));
}