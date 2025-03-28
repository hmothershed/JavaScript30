# Challenge #18 - Adding Up Times with Reduce
<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3Q5cW5yeXpkdGljZ3NwZGlpY2JmOGI3Y3ZjOGQ2YmozM3hid3d1ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9lMoyThpKynde/giphy.gif" />
</div>

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/18-Adding-Up-Times-with-Reduce/)
This project calculates the total duration of multiple videos listed on a webpage. It extracts tiem data from HTML elements, converts them to seconds, sums up the total, and then formats the result into hours, minutes, and seconds. Open your browser console (F12 → Console) to see the results in action!

## 🚀 Features
- Extracts video duration from HTML `data-time` attributes.
- Converts `MM:SS` format into total seconds.
- Computes the total duration across all videos.
- Outputs the total duration in `HH:MM:SS` format to the JavaScript console.

## 🔧 How It Works
### 1. Extracting Time Data:
This selects all elements containing the `data-time` attribute and converts them into an array.
```js
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```

### 2. Converting Time to Seconds:
Splits `MM:SS` fomat into minutes and seconds. Converts everything into total seconds. Uses `reduce()` to sum up all video durations.
```js
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);
```
### 3. Formatting the Total Time:
Converts total seconds into hours, minutes, and remaining seconds. Uses `Math.floor()` to get whole numbers for hours and minutes.
```js
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;
```

### 4. Displaying the Result:
Prints the total video duration in `HH:MM:SS` format in the JavaScript console.
```js
console.log(hours, mins, secondsLeft);
```

## Example Calculation:
If we have three videos with durations:
- `5:43` &rarr; (5 * 60) + 43 = **343 seconds**
- `2:33` &rarr; (2 * 60) + 33 = **153 seconds**
- `3:45` &rarr; (3 * 60) + 45 = **225 seconds**
Total Seconds: `343 + 153 + 225 = 721 seconds`
<br>

Convert to `HH:MM:SS`:
- **Hours**: `Math.floor(721 / 3600) = 0`
- **Minutes** - `Math.floor(721 % 3600) = 12`
- **Seconds** - `721 % 60 = 1`
<br>

Final Output: `0 hours, 12 minutes, 1 second` (logged to the console).
