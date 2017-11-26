const Journey = require('../models/journey.js');
const Station = require('../models/station.js');



function Init() {

    this.emptyStation = function() {
        Station.remove({}, function(err, success) {
            if (err) {
                console.log(err);
            }
            else
            {
                console.log('erased');
                this.createStations();
            }

        });

    }

    this.createStations = function () {
        var init_stations = [
            {name: 'Howden', code : 'HOW'},
            {name: 'Kings Cross', code : 'KGX'},
            {name: 'Euston Station', code : 'EUS'},
        ]

        Station.create({name: 'Paddington', code : 'PAD'});
        Station.create({name: 'London Kings Cross', code : 'KGX'});
        Station.create({name: 'Euston Station', code : 'EUS'});
        Station.create({name: 'Grantham', code : 'GRT'});
        Station.create({name: 'Howden', code : 'How'});
    }


    this.emptyJourneys = function() {
        Journey.remove({}, function(err, success) {
            if (err) {
                console.log(err);
            }
            else
            {
                console.log('journey erased');
                this.createJourneys();
            }

        });

    }
    
    this.createJourneys = function () {

        var test = new Journey({
            stops: [
                {code: "KGX", departure_time: Date.now()+(10 * 60 * 1000),},
                {code: "GRT", departure_time: Date.now()+(2 * 60 * 60 * 1000),},
                {code: "HOW", departure_time: Date.now()+(4 * 60 * 60 * 1000),},
            ],
            crowd_answers: [
                {'qtype': 'toilets', 'value': 1},
                {'qtype': 'toilets', 'value': 1},
                {'qtype': 'toilets', 'value': 1},
                {'qtype': 'toohot', 'value': 'hot'},
                {'qtype': 'toohot', 'value': 'hot'},
            ],
            toilets: 'operational'
        })

        test.save();

    };

    this.emptyJourneys();
    this.emptyStation();


};


module.exports = Init;
