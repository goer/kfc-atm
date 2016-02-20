

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME');

driver.switchTo(null);

driver.get('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2');

driver.findElement(By.name('corpId')).clear();
driver.findElement(By.name('corpId')).sendKeys('Aa94292');

driver.findElement(By.name('userName')).clear();
driver.findElement(By.name('userName')).sendKeys('Bsm2014');

driver.findElement(By.name('passwordEncryption')).clear();
driver.findElement(By.name('passwordEncryption')).sendKeys('Bsm1theA');

driver.findElement(By.id('button')).click();


try{


	driver.switchTo().frame('menuFrame')
	driver.findElement(By.linkText('Informasi Rekening')).click();
	driver.findElement(By.id('subs9')).click();

	driver.switchTo(null);
	driver.switchTo().frame(null);
	driver.switchTo().frame('mainFrame')

	var d1=driver.findElement(By.name('transferDateDay1'));
	d1.click();
	driver.executeScript(
		'arguments[0].value=1',
		d1
	);

	var d2=driver.findElement(By.name('transferDateMonth1'))
	d2.click();
	driver.executeScript(
		'arguments[0].value=2',
		d2
	);

	var d3=driver.findElement(By.name('transferDateYear1'))
	d3.click();
	driver.executeScript(
		'arguments[0].value=2016',
		d3
	);

	//driver.sleep(10000);

	//driver.findElement(By.name('show1')).click();

	// driver.findElement(By.tagName("BODY")).getText().then(function(content){
	// 	console.log('Content:');
	// 	console.log(content);
	// });

	//name=customFile
	var selectCSV=driver.findElement(By.name('customFile'))
	selectCSV.sendKeys('Text')

	// selectCSV.click().then(function(){
		
	// 	//selectCSV.findElement(By.css("option[value='CSV']")).click()
	// 	selectCSV.findElement(By.css("option:nth-child(2)")).click()
	// 	
	// })
	driver.findElement(By.name('download1')).click();


	driver.switchTo(null);
	driver.switchTo().frame(null);
	driver.switchTo().frame('menuFrame')
	driver.findElement(By.linkText('Unduh Laporan')).click();
	driver.findElement(By.id('subs33')).click();

	//driver.sleep(10000);

	driver.switchTo(null);
	driver.switchTo().frame(null);
	driver.switchTo().frame('mainFrame')

	driver.findElement(By.name('chkBox')).click();
	driver.findElement(By.name('download')).click().then(function(){

	driver.switchTo().alert().accept();	

	//driver.sleep(10000);

	driver.findElement(By.name('chkParent')).click();
	driver.findElement(By.name('delete')).click();

	driver.switchTo().alert().accept();

	driver.switchTo(null);
	driver.switchTo().frame(null);
	driver.switchTo().frame('topFrame')
	driver.findElement(By.css("div.button_out")).click();

	driver.sleep(5000);
	driver.quit();



	})







}catch(err){


}finally{

	


		// driver.switchTo(null);
		// driver.switchTo().frame(null);
		// driver.switchTo().frame('topFrame')
		// driver.findElement(By.css("div.button_out")).click();
		// driver.quit();



	


}


