const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function buttonRender() {
  console.log("BUILD");

  const screen = {
    width: 1366,
    height: 1024
  };

  let driver = await new Builder()
    .forBrowser('chrome')
    .setAlertBehavior('ignore')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

  console.log("Render Site");

  try {
    await driver.get('https://lumpy-polite-rainstorm.glitch.me/infs');

    let btnCalcular = await driver.findElement(By.id('calcular'));
    let didCalcularButtonRender = await btnCalcular.isDisplayed();
    if (!didCalcularButtonRender) {
      throw new Error(`Calcular Button not Rendered well.`);
    }

    console.log("Test Site Functions");

    // Capture a screenshot
    console.log("antes do click");
    const screenshotData1 = await driver.takeScreenshot();

    fs.writeFileSync('infs-base.png', screenshotData1, 'base64');
    console.log('Screenshot base saved.');

    let btnText = await driver.findElement(By.id('calcular')).getText();
    
    console.log("found - " + btnText);

    await driver.findElement(By.id('calcular')).click();

    let information = await driver.switchTo().alert().getText();
    driver.switchTo().alert().accept();
    console.log("Test Empty Values - " + information);
    
    // Capture another screenshot after clicking the button
    const screenshotData2 = await driver.takeScreenshot();
    fs.writeFileSync('infs-emptyValues.png', screenshotData2, 'base64');
    
    console.log('Screenshot No Value Changed saved.');

  } finally {
    await driver.quit();
  }
})();
