import { connectWithId } from '../../util/index';
import { setLoop } from '../_actions/actions';
import { loopOptions } from '../../util/constants';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  loop: jPlayers[uid].loop,
});

const mergeProps = ({ loop }, { dispatch }, ownProps) => ({
  onClick: () => {
    const loopOption = loop === loopOptions.LOOP ? loopOptions.OFF : loopOptions.LOOP;
    dispatch(setLoop(loopOption, ownProps.uid));
  },
  ...ownProps,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
