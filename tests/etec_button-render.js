const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const webdriver = require('selenium-webdriver');
const {Builder, Browser, By } = require('selenium-webdriver');
 
const screen = {
  width: 1024,
  height: 720
};
 
(async function buttonRender() {
    console.log("BUILD 1");

    var capabilities = webdriver.Capabilities.chrome();
	capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    let driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .withCapabilities(capabilities)
      .setChromeOptions(new chrome.Options().headless().windowSize(screen))
      .build();
    console.log("BUILD 2");
  try {
    await driver.get('http://localhost:3000/ht');
    
    let btn = await driver.findElement(By.id('sendbutton'));   
    let didSendButtonRender = btn.isDisplayed()
    if (!didSendButtonRender){
      throw new Error(`Send button was not rendered properly.`);
    }

    let l=driver.findElement(By.id("salarioBruto"));
    l.sendKeys(4000);

    await driver.findElement(By.id('calculate')).click();
    let text1 = await driver.findElement(By.id('total')).getText().then((text) =>{ return text});   
    console.log(text1);
    if (parseFloat(text1) == 1120.40)
        console.log("TESTE DE CÁLCULO SUCESSO")
  } finally {
    await driver.quit();
  }
})();const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const webdriver = require('selenium-webdriver');
const {Builder, Browser, By } = require('selenium-webdriver');
 
const screen = {
  width: 1024,
  height: 720
};
 
(async function buttonRender() {
    console.log("BUILD 1");

    var capabilities = webdriver.Capabilities.chrome();
	capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    let driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .withCapabilities(capabilities)
      .setChromeOptions(new chrome.Options().headless().windowSize(screen))
      .build();
    console.log("BUILD 2");
  try {
    await driver.get('http://localhost:3000/ht');
    
    let btn = await driver.findElement(By.id('sendbutton'));   
    let didSendButtonRender = btn.isDisplayed()
    if (!didSendButtonRender){
      throw new Error(`Send button was not rendered properly.`);
    }

    let l=driver.findElement(By.id("salarioBruto"));
    l.sendKeys(4000);

    await driver.findElement(By.id('calculate')).click();
    let text1 = await driver.findElement(By.id('total')).getText().then((text) =>{ return text});   
    console.log(text1);
    if (parseFloat(text1) == 1120.40)
        console.log("TESTE DE CÁLCULO SUCESSO")
  } finally {
    await driver.quit();
  }
})();
