function solve(n,k) {
    let result=[1];
    let sum = 0;
    for (let i = 0; i < n-1; i++) {
        for (let i = result.length-1; i>= result.length-k; i--) {
            if(i<0){
                break;
            }
            else {
                sum += result[i];
            }
        }
        result.push(sum);
        sum=0;
    }
    console.log(result.join(', '));
}