var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name : String,
  pools: [
    {
      pool: user: mongoose.Schema.Types.ObjectId,
      permissions: [String]
    }
});

module.exports = mongoose.model('User', userSchema);
