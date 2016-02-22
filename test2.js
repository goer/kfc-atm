var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

// var compId = 'Aa94292'
// var userName = 'Bsm2014'
// var passwordEncryption = 'Bsm1theA'

var compId = 'FA91194'
var userName = 'GOER220896'
var passwordEncryption = 'Goer2the'


var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();


function getMandiriBisnis(){

	driver.get('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME');

	driver.switchTo(null);

	driver.get('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2');

	driver.findElement(By.name('corpId')).clear();
	driver.findElement(By.name('corpId')).sendKeys(compId);

	driver.findElement(By.name('userName')).clear();
	driver.findElement(By.name('userName')).sendKeys(userName);

	driver.findElement(By.name('passwordEncryption')).clear();
	driver.findElement(By.name('passwordEncryption')).sendKeys(passwordEncryption);

	driver.findElement(By.id('button')).click();

	try{

		driver.switchTo().frame('menuFrame')
		driver.findElement(By.linkText('Informasi Rekening')).click();
		driver.findElement(By.id('subs6')).click();

		driver.switchTo(null);
		driver.switchTo().frame(null);
		driver.switchTo().frame('mainFrame')

		driver.sleep(1000);

		 var today=new Date();
		 var yesterday=new Date();
		 yesterday.setDate(today.getDate()-10);

		 var d = yesterday.getDate();
		 var m = yesterday.getMonth();

		 //console.log(d+'-'+(m+1))

		var d1=driver.findElement(By.name('transferDateDay1'));
		driver.executeScript(
			'arguments[0].value='+d,
			d1
		);

		var d2=driver.findElement(By.name('transferDateMonth1'))
		driver.executeScript(
			'arguments[0].value='+(m+1),
			d2
		);

		var d3=driver.findElement(By.name('transferDateYear1'))
		driver.executeScript(
			'arguments[0].value=2016',
			d3
		);

		// driver.executeScript(
		// 	"document.getElementByName('transferDateDay1').setAttribute('value', '10')"
		// );

		driver.findElement(By.name('show1')).click();


		try{

			//if(driver.findElements(By.linkText('Akhir')).size() > 0){
				driver.findElement(By.linkText('Akhir')).click();
				driver.sleep(1000);
			//}

		}finally{


			driver.findElement(By.tagName("body")).getText().then(function(content){

				var s= new Buffer(content).toString('base64')
				var unirest = require('unirest');
				console.log('Content:');
				console.log(content);
				unirest.post('http://52.77.35.254/index.php/api/mandiri/payment')
					// .set('Content-Type', 'text/plain')
					.send('text='+s)
					.end(function (response) {
				  		console.log(response.body);
					});

			});

		}




	}catch(err){

	}finally{

		driver.switchTo(null);
		driver.switchTo().frame(null);
		driver.switchTo().frame('topFrame')
		driver.findElement(By.css("div.button_out")).click();

		driver.sleep(2000);
		driver.quit();



	}

}


// var loop = require('serial-loop')
 
// loop(10, each, function (error) {
//   console.log('done, error? ', error)
// });

// function each (next, i) {
//   setTimeout(function () {
//     getMandiriBisnis()
//     next()
//   }, 5000)
// }

getMandiriBisnis()

