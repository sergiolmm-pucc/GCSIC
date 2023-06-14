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
    await driver.get('http://localhost:3000/etec');
    
    let btn = await driver.findElement(By.id('calculate'));   
    let didSendButtonRender = btn.isDisplayed()
    if (!didSendButtonRender){
      throw new Error(`Send button was not rendered properly.`);
    }
    console.log("BUILD 3");
    
    var IMG;
    var windowHandle = user32.FindWindowA(null, "Calculator");
    var printWin = user32.PrintWindow(windowHandle, IMG, 0);

    console.log(printWin);
    console.log(IMG);

    let text = await driver.findElement(By.id('calculate')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text);

    console.log("antes do click");
    let text1a = await driver.findElement(By.id('calculate')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text1a);
    var printWin = user32.PrintWindow(windowHandle, IMG, 0);

    console.log(printWin);
    console.log(IMG);

    await driver.findElement(By.id('calculate')).click();
    let text1 = await driver.findElement(By.id('demo')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text1);
    var printWin = user32.PrintWindow(windowHandle, IMG, 0);

    console.log(printWin);
    console.log(IMG);

  } finally {
    await driver.quit();
  }
})();
