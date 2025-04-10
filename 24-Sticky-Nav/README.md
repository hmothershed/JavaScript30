# Challenge #24 - Sticky Nav

![StickyNav](https://github.com/user-attachments/assets/b3454042-0db5-429e-b6cf-bb4ed89536f6)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/24-Sticky-Nav/)
This project enhances user experience by implementing a sticky navigation bar that remains fixed at the top of the page upon scrolling and adds a smooth scroll-based animation effect for imagaes.

## 🚀 Features
- **Sticky Navigation Bar**: The navigation bar remains at teh top of the page when scrolling down
- **Scroll Animation**: Images slide into view when they are halfway in the viewport
- **Debounced Scroll Events**: Optimized performance by reducing the frequency of function calls during scrolling

## 🔧 How It Works
### Sticky Navigation Bar
The navigation bar is fixed at the top of when the page is scrolled past its initial position:
```js
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
```
A function checks the scroll position and applies a fixed class when necessary:
```js
function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
```
This function runs on every scroll event:
```js
window.addEventListener('scroll', fixNav);
```

### Debounce Function
To prevent excessive funciton calls while scrolling, a debounce funciton is implemented:
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

### Scroll Animation
Images slide when they are at least halfway into view:
```js
const sliderImages = document.querySelectorAll('.slide-in');
```
A function determines whether an image is in view:
```js
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}
```
This function is run on every scroll event, using debounce to optimize performance:
```js
window.addEventListener('scroll', debounce(checkSlide));
```
This ensures a smooth user experience with efficient scrolling interactions.
