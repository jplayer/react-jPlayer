import React from "react";
import * as util from "../util/index";
import * as constants from "../util/constants";

// const Controls = (props) => (
//     <div className={props.controlsClassName} onKeyDown={props.onKeyDown}>
//         <a className={constants.classNames.PLAY} onClick={props.onPlayClick}>
//             {props.html.play}
//         </a>
//         <a className={constants.classNames.MUTE} onClick={props.onMuteClick}>
//             {props.html.mute}
//         </a>
//         <a className={constants.classNames.VOLUME_MAX} onClick={props.onVolumeMaxClick}>
//             {props.html.volumeMax}
//         </a>
//         <a className={constants.classNames.REPEAT} onClick={props.onRepeatClick}>							
//             {props.html.repeat}
//         </a>																
//         <a className={constants.classNames.FULL_SCREEN} onClick={props.onFullScreenClick}>
//             {props.html.fullScreen}
//         </a>
//         	
//         {props.children}
//     </div>
// );

const Controls = props => (
    <div className={props.className} onKeyDown={props.onKeyDown}>
        {props.children}
    </div>
);

Controls.propTypes = {
    className: React.PropTypes.string,
    onKeyDown: React.PropTypes.func,
    controls: React.PropTypes.object.isRequired
}

export default Controls;