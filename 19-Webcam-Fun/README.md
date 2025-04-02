# Challenge #19 - Unreal Webcam Fun
![19](https://github.com/user-attachments/assets/b130ac02-31ac-4fcf-83ef-5b241c8710d1)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/19-Webcam-Fun/)
This project captures video from a user's webcam, applies real-time RGB filtering, and allows users to take and display photos with a fun, retro-style effect.

## 🚀 Features
- Live video feed using `getUserMedia()`
- Real-time RGB filtering with adjustable sliders
- Capture and save photos with a single click
- Fun photo styling with slight rotations for a vintage effect

## 🔧 How It Works
### 1. Setting Up the Video Stream
The project uses `getUserMedia()` to access the webcam and stream the video to an HTML `<video>` element:
```js
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream => {
    video.srcObject = localMediaStream;
    video.play();
  })
  .catch(err => console.error("Oh no! Webcam access denied.", err));
```

### 2. Drawing Video Frames onto a Canvas
To apply real-time effects, video frames are continuously drawn onto a `<canvas>` element:
```js
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16); 
}
```

### 3. Capturing a Photo
Clicking the **Take Photo** button triggers an audio sound and savese the current canvas frame as an image:
```js
function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "imageFun");
  link.innerHTML = `<img src="${data}" alt="Photo" />`;

  strip.insertBefore(link, stip.firstChild);
}
```

### 4. RGB Filtering
Users can adjust RGB sliders to filter the image. The filter applies minimum and maximum thresholds to each color channel:
```js
// function to apply a red effect to the video feed
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
  }
  return pixels;
}

// function to apply an RGB split effect, shifting colors
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 500] = pixels.data[i + 1]; // green
    pixels.data[i - 500] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

// function to apply a green screen effect, removing a color range
function greenScreen(pixels) {
  const levels = {};
  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });
  for (i = 0; i < pixels.data.lenght; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0; 
    }
  }
  return pixels;
}

```

### 5. Displaying Photos
Captured photos are added to the `.strip` section with slight rotation effects to make them visually interesting:
```css
.strip a:nth-child(5n+1) img { transform: rotate(10deg); }
.strip a:nth-child(5n+2) img { transform: rotate(-2deg); }
.strip a:nth-child(5n+3) img { transform: rotate(8deg); }
.strip a:nth-child(5n+4) img { transform: rotate(-11deg); }
.strip a:nth-child(5n+5) img { transform: rotate(12deg); }
```
