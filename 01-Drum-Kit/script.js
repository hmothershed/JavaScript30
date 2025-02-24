function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // stop function from running
    if (!audio) return;

    //rewind audio
    audio.currentTime = 0;
    audio.play();

    // add class "playing" to "key" also .remove, .toggle
    key.classList.add("playing");
}

function removeTransition(e){
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach (key => key.addEventListener('transitioned', removeTransition));

window.addEventListener('keydown', playSound);