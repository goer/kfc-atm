
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('file:///Users/goer/projects/kfc/atm/test.html')

var selectCSV=driver.findElement(By.name('dropdown'))
selectCSV.click().then(function(){
	selectCSV.findElement(By.css("option[value='Data Mining']")).click()
})


driver.quit();
