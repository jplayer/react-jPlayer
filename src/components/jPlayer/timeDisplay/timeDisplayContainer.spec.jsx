import expect from 'expect';

import TimeDisplayContainer from './timeDisplayContainer';
import { setOption } from '../../../actions/actions';
import { defaultOptions } from '../../../util/constants';
import containerSetup from '../../../util/specHelpers/containerSetup.spec';

const id = 'TestPlayer';
const setup = (jPlayers, props) => containerSetup(TimeDisplayContainer, jPlayers, props);

describe('TimeDisplayContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        currentTime: 10,
        duration: 20,
        showRemainingDuration: false,
        timeFormats: defaultOptions.timeFormats,
      },
    };
  });

  describe('setDurationText', () => {
    it('converts and formats durationText to duration', () => {
      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'duration', 222));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.durationText).toBe('03:42');
    });

    it('updates durationText when timeformats changes', () => {
      const { store } = setup(jPlayers);

      const newTimeFormats = {
        ...defaultOptions.timeFormats,
        sepMin: '-',
      };

      store.dispatch(setOption(id, 'timeFormats', newTimeFormats));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.durationText).toBe('00-20');
    });

    it('updates durationText when currentTime changes', () => {
      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'currentTime', 13));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.durationText).toBe('00:20');
    });

    describe('when showRemainingDuration is true', () => {
      it('converts and formats durationText correctly to remaining time when is time remaining', () => {
        const { store } = setup(jPlayers);

        store.dispatch(setOption(id, 'showRemainingDuration', true));

        const jPlayer = store.getState().jPlayers.TestPlayer;

        expect(jPlayer.durationText).toBe('-00:10');
      });

      it('converts and formats durationText to time when no time remaining', () => {
        jPlayers[id].currentTime = 20;

        const { store } = setup(jPlayers);

        store.dispatch(setOption(id, 'showRemainingDuration', true));

        const jPlayer = store.getState().jPlayers.TestPlayer;

        expect(jPlayer.durationText).toBe('00:00');
      });
    });
  });

  describe('setCurrentTimeText', () => {
    it('converts and formats currentTimeText to currentTime', () => {
      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'currentTime', 17));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.currentTimeText).toBe('00:17');
    });

    it('updates currentTimeText when timeformats changes', () => {
      const { store } = setup(jPlayers);

      const newTimeFormats = {
        ...defaultOptions.timeFormats,
        sepMin: '-',
      };

      store.dispatch(setOption(id, 'timeFormats', newTimeFormats));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.currentTimeText).toBe('00-10');
    });
  });
});
