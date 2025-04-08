# Challenge #26 - Stripe Follow Along Nav

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/26-Stripe-Follow-Along-Nav/)
This project enhances navigation menus by implementing smooth dropdown animation that appears when hovering over menu items.

## 🚀 Features
- **Dropdown Animation**: The dropdown smoothly expands when hovering over a menu item.
- **Dynamic Positioning**: The dropdwon adjusts its position relative to the navigation bar.
- **CSS Class Toggles**: Classes are added and removed to trigger CSS animations.

## 🔧 How It Works
### Selecting Elements
The script selects the menu items, the dropdown background, and the navigation bar: 
```js
const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');
```
- `triggers`: Stores all `<li>` elements inside the `.cool` class, representing menu items
- `background`: Selects the dropdown background element that will be animated
- `nav`: Selects the navigation bar, used for positioning calculations

### Handle Enter
When a use hovers over a menu item, the function `handleEnter` is triggered:
```js
function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');
```
- The `trigger-enter` class is added immediately when the menu item is hovered over
- A short delay of 150ms is applied before adding `trigger-enter-active`, ensuring a smooth transition
- The `open` class is added to the `background`, making it visible
The dropdown's dimensions and position are calculated:
```js
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };
```
- `dropdown`: Selects the `.dropdown` inside the hovered menu item
- `dropdownCoords`: Gets the size and position of the dropdown
- `navCoords`: Stores the position of the navigation bar
- `coords`: Adjusts the dropdown's placement relative to the navigation bar
The background resizes and moves accordingly:
```js
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
```
- The background's width and height are updated to match the dropdown's dimensions
- The background is moved to align with the dropdown's position

### Handle Leave
When a user moves the cursor away from the menu item, `handleLeave` is triggered:
```js
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}
```
- The `trigger-enter` and `trigger-enter-active` classes are removed, hiding the dropdown
- The `open` class is removed from `background`, making it invisible

### Event Attachments
The functions are attached to the menu items:
```js
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
```
- `mouseenter`: Calls `handleEnter` when the cursor hoveers over a menu item
- `mouseleave`: Calls `handleLeave` when the cursor leaves a menu item
