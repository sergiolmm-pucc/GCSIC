const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const {Builder, Browser, By } = require('selenium-webdriver');
 
const screen = {
  width: 1920,
  height: 1080
};
 
(async function buttonRender() {
    console.log("BUILD 1");
    let driver = await new Builder()
      .forBrowser(Browser.CHROME)
    //.setChromeOptions(new chrome.Options().headless().windowSize(screen))
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
    


  } finally {
    await driver.quit();
  }
})();