const Stations = require('../models/station.js');
const Journeys= require('../models/journey.js');

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

  });

  app.post('/api/journey', function(req, res) {

  });

  app.get('/api/station/arrival/:departurestation', function(req, res) {

    Journeys.find(
        {'stops':{"$elemMatch":{'code':req.params['departurestation']}}}
        , function(err, journeys) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        var station_code_array = [];
        var station_array = [];
        for (var i = 0, len = journeys.length; i < len; i++) {
          var stops = journeys[i]['stops'];
          for (var j = 0, len2 = stops.length; j < len2; j++) {
            console.log(stops[j]['code']);
            station_code_array.push(stops[j]['code']);
          }
        }
        var un_station_code_array = station_code_array.filter(function(elem, pos) {
          return station_code_array.indexOf(elem) == pos;
        })
        Stations.find({
          'code': { $in: un_station_code_array}
        }, function(err, stations){
          res.send(stations)
        });

      }
    });
    // console.log(req)
    console.log('in routes');

    // res.send(JSON.stringify(response));
  });



  app.post('/api/journey', function(req, res) {

  });

}
