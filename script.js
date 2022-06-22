const gameBoard = (() => {

    const boardCells = (name, mark) => {
        return { name, mark };
    };

    const currentBoard = [
        boardCells('topRight', 'empty'),
        boardCells('topMiddle', 'empty'),
        boardCells('topLeft', 'empty'),
        boardCells('centerRight', 'empty'),
        boardCells('centerMiddle', 'empty'),
        boardCells('centerLeft', 'empty'),
        boardCells('bottomRight', 'empty'),
        boardCells('bottomMiddle', 'empty'),
        boardCells('bottomLeft', 'empty'),
    ];

    return currentBoard;

})();

const players = (name) => {
    return { name };
};

const displayController = (() => {

    let count = 1;

    const board = document.getElementById('board');
    const newGame = document.getElementById('newGame');

    board.addEventListener('click', (e) => {
        if((count % 2) != 0 && e.target.className === 'cell'){
            // mark it x
            e.target.className = 'x';
            e.target.innerHTML = '<svg width="150px" height="150px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="black"/></svg>';
            count++;
            let object = gameBoard.find(element => element.name === e.target.getAttribute('id'));
            object.mark = 'x'; 
        } else if ((count % 2) === 0 && e.target.className === 'cell'){
            // mark it o
            e.target.className = 'x';
            e.target.innerHTML = '<svg width="150px" height="150px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z" stroke="black"/></svg>';
            count++;
            let object = gameBoard.find(element => element.name === e.target.getAttribute('id'));
            object.mark = 'o'; 
        };
    });

    newGame.addEventListener('click', () => {
        count = 1;
        const cells = document.querySelectorAll('.x');
        for (const x of cells){
            x.className = 'cell';
            x.innerHTML = '';
        };
        for (const e of gameBoard){
            e.mark = 'empty';
        };
    });

    function endGame(){
        if((gameBoard[0].mark === 'x' && gameBoard[1].mark === 'x' && gameBoard[2] === 'x') || 
            (gameBoard[3].mark === 'x' && gameBoard[4].mark === 'x' && gameBoard[5] === 'x') ||
            (gameBoard[6].mark === 'x' && gameBoard[7].mark === 'x' && gameBoard[8] === 'x') ||
            (gameBoard[0].mark === 'x' && gameBoard[3].mark === 'x' && gameBoard[6] === 'x') || 
            (gameBoard[1].mark === 'x' && gameBoard[4].mark === 'x' && gameBoard[7] === 'x') || 
            (gameBoard[2].mark === 'x' && gameBoard[5].mark === 'x' && gameBoard[8] === 'x') || 
            (gameBoard[0].mark === 'x' && gameBoard[4].mark === 'x' && gameBoard[8] === 'x') || 
            (gameBoard[2].mark === 'x' && gameBoard[4].mark === 'x' && gameBoard[6] === 'x')){
                // x wins

            } else if((gameBoard[0].mark === 'o' && gameBoard[1].mark === 'o' && gameBoard[2] === 'o') || 
            (gameBoard[3].mark === 'o' && gameBoard[4].mark === 'o' && gameBoard[5] === 'o') ||
            (gameBoard[6].mark === 'o' && gameBoard[7].mark === 'o' && gameBoard[8] === 'o') ||
            (gameBoard[0].mark === 'o' && gameBoard[3].mark === 'o' && gameBoard[6] === 'o') || 
            (gameBoard[1].mark === 'o' && gameBoard[4].mark === 'o' && gameBoard[7] === 'o') || 
            (gameBoard[2].mark === 'o' && gameBoard[5].mark === 'o' && gameBoard[8] === 'o') || 
            (gameBoard[0].mark === 'o' && gameBoard[4].mark === 'o' && gameBoard[8] === 'o') || 
            (gameBoard[2].mark === 'o' && gameBoard[4].mark === 'o' && gameBoard[6] === 'o')){
                // o wins
                
            }
    };

})();