function  stringOfNumbers(input) {
    let result='';
    for (let i = 1; i <= Number(input); i++) {
        result += i;

    }
    console.log(result);
}
stringOfNumbers(11);