'use strict';
const Alexa = require("alexa-sdk");
const datamuse = require("datamuse")
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
	rhyme = request.datamuse.words.datamuse.ask_user; //set var rhyme to pull a request from API
	function getRhyme()
	this.emit('SayRhyme');
    },
    'RhymeIntent': function () {   //used to actually say the rhyme
        this.emit('SayRhyme')
    },
    'SayRhyme': function () {
        
	this.response.speak(rhyme);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'Testing API with alexa. ';
        const reprompt = 'Try asking me what rhymes with boat.';

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later!');
        this.emit(':responseReady');
    }
};
