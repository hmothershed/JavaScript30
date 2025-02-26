const clockFace = document.querySelector(".clock-face");

// Clock radius
const clockRadius = 11.5; // Adjusted for alignment

// Generate hour numbers dynamically
for (let i = 1; i <= 12; i++) {
    const angle = ((i * 30)-90) * (Math.PI / 180);
    const x = Math.cos(angle) * clockRadius;
    const y = -Math.sin(angle) * clockRadius;

    const number = document.createElement("div");
    number.classList.add("hour-mark");
    number.style.left = `calc(50% + ${x}rem)`;
    number.style.top = `calc(50% - ${y}rem)`;
    number.textContent = i;
    clockFace.appendChild(number);
}

// Generate minute tick marks dynamically
for (let i = 0; i < 60; i++) {
    const tick = document.createElement("div");
    tick.classList.add("tick");
    tick.style.transform = `rotate(${i * 6}deg) translateY(-14rem)`;
    tick.style.height = i % 5 === 0 ? "15px" : "10px"; // Longer for hour marks
    clockFace.appendChild(tick);
}

// Clock hands movement
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = ((second / 60) * 360) + 90;

  const minute = now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + 90;

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + ((minute/60)*30) + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

