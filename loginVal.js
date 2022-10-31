let checkBox = document.getElementById('check');

function myFunction (){

if (checkBox.checked == true){
    let textToSpeak = "you checked auto login";
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = 'en';
    speechSynthesis.speak(speakData);
  } else {
    let textToSpeak = "you unchecked auto login";
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = 'en';
    speechSynthesis.speak(speakData);
  } 
  
}

// initializing the login form validation here
    function validateForm() {
      
  let textToSpeak = "user does not exist";
  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = 1; // From 0 to 1
  speakData.rate = 1; // From 0.1 to 10
  speakData.pitch = 2; // From 0 to 2
  speakData.text = textToSpeak;
  speakData.lang = 'en';

function talk () {

    let textToSpeak = "Login successful";
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = 'en';
    speechSynthesis.speak(speakData);
    
}

        var un = document.getElementById('username').value;
        var pw = document.getElementById('password').value;
        var username = "chidera"; 
        var password = "1234";

        if((un == '') || (pw == '')){
           
            let textToSpeak = " please don't leave any field empty";
            let speakData = new SpeechSynthesisUtterance();
            speakData.volume = 1; // From 0 to 1
            speakData.rate = 1; // From 0.1 to 10
            speakData.pitch = 1; // From 0 to 2
            speakData.text = textToSpeak;
            speakData.lang = 'en';
            speechSynthesis.speak(speakData);

            return false;
        }

   
      
 if((un === username) && (pw === password)){
    talk();
  
  window.open('home.html','popUpWindow','height=1000,width=1600,left=10,top=10,,scrollbars=yes,menubar=no');
  
    return true;
}else{
    speechSynthesis.speak(speakData);
    return false;
}
        }
  




