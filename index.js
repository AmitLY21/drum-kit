var buttonLength = document.querySelectorAll("button").length;

//Detecting button press
for (var i = 0; i < buttonLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function() {
    var currentButton = this.innerHTML;
    makeSound(currentButton);
    buttonAnimation(currentButton);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key)
});

//make sound by key (pressed button or keyboard)
function makeSound(key) {
  switch (key) {
    case ('w'):
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case ('a'):
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case ('s'):
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case ('d'):
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case ('j'):
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case ('k'):
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case ('l'):
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(keyPressed) {
  var activeKey = document.querySelector("." + keyPressed);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
