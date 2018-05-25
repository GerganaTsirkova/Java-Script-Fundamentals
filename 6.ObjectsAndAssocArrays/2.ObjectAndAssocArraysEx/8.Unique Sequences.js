function uniqueSequences(arr) {
    let mySet = new Map();
    for (let line of arr) {
        let input = JSON.parse(line).sort((a,b)=>b-a);
        let current = `[${input.join(', ')}]`;
        if(!mySet.has(input)){
            mySet.set(current,0);
        }
    }
    let result = [...mySet.keys()].sort((a,b)=>a.length-b.length);
    for (let a of result) {
        console.log(a);
    }
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);