//Dependencies
var quandl = require('../services/quandl.server.service.js');

//Exports
exports.renderIndex = function(req, res) {
	var state = {
		series: {},
	};


	quandl.getStockData()
		.then(function(response) {
			state.series[response.ticker] = response.datatable.data;

			res.render('pages/index', {
				state: state,
			});
		}).catch(function(error) {
			console.log(error);
		}) 

}