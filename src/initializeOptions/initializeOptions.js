import { defaultStatus, defaultOptions } from '../util/constants';

export const initialState = {};

const options = (jPlayerOptions) => {
  initialState[jPlayerOptions.id] = {
    ...defaultStatus,
    ...defaultOptions,
    ...jPlayerOptions,
  };
};

export default options;
