document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const numberContainer = document.getElementById('number-container');
    const dropZone = document.getElementById('drop-zone');

    startButton.addEventListener('click', () => {
        startButton.remove();

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
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault(); 
        });
        

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();

            const draggedNumber = e.dataTransfer.getData('text/plain');
            const existingTotal = parseInt(dropZone.textContent) || 0;
            const newTotal = existingTotal + parseInt(draggedNumber);
            dropZone.textContent = newTotal;
        });
    });
});