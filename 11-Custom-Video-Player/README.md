# Challenge #11 - Custom HTML5 Video Player

![image](https://github.com/user-attachments/assets/54d86351-a532-4499-aad3-57b48934be72)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/11-Custom-Video-Player/)
This project is a simple yet functional HTML Video Player that includes essential playback controls, volume adjustment, speed control, and full-screen support.

## 🚀 Features
- Play/Pause functionality
- Volume and playback speed controls
- Progress bar with seek functionality
- Skip forward and backward buttons
- Fullscreen toggle support

## 🔧 How It Works
The player utilizes JavaScript to manage video playback and user interactions. Below are some key functionalities:
### Play/Pause
```js
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}
```

### Updating the Play Button Icon
```js
function updateButton() {
	const icon = this.paused ? '►' : '❚❚';
	console.log(icon);
	toggle.textContent = icon;
}
```

### Handling Progress Updates
```js
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}
```

### Fullscreen Toggle
```js
function toggleFullScreen() {
    if(player.requestFullscreen) {
    	if(!document.fullScreenElement) {
    		player.requestFullscreen();
    	} else {
    		document.cancelFullScreen();
        }
    } else if(player.webkitRequestFullscreen) {
        if(!document.webkitFullscreenElement) {
        	player.webkitRequestFullscreen();
        } else {
            document.webkitCancelFullScreen();
        }
    } else if(player.mozRequestFullScreen) {
        if(!document.mozFullScreenElement) {
        	player.mozRequestFullScreen();
        } else {
            document.mozCancelFullScreen();
        }
    } else {
    	console.log('Fullscreen API is not supported.');
    }
}

fullScreen.addEventListener('click', toggleFullScreen);
```

This player provides a user-friendly interface with smooth and responsive controls, making it a great addition to any web project!
