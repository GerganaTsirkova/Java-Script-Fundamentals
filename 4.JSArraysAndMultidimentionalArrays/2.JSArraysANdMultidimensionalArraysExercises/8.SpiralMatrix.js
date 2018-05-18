function spiral(row, col) {
    let matrix = makeMatrixWithZeroes(row, col);
    matrix = fillWithNumbers(row,col,matrix);
    console.log(matrix.map(e => e.join(' ')).join('\n'));

    function makeMatrixWithZeroes(row, col) {
        let matrix = [];
        for (let i = 0; i < row; i++) {
            matrix.push('0'.repeat(col).split('').map(Number))
        }
        return matrix;
    }

    function fillWithNumbers(row,col,matrix) {
        let num = 1;
        let targetNum = row*col;
        let currentRow = 0;
        let currentCol = 0;
        let counter = 0;
        //the first WHOLE line
        for (let i = 0; i < col; i++) {
            matrix[currentRow][currentCol++]=num++;
        }
        while (num < targetNum) {
            currentCol--;
            currentRow++;
            //lineDownWards
            for (let i = 0; i < col-1-counter; i++) {
                matrix[currentRow++][currentCol]=num++;
            }
            currentRow--;
            currentCol--;
            //line down
            for (let i = 0; i < col-1-counter; i++) {
                matrix[currentRow][currentCol--]=num++;
            }
            currentCol++;
            currentRow--;
            counter++;
            row--;
            col--;
            //line upWards
            for (let i = 0; i < row-counter; i++) {
                matrix[currentRow--][currentCol]=num++;
            }
            currentCol++;
            currentRow++;
            //line upper
            for (let i = 0; i < col-counter; i++) {
                matrix[currentRow][currentCol++]=num++;
            }
        }
        return matrix;
    }
}

spiral(6,6);