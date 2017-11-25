
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StationModelSchema = new Schema({
    name          : String,
    code          : String,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('StationSchema', StationModelSchema );
