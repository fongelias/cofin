//Determine environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


//Dependency Injection
var config = require('./config/config');
var express = require('./config/express.js');


//Instantiate
var app = express();

//Set Port
app.listen(config.port);

//Expose Module
module.exports = app;


console.log(process.env.NODE_ENV + 'server running at: '  + config.port);