import { connectWithId } from '../../util/index';
import { setLoop } from '../actions';
import { loopOptions } from '../../util/constants';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  loop: jPlayers[uid].loop,
});

const mergeProps = ({ loop }, { dispatch }, { uid, children, ...attributes }) => ({
  onClick: () => {
    const loopOption = loop === loopOptions.LOOP ? loopOptions.OFF : loopOptions.LOOP;
    dispatch(setLoop(loopOption, uid));
  },
  children,
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
