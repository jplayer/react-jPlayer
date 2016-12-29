import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {playbackRate} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    verticalPlaybackRate: state.jPlayer.verticalPlaybackRate,
    minPlaybackRate: state.jPlayer.minPlaybackRate,
    maxPlaybackRate: state.jPlayer.maxPlaybackRate,
    playbackRate: state.jPlayer.playbackRate,
    playbackRateEnabled: state.jPlayer.playbackRateEnabled,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                playbackRateBarValueClass: []
            }
        }
        _updatePlaybackRateBarValueStyles = (nextProps) => {
            const ratio = (nextProps.playbackRate - nextProps.minPlaybackRate) / (nextProps.maxPlaybackRate - nextProps.minPlaybackRate);
            
            const playbackRateBarValue = (ratio * 100) + "%";

            this.setState({playbackRateBarValueStyle: {
                width: !nextProps.verticalPlaybackRate ? playbackRateBarValue : null,
                height: nextProps.verticalPlaybackRate ? playbackRateBarValue : null
            }});
        }
        componentWillReceiveProps(nextProps) {
            this._updatePlaybackRateBarValueStyles(nextProps);
        }
        render() {
            return <div className={classNames.PLAYBACK_RATE_BAR_VALUE} style={this.state.playbackRateBarValueStyle} {...this.props.attributes}/>
        }
    }  
);