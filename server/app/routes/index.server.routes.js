//Imports
var index = require('../controllers/index.server.controller');

//Exports
module.exports = function(app) {
	//Responds to requests to root path
	app.get('/', index.renderIndex);
}