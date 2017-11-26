const Journeys = require('../models/journey.js');
const JourneyStatsHelper = require('../helpers/journey')

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
    //
    // res.send(JSON.stringify(response));
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


  // Return a specific journey with stats
  app.get('/api/journeystat/:hash', function(req, res) {
    var hash = req.params["hash"];

    Journeys.findOne({'_id': hash}, function(err, journey) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        jsh = new JourneyStatsHelper(journey)
        res.send(jsh.stats());
      }
    });
    // console.log(req)
  });


  // Return a specific journey with stats
  app.get('/api/journey/:departure_station/:arrival_station', function(req, res) {
    var hash = req.params["hash"];

    var departure_station = req.params['departure_station'];
    var arrival_station = req.params['arrival_station'];

    var journey_list = [];

    Journeys.find(
        {'stops': {"$elemMatch": {'code': departure_station}}}
        , function (err, journeys) {
          if (err) {
            console.log(err);
            res.status(500).end();
          }
          else {
            for (var i = 0, len = journeys.length; i < len; i++) {
              var journey = journeys[i];
              var stops = journey['stops'];

              for (var j = 0, len2 = stops.length; j < len2; j++) {
                if (stops[j]['code'] == arrival_station) {
                  journey_list.push(journeys[i]);
                }
              }
            }

            var response = [];
            for (var i = 0, len = journey_list.length; i < len; i++) {
              var journey = journey_list[i];
              var stops = journey['stops'];

              for (var j = 0, len2 = stops.length; j < len2; j++) {
                if (stops[j]['code'] == departure_station) {
                  response.push( {
                    'departure_time': stops[j]['departure_time'],
                    'id': journey['_id'],

                  } );

                }
              }
            }

            res.send(response);
            res.status(200).end();
          }
        });
  });

  app.post('/api/journey', function(req, res) {

  });
};
