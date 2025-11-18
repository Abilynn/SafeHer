/* ---------------------------------------
   TYPEWRITER + FADE HYBRID HERO HEADING
---------------------------------------- */

const typedHeading = document.querySelector(".typed-heading");

// The text you want to animate:
const text = "Emergency Support Hotlines"; 

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedHeading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // typing speed
  }
}

// Start typewriter animation after fade-in completes
setTimeout(typeWriter, 900);
