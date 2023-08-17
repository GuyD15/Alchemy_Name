document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const numberContainer = document.getElementById('number-container');
  const dropZone = document.getElementById('drop-zone');
  const resetButton = document.getElementById('reset-button');
  const timerDisplay = document.getElementById('timer');
  const targetDisplay = document.getElementById('target-number');
  const scoreDisplay = document.getElementById('score');

  let totalScore = 0;
  let timerInterval;
  let targetNumber;
  let currentScore = 0;

  function displayNumbers() {
      for (let i = 1; i <= 10; i++) {
          const number = document.createElement('div');
          number.classList.add('draggable-number');
          number.textContent = i;
          number.setAttribute('draggable', 'true');
          numberContainer.appendChild(number);
          number.addEventListener('dragstart', (e) => {
              e.dataTransfer.setData('text/plain', e.target.textContent);
          });
      }
  }

  function generateTargetNumber() {
      return Math.floor(Math.random() * 55) + 1;
  }

  function startTimer(duration, display) {
      clearInterval(timerInterval);
      let timer = duration;
      timerInterval = setInterval(function() {
          let minutes = parseInt(timer / 60, 10);
          let seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          display.textContent = minutes + ":" + seconds;

          if (--timer < 0) {
              clearInterval(timerInterval);
              document.body.__x.$data.timeOutNotification = true; // Show time out notification
          }
      }, 1000);
  }

  function resetRound() {
      clearInterval(timerInterval);
      while (numberContainer.firstChild) {
          numberContainer.removeChild(numberContainer.firstChild);
      }
      totalScore = 0;
      dropZone.textContent = '0';
      displayNumbers();
      startTimer(20, timerDisplay);
      targetNumber = generateTargetNumber();
      targetDisplay.textContent = "Target: " + targetNumber;
      document.body.__x.$data.exceededNotification = false;
      document.body.__x.$data.timeOutNotification = false;
  }

  function resetGame() {
      clearInterval(timerInterval);
      while (numberContainer.firstChild) {
          numberContainer.removeChild(numberContainer.firstChild);
      }
      totalScore = 0;
      currentScore = 0;
      scoreDisplay.textContent = "Score: 0";
      dropZone.textContent = '0';
      displayNumbers();
      startTimer(20, timerDisplay);
      targetNumber = generateTargetNumber();
      targetDisplay.textContent = "Target: " + targetNumber;
      document.body.__x.$data.exceededNotification = false;
      document.body.__x.$data.timeOutNotification = false;
  }

  startButton.addEventListener('click', () => {
      startButton.remove();
      displayNumbers();
      startTimer(20, timerDisplay);
      targetNumber = generateTargetNumber();
      targetDisplay.textContent = "Target: " + targetNumber;
      document.body.__x.$data.exceededNotification = false;
      document.body.__x.$data.timeOutNotification = false;
  });

  dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
  });

  dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedNumber = e.dataTransfer.getData('text/plain');
      totalScore += parseInt(draggedNumber);
      dropZone.textContent = totalScore;

      if (totalScore === targetNumber) {
          currentScore++;
          scoreDisplay.textContent = "Score: " + currentScore;
          document.body.__x.$data.exceededNotification = false;
          document.body.__x.$data.timeOutNotification = false;
          resetRound();
      } else if (totalScore > targetNumber) {
          document.body.__x.$data.exceededNotification = true;
          clearInterval(timerInterval);
          resetRound();
      }
  });

  resetButton.addEventListener('click', resetGame);
});
