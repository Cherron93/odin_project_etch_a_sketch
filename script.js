const gridContainer = document.querySelector('#gridContainer');
const newGridBtn = document.querySelector('#newGridBtn');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('gridSquare');
    div.style.width = `${gridContainer.style.width / 16}px`
    div.style.height = `${gridContainer.style.height / 16}px`
};

const gridSquares = document.querySelectorAll('.gridSquare')

for (const gridSquare of gridSquares) {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = 'orange';
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


newGridBtn.addEventListener('click', function createNewGrid () {
    let newDimensions = prompt('Tell me how many squares per side');
    if (newDimensions <= 100 && newDimensions >= 1) {
        removeAllChildNodes(gridContainer)
        for (let i = 0; i < (newDimensions * newDimensions); i++) {
            let div = document.createElement('div');
            gridContainer.appendChild(div);
            div.style.width = `${gridContainer.style.width / newDimensions}px`
            div.style.height = `${gridContainer.style.height / newDimensions}px`
            div.classList.add('gridSquare');
            
        };
    } else {
        alert('Not a valid input. Try a number greater than zero and no more than 100')
    }
})


