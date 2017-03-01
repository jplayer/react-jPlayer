import React from 'react';
import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { __get__ } from './title.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('TitleContainer', () => {
  const title = 'Test Title';

  it('mapState maps title as default value to children', () => {
    const expected = mapStateToProps(setJPlayers({
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
    const expected = mapStateToProps(setJPlayers({
      media: {
        title,
      },
    }), { children, uid });

    expect(expected).toEqual({
      children,
    });
  });
});
