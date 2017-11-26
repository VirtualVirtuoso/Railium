module.exports = function(app) {
  // include api files here
  require('./api/journey.js')(app);
  require('./api/station.js')(app);
  const Init = require('./helpers/init')

  app.get('/init', function (req, res) {
    var StationSchema = require('./models/station')

    Init();


    // StationSchema.find(callback);
    // res.sendfile('./public/index.html'); // load home page
    res.send('dave');
  });

  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load home page
  });


};
