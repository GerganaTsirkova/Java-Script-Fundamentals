function solve(arr) {
    let mapData = new Map;
    for (let input of arr) {
        let [product,price] = input.split(' : ');
        let ch = product[0];
        if(!mapData.has(ch)){
            mapData.set(ch,new Map);
        }
        let inner = mapData.get(ch);
        inner.set(product,price);
        mapData.set(ch,inner);
    }
    let sorted = [...mapData.entries()].sort(sortAlphabetically);
    for (let [initial,innerMap] of sorted) {
        console.log(initial);
        let sortedInner = [...innerMap.entries()].sort(sortAlphabetically);
        for (let [product,price] of sortedInner) {
            console.log(`  ${product}: ${price}`)
        }
    }
    function sortAlphabetically (a,b) {
        return a[0].localeCompare(b[0]);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])