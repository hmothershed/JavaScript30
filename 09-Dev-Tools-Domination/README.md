# Challenge #9 - Dev Tools Domination

<p align="center">
  <img src="https://media.giphy.com/media/ZpdxXk2KXQn40VWqke/giphy.gif?cid=ecf05e4790y23lirniirohuywq1mg1ihchbntu1r9c7no1kr&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
</p>

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/09-Dev-Tools-Domination/)
A fun JavaScript project that demonstrates various console methods, including styling, warnings, assertions, and performance timing. Open your browser console (`F12` → Console) to explore different logging techniques!

## 🚀 Features
- **Console Logging** - Regular, styled, interpolated, and grouped logs
- **Warnings & Errors** - Demonstrates `console.warn()` and `console.error()`
- **Assertions & Counting** - Uses `console.assert()` and `console.count()`
- **DOM Inspection** - Logs and inspects DOM elements
- **Tables & Grouping** - Organizes log outputs neatly
- **Performance Timing** - Measures fetch request time using `console.time()`

## 🔧 How It Works
### Basic Console Logging
The script showcases different logging techniques:
```js
console.log("hello"); // Regular log
console.log("Eat all the %s!", "🥓"); // Interpolated
console.log(`Makin' ${bacon} with ES6 backticks`); // ES6 Template Literals
console.log("%c I am some big text", "font-size: 50px;"); // Styled log
```

### Console Warnings & Errors
Displays warning and error messages in the console:
```js
console.warn("OH NO A WARNING"); // Yellow warning message
console.error("💩💩💩"); // Red error message
console.info("Dogs can't operate MRI Machines, but catscan."); // Info log
```

### Viewing and Manipulating DOM Elements
Logs and inspects a <p> element:
```js
const p = document.querySelector("p");
console.log(p); // Logs the element
console.dir(p); // Logs the element with properties
```

### Grouping Console Logs
Neatly groups log messages related to an object:
```js
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});
```
Use `console.groupCollapsed()` for collapsed logs

### Displaying Data as a Table
Easily visualize an array of objects:
```js
console.table(dogs);
```

### Counting Log Occurrences
Tracks how many times a string appears:
```js
console.count('Harmony');
console.count('Harmony');
console.count("Heyy");
console.count('Harmony');
```

### Measuring Fetch Request Time
Times an API request using `console.time()`:
```js
console.time("Grabbing my GitHub info");
fetch('https://api.github.com/users/hmothershed')
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Grabbing my GitHub info");
    console.log(data);
  });
```
