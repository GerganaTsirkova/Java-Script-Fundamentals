function square(num=5) {
    for (let i = 0; i < num; i++) {
        printStars(num);
    }
    function printStars(n) {
        console.log('* '.repeat(n));
    }
}

square(10)