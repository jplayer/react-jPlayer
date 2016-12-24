import React from "react";
import {classNames} from "../util/constants";

export default ({children, ...props}) => (
    <div className={classNames.TITLE} {...props}>{children}</div>
);