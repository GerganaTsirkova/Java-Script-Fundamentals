function uniqueWords(arr) {
    let setUniques = new Set();
    for (let arrElement of arr) {
        let str = arrElement
            .split(/[\W+]/)
            .filter(e=>e !=='')
            .map(e=>e.toLowerCase())
            .forEach(e=>setUniques.add(e));
    }
    console.log([...setUniques].join(', '));
}