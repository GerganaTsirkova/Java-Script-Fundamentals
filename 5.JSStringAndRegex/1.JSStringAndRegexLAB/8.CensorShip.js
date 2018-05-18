function censorship(text, arr) {
    for (let str of arr) {
        let dashes = '-'.repeat(str.length);
        while (text.indexOf(str) > -1) {
            text = text.replace(str, dashes);
        }
    }
    console.log(text);
}
censorship('roses are red, violets are blue', [', violets are', 'red'])