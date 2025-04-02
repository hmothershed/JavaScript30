# Challenge #20 - Native Speech Recognition

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/20-Speech-Recognition/)
This project utilizes the Web Speech API to enable real-time speech recognition in a web browser, allowing spoken words to be translated into text dynamically.

## 🚀 Features
- Real time speech-to-text conversion
- Automatic transcription updates in a user-friendly interface
- Coninuous listening for seamless input
- Styled text display with a lined-paper effect
- alerts users if their browser does not support speech recognition


## 🔧 How It Works
This project relies on the `SpeechRecognition` API, which is installed at the beginning of the script:
```js
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```
If the browser does not support speech recognition, an alert is displayed:
```js
if (!window.SpeechRecognition) {
  alert("Your browser does not support speech recognition. Use Chrome!");
}
```
A new `SpeechRecognition` instance is created and configured to recognize interim results:
```js
const recognition = new SpeechRecognition();
recognition.interimResults = true;
```
A `<div>` element with the class `words` serves as the container for the transcribed text. As speech is recognized, the text content of the dynamically created `<p>` elements updates in real time:
```js
recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  
  p.textContent = transcript;
  
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});
```
The recognition service automatically restarts upon ending, ensuring continuous listening:
```js
recognition.addEventListener("end", recognition.start);
recognition.start();
```
