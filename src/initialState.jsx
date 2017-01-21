import merge from 'lodash.merge';

import { defaultOptions, statusDefaultValues } from './util/constants';

export default (...options) => {
  const initialState = {
    jPlayers: {},
  };

  options.forEach((option) => {
    initialState.jPlayers[option.id] = {
      ...merge({}, statusDefaultValues, defaultOptions, option),
    };
  });
  return initialState;
};
