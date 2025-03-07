# Challenge #10 - Hold Shift to Check Multiple Checkboxes

![image](https://github.com/user-attachments/assets/a779d33b-3526-4c74-a749-f72c99a77573)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/10-Checkboxes/)
A simple JavaScript project that enables users to select multiple checkboxes by holding the **Shift** key. THis mimics the behavior commonly found in email clients and file managers.

## 🚀 Features
- **Shift + Click Selection** - Click multiple checkboxes at once.
- **Smooth User Experience** - No external libraries, just plain JavaScript.
- **Visual Feednack** - Checked items get a striketrhough effect.

## 🔧 How It Works
### Selecting Multiple Checkboxes
When you click one checkbox, hold **Shift**, and then click another, all checkboxes between them will also be checked.

### Key JavaScript Logic:
```js
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```
1. Detects if **Shift** is held while clicking a checkbox.
2. Finds the range between the last checked checkbox and the newly clicked checkbox.
3. Checks all checkboxes in between.
