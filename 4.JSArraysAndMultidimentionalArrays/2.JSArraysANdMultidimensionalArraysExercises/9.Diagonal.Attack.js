function attack(arr) {
    let matrix = [];
    let arrStrings = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    //get first
    let counter=0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            firstDiagonal += matrix[i][j+counter];
            let temp = `${i}-${j+counter}`;
            arrStrings.push(temp);
            temp='';
            counter++;
            break;
        }
    }
    counter =0 ;
    //get second
    for (let i = 0; i<matrix.length ; i++) {
        for (let j = matrix.length-1-counter; j >=0; j--) {
            secondDiagonal += matrix[i][j];
            let temp = `${i}-${j}`;
            counter++;
            arrStrings.push(temp);
            temp='';
            break;
        }
    }
    counter=0;
    if(firstDiagonal===secondDiagonal){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let tempString = `${i}-${j}`;
                if(arrStrings.indexOf(tempString) === -1){
                    matrix[i][j]=firstDiagonal;
                }
                tempString='';
            }
        }
    }
    console.log(matrix.map(e=>e.join(' ')).join('\n'));
}
attack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)