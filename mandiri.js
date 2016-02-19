var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

console.log('Start');

webdriverio
    .remote(options)
    .init()
    .url('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginPopupRequestSME')
    .url('https://mib.bankmandiri.co.id/sme/common/login.do?action=loginRequestSME2')
    .setValue('//type[@name="corpId"]','Aa94292')
    .setValue('//type[@name="userName"]','Bsm2014')
    .setValue('//type[@name="passwordEncryption"]','Bsm1theA')
    .getText('body').then(function(text) {
        console.log('text was: ' + text);
    })
    .end();
console.log('End');
