import { connectWithId } from '../../util/index';
import { loop } from '../../actions/jPlayerActions';
import Repeat from '../../components/controls/repeat';
import { loopOptions } from '../../util/constants';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  loop: jPlayers[id].loop,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  onClick: () => {
    const loopOption = stateProps.loop === loopOptions.LOOP ? loopOptions.OFF
                                                            : loopOptions.LOOP;
    dispatch(loop(loopOption, id));
  },
  children: stateProps.children,
  attributes: stateProps.attributes,
});

export default connectWithId(mapStateToProps, null, mergeProps)(Repeat);
