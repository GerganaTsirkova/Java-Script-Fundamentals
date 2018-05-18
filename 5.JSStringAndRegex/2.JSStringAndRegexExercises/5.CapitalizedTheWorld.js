function capitalize(str) {
    let string = [];
    string = str.split(' ');
    let resultString='';
    for (let i = 0; i < string.length; i++) {
        let word = string[i];
        resultString += word[0].toUpperCase()+word.substring(1).toLowerCase()+' ';
    }
    console.log(resultString);
}
capitalize('Capitalize these words');