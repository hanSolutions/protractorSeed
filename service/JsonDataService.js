var fs = require('fs');

var JsonDataService = function() {

  this.getJsonFromFile = function(filepath) {

    //Synchronous Call
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));

  };

}

module.exports = new JsonDataService();
