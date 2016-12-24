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
    _updatePlayBarStyles = (nextProps) => {
        const widthValue = nextProps.smoothPlayBar ? nextProps.currentPercentAbsolute : nextProps.currentPercentRelative;
        this.setState({playBarStyle: {width: `${widthValue}%`}});
    }
    componentWillReceiveProps(nextProps) {
        this._updatePlayBarStyles(nextProps);
    }
    render() {
        return (
            this.props.smoothPlayBar ? 
			<Motion style={{smoothWidth: spring(this.props.currentPercentAbsolute, [250])}}>
				{(values) => <div className="jp-play-bar" style={{width: values.smoothWidth + "%"}} />}
			</Motion>
			:	<div className="jp-play-bar" style={this.state.playBarStyle} />
        );
    }
}