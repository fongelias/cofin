//Dependencies
var quandl = require('../services/quandl.server.service.js');

//Exports
exports.renderIndex = function(req, res) {
	var state = {
		ticker: [],
		prices: {},
	};


	quandl.getStockData()
		.then(function(response) {
			state.ticker = response.ticker;
			state.prices[response.ticker] = response.datatable.data;

			res.render('pages/index', {
				state: state,
			});
		}).catch(function(error) {
			console.log(error);
		}) 

}