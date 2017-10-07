// Steps
/*  1. create a listener for each key pressed
    2. grab audio tag that's pressed
    3. play sound for each tag pressed
*/

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-keyId="${e.keyCode}"]`) // grabbed audio tag that is keydown
  audio.currentTime = 0; // resets time so we can repeatedly press key with no delay
  audio.play()
})
