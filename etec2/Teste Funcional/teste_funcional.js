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

    // Verificar se o botão "Calcular" está funcionando corretamente
    const salarioInput = await driver.findElement(By.id('txtsalario'));
    await salarioInput.sendKeys('100');

    const calcularButton = await driver.findElement(By.css('input[type="button"]'));
    await calcularButton.click();

    try {
      // Lidar com o alerta de valor abaixo do salário mínimo
      const alert = await driver.switchTo().alert();
      const alertText = await alert.getText();
      await alert.accept();

      console.log('Alerta: ' + alertText);
    } catch (error) {
      // Se não houver alerta, o teste continua normalmente
      const salarioBrutoElement = await driver.findElement(By.id('tdSBruto'));
      const salarioBruto = await salarioBrutoElement.getText();

      if (salarioBruto !== '100') {
        throw new Error('O cálculo do salário bruto está incorreto.');
      }

      console.log('O cálculo do salário bruto está correto.');
    }

    // Aqui você pode adicionar mais verificações para os outros campos

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
