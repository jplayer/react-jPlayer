import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};

describe('TitleContainer', () => {
  it('maps state', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const stateprops = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id, ...attributes });
    const children = `${artist} - ${title}`;

    expect(stateprops).toEqual({
      children,
      attributes,
    });
  });

  it('maps custom children if specified', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const children = <div />;
    const stateprops = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { children, id, ...attributes });

    expect(stateprops).toEqual({
      children,
      attributes,
    });
  });

  it('formats title properly when artist is empty', () => {
    const title = 'Test Title';
    const artist = '';
    const stateprops = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id, ...attributes });
    const children = `${title}`;

    expect(stateprops).toEqual({
      children,
      attributes,
    });
  });

  it('formats title properly when title is empty', () => {
    const title = '';
    const artist = 'Test Artist';
    const stateprops = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id, ...attributes });
    const children = `${artist}`;

    expect(stateprops).toEqual({
      children,
      attributes,
    });
  });

  it('formats title properly when title and artist are empty', () => {
    const title = '';
    const artist = '';
    const stateprops = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { id, ...attributes });
    const children = '';

    expect(stateprops).toEqual({
      children,
      attributes,
    });
  });
});
