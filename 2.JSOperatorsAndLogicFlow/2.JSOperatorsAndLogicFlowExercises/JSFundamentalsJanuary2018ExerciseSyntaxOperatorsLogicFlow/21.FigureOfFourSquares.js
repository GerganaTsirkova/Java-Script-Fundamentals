function figure(n) {
    let minus = '-';
    let space = ' ';
    if(n%2==0){
        for (let i = 1; i <n; i++) {
            if((i===1)||(i===n-1)||(i===n/2)){
                console.log(`+${minus.repeat(n-2)}+${minus.repeat(n-2)}+`);
            }
            else {
                console.log(`|${space.repeat(n-2)}|${space.repeat(n-2)}|`);
            }
        }
    }
    else {
        for (let i = 1; i <=n; i++) {
            if((i===1)||(i===n)||(i===Math.ceil(n/2))){
                console.log(`+${minus.repeat(n-2)}+${minus.repeat(n-2)}+`);
            }
            else {
                console.log(`|${space.repeat(n-2)}|${space.repeat(n-2)}|`);
            }
        }
    }
}
figure(5)