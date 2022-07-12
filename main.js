const container = document.querySelector('.container');
let squaresPerSide = 16;

const button = document.querySelector('button');
button.addEventListener('click', changeGrid);

createGrid(squaresPerSide);

function createGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < squaresPerSide; j++) {
            const block = document.createElement('div');
            block.classList.add('block');

            block.addEventListener('mouseover', changeBlock);
            block.addEventListener('mouseout', toNormalBlock);
    
            row.appendChild(block);
        }
    
        container.appendChild(row);
    }
}

function changeGrid() {
    squaresPerSide = getInput();
    removeGrid();
    createGrid(squaresPerSide);
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

function removeGrid() {
    const rows = document.querySelectorAll('.row');
    for (const row of rows) {
        container.removeChild(row);
    }
}

function changeBlock(e) {
    const block = e.target;
    block.style.backgroundColor = getRandomRGB();
}

function getRandomRGB() {
    const rgbValue = [];

    for (let i = 1; i <= 3; i++) {
        rgbValue.push(getRandomInt(0, 255));
    }

    return `rgb(${rgbValue})`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toNormalBlock(e) {
    const block = e.target;
    block.style.backgroundColor = '';
}