# Challenge #12 - Key Sequence Detection

![KeyDetection](https://github.com/user-attachments/assets/6aeb22cd-4f0a-4475-93c5-7ffba255dad9)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/12-Key-Sequence-Detection/)
This project is a simple key detection game where users must enter a secret code correctly. If they succeed, a congratulatory message appears with a falling heart animation. (This is my interpretation of the code, the original code from WesBos is down below)

## 🚀 Features
- Detects keystrokes and checks against a secret code
- Real-time feedback on correct and incorrect inputs
- Displays a success message when the correct code is entered
- Fun animated hearts on success
- Reset functionality to restart the game

## 🔧 How It Works
This project listens for keyboard input and validates it against a predefined secret code. Below are key functionalities:

### Checking User Input
```js
hiddenInput.addEventListener("input", () => {
      let typedText = hiddenInput.value;

      spans.forEach((span, index) => {
        if (typedText[index] === undefined) {
          span.classList.remove("correct", "incorrect");
        } else if (typedText[index] === secretCode[index]) {
          span.classList.add("correct");
          span.classList.remove("incorrect");
        } else {
          span.classList.add("incorrect");
          span.classList.remove("correct");
        }
      });
```

### Displaying Hearts on Success
```js
function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      const colors = ["💙", "💜", "💛", "💚", "❤️"];
      heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      heartContainer.appendChild(heart);
      setTimeout(() => { heart.remove(); }, 3000);
    }
```

### Resetting the Game
```js
function resetGame() {
      message.innerHTML = 'Enter the Secret Code: ';
      message.appendChild(initializeSecretText());
      hiddenInput.value = "";
      hiddenInput.focus();
      resetButton.style.display = "none";
      spans = document.querySelectorAll("#secretText span");
      clearInterval(heartInterval);
    }

 resetButton.addEventListener("click", resetGame);
```
This simple game provides an interactive way to practice typing a specific sequence with engaging visual feedback.

## The Original Code from WesBos
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Key Detection</title>
    <script type="text/javascript" src="./cornify.js"></script>
    <link rel="icon" href="https://fav.farm/✅" />
  </head>
  <body>
    <script>
      const pressed = [];
      const secretCode = "wesbos";

      window.addEventListener("keyup", (e) => {
        console.log(e.key);
        pressed.push(e.key);
        pressed.splice(
          -secretCode.length - 1,
          pressed.length - secretCode.length
        );
        if (pressed.join("").includes(secretCode)) {
          console.log("DING DING!");
          cornify_add();
        }
        console.log(pressed);
      });
    </script>
  </body>
</html>
```
