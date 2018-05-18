function split(str,delimeter) {
    let result = str.split(delimeter);
    console.log(result.join('\n'));
}
split('One-Two-Three-Four-Five', '-');