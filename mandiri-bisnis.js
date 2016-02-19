var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.start('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2', function() {
    

/*

    this.fill(
    	x('//*[@name="LoginActionForm"]'),{

    		'corpid' : 'Aa94292',
    		'userName' : 'Bsm2014',
    		'passwordEncryption' : 'Bsm1theA'

    	},
    	false
    );

    this.click(x('//*[@id="button"]'));

    console.log('clicked ok, new location is ' + this.getCurrentUrl());

*/


});

casper.run();