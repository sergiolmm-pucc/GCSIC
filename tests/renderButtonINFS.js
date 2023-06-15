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
      await driver.get('https://lumpy-polite-rainstorm.glitch.me/infs');
      
      let btnCalcular = await driver.findElement(By.id('calcular'));   
      let didCalcularBtnRender = btnCalcular.isDisplayed()
      if (!didCalcularBtnRender){
        throw new Error(`Calcular button not rendered properly.`);
      }

      await driver.findElement(By.id('calcular')).click();

      let information = await driver.switchTo().alert().getText()
        .then((info) =>{ return info });

      console.log(information);

      if (information === "Apenas números! Valor Inválido"){
        console.log("Invalid Value Test Cleared")
      }

    } finally {
      await driver.quit();
    }
})();
