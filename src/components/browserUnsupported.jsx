import React from 'react';
import { classes } from '../util/constants';

export default class extends React.Component {
  static get defaultProps() {
    return {
      children: (
        <div>
          <h2>Browser Unsupported</h2>
          <div>
            To play the media you will need to update your browser to a more recent version.
          </div>
        </div>
      ),
    };
  }
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
    };
  }
  componentDidMount() {
    // If html is not being used by this browser, then media playback is not possible. Trigger an error event.
    // if(!this.html.used) {
    // this._error({
    // type: constants.errors.NO_SOLUTION,
    // context: "{solution:'" + this.props.solution + "', supplied:'" + this.props.supplied.join(", ") + "'}",
    // message: constants.errorMessages.NO_SOLUTION,
    //  hint: constants.errorHints.NO_SOLUTION
    // });
    //  this.setState(state => removeFromArrayByValue(state.noSolutionClass, constants.classes.HIDDEN));
    // } else {
    //  this.setState(state => addUniqueToArray(state.noSolutionClass, constants.classes.HIDDEN));
    // }
  }
  render() {
    return (
      <div {...this.props.attributes} className={classes.NO_SOLUTION}>
        {this.props.children}
      </div>
    );
  }
}
