//Dependencies
var quandl = require('../services/quandl.server.service.js');

//Exports
exports.endOfDay = function(req, res) {
	quandl.getStockData(req.ticker)
		.then(function(response) {
			res.send(response);
		}).catch(function(error) {
			console.log(error);
		});
}

exports.ticker = function(req, res, next, ticker) {
	req.ticker = ticker;
	next();
}