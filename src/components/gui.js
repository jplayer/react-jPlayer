import React from "react";
import {classNames} from "../util/constants";

export default ({children, attributes}) => <div className={classNames.GUI} {...attributes}>{children}</div>