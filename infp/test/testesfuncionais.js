const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

async function tirarScreenshots() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://lumpy-polite-rainstorm.glitch.me/infp');

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('infp-inicio.png', data, 'base64');
    });

    const produtoInput = await driver.findElement(By.css('#produto'));
    const valorInput = await driver.findElement(By.css('#preco'));
    const estadoInput = await driver.findElement(By.css('#estado'));

    // Preenche os campos
    await produtoInput.sendKeys('Caneca');
    await valorInput.sendKeys('100');
    await estadoInput.sendKeys('SP');

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('infp-preenchido.png', data, 'base64');
    });

    const submitButton = await driver.findElement(By.css('#calcularImpostoBtn'));
    await submitButton.click();

    await driver.sleep(2000);

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('infp-fim.png', data, 'base64');
    });

    console.log('Screenshots efetuados!');
  } finally {
    await driver.quit();
  }
}

tirarScreenshots();
