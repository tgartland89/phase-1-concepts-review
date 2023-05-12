// When countdown button is clicked, reduce the number inside the button by one

// If you continue clicking, this should keep counting down until you hit 0

// When the countdown hits 0, remove the button from the page

let countdownButton = document.querySelector('#countdown-button')
let count = 10;

countdownButton.addEventListener('click', () => {
  count--;

  if (count >= 0) {
    countdownButton.textContent = count;
  }

  if (count === 0) {
    countdownButton.remove();
  }
});
