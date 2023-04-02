const audioElements=Array.from(document.getElementsByClassName("audio"));function play(e,a,t,s,r){audioElements.forEach((e=>{e.parentElement.classList.remove("active"),e.querySelector("audio").pause(),e.parentElement.querySelector(".play-btn").classList.remove("fa-pause"),e.parentElement.querySelector(".play-btn").classList.add("fa-play"),e.parentElement.querySelector("span[role=marker]").classList.remove("hide"),e.parentElement.querySelector(".volume-btn").classList.remove("active")})),e.classList.add("active"),a.play(),t.classList.remove("fa-play"),t.classList.add("fa-pause"),s.classList.add("hide"),r.classList.add("active")}function pause(e,a,t,s,r){e.classList.remove("active"),a.pause(),t.classList.remove("fa-pause"),t.classList.add("fa-play"),s.classList.remove("hide"),r.classList.remove("active")}function timestamp(e){let a=parseFloat(e,10),t=Math.floor(a/60),s=Math.floor(a);return t<10&&(t="0"+t),s<10&&(s="0"+s),t+":"+s}audioElements.forEach((e=>{const a=e.parentElement,t=a.querySelector("span[role=marker]"),s=a.querySelector(".play-btn"),r=a.querySelector(".volume-btn"),l=e.querySelector("audio");e.querySelector(".time-stamp .current-time"),e.querySelector(".time-stamp .duration");s.addEventListener("click",(e=>{e.stopPropagation(),l.paused?play(a,l,s,t,r):pause(a,l,s,t,r)})),a.addEventListener("click",(e=>{e.stopPropagation(),l.paused?play(a,l,s,t,r):pause(a,l,s,t,r)})),l.addEventListener("ended",(()=>{pause(a,l,s,t,r)}))}));