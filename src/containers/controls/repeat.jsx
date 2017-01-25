import { connectWithId } from '../../util/index';
import { setLoop } from '../../actions/jPlayerActions';
import Repeat from '../../components/controls/repeat';
import { loopOptions } from '../../util/constants';

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
