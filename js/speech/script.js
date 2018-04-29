var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


$('body').append('<button class="btn-speech">Speech command after click</button>');

var phrasePara = document.querySelector('.phrase');

var testBtn = document.querySelector('button');

function testSpeech() {
  testBtn.disabled = true;
  testBtn.textContent = 'Speak out command';

  // 0
  var phrase = "text"
  var grammar = '#JSGF V1.0; grammar phrase; public <color> = aqua | black | beige ;';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  // 1
  // var phrase_1 = "double"
  // var grammar_1 = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase_1 +';';
  // var recognition_1 = new SpeechRecognition();
  // var speechRecognitionList_1 = new SpeechGrammarList();
  // speechRecognitionList_1.addFromString(grammar_1, 1);
  // recognition_1.grammars = speechRecognitionList_1;
  // recognition_1.lang = 'en-US';
  // recognition_1.interimResults = false;
  // recognition_1.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at position 0.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object 
    var speechResult = event.results[0][0].transcript;
    //diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';
    if(speechResult === phrase) {
      //resultPara.textContent = 'I heard the correct phrase!';
      //resultPara.style.background = 'lime';
      console.log('ok');
      window.location.href = '/me/settings/text_size.html';
    } else {
      //resultPara.textContent = 'That didn\'t sound right.';
      //resultPara.style.background = 'red';
      console.log('error');
    }

    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    testBtn.disabled = false;
    testBtn.textContent = 'New Command';
  }

  recognition.onerror = function(event) {
    testBtn.disabled = false;
    testBtn.textContent = 'Start new test';
    //diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
    //console.log(event.error);
  }
  

  // recognition_1.start();
  // recognition_1.onresult = function(event) {
  //   // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  //   // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  //   // It has a getter so it can be accessed like an array
  //   // The first [0] returns the SpeechRecognitionResult at position 0.
  //   // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  //   // These also have getters so they can be accessed like arrays.
  //   // The second [0] returns the SpeechRecognitionAlternative at position 0.
  //   // We then return the transcript property of the SpeechRecognitionAlternative object 
  //   var speechResult_1 = event.results[0][0].transcript;
  //   //diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';
  //   if(speechResult_1 === phrase_1) {
  //     //resultPara.textContent = 'I heard the correct phrase!';
  //     //resultPara.style.background = 'lime';
  //     console.log('ok');
  //     window.location.href = '/me/settings/text_size.html';
  //   } else {
  //     //resultPara.textContent = 'That didn\'t sound right.';
  //     //resultPara.style.background = 'red';
  //     console.log('error');
  //   }

  //   console.log('Confidence: ' + event.results[0][0].confidence);
  // }

  // recognition_1.onspeechend = function() {
  //   recognition_1.stop();
  //   testBtn.disabled = false;
  //   testBtn.textContent = 'New Command';
  // }

  // recognition_1.onerror = function(event) {
  //   testBtn.disabled = false;
  //   testBtn.textContent = 'Start new test';
  //   //diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
  //   //console.log(event.error);
  // }
  
  // recognition.onaudiostart = function(event) {
  //     //Fired when the user agent has started to capture audio.
  //     //console.log('SpeechRecognition.onaudiostart');
  // }
  
  // recognition.onaudioend = function(event) {
  //     //Fired when the user agent has finished capturing audio.
  //     //console.log('SpeechRecognition.onaudioend');
  // }
  
  // recognition.onend = function(event) {
  //     //Fired when the speech recognition service has disconnected.
  //     //console.log('SpeechRecognition.onend');
  // }
  
  // recognition.onnomatch = function(event) {
  //     //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
  //     //console.log('SpeechRecognition.onnomatch');
  // }
  
  // recognition.onsoundstart = function(event) {
  //     //Fired when any sound � recognisable speech or not � has been detected.
  //     //console.log('SpeechRecognition.onsoundstart');
  // }
  
  // recognition.onsoundend = function(event) {
  //     //Fired when any sound � recognisable speech or not � has stopped being detected.
  //     //console.log('SpeechRecognition.onsoundend');
  // }
  
  // recognition.onspeechstart = function (event) {
  //     //Fired when sound that is recognised by the speech recognition service as speech has been detected.
  //     //console.log('SpeechRecognition.onspeechstart');
  // }
  // recognition.onstart = function(event) {
  //     //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
  //     //console.log('SpeechRecognition.onstart');
  // }
}

if(testBtn){
  testBtn.addEventListener('click', testSpeech);
  console.log('succ');
}else{
  console.log('fail');
}
