function solve(arr) {
    let times = arr.pop();
    for (let i = 0; i < times%arr.length; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', 15]);