'use strict';

require('chromedriver');
const {Builder, By, Key, until, Capabilities, logging} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

logging.installConsoleHandler();
//logging.getLogger('webdriver.http').setLevel(logging.Level.ALL);
//logging.getLogger('webdriver').setLevel(logging.Level.ALL);

(async function example() {
  var chromeCapabilities = Capabilities.chrome();
  var chromeOptions = {
    'args': ['--no-sandbox', '--headless', '--disable-gpu', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  };
  chromeCapabilities.set('chromeOptions', chromeOptions);
  const driver = await new Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .setChromeOptions(new chrome.Options().headless())
  .build();

  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();