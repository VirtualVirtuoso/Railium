module.exports = function(app) {
  // include api files here
  // require('./api/')

  // route to handle all other requests
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load home page
  });
};
