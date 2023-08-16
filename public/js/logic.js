document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const numberContainer = document.getElementById('number-container');
  const dropZone = document.getElementById('drop-zone');
  const resetButton = document.getElementById('reset-button');

  let totalScore = 0;

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

  startButton.addEventListener('click', () => {
    startButton.remove();
    displayNumbers();

    // Rest of the existing code
    // Allows user to drag number to the dropzone.
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    //Allows user to drop numbers into drop zone.
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

    // You might also want to clear the drop zone here if needed
    dropZone.textContent = '0';
  });
});
