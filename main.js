const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const block = document.createElement('div');
        block.classList.add('block');

        row.appendChild(block);
    }

    container.appendChild(row);
}

const button = document.querySelector('button');
button.addEventListener('click', changeGrid);

function changeGrid() {
    let squaresPerSide = getInput();

    removeCurrentGrid();
}

function getInput() {
    // Keep asking until the user enter a valid number
    while (true) {
        let input = prompt('Enter the number of squares per side (1 <= n <= 100)');
    
        if (input === null) {
            alert('You canceled!');
            break;
        } else {
            input = +input;     // Convert to number

            if (isNaN(input)
                || Math.floor(input) !== input
                || input < 1
                || input > 100
            ) {
                alert('Please enter a valid number!');
            } else {
                return input;
            }
        }
    }
}

function removeCurrentGrid() {
}