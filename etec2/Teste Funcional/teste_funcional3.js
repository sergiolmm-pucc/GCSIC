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

    await driver.get('https://jelly-flash-newsboy.glitch.me/page2.html');

    // Seleciona uma opção no elemento <select>
    const selectElement = await driver.findElement(By.id('estado'));
    const optionElement = await selectElement.findElement(By.css('option[value="sao_paulo"]'));
    await optionElement.click();

    await driver.sleep(3000);  

    // Verifica se o valor selecionado é exibido corretamente no elemento de saída

    const outputElement = await driver.findElement(By.id('estado'));
    const estado = await outputElement.getAttribute('value');
    console.log(estado);

    if (estado !== 'sao_paulo') {
    throw new Error('O valor selecionado no elemento <select> não é exibido corretamente no elemento de saída.');
    } 

    console.log('O valor selecionado no elemento <select> é exibido corretamente no elemento de saída.');


  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
