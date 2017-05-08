import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { __get__, __Rewire__, __ResetDependency__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';

describe('RepeatContainer', () => {
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
    const expected = mapStateToProps({ jPlayers }, { id });

    expect(expected).toEqual({
      loop: false,
    });
  });

  it('mapDispatchToProps setLoop sets loop', () => {
    const setOptionSpy = expect.createSpy();

    __Rewire__('setOption', setOptionSpy);

    mapDispatchToProps.setLoop(id, false);

    expect(setOptionSpy).toHaveBeenCalledWith(
      id,
      'loop',
      true,
    );
  });
});
