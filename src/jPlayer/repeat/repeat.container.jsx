import { connectWithId } from '../../util/index';
import { setLoop } from '../_actions/actions';
import { loopOptions } from '../../util/constants';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  loop: jPlayers[uid].loop,
});

const mergeProps = ({ loop }, { dispatch }, { uid }) => ({
  onClick: () => {
    const loopOption = loop === loopOptions.LOOP ? loopOptions.OFF : loopOptions.LOOP;
    dispatch(setLoop(loopOption, uid));
  },
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
