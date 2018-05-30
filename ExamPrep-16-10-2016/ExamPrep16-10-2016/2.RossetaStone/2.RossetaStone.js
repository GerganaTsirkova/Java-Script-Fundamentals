function solve(arr) {
    let rowsTemplate = Number(arr[0]);
    let templateMatrix = [];
    let counter = 0;
    for (let i = 1; i <= rowsTemplate; i++) {
        counter++;
        templateMatrix.push(arr[i].split(' ').map(Number));
    }
    counter = 0;
    let messageMatrix = [];
    for (let i = rowsTemplate + 1; i < arr.length; i++) {
        counter++;
        messageMatrix.push(arr[i].split(' ').map(Number));
    }
    //fill the overlap matrix:
    let matrix = messageMatrix;
    let outputMessage = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] += templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let char = '';
            if (matrix[i][j] != 0) {
                let num = matrix[i][j] % 27;
                matrix[i][j] = String.fromCharCode(num + 64);
                outputMessage += matrix[i][j];
            }
            else {
                matrix[i][j] = ' ';
                outputMessage += matrix[i][j];
            }

        }
    }
    outputMessage = outputMessage.replace(/@/g,' ');
    console.log(outputMessage);
}

solve(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']
)