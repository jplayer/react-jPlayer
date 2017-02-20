import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';

test.describe('Google Search', () => {
  let driver;

  test.before(() => {
    const capabilities = {
      browserName: 'firefox',
      'browserstack.user': 'martindawson1',
      'browserstack.key': 'NznA2zTmUAgDxdKhssC3',
    };
    driver = new webdriver.Builder()
      .usingServer('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities).build();
  });

  test.it('should append query to title', () => {
    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
    driver.findElement(webdriver.By.name('btnG')).click();
    driver.wait(() => driver.getTitle()
      .then(title => title === 'BrowserStack - Google Search'), 1000);
  });

  test.after(() => driver.quit());
});
