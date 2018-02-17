//store fave restaurant in db
//add users
//location coordinates
//w3 html5 geolocation to give lat/long location coordinates
//render search results on page->add option to save to database
const request = require('request');
const config = require('../config.js');

let getRestaurants = (foodType, cb) => {

let options = {
	url: `https://developers.zomato.com/api/v2.1/search?q=${foodType}&lat=30.307182&lon=-97.755996&radius=2414.02&sort=real_distance&order=asc`,
	headers: {
		'user-key': config.TOKEN
	}
};

function callback(error, response, body) {
	if(!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		cb(null, info.restaurants);
	} else {
		cb(error,null);
		console.log('zomato not working');
	}
}

request(options, callback);


}









module.exports.getRestaurants = getRestaurants;