import expect from 'expect';

import Title from './title';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(Title, {
  title: 'dj tiesto - adagio for strings',
  ...props,
});

describe('Title', () => {
  it('has title class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.TITLE)).toBe(true);
  });
});
