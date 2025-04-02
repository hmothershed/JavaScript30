# Challenge #21 - Geolocation based Speedometer and Compass

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/21-Geolocation/)
This project utilizes the Geolocation API to track the user's speed and heading in real time while displaying their latitude and longitude coordinates.

## 🚀 Features
- Displays the user's current speed
- Rotates an arrow to indicate heading direction
- Shows latitude and longitude coordinates
- Uses `wathPosition` to continuously update location data
- Alerts the user if location access is denied

## 🔧 How It Works
The script starts by selecting elements from the DOM:
```js
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latText = document.querySelector('#latitude');
const lonText = document.querySelector('#longitude');
```
It then checks if the browser supports Geolocation. If supported, it starts tracking positon changes using `watchPosition`:
```js
if (navigator.geolocation) {
  navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (err) => {
    console.error(err);
    alert('Allow your device to access your location for this to work!');
  });
```
Additionally, `getCurrentPosition` retrieves the user's initial latitude and longitude:
```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  latText.textContent = position.coords.latitude;
  lonText.textContent = position.coords.longitude;
}, (err) => {
  console.error(err);
  alert('Allow your device to access your location for this to work!');
});
```
This ensures that the page displays accurate real-time location data while updating the direction and speed dynamically.
