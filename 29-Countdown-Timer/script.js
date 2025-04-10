const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = document.querySelector('audio');
const circle = document.querySelector('.progress-ring__circle');
const svg = document.querySelector('.progress-ring'); // Selects the SVG element
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

let countdown;

function timer(seconds) {
  clearInterval(countdown);
  
  // Show the progress ring when the timer starts
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
      svg.style.display = 'none'; // Hide the circle when the timer ends
      return;
    }
    if (secondsLeft === 0) {
      endTime.textContent = `Yay! You're back!`;
    }
    displayTimeLeft(secondsLeft);
    animateCircle(seconds, secondsLeft);
  }, 1000);
}

function animateCircle(total, remaining) {
  const offset = circumference * (remaining / total);
  circle.style.strokeDashoffset = circumference - offset;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
