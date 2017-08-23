import expect from 'expect';

import states from './states';
import { classes } from '../../../util/constants';

describe('States', () => {
  let jPlayer;

  beforeEach(() => {
    jPlayer = {
      mediaSettings: {},
    };
  });

  it('default state', () => {
    const className = states(jPlayer);

    expect(className).toBe('jp-jplayer jp-state-audio jp-state-playing jp-state-no-volume-support');
  });

  it('applies additional classes if specified', () => {
    const testOneClass = 'testOneClass';
    const testTwoClass = 'testTwoClass';
    const className = states(jPlayer, null, 'testOneClass', 'testTwoClass');

    expect(className).toContain(testOneClass);
    expect(className).toContain(testTwoClass);
  });

  it('applies additional states if specified', () => {
    const additionalStates = {
      testOneClass: true,
      testTwoClass: false,
    };
    const className = states(jPlayer, additionalStates);

    expect(className).toContain('testOneClass');
    expect(className).toNotContain('testTwoClass');
  });

  it('applies audio class if video is not true', () => {
    const className = states(jPlayer);

    expect(className).toContain(classes.states.AUDIO);
  });

  it('applies video class if video is true', () => {
    jPlayer.mediaSettings.video = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.VIDEO);
  });

  it('does not apply playing class if paused', () => {
    jPlayer.paused = true;

    const className = states(jPlayer);

    expect(className).toNotContain(classes.states.PLAYING);
  });

  it('applies idle class if current time is 0', () => {
    jPlayer.currentTime = 0;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.IDLE);
  });

  it('applies fullScreen class if fullScreen is true', () => {
    jPlayer.fullScreen = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.FULL_SCREEN);
  });

  it('applies muted class if muted is true', () => {
    jPlayer.muted = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.MUTED);
  });

  describe('VOLUME_LOW', () => {
    it('applies volume_low class if not muted and volume < 0.5', () => {
      jPlayer.volume = 0.33;

      const className = states(jPlayer);

      expect(className).toContain(classes.states.VOLUME_LOW);
    });

    it('does not apply volume_low class if muted', () => {
      jPlayer.muted = true;

      const className = states(jPlayer);

      expect(className).toNotContain(classes.states.VOLUME_LOW);
    });

    it('does not apply volume_low class if volume >= 0.5', () => {
      jPlayer.volume = 0.5;

      const className = states(jPlayer);

      expect(className).toNotContain(classes.states.VOLUME_LOW);
    });
  });

  describe('VOLUME_HIGH', () => {
    it('applies volume_high class if not muted and volume > 0.5', () => {
      jPlayer.volume = 0.73;

      const className = states(jPlayer);

      expect(className).toContain(classes.states.VOLUME_HIGH);
    });

    it('does not apply volume_high class if muted', () => {
      jPlayer.muted = true;

      const className = states(jPlayer);

      expect(className).toNotContain(classes.states.VOLUME_HIGH);
    });

    it('does not apply volume_high class if volume higher than < 0.5', () => {
      jPlayer.volume = 0.49;

      const className = states(jPlayer);

      expect(className).toNotContain(classes.states.VOLUME_HIGH);
    });
  });

  it('applies seeking class if seeking is true', () => {
    jPlayer.seeking = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.SEEKING);
  });

  it('applies looped class if loop is true', () => {
    jPlayer.loop = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.LOOPED);
  });

  it('applies no_browser_support class if nonSupported is true', () => {
    jPlayer.mediaSettings.nonSupported = true;

    const className = states(jPlayer);

    expect(className).toContain(classes.states.NO_BROWSER_SUPPORT);
  });

  it('does not apply no_volume_support class if nonSupported is true', () => {
    jPlayer.volumeSupported = true;

    const className = states(jPlayer);

    expect(className).toNotContain(classes.states.NO_VOLUME_SUPPORT);
  });
});
