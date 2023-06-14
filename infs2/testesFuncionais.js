const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

async function tirarScreenshots() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://lumpy-polite-rainstorm.glitch.me/infs2');

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('infs2-inicio.png', data, 'base64');
    });

    const empresaInput = await driver.findElement(By.css('#empresa'));
    const valorInput = await driver.findElement(By.css('#preco'));
    const cidadeInput = await driver.findElement(By.css('#cidade'));
    const submitButton = await driver.findElement(By.css('#calcularImpostoBtn'));

    await empresaInput.sendKeys('Triplex');
    await valorInput.sendKeys('100');
    await cidadeInput.sendKeys('sao_paulo');

    await submitButton.click();

    await driver.sleep(2000);

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('infs2-fim.png', data, 'base64');
    });

    console.log('Screenshots tirados com sucesso!');
  } finally {
    await driver.quit();
  }
}

tirarScreenshots();
