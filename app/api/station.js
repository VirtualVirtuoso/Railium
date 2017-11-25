const Stations = require('../models/station.js');

module.exports = function(app) {
  // Return all stations.
  app.get('/api/stations', function(req, res) {

    Stations.find({}, function(err, stations) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        res.send(stations)
      }
    });
    // console.log(req)
    console.log('in routes');

    res.send(JSON.stringify(response));
  });

  app.post('/api/journey', function(req, res) {

  });
}
