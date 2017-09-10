import expect from 'expect';

import Title from './title';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = (props) => {
  const values = componentSetup(Title, {
    ...props,
  });

  values.title = values.wrapper.dive();

  return values;
};

describe('Title', () => {
  describe('when title is supplied', () => {
    const title = 'test';

    it('has title class', () => {
      const values = setup({ title });

      expect(values.title.hasClass(classes.TITLE)).toBe(true);
    });

    it('renders title as a child', () => {
      const values = setup({ title });

      expect(values.title.prop('children')).toBe(title);
    });
  });

  it('renders nothing if no title is supplied', () => {
    const { title } = setup();

    expect(title.type()).toBe(null);
  });
});
