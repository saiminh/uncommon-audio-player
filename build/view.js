window.addEventListener("load",(()=>{document.querySelectorAll(".uncommon-audio-player").forEach((e=>{const a=e.querySelector(".uncommon-audio-player__controls"),s=e.querySelector("audio");setTimeout((()=>{s.paused||a.classList.add("is-playing")}),100),a.addEventListener("click",(()=>{s.paused?(s.play(),a.classList.add("is-playing")):(s.pause(),a.classList.remove("is-playing"))}))}))}));