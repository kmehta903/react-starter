var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var restaurantSchema = mongoose.Schema({
  name: String,
  id: {type: Number, index: true}, //unique:true
  url: String,
  address: String
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = (restaurant) => {
  Restaurant.findOneAndUpdate({id: restaurant.id},
    {$set: {
      name: restaurant.name,
      id: restaurant.id,
      url: restaurant.url,
      address: restaurant.location.address
      }
    }, {upsert: true},
    function(err) {
      if(err) {
        console.log('error: ',err);
      }
    }
  );
};

let remove = (restaurantID) => {
  Restaurant.remove( {id: restaurantID}, function (err) {
    if(err) {
      console.log('error: ',err);
    }
  });
};


let selectAll = (cb) => {
  Restaurant.
  find().
  sort().
  exec(function(err, faves) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, faves);
    }
  });
};

module.exports.save = save;
module.exports.remove = remove;
module.exports.selectAll = selectAll;