window.addEventListener('DOMContentLoaded', () => {

  const players = document.querySelectorAll('.uncommon-audio-player');
  players.forEach((player) => {

    const onOffButton = player.querySelector('.uncommon-audio-player__controls');
    const audio = player.querySelector('audio');
    
    setTimeout(() => {
      if (!audio.paused) {
        onOffButton.classList.add('is-playing');
      }
    }, 100)

    onOffButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        onOffButton.classList.add('is-playing');
      } else {
        audio.pause();
        onOffButton.classList.remove('is-playing');
      }
    })
  })
})