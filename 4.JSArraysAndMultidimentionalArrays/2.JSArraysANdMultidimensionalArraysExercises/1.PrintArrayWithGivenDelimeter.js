function solve(arr) {
    let del = arr.pop(arr[arr.length-1]);
    console.log(arr.join(`${del}`));
}
solve(['a', 'b', 'c', 'd', '!']);