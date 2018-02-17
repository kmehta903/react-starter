var express = require('express');
var bodyParser = require('body-parser');
const zomato = require('../APIhelper/zomato.js')
//var items = require('../database-mysql');
var items = require('../database-mongo');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.post('/items', function (req, res) {
	var query = req.body.term;
	zomato.getRestaurants(query, (err,data) => {
		if(err) {
			res.sendStatus(500);
		} else {
			res.statusCode=201;
			res.json(data);
		}
	});
});

app.post('/data', function (req, res) {
	var results = req.body.toBeAdded;
	var rawData = req.body.rawData;
	results.forEach((result) => {
		rawData.forEach((restaurant) => {
			if(restaurant.restaurant.id === result) {
				items.save(restaurant.restaurant);
			}
		});
	});

	res.statusCode=201;
	res.end();
});


app.get('/data', function (req, res) {
	items.selectAll(function(err, faves) {
		if(err) {
			return console.error(err);
		} else {
			res.json(faves);
		}
	});

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

