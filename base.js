var Config = {
    Web : require('./Config/Web.json'),
    Classes : require('./Config/Classes.json')
};

const webService = require('./web.js');

webService.start(Config.Web);