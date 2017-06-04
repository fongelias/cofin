//Imports

//Exports
module.exports = function(app) {
	//Responds to requests to root path
	app.get('/', function(req, res){res.json("hello world")});
}