
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var stopModelSchema = new Schema({
    departure_time: {type: Date, default: Date.now},
    // content: String,
    // station: Schema.Types.ObjectId,
    code: 'String',
});

var journeyModelSchema = new Schema({
    // departure_time: Date,
    customer_number: {type: 'Number', default: '1'},
    stops: [stopModelSchema],
    toilets: {type: 'String', enum: ['operational', 'broken']},
    crowd_answers: [],
    }
);



//Export function to create "SomeModel" model class
module.exports = mongoose.model('Journey', journeyModelSchema );
