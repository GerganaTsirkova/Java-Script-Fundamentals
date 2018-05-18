function checker(num) {
    let prime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if(num<2){
        console.log('false')
    }
    else {
        console.log(prime);
    }

}
checker(2)