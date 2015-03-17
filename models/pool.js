var mongoose = require('mongoose');

var poolSchema = mongoose.Schema({
  name : String,
  location : String,
  owner: mongoose.Schema.Types.ObjectId,
  volume: Number,
  users: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Pool', poolSchema);
