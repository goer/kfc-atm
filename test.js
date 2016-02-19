var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.start();

casper.thenOpen('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME',function(){
	this.echo('Title : '+this.getTitle());
});


casper.thenOpen('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2', function() {
	this.echo('Title : '+this.getTitle());
});

casper.run();