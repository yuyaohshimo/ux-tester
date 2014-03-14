exports.register = function(app, model) {

	app.get('/api/all', function(req, res) {
		model.Tester.find(function(err, docs) {
			if (err) {
				console.log(err);
			}
			res.json(docs);
		});
	});

	app.post('/api/data', function(req, res) {
		var body = req.body;
		model.Tester.update(
			{ name: body.name},
			body,
			{ upsert: true },
			function(err) {
				if (err) {
				}
				res.send(200);
			}
		);
	});
};
