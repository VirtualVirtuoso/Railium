const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', { useMongoClient: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("Connection to DB open!")
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Include API models
require('./app/routes')(app);


const port = process.env.PORT || 8080;
var server = app.listen(port);

const io = require('./app/helpers/socket')(server);
  io.on('connection', function(client){
  console.log('connected');
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});

console.log('App is running on localhost:' + port);

// Export app
exports = module.exports = app;
