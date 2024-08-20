const circle = document.getElementById('circleId');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  const target = e.target;
  if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.onclick) {
    circle.classList.add('circle-clickable');
  } else {
    circle.classList.remove('circle-clickable');
  }
});

function animate() {
  circle.style.left = `${mouseX}px`;
  circle.style.top = `${mouseY}px`;
  requestAnimationFrame(animate);
}

animate();

function triggerOverlayAnimation(delay) {
  setTimeout(function() {
      document.getElementById('overlay').classList.add('slide-up');
  }, delay);
}

window.addEventListener('load', function() {
  triggerOverlayAnimation(20); // Adjust the delay as needed
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const navLinks = document.querySelector('.nav-links');

  burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('active');
      navLinks.classList.toggle('show');
  });
});
