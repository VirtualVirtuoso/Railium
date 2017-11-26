module.exports = function(app) {
  // include api files here
  require('./api/journey.js')(app);
  require('./api/station.js')(app);

  app.get('/init', function (req, res) {
    var StationSchema = require('./models/station')
    // test = new StationSchema({ name: 'Howden', code : 'HOW' },{ name: 'Kings Cross', code : 'KGX' });
    // test.save();

    var init_stations = [
      {name: 'Howden', code : 'HOW'},
      {name: 'Kings Cross', code : 'KGX'},
      {name: 'Euston Station', code : 'EUS'},
    ]

    var station_record_array = [];
    for (var i=0; i<init_stations.length; ++i) {
      var record = new StationSchema(init_stations[i]);
      record.save();

      // init_stations[i]['station'] = record
    }


    var JourneySchema = require('./models/journey')
    var test = new JourneySchema({
      stops: [
        {code: "HOW", departure_time: Date.now(),},
        {code: "KGX", departure_time: Date.now(),},
      ],
      crowd_answers: [
        {'qtype': 'toilets', 'value': 1},
        {'qtype': 'toilets', 'value': 1},
        {'qtype': 'toilets', 'value': 1},
        {'qtype': 'toohot', 'value': 'hot'},
        {'qtype': 'toohot', 'value': 'hot'},
      ],
      toilets: 'operational'
    })

    test.save();

    callback = function(stuff, dave) {
      console.log(stuff, dave);
      // console.log(dave[0]['stops']);
    }
    //Example of how to do a nested query
    //
    // JourneySchema.find(
    //     {'stops':{"$elemMatch":{'departure_time':'2017-11-25T17:15:00.328Z'}}}
    //     , callback);

    // Example of how to find a customer's journeys
    JourneySchema.find(
        {},
        // {'customer_number': 1},
        callback);

    // StationSchema.find(callback);
    res.sendfile('./public/index.html'); // load home page
  });

  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load home page
  });


};
