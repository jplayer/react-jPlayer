import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('TitleContainer', () => {
  it('maps state', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id });
    const children = `${artist} - ${title}`;

    expect(expected).toEqual({
      children,
    });
  });

  it('maps custom children if specified', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const children = <div />;
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { children, id });

    expect(expected).toEqual({
      children,
    });
  });

  it('formats title properly when artist is empty', () => {
    const title = 'Test Title';
    const artist = '';
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id });
    const children = `${title}`;

    expect(expected).toEqual({
      children,
    });
  });

  it('formats title properly when title is empty', () => {
    const title = '';
    const artist = 'Test Artist';
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id });
    const children = `${artist}`;

    expect(expected).toEqual({
      children,
    });
  });

  it('formats title properly when title and artist are empty', () => {
    const title = '';
    const artist = '';
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id });
    const children = '';

    expect(expected).toEqual({
      children,
    });
  });
});
