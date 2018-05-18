function triangle(n) {
    let ch = '$';
    for (let i = 1; i <= n; i++) {
        console.log(ch.repeat(i))
    }
}
triangle(10)