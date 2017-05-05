import expect from 'expect';

import mockJPlayer from '../../util/mockData/mockJPlayer';
import { __get__, __Rewire__, __ResetDependency__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';

describe('FullScreenContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
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

  const fullScreenData = [
    { fullScreen: false },
    { fullScreen: true },
  ];

  fullScreenData.forEach((datum) => {
    it(`mapDispatchToProps toggleFullScreen toggles fullScreen 
    (value: ${datum.fullScreen})`, () => {
      const setOptionSpy = expect.createSpy();

      __Rewire__('setOption', setOptionSpy);

      mapDispatchToProps.toggleFullScreen(id, datum.fullScreen);

      expect(setOptionSpy).toHaveBeenCalledWith(
        id,
        'fullScreen',
        !datum.fullScreen,
      );
    });
  });
});
