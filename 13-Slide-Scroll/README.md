# Challenge #13 - Slide In on Scroll
![Slide-Scroll](https://github.com/user-attachments/assets/310a62df-9eb1-4f71-a875-327a586c0062)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/13-Slide-Scroll/)
A simple web page that triggers slide-in animations when elements come into view while scrolling. This effect enhances user experience by adding smooth visual interactions.

## 🚀 Features
- **Smooth Slide-In Animations** - Images slide in from the left or right whe scrolled into view.
- **Debounced Scroll Event** - Optimized performance using a debounce function to limit scroll event calls.
- **Responsive Design** - Works across different screen sizes and devices.

## 🔧 How It Works
### 1. Detecting Scroll Position
The JavaScript function `checkSlide()` calculates when an image is halfway into view and applies an `active` class if it meets the criteria.
```js
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}
```

### 2. Performance Optimization
To prevent performance issues from excessive scroll event calls, a **debounce** function is used:
```js
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
```

### 3. Adding Event Listener
The `checkSlide` function runs when scrolling, but it is wrapped inside the debounce function for better performance:
```js
window.addEventListener('scroll', debounce(checkSlide));
```
