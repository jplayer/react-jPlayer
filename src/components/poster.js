import React from "react";
import * as constants from "../util/constants";

const Poster = props => <img className={props.posterClass} src={props.src} onLoad={props.onLoad} onClick={props.onClick} />;

export default Poster;