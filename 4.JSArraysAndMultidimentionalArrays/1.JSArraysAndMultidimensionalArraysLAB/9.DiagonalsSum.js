function solve(matrix) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += Number(matrix[i][i]);
        sumSecondDiagonal += Number(matrix[i][matrix.length - 1 - i]);
    }
    console.log(`${sumFirstDiagonal} ${sumSecondDiagonal}`)
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])