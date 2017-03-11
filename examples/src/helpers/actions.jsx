import React from 'react';

import * as jPlayerActions from '../../../src/actions/actions';
import Action from './action';

const Actions = () => (
  <div className="col-md-4">
    <h2>jPlayer Actions</h2>
    <p>Methods that get passed into your players through props</p>
    <ul>
      {Object.keys(jPlayerActions).map(key =>
        <Action key={key} actionName={key} action={jPlayerActions[key]} />,
      )}
    </ul>
  </div>
);

export default Actions;
