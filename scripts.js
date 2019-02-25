// get our elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.player__slider')

// build our functions

function togglePlay() {
 /* if(video.pause) {
    video.play()
  } else {
    video.pause()
  }
} */
const method = video.paused ? 'play' : 'pause'
video[method]()
}

// hook up the listeneners 
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
