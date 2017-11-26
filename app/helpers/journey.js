


function JourneyStats(journey) {

    this.journey = journey;
    this.stats = function() {

        this.response = {
            'happiness_score': 0,
            'happiness_ratio': 0,
        }

        if (this.journey == null) {
            return false;
        }

        for(var i = 0; i < this.journey['crowd_answers'].length;i++){
            question = this.journey['crowd_answers'][i];

            qtype = question['qtype'];


            if ( typeof this.response[qtype + 'count'] !== 'undefined')
            {
                this.response[qtype + 'count']++;
            } else {
                this.response[qtype + 'count'] = 1;
            }

            switch(question['qtype']){
                case 'toilets':
                    console.log('evaluateloo');
                    break;

                case 'toohot':
                    console.log('toohot');
                    break;

                case 'happiness':
                    if (question['value'] == 'neutral') {
                        // this.response['happiness_score'] = this.response['happiness_score'] + 0
                    } else if (question['value'] == 'happy') {
                        this.response['happiness_score'] = this.response['happiness_score'] + 5
                    } else {
                        this.response['happiness_score'] = this.response['happiness_score'] - 5
                    }
                    break;

            }

        }

        this.response['happiness_ratio'] = this.response['happiness_score'] / this.response['happinesscount']
        return this.response
            console.log(this.response)
            console.log('hello')
    }
};


module.exports = JourneyStats;
