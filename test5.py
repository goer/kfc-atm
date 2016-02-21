from selenium import webdriver
from selenium.webdriver.common.keys import Keys

compId = 'Aa94292'
userName = 'Bsm2014'
passwordEncryption = 'Bsm1theA'

driver = webdriver.Firefox()
driver.get("https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME")
driver.switch_to(null);
driver.get("https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2")

driver.find_element_by_name('corpId').clear();
driver.find_element_by_name('corpId').send_keys(compId);

driver.find_element_by_name('userName').clear();
driver.find_element_by_name('userName').send_keys(userName);

driver.find_element_by_name('passwordEncryption').clear();
driver.find_element_by_name('passwordEncryption').send_keys(passwordEncryption);

driver.find_element_by_name(By.id('button')).click();

try:

	driver.switch_to().frame('menuFrame')
	driver.find_element_by_link_text('Informasi Rekening').click();
	driver.find_element_by_id('subs9').click();

	driver.switch_to(null);
	driver.switch_to().frame(null);
	driver.switch_to().frame('mainFrame')

	driver.sleep(1000);


	d1=driver.find_element_by_name('transferDateDay1');
	driver.executeScript(
		'arguments[0].value='+d,
		d1
	);

	d2=driver.find_element_by_name('transferDateMonth1')
	driver.executeScript(
		'arguments[0].value='+(m+1),
		d2
	);

	d3=find_element_by_name('transferDateYear1')
	driver.executeScript(
		'arguments[0].value=2016',
		d3
	);

	driver.find_element_by_name('show1').click();


	if find_elements_by_link_text('Akhir').size() > 0 :
		find_element_by_link_text('Akhir').click();

finally:


	driver.switch_to(null);
	driver.switch_to().frame(null);
	driver.switch_to().frame('topFrame')
	driver.driver.find_element_by_css_selector("div.button_out").click();

	driver.sleep(2000);

	driver.close()