import React from "react";
import {connect} from "react-redux";

import {Motion, spring} from "react-motion";

const mapStateToProps = (state, ownProps) => ({
    smoothPlayBar: state.jPlayer.smoothPlayBar,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative,
    currentTime: state.jPlayer.currentTime,
    duration: state.jPlayer.duration,
    playHeadPercent: state.jPlayer.playHeadPercent,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.PureComponent {
        constructor() {
            super();
            
            this.state = {}
        }
        static get propTypes() {
            return {
                playBarStyle: React.PropTypes.object,
                smoothPlayBar: React.PropTypes.bool,
                currentPercentAbsolute: React.PropTypes.number
            }
        }
        render() {
            return (
                <Motion style={{smoothWidth: spring(this.props.currentPercentAbsolute, [250])}}>
                    {values => <div className="jp-play-bar" style={{width: this.props.smoothPlayBar ? `${values.smoothWidth}%` : `${this.props.currentPercentRelative}%`}} {...this.props.attributes} />}
                </Motion>
            );
        }
    }
)