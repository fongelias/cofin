//Dependencies
var express = require('express');

//Module

module.exports = function() {
	//Initializes express application
	var app = express();
	//Enable Templating
	app.set('views', './server/app/views/');
	app.set('view engine', 'ejs');
	
	//Pass application instance through routing files
	require('../app/routes/index.server.routes')(app);
	require('../app/routes/stocks.server.routes')(app);
	//Set location of static assets
	app.use(express.static('public'));



	return app;
}