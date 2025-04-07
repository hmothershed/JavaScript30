# Challenge #25 - Event Capture, Propagation, Bubbling and Once

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/25-Event-Propagation/)
The goal of this project is to demonstrate JavaScript's event capturing and bubbling mechanisms by attaching event listeners to nested `div` elements and a button.

## 🚀 Features
- **Event Propagation (Bubbling & Capturing)**: Demonstrates how events propagate through the DOM.
- `once` **Event Listener Option**: Ensures an event handler runs only once per element.
- **Stopping Event Propagation**: Shows how to prevent an event from bubbling further up the DOM tree.

## 🔧 How It Works
### Event Propagation
![](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjuxau1zwz9rf5x9czyjz.gif)
JavaScript events propagate in two phases:
1. **Capturing Phase**: The event starts from the window and traverses down to the target element.
2. **Bubbling Phase**: The event then bubbles back up from the DOM tree.
The script attaches event listeners to multiple `div` elements:
```js
const divs = document.querySelectorAll('div');

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // set to true to use the capturing phase
  once: true // ensures the event fires only once per element
}));
```
Each event listener logs the class name of the clicked element:
```js
function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // uncomment to stop event bubbling
}
```

### Handling Button Click
A button click event logs a message and runs only once:
```js
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
```
This prevents repeated event handling after the first click.
