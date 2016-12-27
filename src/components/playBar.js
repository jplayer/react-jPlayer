import React from "react";
import {Motion, spring} from "react-motion";

export default class extends React.PureComponent {
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
                {values => <div className="jp-play-bar" style={{width: this.props.smoothPlayBar ? `${values.smoothWidth}%` : `${this.props.currentPercentRelative}%`}} />}
            </Motion>
        );
    }
}