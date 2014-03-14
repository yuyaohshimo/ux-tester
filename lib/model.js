var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/ux-tester');
db.connection.on('connected', function() {
	console.log('MongoDB connected.');
});
var Tester = new mongoose.Schema({
	name: String,
	button: String,
	list: String
});

exports.Tester = db.model('testers', Tester);
