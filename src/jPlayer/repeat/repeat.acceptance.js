import expect from 'expect';
import { By } from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

import setupDriver from '../../util/common.acceptance';

test.describe('Repeat', () => {
  let driver;

  test.before(() => {
    driver = setupDriver();
  });

  test.it('should toggle loop when repeat clicked', () => {
    driver.findElement(By.className('jp-repeat')).then((element) => {
      let looped;
      const audio = driver.findElement(By.css('audio'));
      const loopAssert = () => audio.getAttribute('loop').then((expected) => {
        expect(expected).toBe(looped.value = looped.value ? null : 'true');
      });

      looped = audio.getAttribute('loop');
      element.click();
      loopAssert();

      looped = audio.getAttribute('loop');
      element.click();
      loopAssert();
    });
  });

  test.after(() => driver.quit());
});
