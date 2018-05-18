function isMagic(matrix) {
    let isMagic = true;
    let arr = [];
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            sum += Number(matrix[i][j]);
        }
        arr.push(sum);
        sum = 0;
    }
    let toCompare = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(toCompare!==arr[i]){
            isMagic=false;
        }
    }
    console.log(isMagic);
}
isMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
