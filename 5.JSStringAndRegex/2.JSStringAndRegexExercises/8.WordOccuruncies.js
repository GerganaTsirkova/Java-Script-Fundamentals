function occurrences(str,word) {
    //let count = str.match(new RegExp(word,'gi')||[]).length; //One line solve
    let count = 0;
    let pattern = '\\b'+word+'\\b';
    let regex = new RegExp(pattern,'gi');
    let m = regex.exec(str);
    while (m){
        count++;
        m=regex.exec(str);
    }
    console.log(count);
}
occurrences('There was one. Therefore I bought it. I wouldn�t buy it otherwise.',
    'there');