function solve(arr) {
    let map = new Map;
    for (let input of arr) {
        let [brand,model,number] = input.split(' | ');
        number = Number(number);
        if(!map.has(brand)){
            map.set(brand,new Map);
        }
        let innerMap = map.get(brand);
        if(!innerMap.has(model)){
            innerMap.set(model,number);
        }
        else {
            let oldNumber = Number(map.get(brand).get(model));
            innerMap.set(model,oldNumber+number);
        }
        map.set(brand,innerMap);
    }
    for (let [brand, info] of map) {
        console.log(brand);
        for (let [model,quantity] of info) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);