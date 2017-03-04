import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('TitleContainer', () => {
  const title = 'Test Title';

  it('mapState maps title as default value to children', () => {
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
      },
    }), { uid });

    expect(expected).toEqual({
      children: title,
    });
  });

  it('mapState maps custom children if specified over title', () => {
    const children = <div className="@@jPlayer-test" />;
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
      },
    }), { children, uid });

    expect(expected).toEqual({
      children,
    });
  });
});
