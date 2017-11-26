const Journeys = require('../models/journey.js');
const JourneyStatsHelper = require('../helpers/journey')

module.exports = function(app) {
  // Return all journeys.
  app.post('/api/question/:journey', function(req, res) {

    Journeys.findOne({'_id': req.params['journey']}, function(err, journey) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      else {
        console.log(req.params['journey']);
        res.send(journey);

        journey.crowd_answers.push({'qtype': 'toilets', 'value': 1});
        journey.save();
        const io = require('../helpers/socket')();
        io.emit('fact', { for: 'everyone' });
      }
    });


  });

};
