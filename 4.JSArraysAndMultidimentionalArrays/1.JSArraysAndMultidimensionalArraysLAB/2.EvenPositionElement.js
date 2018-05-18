function solve(arr) {
    console.log(arr.filter((e, i) => i % 2 == 0).join(' '));
}
solve([2,2,3,3,3,4,4])