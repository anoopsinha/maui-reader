//importScripts('speakGenerator.js');


// eSpeak and other code here are under the GNU GPL.
//importScripts('speakGenerator.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

function generateSpeech(text, args) {
  var self = { text: text, args: args, ret: null };
  (function() {

  }).call(self);
  return self.ret;
}


onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};
