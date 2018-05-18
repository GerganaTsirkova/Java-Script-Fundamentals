function matchWords(text) {
    let pattern = /\w+/gm;
    let regex = new RegExp(pattern,'g');
    let result = text.match(regex).join('|');
    console.log(result);
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');