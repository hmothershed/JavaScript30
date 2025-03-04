# Challenge #8 - Fun with HTML5 Canvas
![image](https://github.com/user-attachments/assets/9c19468c-b8ac-4061-9035-64eda3506b41)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/08-HTML5-Canvas/)
A fun and interactive drawing app using HTML5 Canvas and JavaScript. Users can draw with a rainbow-colored brush that dynamically changes width and hue while drawing. Supports both mouse and touch input!

## 🚀 Features
- **Interactive Drawing** - Click and drag (or touch and drag) to draw on the canvas.
- **Dynamic Brush Effect** - Brush color cycles thorugh a rainbow effect.
- **Responsive** - Works on both desktop and mobile devices.
- **Clear Button** - Easily reset the canvas with a button.
- **User Guidance** - Displays a message to guide users on how to start drawing.

## 🔧 How It Works
### Setting Up the Canvas
The canvas is initialized to fit the full window, and the drawing context is configured:
```javascript
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
```
This ensures smooth strokes and rounded brush edges.

### Drawing Logic
When the user clicks or touches the screen, the dawing begins. The brush color cycles dynamically, and its width fluctuates:
```javascript
function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  
  let x, y;
  if (e.touches) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.offsetX;
    y = e.offsetY;
  }

  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  
  [lastX, lastY] = [x, y];

  hue = (hue + 1) % 360;
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
}
```
This function ensures the color continuously cycles through an HSL spectrum and adjusts the brush width.

### Event Listeners for Drawing
Mouse and touch events are used to detect user interaction:
```javascript
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  isDrawing = true;
  [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  draw(e);
});

canvas.addEventListener('touchend', () => (isDrawing = false));
canvas.addEventListener('touchcancel', () => (isDrawing = false));
```
This ensures the drawing works seamlessly on both desktop and mobile devices.

### Clearing the Canvas
A button allows users to clear the drawing:
```javascript
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  showMessage();
});
```
After clearing, a message is displayed, prompting users to start drawing again.
