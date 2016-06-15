var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var huntSchema = new Schema ({
  hunt_id: Number,
  hunt_name: String,
  date: Date,
  start_time: String,
  end_time: String,
  location: String,
  description: String
}, {collection: 'hunts'});

mongoose.model('Hunt', huntSchema);
