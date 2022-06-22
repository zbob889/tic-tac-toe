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