import React from "react";
import {classNames, keys} from "../util/constants";
import {updateArray} from "../reducers/index";
import {addUniqueToArray, removeFromArrayByValue} from "../actions/jPlayerActions";

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            [keys.PLAYER_CLASS]: [],
        };

        if (this.props.sizeClass !== undefined) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states[this.props.sizeClass])));
        }        
    }
    static get propTypes() {
        return {
            stateClass: React.PropTypes.objectOf(React.PropTypes.string)
        }
    }
    _updatePlayerStyles = (nextProps) => {
        if(!nextProps.paused) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.PLAYING)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.PLAYING)));
        }
        if(!nextProps.noFullWindow && nextProps.fullWindow) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.FULL_SCREEN)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.FULL_SCREEN)));
        }
        if(nextProps.noVolume) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.NO_VOLUME)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.NO_VOLUME)));
        }
        if(nextProps.muted) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.MUTED)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.MUTED)));
        }
        if (nextProps.seeking) {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.SEEKING)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.SEEKING)));
        }
        if(nextProps.loop === "loop") {
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.LOOPED)));
        } else if (nextProps.loop === "loop-playlist") {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.LOOPED)));
            this.setState(state => updateArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.LOOPED_PLAYLIST)));
        } else {
            this.setState(state => updateArray(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.LOOPED_PLAYLIST)));
        }
    }
    componentWillReceiveProps(nextProps) {
        this._updatePlayerStyles(nextProps);
    }
    render() {
        return (
            <div id={this.props.cssSelectorAncestor} className={this.state[keys.PLAYER_CLASS].join(" ")}>
                {this.props.children}
            </div>
        );
    }
}