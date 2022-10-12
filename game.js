
const gameboard = (() => {
    let tilesArray = new Array(9);
    let arrayLength = tilesArray.length;
    let container = document.querySelector('.container');
    for(let i = 0; i < arrayLength; i++) {
        let square = document.createElement('div')
        square.className = 'square';
        square.style.width = (450 / 3) + 'px';
        square.style.height = (450 / 3) + 'px';
        container.appendChild(square);
    }


})();