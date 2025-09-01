// Typewriter that cycles through phrases
const phrases = [
  "Coder",
  "Creator",
  "Innovator",
  "Python • C# • C++ • HTML • JS • CSS"
];

const typeEl = document.getElementById("typewriter");
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];
  const speed = deleting ? 28 : 55; // typing / deleting speed
  const pause = 1300; // pause at end

  if (!deleting) {
    typeEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, pause);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeEl) typeLoop();

  // Improve carousel smoothness by ensuring enough content fills width (optional)
  const track = document.querySelector(".track");
  if (track) {
    // If track is too short, clone its children until width is sufficient
    const minWidth = track.parentElement.offsetWidth * 2;
    let total = track.scrollWidth;
    while (total < minWidth) {
      [...track.children].forEach((child) => {
        track.appendChild(child.cloneNode(true));
      });
      total = track.scrollWidth;
    }
  }
});
