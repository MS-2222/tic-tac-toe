
const gameboard = (() => {
    //let tilesArray = ['X', 'O', 'O', 'X', 'X', 'O', 'O', 'X', 'X']
    let tilesArray = Array(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    //let arrayLength = tilesArray.length;
    let container = document.querySelector('.container');
    let removeSquares = () => {
        container.innerHTML = ''
    }
    let drawSquares = () => {
        tilesArray.forEach(tile => {
            let square = document.createElement('div')
            square.className = 'square';
            square.style.width = (450 / 3) + 'px';
            square.style.height = (450 / 3) + 'px';
            square.textContent = tile
            container.appendChild(square);
        })
    }
    drawSquares();
    return {
        tilesArray,
        drawSquares,
        removeSquares
    }
})();