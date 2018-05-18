function expSplit(text) {
    let arr = text.split(/[\s();.,]+/);
    console.log(arr.join('\n'));
}
expSplit('let sum = 1 + 2;if(sum > 2) {\tconsole.log(sum);}');