import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { play, pause } from '../../actions/actions';
import { __get__ } from './playContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';

describe('PlayContainer', () => {
  let dispatch;
  let jPlayers;

  beforeEach(() => {
    dispatch = expect.createSpy();
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      paused: true,
    });
  });

  it('mapDispatchToProps play when paused will play', () => {
    const dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.play(id, true);

    expect(dispatch).toHaveBeenCalledWith(play(id));
  });

  it('mapDispatchToProps play when playing will pause', () => {
    const dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.play(id, false);

    expect(dispatch).toHaveBeenCalledWith(pause(id));
  });
});

