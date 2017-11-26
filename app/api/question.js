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
        if(journey.crowd_answers == null){
          journey.crowd_answers = [{'qtype': 'toilets', 'value': 1}];
        }
        else {
          journey.crowd_answers.push({'qtype': 'toilets', 'value': 1});
        }
        journey.save();
        const io = require('../helpers/socket')();
        io.sockets.emit('broadcast', { for: 'everyone' });
      }
    });


  });

};
