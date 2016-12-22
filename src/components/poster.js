import React from "react";
import {connect} from "react-redux";
import {keys, classNames} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue} from "../reducers/index";
import * as jPlayerActions from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    mediaSettings: state.jPlayer.mediaSettings,
    media: state.jPlayer.media
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor() {
            super();
            
            this.state = {
                [keys.POSTER_CLASS]: [],
            };      
        }
        onLoad = () => {
            if(!this.props.mediaSettings.video.available) {
                this.setState(state => removeFromArrayByValue(state, removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN)));
            }
        }
        componentWillMount() {
            this.setState(state => addUniqueToArray(state, jPlayerActions.addUniqueToArray(keys.POSTER_CLASS, classNames.HIDDEN)));
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.media.length <= 0) {
                this.setState(state => addUniqueToArray(state, jPlayerActions.addUniqueToArray(keys.POSTER_CLASS, classNames.HIDDEN)));
            }
        }
        render() {
            return <img className={this.state.posterClass} src={this.props.src} onLoad={this.onLoad} onClick={this.props.onClick} />;
        }
    }
)