const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");  
const scoreCount = document.querySelector(".score-count");
const timeLeft = document.querySelector(".time-left");
const moles = document.querySelectorAll(".mole");
const button = document.querySelector('#start');

// variables to track the game score
let lastHole;  // stores the last hole to prevent repetition
let lastMole;  // stores the last clicked hole to prevent double scoring
let timeUp = false;  
let countdown;
let score = 0;

// generates a random time between ta given minimum and maximum value
function randomTime(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}

// picks a random hole for the mole to appear in, ensuring it's not the same as the last one
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  // prevents the same hole from being clicked twice in a row
  if(hole === lastHole){
    console.log("Ah nah that's the same one bud");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

// makes a mole peep in a random hole for a random duration
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  // removes the mole after the given time and continues if the game isn't over
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

// starts the game with specified duration in seconds
function startGame(duration) {
  scoreCount.textContent = 0;
  timeUp = false;
  score = 0;
  button.textContent = 'Try Again?';
  scoreBoard.classList.remove('final');
  peep();
  setTimeout(() => timeUp = true, duration * 1000);
  timer(duration);
}

// handles the bonk event when a mole is clicked
function bonk(e) {
  if(!e.isTrusted || lastMole === this) return;
  score++;
  lastMole = this;
  this.parentNode.classList.remove('up');
  scoreCount.textContent = score;
}

// starts the coundown timer for the game duration
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  // updates the timer every second
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    
    if(secondsLeft < 0){
      clearInterval(countdown);
      scoreBoard.classList.add('final');
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// updates the time display on the page and document title
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds <10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timeLeft.textContent = display;
}

// adds an event listener to each mole, allowing them to be "bonked" when clicked
moles.forEach(mole => mole.addEventListener('click', bonk));

