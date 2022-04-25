var secondsRemaining;
var intervalHandle;

function resetPage() {
  document.getElementById('inputArea').style.display = 'block';
}

function tick() {
  //grab h1
  var timeDisplay = document.getElementById('time');

  //turn seconds into mm:55
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);

  //add leading 0 if seconds less than 10
  if (sec < 10) {
    sec = '0' + sec;
  }
  //concatenate with colon
  var message = min.toString() + ':' + sec;
  // now change the display
  timeDisplay.innerHTML = message;

  //stop if down to zero
  if (secondsRemaining === 0) {
    alert('Countdown Finished!');
    clearInterval(intervalHandle);
    resetPage();
  }
  // subtract from seconds remaining
  secondsRemaining--;
}

function startCountdown() {
  //get contents
  var minutes = document.getElementById('minutes').value;
  //check if not a number
  if (isNaN(minutes)) {
    alert("Please enter a number!");
    return;
  }
  //how many seconds?
  secondsRemaining = minutes * 60;
  //call tick
  intervalHandle = setInterval(tick, 1000);
  //hide form
  document.getElementById('inputArea').style.display = 'none';
}

window.onload = function() {

  // create text input
  var inputMinutes = document.createElement('input');
  inputMinutes.setAttribute('id', 'minutes');
  inputMinutes.setAttribute('type', 'text');
  inputMinutes.setAttribute('placeholder', 'Enter Time');
  //create button
  var startButton = document.createElement('input');
  startButton.setAttribute('type', 'button');
  startButton.setAttribute('value', 'Start Countdown');
  startButton.onclick = function() {
    startCountdown();
  };
  // add to DOM
  document.getElementById('inputArea').appendChild(inputMinutes);
  document.getElementById('inputArea').appendChild(startButton);
}