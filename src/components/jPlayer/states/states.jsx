import classNames from 'classnames';

import { classes } from '../../../util/constants';

export default (jPlayer, additionalStates, ...additionalClasses) =>
  classNames(classes.JPLAYER, ...additionalClasses, {
    [classes.states.AUDIO]: !jPlayer.mediaSettings.video,
    [classes.states.VIDEO]: jPlayer.mediaSettings.video,
    [classes.states.PLAYING]: !jPlayer.paused,
    [classes.states.IDLE]: jPlayer.currentTime === 0,
    [classes.states.FULL_SCREEN]: jPlayer.fullScreen,
    [classes.states.MUTED]: jPlayer.muted,
    [classes.states.VOLUME_LOW]: !jPlayer.muted && jPlayer.volume < 0.5,
    [classes.states.VOLUME_HIGH]: !jPlayer.muted && jPlayer.volume >= 0.5,
    [classes.states.SEEKING]: jPlayer.seeking,
    [classes.states.LOOPED]: jPlayer.loop,
    [classes.states.NO_BROWSER_SUPPORT]: jPlayer.mediaSettings.nonSupported,
    [classes.states.NO_VOLUME_SUPPORT]: !jPlayer.volumeSupported,
    ...additionalStates,
  });
