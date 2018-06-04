function solve(num) {
    let field = Number(num);
    let dayCounter = 0;
    let leave = 0;
    let workersConsume = 26;
    let total = 0;
    while (field >= 100) {
        dayCounter++;
        total += field - workersConsume;
        field -= 10;
    }
    if (dayCounter > 0) {
        total -= 26;
    }
    console.log(dayCounter);
    console.log(total);
}

solve('200');