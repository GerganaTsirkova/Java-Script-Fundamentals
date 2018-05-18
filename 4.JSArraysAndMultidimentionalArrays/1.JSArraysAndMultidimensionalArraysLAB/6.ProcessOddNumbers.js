function solve(arr) {
    console.log(arr.filter((e, i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse()
        .join(' '));;

}
solve([3, 0, 10, 4, 7, 3])