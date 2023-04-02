const audioElements = Array.from(document.getElementsByClassName("audio"));

// for every audio div...
audioElements.forEach(element => {
  const listItem = element.parentElement;
  const marker = listItem.querySelector("span[role=marker]");
  const playBtn = listItem.querySelector(".play-btn");
  const volumeBtn = listItem.querySelector(".volume-btn");
  const audioElement = element.querySelector("audio");
  const currentTimeSpan = element.querySelector(".time-stamp .current-time");
  const durationSpan = element.querySelector(".time-stamp .duration");

  playBtn.addEventListener("click", ev => {
    ev.stopPropagation();
    audioElement.paused
      ? play(listItem, audioElement, playBtn, marker, volumeBtn)
      : pause(listItem, audioElement, playBtn, marker, volumeBtn);
  });

  listItem.addEventListener("click", ev => {
    ev.stopPropagation();
    audioElement.paused
      ? play(listItem, audioElement, playBtn, marker, volumeBtn)
      : pause(listItem, audioElement, playBtn, marker, volumeBtn);
  });

  // when audio ends, pause
  audioElement.addEventListener("ended", () => {
    pause(listItem, audioElement, playBtn, marker, volumeBtn);
  });
});

function play(listItem, audioPlayer, button, marker, volumeBtn) {
  // pause all other tracks
  audioElements.forEach(el => {
    el.parentElement.classList.remove("active");
    el.querySelector("audio").pause();
    el.parentElement.querySelector(".play-btn").classList.remove("fa-pause");
    el.parentElement.querySelector(".play-btn").classList.add("fa-play");
    el.parentElement
      .querySelector("span[role=marker]")
      .classList.remove("hide");
    el.parentElement.querySelector(".volume-btn").classList.remove("active");
  });

  listItem.classList.add("active");
  audioPlayer.play();
  button.classList.remove("fa-play");
  button.classList.add("fa-pause");

  // lock marker span on hidden
  marker.classList.add("hide");
  volumeBtn.classList.add("active");
}

function pause(listItem, audioPlayer, button, marker, volumeBtn) {
  listItem.classList.remove("active");
  audioPlayer.pause();
  button.classList.remove("fa-pause");
  button.classList.add("fa-play");

  // unlock marker span
  marker.classList.remove("hide");
  volumeBtn.classList.remove("active");
}

// Time stampify numbers

function timestamp(float) {
  let parsed = parseFloat(float, 10);
  let minutes = Math.floor(parsed / 60);
  let seconds = Math.floor(parsed);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
