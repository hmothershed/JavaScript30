# Challenge #23 - Speech Synthesis

![image](https://github.com/user-attachments/assets/d63ff9bb-451d-4a9c-91ae-3d5ca23b4ddb)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/23-Speech-Synthesis/)
This project enables users to select different voices and adjust speech settings using the Web Speech API. Users can enter text, select a voice, and modify pitch and rate before hearing the text spoken aloud.

## 🚀 Features
- Selectable voice options based on available system voices
- Adjustable pitch and rate using sliders
- Buttons to start and stop speech synthesis
- Automatically updates voice list when available
- Dynamically updates pitch and rate values

## 🔧 How It Works
The script initializes a `SpeechSynthesisUtterance` object for speech synthesis:
```js
const msg = new SpeechSynthesisUtterance();
let voices = [];
msg.text = document.querySelector('[name="text"]').value;
```
It retrieves available voices and populates the dropdown list:
```js
function populateVoices() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voicesDropdown.appendChild(option);
  }
}
```
The selected voice is applied to the speech synthesis object:
```js
function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}
```
Speech playback is controlled with a toggle function:
```js
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}
```
The pitch and rate of the speech are adjusted dynamically:
```js
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}
```
Event listensers ensure interactivity:
```js
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
rateSlider.addEventListener("input", updateValue);
pitchSlider.addEventListener("input", updateValue);
```
This setup allows users to dynamically control text-to-speech features for enhanced accessibility and interactivity.
