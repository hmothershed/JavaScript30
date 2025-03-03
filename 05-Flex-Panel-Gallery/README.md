# Challenge #5 - Flex Panel Gallery
![image](https://github.com/user-attachments/assets/eb682314-af6a-499d-87e0-3eccc800b7d0)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/05-Flex-Panel-Gallery/)
This is an interactive panel layout using **CSS Flexbox** and **JavaScript**. Clicking on a panel expands it, revealing animated text transitions that enhance user experience.

## 🚀 Features
- **Dynamic Expanding Panels** - Click on any panel to expand it smoothly.
- **Animations** - Text elements slide into view as panels expand.
- **CSS Transitions & Flexbox** - Powered by modern CSS for a smooth experience
  
## 🔧 How It Works
### 1. Expanding Panels
Clicking on a palen triggers the `.open` class, increasing its flex value to expand:
```javascript
function toggleOpen(){
  this.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
```

### 2. Animating Text Appearance
Once a panel is fully expanded, text elements slide into view by toggling the `.open-active` class:
```javascript
function toggleActive(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```
