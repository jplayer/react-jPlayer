import React from "react";
import {keys, classNames} from "../util/constants";

export default class extends React.Component {
    constructor() {
        super();
        
        this.state = {
            [keys.NO_SOLUTION_CLASS]: [classNames.NO_SOLUTION],
        };
    }
    static get propTypes() {
        return {
            noSolutionClass: React.PropTypes.arrayOf(React.PropTypes.string)
        }
    }
    componentDidMount() {
        // If html is not being used by this browser, then media playback is not possible. Trigger an error event.
        // if(!this.html.used) {
        // 	this._error({
        // 		type: constants.errors.NO_SOLUTION,
        // 		context: "{solution:'" + this.props.solution + "', supplied:'" + this.props.supplied.join(", ") + "'}",
        // 		message: constants.errorMessages.NO_SOLUTION,
        // 		hint: constants.errorHints.NO_SOLUTION
        // 	});
        // 	this.setState(state => removeFromArrayByValue(state.noSolutionClass, constants.classNames.HIDDEN));
        // } else {
        // 	this.setState(state => addUniqueToArray(state.noSolutionClass, constants.classNames.HIDDEN));
        // }
    }
    render() {
        return (
            <div className={this.state.noSolutionClass.join(" ")}>
                {this.props.children}
            </div>
        );
    }
}