const playSound = (event) => {
    const keyCode = event.keyCode || event.target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`button[data-key="${keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
}

const removeTransition = (event) => {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);