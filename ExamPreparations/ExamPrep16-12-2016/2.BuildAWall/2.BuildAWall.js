function solve(input) {
    let arr = [];
    for (let element of input) {
        arr.push(Number(element));
    }
    let result = [];
    let concrete = 0;
    let dayCounter = 0;
    while (true) {
        dayCounter++;
        let currentCounter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i]++;
                currentCounter += 195;
            }
        }
        result.push(currentCounter);
        concrete += currentCounter;
        let isReady = true;
        for (let arrElement of arr) {
            if (arrElement !== 30) {
                isReady = false;
            }
        }
        if (isReady) {
            break;
        }
    }
    console.log(result.join(', '));
    console.log(`${concrete * 1900} pesos`);
}

solve(['17', '22', '17', '19', '17']);