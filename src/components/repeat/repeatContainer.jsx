import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import Repeat from './repeat';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  loop: jPlayers[id].loop,
});

const mapDispatchToProps = {
  setLoop: (id, loop) => setOption(id, 'loop', !loop),
};

export default connectWithId(mapStateToProps, mapDispatchToProps)(Repeat);
