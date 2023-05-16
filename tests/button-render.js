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
    console.log("BUILD 3");
    
        //let b = await driver.findElement(By.id('sendbutton'));
    let text = await driver.findElement(By.id('sendbutton')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text);

    console.log("antes do click");
    let text1a = await driver.findElement(By.id('demo')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text1a);

    await driver.findElement(By.id('sendbutton')).click();
    let text1 = await driver.findElement(By.id('demo')).getText().then((text) =>{ return "ok - " + text});   
    console.log(text1);

  } finally {
    await driver.quit();
  }
})();

