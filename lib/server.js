var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var basedir = path.join(__dirname, '..');
var util = require('util');
var httpServer = http.createServer(app);

app.configure(function () {
	app.set('view engine', 'jade');
	app.set('views', path.join(basedir, '/template/jade'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.set('port', 8002);

	app.use(express['static'](path.join(util.format('%s/public', basedir))));
});

var model = require('./model');

require('./router').register(app, model);
require('./api').register(app, model);

// httpServer, websocketServerを起動する
httpServer.listen(app.get('port'), function(){
	console.log('Express server listening on port', app.get('port'));
});
