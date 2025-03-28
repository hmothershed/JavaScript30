# Challenge #16 - Text Shadow Mouse Move Effect

![MoveShadow](https://github.com/user-attachments/assets/63b77516-85e9-4395-a5e7-7625e006a76b)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/16-Mouse-Move-Shadow/)
Mouse Shadow is a fun interactive web effect where the text shadow dynamically changes based on mouse movements. As you move the mouse over the page, the shadow follows the cursor witha  vibrant multi-colored effect.

## 🚀 Features
- Interactive text shadow effect based on mouse movement.
- Multi-colored shadow that changes position as you move the mouse.
- Editable text that can be modified in real time.
- Simple and lightweight CSS and JavaScript implementation

## 🔧 How It Works
### 1. Setting Up the Hero Section
The text inside the `h1` element is wrapped in a `div` with the class `.hero`. This `div` takes up the entire viewport, centering the text in teh middle of the screen.
```html
<div class="hero">
  <h1 contenteditable>🤪WAZZUP!</h1>
</div>
```

### 2. Handling Mouse Movements
The `shadow` function is triggered when the mouse moves over the `.hero` section. It calculates the mouse's position relative to the section and uses it to adjust the shadow.
```js
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // How far the shadow moves

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  
  // Adjust coordinates if the event is triggered by a child element
  if (this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
  `;
}
```

### 3. Event Listener for Mouse Move
The `mousemove` event is attached to the `.hero` section, triggering the shadow effect whenever the mouse moves over it:
```js
hero.addEventListener('mousemove', shadow);
```

This results in the text shadow shifting in real-time as the mouse moves across the page, creating a playful and interactive effect.
