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

  // Return a specific journey
  app.get('/api/journeys/:journey_number', function(req, res) {
    var regexNum = new RegExp("(\d)*");
    if (! regexNum.test(journey_number)){
      console.log("Error");
      res.status(500).end();
    }
    Journeys.find({}, {_customer_number: journey_number}).toArray(function(err, journeys) {
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
