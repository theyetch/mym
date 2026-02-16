const image = document.getElementById('soundTrigger');
const audio = document.getElementById('gnooshk');

image.addEventListener('click', () => {
    audio.currentTime = 0; // Rewind to start
    audio.play();
});