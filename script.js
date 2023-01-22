document.addEventListener('keydown', function(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //to rewind to start
    audio.play();
    console.log(key)
    key.classList.add('playing')
})