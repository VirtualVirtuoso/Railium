const Journeys = require('../models/journey.js');
const JourneyStatsHelper = require('../helpers/journey')

module.exports = function(app) {
  // Return all journeys.
  app.post('/api/question/:journey', function(req, res) {

    console.log(req['params']);
    console.log("Entered right URL");
    Journeys.findOne({'_id': req.params['journey']}, function(err, journey) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        console.log();
         res.send(journey);

        console.log();
        // for (var j = 0, len2 = stops.length; j < len2; j++) {
        //   if (stops[j]['code'] == departure_station) {
        if(journey.crowd_answers == null){
          journey.crowd_answers = [];
        }
        else {
          journey.crowd_answers.push({'qtype': 'toilets', 'value': 1});
        }

        var form = req.body['params']
        console.log(form);
        journey.crowd_answers.push({'qtype': 'happiness', 'value': form['happiness']})
        journey.crowd_answers.push({'qtype': 'happiness', 'value': form['happiness']})
        var faults = form['faults']

        var form = req.body['params']
        console.log(form);
        journey.crowd_answers.push({'qtype': 'happiness', 'value': form['happiness']})
        journey.crowd_answers.push({'qtype': 'happiness', 'value': form['happiness']})
        var faults = form['faults']

        faults.forEach(function(element) {
          journey.crowd_answers.push({'qtype': element, 'value': true})
          journey.save()
        });

        journey.save();
        const io = require('../helpers/socket')();
        io.emit('fact', { for: 'everyone' });
        console.log(journey.crowd_answers);
        

      }
    });


  });

};
