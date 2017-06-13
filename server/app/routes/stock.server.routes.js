//Imports
var stocks = require('../controllers/stocks.server.controller');

//Exports
module.exports = function(app) {
	//Responds to requests to root path
	app.get('/api/stocks/:ticker', stocks.endOfDay);

	app.param('ticker', stocks.ticker);
}