# Challenge #22 - Follow Along Links Highlighter

![FollowAlongLinkHighlighter](https://github.com/user-attachments/assets/0715cd4b-589e-403a-bfb5-3e8cd3339a5f)

# 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/22-Follow-Along-Link-Highlighter/)
This project creates a dynamic hover effect that highlights links by following the cursor as it moves over them.

## 🚀 Features
- Adds a highlight effect to `<a>` elements when hovered or focused
- Dynamically adjusts the highlight's size and position based on the link's dimensions
- Ensures smooth transitions using `transform` instead of modifying position directly
- Works with both mouse hover (`mouseenter`) and keyboard navigation (`focus`)

## 🔧 How It Works
The script begins by selecting all `<a>` elements and creating a `span` element to act as the highlight:
```js
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
```
The `highlightLink` function calculates the dimensions and position of the hovered link:
```js
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
```
These values are then applied to the `highlight` span, adjusting its size and position dynamically:
```js
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
```
Finally, event listeners are added to apply the effect on hover (`mouseenter`) and keyboard focus (`focus`):
```js
triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
triggers.forEach((a) => a.addEventListener("focus", highlightLink));
```
