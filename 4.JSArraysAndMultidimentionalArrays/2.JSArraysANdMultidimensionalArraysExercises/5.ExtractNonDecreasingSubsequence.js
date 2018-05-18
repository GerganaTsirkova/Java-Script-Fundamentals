function solve(arr) {
    let resultArr = new Array();
    resultArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>=arr[i-1]){
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join('\n'));
}
solve([1,3,8,4,10,12,3,2,24]);