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

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/items', function (req, res) {
console.log('helop',req);

	// zomato.getRestaurants('asian', (err,data) => {
	// 	if(err) {
	// 		res.sendStatus(500);
	// 	} else {
	// 		res.json(data);
	// 	}
	// });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

