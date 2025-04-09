# Challenge #27 - Click and Drag to Scroll

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/27-Click-and-Drag/)
This project enables a draggable scrolling effect for a container using mouse events, allowing users to click and drag to scroll horizontally.

## 🚀 Features
- **Click & Drag Scrolling**: Allows users to scroll horizontally by clicking and dragging the mouse
- **Smooth Interaction**: Implements a smooth dragging effect with controlled movement
- **CSS Class Toggles**: Adds and removes an "active" class to indicate interaction

## 🔧 How It Works
### Selecting the Element
```js
const slider = document.querySelector('.items');
```
The script selects the container (with the class `items`) where the scrolling effect will be applied

### Variables for Tracking State
```js
let isDown = false;
let startX;
let scrollLeft;
```
- `isDown`: Tracks whether the mouse button is held down
- `startX`: Stores the initial X-coordinate of the mouse when clicking
- `scrollLeft`: Stores the container's scroll position before dragging starts

### Mouse Down Event (Start Dragging)
```js
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
```
- Sets `isDown` to `true` to indicate the user is dragging
- Adds the "active" class for potential visual styling
- Captures the starting X-coordinate (`startX`) relative to the slider
- Saves the current scroll position (`scrollLeft`)

### Mouse Leave & Mouse Up Events (End Dragging)
```js
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
```
- These events reset `isDown` when the user releases the mouse button or moves the cursor outside the slider
- The "active" class is removed to reflect the end of the dragging action

### Mouse Move Event (Scrolling Effect)
```js
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
```
- This event triggers continuously while the user moves the mouse
- If `isDown` is `false`, it exits early to prevent unintended behavior
- Calculates how far the mouse has moved (`walk`)
- Adjusts the scroll position based on `walk`, with a multiplier (`* 3`) to control scroll speed
