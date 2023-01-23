document.addEventListener('keydown', function(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //to rewind to start
    audio.play();
    // console.log(key)
    key.classList.add('playing');
})
function removeTransition(e){
    if (e.propertyName!='transform') return; //skip it if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(k=>k.addEventListener('transitionend',removeTransition))
