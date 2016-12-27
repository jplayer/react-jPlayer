import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../util/index";
import {keys, classNames} from "../util/constants";

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
                posterClass: [classNames.POSTER],
            };      
        }
        onLoad = () => {
            // if(!this.props.mediaSettings.video.available) {
            //     this.setState(state => removeFromArrayByValue(state.posterClass, classNames.HIDDEN));
            // }
        }
        _updatePosterStyles = (nextProps) => {
            if (nextProps.media.length <= 0) {
                this.setState(state => updateObjectByKey(state, "posterClass", addUniqueToArray(state.posterClass, classNames.HIDDEN)));
            }

            if (nextProps.src !== this.props.src) {
                this.setState(state => updateObjectByKey(state, "posterClass", removeFromArrayByValue(state.posterClass, classNames.HIDDEN)));
            }
        }
        componentWillMount() {
            this.setState(state => updateObjectByKey(state, "posterClass", addUniqueToArray(state.posterClass, classNames.HIDDEN)));
        }
        componentWillReceiveProps(nextProps) {
           this._updatePosterStyles(nextProps);
        }
        render() {
            return <img className={this.state.posterClass.join(" ")} src={this.props.src} onLoad={this.onLoad} onClick={this.props.onClick} />;
        }
    }
)