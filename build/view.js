/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
window.addEventListener('DOMContentLoaded', () => {
  const players = document.querySelectorAll('.uncommon-audio-player');
  if (players.length === 0) return;
  players.forEach(player => {
    const onOffButton = player.querySelector('.uncommon-audio-player__controls');
    const audio = player.querySelector('audio');
    if (!audio) return;
    setTimeout(() => {
      if (!audio.paused) {
        onOffButton.classList.add('is-playing');
      }
    }, 100);
    onOffButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        onOffButton.classList.add('is-playing');
      } else {
        audio.pause();
        onOffButton.classList.remove('is-playing');
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map