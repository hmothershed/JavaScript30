# Challenge #1 - JavaScript Drum Kit
![image](https://github.com/user-attachments/assets/be89e2e7-e976-4664-b248-2a06c7561818)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/01-Drum-Kit/)
This is a simple and interactive drum kit built with HTML, CSS, and JavaScript. Press the corresponding keys on your keyboard to play drum sounds and enjoy a fun musical experience!

## 🚀 Features
- **Keyboard-Controlled Sounds:** Press keys A, S, D, F, G, H, J, K, L to play different drum sounds.
- **Visual Feedback:** Keys light up and animate when pressed for an engaging user experience.
- **Smooth Transitions:** CSS animations enhance the look and feel.
- **Audio Playback:** Uses JavaScript to trigger audio files and reset playback for responsiveness.
- **Event Listeners:** Captures `keydown` and `keyup` events to handle user input smoothly.

## 🔧 How It Works
- The `keydown` event listens for key presses and plays the corresponding sound.
- CSS transitions provide a glowing effect when a key is pressed.
- The `keyup` event removes the effect to restore the original appearance.
- The `.currentTime = 0;` ensures rapid retriggering of sounds without delay.
