import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { __get__, __Rewire__, __ResetDependency__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';

describe('FullScreenContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  afterEach(() => {
    __ResetDependency__('setOption');
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      fullScreen: false,
    });
  });


  it('mapDispatchToProps setFullScreen sets fullScreen', () => {
    const setOptionSpy = expect.createSpy();

    __Rewire__('setOption', setOptionSpy);

    mapDispatchToProps.setFullScreen(id, false);

    expect(setOptionSpy).toHaveBeenCalledWith(
      id,
      'fullScreen',
      false,
    );
  });
});
