# Challenge #29 - Countdown Timer

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/29-Countdown-Timer/)
This project implements an interactive countdown timer with visual and audio feedback, displaying the remaining time and an estimated completion time.

## 🚀 Features
- **Countdown Timer**: Starts a timer for a user-defined duration
- **Progress Circle Animation**: Uses an SVG to visualize remaining time
- **Audio Alert**: Plays a sound when the timer ends
- **Dynamic Time Display**: Updates the browser title and page content with remaining time
- **User Interaction**: Users can select predefined times or input custom values

## 🔧 How It Works
### Selecting Elements
```js
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = document.querySelector('audio');
const circle = document.querySelector('.progress-ring__circle');
const svg = document.querySelector('.progress-ring');
```
- Selects elements for time display, buttons, audio playback, and the progress circle.

### Setting Up the Progress Circle
```js
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
```
- Computes the circle's circumference to control stroke animation
- Initializes the stroke dash array for smooth animation

### Timer Function
```js
function timer(seconds) {
  clearInterval(countdown);
  svg.style.display = 'block';
  
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  animateCircle(seconds, seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      audio.play();
      clearInterval(countdown);
      svg.style.display = 'none';
      return;
    }
    if (secondsLeft === 0) {
      endTime.textContent = `Yay! You're back!`;
    }
    displayTimeLeft(secondsLeft);
    animateCircle(seconds, secondsLeft);
  }, 1000);
}
```
- Clears any exisiting timer
- Displays the progress ring
- Calculates the end time and starts updating the coundown every second
- Stops sthe time when time reuns out and plays an audio alert

### Animating the Circle
```js
function animateCircle(total, remaining) {
  const offset = circumference * (remaining / total);
  circle.style.strokeDashoffset = circumference - offset;
}
```
- Adjusts the stroke offset of the circle to visually represent the time left

### Displaying Time Left
```js
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
```
- Converts total seconds into minutes and seconds
- Updates the browser tab and on-screen display

### Displaying End Time
```js
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}
```
- Computes and displays the estimated return time based on when the timer started

### Handling Button Clicks
```js
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
```
- Binds predefined time buttons to the timer function

### Handling Custom Timer Input
```js
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
```
- Allows user to enter a custom duration
