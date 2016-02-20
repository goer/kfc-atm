<?
	$this->driver = WebDriver_Driver::InitAtLocal("4444", "firefox");
	$this->set_implicit_wait(5000);
	$this->load("http://seleniumhq.org/");
	$this->assert_title("Selenium - Web Browser Automation");
	$this->get_element("css=h2")->assert_text("What is Selenium?");
?>