import React from 'react';
import { connect } from 'react-redux';

import getParameterNames from './getParameterNames';
import * as jPlayerActions from '../../../src/jPlayer/_actions/actions';

const EditableParameters = ({ parameterNames, setNewParameters }) => (
  <span>
    {parameterNames.map(parameterName =>
      <input
        key={parameterName} placeholder={parameterName}
        onChange={e => setNewParameters(parameterName, e)}
      />,
    )}
  </span>
);

EditableParameters.propTypes = {
  parameterNames: React.PropTypes.arrayOf(
    React.PropTypes.string,
  ).isRequired,
  setNewParameters: React.PropTypes.func.isRequired,
};

class Action extends React.Component {
  constructor(props) {
    super(props);

    this.newParameters = {};
    this.parameterNames = getParameterNames(this.props.action);
  }
  setNewParameters = (parameterName, e) => {
    this.newParameters[parameterName] = e.currentTarget.value;
  }
  callOption = () => {
    const sortedParameters = [];

    this.parameterNames.forEach((parameterName) => {
      sortedParameters.push(this.newParameters[parameterName]);
    });
    const action = jPlayerActions[this.props.actionName];
    this.props.dispatch(action(...sortedParameters));
  }
  render() {
    return (
      <li>
        <strong>{this.props.actionName}</strong>
        = (
        <EditableParameters
          parameterNames={this.parameterNames}
          setNewParameters={this.setNewParameters}
        />
        ) =&gt;
        <button onClick={this.callOption}>Call</button>
      </li>
    );
  }
}

Action.propTypes = {
  actionName: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(Action);
