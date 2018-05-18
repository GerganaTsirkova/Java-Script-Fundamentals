function solve(arr) {
    let newArr = [];
    for (let element of arr) {
        if(Number(element)<0){
            newArr.unshift(element);
        }
        else {
            newArr.push(element);
        }
    }
    for (let e of newArr) {
        console.log(e);
    }
}
solve([3, -2, 0, -1])