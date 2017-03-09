import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as jPlayerActions from '../../../src/jPlayer/_actions/actions';
import Action from './action';

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(jPlayerActions, dispatch) });

const Actions = ({ actions }) => (
  <div className="col-md-4">
    <h2>jPlayer Actions</h2>
    <p>Methods that get passed into your players through props</p>
    <ul>
      {Object.keys(actions).map(key => <Action key={key} value={actions[key]} />)}
    </ul>
  </div>
);

Actions.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Actions);
