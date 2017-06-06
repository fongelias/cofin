//Dependencies
var quandl = require('../services/quandl.server.service.js');

//Exports
exports.renderIndex = function(req, res) {
	quandl.getStockData('FB')
		.then(function(response) {
			res.send(response);
		}).catch(function(error) {
			console.log(error);
		});
}