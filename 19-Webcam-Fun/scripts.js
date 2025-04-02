// DOM elements
const video = document.querySelector(".player");    // video element to display webcam feed
const canvas = document.querySelector(".photo");    // canvas element for displaying images
const ctx = canvas.getContext("2d");    // canvas 2d rendering context
const strip = document.querySelector(".strip");   // container for storing captured images
const snap = document.querySelector(".snap");   // audio element for camera shutter sound

// function to access the webcam and display the video feed
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })  // request access to webcam video (no audio)
    .then((localMediaStream) => {
      console.log(localMediaStream);

      //  DEPRECIATION :
      //       The following has been depreceated by major browsers as of Chrome and Firefox.
      //       video.src = window.URL.createObjectURL(localMediaStream);
      //       Please refer to these:
      //       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`OH NO!!!`, err);   // log errors if access is denied
    });
}

// function to paint video frames onto the canvas at a set interval
function paintToCanvas() {
  const width = video.videoWidth;   // get video width
  const height = video.videoHeight;   // get video height
  canvas.width = width;   // set canvas width
  canvas.height = height;   // set canvas height

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);  // draw the current video frame onto the canvas
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    
    // apply visual effects (uncommon desired effect)
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;   // add transparency effect
    // pixels = greenScreen(pixels);
    
    // put the manipulated pixels back onto the canvas
    ctx.putImageData(pixels, 0, 0);
  }, 16); // run every 16ms (~60 frames per second)
}

// function to capture an image from the canvas to save it
function takePhoto() {
  // played the sound
  snap.currentTime = 0;   // reset audio to start
  snap.play();    // play canera shutter sound

  // convert canvas image to a downloadable data URL (JPEG format)
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'imageFun');
  link.innerHTML = `<img src="${data}" alt="Photo" />`;
  
  // insert the captured image at the beginning of the strip container
  strip.insertBefore(link, strip.firstChild);
}

// function to apply a red effect to the video feed
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // increase red value
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // decrease green value
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // decrease blue value
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

  // get user-defined color range values from input fields
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // loop thorugh every pixel in the image data
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // remove pixels that match the specified green screen range
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;   // make pixels transparent
    }
  }
  return pixels;
}

getVideo();
// once the video is ready, start painting it onto the canvas
video.addEventListener('canplay', paintToCanvas);
