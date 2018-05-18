function solve(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(x => max = Math.max(max,x)));
    console.log(max);
}
solve([[20, 50, 10], [8, 33, 145]]);