module.exports = {
    "start" : async function(Config) {
        const express = require('express');
        const app = express();
        const port = Config.webPort;
        
        app.get('/', function(req, res) {
            res.send('Hello World!');
        });
        
        app.listen(port, function() {
            console.log("Web service started on port " + port.toString() + ".");
        });
    }
}