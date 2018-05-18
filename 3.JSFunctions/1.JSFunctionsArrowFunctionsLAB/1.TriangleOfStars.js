function triangle(num){
    for (let i = 0; i <= num; i++) {
        printStar(i);
    }
    for (let i = num-1; i >= 1; i--) {
        printStar(i)
    }
    function printStar(n){
        console.log('*'.repeat(n));
    }
}

triangle(5)