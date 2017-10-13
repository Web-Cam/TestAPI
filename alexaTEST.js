'use strict';
const Alexa = require("alexa-sdk");
const datamuse = require('datamuse');
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('Please say a word to rhyme with');
		
    },
    'RhymeIntent': function () {
        this.emit('SayHello');
		rhyme = request.datmuse.words.datamuse.value;
		function getRhyme(rhyme)
		
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'Say any word, and I will rhyme it for you.. ';
        const reprompt = 'Its easy! try saying skate!.';

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