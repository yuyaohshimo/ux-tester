var util = require('util');

exports.register = function(app, model) {
	app.get('/', function (req, res) {
		res.render('top');
	});

	app.get('/button', function(req, res) {
		res.render('button');
	});

	app.get('/chart', function(req, res) {
		res.render('chart');
	});

	app.get('/list', function(req, res) {
		res.render('list');
	});

};
