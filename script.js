const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('gridSquare');
};

const gridSquares = document.querySelectorAll('.gridSquare')

for (const gridSquare of gridSquares) {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = 'orange';
    })
}


