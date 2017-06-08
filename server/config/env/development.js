//Dependencies
var props = require('dotenv').config().parsed;

//Module
module.exports = {
	port: props.PORT,
	cookieSecret: props.COOKIE_SECRET,
	quandlAPIKey: props.QUANDL_API_KEY,
};