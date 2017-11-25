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
        res.send(journeys);
      }
    });
    // console.log(req)

    res.send(JSON.stringify(response));
  });

  // Return a specific journey
  app.get('/api/journeys/:customer_number', function(req, res) {
    var regexNum = new RegExp("(\d)*");
    if (! regexNum.test(req.params["customer_number"])){
      console.log("Error");
      res.status(500).end();
    }
    Journeys.find({'customer_number': req.params["customer_number"]}, function(err, journeys) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        res.send(journeys);
      }
    });
    // console.log(req)
  });


  app.post('/api/journey', function(req, res) {

  });
};
