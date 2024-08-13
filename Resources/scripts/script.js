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

