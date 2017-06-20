//Dependencies
var config = require('../../config/config');
var https = require('https');

//Const
var hostname = 'www.quandl.com';
var defaultTicker = 'AAPL';

//Helper Functions+++++++++++++++++++++++++++++++++++++
function zeroPad(string) {
	return string.length == 1 ? '0' + string : string;
}

function lastYear() {
	var today = new Date();
	return today.getFullYear() - 1 + zeroPad(today.getMonth().toString()) + zeroPad(today.getDate().toString());
}


//Exports++++++++++++++++++++++++++++++++++++++++++++++
exports.getStockData = function(ticker, startDate) {
	if(!ticker) {
		ticker = defaultTicker;
	}


	return new Promise(function(resolve, reject) {
		var path = '/api/v3/datatables/WIKI/PRICES.json?ticker=' + 
					ticker + '&qopts.columns=date,open&date.gt=' + lastYear() + '&api_key=' + 
					config.quandlAPIKey;

		var requestOptions = {
			protocol: 'https:',
			hostname: hostname,
			path: path,
			method: 'GET',
		}

		console.log('Calling: ' + hostname + path);

		https.request(requestOptions, function(res){
			console.log('Status: ' + res.statusCode);

			res.setEncoding('utf8');

			var data = '';
			res.on('data', function(chunk) {
				data += chunk;
			});
			res.on('end', function() {
				data = JSON.parse(data);
				data.ticker = ticker;

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