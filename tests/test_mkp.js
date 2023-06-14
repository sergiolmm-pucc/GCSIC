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
            console.log("começando screenshot calcular sem dados")

    	   driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('calcular_sem_dados1_mkp.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

        
        await driver.sleep(5000);
    	try{    
    		let searchIcon = driver.findElement(By.id("caculate"));
    			searchIcon.click();
    		}catch(error){
        	console.log("erro no botao");
    	}

      await driver.wait(async () => {
        const pageSource = await driver.getPageSource();
        return pageSource.includes('ERRO - Preencha todos os dados');
      });

        driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('calcular_sem_dados2_mkp.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

        console.log("fim screenshot calcular sem dados")

            // Wait for the alert to be displayed
      


      

      let alert = await driver.switchTo().alert();
      
      await alert.accept();

      await driver.sleep(5000);
       
      } finally {
        console.log('Finalizado');
        await driver.quit();
      }

    
	
})();