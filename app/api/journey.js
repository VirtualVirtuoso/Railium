const Journeys = require('../models/journey.js');

module.exports = function(app) {
  // Return all journeys.
  app.get('/api/journeys', function(req, res) {
    Journeys.find({}, function(err, journeys) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        res.send(journeys)
      }
    });
    // console.log(req)

    res.send(JSON.stringify(response));
  });

  // Return a specific journey at customer_number 14
  app.get('/api/journeys/14', function(req, res) {
    Journeys.find({}, {+customer_number: 14}).toArray(function(err, journeys) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        res.send(journeys)
      }
    });
    // console.log(req)

    res.send(JSON.stringify(response));
  });


  app.post('/api/journey', function(req, res) {

  });
};
