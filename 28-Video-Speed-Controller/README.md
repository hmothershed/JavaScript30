# Challenge #28 - Video Speed Controller

![image](https://github.com/user-attachments/assets/7af98a9c-f8cf-43da-a743-937caba356e1)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/28-Video-Speed-Controller/)
This project allows users to adjust the playback speed of a video dynamically by moving their cursor over a speed control bar.

## 🚀 Features
- **Real-time Speed Adjustment**: Changes the playback speed of a video based on cursor position
- **Visual Feedback**: Updates a speed bar to indicate the current speed setting
- **Smooth Interaction**: Ensures a fluid transition between different playback speeds

## 🔧 How It Works
### Selecting Elements
```js
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
```
- Selects the speed control bar (`.speed`)
- Selects the inner bar (`.speed-bar`) that visually represents speed changes
- Selects the video element (`.flex`) to apply the speed adjustment

### Handling Cursor Movement
```js
function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
```
- Calculates the vertical position (`y`) of the cursor relative to the speed bar
- Computes `percent`, representing how far down the cursor is within the speed bar
- Defines a minimum (`0.4x`) and maximum (`4x`) playback speed
- Converts the percentage into a valid playback speed value

### Updating the UI and Video Playback Speed
```js
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}
```
- Adjusts the visual height of the bar to reflect the selected speed
- Displays the current playback speed as text inside the bar
- Sets the video's `playbackRate` property to apply the new speed

### Attaching the Event Listener
```js
speed.addEventListener('mousemove', handleMove);
```
- Listens for `mousemove` events on teh speed bar and calls `handleMove` to update the playback speed dynamically
