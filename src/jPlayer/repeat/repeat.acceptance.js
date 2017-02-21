import expect from 'expect';
import webdriver, { By } from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

test.describe('Repeat', () => {
  let driver;

  test.before(() => {
    const capabilities = {
      browserName: 'chrome',
      project: 'react-jPlayer',
      'browserstack.user': 'martindawson1',
      'browserstack.key': 'NznA2zTmUAgDxdKhssC3',
      'browserstack.local': true,
    };
    driver = new webdriver.Builder()
      .usingServer('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities)
      .build();
    driver.get('http://localhost:8080');
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
