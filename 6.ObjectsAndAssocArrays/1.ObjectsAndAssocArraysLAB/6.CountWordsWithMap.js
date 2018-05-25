function solve(arr) {
    let text = arr[0].toLowerCase();
    let array = text.split(/[^A-Za-z_]+/g).filter(e=>e !=='');
    let wordsCount = new Map;
    for (let word of array) {
        if(!wordsCount.has(word)){
            wordsCount.set(word,1);
        }
        else {
            wordsCount.set(word,wordsCount.get(word)+1);
        }
    }
    let result =Array.from(wordsCount.keys()).sort();
    for (let element of result) {
        console.log(`'${element}' -> ${wordsCount.get(element)} times`);
    }

}
solve(['Far too slow, you\'re far too slow.'])