const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function buttonRender() {
  console.log("BUILD");

  const screen = {
    width: 1366,
    height: 1200
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
    
    let btnText = await driver.findElement(By.id('calcular')).getText();
    
    console.log("found - " + btnText);
    
    let serviceValue = await driver.findElement(By.id("valor-servico"));

    serviceValue.clear();
    serviceValue.sendKeys("asdf100000");
    
    
    
    await driver.findElement(By.id('calcular')).click();


    fs.writeFileSync('infs-base.png', screenshotData1, 'base64');
    console.log('Screenshot base saved.');
    
    var info1 = await driver.findElement(By.id('resultado-pis')).getText();
    var info2 = await driver.findElement(By.id('resultado-cofins')).getText();
    var info3 = await driver.findElement(By.id('resultado-csll')).getText();
    var info4 = await driver.findElement(By.id('resultado-iss')).getText();
    var info5 = await driver.findElement(By.id('resultado-irpj')).getText();
    var info6 = await driver.findElement(By.id('total-impostos')).getText();
    var info7 = await driver.findElement(By.id('valor-total')).getText();

    console.log("Resultado: \n" + info1 + "\n" + info2 + "\n" + info3 + "\n" + info4 + "\n" + info5 + "\n" + info6 + "\n" + info7);

    
    // Capture another screenshot after clicking the button
    const screenshotData2 = await driver.takeScreenshot();
    fs.writeFileSync('infs-ValidValue.png', screenshotData2, 'base64');
    
    console.log('Screenshot Valid Value Changed saved.');

  } finally {
    await driver.quit();
  }
})();
