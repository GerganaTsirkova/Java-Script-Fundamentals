function solve(inputString) {
    'use strict';
    let arr = [];
    for (let line of inputString) {
        arr.push(Number(line));
    }
    let numbers = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let controlNum = 0;
        let tempNumber = 1;
        if ((num >= 0) && (num <= 9)) {
            for (let j = 0; j < num; j++) {
                counter++;
                tempNumber *= Number(arr[i + counter]);
            }
            numbers.push(tempNumber);
            counter = 0;
        }
    }
    let maximum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if(maximum<numbers[i]){
            maximum = numbers[i];
        }
    }
    console.log(maximum);
}


    solve(['100',
'200',
'2',
'3',
'2',
'3',
'2',
'1',
'1']);