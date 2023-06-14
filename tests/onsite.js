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
   
//describe('sampleFunctionalTests', function ()
(async function buttonRender() 
 {
    console.log("BUILD 1");
	//this.timeout(0);

	
	var capabilities = webdriver.Capabilities.chrome();
	capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    
    let driver = await new Builder()
              .forBrowser(Browser.CHROME)
              .withCapabilities(capabilities)
              .setChromeOptions(new chrome.Options().headless().windowSize(screen))
              .build();

	await driver.manage().setTimeouts({pageLoad: 300000});
	

    try {
        //await driver.get('http://localhost:3000/ht');
        
        console.log("BUILD 3");
        //it('Assert page title', async() => {
            var startTimestamp = Date.now()
            var endTimestamp = startTimestamp + 300 * 1000; // 5 minutos
            var tentativa = 0;
            while(true)
            {
                tentativa = tentativa + 1;
                console.log("While ");
                try
                {
                    await driver.get('https://lumpy-polite-rainstorm.glitch.me/ETEC'); //process.env['webAppUrl']
                    await driver.wait(until.titleIs('Calculadora ETEC'), 2000);
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
    	   
    	   driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('inicio14.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );
	    
        //});    
       
      } finally {
        console.log('Finalizado');
        await driver.quit();//.then( () => done()).catch( () => {done();});
      }

    
	
})();
