module.exports = function(app) {
  // include api files here
  require('./api/journey.js')(app);
  require('./api/station.js')(app);

  app.get('api/journeys/14', function(req, res)) {
    var StationSchema = require('../models/station')
    var init_stations = [
      {name: 'Howden', code : 'HOW'},
      {name: 'Kings Cross', code : 'KGX'},
    ]
    for (var i=0; i<init_stations.length; ++i) {
      var record = new StationSchema(init_stations[i]);
      record.save();
    }

    var JourneySchema = require('../models/journey')

    for (var j=0; j<20; ++j) {
      test = new JourneySchema({
        customer_number: j
        stops: [
          { departure_time: Date.now(),
            station: record,
          }
        ],
        toilets: 'operational'
      })
      test.save();
    }

    callback = function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        res.send(data);
      }
    }

    JourneySchema.find({
      'customer_number': 14 }
    , callback);

  }

}
