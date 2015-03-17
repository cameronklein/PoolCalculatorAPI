var Reading = require('../models/reading.js')

module.exports = function(app, jwtAuth) {

  app.post('/api/comments/:id', jwtAuth, function(req, res) {
    var reading = new Reading();
    try {
      
      reading.pool = req.body.poolID;
      reading.user = req.user._id;
      reading.freeChlorine = req.body.freeChlorine;
      reading.combinedChlorine = req.body.combinedChlorine;
      reading.pH = req.body.pH;
      reading.totalAlkalinity = req.body.totalAlkalinity;
      reading.calciumHardness = req.body.calciumHardness;
      reading.timestamp = req.body.timestamp;
      reading.day = req.body.day;

    } catch (err) {
      return res.status(400).send('cannot comment');
    }
    reading.save(function(err, data) {
      if (err) {
        return res.status(500).send('cannot comment');
      }
      res.json(data.text);
    });
  });
};
