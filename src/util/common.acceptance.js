import webdriver from 'selenium-webdriver';

const setupDriver = () => {
  const capabilities = {
    browserName: 'chrome',
    project: 'react-jPlayer',
    'browserstack.user': 'martindawson1',
    'browserstack.key': 'NznA2zTmUAgDxdKhssC3',
    'browserstack.local': true,
  };

  const driver = new webdriver.Builder()
    .usingServer('http://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

  driver.get('http://localhost:8080');

  return driver;
};

export default setupDriver;
