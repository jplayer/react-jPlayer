import React from "react";
import {connect} from "react-redux";
import {keys, classNames} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue} from "../actions/jPlayerActions";
import * as reducer from "../reducers/index";

const mapStateToProps = (state) => ({
    mediaSettings: state.jPlayer.mediaSettings,
    media: state.jPlayer.media,
    src: state.jPlayer.posterSrc
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();
            
            this.state = {
                [keys.POSTER_CLASS]: [classNames.POSTER],
            };      
        }
        onLoad = () => {
            // if(!this.props.mediaSettings.video.available) {
            //     this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN)));
            // }
        }
        componentWillMount() {
            this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.POSTER_CLASS, classNames.HIDDEN)));
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.media.length <= 0) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.POSTER_CLASS, classNames.HIDDEN)));
            }

            if (nextProps.src !== this.props.src) {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN)));
            }
        }
        render() {
            return <img className={this.state.posterClass.join(" ")} src={this.props.src} onLoad={this.onLoad} onClick={this.props.onClick} />;
        }
    }
)