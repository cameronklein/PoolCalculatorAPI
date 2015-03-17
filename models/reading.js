var mongoose = require('mongoose');

var readingSchema = mongoose.Schema({
  pool: mongoose.Schema.Types.ObjectId,
  user: mongoose.Schema.Types.ObjectId,
  freeChlorine : Number,
  combinedChlorine : Number,
  pH : Number,
  totalAlkalinity: Number
  calciumHardness : Number,
  timestamp : Number,
  day : Number
});

module.exports = mongoose.model('Reading', readingSchema);
