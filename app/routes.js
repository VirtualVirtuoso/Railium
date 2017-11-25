module.exports = function(app) {
  // include api files here
  // require('./api/')

  app.get('/init', function (req, res) {
    var StationSchema = require('../models/station')
    test = new StationSchema({ name: 'Howden', code : 'HOW' });
    test.save();
    callback = function(stuff, dave) {
      console.log(stuff, dave);
    }
    StationSchema.find(callback);
    res.sendfile('./public/index.html'); // load home page
  });

  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load home page
  });


};
