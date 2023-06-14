const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function buttonRender() {
  console.log("BUILD 1");

  const screen = {
    width: 1024,
    height: 720
  };

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

  console.log("BUILD 2");

  try {
    await driver.get('https://lumpy-polite-rainstorm.glitch.me/ETEC');

    let btn = await driver.findElement(By.id('calculate'));
    let didSendButtonRender = await btn.isDisplayed();
    if (!didSendButtonRender) {
      throw new Error(`Send button was not rendered properly.`);
    }
    console.log("BUILD 3");

    // Capture a screenshot
    const screenshotData1 = await driver.takeScreenshot();

    fs.writeFileSync('etec-inicio.png', screenshotData1, 'base64');
    console.log('Screenshot 1 saved.');

    let text = await driver.findElement(By.id('calculate')).getText();
    console.log("ok - " + text);

    console.log("antes do click");
    let text1a = await driver.findElement(By.id('calculate')).getText();
    console.log("ok - " + text1a);
    let l=driver.findElement(By.id("salarioBruto"));
    l.sendKeys(4000);

    await driver.findElement(By.id('calculate')).click();

    // Capture another screenshot after clicking the button
    const screenshotData2 = await driver.takeScreenshot();

    fs.writeFileSync('etec-fim.png', screenshotData2, 'base64');
    console.log('Screenshot 2 saved.');

  } finally {
    await driver.quit();
  }
})();
