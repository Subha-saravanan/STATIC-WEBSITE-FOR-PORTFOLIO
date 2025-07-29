// Typing Effect – only your welcome message now
const phrases = ["Hi! I'm Subha,", "Welcome to my portfolio"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const textDisplay = document.getElementById('typed');
  const currentPhrase = phrases[i];
  
  if (!isDeleting && j < currentPhrase.length) {
    textDisplay.textContent = currentPhrase.substring(0, j++);
  } else if (isDeleting && j > 0) {
    textDisplay.textContent = currentPhrase.substring(0, j--);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
  }
  
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Light/Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
