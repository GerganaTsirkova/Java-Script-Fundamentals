function calculator(a,b,ch) {
    let calc = function doCalculation(a,b,ch) {
        return ch(a,b);
    };
    let sum = function (a,b) {
        return a+b;
    };
    let sub = function (a,b) {
        return a-b;
    };
    let div = function (a,b) {
        return a/b;
    };
    let mul = function (a,b) {
        return a*b;
    };
    switch (ch) {
        case '+':
            return calc(a, b, sum);
        case '-':
            return calc(a, b, sub);
        case '*':
            return calc(a, b, mul);
        case '/':
            return calc(a, b, div);
    }
}

console.log(calculator(2, 4, '+'));