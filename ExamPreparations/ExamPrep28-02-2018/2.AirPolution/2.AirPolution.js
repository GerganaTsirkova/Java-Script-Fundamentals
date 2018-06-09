function solve(arrMatrix, arrCommands) {
    let matrix = [];
    let result = [];
    for (let i = 0; i < arrMatrix.length; i++) {
        let line = arrMatrix[i].split(' ').map(Number);
        matrix.push(line);
    }
    for (let input of arrCommands) {
        let command = input.split(' ');
        if (command[0] === 'breeze') {
            let row = Number(command[1]);
            if ((row >= 0) && (row <= 5)) {
                for (let i = 0; i < 5; i++) {
                    matrix[row][i] -= 15;
                    if(matrix[row][i]<0){
                        matrix[row][i]=0;
                    }
                }
            }
        }
        else if (command[0] === 'gale') {
            let col = Number(command[1]);
            if ((col >= 0) && (col <= 5)) {
                for (let i = 0; i < 5; i++) {
                    matrix[i][col] -= 20;
                    if(matrix[i][col]<0){
                        matrix[i][col]=0;
                    }
                }
            }

        }
        else if (command[0] === 'smog') {
            let value = Number(command[1]);
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += value;
                }
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                let str = `[${row}-${col}]`;
                result.push(str);
            }
        }
    }

    if (result.length === 0) {
        console.log('No polluted areas');
    }
    else {
        console.log(`Polluted areas: ${result.join(', ')}`);
    }

}

solve(['5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'],
    ['smog 11',
        'gale 3',
        'breeze 1',
        'smog 2']);