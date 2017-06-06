//Dependencies
var config = require('../../config/config');
var https = require('https');

//Const
var hostname = 'www.quandl.com';

//Exports
exports.getStockData = function(ticker) {
	return new Promise(function(resolve, reject) {
		var path = '/api/v3/datatables/WIKI/PRICES.json?ticker=' + 
					ticker + '&qopts.columns=date,open&api_key=' + 
					config.quandlAPIKey;

		var options = {
			protocol: 'https:',
			hostname: hostname,
			path: path,
			method: 'GET',
		}

		console.log('Calling: ' + hostname + path);

		https.request(options, function(res){
			console.log('Status: ' + res.statusCode);

			res.setEncoding('utf8');

			var data = '';

			res.on('data', function(chunk) {
				data += chunk;
			});

			res.on('end', function() {
				data = JSON.parse(data);

				if(!data || data.quandl_error) {
					reject(data);
				} else {
					resolve(data);
				}
			});

			res.resume();
		}).on('error', function(e) {
			reject(e.message);
		}).end();
	});	
}