/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
window.addEventListener('load', () => {
  const players = document.querySelectorAll('.uncommon-audio-player');
  players.forEach(player => {
    const onOffButton = player.querySelector('.uncommon-audio-player__controls');
    onOffButton.addEventListener('click', () => {
      const audio = player.querySelector('audio');
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