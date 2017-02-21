import expect from 'expect';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

test.describe('Play', () => {
  let driver;

  test.before(() => {
    const capabilities = {
      browserName: 'chrome',
      'browserstack.user': 'martindawson1',
      'browserstack.key': 'NznA2zTmUAgDxdKhssC3',
      'browserstack.local': true,
    };
    driver = new webdriver.Builder()
      .usingServer('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities)
      .build();
  });

  test.it('should show pause when play clicked', () => {
    driver.get('http://localhost:8080');
    driver.findElement(webdriver.By.css('.jp-play i')).then((element) => {
      element.click();
      const content = window.getComputedStyle(elem, ':before:').get;
      expect(content).toBe('\\F04C');
    });
  });

  test.after(() => driver.quit());
});
