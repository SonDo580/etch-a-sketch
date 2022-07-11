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
    let input = prompt('Enter the number of squares per side (n <= 100)')
}