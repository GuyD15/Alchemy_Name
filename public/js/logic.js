document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const numberContainer = document.getElementById('number-container');
  const dropZone = document.getElementById('drop-zone');
  const resetButton = document.getElementById('reset-button');
  const timerDisplay = document.getElementById('timer');

  let totalScore = 0;
  let timerInterval; // Keep a reference to the timer interval

  // Displays the draggable numbers when start button is clicked.
  function displayNumbers() {
    for (let i = 1; i <= 10; i++) {
      const number = document.createElement('div');
      number.classList.add('draggable-number');
      number.textContent = i;
      number.setAttribute('draggable', 'true');

      numberContainer.appendChild(number);

      // Allows user to drag numbers
      number.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
      });
    }
  }

  // Timer function
  function startTimer(duration, display) {
    clearInterval(timerInterval); 

    let timer = duration;
    timerInterval = setInterval(function () {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  startButton.addEventListener('click', () => {
    startButton.remove();
    displayNumbers();
    startTimer(60, timerDisplay); // Start timer for 60 seconds

  
    // Allows user to drag number to the dropzone.
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    // Allows user to drop numbers into drop zone.
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();

      // Adds draggedNumber value to current score.
      const draggedNumber = e.dataTransfer.getData('text/plain');
      const existingTotal = totalScore;
      totalScore = existingTotal + parseInt(draggedNumber);
      dropZone.textContent = totalScore;
    });
  });

  resetButton.addEventListener('click', () => {
    totalScore = 0; // Reset the score only
    dropZone.textContent = '0'; // Clear the drop zone
    startTimer(60, timerDisplay); // Restart the timer for 60 seconds
  });
});
