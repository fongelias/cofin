//Dependencies
var index = require('../controllers/index.server.controller.js');

//Module
module.exports = function(app) {
	//Responds to requests to root path
	app.get('/', index.renderIndex);
}