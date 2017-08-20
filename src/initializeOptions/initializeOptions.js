import merge from 'lodash.merge';

import { defaultStatus, defaultOptions } from '../util/constants';

export const initialState = {};

const options = (jPlayerOptions) => {
  initialState[jPlayerOptions.id] = merge({}, defaultStatus,
    defaultOptions, jPlayerOptions);
};

export default options;
