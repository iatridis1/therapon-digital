// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const demoBtn = document.getElementById('demoBtn');
  const resultSection = document.getElementById('result');
  const resultText = document.getElementById('resultText');

  // Example: Show hidden section and change text on button click
  demoBtn.addEventListener('click', () => {
    // Set text in the result paragraph
    resultText.textContent = "JavaScript is working! We've just revealed this hidden section.";

    // Remove the 'hidden' class to make the section visible
    resultSection.classList.remove('hidden');
  });
});
