const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("Connection to DB open!")
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Include API models
require('./app/routes')(app);

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Go to localhost:' + port);

// Export app
exports = module.exports = app;
