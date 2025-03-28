# Challenge #17 - Sort Without Articles

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/17-Sort-Without-Articles/)
Sort without articles is a simple web application that sorts a list of band names alphabetically while ignoring common articles like "A", "An", and "The". Users can toggle between sorted and unsorted views with a button click.

## 🚀 Features
- Sorts band names while ignoring leading articles ("A", "An", "The").
- Toggle between sorted and original order.

## 🔧 How It Works
### 1. Stripping Articles for Sorting
The `strip` function removes common articles from band names to ensure accurate sorting:
```js
const strip = bandName => {
  return bandName.replace(/^(a |the |an )/i, "").trim();
};
```

### 2. Sorting the Band List
A sorted version of the band names is created while preserving the original order for toggling:
```js
let sortedBands = [...bands].sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
```

### 3. Displaying the List
The `buildList` function dynamically generates the HTML list items for the bands;
```js
const buildList = (listOfBands, listElement) =>
  (listElement.innerHTML = listOfBands
    .map(band => `<li data-band="${band}">${band}</li>`)
    .join(""));
```

### 4. Toggling Between Sorted and Unsorted Lists
The `sort` function switches between the sorted and original lists when the button is clicked:
```js
const sort = e => {
  e.preventDefault();
  isSorted = !isSorted;
  const listToUse = isSorted ? sortedBands : bands;
  sorter.textContent = isSorted ? "unsort" : "sort";

  listToUse.forEach((band, i) => {
    setTimeout(() => {
      const bandElement = document.querySelector(`[data-band='${band}']`);
      bandElement.style.position = "absolute";
      bandElement.style.transform = `translateY(calc(${i * 40}px))`;
    }, 10 * i);
  });
};
```

### 5. Initializing and Adding Event Listeners
Finally, the script initializes the list and attaches the sorting event:
```js
buildList(bands, listElement);
sorter.addEventListener("click", sort);
```

This ensures that the list is displayed correctly on page load, and sorting behavior is applied dynamically when the user interacts with the button.
