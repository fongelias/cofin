//Dependencies
var express = require('express');

//Module

module.exports = function() {
	//Initializes express application
	var app = express();

	//app.use(express.static('public'));
	//Pass application instance through routing files
	require('../app/routes/stocks.server.routes')(app);

	return app;
}