function solve(arr) {
    let mapBottles = new Map;
    let mapFruits = new Map;
    for (let line of arr) {
        let input = line.split(' => ');
        let nameFruit = input[0];
        let quantity = Number(input[1]);
        if(!mapFruits.has(nameFruit)){
            mapFruits.set(nameFruit,0);
        }
        let oldQuantity = mapFruits.get(nameFruit);
        mapFruits.set(nameFruit,quantity+oldQuantity);
        if(mapFruits.get(nameFruit)>=1000) {
            let bottlesToAdd = Math.floor(mapFruits.get(nameFruit)/1000);
            if (!mapBottles.has(nameFruit)) {
                mapBottles.set(nameFruit, 0);
            }
            let oldBottles = mapBottles.get(nameFruit);
            mapBottles.set(nameFruit, oldBottles +bottlesToAdd);
            //put new quantity in the mapFruits
            let restQuantityOfFruits = mapFruits.get(nameFruit)%1000;
            mapFruits.set(nameFruit,restQuantityOfFruits);
        }
    }
    for (let [fruit,bottles] of mapBottles) {
        console.log(`${fruit} => ${bottles}`)
    }
}
solve(['Peach => 1432',
'Peach => 600']);