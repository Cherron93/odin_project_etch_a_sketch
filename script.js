const gridContainer = document.querySelector('#gridContainer');
const newGridBtn = document.querySelector('#newGridBtn');

// Create initial 16 x 16 grid
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('gridSquare');
    div.style.width = `${100/16}%`
    div.style.height = `${100/16}%`
};
// Clearout existign grid
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function makeRandColor() {
    return `rgb(${(Math.round((Math.random())*255))}, ${(Math.round((Math.random())*255))}, ${(Math.round((Math.random())*255))})`
}


function darkenColor(gridSquare) {
    let rgb = gridSquare.style.backgroundColor
    rgb = rgb.substring(4, rgb.length-1)
    .replace(/ /g, '')
    .split(',');
    let rValue = parseInt(rgb[0]) - 25.5;
    let gValue = parseInt(rgb[1]) - 25.5;
    let bValue = parseInt(rgb[2]) - 25.5;
    return `rgb(${rValue},${gValue},${bValue})`
}


newGridBtn.addEventListener('click', function createNewGrid () {
    let newDimensions = prompt('Tell me how many squares per side');
    if (newDimensions <= 100 && newDimensions >= 1) {
        removeAllChildNodes(gridContainer)
        for (let i = 0; i < (newDimensions * newDimensions); i++) {
            let div = document.createElement('div');
            gridContainer.appendChild(div);
            div.style.width = `${100/newDimensions}%`
            div.style.height = `${100/newDimensions}%`
            div.classList.add('gridSquare');
            div.addEventListener('mouseenter', () => {
                if (div.style.backgroundColor === '') {
                    div.style.backgroundColor = makeRandColor();
                } else {
                    div.style.backgroundColor = darkenColor(div);
                }
            })
        };
    } else {
        alert('Not a valid input. Try a number greater than zero and no more than 100')
    }
})

const gridSquares = document.querySelectorAll('.gridSquare')

for (const gridSquare of gridSquares) {
    gridSquare.addEventListener('mouseenter', () => {
        if (gridSquare.style.backgroundColor === '') {
            gridSquare.style.backgroundColor = makeRandColor();
        } else {
            gridSquare.style.backgroundColor = darkenColor(gridSquare);
        }
    });
};
    