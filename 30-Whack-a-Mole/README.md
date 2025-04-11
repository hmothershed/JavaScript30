# Challenge #30 - Whack a Mole!

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/30-Whack-a-Mole/)
A simple Whack-a-mole game where moles randomly appear in holes, and the player must click on them to score points before time runs out.

## 🚀 Features
- **Randomized Mole Appearance**: Moles appear in random holes for a random duration
- **Click-to-Score System**: Clicking a mole increases the score
- **Countdown Timer**: The game lasts for a set duration, displaying the time left
- **Restart Functionality**: The player can restart the game by clicking the start button

## 🔧 How It Works
### Selecting DOM Elements
```js
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");  
const scoreCount = document.querySelector(".score-count");
const timeLeft = document.querySelector(".time-left");
const moles = document.querySelectorAll(".mole");
const button = document.querySelector('#start');
```
- **holes**: NodeList of all the possible locations where moles appear
- **scoreBoard**: Displays the final score
- **scoreCount**: Updates the player's score in real time
- **timeLeft** Displays the remaining game time
- **moles**: NodeList of all moles
- **button**: The start button to begin/restart the game

### Game State Variables
```js
let lastHole;
let lastMole;
let timeUp = false;
let countdown;
let score = 0;
```
- **lastHole**: Stores the last hole to prevent repetition
- **lastMole** Prevents double scoring when a player clicks the same mole twice
- **timeUp**: Tracks whether the game has ended
- **countdown**: Stored the internal ID for the timer
- **score**: The player's score

### Random Time Generator
```js
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
```
- Returns a random duration (in milliseconds) for how long a mole stays visible

### Selecting a Random Hole
```js
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
```
- Chooses a random hole for a mole to appear
- Ensures the same hole is not chosen twice in a row

### Making a Mole Appear
```js
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}
```
- Picks a random hole and makes a mole appear for a random duration
- Calls itself recursively until the game ends

### Starting the Game
```js
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
```
- Resets score and game state
- Calls `peep()` to start mole appearances
- Starts a countdown timer for the game duration

### Handling Mole Clicks
```js
function bonk(e) {
  if (!e.isTrusted || lastMole === this) return;
  score++;
  lastMole = this;
  this.parentNode.classList.remove('up');
  scoreCount.textContent = score;
}
```
- Ensures the click is legitimate (`isTrusted` prevents cheating)
- Prevents double-clicking the same mole for extra points
- Increments the score and removes the mole

### Countdown Timer
```js
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      scoreBoard.classList.add('final');
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
```
- ***Note: That I used the same implementation/concept that was used in Day 29 of the Countdown Timer***
- Updates the remaining time every second
- Ends the game when time runs out

### Displaying Remaining Time
```js
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timeLeft.textContent = display;
}
```
- Formats the time as `MM:SS` and updates the UI

### Adding Click Listeners to Moles
```js
moles.forEach(mole => mole.addEventListener('click', bonk));
```
- Each mole listens for a `click` event to trigger the `bonk()` function

## Summary
This script creates a fully functional Whack-a-Mole game using JavaScript and DOM manipulation. It ensures a fun and interactive experience by preventing duplicate holes, tracking scores, and providing real-time feedback.
