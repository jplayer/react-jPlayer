import expect from 'expect';

import { setOption } from '../../../actions/actions';
import ErrorLoggerContainer from './errorLoggerContainer';
import containerSetup from '../../../util/specHelpers/containerSetup.spec';

const id = 'TestPlayer';

const setup = (jPlayers, props) => containerSetup(ErrorLoggerContainer, jPlayers, props);

describe('ErrorLoggerContainer', () => {
  let jPlayers;
  let mockConsoleError;

  beforeEach(() => {
    mockConsoleError = expect.spyOn(console, 'error');
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  it('logs error to console', () => {
    const { store } = setup(jPlayers);
    const error = {
      context: 'testContext',
      message: 'testMessage',
      hint: 'testHint',
    };

    store.dispatch(setOption(id, 'error', error));

    expect(mockConsoleError).toHaveBeenCalledWith(error);
  });

  afterEach(() => {
    mockConsoleError.restore();
  });
});
