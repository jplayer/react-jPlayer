import expect from 'expect';
import { By } from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

import setupDriver from '../../util/common.acceptance';

test.describe('Play', () => {
  let driver;
  const testData = [
    {
      fn: () => driver.executeScript('document.querySelector("audio").setAttribute("paused", true)'),
      expected: false,
    },
    {
      fn: () => driver.executeScript('document.querySelector("audio").setAttribute("paused", false)'),
      expected: true,
    },
  ];

  const getPlayIcon = () => driver.findElement(By.className('jp-play'));
  const clickPlay = playIcon => playIcon.click();
  const getPaused = (initalPaused) => {
    driver.findElement(By.css('audio')).getAttribute('paused').then((paused) => {
      const p = initalPaused;
      expect(paused).toBe(initalPaused ? null : 'true');
    });
  };

  test.before(() => {
    driver = setupDriver();
  });

  test.it('should toggle play when play icon clicked', () => {
    testData.forEach((testDatum) => {
      testDatum.fn();
      getPlayIcon().then(clickPlay).then(() => getPaused(testDatum.expected));
    });
  });

  test.after(() => driver.quit());
});
