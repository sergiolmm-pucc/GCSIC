const process = require('process');
const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const {Builder, Browser, By } = require('selenium-webdriver');

const screen = {
    width: 1024,
    height: 720
  };
   

(async function buttonRender() 
 {
    console.log("BUILD 1");


	
	var capabilities = webdriver.Capabilities.chrome();
	capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    
    let driver = await new Builder()
              .forBrowser(Browser.CHROME)
              .withCapabilities(capabilities)
              .setChromeOptions(new chrome.Options().headless().windowSize(screen))
              .build();

	await driver.manage().setTimeouts({pageLoad: 300000});
	

    try {
       
        
        console.log("BUILD 3");

            var startTimestamp = Date.now()
            var endTimestamp = startTimestamp + 300 * 1000; // 5 minutos
            var tentativa = 0;
            while(true)
            {
                tentativa = tentativa + 1;
                console.log("While ");
                try
                {
                    await driver.get('https://lumpy-polite-rainstorm.glitch.me/MKP'); 
                    await driver.wait(until.titleIs('Cálculo de MarkUp'), 2000);
                    console.log("apos wait 2000");
                    break;
                }
                catch(err)
                {
                    console.log("no erro");
                    var currentTimestamp = Date.now();
                    console.log(currentTimestamp - endTimestamp);
                    if(currentTimestamp > endTimestamp)
                    {
                        console.log("##vso[task.logissue type=error;]Failed with error " + err)
                        throw new Error('Failed with error ' + err);
                    }
                    if (tentativa > 100){
                        throw new Error('Title was not rendered properly.');
                    }
                    await new Promise(resolve=>{
                        setTimeout(resolve,5000)
                    });
                }
            }
            console.log("Fora While");
            //    
    console.log("começo info")

    driver.takeScreenshot().then(
        function(image, err) {
        require('fs').writeFile('info1_mkp.png', image, 'base64', function(err) {
            console.log("erro"+ err);
        });
        }
    );
    await driver.sleep(5000);
    try{    
        let searchIcon = driver.findElement(By.id("icone1"));
            searchIcon.click();
        }catch(error){
        console.log("erro no botao");
    }
   
       // Tirar uma screenshot da página após a exibição do alerta
       await driver.takeScreenshot().then(image => {
        require('fs').writeFileSync('info_mkp.png', image, 'base64');
      });
      try {
        // Aguardar a presença do alerta
        await driver.wait(until.alertIsPresent(), 5000);
      
        // Capturar o alerta
        const alert = await driver.switchTo().alert();
      
        // Capturar a mensagem do alerta
        const alertText = await alert.getText();
      
        // Imprimir a mensagem do alerta
        console.log('Mensagem do alerta:', alertText);
      
       
      
        // Aceitar o alerta
        await alert.accept();
      } catch (error) {
        console.log('Erro ao lidar com o alerta:', error);
      }
      
      // Aguardar a página ser carregada completamente após lidar com o alerta
      await driver.wait(until.titleIs('Cálculo de MarkUp'), 5000);
      
      // Aguardar mais tempo, se necessário, para garantir que a página esteja totalmente carregada
      await driver.sleep(5000);
       
       
      } finally {
        console.log('Finalizado');
        await driver.quit();
      }

    
	
})();