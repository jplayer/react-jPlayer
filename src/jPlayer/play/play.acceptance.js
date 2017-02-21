import expect from 'expect';
import { By } from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

import setupDriver from '../../util/common.acceptance';

test.describe('Play', () => {
  let driver;

  test.before(() => {
    driver = setupDriver();
  });

  test.it(, () => {
    
  });

  test.after(() => driver.quit());
});
