# Challenge #3 - Update CSS Variables with JS
![image](https://github.com/user-attachments/assets/d6538867-9d33-4e7d-b5f0-74ef3f16d4ac)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/03-CSS-Variables/)
This is a simple interactive web app that demonstrates how to use JavaScript to manipulate **CSS variables (custom properties)** dynamically. Users can adjust image spacing, blur, and background color using input sliders and a color picker.

## 🚀 Features
- **Spacing Control** Adjusts the padding around the image
- **Blur Effect** - Controls the blur intensity of the image
- **Color Picker** - Changes the background color dynamically
- **Reset on Click** - Clicking the image resets all values to default

## 🔧 How It Works
### 1. JavaScript Event Listeners
Each input field is connected to an event listener that updates the CSS variables dynamically when the user interacts with them:
```javascript
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // 'px' for spacing & blur, empty for color
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate));

```

### 2. Reset Functionality
Clicking the image resets all values to their defaults:
```javascript
function resetValues() {
  inputs.forEach(input => {
    if (input.type === 'range') {
      input.value = 10; // Default for spacing and blur
      document.documentElement.style.setProperty(`--${input.name}`, '10px');
    } else {
      input.value = '#8b4513'; // Default base color
      document.documentElement.style.setProperty(`--${input.name}`, '#8b4513');
    }
  });
}

```
