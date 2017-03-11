import { connectWithId } from '../../util/index';
import { setLoop } from '../../actions/actions';
import { loopOptions } from '../../util/constants';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  loop: jPlayers[id].loop,
});

const mergeProps = ({ loop }, { dispatch }, { id, ...attributes }) => ({
  onClick: () => {
    const loopOption = loop === loopOptions.LOOP ? loopOptions.OFF : loopOptions.LOOP;
    dispatch(setLoop(loopOption, id));
  },
  ...attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
