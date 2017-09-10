import expect from 'expect';
import merge from 'lodash.merge';

import initializeOptions, { initialState } from './initializeOptions';
import { defaultStatus, defaultOptions } from '../util/constants';

describe('initializeOptions', () => {
  it('sets up initial jPlayer options correctly', () => {
    const jPlayerOptions = {
      id: 'TestPlayer',
      media: {
        sources: [
          { mp3: 'www.test.mp3' },
        ],
      },
    };

    initializeOptions(jPlayerOptions);

    expect(initialState).toEqual({
      [jPlayerOptions.id]: merge({}, defaultStatus, defaultOptions, jPlayerOptions),
    });
  });
});
