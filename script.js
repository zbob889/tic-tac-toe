const gameBoard = (() => {

    const boardCells = (mark) => {
        return { mark };
    };

    const topRight = boardCells('empty');
    const topMiddle = boardCells('empty');
    const topLeft = boardCells('empty');
    const centerRight = boardCells('empty');
    const centerMiddle = boardCells('empty');
    const centerLeft = boardCells('empty');
    const bottomRight = boardCells('empty');
    const bottomMiddle = boardCells('empty');
    const bottomLeft = boardCells('empty');

    const currentBoard = [topRight, topMiddle, topLeft, centerRight, centerMiddle, centerLeft, bottomRight, bottomMiddle, bottomLeft];

})();

const players = (name) => {
    return { name };
};

const displayController = (() => {

    let count = 1;

    const topRightCell = document.getElementById('topRight');
    const topMiddleCell = document.getElementById('topMiddle');
    const topLeftCell = document.getElementById('topLeft');
    const centerRightCell = document.getElementById('centerRight');
    const centerMiddleCell = document.getElementById('centerMiddle');
    const centerLeftCell = document.getElementById('centerLeft');
    const bottomRightCell = document.getElementById('bottomRight');
    const bottomMiddleCell = document.getElementById('bottomMiddle');
    const bottomLeftCell = document.getElementById('bottomLeft');

    const board = document.getElementById('board');

    board.addEventListener('click', (e) => {
        if((count % 2) != 0 && e.target.className === 'cell'){
            // mark it x
            e.target.className = 'x';
            e.target.innerHTML = '<svg width="150px" height="150px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="black"/></svg>';
            count++;
        } else if ((count % 2) === 0 && e.target.className === 'cell'){
            // mark it o
            e.target.className = 'x';
            e.target.innerHTML = '<svg width="150px" height="150px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z" stroke="black"/></svg>';
            count++;
        };
    });

})();