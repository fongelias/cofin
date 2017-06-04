//Dependencies
var props = require('dotenv').config().parsed;

console.log(props);
//Module
module.exports = {
	port: props.PORT,
	cookieSecret: props.COOKIE_SECRET,
};