//Dependencies
var express = require('express');

//Module

module.exports = function() {
	//Initializes express application
	var app = express();

	//Pass application instance through routing files
	require('../app/routes/index.server.routes')(app);

	return app;
}