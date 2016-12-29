import React from "react";
import {classNames} from "../util/constants";

const Controls = ({children, props}) => (
    <div className={classNames.CONTROLS} {...props}>
        {children}
    </div>
);

export default Controls;

// onShuffleClick = (event) => {
//     event.preventDefault();

//     this.context.shuffle(!this.props.shuffled);
//     this.context.blur(event.target);
// }
// onPreviousClick = (event) => {
//     event.preventDefault();

//     this.context.previous();
//     this.context.blur(event.target);
// }
// onNextClick = (event) => {
//     event.preventDefault();

//     this.context.next();
//     this.context.blur(event.target);
// }
// onVideoPlayClick = () => this.props.dispatch(play())
// shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
// previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
// next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)