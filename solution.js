const QUEENS_NUMBER = 50;

function generateMatrix(number) {
    let matrix = [];

    for (let i = 0; i < number; i++) {
        matrix[i] = [];
        for (let j = 0; j < number; j++)
            matrix[i][j] = 0;
    }

    return matrix;
}

let matrix = generateMatrix(QUEENS_NUMBER);

// check queen positioning
function verifyPosition(matrix, row, column) {

    // left
    for (let i = 0; i < column; i++) {
        if(matrix[row][i] === 1) return false;
    }

    // left-up & right-down
    for (let i = row, j = column; i >= 0 && j >= 0; j--, i--)
        if(matrix[i][j] === 1) return false;

    // left-down & right-up
    for (let i = row, j = column; i < QUEENS_NUMBER && j >= 0; i++, j--)
        if(matrix[i][j] === 1) return false;

    return true;
}


function putQueens(matrix, position) {

    if (position === QUEENS_NUMBER) {

        console.log(matrix.map(m => m.join(' ')));
        return;
    };

    for (let i = 0; i < QUEENS_NUMBER; i++) {
        if(verifyPosition(matrix, i, position)) {
           matrix[i][position] = 1;

           putQueens(matrix, position + 1);

           matrix[i][position] = 0;
        }
    }

    return;
}

putQueens(matrix, 0);
