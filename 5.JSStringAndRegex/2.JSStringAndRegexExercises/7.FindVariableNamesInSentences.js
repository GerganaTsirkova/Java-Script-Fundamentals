function findName(str) {
    let names = [];
    let pattern = /( |^)_([A-Za-z0-9]+)/g;
    let regex = new RegExp(pattern,'g');
    let match = regex.exec(str);
    while (match) {
        names.push(match[2]);
        match = regex.exec(str);
    }
    console.log(names.join(','));
}
findName('__invalidVariable _evenMoreInvalidVariable_ _validVariable');