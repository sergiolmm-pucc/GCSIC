const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testFuncional() {
  let driver;

  try {
    // Configuração do driver do Chrome
    const options = new chrome.Options();
    options.addArguments('--no-sandbox');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    await driver.get('https://jelly-flash-newsboy.glitch.me/');

    // Clica no botão "Calcular ETEC"
    const calcularEtecButton = await driver.findElement(By.linkText('Calcular ETEC'));
    await calcularEtecButton.click();

    await driver.sleep(3000);

    // Verifica se a URL é a esperada
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== 'https://jelly-flash-newsboy.glitch.me/page2.html') {
      throw new Error('A URL depois de clicar no botão "Calcular ETEC" não é a esperada.');
    }
    console.log('A URL depois de clicar no botão "Calcular ETEC" é a esperada.');

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
