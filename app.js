// Bring in toggle buttons
// loop through node list (forEach)
// add click event
// toggle active class on parent node and classList.toggle

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
