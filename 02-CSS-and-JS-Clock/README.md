# Challenge #2 - CSS + JS Clock
![image](https://github.com/user-attachments/assets/cee7aa54-eb2c-4504-a6a3-b429ede3106d)
## 📌 Demo [HERE](https://hmothershed.github.io/JavaScript30/02-CSS-and-JS-Clock/)
This is a simple and elegant analog clock that dynamically updates with the current time and features smoothly animated clock hands, hour markers, and minute tick marks.

## 🚀 Features
- Dynamic clock hands that update in real-time
- Hour numbers and minute tick marks generated dynamically
- Smooth transitions for realistic movement

## 🔧 How It Works
### 1. Clock Face & Hands
- Consists of a circular face styled with CSS
- The clock hands are positioned and animated using JavaScript
  
### 2. Dynamic Hour Numbers
- The hour numbers (1-12) are positioned using JavaScript with trigonometry to ensure they appear correctly around the clock
```javascript
for (let i = 1; i <= 12; i++) {
    const angle = ((i * 30) - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * clockRadius;
    const y = -Math.sin(angle) * clockRadius;
    
    const number = document.createElement("div");
    number.classList.add("hour-mark");
    number.style.left = `calc(50% + ${x}rem)`;
    number.style.top = `calc(50% - ${y}rem)`;
    number.textContent = i;
    clockFace.appendChild(number);
}
```

### 3. Real-time Clock Updates
- The `setDate()` function updates the positions of the clock hands every second
- The hands rotate according to the current **hours, minutes, and seconds.**
```javascript
function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = ((second / 60) * 360) + 90;
  
  const minute = now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + 90;
  
  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
  
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
```
