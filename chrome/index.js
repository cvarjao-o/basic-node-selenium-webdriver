'use strict';

require('chromedriver');
const {Builder, By, Key, until, Capabilities, logging} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  const options = new chrome.Options();
  options.addArguments("headless");
  options.addArguments("no-sandbox");
  options.addArguments("disable-gpu");
  options.addArguments("disable-setuid-sandbox");
  options.addArguments("disable-dev-shm-usage");
  const driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();