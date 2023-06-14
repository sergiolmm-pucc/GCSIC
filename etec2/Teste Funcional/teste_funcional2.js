const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { toPng } = require('node-html-to-image');


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


    // Captura a imagem antes das ações de teste
    const beforeImage = await driver.takeScreenshot();
    await saveScreenshot(beforeImage, 'before.png');

    // Insere um salário bruto maior que o recomendado (2000)
    const salarioInput = await driver.findElement(By.id('txtsalario'));
    await salarioInput.sendKeys('2000');

    // Clica no botão "Calcular"
    const calcularButton = await driver.findElement(By.css('input[type="button"]'));
    await calcularButton.click();

    // Verifica se os cálculos foram feitos corretamente

    const salarioBrutoElement = await driver.findElement(By.id('tdSBruto'));
    const salarioBruto = await salarioBrutoElement.getText();
    if (salarioBruto == '0') {
      throw new Error('O cálculo do salário bruto não está funcionando.');
    }
    console.log('O cálculo do salário bruto está funcionando.');

    const inssElement = await driver.findElement(By.id('tdINSS'));
    const inss = await inssElement.getText();
    if (inss == '0') {
      throw new Error('O cálculo do INSS não está funcionando.');
    }
    console.log('O cálculo do INSS está funcionando.');

    const fgtsElement = await driver.findElement(By.id('tdFGTS'));
    const fgts = await fgtsElement.getText();
    if (fgts == '0') {
      throw new Error('O cálculo do FGTS não está funcionando.');
    }
    console.log('O cálculo do FGTS está funcionando.');

    const multaFgtsElement = await driver.findElement(By.id('tdMultaFGTS'));
    const multaFgts = await multaFgtsElement.getText();
    if (multaFgts == '0') {
      throw new Error('O cálculo da multa do FGTS não está funcionando.');
    }
    console.log('O cálculo da multa do FGTS está funcionando.');

    const acidenteTrabalhoElement = await driver.findElement(By.id('tdAcidenteTrabalho'));
    const acidenteTrabalho = await acidenteTrabalhoElement.getText();
    if (acidenteTrabalho == '0') {
      throw new Error('O cálculo do acidente de trabalho não está funcionando.');
    }
    console.log('O cálculo do acidente de trabalho está funcionando.');

    const totalEncargosElement = await driver.findElement(By.id('tdDAE'));
    const totalEncargos = await totalEncargosElement.getText();
    if (totalEncargos == '0') {
      throw new Error('O cálculo do total de encargos (DAE) não está funcionando.');
    }
    console.log('O cálculo do total de encargos (DAE) está funcionando.');

    const totalElement = await driver.findElement(By.id('tdTotal'));
    const total = await totalElement.getText();
    if (total == '0') {
      throw new Error('O cálculo do total não está funcionando.');
    }
    console.log('O cálculo do total está funcionando.');

    // Captura a imagem depois das ações de teste
    const afterImage = await driver.takeScreenshot();
    await saveScreenshot(afterImage, 'after.png');
  } 
    
    finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
