function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //to rewind to start
    audio.play();
    key.classList.add('playing');
}
document.addEventListener('keydown', playSound);
function removeTransition(e){
    if (e.propertyName!='transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(k=>k.addEventListener('transitionend',removeTransition))
keys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        const keyCode = key.getAttribute('data-key');
        playSound({ keyCode });
    })
})
