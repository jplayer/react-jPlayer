import React from "react";
import {classNames} from "../util/constants";

export default class extends React.PureComponent {
	 constructor() {
        super();
    }
    render() {
        return <div className={classNames.DETAILS}>{this.props.children}</div>
    }
}