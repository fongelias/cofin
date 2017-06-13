//Dependencies
var config = require('../../config/config');
var https = require('https');

//Const
var hostname = 'www.quandl.com';

//Exports
exports.getStockData = function(ticker, startDate) {
	return new Promise(function(resolve, reject) {

		var zeroPad = function(string) {
			return string.length == 1 ? '0' + string : string;
		}

		var today = new Date();
		var year = today.getFullYear() - 1;
		var day = zeroPad(today.getDate().toString());
		var month = zeroPad(today.getMonth().toString());
		var lastYear = year + month + day;


		console.log( year + month + day);

		var path = '/api/v3/datatables/WIKI/PRICES.json?ticker=' + 
					ticker + '&qopts.columns=date,open&date.gt=' + lastYear + '&api_key=' + 
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