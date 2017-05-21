import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { __get__ } from './muteContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';

describe('MuteContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      muted: false,
    });
  });

  it('mapDispatchToProps maps setMute', () => {
    const dispatchProps = mapDispatchToProps;

    expect.spyOn(dispatchProps, 'setMute');

    dispatchProps.setMute(id, false);

    expect(dispatchProps.setMute).toHaveBeenCalledWith(id, false);
  });
});
