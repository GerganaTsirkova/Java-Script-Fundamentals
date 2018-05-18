function escaping(arr) {
    let result = '<ul>\n';
    for (let str of arr) {
        result += ' '+'<li>'+ escapeCharacters(str)+'</li>\n';
    }
    result += '</ul>';
    console.log(result);

    function escapeCharacters(str) {
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;');
    }
}
escaping(['<b>unescaped text</b>', 'normal text']);